-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-02-2021 a las 04:48:14
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `employees_cidenet`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `name` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `otherName` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `surname` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `secondSurname` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `idType` int(11) NOT NULL,
  `idNumber` char(255) COLLATE utf8_spanish2_ci NOT NULL,
  `countryEmployment` int(11) NOT NULL,
  `email` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `dateAdmission` datetime NOT NULL,
  `area` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`name`, `otherName`, `surname`, `secondSurname`, `idType`, `idNumber`, `countryEmployment`, `email`, `dateAdmission`, `area`, `state`, `createdAt`, `updatedAt`) VALUES
('DIEGO', 'D', 'D', 'D', 1, 'D', 1, 'diego.d@cidenet.com.co', '2021-02-17 05:00:00', 1, 1, '2021-02-22 02:58:46', '2021-02-22 03:40:51'),
('D', 'D', 'D', 'D', 2, 'D', 1, 'd.d.1@cidenet.com.co', '2021-02-17 05:00:00', 1, 1, '2021-02-22 02:59:18', '2021-02-22 02:59:18');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`idType`,`idNumber`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
