-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: bdproyectocam
-- ------------------------------------------------------
-- Server version	5.7.14-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumno`
--

DROP TABLE IF EXISTS `alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumno` (
  `matricula_alumno` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_alumno` varchar(45) NOT NULL,
  `apellido_paterno` varchar(45) NOT NULL,
  `apellido_materno` varchar(45) NOT NULL,
  `fecha_nacimiento` varchar(45) NOT NULL,
  `edad_cumplida` int(2) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `calle` varchar(45) NOT NULL,
  `num_exterior` int(4) NOT NULL,
  `colonia` varchar(45) NOT NULL,
  `codigo_postal` int(5) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `discapacidad` varchar(45) DEFAULT NULL,
  `enfermedades` varchar(45) DEFAULT NULL,
  `alergias` varchar(45) DEFAULT NULL,
  `servicio_medico` varchar(45) DEFAULT NULL,
  `acta_nacimiento` varchar(45) DEFAULT NULL,
  `fotografia` varchar(45) DEFAULT NULL,
  `ine` varchar(45) DEFAULT NULL,
  `comprobante_domicilio` varchar(45) DEFAULT NULL,
  `curp` varchar(45) DEFAULT NULL,
  `cursos` longtext,
  PRIMARY KEY (`matricula_alumno`),
  UNIQUE KEY `idalumno_UNIQUE` (`matricula_alumno`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno`
--

LOCK TABLES `alumno` WRITE;
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
INSERT INTO `alumno` VALUES (11,'Noe','Guzman','Lopez','01-06-1997',25,'6862554433','Av. Las Margaritas',1334,'12 de mayo',21266,'Mexicali','Baja California','','','','','Si','','No','Si','','9 - Manejo del dinero');
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumno_has_curso`
--

DROP TABLE IF EXISTS `alumno_has_curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumno_has_curso` (
  `alumno_matricula_alumno` int(11) NOT NULL,
  `curso_clave_curso` int(11) NOT NULL,
  PRIMARY KEY (`alumno_matricula_alumno`,`curso_clave_curso`),
  KEY `fk_alumno_has_curso_curso1_idx` (`curso_clave_curso`),
  KEY `fk_alumno_has_curso_alumno1_idx` (`alumno_matricula_alumno`),
  CONSTRAINT `fk_alumno_has_curso_alumno1` FOREIGN KEY (`alumno_matricula_alumno`) REFERENCES `alumno` (`matricula_alumno`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_alumno_has_curso_curso1` FOREIGN KEY (`curso_clave_curso`) REFERENCES `curso` (`clave_curso`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno_has_curso`
--

LOCK TABLES `alumno_has_curso` WRITE;
/*!40000 ALTER TABLE `alumno_has_curso` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumno_has_curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `curso` (
  `clave_curso` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_curso` varchar(45) NOT NULL,
  `capacidad` int(2) NOT NULL,
  `dias_curso` longtext NOT NULL,
  `horario_entrada` longtext NOT NULL,
  `horario_salida` longtext NOT NULL,
  PRIMARY KEY (`clave_curso`),
  UNIQUE KEY `idcurso_UNIQUE` (`clave_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (7,'Carpintería',9,'Lunes, Martes','09:00','11:00'),(8,'Jardinería',8,'Miércoles, Jueves','07:00','09:00'),(9,'Manejo del dinero',8,'Lunes','11:33','12:33'),(10,'Cocina',11,'Lunes, Martes, Miercoles','11:00','13:00');
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor`
--

DROP TABLE IF EXISTS `profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profesor` (
  `clave_profesor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_profesor` varchar(45) NOT NULL,
  `apellido_paterno` varchar(45) NOT NULL,
  `apellido_materno` varchar(45) NOT NULL,
  `correo_electronico` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `cursos` longtext NOT NULL,
  PRIMARY KEY (`clave_profesor`),
  UNIQUE KEY `idprofesor_UNIQUE` (`clave_profesor`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor`
--

LOCK TABLES `profesor` WRITE;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
INSERT INTO `profesor` VALUES (14,'José de Jesús','Olivera','Vaca','jose.vaca12@gmail.com','6867776688','8 - Jardinería'),(15,'Juan','Gomez','Jimenez','juan.gomez12@gmail.com','68634567','9 - Manejo del dinero'),(16,'Maritza','Terraza','Gomez','maritza.terraza34@gmail.com','6861115588','10 - Cocina'),(17,'Juana','Barajas','Arellano','juana.barajas33@gmail.com','686132434','7 - Carpintería');
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor_has_curso`
--

DROP TABLE IF EXISTS `profesor_has_curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profesor_has_curso` (
  `profesor_clave_profesor` int(11) NOT NULL,
  `curso_clave_curso` int(11) NOT NULL,
  PRIMARY KEY (`profesor_clave_profesor`,`curso_clave_curso`),
  KEY `fk_profesor_has_curso_curso1_idx` (`curso_clave_curso`),
  KEY `fk_profesor_has_curso_profesor1_idx` (`profesor_clave_profesor`),
  CONSTRAINT `fk_profesor_has_curso_curso1` FOREIGN KEY (`curso_clave_curso`) REFERENCES `curso` (`clave_curso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_profesor_has_curso_profesor1` FOREIGN KEY (`profesor_clave_profesor`) REFERENCES `profesor` (`clave_profesor`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor_has_curso`
--

LOCK TABLES `profesor_has_curso` WRITE;
/*!40000 ALTER TABLE `profesor_has_curso` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesor_has_curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL AUTO_INCREMENT,
  `correo_electronico` varchar(45) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `idusuario_UNIQUE` (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'noe.guzman@uabc.edu.mx','1234');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-17 14:56:13
