-- Create Database --
CREATE DATABASE skilvulbookstore;
-- CREATE TABLE --
USE skilvulbookstore;
CREATE TABLE penerbit(
    id INT(10) NOT NULL AUTO_INCREMENT,
    nama VARCHAR(50) NULL,
    kota VARCHAR(50) NULL,
    CONSTRAINT pk_penerbit PRIMARY KEY (id)
    );
CREATE TABLE penulis(
    id INT(10) NOT NULL AUTO_INCREMENT,
    nama VARCHAR(50) NULL,
    kota VARCHAR(50) NULL,
    CONSTRAINT pk_penulis PRIMARY KEY (id)   
);
CREATE TABLE buku(
    id INT(10) NOT NULL AUTO_INCREMENT,
    ISBN VARCHAR(50) NULL,
    judul VARCHAR(50) NULL,
    harga INT(10) NULL,
    stock INT(10) NULL,
    penulis INT,
    penerbit INT,
    FOREIGN KEY (penulis) REFERENCES penulis(id),
    FOREIGN KEY (penerbit) REFERENCES penerbit(id),
    CONSTRAINT pk_penulis PRIMARY KEY (id)  
);
-- Insert Data --
INSERT INTO penerbit(nama, kota)
VALUES('Erlangga', 'Jakarta'), ('Gramedia', 'Tangerang'), ('Mizan', 'Bandung'), ('Yudhistira', 'Solo');
INSERT INTO penulis(nama, kota)
VALUES('Gita Savitri', 'Palembang'), ('Andrea Hirata', 'Gantung'), ('Tere Liye', 'Lahat'), ('Yudhira', 'Solo');
INSERT INTO buku(ISBN, judul, harga, stock, penulis, penerbit)
VALUES('978-979-107-882-5', 'Rentang Kisah', 157000, 20, 1, 3), ('	978-602-867-404-1', 'Laskar Pelangi', 198000, 10, 2, 2), ('978-979-338-125-1', 'Matahari', 127000, 4, 3, 2), ('	979-896-678-3', 'Politik Pengamanan Politik Zaman Kolonial', 87000, 40, 4, 4), ('979-896-636-8', 'Biografi Gus Dur', 157000, 20, 4, 4);
-- Inner Join table buku penerbit--
SELECT * FROM buku INNER JOIN penerbit ON penerbit.id=buku.penerbit;
-- Left Join table buku penerbit--
SELECT * FROM buku LEFT JOIN penerbit ON penerbit.id=buku.penerbit;
-- Right Join table buku penerbit--
SELECT * FROM buku RIGHT JOIN penerbit ON penerbit.id=buku.penerbit;
-- MAX dari column harga pada table book yang memiliki jumlah stok buku di bawah 10 --
SELECT MAX(harga) FROM buku WHERE stock <10;
-- MIN dari column harga pada table buku --
SELECT MIN(harga) FROM buku;
-- COUNT untuk melihat list data dengan kondisi harga buku di bawah 100000 --
SELECT COUNT(id) as total FROM buku WHERE harga<100000;