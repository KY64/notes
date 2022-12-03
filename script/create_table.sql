PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS post ( id VARCHAR(36) PRIMARY KEY,
                                  slug VARCHAR(100) UNIQUE NOT NULL,
                                  title VARCHAR(100) UNIQUE NOT NULL,
                                  description TEXT NOT NULL,
                                  create_date VARCHAR(25) NOT NULL
                                );

CREATE TABLE IF NOT EXISTS post_tag ( id VARCHAR(36) PRIMARY KEY,
                                      slug VARCHAR(100) REFERENCES post(slug),
                                      tag VARCHAR(40) NOT NULL
                                    );
