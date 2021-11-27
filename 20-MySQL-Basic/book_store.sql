-- Show Database --
SHOW DATABASES;
-- Create Database --
CREATE DATABASE bookstore;
-- USE database bookstore --
USE bookstore;
-- SHOW seluruh table yang ada pada database bookstore --
SHOW TABLES;
-- Create table books --
CREATE TABLE books(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    author1 VARCHAR(100) NOT NULL,
    author2 VARCHAR(100),
    author3 VARCHAR(100),
    title VARCHAR(100),
    description TEXT,
    place_sell CHAR(3),
    stock INTEGER DEFAULT 0,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- Update Column --
ALTER TABLE books
ADD COLUMN price INTEGER DEFAULT 0,
ADD COLUMN status ENUM('available', 'out of stock', 'limited'),
DROP place_sell
;
-- Insert Data --
INSERT INTO books(id, author1, author2, author3, title, description, stock, creation_date, price, status)
VALUES
(1, 'Tsana Allya', 'Nakamura Sachiko', '', 'Gee and Ann', 'Novel Genre Drama', 34, ('2017-08-01 00:00:01'), 89000, 'available'),
(2, 'Andrea Hirata', '', '', 'Laskar Pelangi', 'Novel fiksi', 10, ('2005-12-12 13:00:58'), 120000, 'limited'),
(3, 'Kurumi Inui', '', '', 'Reapeat: WHEEL OF FORTUNE','Novel Fantasi', 0, ('2004-08-12 09:00:59'), 130000, 'out of stock')
;
-- Select all from books --
SELECT * FROM books;
-- Select alias --
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;
-- Select where id --
SELECT * FROM books WHERE id=3;
-- Select where AND --
SELECT * FROM books WHERE author3='' AND stock>5;
-- Select where OR --
SELECT * FROM books WHERE stock<5 OR author2!='';
-- Select where not --
SELECT * FROM books WHERE author2!='';
-- ORDER by ID --
SELECT * FROM books ORDER BY id ASC;
-- Limit --
SELECT * FROM books LIMIT 2;
-- Update --
UPDATE books
SET author1='Tsana A', price=88900
WHERE id=1;
-- Delete --
DELETE FROM books WHERE id=2;