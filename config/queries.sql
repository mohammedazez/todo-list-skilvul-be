CREATE TABLE todos(
   id INT NOT NULL AUTO_INCREMENT,
   activity VARCHAR(100) NOT NULL,
   status boolean NOT NULL DEFAULT 0,
   createdAt TIMESTAMP,
   updatedAt TIMESTAMP,
   PRIMARY KEY (id)
);