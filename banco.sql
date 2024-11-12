-- Criação do banco de dados "audote"
CREATE DATABASE audote;

-- Seleciona o banco de dados "audote" para uso
USE audote;

-- Criação da tabela "usuario" para armazenar informações de usuários
CREATE TABLE usuario(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, -- A coluna "id" é uma chave primária autoincrementada
    nome VARCHAR(255) NOT NULL,  -- Nome do usuário
    email VARCHAR(255) NOT NULL UNIQUE,  -- Email do usuário (único para garantir que não haja emails duplicados)
    senha VARCHAR(255) NOT NULL  -- Senha do usuário
);

-- Criação da tabela "cadastro_animais" para armazenar informações dos animais cadastrados
CREATE TABLE cadastro_animais(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  -- A coluna "id" é uma chave primária autoincrementada
    email VARCHAR(250) NOT NULL,  -- Email do dono do animal
    senha VARCHAR(255) NOT NULL,  -- Senha do dono do animal
    nome_animal VARCHAR(255) NOT NULL,  -- Nome do animal
    telefone_animal VARCHAR(255) NOT NULL,  -- Telefone de contato do dono do animal
    descricao_animal TEXT NOT NULL,  -- Descrição do animal
    foto_animal TEXT NOT NULL  -- Caminho ou nome do arquivo de imagem do animal
);

-- Seleciona todos os registros da tabela "usuario" para exibir os dados cadastrados
select * from usuario;

-- Seleciona todos os registros da tabela "cadastro_animais" para exibir os dados cadastrados
select * from cadastro_animais;

-- Cadastro de um animal de teste na tabela "cadastro_animais"
INSERT INTO cadastro_animais(email, senha, nome_animal, telefone_animal, descricao_animal, foto_animal)
VALUES('nathi.orso09@gmail.com', '123', 'teste', '51 99999999', 'cachorra', '1730327692613_images.jpg');