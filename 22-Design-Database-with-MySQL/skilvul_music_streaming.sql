-- Create Database
CREATE DATABASE skilvul_music_streaming;
-- CREATE TABLES
USE skilvul_music_streaming;
CREATE TABLE User (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE Singer(
    singer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL
);
CREATE TABLE Album(
    album_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    singer_id INT NOT NULL,
    CONSTRAINT fk_singer_id 
        FOREIGN KEY(singer_id)
        REFERENCES Singer(singer_id)
);
CREATE TABLE Track(
    track_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    singer_id INT NOT NULL,
    album_id INT NOT NULL,
    CONSTRAINT fk_singer_singer_id FOREIGN KEY(singer_id) REFERENCES Singer(singer_id),
    CONSTRAINT fk_albums_album_id FOREIGN KEY(album_id) REFERENCES Album(album_id)
);
CREATE TABLE Playlist(
    playlist_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    track_id INT NOT NULL,
    CONSTRAINT fk_users_user_id FOREIGN KEY(user_id) REFERENCES User(user_id)
);
CREATE TABLE Track_Playlist(
    track_id INT NOT NULL,
    playlist_id INT NOT NULL,
    CONSTRAINT fk_track_track_id FOREIGN KEY(track_id) REFERENCES Track(track_id),
    CONSTRAINT fk_playlist_playlist_id FOREIGN KEY(playlist_id) REFERENCES Playlist(playlist_id)
);