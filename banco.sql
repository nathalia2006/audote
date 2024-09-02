create database audote;

USE audote;

-- Cadastro e login
CREATE TABLE usuario(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

-- Cadastro do animal
CREATE TABLE cadastro_animais(
	id 	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(250) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    descricao_animal TEXT NOT NULL,
    foto_animal TEXT NOT NULL
);

select * from usuario;

select * from cadastro_animais;