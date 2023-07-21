-- Tabela forma_pagamento
CREATE TABLE forma_pagamento (
  cod INTEGER PRIMARY KEY,
  desc VARCHAR NOT NULL
);

-- Tabela status_agendamento
CREATE TABLE status_agendamento (
  cod INTEGER PRIMARY KEY,
  desc VARCHAR NOT NULL
);

-- Tabela tipo_conta
CREATE TABLE tipo_conta (
  cod INTEGER PRIMARY KEY,
  desc VARCHAR NOT NULL
);

-- Tabela cliente
CREATE TABLE cliente (
  cod INTEGER PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  nome VARCHAR NOT NULL,
  tel VARCHAR NOT NULL,
  cpf VARCHAR UNIQUE,
  profissao VARCHAR,
  cod_est_civil INTEGER NOT NULL,
  ender VARCHAR,
  grau_inst VARCHAR,
  nacionalidade INTEGER NOT NULL,
  data_nasc DATE,
  data_criacao DATE
);

-- Tabela nacionalidade
CREATE TABLE nacionalidade (
  cod INTEGER PRIMARY KEY,
  desc VARCHAR NOT NULL
);

-- Tabela estado_civil
CREATE TABLE estado_civil (
  cod INTEGER PRIMARY KEY,
  desc VARCHAR NOT NULL
);

-- Tabela agendamento
CREATE TABLE agendamento (
  cod INTEGER PRIMARY KEY,
  cod_cli INTEGER NOT NULL,
  cod_serv INTEGER,
  data_solicitacao DATE NOT NULL,
  data_consulta DATE NOT NULL,
  obj VARCHAR NOT NULL,
  cod_status INTEGER NOT NULL,
  FOREIGN KEY (cod_cli) REFERENCES cliente (cod),
  FOREIGN KEY (cod_serv) REFERENCES servico (cod),
  FOREIGN KEY (cod_status) REFERENCES status_agendamento (cod)
);

-- Tabela servico
CREATE TABLE servico (
  cod INTEGER PRIMARY KEY,
  cod_tipo_serv INTEGER NOT NULL,
  preco FLOAT NOT NULL,
  desc VARCHAR NOT NULL,
  FOREIGN KEY (cod_tipo_serv) REFERENCES tipo_servico (cod)
);

-- Tabela tipo_servico
CREATE TABLE tipo_servico (
  cod INTEGER PRIMARY KEY,
  desc VARCHAR NOT NULL
);

-- Tabela pacote
CREATE TABLE pacote (
  cod INTEGER PRIMARY KEY,
  cod_cli INTEGER,
  valor FLOAT NOT NULL,
  desc VARCHAR NOT NULL,
  qt_secoes INTEGER NOT NULL,
  FOREIGN KEY (cod_cli) REFERENCES cliente (cod)
);

-- Tabela pacote_servico
CREATE TABLE pacote_servico (
  cod INTEGER PRIMARY KEY,
  cod_serv INTEGER NOT NULL,
  cod_pac INTEGER NOT NULL,
  FOREIGN KEY (cod_serv) REFERENCES servico (cod),
  FOREIGN KEY (cod_pac) REFERENCES pacote (cod)
);

-- Tabela anamnese
CREATE TABLE anamnese (
  cod INTEGER PRIMARY KEY,
  cod_cli INTEGER NOT NULL,
  tipo VARCHAR NOT NULL,
  exam_psic VARCHAR NOT NULL,
  tratamento VARCHAR NOT NULL,
  hist_doenca VARCHAR NOT NULL,
  obs VARCHAR,
  FOREIGN KEY (cod_cli) REFERENCES cliente (cod)
);

-- Tabela contas
CREATE TABLE contas (
  cod INTEGER PRIMARY KEY,
  data_venc DATE NOT NULL,
  data_paga DATE,
  valor FLOAT NOT NULL,
  descricao VARCHAR NOT NULL,
  cod_forma_pag INTEGER NOT NULL,
  cod_tipo_conta INTEGER NOT NULL,
  FOREIGN KEY (cod_forma_pag) REFERENCES forma_pagamento (cod),
  FOREIGN KEY (cod_tipo_conta) REFERENCES tipo_conta (cod)
);

-- Tabela recebimentos
CREATE TABLE recebimentos (
  cod INTEGER PRIMARY KEY,
  cod_ag INTEGER NOT NULL,
  valor FLOAT NOT NULL,
  data_receb DATE NOT NULL,
  cod_forma_pag INTEGER NOT NULL,
  FOREIGN KEY (cod_ag) REFERENCES agendamento (cod),
  FOREIGN KEY (cod_forma_pag) REFERENCES forma_pagamento (cod)
);
