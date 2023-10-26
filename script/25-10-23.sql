-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2023 a las 04:01:04
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bibliotecarest`
--
CREATE DATABASE IF NOT EXISTS `bibliotecarest` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bibliotecarest`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `categoria` varchar(30) DEFAULT NULL,
  `año_publicacion` date DEFAULT NULL,
  `ISBN` varchar(13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `año_publicacion`, `ISBN`) VALUES
(1, 'Las sombras en el abismo', 'Ricardo García', 'Drama', '1995-01-15', '1234567890123'),
(2, 'El misterio de la isla perdida', 'María Rodríguez', 'Aventura', '2002-04-20', '2345678901234'),
(3, 'Canción de la lluvia', 'Carlos López', 'Fantasía', '2007-07-05', '3456789012345'),
(4, 'En busca del tesoro dorado', 'Ana Pérez', 'Aventura', '2012-09-12', '4567890123456'),
(5, 'El secreto de las estrellas', 'Javier Martínez', 'Ciencia Ficción', '2018-10-30', '5678901234567'),
(6, 'El misterio del reloj antiguo', 'Sofía González', 'Misterio', '1990-03-25', '6789012345678'),
(7, 'Los sueños perdidos', 'Mateo Fernández', 'Drama', '1998-06-07', '7890123456789'),
(8, 'La espada del destino', 'Camila Silva', 'Fantasía', '2005-12-18', '8901234567890'),
(9, 'A través del espejo', 'Nicolás Torres', 'Aventura', '2011-04-02', '9012345678901'),
(10, 'El último adiós', 'Valentina Pérez', 'Drama', '2016-08-14', '0123456789012'),
(11, 'El enigma de la esmeralda', 'Lautaro Rodríguez', 'Misterio', '2003-11-22', '1234567890123'),
(12, 'El guardián de los secretos', 'Micaela García', 'Fantasía', '1997-07-28', '2345678901234'),
(13, 'Cazadores de tesoros', 'Isabella Martínez', 'Aventura', '2013-05-01', '3456789012345'),
(14, 'La canción del viento', 'Santiago López', 'Fantasía', '2008-09-08', '4567890123456'),
(15, 'El último testigo', 'Elena González', 'Misterio', '1992-02-19', '5678901234567'),
(16, 'La vida en colores', 'Sanchez Aurelio', 'Novela', '2021-04-02', '1234567890121');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
