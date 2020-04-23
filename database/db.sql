-- creating the database
CREATE DATABASE expressjs-cruddb;

-- using de database
use expressjs;

-- creating a table
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- to show all tables
SHOW TABLES;

-- to describe the table
describe customer