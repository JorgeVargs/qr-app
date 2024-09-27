-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         8.0.36 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para app-qr
DROP DATABASE IF EXISTS `app-qr`;
CREATE DATABASE IF NOT EXISTS `app-qr` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `app-qr`;

-- Volcando estructura para tabla app-qr.canjes
DROP TABLE IF EXISTS `canjes`;
CREATE TABLE IF NOT EXISTS `canjes` (
  `id_canje` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `id_premio` int DEFAULT NULL,
  `puntos_resta` int NOT NULL,
  `fecha_canje` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_canje`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_premio` (`id_premio`),
  CONSTRAINT `canjes_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `canjes_ibfk_2` FOREIGN KEY (`id_premio`) REFERENCES `premios` (`id_premio`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla app-qr.premios
DROP TABLE IF EXISTS `premios`;
CREATE TABLE IF NOT EXISTS `premios` (
  `id_premio` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text,
  `puntos_requeridos` int NOT NULL,
  `disponible` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_premio`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla app-qr.puntos
DROP TABLE IF EXISTS `puntos`;
CREATE TABLE IF NOT EXISTS `puntos` (
  `id_puntos` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `id_qr` varchar(50) CHARACTER SET armscii8 COLLATE armscii8_general_ci DEFAULT NULL,
  `cantidad` int NOT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_puntos`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_qr` (`id_qr`) USING BTREE,
  CONSTRAINT `puntos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=armscii8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla app-qr.qrcodes
DROP TABLE IF EXISTS `qrcodes`;
CREATE TABLE IF NOT EXISTS `qrcodes` (
  `id_qr` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` enum('SIMPLE','DOBLE','TRIPLE','RESTA') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` mediumtext COLLATE utf8mb4_unicode_ci,
  `puntos_asociados` int NOT NULL,
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_qr`),
  UNIQUE KEY `codigo` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla app-qr.roles
DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id_rol` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=armscii8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla app-qr.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `puntos_totales` int DEFAULT '0',
  `rol` int DEFAULT '1',
  `fecha_registro` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`),
  KEY `rol` (`rol`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rol`) REFERENCES `roles` (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=armscii8;

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
