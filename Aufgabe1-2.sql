-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 18. Apr 2016 um 17:53
-- Server-Version: 10.1.10-MariaDB
-- PHP-Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `Aufgabe1`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Abstimmung`
--

CREATE TABLE `Abstimmung` (
  `Vereinsname` varchar(50) NOT NULL,
  `Stimmen` int(10) UNSIGNED DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Abstimmung`
--

INSERT INTO `Abstimmung` (`Vereinsname`, `Stimmen`) VALUES
('Bayer Leverkusen', 15),
('Bayern München', 5),
('Dynamo Dreden', 1),
('Energie Cottbus', 2),
('Schalke 04', 2);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Newsletter`
--

CREATE TABLE `Newsletter` (
  `Email` varchar(50) NOT NULL,
  `Spielklasse` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Spielklassen`
--

CREATE TABLE `Spielklassen` (
  `Spielklasse` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Spielklassen`
--

INSERT INTO `Spielklassen` (`Spielklasse`) VALUES
('1. Liga'),
('2. Liga'),
('3. Liga'),
('Deutsche Nationalmannschaft'),
('EM'),
('Regionalliga');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `User`
--

CREATE TABLE `User` (
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Vereinsmitglied` tinyint(1) NOT NULL,
  `Strasse` varchar(50) DEFAULT NULL,
  `Hausnummer` int(11) DEFAULT NULL,
  `Plz` int(11) DEFAULT NULL,
  `Ort` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `User`
--

INSERT INTO `User` (`Name`, `Email`, `Vereinsmitglied`, `Strasse`, `Hausnummer`, `Plz`, `Ort`) VALUES
('Alexandra', 'avogel@hm.edu', 0, 'Hallo', 2, 111111, 'München');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Vereine`
--

CREATE TABLE `Vereine` (
  `Vereinsname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Vereine`
--

INSERT INTO `Vereine` (`Vereinsname`) VALUES
(''),
('1. FC Nürnberg'),
('Bayer Leverkusen'),
('Bayern München'),
('Dynamo Dreden'),
('Energie Cottbus'),
('other'),
('Schalke 04');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ZuteilungMail`
--

CREATE TABLE `ZuteilungMail` (
  `Email` varchar(50) DEFAULT NULL,
  `Spielklasse` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `ZuteilungMail`
--

INSERT INTO `ZuteilungMail` (`Email`, `Spielklasse`) VALUES
('avogel@hm.edu', 'EM');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `Abstimmung`
--
ALTER TABLE `Abstimmung`
  ADD PRIMARY KEY (`Vereinsname`);

--
-- Indizes für die Tabelle `Newsletter`
--
ALTER TABLE `Newsletter`
  ADD KEY `Email` (`Email`),
  ADD KEY `Spielklasse` (`Spielklasse`);

--
-- Indizes für die Tabelle `Spielklassen`
--
ALTER TABLE `Spielklassen`
  ADD PRIMARY KEY (`Spielklasse`);

--
-- Indizes für die Tabelle `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`Email`);

--
-- Indizes für die Tabelle `Vereine`
--
ALTER TABLE `Vereine`
  ADD PRIMARY KEY (`Vereinsname`);

--
-- Indizes für die Tabelle `ZuteilungMail`
--
ALTER TABLE `ZuteilungMail`
  ADD KEY `Email` (`Email`),
  ADD KEY `Spielklasse` (`Spielklasse`);

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `Abstimmung`
--
ALTER TABLE `Abstimmung`
  ADD CONSTRAINT `abstimmung_ibfk_1` FOREIGN KEY (`Vereinsname`) REFERENCES `Vereine` (`Vereinsname`);

--
-- Constraints der Tabelle `Newsletter`
--
ALTER TABLE `Newsletter`
  ADD CONSTRAINT `newsletter_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `User` (`Email`),
  ADD CONSTRAINT `newsletter_ibfk_2` FOREIGN KEY (`Spielklasse`) REFERENCES `Spielklassen` (`Spielklasse`);

--
-- Constraints der Tabelle `ZuteilungMail`
--
ALTER TABLE `ZuteilungMail`
  ADD CONSTRAINT `zuteilungmail_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `User` (`Email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `zuteilungmail_ibfk_2` FOREIGN KEY (`Spielklasse`) REFERENCES `Spielklassen` (`Spielklasse`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
