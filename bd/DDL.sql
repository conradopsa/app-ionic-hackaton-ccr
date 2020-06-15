create schema CCR;

use CCR;

create table usuario (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,    
    nome varchar(255) NOT NULL
);

-- Dicas de saude
create table dicas_saude(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    titulo varchar(255),
    texto text,
    dataPostagem date
);

-- Tabelas agendamentos
create table consulta(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    nomeMedico varchar(255), -- No futuro será possivel modelar médicos no banco de dados
    dataHoraAgendamento datetime,
    tipo varchar(1), -- presencial ou online (P ou O)
    enderecoAgendamento text
);

create table agendamento(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idUsuario int,
    idConsulta int,
	FOREIGN KEY (idUsuario) REFERENCES usuario (id),
    FOREIGN KEY (idConsulta) REFERENCES consulta (id)
);

-- Tabelas para questionários e diagnosticos virtuais
create table possivel_diagnostico(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    textoDiagnostico text
);

create table pergunta (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    textoPergunta text   
);

create table resposta_usuario (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    resposta varchar(255),
    dataResposta date NOT NULL,
    idUsuario int NOT NULL,
    idDiagnostico int,
    idPergunta int NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES usuario (id),
    FOREIGN KEY (idDiagnostico) REFERENCES possivel_diagnostico (id),
	FOREIGN KEY (idPergunta) REFERENCES pergunta (id)
);

-- consultas em aberto (não agendadas)
create view consultas_em_aberto as
select c.*
from consulta c 
	left join agendamento a on (c.id = a.idConsulta)
where a.idUsuario is null;

-- consultas marcadas
create view consultas_marcadas as
select c.*
from consulta c 
	left join agendamento a on (c.id = a.idConsulta)
where a.idUsuario is not null;