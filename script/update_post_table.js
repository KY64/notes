const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const sqlite3 = require("sqlite3").verbose();
const asciidoc = require("asciidoctor")();

const { ASCIIDOC_FORMAT, POST_DIR, DATABASE } = require("../lib/constant");
const db = new sqlite3.Database(DATABASE);

db.serialize(() => {
  // Refresh DB
  db.run("DELETE FROM post");
  db.run("DELETE FROM post_tag");

  for (const file of fs.readdirSync(POST_DIR)) {
    const filepath = path.join(POST_DIR, file);
    const slug = path.basename(file, ASCIIDOC_FORMAT);
    const doc = asciidoc.loadFile(filepath);
    const { create_date, description, tag } = doc.getAttributes();

    let statement = db.prepare(`INSERT INTO post (id, 
                                                  slug,
                                                  title,
                                                  description,
                                                  create_date)
                                VALUES (?, ?, ?, ?, ?)`);
    statement.run(
      crypto.randomUUID(),
      slug,
      doc.getDocumentTitle(),
      description,
      create_date
    );
    statement.finalize();

    statement = db.prepare(`INSERT INTO post_tag
                            VALUES (?, ?, ?)`);

    for (const value of tag.split(",")) {
      statement.run(crypto.randomUUID(), slug, value);
    }
    statement.finalize();
  }
});

db.close();
