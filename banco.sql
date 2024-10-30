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
    nome_animal VARCHAR(255) NOT NULL, 
    telefone_animal VARCHAR(255) NOT NULL,
    descricao_animal TEXT NOT NULL,
    foto_animal TEXT NOT NULL
);
select * from usuario;

select * from cadastro_animais;

-- cadastro teste:

INSERT INTO cadastro_animais(email, senha, nome_animal, telefone_animal, descricao_animal, foto_animal) VALUES('nathi.orso09@gmail.com', '123', 'teste', '51 99999999', 'cachorra', '1730327692613_images.jpg');