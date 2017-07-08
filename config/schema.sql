CREATE DATABASE PROJECT;

USE PROJECT;

CREATE TABLE Users (
idUsers int(11) NOT NULL AUTO_INCREMENT,
Name varchar(100) NOT NULL,
PRIMARY KEY (idUsers),
UNIQUE KEY idUsers_UNIQUE (idUsers),
UNIQUE KEY Name_UNIQUE (Name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Items (
idItems int(11) NOT NULL AUTO_INCREMENT,
Name varchar(225) NOT NULL,
Description varchar(225) NOT NULL,
Quantity int(11) NOT NULL,
Donated tinyint(1) NOT NULL,
DonatedBy varchar(45) DEFAULT NULL,
fkEventsid int(11) NOT NULL,
PRIMARY KEY (idItems),
UNIQUE KEY idItems_UNIQUE (idItems),
KEY fkEvents_idx (fkEventsid),
CONSTRAINT fkEvents FOREIGN KEY (fkEventsid) REFERENCES Events (idEvents) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Events (
idEvents int(11) NOT NULL AUTO_INCREMENT,
Name varchar(255) NOT NULL,
Date date NOT NULL,
Description longtext NOT NULL,
fkUserid int(11) NOT NULL,
PRIMARY KEY (idEvents),
UNIQUE KEY Name_UNIQUE (Name),
UNIQUE KEY idEvents_UNIQUE (idEvents),
KEY fkUsers_idx (fkUserid),
CONSTRAINT fkUsers FOREIGN KEY (fkUserid) REFERENCES Users (idUsers) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;