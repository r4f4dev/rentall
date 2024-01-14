# ************************************************************
# Sequel Ace SQL dump
# Version 20035
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 8.0.32-0ubuntu0.22.04.2)
# Database: muhammadyor_rentall_2023
# Generation Time: 2023-04-03 18:58:20 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table AdminPrivileges
# ------------------------------------------------------------

DROP TABLE IF EXISTS `AdminPrivileges`;

CREATE TABLE `AdminPrivileges` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roleId` int NOT NULL,
  `previlegeId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `AdminPrivileges_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `AdminRoles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `AdminPrivileges` WRITE;
/*!40000 ALTER TABLE `AdminPrivileges` DISABLE KEYS */;

INSERT INTO `AdminPrivileges` (`id`, `roleId`, `previlegeId`, `createdAt`, `updatedAt`)
VALUES
	(1,1,1,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(2,1,3,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(3,1,5,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(4,1,7,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(5,1,9,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(6,1,11,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(7,1,13,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(8,1,15,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(9,1,17,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(10,1,20,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(11,1,22,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(12,1,2,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(13,1,4,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(14,1,6,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(15,1,8,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(16,1,10,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(17,1,12,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(18,1,14,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(19,1,16,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(20,1,18,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(21,1,21,'2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(22,2,1,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(23,2,3,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(24,2,5,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(25,2,7,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(26,2,9,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(27,2,11,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(28,2,13,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(29,2,15,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(30,2,17,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(31,2,20,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(32,2,22,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(33,2,2,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(34,2,4,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(35,2,6,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(36,2,8,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(37,2,10,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(38,2,12,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(39,2,14,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(40,2,16,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(41,2,18,'2023-01-28 16:18:37','2023-01-28 16:18:37'),
	(42,2,21,'2023-01-28 16:18:37','2023-01-28 16:18:37');

/*!40000 ALTER TABLE `AdminPrivileges` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table AdminReviews
# ------------------------------------------------------------

DROP TABLE IF EXISTS `AdminReviews`;

CREATE TABLE `AdminReviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `reviewContent` text,
  `image` varchar(255) DEFAULT NULL,
  `isEnable` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `AdminReviews` WRITE;
/*!40000 ALTER TABLE `AdminReviews` DISABLE KEYS */;

INSERT INTO `AdminReviews` (`id`, `userName`, `reviewContent`, `image`, `isEnable`, `createdAt`, `updatedAt`)
VALUES
	(1,'Thomas','In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeho','91a64fe8ce142282b989bed290a78cc1.png',1,'2022-11-03 10:39:42','2022-11-03 11:16:50'),
	(2,'Henry','In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeho','ea6c2c849cb1616452e42f375e2d10bf.png',1,'2022-11-03 10:40:06','2022-11-03 11:17:00'),
	(3,'Joe','In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeho','d00b855ff7360018164911e976bfb0c0.png',1,'2022-11-03 10:40:36','2022-11-03 11:17:08');

/*!40000 ALTER TABLE `AdminReviews` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table AdminRoles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `AdminRoles`;

CREATE TABLE `AdminRoles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `AdminRoles` WRITE;
/*!40000 ALTER TABLE `AdminRoles` DISABLE KEYS */;

INSERT INTO `AdminRoles` (`id`, `name`, `description`, `createdAt`, `updatedAt`)
VALUES
	(1,'CEO','Co-Founder','2023-01-28 12:39:31','2023-01-28 12:39:31'),
	(2,'Co-Founder',NULL,'2023-01-28 16:18:37','2023-01-28 16:18:37');

/*!40000 ALTER TABLE `AdminRoles` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table AdminUser
# ------------------------------------------------------------

DROP TABLE IF EXISTS `AdminUser`;

CREATE TABLE `AdminUser` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `emailConfirmed` tinyint(1) DEFAULT '0',
  `isSuperAdmin` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `AdminUser` WRITE;
/*!40000 ALTER TABLE `AdminUser` DISABLE KEYS */;

INSERT INTO `AdminUser` (`id`, `email`, `password`, `emailConfirmed`, `isSuperAdmin`, `createdAt`, `updatedAt`, `roleId`)
VALUES
	('39dcd810-9f09-11ed-b242-e9a142758e94','Xamzatello@gmail.com','$2b$08$WcSpvMwvYhCvli2O8et2telY.V9jAXASY9dtezayH1rW4dSt1if36',0,0,'2023-01-28 12:42:29','2023-01-28 16:18:45',2),
	('8b16c890-c205-11e6-a2c7-4195de507451','admin@radicalstart.com','$2a$08$SR.h58BFMCbcHbl3y9tvYe9UM.q1SMXh43M51po7FDXQrOcMpQxLy',1,1,'2016-12-14 13:59:34','2016-12-14 13:59:34',NULL);

/*!40000 ALTER TABLE `AdminUser` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Banner
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Banner`;

CREATE TABLE `Banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isEnable` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `Banner` WRITE;
/*!40000 ALTER TABLE `Banner` DISABLE KEYS */;

INSERT INTO `Banner` (`id`, `title`, `content`, `isEnable`, `createdAt`, `updatedAt`)
VALUES
	(1,'Uy egalaridan ijara','!',1,'2019-03-27 11:53:46','2023-03-13 05:29:23');

/*!40000 ALTER TABLE `Banner` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table BedTypes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BedTypes`;

CREATE TABLE `BedTypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `bedCount` int DEFAULT NULL,
  `bedType` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  KEY `bedType` (`bedType`),
  CONSTRAINT `BedTypes_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `BedTypes_ibfk_2` FOREIGN KEY (`bedType`) REFERENCES `ListSettings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `BedTypes` WRITE;
/*!40000 ALTER TABLE `BedTypes` DISABLE KEYS */;

INSERT INTO `BedTypes` (`id`, `listId`, `bedCount`, `bedType`, `createdAt`, `updatedAt`)
VALUES
	(116,15,1,18,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(168,20,1,16,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(170,21,1,19,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(173,14,1,17,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(174,14,2,17,'2023-03-21 16:25:32','2023-03-21 16:25:32');

/*!40000 ALTER TABLE `BedTypes` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table BlogDetails
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BlogDetails`;

CREATE TABLE `BlogDetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pageTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `metaTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `metaDescription` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pageUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isEnable` tinyint(1) NOT NULL DEFAULT '1',
  `footerCategory` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isPrivate` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table Cancellation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Cancellation`;

CREATE TABLE `Cancellation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `policyName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `policyContent` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `priorDays` int NOT NULL,
  `accommodationPriorCheckIn` float NOT NULL,
  `accommodationBeforeCheckIn` float NOT NULL,
  `accommodationDuringCheckIn` float NOT NULL,
  `guestFeePriorCheckIn` float NOT NULL,
  `guestFeeBeforeCheckIn` float NOT NULL,
  `guestFeeDuringCheckIn` float NOT NULL,
  `hostFeePriorCheckIn` float NOT NULL,
  `hostFeeBeforeCheckIn` float NOT NULL,
  `hostFeeDuringCheckIn` float NOT NULL,
  `isEnable` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `nonRefundableNightsPriorCheckIn` int DEFAULT '0',
  `nonRefundableNightsBeforeCheckIn` int DEFAULT '1',
  `nonRefundableNightsDuringCheckIn` int DEFAULT '0',
  `subTitle` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `subContent` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `content1` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `content2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `content3` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `Cancellation` WRITE;
/*!40000 ALTER TABLE `Cancellation` DISABLE KEYS */;

INSERT INTO `Cancellation` (`id`, `policyName`, `policyContent`, `priorDays`, `accommodationPriorCheckIn`, `accommodationBeforeCheckIn`, `accommodationDuringCheckIn`, `guestFeePriorCheckIn`, `guestFeeBeforeCheckIn`, `guestFeeDuringCheckIn`, `hostFeePriorCheckIn`, `hostFeeBeforeCheckIn`, `hostFeeDuringCheckIn`, `isEnable`, `createdAt`, `updatedAt`, `nonRefundableNightsPriorCheckIn`, `nonRefundableNightsBeforeCheckIn`, `nonRefundableNightsDuringCheckIn`, `subTitle`, `subContent`, `content1`, `content2`, `content3`)
VALUES
	(1,'Flexible','Cancel up to 1 day prior to arrival and get a 100% refund',1,100,100,100,100,100,0,100,100,100,1,'2017-06-09 22:43:35','2022-11-03 10:18:14',0,1,0,'100% refund even if canceled 1 day before arrival.\n\nFor example: Say a guest booked a stay and their check-in time is 3:00 PM on June 09th.','Cleaning fees are always refunded if the guest did not check in.\n\nThe RentALL service fee is refundable if the guest cancels before the trip starts. If a guest books a reservation thatoverlaps with any part of an existing reservation, we won’t refund the RentALL service fee if they decide to cancel.\n\nAccommodation fees (the total nightly rate you\'re charged) are refundable in certain circumstances as outlined below.\n\nIf there is a complaint from either party, notice must be given to RentALL within 24 hours of check-in.\n\nRentALL will mediate when necessary, and has the final say in all disputes.\n\nA reservation is officially canceled when the guest clicks the cancellation button on the cancellation confirmation page,which they can find in Dashboard > Your Trips > Cancel.\n\nCancellation policies may be superseded by the Guest Refund Policy, extenuating circumstances, or cancellations byRentALL for any other reason permitted under the Terms of Service. Please review these exceptions.\n\nApplicable taxes will be retained and remitted.','A full refund will be processed if a guest cancels a booking 24 hrs before check-in time. For example: If a guest cancels the booking before 3:00 PM on June 08th, a 100% refund will be processed.','If a guest cancels their booking less than 24 hrs before the check-in time, then the first night of the stay is non-refundable.\n\nFor example: If a guest cancels the booking after 3:00 PM on June 08th, the first night of the stay is non-refundable, and therest will be refunded to their bank account.','The accommodation fees for the nights not spent will be returned if a guest checks in and decides to leave early.\n\nFor example: If a guest cancels the booking after 3:00 PM on June 08th, the first night of the stay is non-refundable, and therest will be refunded to their bank account.'),
	(2,'Moderate','Cancel up to 5 days prior to arrival and get a 50% refund',5,100,50,50,100,100,0,100,100,100,1,'2017-06-09 22:46:10','2022-11-03 10:19:14',0,1,0,'100% refund even if cancelled 5 day before check-in time.\n\nFor example: Say a guest booked a stay and their check-in time is 3:00 PM on June 09th.','Cleaning fees are always refunded if the guest did not check in.\n\nThe RentALL service fee is refundable if the guest cancels before the trip starts. If a guest books a reservation thatoverlaps with any part of an existing reservation, we won’t refund the RentALL service fee if they decide to cancel.\n\nAccommodation fees (the total nightly rate you\'re charged) are refundable in certain circumstances as outlined below.\n\nIf there is a complaint from either party, notice must be given to RentALL within 24 hours of check-in.\n\nRentALL will mediate when necessary, and has the final say in all disputes.\n\nA reservation is officially canceled when the guest clicks the cancellation button on the cancellation confirmation page,which they can find in Dashboard > Your Trips > Cancel.\n\nCancellation policies may be superseded by the Guest Refund Policy, extenuating circumstances, or cancellations byRentALL for any other reason permitted under the Terms of Service. Please review these exceptions.\n\nApplicable taxes will be retained and remitted.','Only if a guest cancel their booking 5 days prior to the check-in time,they will receive a full refund\n\n\nFor example: If a guest cancels the booking before 3:00 PM on June 04th, a 100% refund will be processed.','If a guest cancels their booking less than 5 days before the check-in time, then the first night of the stay is non-refundable.But 50% of the remaining night will be refunded\n\nFor example: If a guest cancels the booking after 3:00 PM on June 05th, the first night of the stay is non-refundable, and the50% amount of the remaining night will be refunded.','50%  of the accommodation fees for the nights not spent will be refunded(24 hours after cancellation),if a guest check-in and decides to leave early'),
	(3,'Strict','Cancel up to 7 days prior to arrival and get a 50% refund',7,50,0,0,100,0,0,100,100,100,1,'2017-06-09 22:47:38','2022-11-03 10:36:48',0,0,0,'50% refund only if cancelled 7 days before check-in time\n\nFor example: Say a guest booked a stay and their check-in time is 3:00 PM on June 09th.','Cleaning fees are always refunded if the guest did not check in.\n\nThe RentALL service fee is refundable if the guest cancels before the trip starts. If a guest books a reservation thatoverlaps with any part of an existing reservation, we won’t refund the RentALL service fee if they decide to cancel.\n\nAccommodation fees (the total nightly rate you\'re charged) are refundable in certain circumstances as outlined below.\n\nIf there is a complaint from either party, notice must be given to RentALL within 24 hours of check-in\n\nRentALL will mediate when necessary, and has the final say in all disputes.\n\nA reservation is officially canceled when the guest clicks the cancellation button on the cancellation confirmation page,which they can find in Dashboard > Your Trips > Cancel.\n\nCancellation policies may be superseded by the Guest Refund Policy, extenuating circumstances, or cancellations byRentALL for any other reason permitted under the Terms of Service. Please review these exceptions.\n\nApplicable taxes will be retained and remitted.','Only if the guest cancels their reservation 7 days prior to the check-in time,they will receive a 50% refund\n\nFor example: If a guest cancels the booking before 3:00 PM on June 02nd, a 50% refund will be processed.','There will be no refund if the guest cancels their booking less than 7 days before the check-in time\n\nFor example: No refund will be given if the guest cancels their reservation after 3:00 PM on June 01st','If a guest check-in and decides to leave early,there will be no refund for the nights not spent');

/*!40000 ALTER TABLE `Cancellation` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table CancellationDetails
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CancellationDetails`;

CREATE TABLE `CancellationDetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reservationId` int NOT NULL,
  `cancellationPolicy` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `refundToGuest` float NOT NULL,
  `payoutToHost` float NOT NULL,
  `guestServiceFee` float NOT NULL,
  `hostServiceFee` float NOT NULL,
  `total` float NOT NULL,
  `currency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cancelledBy` enum('host','guest') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reservationId` (`reservationId`),
  CONSTRAINT `CancellationDetails_ibfk_1` FOREIGN KEY (`reservationId`) REFERENCES `Reservation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table Country
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Country`;

CREATE TABLE `Country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `countryCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `countryName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isEnable` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime DEFAULT '2018-09-29 11:22:19',
  `updatedAt` datetime DEFAULT '2018-09-29 11:22:19',
  `dialCode` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `Country` WRITE;
/*!40000 ALTER TABLE `Country` DISABLE KEYS */;

INSERT INTO `Country` (`id`, `countryCode`, `countryName`, `isEnable`, `createdAt`, `updatedAt`, `dialCode`)
VALUES
	(1,'DZ','Algeria',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+213'),
	(2,'AF','Afghanistan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+93'),
	(3,'AL','Albania',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+355'),
	(4,'AS','AmericanSamoa',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 684'),
	(5,'AD','Andorra',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+376'),
	(6,'AO','Angola',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+244'),
	(7,'AI','Anguilla',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 264'),
	(8,'AQ','Antarctica',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+672'),
	(9,'AG','Antigua and Barbuda',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1268'),
	(10,'AR','Argentina',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+54'),
	(11,'AM','Armenia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+374'),
	(12,'AW','Aruba',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+297'),
	(13,'AU','Australia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+61'),
	(14,'AT','Austria',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+43'),
	(15,'AZ','Azerbaijan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+994'),
	(16,'BS','Bahamas',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 242'),
	(17,'BH','Bahrain',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+973'),
	(18,'BD','Bangladesh',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+880'),
	(19,'BB','Barbados',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 246'),
	(20,'BY','Belarus',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+375'),
	(21,'BE','Belgium',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+32'),
	(22,'BZ','Belize',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+501'),
	(23,'BJ','Benin',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+229'),
	(24,'BM','Bermuda',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 441'),
	(25,'BT','Bhutan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+975'),
	(26,'BO','Bolivia, Plurinational State of',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+591'),
	(27,'BA','Bosnia and Herzegovina',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+387'),
	(28,'BW','Botswana',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+267'),
	(29,'BR','Brazil',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+55'),
	(30,'IO','British Indian Ocean Territory',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+246'),
	(31,'BN','Brunei Darussalam',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+673'),
	(32,'BG','Bulgaria',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+359'),
	(33,'BF','Burkina Faso',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+226'),
	(34,'BI','Burundi',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+257'),
	(35,'KH','Cambodia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+855'),
	(36,'CM','Cameroon',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+237'),
	(37,'CA','Canada',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1'),
	(38,'CV','Cape Verde',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+238'),
	(39,'KY','Cayman Islands',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+ 345'),
	(40,'CF','Central African Republic',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+236'),
	(41,'TD','Chad',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+235'),
	(42,'CL','Chile',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+56'),
	(43,'CN','China',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+86'),
	(44,'CX','Christmas Island',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+61'),
	(45,'CC','Cocos (Keeling) Islands',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+61'),
	(46,'CO','Colombia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+57'),
	(47,'KM','Comoros',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+269'),
	(48,'CG','Congo',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+242'),
	(49,'CD','Congo, The Democratic Republic of the',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+243'),
	(50,'CK','Cook Islands',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+682'),
	(51,'CR','Costa Rica',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+506'),
	(52,'CI','Cote d\'Ivoire',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+225'),
	(53,'HR','Croatia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+385'),
	(54,'CU','Cuba',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+53'),
	(55,'CY','Cyprus',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+357'),
	(56,'CZ','Czech Republic',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+420'),
	(57,'DK','Denmark',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+45'),
	(58,'DJ','Djibouti',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+253'),
	(59,'DM','Dominica',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 767'),
	(60,'DO','Dominican Republic',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 849'),
	(61,'EC','Ecuador',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+593'),
	(62,'EG','Egypt',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+20'),
	(63,'SV','El Salvador',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+503'),
	(64,'GQ','Equatorial Guinea',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+240'),
	(65,'ER','Eritrea',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+291'),
	(66,'EE','Estonia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+372'),
	(67,'ET','Ethiopia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+251'),
	(68,'FK','Falkland Islands (Malvinas)',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+500'),
	(69,'FO','Faroe Islands',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+298'),
	(70,'FJ','Fiji',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+679'),
	(71,'FI','Finland',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+358'),
	(72,'FR','France',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+33'),
	(73,'GF','French Guiana',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+594'),
	(74,'PF','French Polynesia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+689'),
	(75,'GA','Gabon',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+241'),
	(76,'GM','Gambia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+220'),
	(77,'GE','Georgia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+995'),
	(78,'DE','Germany',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+49'),
	(79,'GH','Ghana',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+233'),
	(80,'GI','Gibraltar',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+350'),
	(81,'GR','Greece',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+30'),
	(82,'GL','Greenland',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+299'),
	(83,'GD','Grenada',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 473'),
	(84,'GP','Guadeloupe',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+590'),
	(85,'GU','Guam',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 671'),
	(86,'GT','Guatemala',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+502'),
	(87,'GG','Guernsey',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+44'),
	(88,'GN','Guinea',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+224'),
	(89,'GW','Guinea-Bissau',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+245'),
	(90,'GY','Guyana',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+595'),
	(91,'HT','Haiti',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+509'),
	(92,'VA','Holy See (Vatican City State)',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+379'),
	(93,'HN','Honduras',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+504'),
	(94,'HK','Hong Kong',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+852'),
	(95,'HU','Hungary',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+36'),
	(96,'IS','Iceland',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+354'),
	(97,'IN','India',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+91'),
	(98,'ID','Indonesia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+62'),
	(99,'IR','Iran, Islamic Republic of',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+98'),
	(100,'IQ','Iraq',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+964'),
	(101,'IE','Ireland',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+353'),
	(102,'IM','Isle of Man',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+44'),
	(103,'IL','Israel',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+972'),
	(104,'IT','Italy',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+39'),
	(105,'JM','Jamaica',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 876'),
	(106,'JP','Japan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+81'),
	(107,'JE','Jersey',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+44'),
	(108,'JO','Jordan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+962'),
	(109,'KZ','Kazakhstan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+7 7'),
	(110,'KE','Kenya',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+254'),
	(111,'KI','Kiribati',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+686'),
	(112,'KP','Korea, Democratic People\'s Republic of',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+850'),
	(113,'KR','Korea, Republic of',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+82'),
	(114,'KW','Kuwait',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+965'),
	(115,'KG','Kyrgyzstan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+996'),
	(116,'LA','Lao People\'s Democratic Republic',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+856'),
	(117,'LV','Latvia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+371'),
	(118,'LB','Lebanon',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+961'),
	(119,'LS','Lesotho',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+266'),
	(120,'LR','Liberia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+231'),
	(121,'LY','Libyan Arab Jamahiriya',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+218'),
	(122,'LI','Liechtenstein',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+423'),
	(123,'LT','Lithuania',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+370'),
	(124,'LU','Luxembourg',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+352'),
	(125,'MO','Macao',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+853'),
	(126,'MK','Macedonia, The Former Yugoslav Republic of',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+389'),
	(127,'MG','Madagascar',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+261'),
	(128,'MW','Malawi',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+265'),
	(129,'MY','Malaysia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+60'),
	(130,'MV','Maldives',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+960'),
	(131,'ML','Mali',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+223'),
	(132,'MT','Malta',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+356'),
	(133,'MH','Marshall Islands',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+692'),
	(134,'MQ','Martinique',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+596'),
	(135,'MR','Mauritania',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+222'),
	(136,'MU','Mauritius',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+230'),
	(137,'YT','Mayotte',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+262'),
	(138,'MX','Mexico',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+52'),
	(139,'FM','Micronesia, Federated States of',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+691'),
	(140,'MD','Moldova, Republic of',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+373'),
	(141,'MC','Monaco',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+377'),
	(142,'MN','Mongolia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+976'),
	(143,'ME','Montenegro',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+382'),
	(144,'MS','Montserrat',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1664'),
	(145,'MA','Morocco',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+212'),
	(146,'MZ','Mozambique',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+258'),
	(147,'MM','Myanmar',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+95'),
	(148,'NA','Namibia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+264'),
	(149,'NR','Nauru',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+674'),
	(150,'NP','Nepal',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+977'),
	(151,'NL','Netherlands',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+31'),
	(152,'AN','Netherlands Antilles',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+599'),
	(153,'NC','New Caledonia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+687'),
	(154,'NZ','New Zealand',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+64'),
	(155,'NI','Nicaragua',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+505'),
	(156,'NE','Niger',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+227'),
	(157,'NG','Nigeria',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+234'),
	(158,'NU','Niue',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+683'),
	(159,'NF','Norfolk Island',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+672'),
	(160,'MP','Northern Mariana Islands',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 670'),
	(161,'NO','Norway',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+47'),
	(162,'OM','Oman',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+968'),
	(163,'PK','Pakistan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+92'),
	(164,'PW','Palau',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+680'),
	(165,'PS','Palestinian Territory, Occupied',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+970'),
	(166,'PA','Panama',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+507'),
	(167,'PG','Papua New Guinea',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+675'),
	(168,'PY','Paraguay',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+595'),
	(169,'PE','Peru',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+51'),
	(170,'PH','Philippines',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+63'),
	(171,'PN','Pitcairn',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+872'),
	(172,'PL','Poland',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+48'),
	(173,'PT','Portugal',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+351'),
	(174,'PR','Puerto Rico',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 939'),
	(175,'QA','Qatar',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+974'),
	(176,'RO','Romania',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+40'),
	(177,'RU','Russia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+7'),
	(178,'RW','Rwanda',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+250'),
	(179,'RE','Réunion',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+262'),
	(180,'BL','Saint Barthélemy',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+590'),
	(181,'SH','Saint Helena, Ascension and Tristan Da Cunha',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+290'),
	(182,'KN','Saint Kitts and Nevis',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 869'),
	(183,'LC','Saint Lucia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 758'),
	(184,'MF','Saint Martin',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+590'),
	(185,'PM','Saint Pierre and Miquelon',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+508'),
	(186,'VC','Saint Vincent and the Grenadines',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 784'),
	(187,'WS','Samoa',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+685'),
	(188,'SM','San Marino',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+378'),
	(189,'ST','Sao Tome and Principe',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+239'),
	(190,'SA','Saudi Arabia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+966'),
	(191,'SN','Senegal',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+221'),
	(192,'RS','Serbia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+381'),
	(193,'SC','Seychelles',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+248'),
	(194,'SL','Sierra Leone',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+232'),
	(195,'SG','Singapore',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+65'),
	(196,'SK','Slovakia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+421'),
	(197,'SI','Slovenia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+386'),
	(198,'SB','Solomon Islands',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+677'),
	(199,'SO','Somalia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+252'),
	(200,'ZA','South Africa',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+27'),
	(201,'GS','South Georgia and the South Sandwich Islands',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+500'),
	(202,'ES','Spain',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+34'),
	(203,'LK','Sri Lanka',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+94'),
	(204,'SD','Sudan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+249'),
	(205,'SR','Suriname',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+597'),
	(206,'SJ','Svalbard and Jan Mayen',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+47'),
	(207,'SZ','Swaziland',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+268'),
	(208,'SE','Sweden',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+46'),
	(209,'CH','Switzerland',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+41'),
	(210,'SY','Syrian Arab Republic',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+963'),
	(211,'TW','Taiwan, Province of China',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+886'),
	(212,'TJ','Tajikistan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+992'),
	(213,'TZ','Tanzania, United Republic of',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+255'),
	(214,'TH','Thailand',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+66'),
	(215,'TL','Timor-Leste',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+670'),
	(216,'TG','Togo',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+228'),
	(217,'TK','Tokelau',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+690'),
	(218,'TO','Tonga',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+676'),
	(219,'TT','Trinidad and Tobago',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 868'),
	(220,'TN','Tunisia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+216'),
	(221,'TR','Turkey',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+90'),
	(222,'TM','Turkmenistan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+993'),
	(223,'TC','Turks and Caicos Islands',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 649'),
	(224,'TV','Tuvalu',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+688'),
	(225,'UG','Uganda',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+256'),
	(226,'UA','Ukraine',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+380'),
	(227,'AE','United Arab Emirates',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+971'),
	(228,'GB','United Kingdom',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+44'),
	(229,'US','United States',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1'),
	(230,'UY','Uruguay',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+598'),
	(231,'UZ','Uzbekistan',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+998'),
	(232,'VU','Vanuatu',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+678'),
	(233,'VE','Venezuela, Bolivarian Republic of',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+58'),
	(234,'VN','Viet Nam',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+84'),
	(235,'VG','Virgin Islands, British',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 284'),
	(236,'VI','Virgin Islands, U.S.',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+1 340'),
	(237,'WF','Wallis and Futuna',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+681'),
	(238,'YE','Yemen',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+967'),
	(239,'ZM','Zambia',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+260'),
	(240,'ZW','Zimbabwe',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+263'),
	(241,'AX','Åland Islands',1,'2019-03-27 11:53:47','2018-09-29 11:22:19','+358');

/*!40000 ALTER TABLE `Country` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Currencies
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Currencies`;

CREATE TABLE `Currencies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `symbol` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isEnable` tinyint(1) NOT NULL DEFAULT '1',
  `isBaseCurrency` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isPayment` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `Currencies` WRITE;
/*!40000 ALTER TABLE `Currencies` DISABLE KEYS */;

INSERT INTO `Currencies` (`id`, `symbol`, `isEnable`, `isBaseCurrency`, `createdAt`, `updatedAt`, `isPayment`)
VALUES
	(1,'AUD',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:56',1),
	(2,'BGN',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:37',1),
	(3,'BRL',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:39',1),
	(4,'CAD',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:40',0),
	(5,'CHF',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:41',0),
	(6,'CNY',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:42',0),
	(7,'CZK',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:43',0),
	(8,'DKK',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:44',0),
	(9,'EUR',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:44',1),
	(10,'GBP',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:45',0),
	(11,'HKD',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:46',0),
	(12,'HRK',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:47',0),
	(13,'HUF',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:48',0),
	(14,'IDR',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:51',0),
	(15,'ILS',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:52',0),
	(16,'INR',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:55',0),
	(17,'JPY',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',0),
	(18,'KRW',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',0),
	(19,'MXN',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',0),
	(20,'MYR',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',0),
	(21,'NOK',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',0),
	(22,'NZD',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',0),
	(23,'PHP',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',1),
	(24,'PLN',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',0),
	(25,'RON',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',0),
	(26,'RUB',1,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',1),
	(27,'SEK',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',0),
	(28,'SGD',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',1),
	(29,'THB',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',1),
	(30,'TRY',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',1),
	(31,'USD',1,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',1),
	(32,'ZAR',0,0,'2019-03-27 11:53:47','2023-02-08 06:07:26',0),
	(33,'UZS',1,1,'2023-01-31 20:13:20','2023-02-23 10:50:53',1);

/*!40000 ALTER TABLE `Currencies` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table CurrencyRates
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CurrencyRates`;

CREATE TABLE `CurrencyRates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `currencyCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` float NOT NULL,
  `isBase` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `CurrencyRates` WRITE;
/*!40000 ALTER TABLE `CurrencyRates` DISABLE KEYS */;

INSERT INTO `CurrencyRates` (`id`, `currencyCode`, `rate`, `isBase`, `createdAt`, `updatedAt`)
VALUES
	(1,'AED',0.000322036,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(2,'AFN',0.00760711,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(3,'ALL',0.00913727,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(4,'AMD',0.03413,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(5,'ANG',0.000157314,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(6,'AOA',0.0444608,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(7,'ARS',0.0183249,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(8,'AWG',0.000157831,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(9,'AZN',0.000149062,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(10,'BAM',0.000157831,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(11,'BBD',0.000175368,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(12,'BDT',0.00934021,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(13,'BGN',0.000158356,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(14,'BHD',0.0000330555,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(15,'BIF',0.182599,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(16,'BMD',0.0000876838,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(17,'BND',0.000116619,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(18,'BOB',0.000605987,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(19,'BRL',0.000444019,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(20,'BSD',0.0000876838,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(21,'BTN',0.00720736,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(22,'BWP',0.00114383,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(23,'BYN',0.000220845,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(24,'BYR',2.20845,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(25,'BZD',0.000176398,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(26,'CAD',0.000118359,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(27,'CDF',0.180157,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(28,'CHF',0.00008045,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(29,'CLF',0.00000252596,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(30,'CLP',0.0696627,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(31,'CNY',0.000604093,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(32,'COP',0.408796,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(33,'CRC',0.0473281,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(34,'CUC',0.0000876838,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(35,'CVE',0.00890445,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(36,'CZK',0.00189938,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(37,'DJF',0.0155875,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(38,'DKK',0.000602647,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(39,'DOP',0.0048084,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(40,'DZD',0.0119222,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(41,'EGP',0.00270944,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(42,'ETB',0.00473894,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(43,'EUR',0.0000809049,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(44,'FJD',0.000193984,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(45,'FKP',0.0000711666,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(46,'GBP',0.0000711667,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(47,'GEL',0.000223594,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(48,'GHS',0.00102475,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(49,'GIP',0.0000711667,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(50,'GMD',0.00544817,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(51,'GNF',0.756623,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(52,'GTQ',0.000682992,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(53,'GYD',0.0185035,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(54,'HKD',0.000688315,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(55,'HNL',0.00216128,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(56,'HRK',0.00060958,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(57,'HTG',0.0135654,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(58,'HUF',0.0307884,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(59,'IDR',1.31303,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(60,'ILS',0.000315791,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(61,'INR',0.00722212,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(62,'IQD',0.128018,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(63,'ISK',0.0120469,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(64,'JMD',0.0132049,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(65,'JOD',0.000062197,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(66,'JPY',0.0117097,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(67,'KES',0.0116226,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(68,'KGS',0.00766532,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(69,'KHR',0.355106,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(70,'KMF',0.039733,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(71,'KRW',0.115399,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(72,'KWD',0.0000269217,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(73,'KYD',0.0000729927,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(74,'KZT',0.0397785,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(75,'LAK',1.48842,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(76,'LBP',1.31873,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(77,'LKR',0.0284349,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(78,'LRD',0.0142266,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(79,'LSL',0.00156326,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(80,'LYD',0.000418871,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(81,'MAD',0.000894813,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(82,'MDL',0.00160642,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(83,'MGA',0.380143,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(84,'MKD',0.00499449,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(85,'MMK',0.183773,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(86,'MNT',0.309392,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(87,'MOP',0.00070817,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(88,'MRO',0.0299487,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(89,'MUR',0.00398961,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(90,'MVR',0.00134694,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(91,'MWK',0.0897046,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(92,'MXN',0.00157835,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(93,'MYR',0.000387632,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(94,'MZN',0.00559992,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(95,'NAD',0.00156219,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(96,'NGN',0.0403643,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(97,'NIO',0.00320498,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(98,'NOK',0.000913337,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(99,'NPR',0.0115259,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(100,'NZD',0.000140623,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(101,'OMR',0.0000337577,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(102,'PAB',0.0000876838,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(103,'PEN',0.000329768,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(104,'PGK',0.000308573,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(105,'PHP',0.00480003,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(106,'PKR',0.0249164,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(107,'PLN',0.000378405,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(108,'PYG',0.625936,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(109,'QAR',0.000319439,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(110,'RON',0.000399991,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(111,'RSD',0.0094876,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(112,'RUB',0.00681537,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(113,'RWF',0.0972299,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(114,'SAR',0.000328968,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(115,'SBD',0.000721836,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(116,'SCR',0.00115909,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(117,'SDG',0.0523472,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(118,'SEK',0.0009109,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(119,'SHP',0.0000711666,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(120,'SKK',0.00243718,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(121,'SLL',1.64034,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(122,'SOS',0.0498129,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(123,'SRD',0.00315791,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(124,'STD',2.00705,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(125,'SVC',0.000766423,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(126,'SZL',0.00156333,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(127,'THB',0.00301705,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(128,'TJS',0.000955877,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(129,'TMT',0.000306893,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(130,'TND',0.000267417,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(131,'TOP',0.000206136,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(132,'TRY',0.00168384,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(133,'TTD',0.000594041,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(134,'TWD',0.00268631,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(135,'TZS',0.205175,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(136,'UAH',0.00322082,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(137,'UGX',0.330471,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(138,'UYU',0.00340879,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(139,'UZS',1,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(140,'VES',0.00214637,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(141,'VND',2.05678,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(142,'VUV',0.0101701,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(143,'WST',0.000238755,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(144,'XAF',0.0533294,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(145,'XAG',0.00000369281,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(146,'XAU',0.0000000447234,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(147,'XCD',0.000236858,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(148,'XOF',0.0531068,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(149,'XPD',0.0000000597461,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(150,'XPF',0.00965454,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(151,'XPT',0.0000000885545,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(152,'YER',0.0219479,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(153,'ZAR',0.00156913,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(154,'ZMK',0.460563,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(155,'ZMW',0.00185687,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(156,'JEP',0.0000711666,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(157,'GGP',0.0000711666,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(158,'IMP',0.0000711666,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(159,'CNH',0.000604424,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(160,'EEK',0.0012658,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(161,'LTL',0.000279331,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(162,'LVL',0.0000568565,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(163,'TMM',1.53008,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(164,'ZWD',0.0328639,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(165,'VEF',214.601,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(166,'SGD',0.000116834,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(167,'AUD',0.000130955,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(168,'USD',0.0000876838,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(169,'BTC',0.00000000313468,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(170,'BCH',0.000000687312,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(171,'BSV',0.00000208186,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(172,'ETH',0.0000000488278,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(173,'ETH2',0.0000000488278,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(174,'ETC',0.00000429507,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(175,'LTC',0.000000955213,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(176,'ZRX',0.00032418,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(177,'USDC',0.0000876838,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(178,'BAT',0.000335163,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(179,'LOOM',0.00137626,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(180,'MANA',0.000148277,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(181,'KNC',0.000123646,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(182,'LINK',0.0000120843,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(183,'DNT',0.00284688,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(184,'MKR',0.000000129988,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(185,'CVC',0.000843113,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(186,'OMG',0.0000591885,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(187,'GNT',0.000376055,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(188,'DAI',0.0000876882,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(189,'SNT',0.00317983,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(190,'ZEC',0.00000241088,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(191,'XRP',0.000170766,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(192,'REP',0.0000110031,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(193,'XLM',0.000810708,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(194,'EOS',0.0000727123,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(195,'XTZ',0.0000796763,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(196,'ALGO',0.000411854,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(197,'DASH',0.00000153966,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(198,'ATOM',0.00000792837,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(199,'OXT',0.00102375,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(200,'COMP',0.00000207437,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(201,'ENJ',0.000221704,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(202,'REPV2',0.0000110031,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(203,'BAND',0.0000480064,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(204,'NMR',0.00000478232,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(205,'CGLD',0.000138412,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(206,'UMA',0.0000426374,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(207,'LRC',0.00024613,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(208,'YFI',0.0000000103735,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(209,'UNI',0.0000147579,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(210,'BAL',0.0000129614,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(211,'REN',0.000874651,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(212,'WBTC',0.00000000313002,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(213,'NU',0.000747944,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(214,'YFII',0.0000000803714,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(215,'FIL',0.0000159425,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(216,'AAVE',0.00000119281,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(217,'BNT',0.000159266,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(218,'GRT',0.00062055,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(219,'SNX',0.0000328711,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(220,'STORJ',0.000234417,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(221,'SUSHI',0.0000829514,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(222,'MATIC',0.0000802047,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(223,'SKL',0.00225408,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(224,'ADA',0.000222069,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(225,'ANKR',0.00254895,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(226,'CRV',0.0000970597,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(227,'ICP',0.0000174651,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(228,'NKN',0.000804069,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(229,'OGN',0.000754269,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(230,'1INCH',0.000170757,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(231,'USDT',0.0000876579,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(232,'FORTH',0.0000235709,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(233,'CTSI',0.000629686,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(234,'TRB',0.00000612317,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(235,'POLY',0.000512771,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(236,'MIR',0.000981747,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(237,'RLC',0.000053662,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(238,'DOT',0.0000140171,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(239,'SOL',0.00000432686,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(240,'DOGE',0.00112135,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(241,'MLN',0.00000424722,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(242,'GTC',0.0000499623,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(243,'AMP',0.0239901,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(244,'SHIB',8.1377,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(245,'CHZ',0.000738701,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(246,'KEEP',0.000498742,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(247,'LPT',0.0000130579,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(248,'QNT',0.000000700294,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(249,'BOND',0.0000214648,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(250,'RLY',0.00697001,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(251,'CLV',0.0014304,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(252,'FARM',0.00000248642,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(253,'MASK',0.0000152361,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(254,'ANT',0.0000352144,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(255,'FET',0.000249918,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(256,'PAX',0.0000881333,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(257,'ACH',0.00247226,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(258,'ASM',0.00702032,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(259,'PLA',0.000404632,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(260,'RAI',0.0000316548,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(261,'TRIBE',0.000320261,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(262,'ORN',0.0000971027,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(263,'IOTX',0.00306479,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(264,'UST',0.00295286,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(265,'QUICK',0.00000101298,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(266,'AXS',0.0000106606,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(267,'REQ',0.00092738,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(268,'WLUNA',0.739409,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(269,'TRU',0.00112704,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(270,'RAD',0.0000475251,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(271,'COTI',0.00112922,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(272,'DDX',0.000242522,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(273,'SUKU',0.00118093,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(274,'RGT',0.000327046,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(275,'XYO',0.0166541,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(276,'ZEN',0.00000822935,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(277,'AST',0.000690967,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(278,'AUCTION',0.0000154645,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(279,'BUSD',0.0000877107,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(280,'JASMY',0.017696,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(281,'WCFG',0.000309837,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(282,'BTRST',0.0000973183,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(283,'AGLD',0.000222632,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(284,'AVAX',0.00000511723,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(285,'FX',0.000462589,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(286,'TRAC',0.000229659,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(287,'LCX',0.00115907,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(288,'ARPA',0.00217308,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(289,'BADGER',0.0000319431,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(290,'KRL',0.000302932,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(291,'PERP',0.00011121,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(292,'RARI',0.000054462,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(293,'DESO',0.00000764795,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(294,'API3',0.0000571602,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(295,'NCT',0.00848826,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(296,'SHPING',0.0199168,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(297,'UPI',0.0367669,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(298,'CRO',0.00128006,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(299,'MTL',0.0000733142,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(300,'ABT',0.000653625,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(301,'CVX',0.000017166,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(302,'AVT',0.0000746245,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(303,'MDT',0.00144454,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(304,'VGX',0.000257931,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(305,'ALCX',0.00000436455,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(306,'COVAL',0.00664775,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(307,'FOX',0.00257515,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(308,'MUSD',0.0000879478,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(309,'CELR',0.00410121,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(310,'GALA',0.00218963,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(311,'POWR',0.000469399,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(312,'GYEN',0.0117539,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(313,'ALICE',0.0000559386,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(314,'INV',0.00000186979,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(315,'LQTY',0.0000397407,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(316,'PRO',0.000188365,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(317,'SPELL',0.117169,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(318,'ENS',0.0000066705,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(319,'DIA',0.000243411,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(320,'BLZ',0.00108385,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(321,'CTX',0.0000487132,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(322,'ERN',0.0000491226,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(323,'IDEX',0.00167655,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(324,'MCO2',0.0000611037,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(325,'POLS',0.000184442,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(326,'SUPER',0.000687905,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(327,'UNFI',0.0000181352,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(328,'STX',0.0000978723,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(329,'KSM',0.00000268392,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(330,'GODS',0.000396051,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(331,'IMX',0.0000841333,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(332,'RBN',0.000360564,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(333,'BICO',0.000236599,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(334,'GFI',0.000157889,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(335,'ATA',0.000554434,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(336,'GLM',0.000374317,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(337,'MPL',0.0000200879,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(338,'PLU',0.00000914802,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(339,'SWFTC',0.070344,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(340,'SAND',0.000143227,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(341,'OCEAN',0.000256986,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(342,'GNO',0.000000792837,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(343,'FIDA',0.000219347,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(344,'ORCA',0.000104616,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(345,'CRPT',0.000878595,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(346,'QSP',0.00538433,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(347,'RNDR',0.0000698258,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(348,'NEST',0.00514124,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(349,'PRQ',0.000731613,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(350,'HOPR',0.00140294,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(351,'JUP',0.0107075,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(352,'MATH',0.000764795,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(353,'SYN',0.000102196,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(354,'AIOZ',0.00314279,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(355,'WAMPL',0.0000188163,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(356,'AERGO',0.000686101,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(357,'INDEX',0.0000491226,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(358,'TONE',0.00748794,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(359,'HIGH',0.0000421861,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(360,'GUSD',0.0000877276,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(361,'FLOW',0.0000904423,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(362,'ROSE',0.00151036,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(363,'OP',0.0000404259,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(364,'APE',0.0000204248,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(365,'MINA',0.000119217,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(366,'MUSE',0.0000152242,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(367,'SYLO',0.0481118,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(368,'CBETH',0.0000000481102,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(369,'DREP',0.000190369,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(370,'ELA',0.0000752005,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(371,'FORT',0.00072436,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(372,'ALEPH',0.00128006,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(373,'DEXT',0.000313268,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(374,'FIS',0.000165879,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(375,'BIT',0.000170525,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(376,'GMT',0.000233047,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(377,'GST',0.00425722,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(378,'MEDIA',0.0000084596,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(379,'C98',0.000335632,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(380,'ARB',0.0000720166,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(381,'00',0.000946398,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(382,'ACS',0.0113463,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(383,'APT',0.00000758182,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(384,'AUDIO',0.000318966,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(385,'AURORA',0.000467647,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(386,'AXL',0.000145896,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(387,'BLUR',0.000143626,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(388,'BOBA',0.000389706,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(389,'DAR',0.000517308,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(390,'DYP',0.000442769,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(391,'EGLD',0.00000213941,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(392,'EUROC',0.0000808816,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(393,'GAL',0.0000505819,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(394,'GHST',0.0000819858,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(395,'HBAR',0.00123229,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(396,'HFT',0.000151899,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(397,'ILV',0.00000150118,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(398,'INJ',0.0000175754,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(399,'KAVA',0.000104243,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(400,'LDO',0.0000369974,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(401,'LIT',0.0000847924,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(402,'LOKA',0.000185221,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(403,'LSETH',0.0000000485793,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(404,'MAGIC',0.000065098,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(405,'METIS',0.00000351932,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(406,'MNDE',0.00208696,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(407,'MONA',0.000000212572,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(408,'MSOL',0.00000395774,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(409,'MXC',0.00392409,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(410,'NEAR',0.0000457401,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(411,'OOKI',0.0223029,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(412,'PNG',0.00208399,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(413,'POND',0.00911948,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(414,'PRIME',0.0000663266,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(415,'PUNDIX',0.000188264,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(416,'PYR',0.0000239214,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(417,'QI',0.009699,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(418,'RARE',0.000722272,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(419,'RPL',0.00000201202,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(420,'STG',0.000126529,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(421,'T',0.0024142,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(422,'TIME',0.00000219979,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(423,'VOXEL',0.000373998,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(424,'WAXL',0.000145921,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(425,'XCN',0.0221984,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(426,'XMON',0.000000031126,0,'2023-04-03 08:00:01','2023-04-03 08:00:01'),
	(427,'UZS',1,1,'2023-04-03 08:00:01','2023-04-03 08:00:01');

/*!40000 ALTER TABLE `CurrencyRates` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table DocumentVerification
# ------------------------------------------------------------

DROP TABLE IF EXISTS `DocumentVerification`;

CREATE TABLE `DocumentVerification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fileName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fileType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `documentStatus` enum('pending','approved') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'pending',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `DocumentVerification` WRITE;
/*!40000 ALTER TABLE `DocumentVerification` DISABLE KEYS */;

INSERT INTO `DocumentVerification` (`id`, `userId`, `fileName`, `fileType`, `documentStatus`, `createdAt`, `updatedAt`)
VALUES
	(3,'338018e0-a00f-11ed-b242-e9a142758e94','586e463f9287531e0074a2c9a0b1b75f.jpeg','image/jpeg','pending','2023-01-29 20:04:17','2023-01-29 20:04:17'),
	(4,'338018e0-a00f-11ed-b242-e9a142758e94','936ad890727017c54a0b04af48d12008.jpeg','image/jpeg','pending','2023-01-29 20:04:17','2023-01-29 20:04:17'),
	(5,'50ec7590-a6c7-11ed-be86-c7e4a6186686','d81ffee548f4e4b2902665127fe01b58.jpeg','image/jpeg','pending','2023-02-08 06:04:40','2023-02-08 06:04:40'),
	(6,'50ec7590-a6c7-11ed-be86-c7e4a6186686','bc26b278dd1fdfd28b45074b63cf9a94.jpeg','image/jpeg','pending','2023-02-08 06:04:58','2023-02-08 06:04:58'),
	(8,'ec50cfd0-a2db-11ed-8a0b-ff0ac055de5c','e1e87344206db2545253690dceee777cundefined','image/svg+xml','pending','2023-03-20 13:07:08','2023-03-20 13:07:08');

/*!40000 ALTER TABLE `DocumentVerification` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table EmailToken
# ------------------------------------------------------------

DROP TABLE IF EXISTS `EmailToken`;

CREATE TABLE `EmailToken` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `EmailToken_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `EmailToken` WRITE;
/*!40000 ALTER TABLE `EmailToken` DISABLE KEYS */;

INSERT INTO `EmailToken` (`id`, `userId`, `email`, `token`, `createdAt`, `updatedAt`)
VALUES
	(1,'d1d6d5a0-5064-11e9-a14e-635e0fd3bfa6','demo@radicalstart.com','1553672955896','2019-03-27 07:49:16','2019-03-27 07:49:16'),
	(2,'977bc550-5069-11e9-a14e-635e0fd3bfa6','qa@radicalstart.com','1553675005475','2019-03-27 08:23:25','2019-03-27 08:23:25'),
	(3,'39e3a630-9e56-11ed-b242-e9a142758e94','aslam@radicalstart.com','1674832869394','2023-01-27 15:21:09','2023-01-27 15:21:09'),
	(4,'92069600-9f3d-11ed-b242-e9a142758e94','Ismoilov.muhammadyor96@gmail.com','1674932231007','2023-01-28 18:57:11','2023-01-28 18:57:11'),
	(5,'338018e0-a00f-11ed-b242-e9a142758e94','zulkhayo.ismailova@gmail.com','1675022266733','2023-01-29 19:57:46','2023-01-29 19:57:46'),
	(6,'5d8ed220-a08c-11ed-9bcf-3fa7f45cef13','installation@radicalstart.com','1675076023911','2023-01-30 10:53:44','2023-01-30 10:53:44'),
	(7,'d21fae20-a09b-11ed-9bcf-3fa7f45cef13','selva@radicalstart.com','1675082662400','2023-01-30 12:44:22','2023-01-30 12:44:22'),
	(8,'e339d4e0-a0bb-11ed-bb9e-8521f0de3c3e','Khasanlabel@gmail.com','1675096434989','2023-01-30 16:33:55','2023-01-30 16:33:55'),
	(9,'01007a70-a22d-11ed-a823-4702e3a8b165','kayalvizhi.m@radicalstart.com','1675254968683','2023-02-01 12:36:09','2023-02-01 12:36:09'),
	(10,'17e40180-a22d-11ed-a823-4702e3a8b165','developer@radicalstart.com','1675255006741','2023-02-01 12:36:47','2023-02-01 12:36:47'),
	(11,'ec50cfd0-a2db-11ed-8a0b-ff0ac055de5c','xamzatello@gmail.com','1675330096088','2023-02-02 09:28:16','2023-02-02 09:28:16'),
	(12,'6c848cb0-a2e5-11ed-a323-3df87f327c3c','rstst400@gmail.com','1675334176339','2023-02-02 10:36:17','2023-02-02 10:36:17'),
	(13,'836ff100-a3ab-11ed-a323-3df87f327c3c','kayalvizhi.m@radicalstart.com','1675419255823','2023-02-03 10:14:15','2023-02-03 10:14:15'),
	(14,'9dcc9940-a3ab-11ed-a323-3df87f327c3c','kayalvizhi.m@radicalstart.com','1675419299474','2023-02-03 10:15:00','2023-02-03 10:15:00'),
	(15,'ae6b40b0-a3c6-11ed-8a79-4988ccdcbdfb','sivasankarim632@gmail.com','1675430923018','2023-02-03 13:28:44','2023-02-03 13:28:44'),
	(16,'b8c2ce20-a3c6-11ed-8a79-4988ccdcbdfb','naren2test@gmail.com','1675430941146','2023-02-03 13:29:01','2023-02-03 13:29:01'),
	(17,'d6c41460-a3c6-11ed-8a79-4988ccdcbdfb','qwellmartin@gmail.com','1675430992037','2023-02-03 13:29:52','2023-02-03 13:29:52'),
	(18,'38d53cb0-a557-11ed-8a79-4988ccdcbdfb','muhammadyor.izmoilov@kvarenda.uz','1675602955257','2023-02-05 13:15:55','2023-02-05 13:15:55'),
	(19,'e828a8f0-a557-11ed-8a79-4988ccdcbdfb','ismoilov.muhammadyor96@gmail.com','1675603248647','2023-02-05 13:20:49','2023-02-05 13:20:49'),
	(20,'32ebf3f0-a559-11ed-8a79-4988ccdcbdfb','jamoltokhtaev1@gmail.com','1675603804334','2023-02-05 13:30:04','2023-02-05 13:30:04'),
	(21,'50ec7590-a6c7-11ed-be86-c7e4a6186686','muhammadyor.ismoilov@kvarenda.uz','1675761050472','2023-02-07 09:10:50','2023-02-07 09:10:50'),
	(22,'90883c50-a6f1-11ed-8aa4-b7ae91017668','aravind.k@radicalstart.com','1675779196052','2023-02-07 14:13:16','2023-02-07 14:13:16'),
	(23,'11b12e90-a7bf-11ed-8ca4-9d4fa0ff605d','sanjik7870@gmail.com','1675867459211','2023-02-08 14:44:19','2023-02-08 14:44:19'),
	(24,'f300ec80-ab54-11ed-a6ae-c92d98724b1b','narutouzumakihinata007@gmail.com','1676261686086','2023-02-13 04:14:46','2023-02-13 04:14:46'),
	(25,'03bce6f0-b276-11ed-a6ae-c92d98724b1b','gokulram.m@radicalstart.com','1677045544694','2023-02-22 05:59:05','2023-02-22 05:59:05'),
	(26,'530a1b40-b345-11ed-a6ae-c92d98724b1b','rstst025@gmail.com','1677134584319','2023-02-23 06:43:04','2023-02-23 06:43:04'),
	(27,'e18f7df0-b34b-11ed-a6ae-c92d98724b1b','tpb7vfbdrd@privaterelay.appleid.com','1677137400629','2023-02-23 07:30:00','2023-02-23 07:30:00'),
	(28,'13418940-b82b-11ed-aaf2-8761493ee12d','naren3test@gmail.com','1677673065705','2023-03-01 12:17:46','2023-03-01 12:17:46'),
	(29,'70f348d0-b82b-11ed-aaf2-8761493ee12d','narendran.j@radicalstart.com','1677673223644','2023-03-01 12:20:23','2023-03-01 12:20:23'),
	(30,'291b5590-b838-11ed-aca0-35390767afb3','naren3test@gmail.com','1677678686313','2023-03-01 13:51:26','2023-03-01 13:51:26'),
	(31,'814d4e80-b838-11ed-aca0-35390767afb3','naren3test@gmail.com','1677678834364','2023-03-01 13:53:54','2023-03-01 13:53:54'),
	(32,'86ea41a0-b85a-11ed-aca0-35390767afb3','ETSQST6IAQG7TT5WS7P3YKCNEM-00@cloudtestlabaccounts.com','1677693446150','2023-03-01 17:57:26','2023-03-01 17:57:26'),
	(33,'dee86a30-b927-11ed-aca0-35390767afb3','appreview1086@icloud.com','1677781641276','2023-03-02 18:27:21','2023-03-02 18:27:21'),
	(34,'75a3c020-bc1e-11ed-aca0-35390767afb3','naren3test@gmail.com','1678107452024','2023-03-06 12:57:32','2023-03-06 12:57:32'),
	(35,'cbed7110-bc1e-11ed-aca0-35390767afb3','naren3test@gmail.com','1678107597472','2023-03-06 12:59:57','2023-03-06 12:59:57'),
	(36,'b5d82eb0-bc9b-11ed-8061-d37d0fa1b7b1','ismoilov.muhammadyor96@gmail.com','1678161246911','2023-03-07 03:54:07','2023-03-07 03:54:07'),
	(37,'230e5de0-c801-11ed-9dcb-3139783422b7','jamoltokhtaev@gmail.com','1679414272391','2023-03-21 15:57:52','2023-03-21 15:57:52');

/*!40000 ALTER TABLE `EmailToken` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table FailedTransactionHistory
# ------------------------------------------------------------

DROP TABLE IF EXISTS `FailedTransactionHistory`;

CREATE TABLE `FailedTransactionHistory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reservationId` int NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` float NOT NULL,
  `currency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `reason` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `transactionId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paymentMethodId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reservationId` (`reservationId`),
  CONSTRAINT `failedtransactionhistory_ibfk_1` FOREIGN KEY (`reservationId`) REFERENCES `Reservation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table FooterBlock
# ------------------------------------------------------------

DROP TABLE IF EXISTS `FooterBlock`;

CREATE TABLE `FooterBlock` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content1` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content2` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content3` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isEnable` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `FooterBlock` WRITE;
/*!40000 ALTER TABLE `FooterBlock` DISABLE KEYS */;

INSERT INTO `FooterBlock` (`id`, `title1`, `content1`, `title2`, `content2`, `title3`, `content3`, `isEnable`, `createdAt`, `updatedAt`)
VALUES
	(1,'24/7 customer support','If you need help while traveling or hosting, contact us at our toll free number: 000 000 0000 000','6,00,00,000 host guarantee','Hosts are protected against property damages for up to 6,00,00,000.','Verified ID','We aim to build a trusted community by giving you more info when youre deciding who to host or stay with.',1,'2018-05-22 11:12:19','2018-05-23 05:37:44'),
	(2,'one','hkh','one ','jkjh','one ','nknk',1,'2018-05-22 11:14:18','2018-05-22 11:14:18'),
	(3,'one','hkhih','one ','nhjlkhk','one ','klnklh',1,'2018-05-22 11:15:07','2018-05-22 11:15:07'),
	(4,'fdf','fdsfds','fdsfd','fdsfds','fdsff','fdssdfds',1,'2018-05-22 11:34:58','2018-05-22 11:34:58'),
	(5,'fdf','fdsfds','fdsfd','fdsfds','fdsff','fdss',1,'2018-05-22 11:35:14','2018-05-22 11:35:14'),
	(6,'fdf','fdsfds','fdsf','fdsfd','fds','fdss',1,'2018-05-22 11:39:06','2018-05-22 11:39:06');

/*!40000 ALTER TABLE `FooterBlock` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ForgotPassword
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ForgotPassword`;

CREATE TABLE `ForgotPassword` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `ForgotPassword_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `ForgotPassword` WRITE;
/*!40000 ALTER TABLE `ForgotPassword` DISABLE KEYS */;

INSERT INTO `ForgotPassword` (`id`, `userId`, `email`, `token`, `createdAt`, `updatedAt`)
VALUES
	(1,'39e3a630-9e56-11ed-b242-e9a142758e94','aslam@radicalstart.com','1675087743934','2023-01-30 14:09:03','2023-01-30 14:09:03'),
	(10,'977bc550-5069-11e9-a14e-635e0fd3bfa6','qa@radicalstart.com','1677669453377','2023-03-01 11:17:33','2023-03-01 11:17:33');

/*!40000 ALTER TABLE `ForgotPassword` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table HomeBanner
# ------------------------------------------------------------

DROP TABLE IF EXISTS `HomeBanner`;

CREATE TABLE `HomeBanner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `enable` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `HomeBanner` WRITE;
/*!40000 ALTER TABLE `HomeBanner` DISABLE KEYS */;

INSERT INTO `HomeBanner` (`id`, `name`, `enable`, `createdAt`, `updatedAt`)
VALUES
	(11,'64aa6c85a4181dd19ead4262889f0434.jpeg',1,'2023-01-28 17:50:48','2023-01-28 17:50:48');

/*!40000 ALTER TABLE `HomeBanner` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ImageBanner
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ImageBanner`;

CREATE TABLE `ImageBanner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `buttonLabel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `ImageBanner` WRITE;
/*!40000 ALTER TABLE `ImageBanner` DISABLE KEYS */;

INSERT INTO `ImageBanner` (`id`, `title`, `description`, `buttonLabel`, `image`, `createdAt`, `updatedAt`)
VALUES
	(1,'It is easier than you think.','Become a host to be free from hosting issues.','Become a host','ea63b4a02c27fa1c8085bd8ca0c51c86.jpeg','2019-03-27 11:53:47','2023-01-28 18:29:06');

/*!40000 ALTER TABLE `ImageBanner` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ListBlockedDates
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ListBlockedDates`;

CREATE TABLE `ListBlockedDates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `reservationId` int DEFAULT NULL,
  `blockedDates` date NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `calendarId` int DEFAULT NULL,
  `calendarStatus` enum('available','blocked','reservation') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isSpecialPrice` double DEFAULT NULL,
  `dayStatus` enum('firstHalf','secondHalf','full') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'full',
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  KEY `reservationId` (`reservationId`),
  CONSTRAINT `ListBlockedDates_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ListBlockedDates_ibfk_2` FOREIGN KEY (`reservationId`) REFERENCES `Reservation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table ListCalendar
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ListCalendar`;

CREATE TABLE `ListCalendar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  CONSTRAINT `ListCalendar_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table Listing
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Listing`;

CREATE TABLE `Listing` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `roomType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `houseType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `residenceType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bedrooms` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `buildingSize` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bedType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `beds` int DEFAULT NULL,
  `personCapacity` int DEFAULT NULL,
  `bathrooms` float DEFAULT NULL,
  `bathroomType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `buildingName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zipcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lng` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isMapTouched` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `coverPhoto` int DEFAULT NULL,
  `bookingType` enum('request','instant') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'instant',
  `isPublished` tinyint(1) NOT NULL DEFAULT '0',
  `isReady` tinyint(1) NOT NULL DEFAULT '0',
  `reviewsCount` tinyint(1) DEFAULT '0',
  `listApprovalStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastUpdatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `Listing_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `Listing` WRITE;
/*!40000 ALTER TABLE `Listing` DISABLE KEYS */;

INSERT INTO `Listing` (`id`, `userId`, `roomType`, `houseType`, `residenceType`, `bedrooms`, `buildingSize`, `bedType`, `beds`, `personCapacity`, `bathrooms`, `bathroomType`, `country`, `street`, `buildingName`, `city`, `state`, `zipcode`, `lat`, `lng`, `isMapTouched`, `createdAt`, `updatedAt`, `title`, `description`, `coverPhoto`, `bookingType`, `isPublished`, `isReady`, `reviewsCount`, `listApprovalStatus`, `lastUpdatedAt`)
VALUES
	(14,'50ec7590-a6c7-11ed-be86-c7e4a6186686',NULL,NULL,'1','2',NULL,NULL,2,2,1.5,NULL,'UZ','Toshkent shahar, Yashnabod tumani, uysozlar ko\'chasi, 44 uy, 112 xonadon.',NULL,'Tashkent','Tashkent city','100000','41.28531556665869','69.32372687672117',1,'2023-02-07 11:01:50','2023-04-03 18:00:00','My First Listing','Pochin is done ',NULL,'request',1,1,0,'approved','2023-03-21 16:25:58'),
	(15,'11b12e90-a7bf-11ed-8ca4-9d4fa0ff605d',NULL,NULL,'1','1',NULL,NULL,1,1,1,NULL,'UZ','26 Parkent ko\'chasi','65 ','Tashkent ','Tashkent ','10007','41.31142050096621','69.32734969720377',1,'2023-02-08 14:51:06','2023-04-03 18:00:00','Комфортная 2ух комнатная квартира ','Я владелец \n',NULL,'request',1,1,0,'approved','2023-02-08 15:00:01'),
	(20,'50ec7590-a6c7-11ed-be86-c7e4a6186686',NULL,NULL,'1','3',NULL,NULL,1,9,1.5,NULL,'UZ','Акдарья','2проезд 13Б','Ташкент','Ташкент','100000','41.26876288195879','69.32575388477173',1,'2023-03-19 12:10:04','2023-04-03 18:00:00','Компактный участокв стиле хайтек','Если вам по душе минимализм и чувство вкуса в сите хайтек то вам наш участок определенно должен понравиться. 3 комнатный участок с общей пложадью 1,47 сотой порадует вас всеми удобствами. Есть 2 санузла, парковочное место для двух автомобилей и садик',NULL,'request',1,1,0,'approved','2023-03-21 16:31:00'),
	(21,'11b12e90-a7bf-11ed-8ca4-9d4fa0ff605d',NULL,NULL,'1','1',NULL,NULL,1,2,1,NULL,'UZ','Parkent','65','Tashkent','Tashkent','100007','41.31100582361138','69.32502651580812',1,'2023-03-20 15:46:24','2023-04-03 18:00:00','Комфорт ','1 этаж',NULL,'request',1,1,0,'approved','2023-03-20 15:50:15');

/*!40000 ALTER TABLE `Listing` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ListingData
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ListingData`;

CREATE TABLE `ListingData` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int DEFAULT NULL,
  `bookingNoticeTime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `checkInStart` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Flexible',
  `checkInEnd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Flexible',
  `minNight` int DEFAULT NULL,
  `maxNight` int DEFAULT NULL,
  `priceMode` tinyint(1) DEFAULT NULL,
  `basePrice` double DEFAULT NULL,
  `maxPrice` float DEFAULT NULL,
  `currency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hostingFrequency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `weeklyDiscount` float DEFAULT '0',
  `monthlyDiscount` float DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `cleaningPrice` double DEFAULT NULL,
  `maxDaysNotice` enum('unavailable','3months','6months','9months','12months','available') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unavailable',
  `cancellationPolicy` int DEFAULT '1',
  `taxRate` float DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  CONSTRAINT `ListingData_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `ListingData` WRITE;
/*!40000 ALTER TABLE `ListingData` DISABLE KEYS */;

INSERT INTO `ListingData` (`id`, `listId`, `bookingNoticeTime`, `checkInStart`, `checkInEnd`, `minNight`, `maxNight`, `priceMode`, `basePrice`, `maxPrice`, `currency`, `hostingFrequency`, `weeklyDiscount`, `monthlyDiscount`, `createdAt`, `updatedAt`, `cleaningPrice`, `maxDaysNotice`, `cancellationPolicy`, `taxRate`)
VALUES
	(11,14,'58','Flexible','Flexible',2,42,NULL,250000,NULL,'UZS',NULL,10,20,'2023-02-07 11:07:02','2023-03-21 16:25:58',150000,'12months',1,0),
	(12,15,'58','18','22',90,100,NULL,20,NULL,'USD',NULL,7,10,'2023-02-08 15:00:01','2023-02-08 15:00:01',15,'3months',1,0),
	(17,20,'58','8','9',120,150,NULL,400000,NULL,'UZS',NULL,5,20,'2023-03-19 13:15:43','2023-03-21 16:31:00',250000,'12months',2,0),
	(18,21,'58','12','19',1,1,NULL,360000,NULL,'UZS',NULL,1,5,'2023-03-20 15:50:15','2023-03-20 15:50:15',100000,'3months',1,0);

/*!40000 ALTER TABLE `ListingData` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ListingPermissionHistory
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ListingPermissionHistory`;

CREATE TABLE `ListingPermissionHistory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table ListPhotos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ListPhotos`;

CREATE TABLE `ListPhotos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `isCover` int DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  CONSTRAINT `ListPhotos_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `ListPhotos` WRITE;
/*!40000 ALTER TABLE `ListPhotos` DISABLE KEYS */;

INSERT INTO `ListPhotos` (`id`, `listId`, `name`, `type`, `isCover`, `createdAt`, `updatedAt`)
VALUES
	(101,14,'eb244b28d03d95369ee2198e3135e55e.jpeg','image/jpeg',0,'2023-02-07 11:04:34','2023-02-07 11:04:34'),
	(102,14,'82b7c1bd19d9de26b887e0b52ac4f247.jpeg','image/jpeg',0,'2023-02-07 11:04:34','2023-02-07 11:04:34'),
	(103,14,'e3e79612f78b34162aab6cc1780fabe7.jpeg','image/jpeg',0,'2023-02-07 11:04:35','2023-02-07 11:04:35'),
	(104,14,'357a4a10f9d5984dfae92860962965be.jpeg','image/jpeg',0,'2023-02-07 11:04:35','2023-02-07 11:04:35'),
	(105,14,'4f0cc60c12537ad28d2d11396159ded6.jpeg','image/jpeg',0,'2023-02-07 11:04:35','2023-02-07 11:04:35'),
	(106,14,'f3a4d8b1fb486447d839ff3e44e07982.jpeg','image/jpeg',0,'2023-02-07 11:04:36','2023-02-07 11:04:36'),
	(107,14,'62ed2621e0f82fc3819728f35632165a.jpeg','image/jpeg',0,'2023-02-07 11:04:36','2023-02-07 11:04:36'),
	(108,14,'73dd828414b90e0e02371e4f7e202953.jpeg','image/jpeg',0,'2023-02-07 11:04:36','2023-02-07 11:04:36'),
	(109,15,'f5f3aa5838951ee6a02ffa69392635db.jpeg','image/jpeg',0,'2023-02-08 14:54:40','2023-02-08 14:54:40'),
	(110,15,'b9b5874d166b2c72ecf260b425c339eb.jpeg','image/jpeg',0,'2023-02-08 14:54:40','2023-02-08 14:54:40'),
	(111,15,'9e2082d4d24c3c8af76f15082c07116e.jpeg','image/jpeg',0,'2023-02-08 14:54:41','2023-02-08 14:54:41'),
	(112,15,'8a68c7a4ac8995bc8b949929b9829e26.jpeg','image/jpeg',0,'2023-02-08 14:54:41','2023-02-08 14:54:41'),
	(127,20,'2e4ba4d14e95c325fffb2ca71d172d5e.jpeg','image/jpeg',0,'2023-03-19 12:29:49','2023-03-19 12:29:49'),
	(128,21,'4168867ff873d35c2d97825d36ebd5f7.jpeg','image/jpeg',0,'2023-03-20 15:48:26','2023-03-20 15:48:26'),
	(129,21,'a6a33481f06135137a3164801a2bdfc5.jpeg','image/jpeg',0,'2023-03-20 15:48:26','2023-03-20 15:48:26'),
	(130,21,'bc96b350a6f40ed29332b62b87fd5ab9.jpeg','image/jpeg',0,'2023-03-20 15:48:27','2023-03-20 15:48:27'),
	(131,21,'e48f3aa4c74ec5a2fc519326ceb8f03d.jpeg','image/jpeg',0,'2023-03-20 15:48:27','2023-03-20 15:48:27'),
	(132,21,'a7202f86377726d60dba11f2a2f2d334.jpeg','image/jpeg',0,'2023-03-20 15:48:27','2023-03-20 15:48:27'),
	(133,21,'922f8bab95bdc763cb6dc7cf68b1aee1.jpeg','image/jpeg',0,'2023-03-20 15:48:28','2023-03-20 15:48:28'),
	(134,21,'fd12ddc9f0b1d78f45a1bf0ffb4c809d.jpeg','image/jpeg',0,'2023-03-20 15:48:28','2023-03-20 15:48:28'),
	(135,21,'5946f717f1128ba0755c0648f247730d.jpeg','image/jpeg',0,'2023-03-20 15:48:28','2023-03-20 15:48:28'),
	(136,21,'1b2a563cc994df84b0e28a7c9c4b63ff.jpeg','image/jpeg',0,'2023-03-20 15:48:29','2023-03-20 15:48:29'),
	(137,21,'6bb965326b187cb5de51490c64bc846f.jpeg','image/jpeg',0,'2023-03-20 15:48:29','2023-03-20 15:48:29'),
	(138,21,'fd42c03b71e45edcd87fe45e89c3779a.jpeg','image/jpeg',0,'2023-03-20 15:48:30','2023-03-20 15:48:30'),
	(139,21,'0366b1afa9487362efa17f8251479851.jpeg','image/jpeg',0,'2023-03-20 15:48:30','2023-03-20 15:48:30');

/*!40000 ALTER TABLE `ListPhotos` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ListSettings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ListSettings`;

CREATE TABLE `ListSettings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typeId` int NOT NULL,
  `itemName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `otherItemName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maximum` int DEFAULT NULL,
  `minimum` int DEFAULT NULL,
  `startValue` int DEFAULT NULL,
  `endValue` int DEFAULT NULL,
  `step` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isEnable` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `itemDescription` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `typeId` (`typeId`),
  CONSTRAINT `ListSettings_ibfk_1` FOREIGN KEY (`typeId`) REFERENCES `ListSettingsTypes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `ListSettings` WRITE;
/*!40000 ALTER TABLE `ListSettings` DISABLE KEYS */;

INSERT INTO `ListSettings` (`id`, `typeId`, `itemName`, `otherItemName`, `maximum`, `minimum`, `startValue`, `endValue`, `step`, `isEnable`, `createdAt`, `updatedAt`, `itemDescription`, `image`)
VALUES
	(5,3,'House',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 07:46:35','2018-04-11 15:19:10',NULL,NULL),
	(6,3,'Apartment',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 07:46:42','2017-01-09 07:46:42',NULL,NULL),
	(7,3,'Bed & Breakfast',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 07:46:49','2017-01-09 07:46:49',NULL,NULL),
	(8,3,'Boutique hotel',NULL,NULL,NULL,NULL,NULL,NULL,'0','2017-01-09 07:46:57','2018-05-05 11:23:23',NULL,NULL),
	(10,4,'1-5 Rooms',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 07:49:23','2017-01-09 07:49:23',NULL,NULL),
	(11,4,'6-25 Rooms',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 07:49:35','2017-01-09 07:49:35',NULL,NULL),
	(14,5,'bedroom  ','bedrooms ',NULL,NULL,1,10,NULL,'1','2017-01-09 07:53:04','2018-05-02 04:54:59',NULL,NULL),
	(15,6,'bed','beds',NULL,NULL,1,16,NULL,'1','2017-01-09 07:53:48','2018-04-28 04:50:39',NULL,NULL),
	(16,7,'Single',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 07:59:47','2017-01-09 07:59:47',NULL,NULL),
	(17,7,'Double',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 07:59:57','2017-01-09 07:59:57',NULL,NULL),
	(18,7,'Queen',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:00:05','2017-01-09 08:00:05',NULL,NULL),
	(19,7,'King',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:00:13','2017-01-09 08:00:13',NULL,NULL),
	(20,7,'Bunk bed',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:00:20','2017-01-09 08:00:20',NULL,NULL),
	(21,8,'bathroom','bathrooms',NULL,NULL,1,8,NULL,'1','2017-01-09 08:12:24','2018-04-10 07:04:01',NULL,NULL),
	(22,9,'Private Room',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:31:16','2017-01-09 08:31:16',NULL,NULL),
	(23,9,'Shared Room',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:31:28','2017-01-09 08:31:28',NULL,NULL),
	(24,9,'Other',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:31:32','2017-01-09 08:31:32',NULL,NULL),
	(25,10,'Towels, bed sheets, soap, and toilet paper',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:43:32','2017-01-09 08:43:32',NULL,NULL),
	(26,10,'Wifi',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:43:42','2017-01-09 08:43:42',NULL,NULL),
	(27,10,'Shampoo ',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:43:51','2017-01-09 08:43:51',NULL,NULL),
	(28,10,'Closet/drawers',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:44:00','2017-01-09 08:44:00',NULL,NULL),
	(29,11,'Smoke detector',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:44:17','2017-01-09 08:44:17',NULL,NULL),
	(30,11,'Carbon monoxide detector',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:44:25','2017-01-09 08:44:25',NULL,NULL),
	(31,11,'First aid kit ',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:44:33','2017-01-09 08:44:33',NULL,NULL),
	(32,11,'Safety card',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 08:44:41','2017-01-09 08:44:41',NULL,NULL),
	(33,12,'Kitchen',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 09:05:19','2017-01-09 09:05:19',NULL,NULL),
	(34,12,'Laundry – washer ',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 09:05:26','2017-01-09 09:05:26',NULL,NULL),
	(35,12,'Laundry – dryer',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 09:05:33','2017-01-09 09:05:33',NULL,NULL),
	(36,12,'Parking',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-09 09:05:40','2017-01-09 09:05:40',NULL,NULL),
	(39,2,'guest','guests',NULL,NULL,1,20,NULL,'1','2017-01-09 10:51:56','2018-05-22 08:47:42',NULL,NULL),
	(45,13,'Payment information',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 07:48:16','2017-01-18 07:48:16',NULL,NULL),
	(46,13,'Agree to your House Rules',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 08:02:20','2018-04-12 08:08:01',NULL,NULL),
	(47,13,'Tell you their trip purpose',NULL,NULL,NULL,NULL,NULL,NULL,'0','2017-01-18 08:02:29','2023-02-09 12:27:30',NULL,NULL),
	(48,14,'Suitable for children (2-14 years) ',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 10:00:20','2018-03-15 18:16:04',NULL,NULL),
	(49,14,'Suitable for infants (Under 2 years)',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 10:00:28','2017-01-18 10:00:28',NULL,NULL),
	(50,14,'Suitable for pets',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 10:00:35','2017-01-18 10:00:35',NULL,NULL),
	(51,14,'Smoking Not allowed ',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 10:00:41','2018-04-25 01:16:08',NULL,NULL),
	(52,14,'Events or parties allowed',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 10:00:56','2017-01-18 10:00:56',NULL,NULL),
	(53,15,'Meet RentAll’s guest requirements',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 11:01:08','2017-01-18 11:01:08',NULL,NULL),
	(54,15,'Agree to your house rules',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 11:01:16','2017-01-18 11:01:16',NULL,NULL),
	(55,15,'Tell you their trip purpose',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 11:01:25','2017-01-18 11:01:25',NULL,NULL),
	(56,15,'Let you know how many people are coming on the trip',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 11:03:00','2018-05-02 04:57:56',NULL,NULL),
	(58,16,'1 day',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 15:19:43','2017-01-18 15:19:43',NULL,NULL),
	(59,16,'2 days',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 15:19:48','2017-01-18 15:19:48',NULL,NULL),
	(60,16,'3 days',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 15:19:58','2017-01-18 15:19:58',NULL,NULL),
	(61,16,'7 days',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 15:20:03','2017-01-18 15:20:03',NULL,NULL),
	(62,17,'Dates unavailable by default',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 18:01:01','2017-01-18 18:01:01',NULL,NULL),
	(63,17,'Any time',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 18:01:16','2017-01-18 18:01:16',NULL,NULL),
	(64,17,'3 months',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 18:01:22','2017-01-18 18:01:22',NULL,NULL),
	(65,17,'6 months',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 18:01:29','2017-01-18 18:01:29',NULL,NULL),
	(66,17,'1 year',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-01-18 18:01:42','2017-01-18 18:01:42',NULL,NULL),
	(67,18,'night min','nights min',NULL,NULL,1,366,NULL,'1','2017-01-18 18:18:28','2023-02-09 12:28:33',NULL,NULL),
	(68,19,'night max','nights max',NULL,NULL,1,366,NULL,'1','2017-01-18 18:19:00','2023-02-09 12:28:29',NULL,NULL),
	(73,10,'Hair dryer',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-07-28 11:36:34','2017-07-28 14:45:50',NULL,NULL),
	(74,1,'Guest Room',NULL,NULL,NULL,NULL,NULL,NULL,'0','2017-07-28 14:21:14','2018-04-27 14:15:42',NULL,NULL),
	(76,1,'Private Room',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-07-30 04:24:13','2017-07-30 04:24:13',NULL,NULL),
	(77,1,'Entire Place',NULL,NULL,NULL,NULL,NULL,NULL,'1','2017-07-30 04:24:18','2018-04-27 13:10:06',NULL,NULL),
	(87,10,'LED TV',NULL,NULL,NULL,NULL,NULL,NULL,'0','2018-04-10 05:13:44','2018-04-28 04:52:14',NULL,NULL),
	(97,10,'TV',NULL,NULL,NULL,NULL,NULL,NULL,'0','2018-04-10 07:29:11','2018-04-10 07:29:32',NULL,NULL),
	(100,3,'Cottage ',NULL,NULL,NULL,NULL,NULL,NULL,'0','2018-04-10 08:56:22','2018-04-28 04:47:07',NULL,NULL),
	(102,4,'25-50 Rooms',NULL,NULL,NULL,NULL,NULL,NULL,'1','2018-04-10 08:57:40','2018-04-28 04:48:13',NULL,NULL),
	(103,14,'Loud Music Not Allowed',NULL,NULL,NULL,NULL,NULL,NULL,'0','2018-04-10 09:00:48','2018-05-02 04:57:29',NULL,NULL),
	(105,4,'50-100 Rooms',NULL,NULL,NULL,NULL,NULL,NULL,'1','2018-04-12 08:08:55','2018-04-28 04:48:27',NULL,NULL),
	(106,10,'item',NULL,NULL,NULL,NULL,NULL,NULL,'0','2018-04-12 08:09:22','2018-04-23 15:27:14',NULL,NULL),
	(110,1,'Landscape Trailer',NULL,NULL,NULL,NULL,NULL,NULL,'0','2018-04-24 00:24:06','2018-04-27 14:15:50',NULL,NULL),
	(112,1,'Tent',NULL,NULL,NULL,NULL,NULL,NULL,'0','2018-04-24 02:28:25','2018-05-02 04:53:56',NULL,NULL),
	(113,1,'Shared Room',NULL,NULL,NULL,NULL,NULL,NULL,'1','2018-04-24 02:28:41','2018-04-24 02:28:41',NULL,NULL),
	(118,10,'Parking',NULL,NULL,NULL,NULL,NULL,NULL,'1','2018-04-24 02:33:13','2018-04-24 02:33:13',NULL,NULL),
	(119,10,'Swimming Pool',NULL,NULL,NULL,NULL,NULL,NULL,'1','2018-04-24 02:33:23','2020-04-13 13:09:35','d8e103a2e500b56205bd28147fccae88.png',NULL),
	(123,3,'House with garden',NULL,NULL,NULL,NULL,NULL,NULL,'0','2018-04-25 14:56:34','2018-04-28 04:47:28',NULL,NULL),
	(125,14,'Loud People are not allowed',NULL,NULL,NULL,NULL,NULL,NULL,'0','2018-04-25 14:59:40','2018-04-28 04:27:21',NULL,NULL),
	(126,4,'100+ Rooms',NULL,NULL,NULL,NULL,NULL,NULL,'1','2018-04-28 04:49:12','2018-04-28 04:49:12',NULL,NULL),
	(127,13,'Confirmed Email',NULL,NULL,NULL,NULL,NULL,NULL,'1','2018-04-28 04:53:50','2018-04-28 04:53:50',NULL,NULL),
	(128,16,'Same day',NULL,NULL,NULL,NULL,NULL,NULL,'1','2018-04-28 04:55:21','2018-04-30 21:33:25',NULL,NULL);

/*!40000 ALTER TABLE `ListSettings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ListSettingsTypes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ListSettingsTypes`;

CREATE TABLE `ListSettingsTypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) NOT NULL,
  `fieldType` enum('stringType','numberType') DEFAULT 'stringType',
  `step` int DEFAULT '1',
  `isEnable` varchar(255) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `typeLabel` varchar(255) DEFAULT NULL,
  `isMultiValue` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `ListSettingsTypes` WRITE;
/*!40000 ALTER TABLE `ListSettingsTypes` DISABLE KEYS */;

INSERT INTO `ListSettingsTypes` (`id`, `typeName`, `fieldType`, `step`, `isEnable`, `createdAt`, `updatedAt`, `typeLabel`, `isMultiValue`)
VALUES
	(1,'roomType','stringType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Room Type',0),
	(2,'personCapacity','numberType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Person Capacity',0),
	(3,'houseType','stringType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','House Type',0),
	(4,'buildingSize','stringType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Building Size',0),
	(5,'bedrooms','numberType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Bed Rooms',0),
	(6,'beds','numberType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Beds',0),
	(7,'bedType','stringType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Bed Type',0),
	(8,'bathrooms','numberType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Bathrooms',0),
	(9,'bathroomType','stringType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Bathroom Type',0),
	(10,'essentialsAmenities','stringType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Essential Amenities',1),
	(11,'safetyAmenities','stringType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Safety Amenities',1),
	(12,'spaces','stringType',1,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Spaces',1),
	(13,'guestRequirements','stringType',3,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Guest Requirements',0),
	(14,'houseRules','stringType',3,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','House Rules',1),
	(15,'reviewGuestBook','stringType',3,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Review How Guests Book',0),
	(16,'bookingNoticeTime','stringType',3,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Booking Notice Time',0),
	(17,'maxDaysNotice','stringType',3,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Maximum Days Notice',0),
	(18,'minNight','numberType',3,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Minimum Nights',0),
	(19,'maxNight','numberType',3,'1','2019-03-27 11:53:47','0000-00-00 00:00:00','Maximum Nights',0);

/*!40000 ALTER TABLE `ListSettingsTypes` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ListViews
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ListViews`;

CREATE TABLE `ListViews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`,`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `ListViews` WRITE;
/*!40000 ALTER TABLE `ListViews` DISABLE KEYS */;

INSERT INTO `ListViews` (`id`, `listId`, `userId`, `createdAt`, `updatedAt`)
VALUES
	(1,1,'977bc550-5069-11e9-a14e-635e0fd3bfa6','2019-07-04 13:37:45','2019-07-04 13:37:45'),
	(2,6,'d1d6d5a0-5064-11e9-a14e-635e0fd3bfa6','2020-04-13 12:54:11','2020-04-13 12:54:11'),
	(3,6,'d1d6d5a0-5064-11e9-a14e-635e0fd3bfa6','2022-11-03 12:40:55','2022-11-03 12:40:55'),
	(4,1,'338018e0-a00f-11ed-b242-e9a142758e94','2023-01-29 20:00:05','2023-01-29 20:00:05'),
	(5,6,'39e3a630-9e56-11ed-b242-e9a142758e94','2023-01-30 15:50:05','2023-01-30 15:50:05'),
	(6,4,'39e3a630-9e56-11ed-b242-e9a142758e94','2023-01-30 15:51:44','2023-01-30 15:51:44'),
	(7,7,'e339d4e0-a0bb-11ed-bb9e-8521f0de3c3e','2023-01-30 16:54:59','2023-01-30 16:54:59'),
	(8,7,'39e3a630-9e56-11ed-b242-e9a142758e94','2023-01-31 09:09:44','2023-01-31 09:09:44'),
	(9,1,'39e3a630-9e56-11ed-b242-e9a142758e94','2023-01-31 09:15:18','2023-01-31 09:15:18'),
	(10,4,'977bc550-5069-11e9-a14e-635e0fd3bfa6','2023-02-02 12:27:49','2023-02-02 12:27:49'),
	(11,4,'32ebf3f0-a559-11ed-8a79-4988ccdcbdfb','2023-02-05 13:31:45','2023-02-05 13:31:45'),
	(12,6,'ec50cfd0-a2db-11ed-8a0b-ff0ac055de5c','2023-02-16 04:11:07','2023-02-16 04:11:07'),
	(13,4,'977bc550-5069-11e9-a14e-635e0fd3bfa6','2023-03-01 11:39:15','2023-03-01 11:39:15'),
	(14,3,'977bc550-5069-11e9-a14e-635e0fd3bfa6','2023-03-01 11:47:09','2023-03-01 11:47:09'),
	(15,15,'50ec7590-a6c7-11ed-be86-c7e4a6186686','2023-03-20 08:48:24','2023-03-20 08:48:24'),
	(16,15,'ec50cfd0-a2db-11ed-8a0b-ff0ac055de5c','2023-03-20 12:56:10','2023-03-20 12:56:10'),
	(17,20,'338018e0-a00f-11ed-b242-e9a142758e94','2023-03-21 12:09:10','2023-03-21 12:09:10'),
	(18,14,'230e5de0-c801-11ed-9dcb-3139783422b7','2023-03-21 15:57:54','2023-03-21 15:57:54'),
	(19,15,'230e5de0-c801-11ed-9dcb-3139783422b7','2023-03-21 15:58:17','2023-03-21 15:58:17'),
	(20,20,'230e5de0-c801-11ed-9dcb-3139783422b7','2023-03-21 16:13:41','2023-03-21 16:13:41'),
	(21,21,'50ec7590-a6c7-11ed-be86-c7e4a6186686','2023-03-21 16:25:13','2023-03-21 16:25:13');

/*!40000 ALTER TABLE `ListViews` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table PaymentMethods
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PaymentMethods`;

CREATE TABLE `PaymentMethods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `processedIn` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fees` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `details` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `isEnable` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `paymentType` tinyint(1) DEFAULT '1',
  `paymentName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `PaymentMethods` WRITE;
/*!40000 ALTER TABLE `PaymentMethods` DISABLE KEYS */;

INSERT INTO `PaymentMethods` (`id`, `name`, `processedIn`, `fees`, `currency`, `details`, `isEnable`, `createdAt`, `updatedAt`, `paymentType`, `paymentName`)
VALUES
	(1,'Paypal','3–4 hours','PayPal withdrawal fees','USD','Connect your existing PayPal account.',1,'2017-04-18 20:13:25','2017-04-18 20:13:25',1,'PayPal'),
	(2,'Bank Account','5–7 business days','No fees','USD','Add your bank details',1,'2018-01-04 17:26:45','2018-01-04 17:26:45',2,'Stripe');

/*!40000 ALTER TABLE `PaymentMethods` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table PaymentSettings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PaymentSettings`;

CREATE TABLE `PaymentSettings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `paymentName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentStatus` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'false',
  `paymentMode` enum('live','sandbox') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'sandbox',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `APIUserId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `APIPassword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `APISecret` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `AppId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `PaymentSettings` WRITE;
/*!40000 ALTER TABLE `PaymentSettings` DISABLE KEYS */;

INSERT INTO `PaymentSettings` (`id`, `paymentName`, `paymentStatus`, `paymentMode`, `email`, `APIUserId`, `APIPassword`, `APISecret`, `AppId`, `createdAt`, `updatedAt`)
VALUES
	(1,'paypal','false','sandbox','admin@gmail.com','Hello User Id','Hello password','Hello Secret','Hello Id','2019-03-27 11:53:47','2017-02-24 11:29:31');

/*!40000 ALTER TABLE `PaymentSettings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Payout
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Payout`;

CREATE TABLE `Payout` (
  `id` int NOT NULL AUTO_INCREMENT,
  `methodId` int NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payEmail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address1` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `address2` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `zipcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `default` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `last4Digits` int DEFAULT NULL,
  `isVerified` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `Payout_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table PopularLocation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PopularLocation`;

CREATE TABLE `PopularLocation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `locationAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isEnable` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `PopularLocation` WRITE;
/*!40000 ALTER TABLE `PopularLocation` DISABLE KEYS */;

INSERT INTO `PopularLocation` (`id`, `location`, `locationAddress`, `image`, `isEnable`, `createdAt`, `updatedAt`)
VALUES
	(15,'Tashkent City','Hilton Tashkent City, Tashkent, Uzbekistan','13b84b18418e4d02dfd6b68ae12ee869.jpeg',1,'2023-01-28 18:23:55','2023-01-28 18:23:55'),
	(16,'Samarqand','Samarqand Darvoza, Samarkand Darvoza Street, Tashkent, Uzbekistan','4028f9ae0774525091fd0cd7c17e2253.jpeg',1,'2023-01-29 09:36:02','2023-01-29 09:36:02'),
	(17,'Bukhara','Bukhara, Uzbekistan','1ab2bc97062c65fe80e32801289695a3.jpeg',1,'2023-01-29 09:36:30','2023-01-29 09:36:30'),
	(18,'Khiva','Khiva, Uzbekistan','ea4969415d8c4d7988d84f67570b885c.jpeg',1,'2023-01-29 09:36:48','2023-01-29 09:36:48'),
	(19,'Tashkent','Tashkent, Uzbekistan','ffa3221bd2535e40e9c0ecc0ee6982ac.jpeg',1,'2023-01-29 09:37:06','2023-01-29 09:37:06'),
	(20,'Chorvoq','Chorvoq, Uzbekistan','01ff2109ed743933233333b88cadbedf.jpeg',1,'2023-02-26 14:34:25','2023-02-26 14:34:25');

/*!40000 ALTER TABLE `PopularLocation` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Recommend
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Recommend`;

CREATE TABLE `Recommend` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `Recommend` WRITE;
/*!40000 ALTER TABLE `Recommend` DISABLE KEYS */;

INSERT INTO `Recommend` (`id`, `listId`, `createdAt`, `updatedAt`)
VALUES
	(1,7,'2019-03-27 10:32:50','2019-03-27 10:32:50'),
	(2,6,'2019-03-27 10:32:51','2019-03-27 10:32:51'),
	(3,5,'2019-03-27 10:32:52','2019-03-27 10:32:52'),
	(4,4,'2019-03-27 10:32:53','2019-03-27 10:32:53'),
	(5,3,'2019-03-27 10:32:54','2019-03-27 10:32:54'),
	(6,2,'2019-03-27 10:32:55','2019-03-27 10:32:55'),
	(7,1,'2019-03-27 10:32:56','2019-03-27 10:32:56');

/*!40000 ALTER TABLE `Recommend` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ReportUser
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ReportUser`;

CREATE TABLE `ReportUser` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reporterId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `reportType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `ReportUser` WRITE;
/*!40000 ALTER TABLE `ReportUser` DISABLE KEYS */;

INSERT INTO `ReportUser` (`id`, `reporterId`, `userId`, `reportType`, `createdAt`, `updatedAt`)
VALUES
	(1,'530a1b40-b345-11ed-a6ae-c92d98724b1b','d1d6d5a0-5064-11e9-a14e-635e0fd3bfa6','shouldnt_available','2023-02-23 06:47:45','2023-02-23 06:47:45');

/*!40000 ALTER TABLE `ReportUser` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Reservation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Reservation`;

CREATE TABLE `Reservation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `hostId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guestId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `checkIn` date NOT NULL,
  `checkOut` date NOT NULL,
  `guests` int DEFAULT '1',
  `message` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `basePrice` float NOT NULL,
  `cleaningPrice` float DEFAULT NULL,
  `currency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` float DEFAULT NULL,
  `discountType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `guestServiceFee` float DEFAULT NULL,
  `hostServiceFee` float DEFAULT NULL,
  `total` float(9,2) DEFAULT NULL,
  `confirmationCode` int DEFAULT NULL,
  `paymentState` enum('pending','completed') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'pending',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `payoutId` int DEFAULT NULL,
  `reservationState` enum('pending','approved','declined','completed','cancelled','expired') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `paymentMethodId` tinyint(1) DEFAULT NULL,
  `cancellationPolicy` int DEFAULT NULL,
  `isSpecialPriceAverage` float DEFAULT NULL,
  `dayDifference` float DEFAULT NULL,
  `paymentIntentId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `taxRate` float DEFAULT '0',
  `isHold` tinyint(1) NOT NULL DEFAULT '0',
  `paymentAttempt` int NOT NULL DEFAULT '0',
  `checkInStart` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `checkInEnd` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `bookingType` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hostServiceFeeType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hostServiceFeeValue` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `Reservation` WRITE;
/*!40000 ALTER TABLE `Reservation` DISABLE KEYS */;

INSERT INTO `Reservation` (`id`, `listId`, `hostId`, `guestId`, `checkIn`, `checkOut`, `guests`, `message`, `basePrice`, `cleaningPrice`, `currency`, `discount`, `discountType`, `guestServiceFee`, `hostServiceFee`, `total`, `confirmationCode`, `paymentState`, `createdAt`, `updatedAt`, `payoutId`, `reservationState`, `paymentMethodId`, `cancellationPolicy`, `isSpecialPriceAverage`, `dayDifference`, `paymentIntentId`, `taxRate`, `isHold`, `paymentAttempt`, `checkInStart`, `checkInEnd`, `bookingType`, `hostServiceFeeType`, `hostServiceFeeValue`)
VALUES
	(1,15,'11b12e90-a7bf-11ed-8ca4-9d4fa0ff605d','50ec7590-a6c7-11ed-be86-c7e4a6186686','2023-03-21','2023-06-19',1,'Ассалому Алейкум Санжан,\nЭто тестовая бронь.\n\nПросто подтверди бронирование и все :)',20,15,'USD',180,'10% ежемесячная скидка цены',163.5,81.75,1635.00,893034,'pending','2023-03-20 10:49:20','2023-03-21 06:55:00',NULL,'expired',1,1,20,90,NULL,0,0,0,'18','22','request','percentage',5),
	(2,15,'11b12e90-a7bf-11ed-8ca4-9d4fa0ff605d','50ec7590-a6c7-11ed-be86-c7e4a6186686','2023-03-21','2023-06-19',1,'Ассалому Алейкум Санжан,\nЭто тестовая бронь.\n\nПросто подтверди бронирование и все :)',20,15,'USD',180,'10% ежемесячная скидка цены',163.5,81.75,1635.00,912432,'pending','2023-03-20 10:49:28','2023-03-21 06:55:00',NULL,'expired',1,1,20,90,NULL,0,0,0,'18','22','request','percentage',5),
	(3,15,'11b12e90-a7bf-11ed-8ca4-9d4fa0ff605d','50ec7590-a6c7-11ed-be86-c7e4a6186686','2023-03-22','2023-06-20',1,'test',20,15,'USD',180,'10% monthly price discount',163.5,81.75,1635.00,311462,'pending','2023-03-21 16:21:31','2023-03-22 06:55:00',NULL,'expired',1,1,20,90,NULL,0,0,0,'18','22','request','percentage',5),
	(4,15,'11b12e90-a7bf-11ed-8ca4-9d4fa0ff605d','50ec7590-a6c7-11ed-be86-c7e4a6186686','2023-03-22','2023-06-20',1,'test',20,15,'USD',180,'10% monthly price discount',163.5,81.75,1635.00,948742,'pending','2023-03-21 16:21:40','2023-03-22 06:55:00',NULL,'expired',1,1,20,90,NULL,0,0,0,'18','22','request','percentage',5);

/*!40000 ALTER TABLE `Reservation` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ReservationSpecialPricing
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ReservationSpecialPricing`;

CREATE TABLE `ReservationSpecialPricing` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int DEFAULT NULL,
  `reservationId` int DEFAULT NULL,
  `blockedDates` date NOT NULL,
  `isSpecialPrice` float DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table Reviews
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Reviews`;

CREATE TABLE `Reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reservationId` int NOT NULL,
  `listId` int NOT NULL,
  `authorId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `reviewContent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `rating` float NOT NULL,
  `privateFeedback` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `parentId` int DEFAULT '0',
  `automated` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  `isAdminEnable` int DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `reservationId` (`reservationId`),
  KEY `userId` (`userId`),
  CONSTRAINT `Reviews_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table SearchSettings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SearchSettings`;

CREATE TABLE `SearchSettings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `minPrice` float NOT NULL,
  `maxPrice` float NOT NULL,
  `PriceRangecurrency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `SearchSettings` WRITE;
/*!40000 ALTER TABLE `SearchSettings` DISABLE KEYS */;

INSERT INTO `SearchSettings` (`id`, `minPrice`, `maxPrice`, `PriceRangecurrency`, `createdAt`, `updatedAt`)
VALUES
	(1,200000,50000000,'UZS','2019-03-27 11:53:47','2023-02-09 12:27:04');

/*!40000 ALTER TABLE `SearchSettings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SequelizeMeta
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SequelizeMeta`;

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `SequelizeMeta_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;

INSERT INTO `SequelizeMeta` (`name`)
VALUES
	('20180804061511-addUserBanStatus.js'),
	('20180804062523-addIsReadColumnInThreads.js'),
	('20180809095644-createBedTypeTable.js'),
	('20180919114144-addBanUserDefault.js'),
	('20180924105437-updateUserLoginTable.js'),
	('20180924130941-addNewUserLoginTable.js'),
	('20180929101729-updateNulledBanUserStatus.js'),
	('20180929110523-addColumnsForSmsVerification.js'),
	('20180929112313-updateCountyListWithDialCodes.js'),
	('20190105123130-addHomePageTypeSiteSettings.js'),
	('20190202071052-addIsListActiveField.js'),
	('20190202103305-updatePaymentMethods.js'),
	('20190206111430-createReportUser.js'),
	('20190223073145-addIsDeleteAtField.js'),
	('20190225042333-addReviewsCountInListing.js'),
	('20190322050510-addSiteSettingsField.js'),
	('20190325035946-addListBlockedDates.js'),
	('20190429092459-addColumNewThread.js'),
	('20190430110742-changeListingDataCloum.js'),
	('20190503052141-addColumnItemDescriptionListSettingsTable.js'),
	('20190513044345-addMetaFields.js'),
	('20190513070310-insertStaticpage.js'),
	('20190514121558-addCancellationPolicyReservation.js'),
	('20190525050311-changeDataTypeForItemDescription.js'),
	('20190527125405-addIsAdminEnableReviews.js'),
	('20190531062204-addReservationSpecialPricing.js'),
	('20190603083234-modifyBlogAndStaticPage.js'),
	('20190603102231-deleteInboxItem.js'),
	('20190604051522-addReservationFields.js'),
	('20190614110520-addPhoneStatus.js'),
	('20190615092318-addCountryNameInUserProfile.js'),
	('20190622051622-changeColumnLocationUserProfile.js'),
	('20190701041011-changeColumnTypeInSiteSettingsValue.js'),
	('20190712094239-deleteCoverPhotoRecordsFromListingTable.js'),
	('20190824052016-addHomePageLogoSiteSettings.js'),
	('20190827080301-addHomeBannerImage.js'),
	('20190828122142-addEmailPageLogoSiteSettings.js'),
	('20190830111259-addHomeLogoHeightSettings.js'),
	('20190902042250-addStaticBlockInfo.js'),
	('20190903093907-addStatusFieldInBlock.js'),
	('20190910043026-addPaymentIntentIdInReservation.js'),
	('20191008110026-testMigration.js'),
	('20191020041756-addUserListing.js'),
	('20191108043353-updateSteps.js'),
	('20200110151340-addRoleIdToAdminUser.js'),
	('20200217052735-addIsVerifiedToPayoutTable.js'),
	('20200225061630-addIsVerifiedToPayoutTable.js'),
	('20200323101255-addAppAvailableStatus.js'),
	('20200323102340-addPlayStoreUrl.js'),
	('20200323102456-addAppStoreUrl.js'),
	('20200324122956-contactPageManage.js'),
	('20200325110911-addWhyHostInfoBlocks.js'),
	('20200326043522-addHelpStaticPageManage.js'),
	('20200413120822-changeColumnValueAtWhyHostInfoBlock.js'),
	('20200413133533-changeColumnValueWhyHostInfoBlock.js'),
	('20200609101516-addTaxRateinListing.js'),
	('20200609104246-addColumnInReservation.js'),
	('20200702125214-addNewColumnsInReservation.js'),
	('20200706135325-changeDialCodeForCyprus.js'),
	('20200707112614-updateCancellationContent.js'),
	('20200716101918-addNewColumnsInReservation.js'),
	('20200717064917-addBookingTypeColumninReservation.js'),
	('20200720134623-addBookingTypeColumnInReservation.js'),
	('20200721095812-AddServiceFeeInReservation.js'),
	('20200721095829-AddNonRefundableNightInCancellation.js'),
	('20200722081721-changeDefaultValueinCancellation.js'),
	('20200727121337-changeColumnvalueInReservation.js'),
	('20200826050109-addCookiePolicyStaticContent.js'),
	('20201015082101-addListSettingsImage.js'),
	('20201015114723-addSideMenuContent.js'),
	('20210107121042-updateProcessedInPaymentMethod.js'),
	('20210111061758-changeDateTypeToDateOnlyType.js'),
	('20210415133041-addStripeKeySiteSettings.js'),
	('20210422134359-addApprovalListing.js'),
	('20210423130614-addApproveListingSiteAdmin.js'),
	('20210508123922-addDefaultFaviconImageInSiteSetttingTable.js'),
	('20210608121826-approvalChanges.js'),
	('20210720102227-updateCancellationTable.js'),
	('20211004131331-removeDefaultValueCountry.js'),
	('20220112083027-addPaymentName.js'),
	('20220112083245-addPaymentNameTable.js'),
	('20220331095750-userBanSTatus.js'),
	('20220517061053-addConfigSiteSettings.js'),
	('20220630053428-deleteUser.js'),
	('20220701064444-otpupdated.js'),
	('20220816052452-addHostingBlockImage.js'),
	('20220816071420-becomeHostBanner.js'),
	('20220824103654-lastUpdatedAt.js'),
	('20220824104922-lastUpdatedAtTime.js'),
	('20220909122316-priceField.js'),
	('20220925071050-policyContetn.js'),
	('20220926153825-addForceUpdate.js'),
	('20220928061556-changeStripeSettings.js'),
	('20221114061101-dayStatusListBlockedDates.js');

/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ServiceFees
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ServiceFees`;

CREATE TABLE `ServiceFees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `guestType` enum('fixed','percentage') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guestValue` float NOT NULL,
  `hostType` enum('fixed','percentage') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hostValue` float NOT NULL,
  `currency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `ServiceFees` WRITE;
/*!40000 ALTER TABLE `ServiceFees` DISABLE KEYS */;

INSERT INTO `ServiceFees` (`id`, `guestType`, `guestValue`, `hostType`, `hostValue`, `currency`, `createdAt`, `updatedAt`)
VALUES
	(1,'percentage',15,'percentage',3,'UZS','2023-04-02 12:23:18','2023-04-02 12:23:18');

/*!40000 ALTER TABLE `ServiceFees` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SideMenu
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SideMenu`;

CREATE TABLE `SideMenu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `step` int DEFAULT NULL,
  `page` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isEnable` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `SideMenu` WRITE;
/*!40000 ALTER TABLE `SideMenu` DISABLE KEYS */;

INSERT INTO `SideMenu` (`id`, `title`, `description`, `name`, `step`, `page`, `isEnable`, `createdAt`, `updatedAt`)
VALUES
	(1,'Flexible','Cancel up to 1 day prior to arrival and get a 100% refund.','block1',NULL,NULL,1,'2021-02-03 13:14:58','2021-02-03 13:14:58'),
	(2,'Moderate','Cancel up to 5 days prior to arrival and get a 50% refund.','block2',NULL,NULL,1,'2021-02-03 13:14:58','2021-02-03 13:14:58'),
	(3,'Strict','Cancel up to 7 days prior to arrival and get a 50% refund.','block3',NULL,NULL,1,'2021-02-03 13:14:58','2021-02-03 13:14:58');

/*!40000 ALTER TABLE `SideMenu` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteSettings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteSettings`;

CREATE TABLE `SiteSettings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `SiteSettings` WRITE;
/*!40000 ALTER TABLE `SiteSettings` DISABLE KEYS */;

INSERT INTO `SiteSettings` (`id`, `title`, `name`, `value`, `type`, `createdAt`, `updatedAt`)
VALUES
	(1,'Site Name','siteName','Kvarenda','site_settings','2019-03-27 11:53:47','2023-03-13 05:21:23'),
	(2,'Site Title','siteTitle','Kvarenda - Uy Egalaridan Ijara','site_settings','2019-03-27 11:53:47','2023-03-13 05:21:23'),
	(3,'Meta Keyword','metaKeyword','kvarenda,аренда квартиры','site_settings','2019-03-27 11:53:47','2023-03-13 05:21:23'),
	(4,'Meta Discription','metaDescription','Your Site Meta Description','site_settings','2019-03-27 11:53:47','2023-03-13 05:21:23'),
	(10,'Facebook Link','facebookLink','https://www.facebook.com/profile.php?id=100089578332293','site_settings','2019-03-27 11:53:47','2023-03-13 05:21:23'),
	(11,'Twitter Link','twitterLink','https://twitter.com/radicalstartnow','site_settings','2019-03-27 11:53:47','2023-03-13 05:21:23'),
	(12,'Instagram Link','instagramLink','https://www.instagram.com/kvarenda.uz/','site_settings','2019-03-27 11:53:47','2023-03-13 05:21:23'),
	(64,'Logo Height','logoHeight','65','site_settings','2019-03-27 11:53:47','2023-03-13 05:21:23'),
	(65,'Logo Width','logoWidth','125','site_settings','2019-03-27 11:53:47','2023-03-13 05:21:23'),
	(66,'Home Page Banner Layout','homePageType','2','site_settings','2019-03-27 11:53:47','2023-03-13 05:21:23'),
	(67,'Video URL','videoLink','https://www.youtube.com/watch?v=5y2P4z7DM88','site_settings','2019-07-04 06:09:18','2023-03-13 05:21:23'),
	(68,'Phone Number Status','phoneNumberStatus','2','site_settings','2019-07-04 06:47:57','2023-03-13 05:21:23'),
	(72,'Home Logo Height','homeLogoHeight','65','site_settings','2019-09-06 06:41:03','2023-03-13 05:21:23'),
	(73,'Home Logo Width','homeLogoWidth','125','site_settings','2019-09-06 06:41:03','2023-03-13 05:21:23'),
	(77,'App Available Status','appAvailableStatus','1','site_settings','2020-04-13 11:33:08','2023-03-13 05:21:23'),
	(78,'PlayStore URL','playStoreUrl','https://play.google.com/store/apps/details?id=uz.kvarenda.kuch_adolatdadir&pli=1','site_settings','2020-04-13 11:33:08','2023-03-13 05:21:23'),
	(79,'AppStore URL','appStoreUrl','https://apps.apple.com/us/app/kvarenda/id6445953488','site_settings','2020-04-13 11:33:09','2023-03-13 05:21:23'),
	(80,'email','email','support@kvarenda.uz','site_settings','2020-04-13 11:33:09','2023-03-13 05:21:23'),
	(81,'Phone Number','phoneNumber','+998998191113','site_settings','2020-04-13 11:33:09','2023-03-13 05:21:23'),
	(82,'Address','address','Toshkent, O\'zbekiston','site_settings','2020-04-13 11:33:09','2023-03-13 05:21:23'),
	(83,'Stripe Publishable Key','stripePublishableKey','pk_live_51MSSQxF74ShLdRrGHwLrm2hTe5aNpFOL6pWWWko8gx59AdwOVxkbv4GRE1c2O9SQWOhTLPyDw7RUD6CCGreJRm9s00pxUPQ8gx','config_settings','2021-10-27 16:42:06','2023-03-06 16:47:10'),
	(84,'Listing Approval','listingApproval','0','site_settings','2021-10-27 16:42:07','2023-03-13 05:21:23'),
	(85,'Favicon Logo','faviconLogo','5ac8d1b8812b844111e709b920dc81da.png','site_settings','2021-10-27 16:42:07','2023-01-28 12:37:32'),
	(86,'Max Upload Size','maxUploadSize','50','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(87,'PushNotification Key','pushNotificationKey','AAAAXB15N8U:APA91bHLmvoJsGkMBQ35Q8ZRsJvUK0gGXk-dtdmR6izsl-hgrZHQYAM5iw2D5sS0qXBOi1Iyzgd89fWn1pmVnE_GBl-RMjxIbzyBxGChO9OXcItu7uCz716uAsIrYmtScoCdvU6IqIAi','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(88,'Deep Link Bundle Id','deepLinkBundleId','K32A8T5R56.uz.kvarenda.kuchadolatdadir','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(89,'Smtp Host','smtpHost','smtp.sendgrid.net','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(90,'Smtp Port','smtpPort','587','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(91,'Smpt Email','smptEmail','apikey','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(92,'Smtp Sender','smtpSender','Ismoilov.muhammadyor','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(93,'Smtp Sender Email','smtpSenderEmail','support@kvarenda.uz','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(94,'Smtp PassWord','smtpPassWord','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','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(95,'Twillio AccountSid','twillioAccountSid','AC5dfe8e20e2b65cb9cc9a0dd5fadf53a5','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(96,'Twillio AuthToken','twillioAuthToken','f19c49d4fafc6d6635a5b843a43e42b8','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(97,'Twillio Phonenumber','twillioPhone','+13322449932','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(98,'PayPal Email','paypalEmail','ismoilov.muhammadyor96@gmail.com','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(99,'PayPal ClientId','paypalClientId','AaQbgNtOCfUgEFaIEwdC5AxlD8J9StKwA0BAmO7ZJSq10Ge09ajevsyunCwYZZezHRRM6a-79nW8qh0V','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(100,'PayPal Secret','paypalSecret','EGF4jFb7tk6oJ1KTCW-3WdJwJBmAVFxpiMHlnbP7iIqsIFVQaQJgkZU1FcjiChwBTylGo6XyCyO-Lr1I','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(101,'PayPal Host','paypalHost','api.sandbox.paypal.com','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(102,'PayPal HostMode','paypalHostMode','sandbox','config_settings','2022-11-03 09:57:34','2023-03-06 16:47:10'),
	(103,'Cancellation Information','cancellationInfo','RentALL allows hosts to choose among three standardized cancellation policies (Flexible, Moderate, and Strict) Will be enforced to protect both guest and host alike. Each listing and reservation on our site will clearly state the cancellation policy. Guests while viewing their travel plans are able to review any penalties and also cancel by clicking ‘Cancel’ on the respective reservation. A host will be able to see the number of reservations a guest has Cancelled Over the past 12 months when the guest submits Booking request.','site_settings','2022-11-03 09:57:35','2023-03-13 05:21:23'),
	(104,'Android Version','androidVersion',NULL,'appSettings','2022-11-03 09:57:35','2023-03-13 05:21:23'),
	(105,'Force Update','appForceUpdate','false','appSettings','2022-11-03 09:57:35','2023-03-13 05:21:23'),
	(106,'iOS Version','iosVersion',NULL,'appSettings','2022-11-03 09:57:35','2023-03-13 05:21:23'),
	(116,'Logo','Logo','f871260ce6fa23e984a6dd61faac9823.png','site_settings','2023-01-28 13:36:12','2023-03-13 05:21:23'),
	(117,'Home Page Logo','homeLogo','c9d79edb4b948cd3c26100f8871289b8.png','site_settings','2023-01-28 13:36:16','2023-03-13 05:21:23'),
	(118,'Email Logo','emailLogo','da7fd2b3609bdbedd4c4aa676e283c28.png','site_settings','2023-01-28 13:50:49','2023-03-13 05:21:23');

/*!40000 ALTER TABLE `SiteSettings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table StaticInfoBlock
# ------------------------------------------------------------

DROP TABLE IF EXISTS `StaticInfoBlock`;

CREATE TABLE `StaticInfoBlock` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isEnable` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `StaticInfoBlock` WRITE;
/*!40000 ALTER TABLE `StaticInfoBlock` DISABLE KEYS */;

INSERT INTO `StaticInfoBlock` (`id`, `title`, `content`, `image`, `name`, `isEnable`, `createdAt`, `updatedAt`)
VALUES
	(1,'Find the best rental homes faster','Homes with high standards and better facilities',NULL,'header',1,'2019-09-06 06:41:03','2023-01-28 18:16:28'),
	(2,'Low fees','Forget about high commissions and use the saved money to spend on your needs','d01972411ce181c834cc19f84e7a3852.png','block1',1,'2019-09-06 06:41:03','2023-01-28 18:16:28'),
	(3,'Proven and reliable landlords','Forget shady deals and find trusted owners','a8c8f3ea2cdc90a1ede578e11fcedbfd.jpeg','block2',1,'2019-09-06 06:41:03','2023-01-28 18:16:28');

/*!40000 ALTER TABLE `StaticInfoBlock` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table StaticPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `StaticPage`;

CREATE TABLE `StaticPage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pageName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `metaTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `metaDescription` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `StaticPage` WRITE;
/*!40000 ALTER TABLE `StaticPage` DISABLE KEYS */;

INSERT INTO `StaticPage` (`id`, `pageName`, `content`, `metaTitle`, `metaDescription`, `createdAt`, `updatedAt`)
VALUES
	(1,'About Us','<h2><strong>What is Kvarenda?</strong></h2><p><br></p><p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>','About Us','About Us','2019-07-12 07:58:42','2023-01-28 18:31:12'),
	(2,'Trust & Safety','<p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. guns,</p>','Trust & Safety','Trust & Safety','2019-07-12 07:58:42','2022-07-07 09:50:45'),
	(3,'Travel Credit','<p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>','Travel Credit','Travel Credit','2019-07-12 07:58:42','2022-07-07 09:51:16'),
	(4,'Terms & Privacy','<p>Условия использования сервиса «Kvarenda»</p><p>1. Общие положения</p><p>1.1. Термины</p><p>Документ/Документы&nbsp;— договор аренды (найма) Объекта, опись имущества и иной документ, который формируется и подписывается или может быть сформирован и подписан Собственником и Арендатором с использованием Сервиса.</p><p>Сервис&nbsp;— сервис Kvarenda, доступный в сети Интернет по адресу:&nbsp;<a href=\"https://kvarenda.uz ;\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda<u>.uz </u>;</a></p><p>Сервис Kvarenda&nbsp;— сервис, доступный по адресу&nbsp;<a href=\"https://kvarenda.uz\" rel=\"noopener noreferrer\" target=\"_blank\"><u>https://kvarenda.uz</u></a>&nbsp;и на иных доступных платформах, предоставляемый на условиях, опубликованных по адресу:&nbsp;<a href=\"https://kvarenda.uz/legal/realty_termsofuse\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/realty_termsofuse</a>;</p><p>Kvarenda — ООО «KVARENDA», ИНН 310160484, Адрес: индекс____, г.____, улица ____, дом _, строение _, помещение _;</p><p>Условия — настоящий документ, размещенный в сети Интернет по адресу:&nbsp;<a href=\"https://kvarenda.uz/legal/lease_termsofuse\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/lease_termsofuse</a>;</p><p>Пользователь&nbsp;— физическое лицо, достигшее дееспособности, использующее сервис в качестве Собственника или Арендатора;</p><p>Собственник — Пользователь Сервиса, физическое лицо, являющееся собственником Объекта;</p><p>Арендатор&nbsp;— Пользователь, физическое лицо, желающее заключить договор аренды (или договор найма) с Собственником в отношении Объекта;</p><p>Объект — объект недвижимого имущества (жилое / нежилое помещение), которое Собственник желает предоставить во временное владение и пользование;</p><p>Анкета&nbsp;— форма, заполняемая и направляемая Арендатором при регистрации в Сервисе;</p><p>Заявление&nbsp;— предложение Собственника Сервису заключить договор об осуществлении содействия и исполнении поручения в соответствии с Условиями осуществления содействия в предоставлении недвижимости в пользование, опубликованными по адресу:&nbsp;<a href=\"https://kvarenda.uz/legal/realty_lease_landlord\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/realty_lease_landlord</a>, направляемое Собственником при регистрации в Сервисе;</p><p>Услуги&nbsp;— возмездные услуги, предусмотренные Условиями оказания услуг Kvarenda, опубликованными по адресу:&nbsp;<a href=\"https://kvarenda.uz/legal/realty_lease_tenant\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/realty_lease_tenant</a>;</p><p>Менеджер&nbsp;— лицо, уполномоченное Сервисом на взаимодействие с Пользователем от имени Сервиса для помощи в реализации функциональных возможностей Сервиса и оказания Услуг;</p><p>Личный кабинет&nbsp;— раздел в Сервисе, содержащий информацию о Пользователе, включая заполняемые им ранее Анкеты/Заявления, статус заявок, иные сведения, связанные с использованием функциональности Сервиса Пользователем.</p><p>ЭЦП&nbsp;— простая электронная подпись, которая подтверждает факт подписания Собственником и Арендатором с использованием соответствующей функциональности Сервиса, посредством использования кодов, направленных на номера мобильных телефонов и/или направленных на e-mail, указанных в Сервисе и которая является аналогом собственноручной подписи Сторон. Порядок подписания Документа с использованием ЭЦП:</p><p>- при оформлении Документа в Сервисе Собственник и Арендатор получают одноразовый код на номер своего мобильного телефона и/или на e-mail указанные в Сервисе.</p><p>- Собственник и Арендатор вводят полученный код в окне для ввода кода;</p><p>- после введение верного кода Собственником и Арендатором Документ считается подписанным ими обоими, при этом датой подписания Документа считается дата подписания последним из них (более поздняя дата).</p><p>1.2. Настоящие Условия представляют собой предложение Сервиса Пользователям использовать Сервис на изложенных ниже условиях.</p><p>1.3. Использование Сервиса регулируется настоящими Условиями, а также документами ООО «KVARENDA» (ИНН:310160484):</p><ul><li>Пользовательским Соглашением, размещенным по адресу:&nbsp;<a href=\"https://kvarenda.uz/legal/rules/index.html\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/rules</a>;</li><li>Лицензией на использование поисковой системы Яндекса, размещенной по адресу:&nbsp;<a href=\"https://kvarenda.uz/legal/termsofuse/index.html\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/termsofuse</a>;</li><li>Политикой конфиденциальности, размещенной по адресу:&nbsp;<a href=\"https://kvarenda.uz/legal/confidential/index.html\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/confidential</a>&nbsp;(далее вместе именуются — «Регулирующие документы»).&nbsp;</li></ul><p>Пользователь обязуется ознакомиться со всеми Регулирующими документами и самостоятельно несет риск такого неознакомления.</p><p>1.4. Начиная использовать Сервис/его отдельные функции, Пользователь считается принявшим настоящие Условия, а также условия Регулирующих документов, в полном объеме, без всяких оговорок и исключений. В случае несогласия Пользователя с какими-либо из положений Условий или Регулирующих документов, Пользователь не вправе использовать Сервис.</p><p>1.5. Kvarenda вправе в любое время без уведомления Пользователя изменить настоящие Условия, а ООО «» вправе в любое время без уведомления Пользователя изменить условия Регулирующих документов.</p><p>Риск неознакомления с новой редакцией Условий и Регулирующих документов несет Пользователь. Продолжение пользования Сервисом после изменения Условий или Регулирующих документов считается согласием с их новой редакцией.</p><p>1.6. В случае если в настоящие Условия или Регулирующие документы были внесены изменения в порядке, предусмотренном п. 1.5. настоящих Условий, с которыми Пользователь не согласен, он обязан прекратить использование Сервиса.</p><p>1.7. Kvarenda вправе направлять Пользователю информационные сообщения. Kvarenda также вправе направлять Пользователю сообщения рекламного характера при условии получения согласия способом, соответствующим требованиям законодательства, либо при условии, что Пользователь не отказался от получения сообщений рекламного характера в отношении соответствующего сервиса (при регистрации, либо позднее с использованием соответствующей функциональности).</p><p>Пользователь выражает согласие Сервису на оповещение других Пользователей Сервиса о публичных действиях Пользователя, в том числе о размещении им новых публикаций, а также иной активности, совершенной им в рамках Сервиса.</p><p>2. Общие условия регистрации и использования Сервиса</p><p>2.1. Сервис предлагает Пользователям:</p><p>- для Собственников: возможность направления Заявления в целях заключения договора об осуществлении содействия и исполнении поручения в соответствии с Условиями осуществления содействия в предоставлении недвижимости в пользование, опубликованными по адресу:&nbsp;<a href=\"https://kvarenda.uz/legal/realty_lease_landlord\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/realty_lease_landlord</a>;</p><p>- для Арендаторов: возможность заполнения Анкеты в целях обеспечения содействия Арендатору в заключении договора аренды (найма) Объекта, а также в целях заключения Арендатором с Сервисом договора об оказании Услуг в соответствии с Условиями оказания услуг Kvarenda, опубликованными по адресу:&nbsp;<a href=\"https://kvarenda.uz/legal/realty_lease_tenant\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/realty_lease_tenant</a>;</p><p>- для Собственников и Арендаторов: возможность подписания ЭЦП Документов;</p><p>- иные функциональные возможности, связанные с оказанием содействия в заключении договора аренды (найма) Объекта в случае принятия Анкеты/Заявления.</p><p>2.2. Функциональность Сервиса может быть доступна Пользователю после прохождения им процедуры регистрации в сервисе Kvarenda, согласно условиям, указанным в Пользовательском соглашении сервиса Kvarenda (<a href=\"https://kvarenda.uz/legal/rules\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/rules</a>), либо после авторизации в Сервисе с использованием ранее зарегистрированной учетной записи Пользователя сервиса Kavrenda.</p><p>Любой Пользователь вправе иметь только одну учетную запись в Сервисе. В случае нарушения Пользователем данного правила, Kvarenda вправе заблокировать учетные записи Пользователя или ограничить функциональные возможности использования Пользователем Сервиса.</p><p>2.3. Для начала использования Сервиса, Пользователю авторизованному в соответствии с п.2.2. Условий необходимо пройти процедуру регистрации Личного кабинета в Сервисе для подачи заявки в Сервис путем направления Анкеты/Заявления.</p><p>2.4. Регистрируясь в Сервисе в порядке п.2.3. Условий, а также сообщая информацию Менеджеру, Пользователь гарантирует что:</p><p>2.4.1. сообщаемая им информация является достоверной, точной, полной и актуальной;</p><p>2.4.2. Пользователь обладает всеми необходимыми правами для передачи данных Сервису, а именно: обладает достаточной степенью правоспособности для выражения согласия на обработку персональных данных, а также заручился всеми необходимыми согласиями третьих лиц, в случае если передаваемая Пользователем информация содержит персональные данные третьих лиц;</p><p>2.4.3. Пользователь обладает всеми правами в отношении загружаемых им материалов и осознает, что данные материалы могут быть размещены в общем доступе;</p><p>2.4.4. согласен с условиями обработки данных, указанных в п. 2.5. настоящих условий.</p><p>2.5. Направляя Анкету/Заявление, а также сообщая информацию Менеджеру, Пользователь выражает согласие на обработку передаваемой им персональной информации (включая персональные данные) ООО «» (ИНН: 310160484) на условиях Политики конфиденциальности (<a href=\"https://kvarenda/legal/confidential\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda/legal/confidential</a>), а также на передачу данных партнеру Сервиса ООО «Maydala» (ИНН: ____) и другим лицам, привлекаемым Сервисом в связи с предоставлением Сервиса и оказания Услуг.</p><p>Kvarenda (а также привлекаемые им при необходимости лица) могут использовать полученные данные, в том числе, для следующих целей:</p><ul><li>для осуществления обратной связи с Пользователями по вопросам направления Анкеты/Заявления, уточнения данных, а также для информирования при дальнейшем использовании Сервиса и оказании Услуг;</li><li>для размещения данных (касающихся Объекта и условий заключения договора аренда\\наймы) в составе объявления в общем доступе в Сервисе и на иных площадках по договоренности с Пользователем;</li><li>для заполнения документов и договоров, заключаемых Пользователями с использованием Сервиса;</li><li>для отображения данных Пользователя в Личном кабинете Пользователя;</li><li>для осуществления проверки указанных данных на достоверность и Пользователя на благонадежность;</li><li>для иных целей, непосредственно связанных с использованием Сервиса, осуществлением содействия в заключении договора аренды (найма) Объекта и оказанием Услуг.</li></ul><p>Направляя Анкету/Заявление, Пользователь соглашается с тем, что Kvarenda вправе осуществлять обработку данных с целью проверки достоверности указанных данных и благонадежности Пользователей. В частности, Kvarenda может:</p><ul><li>получать дополнительную информацию о Пользователе/Объекте с использованием открытых источников информации и публичных реестров;</li><li>привлекать третьих лиц для осуществления проверки данных с использованием доступных им источников и реестров.</li></ul><p>Kvarenda вправе передавать персональную информацию Пользователя третьим лицам в случае, если это необходимо для целей использования Сервиса, осуществления содействия в заключении договора аренды (найма) Объекта и/или оказания Услуг. В частности, данные могут быть переданы иным Пользователям – потенциальным Арендаторам или Собственникам Объекта для оценки возможностей заключения договора аренды/найма.</p><p>2.6. После рассмотрения Анкеты/Заявления, поступившей от Пользователя, Kvarenda принимает решение относительно возможности принятия Анкеты/Заявления Пользователя к рассмотрению, их одобрения, либо об отказе от их рассмотрения/одобрения. Kvarenda вправе не сообщать причины отказа в рассмотрении/одобрении Анкеты/Заявления Пользователя.</p><p>При отсутствии необходимой информации для принятия соответствующего решения Kvarenda вправе запросить дополнительные сведения, не указанные в Анкете/Заявлении, либо сведения, подтверждающие информацию, указанную в Анкете/Заявлении.</p><p>Количество Анкет/Заявлений, поданных Пользователем за один период времени может быть ограничено.</p><p>2.7. Пользователь может получать информацию, связанную с рассмотрением Анкеты/Заявления, ходом заключения и исполнения договора на оказание Услуг через Личный кабинет.</p><p>Пользователь осведомлен и соглашается с тем, что извещение, направленное посредством Личного кабинета, является надлежащим в рамках настоящих Условий. Пользователь обязуется регулярно проверять содержание Личного кабинета и самостоятельно несет риски, связанные с несвоевременным получением извещений от Сервиса.</p><p>В соответствии с положениями ч. ст. 7 «Об электронной цифровой подписи», электронные документы, подписанные с применением электронной цифровой подписи Пользователя, признаются электронными документами, равнозначными документам на бумажном носителе, подписанным собственноручной подписью.</p><p>2.8. Воспользоваться ЭЦП посредством Сервиса возможно только при наличии соответствующей технической возможности в Сервисе.</p><p>2.9. Собственник и Арендатор, желающие подписать Документ, обязаны указать номер своего мобильного телефона и/или e-mail, на который будет направлен код в случае использования функции ЭЦП. Собственник и Арендатор гарантируют, что (1) указанный номер мобильного телефона и/или e-mail в Сервисе являются актуальными, верными и полными (2) третьи лица не имеют доступа к направляемому посредством Сервиса на указанные номер мобильного телефона и/или e-mail коду для использования ЭЦП, что исключает возможность третьих лиц использовать ЭЦП.</p><p>3. Условия регистрации и использования Сервиса Собственником</p><p>3.1. Собственник, желающий заключить договор аренды (найма) в отношении Объекта с Пользователем Сервиса, направляет Заявление в Сервис в соответствии с требованиями раздела 2 настоящих Условий и требованиями Условий осуществления содействия в предоставлении недвижимости в пользование, опубликованных по адресу:&nbsp;<a href=\"https://kvarenda.ru/legal/realty_lease_landlord\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.ru/legal/realty_lease_landlord</a>.</p><p>Помимо персональной информации Собственник предоставляет информацию о существенных характеристиках Объекта, фото Объекта, а также желаемые условия договора аренды (найма) (ежемесячный платеж, срок, требования к Арендатору и т.д.).</p><p>Данные, сообщенные Собственником в Заявлении, могут быть уточнены в ходе обратной связи с Менеджером.</p><p>3.2. Рассмотрение Заявления и заключение договора об осуществлении содействия и исполнении поручения регулируется Условиями осуществления содействия в предоставлении недвижимости в пользование, опубликованными по адресу:&nbsp;<a href=\"https://kvarenda.uz/legal/realty_lease_landlord\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/realty_lease_landlord</a>.</p><p>4. Условия регистрации и использования Сервиса Арендатором</p><p>4.1. Арендатор, желающий заключить договор аренды (найма) с Пользователем Сервиса в отношении подобранного им Объекта, направляет Анкету в Сервис в соответствии с требованиями раздела 2 настоящих Условий.</p><p>У Арендатора может быть запрошена информация относительно целей заключения договора аренды, состав проживаемых, персональная информация и др.</p><p>Данные, сообщенные Арендатором в Анкете, могут быть уточнены в ходе обратной связи с Менеджером.</p><p>Анкета Арендатора сохраняется в Личном кабинете. Арендатор имеет возможность вносить изменения в Анкету путем ее редактирования в Личном кабинете (функция может подлежать ограничению на период рассмотрения Анкеты или передачи ее Собственнику).</p><p>4.2. После обработки Анкеты Арендатору сообщается решение по его Анкете в Личном кабинете Сервиса или в ходе обратной связи по контактам, указанным в Анкете.</p><p>Менеджер может связаться с Арендатором для разъяснения дальнейших организационных вопросов сотрудничества.</p><p>4.3. В случае принятия Сервисом решения о принятии в работу Анкеты Арендатора Сервисом может обеспечиваться содействие в заключении договора аренды (найма) подобранного Арендатором Объекта с Собственником. Осуществление такого содействия регулируется настоящими Условиями и не является частью Услуги.</p><p>4.4. При направлении Анкеты Арендатор акцептует Условия оказания услуг «Kvarenda», опубликованные по адресу:&nbsp;<a href=\"https://kvarenda.uz/legal/realty_lease_tenant\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/realty_lease_tenant</a>&nbsp;(в порядке и на условиях, предусмотренных данным документом), в результате чего между сторонами заключается договор об оказании Услуги.</p><p>4.5. Сервис предоставляет Арендатору возможность осуществления арендной платы, возмещения расходов Собственника по оплате коммунальных и иных услуг, оплата которых предусмотрена Собственником и Арендатором в договоре аренды (найма) Объекта, в Личном кабинете. Поступившая арендная плата, сумма расходов по оплате коммунальных и иных услуг перечисляется Сервисом Собственнику и при соблюдении требований и процедур раздела 4 Условий осуществления содействия в предоставлении недвижимости в пользование (<a href=\"https://kvarenda.uz/legal/realty_lease_landlord\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/realty_lease_landlord</a>).</p><p>Проведение платежа осуществляется банком. Арендатор самостоятельно передает необходимые данные для оплаты банку без привлечения Сервиса. Kvarenda не имеет доступа к таким данным и не является участником правоотношений между Арендатором и банком по проведению арендной платы и иных платежей.</p><p>Яндекс не несет ответственность за бесперебойную работу функции оплаты и не отвечает за ущерб, вызванный недоступностью или невозможностью оплаты, не гарантирует корректность заполнения форм Арендатором, передачу им актуальной, достоверной и точной информации. В случае возникновения каких-либо ошибок, сбоев или невозможности произведения оплаты, Арендатор может обратиться непосредственно к банку по реквизитам, указанным при проведении платежа.</p><p>5. Ограничение ответственности</p><p>5.1. Сервис предоставляется на условиях «как есть» (as is). Kvarenda не предоставляет никаких гарантий в отношении безошибочной и бесперебойной работы Сервиса или его отдельных компонентов и/или функций, в том числе функции подписания ЭЦП посредством Сервиса, соответствия Сервиса конкретным целям Пользователя, не предоставляет никаких иных гарантий, прямо не указанных в настоящих Условиях.</p><p>Kvarenda не несет ответственности за какие-либо прямые или косвенные последствия какого-либо использования или невозможности использования Сервиса и/или убытки, причиненные Пользователю и/или третьим лицам в результате какого-либо использования, неиспользования или невозможности использования Сервиса или его отдельных компонентов и/или функций, в том числе из-за возможных ошибок или сбоев в их работе, за исключением случаев, прямо предусмотренных законодательством.</p><p>5.2. Kvarenda не является стороной договора между Пользователями Сервиса, связанных непосредственно с арендой (наймом) Объекта.</p><p>Kvarenda не несет ответственность за действия сторон по договору аренды (найма) Объекта,</p><p>5.3. Kvarenda не гарантирует достижение какого-либо определенного результата при использовании Пользователем Сервиса, в частности не гарантирует принятие Анкеты/Заявления Пользователя к рассмотрению, фактический поиск контрагента для заключения договора аренды (найма), соответствие условий договора аренды (найма), состояния Объекта, действий контрагента по договору аренды (найма) ожиданиям Пользователя.</p><p>При возникновении споров, урегулирование которых не достигается Арендатором и Собственником в рамках обычной коммуникации, проводимой между данными лицами в Сервисе при посредничестве Сервиса, Арендатор и Собственник обязуются самостоятельно улаживать споры способами и в порядке, избранными ими совместно или каждым в отдельности без привлечения Сервиса.</p><p>5.4. Kvarenda не несет ответственности за актуальность и достоверность информации, предоставляемой в Сервисе. Пользователь должен самостоятельно оценивать все риски, связанные с использованием информации, включая оценку надежности, полноты или полезности этой информации, а также её соответствие законодательству.</p><p>5.5. Kvarenda оставляет за собой право на свое усмотрение ограничить доступ Пользователя к Сервису (или к определенным функциям Сервиса, если это возможно технологически) с использованием его учетной записи или полностью заблокировать учетную запись Пользователя, отказать в содействии в поиске потенциального Арендатора Объекта, в заключении договора аренды (найма) подобранного Арендатором Объекта с Собственником без указания причин, в том числе при неоднократном или грубом нарушении настоящих Условий или Регулирующих документов, либо применить к Пользователю иные меры с целью соблюдения требований законодательства или прав и законных интересов третьих лиц.</p><p>5.6. Арендатор гарантирует, что на момент возмещения Арендатором расходов Собственника по оплате коммунальных и иных услуг, оплата таких услуг уже произведена Собственником.</p><p>5.7. Ответственность и основания ограничения ответственности в отношении обеспечения содействия Собственнику в предоставлении Объекта во временное владение и пользование, а также в отношении исполнения поручения, предусмотренного Условиями осуществления содействия в предоставлении недвижимости в пользование (<a href=\"https://kvarenda.uz/legal/realty_lease_landlord\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/realty_lease_landlord</a>), регулируется указанными Условиями осуществления содействия в предоставлении недвижимости в пользование.</p><p>5.8. Ответственность за исполнение обязательств, связанных с оказанием Услуг, регулируется Условиями оказания услуг Kvarenda (<a href=\"https://kvarenda.uz/legal/realty_lease_tenant\" rel=\"noopener noreferrer\" target=\"_blank\">https://kvarenda.uz/legal/realty_lease_tenant</a>).</p><p>6. Иные положения</p><p>6.1. Права на все объекты, составляющие дизайн Сервиса в целом и отдельных его элементов, на программное обеспечение Сервиса, принадлежат Kvarenda ООО «Kvarenda». Права на объекты, включенные в Сервис (текстовый, визуальный, аудио/видео контент и др.), принадлежат его законным правообладателям. За нарушение исключительных прав Сервиса и (или) правообладателей контента или третьих лиц, Пользователь несет ответственность в соответствии с законодательством Республики Узбекистан.</p><p>6.2. Функции Сервиса предоставляются бесплатно. Отдельные Услуги, предлагаемые к оказанию с использованием Сервиса, предоставляются на соответствующих условиях, указанных в п. 4.4. настоящих Условий.</p><p>Любая информация, используемая в Сервисе, предназначена исключительно для личного некоммерческого использования. При этом любое копирование данных Сервиса, в том числе с использованием автоматических и иных программных средств получения доступа к данным, их воспроизведение, переработка, распространение, доведение до всеобщего сведения (опубликование) в сети Интернет, любое использование в средствах массовой информации и/или в коммерческих целях без предварительного письменного разрешения правообладателя запрещается, за исключением случаев, прямо предусмотренных настоящими Условиями или Регулирующими документами.</p><p>6.3. По вопросам и претензиям, связанным с использованием или невозможностью использования Сервиса, а также с возможным нарушением законодательства и/или прав третьих лиц в Сервисе, Пользователь может направить свое обращение через форму обратной связи по адресу:&nbsp;<a href=\"https://forms.yandex.ru/u/60698f113970d09411961cbe\" rel=\"noopener noreferrer\" target=\"_blank\">Ссылка</a><u> не форму обратной связи</u>.</p>','Terms & Privacy','Terms & Privacy','2019-07-12 07:58:42','2023-01-28 15:40:47'),
	(5,'Help','<p>If you have any questions or suggestions and if you need any help, please contact us at support@kvarenda.uz</p>','Help','Help page description','2020-04-13 11:33:10','2023-03-01 13:13:12'),
	(6,'Cookie Policy','<p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>','Cookie Policy','Cookie Policy','2021-02-03 13:01:43','2022-07-07 09:56:13');

/*!40000 ALTER TABLE `StaticPage` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ThreadItems
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ThreadItems`;

CREATE TABLE `ThreadItems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `threadId` int NOT NULL,
  `sentBy` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `isRead` tinyint(1) DEFAULT NULL,
  `type` enum('message','inquiry','preApproved','declined','approved','pending','cancelledByHost','cancelledByGuest','intantBooking','requestToBook','confirmed','expired','completed') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'message',
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `personCapacity` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `reservationId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `threadId` (`threadId`),
  CONSTRAINT `ThreadItems_ibfk_1` FOREIGN KEY (`threadId`) REFERENCES `Threads` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `ThreadItems` WRITE;
/*!40000 ALTER TABLE `ThreadItems` DISABLE KEYS */;

INSERT INTO `ThreadItems` (`id`, `threadId`, `sentBy`, `content`, `isRead`, `type`, `startDate`, `endDate`, `personCapacity`, `createdAt`, `updatedAt`, `reservationId`)
VALUES
	(1,1,'50ec7590-a6c7-11ed-be86-c7e4a6186686','Расскажи Sanjar немного о себе\nЧто приводит вас к Tashkent ? Кто к вам присоединился?\nЧто вам нравится в этом списке? Говоря это!',0,'inquiry','2023-03-20','2023-06-19',1,'2023-03-20 12:09:36','2023-03-20 12:09:36',NULL),
	(2,2,'338018e0-a00f-11ed-b242-e9a142758e94','Ассалому Алейкум любимая',1,'inquiry','2023-03-21','2023-07-20',2,'2023-03-21 12:22:58','2023-03-21 16:09:48',NULL),
	(3,2,'50ec7590-a6c7-11ed-be86-c7e4a6186686',NULL,1,'preApproved','2023-03-21','2023-07-20',2,'2023-03-21 16:10:06','2023-03-21 16:10:53',NULL);

/*!40000 ALTER TABLE `ThreadItems` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Threads
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Threads`;

CREATE TABLE `Threads` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `host` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guest` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isRead` tinyint(1) DEFAULT NULL,
  `messageUpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  CONSTRAINT `Threads_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `Threads` WRITE;
/*!40000 ALTER TABLE `Threads` DISABLE KEYS */;

INSERT INTO `Threads` (`id`, `listId`, `host`, `guest`, `createdAt`, `updatedAt`, `isRead`, `messageUpdatedDate`)
VALUES
	(1,15,'11b12e90-a7bf-11ed-8ca4-9d4fa0ff605d','50ec7590-a6c7-11ed-be86-c7e4a6186686','2023-03-20 12:09:35','2023-03-20 12:09:37',0,'2023-03-20 12:09:37'),
	(2,20,'50ec7590-a6c7-11ed-be86-c7e4a6186686','338018e0-a00f-11ed-b242-e9a142758e94','2023-03-21 12:22:58','2023-03-21 16:11:06',1,'2023-03-21 16:10:06');

/*!40000 ALTER TABLE `Threads` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Transaction
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Transaction`;

CREATE TABLE `Transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reservationId` int NOT NULL,
  `payerEmail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payerId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receiverEmail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receiverId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transactionId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '1',
  `total` float NOT NULL,
  `transactionFee` float DEFAULT NULL,
  `currency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ipn_track_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paymentType` enum('booking','cancellation','host') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'booking',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `paymentMethodId` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `reservationId` (`reservationId`),
  CONSTRAINT `Transaction_ibfk_1` FOREIGN KEY (`reservationId`) REFERENCES `Reservation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table TransactionHistory
# ------------------------------------------------------------

DROP TABLE IF EXISTS `TransactionHistory`;

CREATE TABLE `TransactionHistory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reservationId` int NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payoutId` int NOT NULL,
  `payoutEmail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` float NOT NULL,
  `fees` float DEFAULT NULL,
  `currency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `transactionId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paymentMethodId` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reservationId` (`reservationId`),
  CONSTRAINT `TransactionHistory_ibfk_1` FOREIGN KEY (`reservationId`) REFERENCES `Reservation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table User
# ------------------------------------------------------------

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `emailConfirmed` tinyint(1) DEFAULT '0',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userBanStatus` tinyint(1) DEFAULT '0',
  `userDeletedAt` datetime DEFAULT NULL,
  `userDeletedBy` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;

INSERT INTO `User` (`id`, `email`, `password`, `emailConfirmed`, `type`, `createdAt`, `updatedAt`, `userBanStatus`, `userDeletedAt`, `userDeletedBy`)
VALUES
	('01007a70-a22d-11ed-a823-4702e3a8b165','kayalvizhi.m@radicalstart.com','$2b$08$0vjv0GcZYr.zq.bdGuDmy.DRdlwPJIsGKu.FZjnFiGxKVEIbVdHiS',1,'google','2023-02-01 12:36:09','2023-02-03 10:13:47',0,'2023-02-03 10:13:47','01007a70-a22d-11ed-a823-4702e3a8b165'),
	('03bce6f0-b276-11ed-a6ae-c92d98724b1b','gokulram.m@radicalstart.com','$2b$08$iz3q1KEh/yhv4WXe2zOmdOjQxeaE0SNRfhOpGKK75n1rh/ENv0uJK',1,'google','2023-02-22 05:59:05','2023-03-06 16:52:23',0,'2023-03-06 16:52:23',NULL),
	('11b12e90-a7bf-11ed-8ca4-9d4fa0ff605d','sanjik7870@gmail.com','$2b$08$tsdVsral2MN84Zgdnf9RKuas90D.YnzzDMHNzFheGA7ze3Y6MtIpq',0,'google','2023-02-08 14:44:19','2023-02-08 14:44:19',0,NULL,NULL),
	('13418940-b82b-11ed-aaf2-8761493ee12d','naren3test@gmail.com','$2b$08$vIa9N85ierIJKR8UA1t2buG0t4WMVsKKRY7I1rJS9RcXyFbM4Sqii',1,'google','2023-03-01 12:17:46','2023-03-01 12:42:09',0,'2023-03-01 12:42:09','13418940-b82b-11ed-aaf2-8761493ee12d'),
	('17e40180-a22d-11ed-a823-4702e3a8b165','developer@radicalstart.com','$2b$08$d/vxWypq521MnpLeFISVEOxMQihce56m/rbSWBaS8SqfymzxdvQhO',1,'facebook','2023-02-01 12:36:47','2023-03-06 16:51:42',0,'2023-03-06 16:51:42',NULL),
	('230e5de0-c801-11ed-9dcb-3139783422b7','jamoltokhtaev@gmail.com','$2b$08$k6JASw96SmO7Zk/CLX6BQ.z14zz0siNeI4VpNBarfj2pgDvkeVH4S',0,'google','2023-03-21 15:57:52','2023-03-21 15:57:52',0,NULL,NULL),
	('291b5590-b838-11ed-aca0-35390767afb3','naren3test@gmail.com','$2b$08$.J3FDHVIbazzUZcyKrGntOX2dHg364TdNkBbFFZhWv/ISvVOyF5ki',1,'google','2023-03-01 13:51:26','2023-03-01 13:53:17',0,'2023-03-01 13:53:17','291b5590-b838-11ed-aca0-35390767afb3'),
	('32ebf3f0-a559-11ed-8a79-4988ccdcbdfb','jamoltokhtaev1@gmail.com','$2b$08$iADXPOveHybFweAQc9lDGOtsJDFxsySHnOrAqy.mKfFkHuoVQu5CC',1,'email','2023-02-05 13:30:04','2023-02-05 13:30:04',0,NULL,NULL),
	('338018e0-a00f-11ed-b242-e9a142758e94','zulkhayo.ismailova@gmail.com','$2b$08$26TSr0jTjNOVaxQH7aFOkeoVWGMy4EzzNgqTXsFdLmOQ3gkNZK6Fy',1,'email','2023-01-29 19:57:46','2023-01-29 19:57:46',0,NULL,NULL),
	('38d53cb0-a557-11ed-8a79-4988ccdcbdfb','muhammadyor.izmoilov@kvarenda.uz','$2b$08$aLYvasBjUdTC3LBPNqCefe9FZhXhZDJxApSGLebi28kd8Jz248B42',1,'email','2023-02-05 13:15:55','2023-02-05 13:20:33',0,'2023-02-05 13:20:33',NULL),
	('39e3a630-9e56-11ed-b242-e9a142758e94','aslam@radicalstart.com','$2b$08$2U65i/lnrDhoOCY8j5q3/eP0poHLacU4UFKc.fTAiriLKytg2ZLhi',1,'email','2023-01-27 15:21:09','2023-03-06 16:51:31',0,'2023-03-06 16:51:31',NULL),
	('50ec7590-a6c7-11ed-be86-c7e4a6186686','muhammadyor.ismoilov@kvarenda.uz','$2b$08$AL6T4/00WQTfboJADpLXb.2pnU3uamRqN211va7J9x2T2SYt.bHq.',1,'email','2023-02-07 09:10:50','2023-02-07 09:10:50',0,NULL,NULL),
	('530a1b40-b345-11ed-a6ae-c92d98724b1b','rstst025@gmail.com','$2b$08$P.o1Np.4Ae/Dxo/UeLa4new8ZsfFzoQD2JD7bd.Oly90k4MTlq6Xy',1,'google','2023-02-23 06:43:04','2023-03-06 16:52:31',0,'2023-03-06 16:52:31',NULL),
	('5d8ed220-a08c-11ed-9bcf-3fa7f45cef13','installation@radicalstart.com','$2b$08$PE3erYkIhlN81UlVYR5wh.dnUsJcRSgk/FzmSTA/32AO7y/jdVrG.',0,'google','2023-01-30 10:53:44','2023-03-06 16:51:35',0,'2023-03-06 16:51:35',NULL),
	('6c848cb0-a2e5-11ed-a323-3df87f327c3c','rstst400@gmail.com','$2b$08$fNOzxztcHZ66D7yGRCiq4uTj5j9Uok05i5mX7mkbnpHzHAT3XEuCS',1,'google','2023-02-02 10:36:17','2023-03-06 16:51:53',0,'2023-03-06 16:51:53',NULL),
	('70f348d0-b82b-11ed-aaf2-8761493ee12d','narendran.j@radicalstart.com','$2b$08$bd0cbw3G2zFo4zIixZ3kJeJ/W4PGIPMbbnBCE.quMoZFLxLYgZOsm',1,'email','2023-03-01 12:20:23','2023-03-06 16:52:39',0,'2023-03-06 16:52:39',NULL),
	('75a3c020-bc1e-11ed-aca0-35390767afb3','naren3test@gmail.com','$2b$08$L0qWYSg77qEWCjKHeqsfHelV3TkQFIGQ.XCrIPnLPFUw6qjQugdK2',1,'google','2023-03-06 12:57:32','2023-03-06 12:59:23',0,'2023-03-06 12:59:23','75a3c020-bc1e-11ed-aca0-35390767afb3'),
	('814d4e80-b838-11ed-aca0-35390767afb3','naren3test@gmail.com','$2b$08$5kIgKItBFxL1a3GlUJmNX.rTjqjYxhgMNNiTWTgWZsoJisB/GEt3i',1,'google','2023-03-01 13:53:54','2023-03-01 13:54:00',0,'2023-03-01 13:54:00','814d4e80-b838-11ed-aca0-35390767afb3'),
	('836ff100-a3ab-11ed-a323-3df87f327c3c','kayalvizhi.m@radicalstart.com','$2b$08$vPKSkFKZmq4ZhZ/jNi9zUOZ94gE29tgMMQYa50nONGBA0yuVeuiw6',1,'email','2023-02-03 10:14:15','2023-02-03 10:14:34',0,'2023-02-03 10:14:34','836ff100-a3ab-11ed-a323-3df87f327c3c'),
	('86ea41a0-b85a-11ed-aca0-35390767afb3','ETSQST6IAQG7TT5WS7P3YKCNEM-00@cloudtestlabaccounts.com','$2b$08$R6h5nBUzFZPn/QgW65GFrOCu0uUt320MONBzEJXI3HErkc1I/KIjm',1,'google','2023-03-01 17:57:26','2023-03-01 17:57:26',0,NULL,NULL),
	('90883c50-a6f1-11ed-8aa4-b7ae91017668','aravind.k@radicalstart.com','$2b$08$ynN6.GBB5hmNGFA0gCp5Pe5YE/fARvhRQ3him8Dxsd0frc4Kls8s2',1,'email','2023-02-07 14:13:16','2023-03-06 16:52:18',0,'2023-03-06 16:52:18',NULL),
	('92069600-9f3d-11ed-b242-e9a142758e94','Ismoilov.muhammadyor96@gmail.com','$2b$08$YD.SnNQcJ/PK14.wkFiJA.FRp1my1ntQDwSO0/FB0Ow3U0Razzo02',1,'email','2023-01-28 18:57:11','2023-02-05 13:20:25',0,'2023-02-05 13:20:25',NULL),
	('977bc550-5069-11e9-a14e-635e0fd3bfa6','qa@radicalstart.com','$2a$08$lqcmo6OgjVbcioD1uDAlueCdu6JYBwZe2xaoc1dEparRYKDjFrv9y',1,'email','2019-03-27 08:23:25','2023-03-06 16:51:27',0,'2023-03-06 16:51:27',NULL),
	('9dcc9940-a3ab-11ed-a323-3df87f327c3c','kayalvizhi.m@radicalstart.com','$2b$08$1ZZiVkHCed.EwQEExQ0XM.5fNzesxVkM40ai12ySgyfP42E7Zk61m',1,'google','2023-02-03 10:15:00','2023-03-06 16:51:21',0,'2023-03-06 16:51:21',NULL),
	('ae6b40b0-a3c6-11ed-8a79-4988ccdcbdfb','sivasankarim632@gmail.com','$2b$08$6VIOiiolJgq2t5OqUSHRzehku4viIPu9IIlhnfu2UGDOhFKRnY22i',1,'facebook','2023-02-03 13:28:44','2023-03-06 16:52:07',0,'2023-03-06 16:52:07',NULL),
	('b5d82eb0-bc9b-11ed-8061-d37d0fa1b7b1','ismoilov.muhammadyor96@gmail.com','$2b$08$tWqMf8Qkuj5uL9YGiSdheuI5e5iV8IQ/LOxSX06Pu7TWftEKWVj5C',1,'google','2023-03-07 03:54:07','2023-03-07 03:54:07',0,NULL,NULL),
	('b8c2ce20-a3c6-11ed-8a79-4988ccdcbdfb','naren2test@gmail.com','$2b$08$Yq1eC0Vmj.x9S0xwnNAYw.0o7ZtVNC.HZC3daj.rJCwhkQOXgwYj2',1,'google','2023-02-03 13:29:01','2023-03-06 16:52:10',0,'2023-03-06 16:52:10',NULL),
	('cbed7110-bc1e-11ed-aca0-35390767afb3','naren3test@gmail.com','$2b$08$kc6TInLuv09e/qMcLg3a6.2mrKj/T6ZuFDXYlxGzm/s.kXutdvf0e',1,'email','2023-03-06 12:59:57','2023-03-06 16:52:55',0,'2023-03-06 16:52:55',NULL),
	('d1d6d5a0-5064-11e9-a14e-635e0fd3bfa6','demo@radicalstart.com','$2a$08$jkiXGz2lM41L47LdWFTBZuLhwT3dTLDK3Nmhjx6PrRydp0DEEb9gG',1,'email','2019-03-27 07:49:15','2023-03-06 16:51:24',0,'2023-03-06 16:51:24',NULL),
	('d21fae20-a09b-11ed-9bcf-3fa7f45cef13','selva@radicalstart.com','$2b$08$cd60kTJU7UWp1Q.lfTtVouj5xDe805fF7GmDwFgK14RvF/KgW0il6',1,'email','2023-01-30 12:44:22','2023-03-06 16:51:39',0,'2023-03-06 16:51:39',NULL),
	('d6c41460-a3c6-11ed-8a79-4988ccdcbdfb','qwellmartin@gmail.com','$2b$08$/aGr7LHOzT8ElGzPyo6Bbu.DF.jHSGcJHOQZnkeRWAVOg.QB48/.O',1,'email','2023-02-03 13:29:52','2023-02-03 13:29:52',0,NULL,NULL),
	('dee86a30-b927-11ed-aca0-35390767afb3','appreview1086@icloud.com','$2b$08$Yw/w4lDgdCmgYoESZ0dOt.RHLwouwA.l.YNxnTLbGG65pC6d/tYuu',1,'apple','2023-03-02 18:27:21','2023-03-02 18:27:21',0,NULL,NULL),
	('e18f7df0-b34b-11ed-a6ae-c92d98724b1b','tpb7vfbdrd@privaterelay.appleid.com','$2b$08$X5p6D/yU0mHjn2Iwh8Xw7ObJTfY9SRLp/M7Cw0/zFcJ6ubOuxxnFG',1,'apple','2023-02-23 07:30:00','2023-03-06 16:52:26',0,'2023-03-06 16:52:26',NULL),
	('e339d4e0-a0bb-11ed-bb9e-8521f0de3c3e','Khasanlabel@gmail.com','$2b$08$KAHvlPKoZ8yyLdkc0wfHbOhEMf8WC7Yd.MvhOhOAXfni35Xj5rbVa',1,'email','2023-01-30 16:33:54','2023-01-30 16:33:54',0,NULL,NULL),
	('e828a8f0-a557-11ed-8a79-4988ccdcbdfb','ismoilov.muhammadyor96@gmail.com','$2b$08$nGjlPPxHpp8l1S/rSvj3xeRa/SFH9codAXtkBX6tRusB2jUzrC6ZK',1,'google','2023-02-05 13:20:49','2023-02-05 13:28:51',0,'2023-02-05 13:28:51',NULL),
	('ec50cfd0-a2db-11ed-8a0b-ff0ac055de5c','xamzatello@gmail.com','$2b$08$Y2BfhPvT9VmJX7WwiRcelORMMoAdkDftadnQOFHkH.CxuIuREakXa',0,'google','2023-02-02 09:28:16','2023-02-02 09:28:16',0,NULL,NULL),
	('f300ec80-ab54-11ed-a6ae-c92d98724b1b','narutouzumakihinata007@gmail.com','$2b$08$7DfEmKQVsBhyB.11WEvvXuV4a9yUNSRu7jYJLe/MSW4BnFINkEiD2',1,'email','2023-02-13 04:14:46','2023-02-13 04:14:46',0,NULL,NULL);

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table UserAmenities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserAmenities`;

CREATE TABLE `UserAmenities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `amenitiesId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  CONSTRAINT `UserAmenities_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `UserAmenities` WRITE;
/*!40000 ALTER TABLE `UserAmenities` DISABLE KEYS */;

INSERT INTO `UserAmenities` (`id`, `listId`, `amenitiesId`, `createdAt`, `updatedAt`)
VALUES
	(129,15,26,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(130,15,25,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(131,15,28,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(132,15,27,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(133,15,73,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(134,15,118,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(181,20,26,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(182,20,118,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(183,20,73,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(184,20,25,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(185,20,27,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(186,20,28,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(187,21,25,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(188,21,26,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(189,21,27,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(190,21,28,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(191,21,73,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(192,21,118,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(200,14,27,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(201,14,26,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(202,14,28,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(203,14,73,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(204,14,25,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(205,14,118,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(206,14,119,'2023-03-21 16:25:32','2023-03-21 16:25:32');

/*!40000 ALTER TABLE `UserAmenities` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table UserClaim
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserClaim`;

CREATE TABLE `UserClaim` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `UserClaim_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table UserHouseRules
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserHouseRules`;

CREATE TABLE `UserHouseRules` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `houseRulesId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  KEY `houseRulesId` (`houseRulesId`),
  CONSTRAINT `UserHouseRules_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `UserHouseRules_ibfk_2` FOREIGN KEY (`houseRulesId`) REFERENCES `ListSettings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `UserHouseRules` WRITE;
/*!40000 ALTER TABLE `UserHouseRules` DISABLE KEYS */;

INSERT INTO `UserHouseRules` (`id`, `listId`, `createdAt`, `updatedAt`, `houseRulesId`)
VALUES
	(98,21,'2023-03-20 15:50:15','2023-03-20 15:50:15',51),
	(113,14,'2023-03-21 16:25:58','2023-03-21 16:25:58',52),
	(114,14,'2023-03-21 16:25:58','2023-03-21 16:25:58',50),
	(115,14,'2023-03-21 16:25:58','2023-03-21 16:25:58',48),
	(116,14,'2023-03-21 16:25:58','2023-03-21 16:25:58',51),
	(117,14,'2023-03-21 16:25:58','2023-03-21 16:25:58',49),
	(126,20,'2023-03-21 16:31:00','2023-03-21 16:31:00',48),
	(127,20,'2023-03-21 16:31:00','2023-03-21 16:31:00',49),
	(128,20,'2023-03-21 16:31:00','2023-03-21 16:31:00',50),
	(129,20,'2023-03-21 16:31:00','2023-03-21 16:31:00',51);

/*!40000 ALTER TABLE `UserHouseRules` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table UserListingData
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserListingData`;

CREATE TABLE `UserListingData` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `settingsId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  CONSTRAINT `UserListingData_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `UserListingData` WRITE;
/*!40000 ALTER TABLE `UserListingData` DISABLE KEYS */;

INSERT INTO `UserListingData` (`id`, `listId`, `settingsId`, `createdAt`, `updatedAt`)
VALUES
	(189,15,76,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(190,15,6,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(191,15,10,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(192,15,22,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(241,20,77,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(242,20,6,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(243,20,10,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(244,20,22,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(249,21,76,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(250,21,6,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(251,21,10,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(252,21,22,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(257,14,77,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(258,14,5,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(259,14,10,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(260,14,23,'2023-03-21 16:25:32','2023-03-21 16:25:32');

/*!40000 ALTER TABLE `UserListingData` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table UserListingSteps
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserListingSteps`;

CREATE TABLE `UserListingSteps` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `step1` enum('inactive','active','completed') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'inactive',
  `step2` enum('inactive','active','completed') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'inactive',
  `step3` enum('inactive','active','completed') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'inactive',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `step4` enum('inactive','active','completed') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'active',
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  CONSTRAINT `UserListingSteps_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `UserListingSteps` WRITE;
/*!40000 ALTER TABLE `UserListingSteps` DISABLE KEYS */;

INSERT INTO `UserListingSteps` (`id`, `listId`, `step1`, `step2`, `step3`, `createdAt`, `updatedAt`, `step4`)
VALUES
	(14,14,'completed','completed','completed','2023-02-07 11:01:50','2023-02-07 11:07:02','completed'),
	(15,15,'completed','completed','completed','2023-02-08 14:51:06','2023-02-08 15:00:02','completed'),
	(20,20,'completed','completed','completed','2023-03-19 12:10:04','2023-03-19 13:15:44','completed'),
	(21,21,'completed','completed','completed','2023-03-20 15:46:24','2023-03-20 15:50:15','completed');

/*!40000 ALTER TABLE `UserListingSteps` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table UserLogin
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserLogin`;

CREATE TABLE `UserLogin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deviceType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deviceId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deviceDetail` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `UserLogin` WRITE;
/*!40000 ALTER TABLE `UserLogin` DISABLE KEYS */;

INSERT INTO `UserLogin` (`id`, `name`, `key`, `userId`, `deviceType`, `deviceId`, `deviceDetail`, `createdAt`, `updatedAt`)
VALUES
	(4,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NTMxMDcwMSwiZXhwIjoxNjkwODYyNzAxfQ.4TC7IDcLnEsp5p3_Q8eVj24z58LhgIjBN4yPMQ2_fyE','977bc550-5069-11e9-a14e-635e0fd3bfa6','android','f_5FZKppT2azkH628YtEhH:APA91bFPfbEOsQuHvqEf0inxuX69Sugvb4z5UfAYzEUAuU0H6wcdI4lVdehwz6SkoNJQGjsFrdEx24nKKPyBAihdoSzah7ZUelXRGs5pu4p7JZeynh6cJ-mBK5-PaSSZnjsT5sSg482R','','2023-02-02 04:04:30','2023-02-02 04:05:01'),
	(6,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3ZTQwMTgwLWEyMmQtMTFlZC1hODIzLTQ3MDJlM2E4YjE2NSIsImVtYWlsIjoiZGV2ZWxvcGVyQHJhZGljYWxzdGFydC5jb20iLCJpYXQiOjE2NzUzMTQ5MTQsImV4cCI6MTY5MDg2NjkxNH0.p6i6kShjhFYaggKMQ5YmAULM_AowVN6Z34oNlmFKPOY','17e40180-a22d-11ed-a823-4702e3a8b165','android','cXBNxZQqQKiCle8wDQLvWT:APA91bFKUU8_G2rPmzFNbiG8YNWpc4U4axCekj1faBpy9lj5nQEHaKdg90C7uiitMv0P6AbrYtN4SJH9rQJg2VmN8i2st_TnXDHlfqAnZGAuzGijmbWt7HlOYdP2EGoQ3LY6Ydua6N7G','','2023-02-02 05:15:14','2023-02-02 05:15:14'),
	(9,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZjODQ4Y2IwLWEyZTUtMTFlZC1hMzIzLTNkZjg3ZjMyN2MzYyIsImVtYWlsIjoicnN0c3Q0MDBAZ21haWwuY29tIiwiaWF0IjoxNjc1MzM0MTc3LCJleHAiOjE2OTA4ODYxNzd9.aOiERqQLZKqhLFCtIcihxm7x_KnSWEfx6SF3tkVWPUQ','6c848cb0-a2e5-11ed-a323-3df87f327c3c','android','eETBaWhPTyiwzT5gNYc8dZ:APA91bEFYgWb719IAQRfvASxlokkAAiJvg-dh9Ri1_Ct8v429i9dUC2sbHVtmY_tDY5Xcn2E-igUivwaDAGs-UG7wUD44yXV0eSW5KPMUlvWXMBP8i_z_yZwuZIht6E2oeKU2OHbdcrT','','2023-02-02 10:36:17','2023-02-02 10:36:17'),
	(15,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxMDA3YTcwLWEyMmQtMTFlZC1hODIzLTQ3MDJlM2E4YjE2NSIsImVtYWlsIjoia2F5YWx2aXpoaS5tQHJhZGljYWxzdGFydC5jb20iLCJpYXQiOjE2NzU0MTg5NDMsImV4cCI6MTY5MDk3MDk0M30.9IekzhD0RCH11xhsoD-GGCKbAX-_JKDJ7MqY7bjDJSk','01007a70-a22d-11ed-a823-4702e3a8b165','android','fuQfarjmToy9srPnoxhTks:APA91bG1_CWv7-A-mFT6l9NAxKR3jhGZC9R500XLQ1OMsyEY4LCnaQBpTOv-o_X7sUqXgQS8xjymus7WglkWMvwn2F-IfcOGSHndasD78aEVLn_eb89PBHpfMjmsyc43rxx5u53EK77J','','2023-02-03 10:09:03','2023-02-03 10:09:03'),
	(16,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzNmZmMTAwLWEzYWItMTFlZC1hMzIzLTNkZjg3ZjMyN2MzYyIsImVtYWlsIjoia2F5YWx2aXpoaS5tQHJhZGljYWxzdGFydC5jb20iLCJpYXQiOjE2NzU0MTkyNTUsImV4cCI6MTY5MDk3MTI1NX0.jTlFxpW2xRRSvGvC-sJEdmBRf0rKJneibT6JEcAtOFQ','836ff100-a3ab-11ed-a323-3df87f327c3c','android','fuQfarjmToy9srPnoxhTks:APA91bG1_CWv7-A-mFT6l9NAxKR3jhGZC9R500XLQ1OMsyEY4LCnaQBpTOv-o_X7sUqXgQS8xjymus7WglkWMvwn2F-IfcOGSHndasD78aEVLn_eb89PBHpfMjmsyc43rxx5u53EK77J','','2023-02-03 10:14:15','2023-02-03 10:14:15'),
	(17,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlkY2M5OTQwLWEzYWItMTFlZC1hMzIzLTNkZjg3ZjMyN2MzYyIsImVtYWlsIjoia2F5YWx2aXpoaS5tQHJhZGljYWxzdGFydC5jb20iLCJpYXQiOjE2NzU0MTkzMDAsImV4cCI6MTY5MDk3MTMwMH0.-MLC2BA0Tx7tszY3LkDe_slFJi6sB5yQ5k3eZQUIbw4','9dcc9940-a3ab-11ed-a323-3df87f327c3c','android','fuQfarjmToy9srPnoxhTks:APA91bG1_CWv7-A-mFT6l9NAxKR3jhGZC9R500XLQ1OMsyEY4LCnaQBpTOv-o_X7sUqXgQS8xjymus7WglkWMvwn2F-IfcOGSHndasD78aEVLn_eb89PBHpfMjmsyc43rxx5u53EK77J','','2023-02-03 10:15:00','2023-02-03 10:15:00'),
	(29,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NTQzMjg1OSwiZXhwIjoxNjkwOTg0ODU5fQ.zfUreTkRMfu8wZXevYpPs5FOO1Wj1STr5VF_zXQ3NNY','977bc550-5069-11e9-a14e-635e0fd3bfa6','android','eC-dSJrzTwmXy8zuCVbHSy:APA91bHdDP_oYdBrYWCi_55JwA6B1J4CxwHBfa46h5jqR8JobC33girNp7aL8d7CAaZEx-KgpgTeJj-lfg6APlyNSjRNChZJDk6ttUrTVdKXX1gZx9O1ymkXr4m7DhF2x6tmQK84zkGN','','2023-02-03 14:00:59','2023-02-03 14:00:59'),
	(33,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ2YzQxNDYwLWEzYzYtMTFlZC04YTc5LTQ5ODhjY2RjYmRmYiIsImVtYWlsIjoicXdlbGxtYXJ0aW5AZ21haWwuY29tIiwiaWF0IjoxNjc1NDM0NDc5LCJleHAiOjE2OTA5ODY0Nzl9.2eUOiUICC0H4SAg502RZkDEZDzHmAHqpHkpphqxA9eU','d6c41460-a3c6-11ed-8a79-4988ccdcbdfb','android','fQXFcYkbTlCFSDXRqLh_A9:APA91bGgVc1KbJEICGxCtAqXta2fLqiIyRxjwNuNpSSmAEestP78PPWLlroP8hSzVAaTS9jV8QnlV8B4txfO7aPtZB_f4YH_EpsYioJy5MpPnOsxzpComZSWnyo9AyIUEjrf9eANhwaa','','2023-02-03 14:27:59','2023-02-03 14:27:59'),
	(35,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4ZDUzY2IwLWE1NTctMTFlZC04YTc5LTQ5ODhjY2RjYmRmYiIsImVtYWlsIjoibXVoYW1tYWR5b3IuaXptb2lsb3ZAa3ZhcmVuZGEudXoiLCJpYXQiOjE2NzU2MDMxOTksImV4cCI6MTY5MTE1NTE5OX0.CxaTgkGjN77i6zB4EpZOfoxFsYceB-h2chwn8LBBt2w','38d53cb0-a557-11ed-8a79-4988ccdcbdfb','android','cx0PpXYYRhuPOOhsQmNIvN:APA91bECIkCXs_iWrFjWeb4DQLwwDipNDce_NcxT4d0PvJsuWAyJA0xEPxkuCcsPDplH2fC4g41QyhLvkny6iEqS7pZ_wBulEAFhoio6Fv1wcMC3fK_KNPB9zUA0Gq48Tl285qPK4evR','','2023-02-05 13:19:59','2023-02-05 13:19:59'),
	(36,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4MjhhOGYwLWE1NTctMTFlZC04YTc5LTQ5ODhjY2RjYmRmYiIsImVtYWlsIjoiaXNtb2lsb3YubXVoYW1tYWR5b3I5NkBnbWFpbC5jb20iLCJpYXQiOjE2NzU2MDMyNDksImV4cCI6MTY5MTE1NTI0OX0.YCXVFTD4zD8-JsmSbgCHsd-XWYDPqlJd3yebTwU3k0Y','e828a8f0-a557-11ed-8a79-4988ccdcbdfb','android','cx0PpXYYRhuPOOhsQmNIvN:APA91bECIkCXs_iWrFjWeb4DQLwwDipNDce_NcxT4d0PvJsuWAyJA0xEPxkuCcsPDplH2fC4g41QyhLvkny6iEqS7pZ_wBulEAFhoio6Fv1wcMC3fK_KNPB9zUA0Gq48Tl285qPK4evR','','2023-02-05 13:20:49','2023-02-05 13:20:49'),
	(37,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMyZWJmM2YwLWE1NTktMTFlZC04YTc5LTQ5ODhjY2RjYmRmYiIsImVtYWlsIjoiamFtb2x0b2todGFldjFAZ21haWwuY29tIiwiaWF0IjoxNjc1NjAzODA0LCJleHAiOjE2OTExNTU4MDR9.m-tKWisIQKHDz9uT74g7xNrwquj-WE4N_u7OKNgSo48','32ebf3f0-a559-11ed-8a79-4988ccdcbdfb','android','cx0PpXYYRhuPOOhsQmNIvN:APA91bECIkCXs_iWrFjWeb4DQLwwDipNDce_NcxT4d0PvJsuWAyJA0xEPxkuCcsPDplH2fC4g41QyhLvkny6iEqS7pZ_wBulEAFhoio6Fv1wcMC3fK_KNPB9zUA0Gq48Tl285qPK4evR','','2023-02-05 13:30:04','2023-02-05 13:30:04'),
	(38,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxZDZkNWEwLTUwNjQtMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoiZGVtb0ByYWRpY2Fsc3RhcnQuY29tIiwiaWF0IjoxNjc1NjkyNTI5LCJleHAiOjE2OTEyNDQ1Mjl9.wwFNQbxa64x74gTyHTtSxkqiKrH60mpbIg7Xd3hbR8k','d1d6d5a0-5064-11e9-a14e-635e0fd3bfa6','android','dwKJY6RcSFOugff03SsL-k:APA91bE3DC1kZtI6CJ352F6ZjtfgbtKSHh1fkUcvY-_0iquHkuoyErJiRjvw-aUccHI89mukTp0hbdTUmdQcE14Bme8LAFyQJf-AdeEaJIaCmrTK33arM4oYWYS67IpuYThd5GrBZ8iY','','2023-02-06 14:08:49','2023-02-06 14:08:49'),
	(39,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NTY5Mjc0NywiZXhwIjoxNjkxMjQ0NzQ3fQ.eVISoNJpyWqv-Od-Bo9rXStwWsSVwvYuzltq7CL23t8','977bc550-5069-11e9-a14e-635e0fd3bfa6','android','cSPjJ3SVT7SKvXTDvRtZU2:APA91bGMZfZAAQ-8doWDh_5dqoKNuBhgYr-17acbQgByZIg6HA3DzYhru-jpL6hmnKQxspX_Ol9dP3z051Nv4azNM3SAh2Z-6gW9T9coqqcqbDMnEC-4QBQJ3HX979MhejGiIPAWd0uA','','2023-02-06 14:12:26','2023-02-06 14:12:27'),
	(41,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NTc0NzE5MiwiZXhwIjoxNjkxMjk5MTkyfQ.j_4wwJ2a_cJpgtGxyipowkO4dRvbPp9DTfq4bDxNzQ4','977bc550-5069-11e9-a14e-635e0fd3bfa6','android','eL6pdw6bQQuaksQlTAZgU3:APA91bHdIgVyPe0q7uuFtf6tjgPnxsd4IhCfraCVj0XPFgnGf003LxRWNjMEzWv0AwB3wpNofcuITqVCZ9-8qf22XLqpTajHlh2V0ta6jIBJ7Pjtr6Y5lvB62fZUtUYV8sNDAPrNGo7R','','2023-02-07 05:19:29','2023-02-07 05:19:52'),
	(43,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NTc1NDQ1MiwiZXhwIjoxNjkxMzA2NDUyfQ.ssjUkcDDH6v_Qq--B6EvldM3WnkguijoQqA3HetKxNg','977bc550-5069-11e9-a14e-635e0fd3bfa6','android','eFietTd2SvG-IhgIC80MRB:APA91bFtavAG_LICGBpwRVEqEJ0YzmMcEfJyysuqpWqwBrZOYeDAGL3eRqXnqtXPjDId8vgzm-60sTNvfym9k8Vae5-mud2LzWVYDvOnNCykLYnRPNYa8dVICKOC665CuAKMQ80GmdZs','','2023-02-07 07:20:52','2023-02-07 07:20:52'),
	(45,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkwODgzYzUwLWE2ZjEtMTFlZC04YWE0LWI3YWU5MTAxNzY2OCIsImVtYWlsIjoiYXJhdmluZC5rQHJhZGljYWxzdGFydC5jb20iLCJpYXQiOjE2NzU3NzkxOTYsImV4cCI6MTY5MTMzMTE5Nn0.sYe-dvKYXf8JAi_Iz0eb9BGsSxY-_xKThF1w5Yicx38','90883c50-a6f1-11ed-8aa4-b7ae91017668','android','d6GK-WznRbmSj7iB7lAwXM:APA91bHtwUK1au-qrIzyJgF0MT1lOwRlWkmCpLc8vNxmN23wSyKV_ZkBORX47NaNL6AA0tO_yqjcpnELUiNu4A3SOlfuLYwJocsPpwdLcaLPWkpOgid9RQMRzCZYdDNmdW019vt7eKEP','','2023-02-07 14:13:16','2023-02-07 14:13:16'),
	(46,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYzMDBlYzgwLWFiNTQtMTFlZC1hNmFlLWM5MmQ5ODcyNGIxYiIsImVtYWlsIjoibmFydXRvdXp1bWFraWhpbmF0YTAwN0BnbWFpbC5jb20iLCJpYXQiOjE2NzYyNjE2ODYsImV4cCI6MTY5MTgxMzY4Nn0.lHJ6pPGREpPSxl6EU-WK1BCG_J_oL_ri85q-GQ0NdyQ','f300ec80-ab54-11ed-a6ae-c92d98724b1b','android','cRxIH9BqTguIYLXDL2uP2T:APA91bFd0_trQYxvvNK3FWp_MZ9QhZ0d2hj6xyxyzpeOmFHdPrT3YoPheQRGKFJyIl4-eSHYZ22W750e91sMLrO4GRtZWXwrV0fNykGJ6GQ69wu58C2H4LX85GFijkn_TMWLcbj4YJme','','2023-02-13 04:14:46','2023-02-13 04:14:46'),
	(56,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3ZTQwMTgwLWEyMmQtMTFlZC1hODIzLTQ3MDJlM2E4YjE2NSIsImVtYWlsIjoiZGV2ZWxvcGVyQHJhZGljYWxzdGFydC5jb20iLCJpYXQiOjE2NzcxMzczMzgsImV4cCI6MTY5MjY4OTMzOH0.NP--Rhpqp0AJJ2k058KaTPsrQXVswe-BVw2Jj0fSGEY','17e40180-a22d-11ed-a823-4702e3a8b165','iOS','','','2023-02-23 07:28:58','2023-02-23 07:28:58'),
	(58,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NzEzNzgwOCwiZXhwIjoxNjkyNjg5ODA4fQ.MihDh0f93Vzb-v7qTOhKA0gijIkIQ8JBpRMTsKqX3Ls','977bc550-5069-11e9-a14e-635e0fd3bfa6','iOS','cApqCUNlBkCbj2htty4uoe:APA91bEJZpUxhao70SlWnlIW5VZQlF1GuVG8Q0FBQvvSKnddsOEfPoBvOcpYp2oSSkWtuLpfZc5X02c2WE4T_-YRZzFIXv6t61YuXWgYqYAb3qGEYYupD0NJlnoAM2wjXa0RP1HktbK1','','2023-02-23 07:36:48','2023-02-23 07:36:48'),
	(59,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NzY3MTU1NSwiZXhwIjoxNjkzMjIzNTU1fQ.ZM0_bbvBEeQofncxHEFbv4AbGFCeVwAcw68lt0hLJ_M','977bc550-5069-11e9-a14e-635e0fd3bfa6','iOS','cjS4opst3UH-spz9850qKz:APA91bEVeiEFv0HsqIvsWSj_Y8IjYHcL_P8lMqW7OCdgRU9qNkQr4cMOPgMSetnJAzU9l7BHZ8EqgroBXUx7yybdBB2FpLZUmkbhpPZPNHB_ZhB4_VpbGzdX2Y8-G-hHWhOuks3iUng_','','2023-02-23 09:20:54','2023-03-01 11:52:35'),
	(60,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NzE1MjcxMCwiZXhwIjoxNjkyNzA0NzEwfQ.q3z_aZUhESHgRmFOYTNU445c5mvVxX1hVSkjpBRQrIg','977bc550-5069-11e9-a14e-635e0fd3bfa6','iOS','e_5bVWlPskLfhs6vzmf2r-:APA91bHAlZniLuI2ZS7IjG0B_GF5G5vfXfO0bs4psaQPto4dT1Zrt54Cw46s_1ZMZq5ht56y8W9MxIlsOpDNqF4ULsaWH6fYAFv4YgilhbrYzlcx_GzbUE4uUHDo5Gs3IpsZCuVmolZ5','','2023-02-23 11:45:10','2023-02-23 11:45:10'),
	(61,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NzY2ODYyNywiZXhwIjoxNjkzMjIwNjI3fQ.JOkvvVgb4UkGyOZSoygcsKXxBSfj4fh07vi-G2G1uQQ','977bc550-5069-11e9-a14e-635e0fd3bfa6','android','c3CNwn7hTnugeekNdHL-LJ:APA91bEBDANbbh7riFUk0sjNTfTBEq1b_FRwhaftp9NnslHgXKAmm1xt4ZwhJ0EgpUA5yx81EaohSlqVxUKBo0sNPIxTIaJXlS3_g3ZnXSCIfqACbshvSQ_HbxfWN3Up8CjGFdmxpxs3','','2023-03-01 11:03:47','2023-03-01 11:03:47'),
	(63,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NzY2OTU4NywiZXhwIjoxNjkzMjIxNTg3fQ.bsLlVT9ToFAhEZdlH4Hl31AILU9NvgINNOxVFtPKInk','977bc550-5069-11e9-a14e-635e0fd3bfa6','android','cmBNV6k2RpyTQqJpX4sEba:APA91bFyv09BtIaH3JisIgAvPaiHOntsQ0Bk3CvUgVHS_cXaFprXnuJZlPemYg859I6jSrJhWkCNipC1MK5PT5G-HWhLRDgVtzgyAFOnZ2sT5JZs5SX6Bc7wwMP_Kx3htpscDcNgAqkP','','2023-03-01 11:19:47','2023-03-01 11:19:47'),
	(64,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NzY2OTcwNSwiZXhwIjoxNjkzMjIxNzA1fQ._T0NVn6KujH0Uv0w3pjs3DuxSKeHknsvHJgRp-0d4R0','977bc550-5069-11e9-a14e-635e0fd3bfa6','android','c1XhDtszRIeb5LsCwA2pvs:APA91bHRLoN6jZ7nSrqQz-XmnQe0LNyNysTH1Y1stI28B3_yCTBlsKv0cYIkNImTb3IwroiNDD6zTs_x3lQOzQKkdYXwvuza-irYnv5Bovxrq25kxm4EtSTB4Ns5qqpGh-8z3VxqHC_p','','2023-03-01 11:21:45','2023-03-01 11:21:45'),
	(69,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzNDE4OTQwLWI4MmItMTFlZC1hYWYyLTg3NjE0OTNlZTEyZCIsImVtYWlsIjoibmFyZW4zdGVzdEBnbWFpbC5jb20iLCJpYXQiOjE2Nzc2NzM0OTgsImV4cCI6MTY5MzIyNTQ5OH0.I2vSVPdcX7ZmGDA_94HV_fDW2BS3FaxOWTN71JYqkH8','13418940-b82b-11ed-aaf2-8761493ee12d','android','eSSQy9xtTdqwi1GAxvHNA8:APA91bFVNCQ68Wf_7AsOJX44il38kHjt0JNyJbR382qfTx3GS9BbBn4PKwmkNnKjLzflB2wqiMeOXt9VN6cCVnj4pRmeetuMdVefkUm1b-9SmQk94k5JYxpoDjYa0xVSzKrJrgU9wVQJ','','2023-03-01 12:24:58','2023-03-01 12:24:58'),
	(70,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlkY2M5OTQwLWEzYWItMTFlZC1hMzIzLTNkZjg3ZjMyN2MzYyIsImVtYWlsIjoia2F5YWx2aXpoaS5tQHJhZGljYWxzdGFydC5jb20iLCJpYXQiOjE2Nzc2NzM3MjgsImV4cCI6MTY5MzIyNTcyOH0.9ZzZ7877R1iHV-rrwS7kNiFzd8JkVC0mJGEOYlaSE7g','9dcc9940-a3ab-11ed-a323-3df87f327c3c','android','eWRJaTCORwemi6WRlvz8_f:APA91bHAHtdqLW0-sn3Gjaiqb0Ai6Hw12_aq_r9LsPCqRpjqJoY_8AYQ-_V6TPh-BvOtRFVmNdvwMc7IeOL9_5bw2gP2ionj7xzaKh5nEkqyq4npzv-HGR_-WAF4ZKr6f702QmhMw2c6','','2023-03-01 12:28:48','2023-03-01 12:28:48'),
	(71,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxZDZkNWEwLTUwNjQtMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoiZGVtb0ByYWRpY2Fsc3RhcnQuY29tIiwiaWF0IjoxNjc3Njc0NTYzLCJleHAiOjE2OTMyMjY1NjN9.ftC0pswfm_vJVz0KyB6c-DQ89igh0Zl_kLEk-cPhak0','d1d6d5a0-5064-11e9-a14e-635e0fd3bfa6','android','eSSQy9xtTdqwi1GAxvHNA8:APA91bFVNCQ68Wf_7AsOJX44il38kHjt0JNyJbR382qfTx3GS9BbBn4PKwmkNnKjLzflB2wqiMeOXt9VN6cCVnj4pRmeetuMdVefkUm1b-9SmQk94k5JYxpoDjYa0xVSzKrJrgU9wVQJ','','2023-03-01 12:42:20','2023-03-01 12:42:43'),
	(73,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5MWI1NTkwLWI4MzgtMTFlZC1hY2EwLTM1MzkwNzY3YWZiMyIsImVtYWlsIjoibmFyZW4zdGVzdEBnbWFpbC5jb20iLCJpYXQiOjE2Nzc2Nzg3ODksImV4cCI6MTY5MzIzMDc4OX0._hM-79EVydJqfQQJaNMfwTL61j0SRA0Y2sRbiKqFEq8','291b5590-b838-11ed-aca0-35390767afb3','iOS','co_9r_7Fm0roulYM0pa1R_:APA91bFFGBOfkeyaKZw2I1P7E7RBZysWZgbW22n2LkzCJpJhOa-6S97c55Vrfr-xxpzdxWm3danywtWe3gjwUCAkA3Pe0-iklXeaQ5ZJe1Eo24C2RmUnbjopW0Hub2WdyhU5Yd1zlnSj','','2023-03-01 13:53:09','2023-03-01 13:53:09'),
	(74,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxNGQ0ZTgwLWI4MzgtMTFlZC1hY2EwLTM1MzkwNzY3YWZiMyIsImVtYWlsIjoibmFyZW4zdGVzdEBnbWFpbC5jb20iLCJpYXQiOjE2Nzc2Nzg4MzQsImV4cCI6MTY5MzIzMDgzNH0.9NfBuT7qYSzZ1hcaJ9Y3zx1LqD-FcvPf_8fHbSbcqh8','814d4e80-b838-11ed-aca0-35390767afb3','iOS','co_9r_7Fm0roulYM0pa1R_:APA91bFFGBOfkeyaKZw2I1P7E7RBZysWZgbW22n2LkzCJpJhOa-6S97c55Vrfr-xxpzdxWm3danywtWe3gjwUCAkA3Pe0-iklXeaQ5ZJe1Eo24C2RmUnbjopW0Hub2WdyhU5Yd1zlnSj','','2023-03-01 13:53:54','2023-03-01 13:53:54'),
	(75,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxZDZkNWEwLTUwNjQtMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoiZGVtb0ByYWRpY2Fsc3RhcnQuY29tIiwiaWF0IjoxNjc3Njc4ODYzLCJleHAiOjE2OTMyMzA4NjN9.k3dxdw5ZVdK38wk_XvDnEoViEDPNSqOYYNo9VAotySI','d1d6d5a0-5064-11e9-a14e-635e0fd3bfa6','iOS','co_9r_7Fm0roulYM0pa1R_:APA91bFFGBOfkeyaKZw2I1P7E7RBZysWZgbW22n2LkzCJpJhOa-6S97c55Vrfr-xxpzdxWm3danywtWe3gjwUCAkA3Pe0-iklXeaQ5ZJe1Eo24C2RmUnbjopW0Hub2WdyhU5Yd1zlnSj','','2023-03-01 13:54:23','2023-03-01 13:54:23'),
	(76,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlZTg2YTMwLWI5MjctMTFlZC1hY2EwLTM1MzkwNzY3YWZiMyIsImVtYWlsIjoiYXBwcmV2aWV3MTA4NkBpY2xvdWQuY29tIiwiaWF0IjoxNjc3NzgxNjQxLCJleHAiOjE2OTMzMzM2NDF9.Zh7nK-OzMr22K_NdtgjPA1ONfRdzyLQUFqB7LPXDtqE','dee86a30-b927-11ed-aca0-35390767afb3','iOS','ed4MXYyvvkdiinsTIjjITB:APA91bGXFX1U5VZozV7bmkGhI7O-rXMtJQpntPyWyj1ya_MVJEbdGv-pXp7G3mKrbtM8DD5wyZ7vbvzMpSSmPkpaL4tm2iVEb2P2DCP9ArELLkh0PwyAG4KVS6pjosgbaPGHVZB4ddML','','2023-03-02 18:27:21','2023-03-02 18:27:21'),
	(77,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3N2JjNTUwLTUwNjktMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoicWFAcmFkaWNhbHN0YXJ0LmNvbSIsImlhdCI6MTY3NzkzMDQ5MSwiZXhwIjoxNjkzNDgyNDkxfQ.aA5WESI0MLRGQtkTl9AxZC-R_vDccpLGPstJEmAjRAE','977bc550-5069-11e9-a14e-635e0fd3bfa6','android','fQeJLPJ_Rpq41fke1KRTVw:APA91bFE1gFEIx8uyiHzlXelVT6XVp-Ji5wYyujpq6Qndc0LjV-Ow-sHHHU1AGhT-4qMZVP0Tz0y2rbPkwoCbduZbuHVbwxKYg6CDcygiIixdYz5HxHSR6q3ySjLTqC4-gWKi_mDTGa1','','2023-03-04 11:48:11','2023-03-04 11:48:11'),
	(81,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1YTNjMDIwLWJjMWUtMTFlZC1hY2EwLTM1MzkwNzY3YWZiMyIsImVtYWlsIjoibmFyZW4zdGVzdEBnbWFpbC5jb20iLCJpYXQiOjE2NzgxMDc1MzUsImV4cCI6MTY5MzY1OTUzNX0.CJ1He6r6Lq-uCqBSDd2W4EpKSR5JQCFrICHz5d3bYTw','75a3c020-bc1e-11ed-aca0-35390767afb3','android','cFXMS83-RGe0e-Gb6OJ6dJ:APA91bFXJWa19nuDBqLxDum0L2eqPDPOdyqNlPsGm2B5pZmcBmOWBje5VVhVIwgKJ3HW3AyaI7c3ZDxUtYvmhC8Fdd9TCCt_h36KTnhcQvnh3k70x-S_ZvjgwGoJDBCm-SPd7EnyF1Bu','','2023-03-06 12:58:55','2023-03-06 12:58:55'),
	(83,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxZDZkNWEwLTUwNjQtMTFlOS1hMTRlLTYzNWUwZmQzYmZhNiIsImVtYWlsIjoiZGVtb0ByYWRpY2Fsc3RhcnQuY29tIiwiaWF0IjoxNjc4MTA3Njk0LCJleHAiOjE2OTM2NTk2OTR9.fi8tTasKfj0tc7QOqjaj-_y8RLVBYhTcWWvJqLop6fQ','d1d6d5a0-5064-11e9-a14e-635e0fd3bfa6','android','cFXMS83-RGe0e-Gb6OJ6dJ:APA91bFXJWa19nuDBqLxDum0L2eqPDPOdyqNlPsGm2B5pZmcBmOWBje5VVhVIwgKJ3HW3AyaI7c3ZDxUtYvmhC8Fdd9TCCt_h36KTnhcQvnh3k70x-S_ZvjgwGoJDBCm-SPd7EnyF1Bu','','2023-03-06 13:01:34','2023-03-06 13:01:34'),
	(84,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI1ZDgyZWIwLWJjOWItMTFlZC04MDYxLWQzN2QwZmExYjdiMSIsImVtYWlsIjoiaXNtb2lsb3YubXVoYW1tYWR5b3I5NkBnbWFpbC5jb20iLCJpYXQiOjE2NzgxNjEyNDcsImV4cCI6MTY5MzcxMzI0N30.ZTdi_8rfP-7agCnWVbqshiIX9HTMKq4-8oNF7shJkuM','b5d82eb0-bc9b-11ed-8061-d37d0fa1b7b1','android','d1xie_8uQ6yeSS306UNjY3:APA91bH2kxfK3obTcZrKFa_2Kvdk7yeExTGz1CBrJVKYd-6PCIJ1fKfrwZHWHWMkyHuBi7kSWwxCqNMKYfdhSIPamnBVvBu1AmoWP05i7nYpTLNYVF_mLlLqGlXwMMwBoLoQnb0nlI7q','','2023-03-07 03:54:07','2023-03-07 03:54:07');

/*!40000 ALTER TABLE `UserLogin` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table UserProfile
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserProfile`;

CREATE TABLE `UserProfile` (
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `profileId` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `displayName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dateOfBirth` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phoneNumber` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preferredLanguage` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preferredCurrency` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `info` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `location` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `stripeCusId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` int DEFAULT NULL,
  `verificationCode` int DEFAULT NULL,
  `countryCode` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `countryName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `codeUpdatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `profileId` (`profileId`),
  UNIQUE KEY `UserProfile_profileId_unique` (`profileId`),
  CONSTRAINT `UserProfile_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `UserProfile` WRITE;
/*!40000 ALTER TABLE `UserProfile` DISABLE KEYS */;

INSERT INTO `UserProfile` (`userId`, `profileId`, `firstName`, `lastName`, `displayName`, `dateOfBirth`, `picture`, `gender`, `phoneNumber`, `preferredLanguage`, `preferredCurrency`, `info`, `location`, `createdAt`, `updatedAt`, `stripeCusId`, `country`, `verificationCode`, `countryCode`, `countryName`, `codeUpdatedAt`)
VALUES
	('01007a70-a22d-11ed-a823-4702e3a8b165',9,'Kayalvizhi','M','Kayalvizhi M',NULL,'mpy.png',NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-01 12:36:09','2023-02-01 12:36:09',NULL,NULL,NULL,NULL,NULL,NULL),
	('03bce6f0-b276-11ed-a6ae-c92d98724b1b',25,'Gokul','Ram','Gokul Ram',NULL,'lhpo.png',NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-22 05:59:05','2023-02-22 05:59:05',NULL,NULL,NULL,NULL,NULL,NULL),
	('11b12e90-a7bf-11ed-8ca4-9d4fa0ff605d',23,'Sanjar','Lodestone1140','Sanjar Lodestone1140',NULL,'5ed.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-08 14:44:19','2023-02-08 14:44:19',NULL,NULL,NULL,NULL,NULL,NULL),
	('13418940-b82b-11ed-aaf2-8761493ee12d',28,'Naren','Naren','Naren Naren',NULL,'9c54fdb83a748c85810d8a154c4a1270.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,'2023-03-01 12:17:46','2023-03-01 12:25:26',NULL,NULL,NULL,NULL,NULL,NULL),
	('17e40180-a22d-11ed-a823-4702e3a8b165',10,'RadicalStart','RadicalStart','RadicalStart RadicalStart',NULL,'7559cae2dd38334256716fadfcfbac62.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-01 12:36:47','2023-02-23 07:29:39',NULL,NULL,NULL,NULL,NULL,NULL),
	('230e5de0-c801-11ed-9dcb-3139783422b7',37,'Jamol','Tokhtaev','Jamol Tokhtaev',NULL,'b4o.png',NULL,NULL,NULL,NULL,NULL,NULL,'2023-03-21 15:57:52','2023-03-21 15:57:52',NULL,NULL,NULL,NULL,NULL,NULL),
	('291b5590-b838-11ed-aca0-35390767afb3',30,'Naren','Naren','Naren Naren','',NULL,'',NULL,NULL,NULL,NULL,NULL,'2023-03-01 13:51:26','2023-03-01 13:51:26',NULL,NULL,NULL,NULL,NULL,NULL),
	('32ebf3f0-a559-11ed-8a79-4988ccdcbdfb',20,'jamol','tukhtaev','Jamol Tukhtaev','2-1996-5','31c26b825280707a0cd481a4706dbccc.png',NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-05 13:30:04','2023-02-05 13:34:14',NULL,NULL,NULL,NULL,NULL,NULL),
	('338018e0-a00f-11ed-b242-e9a142758e94',5,'Zulhayo','Ismoilova','Zulhayo Ismoilova','1-2000-1','80d2df952c0a717e2e94f2d179d641df.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,'2023-01-29 19:57:46','2023-01-29 20:03:55',NULL,NULL,NULL,NULL,NULL,NULL),
	('38d53cb0-a557-11ed-8a79-4988ccdcbdfb',18,'Muhammadyor','Ismoilov','Muhammadyor Ismoilov','10-1996-14',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-05 13:15:55','2023-02-05 13:15:55',NULL,NULL,NULL,NULL,NULL,NULL),
	('39e3a630-9e56-11ed-b242-e9a142758e94',3,'Mohamed','Aslam','Mohamed Aslam','6-1998-16','fe6714a95a6b4180a8c165424e53660d.png',NULL,'6382224072',NULL,NULL,NULL,NULL,'2023-01-27 15:21:09','2023-01-30 15:53:50',NULL,NULL,6130,'+91','IN','2023-01-30 15:49:00'),
	('50ec7590-a6c7-11ed-be86-c7e4a6186686',21,'Muhammadyor','Ismoilov','Muhammadyor Ismoilov','10-1996-14','72fc105607043d3c0e49bc2b09451131.png','Male','998191113',NULL,NULL,'It is just me and you can know me only after met','Tashkent City','2023-02-07 09:10:50','2023-03-21 16:24:51',NULL,NULL,NULL,NULL,NULL,NULL),
	('530a1b40-b345-11ed-a6ae-c92d98724b1b',26,'Tim','Rick','Tim Rick','02-1996-23',NULL,'Other','9876543210',NULL,'USD','This is gonna tell something about me','united states','2023-02-23 06:43:04','2023-02-23 06:52:03',NULL,NULL,NULL,'+1',NULL,NULL),
	('5d8ed220-a08c-11ed-9bcf-3fa7f45cef13',6,'RadicalStart','Installation','RadicalStart Installation',NULL,'v06.png',NULL,NULL,NULL,NULL,NULL,NULL,'2023-01-30 10:53:44','2023-01-30 10:53:44',NULL,NULL,NULL,NULL,NULL,NULL),
	('6c848cb0-a2e5-11ed-a323-3df87f327c3c',12,'Radicals','Tests','Radicals Tests','2-2005-2','dke.png','Male','123456789',NULL,NULL,'Something about me','United States','2023-02-02 10:36:17','2023-02-02 10:37:03',NULL,NULL,7349,'+1',NULL,'2023-02-02 10:36:54'),
	('70f348d0-b82b-11ed-aaf2-8761493ee12d',29,'Martin','Qwell','Martin Qwell','3-2005-1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-03-01 12:20:23','2023-03-01 12:20:23',NULL,NULL,NULL,NULL,NULL,NULL),
	('75a3c020-bc1e-11ed-aca0-35390767afb3',34,'Naren','Naren','Naren Naren',NULL,'8f4a.png',NULL,NULL,NULL,NULL,NULL,NULL,'2023-03-06 12:57:32','2023-03-06 12:57:32',NULL,NULL,NULL,NULL,NULL,NULL),
	('814d4e80-b838-11ed-aca0-35390767afb3',31,'Naren','Naren','Naren Naren','',NULL,'',NULL,NULL,NULL,NULL,NULL,'2023-03-01 13:53:54','2023-03-01 13:53:54',NULL,NULL,NULL,NULL,NULL,NULL),
	('836ff100-a3ab-11ed-a323-3df87f327c3c',13,'kayal','m','Kayal M','2-2004-3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-03 10:14:15','2023-02-03 10:14:15',NULL,NULL,NULL,NULL,NULL,NULL),
	('86ea41a0-b85a-11ed-aca0-35390767afb3',32,'Nuage','Laboratoire','Nuage Laboratoire',NULL,'5xy8.png',NULL,NULL,NULL,NULL,NULL,NULL,'2023-03-01 17:57:26','2023-03-01 17:57:26',NULL,NULL,NULL,NULL,NULL,NULL),
	('90883c50-a6f1-11ed-8aa4-b7ae91017668',22,'Tim','John','Tim John','2-1995-7','8aba2ded8c78cb1fef5ec92f4c9d3ae4.jpeg',NULL,'9876543210',NULL,NULL,NULL,NULL,'2023-02-07 14:13:16','2023-02-07 14:18:19',NULL,NULL,NULL,'+1',NULL,NULL),
	('92069600-9f3d-11ed-b242-e9a142758e94',4,'Muhammadyor','Ismoilov','Muhammadyor Ismoilov','1-1996-1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-01-28 18:57:11','2023-01-28 18:57:11',NULL,NULL,NULL,NULL,NULL,NULL),
	('977bc550-5069-11e9-a14e-635e0fd3bfa6',2,'Radical','QA','Radical QA','1-2000-1','c2f784c0a6cc263c42006b155cf3b431.jpeg','Female','9676003963','en','EUR','I always wanted to be a great writer, like Victor Hugo who wrote \"Les Miserable\", or like Roman Roland who wrote \"John Christopher\". They have influenced millions of people through their books. I also wanted to be a great psychologist, like William James or Sigmund Freud, who could read people’s mind. Of course, I am nowhere close to these people, yet. I am just someone who does some teaching, some research, and some writing. But my dream is still alive.','Lives in The City, United Kingdom','2019-03-27 08:23:25','2023-02-07 04:39:29',NULL,NULL,1920,'+91',NULL,'2023-02-07 04:39:01'),
	('9dcc9940-a3ab-11ed-a323-3df87f327c3c',14,'Kayalvizhi','M','Kayalvizhi M',NULL,'42pm.png',NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-03 10:15:00','2023-02-03 10:15:00',NULL,NULL,NULL,NULL,NULL,NULL),
	('ae6b40b0-a3c6-11ed-8a79-4988ccdcbdfb',15,'Sivasankari','M','Sivasankari M',NULL,'7hrk.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-03 13:28:44','2023-02-03 13:28:44',NULL,NULL,NULL,NULL,NULL,NULL),
	('b5d82eb0-bc9b-11ed-8061-d37d0fa1b7b1',36,'Muhammadyor','Ismoilov','Muhammadyor Ismoilov',NULL,'9uhc.png',NULL,NULL,NULL,NULL,NULL,NULL,'2023-03-07 03:54:07','2023-03-07 03:54:07',NULL,NULL,NULL,NULL,NULL,NULL),
	('b8c2ce20-a3c6-11ed-8a79-4988ccdcbdfb',16,'Naren','Naren','Naren Naren',NULL,'v9dd.png',NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-03 13:29:01','2023-02-03 13:29:01',NULL,NULL,NULL,NULL,NULL,NULL),
	('cbed7110-bc1e-11ed-aca0-35390767afb3',35,'Joy','Joy ','Joy Joy ','3-2003-6',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-03-06 12:59:57','2023-03-06 12:59:57',NULL,NULL,NULL,NULL,NULL,NULL),
	('d1d6d5a0-5064-11e9-a14e-635e0fd3bfa6',1,'Demo','User','Demo User','10-1994-5','05f2f1e9581fa84f03604df96d27b9d1.jpeg','Male',NULL,'en','USD','I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night. I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late; I like to be alone, I like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I like the beautiful west lake in Hangzhou, I like the flat cornfield in Campaign. I like delicious food and comfortable shoes; I like good books and romantic movies. I like the land and the nature, I like people. And, I like to laugh.','Architect based in Los Angeles,  CA.','2019-03-27 07:49:16','2023-03-06 13:09:39',NULL,NULL,NULL,NULL,NULL,NULL),
	('d21fae20-a09b-11ed-9bcf-3fa7f45cef13',7,'Selva','Sundarapandian','Selva Sundarapandian','1-1932-2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-01-30 12:44:22','2023-01-30 12:44:22',NULL,NULL,NULL,NULL,NULL,NULL),
	('d6c41460-a3c6-11ed-8a79-4988ccdcbdfb',17,'Qwell','Martin','Qwell Martin','2-2003-3','35a0863a8e45a9141c21ed9bf2f8d6fb.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-03 13:29:52','2023-02-03 14:28:39',NULL,NULL,NULL,NULL,NULL,NULL),
	('dee86a30-b927-11ed-aca0-35390767afb3',33,'Apple','John','Apple John','',NULL,'',NULL,NULL,NULL,NULL,NULL,'2023-03-02 18:27:21','2023-03-02 18:27:21',NULL,NULL,NULL,NULL,NULL,NULL),
	('e18f7df0-b34b-11ed-a6ae-c92d98724b1b',27,'RadicalStart','Developer','RadicalStart Developer','','2a338842ae4231d0b7e07cc21517651e.jpeg','',NULL,NULL,NULL,NULL,NULL,'2023-02-23 07:30:00','2023-02-23 07:30:51',NULL,NULL,NULL,NULL,NULL,NULL),
	('e339d4e0-a0bb-11ed-bb9e-8521f0de3c3e',8,'Xasan','Buribekov','Xasan Buribekov','1-1996-20','b526e7518d250ae1a64e129573b9141f.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,'2023-01-30 16:33:55','2023-01-30 16:55:50',NULL,NULL,NULL,NULL,NULL,NULL),
	('e828a8f0-a557-11ed-8a79-4988ccdcbdfb',19,'Muhammadyor','Ismoilov','Muhammadyor Ismoilov',NULL,'wobd.png',NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-05 13:20:49','2023-02-05 13:20:49',NULL,NULL,NULL,NULL,NULL,NULL),
	('ec50cfd0-a2db-11ed-8a0b-ff0ac055de5c',11,'Xamzat','Xamrayev','Xamzat Xamrayev',NULL,'hwfs.jpeg',NULL,'998857888',NULL,NULL,NULL,NULL,'2023-02-02 09:28:16','2023-02-02 09:28:57',NULL,NULL,3330,'+998','UZ','2023-02-02 09:28:57'),
	('f300ec80-ab54-11ed-a6ae-c92d98724b1b',24,'tanjiro','kamado','Tanjiro Kamado','1-2001-1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-13 04:14:46','2023-02-13 04:14:46',NULL,NULL,NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `UserProfile` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table UserSafetyAmenities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserSafetyAmenities`;

CREATE TABLE `UserSafetyAmenities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `safetyAmenitiesId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  CONSTRAINT `UserSafetyAmenities_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `UserSafetyAmenities` WRITE;
/*!40000 ALTER TABLE `UserSafetyAmenities` DISABLE KEYS */;

INSERT INTO `UserSafetyAmenities` (`id`, `listId`, `safetyAmenitiesId`, `createdAt`, `updatedAt`)
VALUES
	(70,15,32,'2023-02-08 14:52:48','2023-02-08 14:52:48');

/*!40000 ALTER TABLE `UserSafetyAmenities` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table UserSpaces
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserSpaces`;

CREATE TABLE `UserSpaces` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listId` int NOT NULL,
  `spacesId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `listId` (`listId`),
  KEY `spacesId` (`spacesId`),
  CONSTRAINT `UserSpaces_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `UserSpaces_ibfk_2` FOREIGN KEY (`spacesId`) REFERENCES `ListSettings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `UserSpaces` WRITE;
/*!40000 ALTER TABLE `UserSpaces` DISABLE KEYS */;

INSERT INTO `UserSpaces` (`id`, `listId`, `spacesId`, `createdAt`, `updatedAt`)
VALUES
	(70,15,36,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(71,15,33,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(72,15,34,'2023-02-08 14:52:48','2023-02-08 14:52:48'),
	(93,20,36,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(94,20,34,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(95,20,35,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(96,20,33,'2023-03-19 12:23:19','2023-03-19 12:23:19'),
	(97,21,33,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(98,21,36,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(99,21,35,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(100,21,34,'2023-03-20 15:46:59','2023-03-20 15:46:59'),
	(105,14,33,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(106,14,34,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(107,14,35,'2023-03-21 16:25:32','2023-03-21 16:25:32'),
	(108,14,36,'2023-03-21 16:25:32','2023-03-21 16:25:32');

/*!40000 ALTER TABLE `UserSpaces` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table UserVerifiedInfo
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserVerifiedInfo`;

CREATE TABLE `UserVerifiedInfo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isEmailConfirmed` tinyint(1) DEFAULT '0',
  `isFacebookConnected` tinyint(1) DEFAULT '0',
  `isGoogleConnected` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isIdVerification` tinyint(1) DEFAULT '0',
  `isPhoneVerified` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `UserVerifiedInfo_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `UserVerifiedInfo` WRITE;
/*!40000 ALTER TABLE `UserVerifiedInfo` DISABLE KEYS */;

INSERT INTO `UserVerifiedInfo` (`id`, `userId`, `isEmailConfirmed`, `isFacebookConnected`, `isGoogleConnected`, `createdAt`, `updatedAt`, `isIdVerification`, `isPhoneVerified`)
VALUES
	(1,'d1d6d5a0-5064-11e9-a14e-635e0fd3bfa6',1,0,0,'2019-03-27 07:49:16','2019-03-27 07:49:16',0,0),
	(2,'977bc550-5069-11e9-a14e-635e0fd3bfa6',1,0,0,'2019-03-27 08:23:25','2023-02-07 04:39:29',0,1),
	(3,'39e3a630-9e56-11ed-b242-e9a142758e94',1,0,1,'2023-01-27 15:21:09','2023-02-07 11:48:46',0,0),
	(4,'92069600-9f3d-11ed-b242-e9a142758e94',0,0,0,'2023-01-28 18:57:11','2023-01-28 21:54:52',1,0),
	(5,'338018e0-a00f-11ed-b242-e9a142758e94',1,0,0,'2023-01-29 19:57:46','2023-03-21 12:10:57',1,0),
	(6,'5d8ed220-a08c-11ed-9bcf-3fa7f45cef13',0,0,1,'2023-01-30 10:53:44','2023-01-30 10:57:44',0,0),
	(7,'d21fae20-a09b-11ed-9bcf-3fa7f45cef13',1,0,0,'2023-01-30 12:44:22','2023-01-30 14:31:21',0,0),
	(8,'e339d4e0-a0bb-11ed-bb9e-8521f0de3c3e',1,0,0,'2023-01-30 16:33:55','2023-01-30 16:54:29',0,0),
	(9,'01007a70-a22d-11ed-a823-4702e3a8b165',0,0,1,'2023-02-01 12:36:09','2023-02-03 10:09:03',0,0),
	(10,'17e40180-a22d-11ed-a823-4702e3a8b165',0,1,0,'2023-02-01 12:36:47','2023-02-23 07:28:58',0,0),
	(11,'ec50cfd0-a2db-11ed-8a0b-ff0ac055de5c',1,0,0,'2023-02-02 09:28:16','2023-03-20 13:06:46',0,0),
	(12,'6c848cb0-a2e5-11ed-a323-3df87f327c3c',0,0,1,'2023-02-02 10:36:17','2023-02-22 08:16:49',0,0),
	(13,'836ff100-a3ab-11ed-a323-3df87f327c3c',0,0,0,'2023-02-03 10:14:15','2023-02-03 10:14:15',0,0),
	(14,'9dcc9940-a3ab-11ed-a323-3df87f327c3c',0,0,1,'2023-02-03 10:15:00','2023-03-01 12:28:48',0,0),
	(15,'ae6b40b0-a3c6-11ed-8a79-4988ccdcbdfb',0,1,0,'2023-02-03 13:28:44','2023-03-01 12:17:32',0,0),
	(16,'b8c2ce20-a3c6-11ed-8a79-4988ccdcbdfb',0,0,1,'2023-02-03 13:29:01','2023-02-03 13:29:01',0,0),
	(17,'d6c41460-a3c6-11ed-8a79-4988ccdcbdfb',0,0,0,'2023-02-03 13:29:52','2023-02-03 13:29:52',0,0),
	(18,'38d53cb0-a557-11ed-8a79-4988ccdcbdfb',0,0,0,'2023-02-05 13:15:55','2023-02-05 13:15:55',0,0),
	(19,'e828a8f0-a557-11ed-8a79-4988ccdcbdfb',0,0,1,'2023-02-05 13:20:49','2023-02-05 13:20:49',0,0),
	(20,'32ebf3f0-a559-11ed-8a79-4988ccdcbdfb',1,0,0,'2023-02-05 13:30:04','2023-02-05 13:31:18',0,0),
	(21,'50ec7590-a6c7-11ed-be86-c7e4a6186686',1,0,1,'2023-02-07 09:10:50','2023-03-20 08:59:34',1,0),
	(22,'90883c50-a6f1-11ed-8aa4-b7ae91017668',0,1,1,'2023-02-07 14:13:16','2023-02-07 14:17:26',0,1),
	(23,'11b12e90-a7bf-11ed-8ca4-9d4fa0ff605d',0,0,1,'2023-02-08 14:44:19','2023-03-20 15:39:57',0,0),
	(24,'f300ec80-ab54-11ed-a6ae-c92d98724b1b',0,0,0,'2023-02-13 04:14:46','2023-02-13 04:14:46',0,0),
	(25,'03bce6f0-b276-11ed-a6ae-c92d98724b1b',0,0,1,'2023-02-22 05:59:05','2023-02-22 06:31:25',0,0),
	(26,'530a1b40-b345-11ed-a6ae-c92d98724b1b',0,0,1,'2023-02-23 06:43:04','2023-02-23 06:49:45',0,1),
	(27,'e18f7df0-b34b-11ed-a6ae-c92d98724b1b',0,1,0,'2023-02-23 07:30:00','2023-02-23 07:30:00',0,0),
	(28,'13418940-b82b-11ed-aaf2-8761493ee12d',0,0,1,'2023-03-01 12:17:46','2023-03-01 12:24:58',0,0),
	(29,'70f348d0-b82b-11ed-aaf2-8761493ee12d',0,0,0,'2023-03-01 12:20:23','2023-03-01 12:20:23',0,0),
	(30,'291b5590-b838-11ed-aca0-35390767afb3',0,0,1,'2023-03-01 13:51:26','2023-03-01 13:53:09',0,0),
	(31,'814d4e80-b838-11ed-aca0-35390767afb3',0,0,1,'2023-03-01 13:53:54','2023-03-01 13:53:54',0,0),
	(32,'86ea41a0-b85a-11ed-aca0-35390767afb3',0,0,1,'2023-03-01 17:57:26','2023-03-01 18:00:51',0,0),
	(33,'dee86a30-b927-11ed-aca0-35390767afb3',0,1,0,'2023-03-02 18:27:21','2023-03-02 18:27:21',0,0),
	(34,'75a3c020-bc1e-11ed-aca0-35390767afb3',0,0,1,'2023-03-06 12:57:32','2023-03-06 12:58:55',0,0),
	(35,'cbed7110-bc1e-11ed-aca0-35390767afb3',0,0,0,'2023-03-06 12:59:57','2023-03-06 12:59:57',0,0),
	(36,'b5d82eb0-bc9b-11ed-8061-d37d0fa1b7b1',1,0,1,'2023-03-07 03:54:07','2023-03-07 07:45:01',0,0),
	(37,'230e5de0-c801-11ed-9dcb-3139783422b7',1,0,1,'2023-03-21 15:57:52','2023-03-21 16:30:49',0,0);

/*!40000 ALTER TABLE `UserVerifiedInfo` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table WhyHost
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WhyHost`;

CREATE TABLE `WhyHost` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imageName` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `buttonLabel` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `WhyHost` WRITE;
/*!40000 ALTER TABLE `WhyHost` DISABLE KEYS */;

INSERT INTO `WhyHost` (`id`, `imageName`, `title`, `buttonLabel`, `createdAt`, `updatedAt`)
VALUES
	(1,'dbdad989566a6ce0de251caf3b927dfe.jpeg','It\'s simple to become a Kvarenda host','Become a host','2022-11-03 10:39:03','2022-11-03 10:39:03');

/*!40000 ALTER TABLE `WhyHost` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table WhyHostInfoBlock
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WhyHostInfoBlock`;

CREATE TABLE `WhyHostInfoBlock` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `WhyHostInfoBlock` WRITE;
/*!40000 ALTER TABLE `WhyHostInfoBlock` DISABLE KEYS */;

INSERT INTO `WhyHostInfoBlock` (`id`, `title`, `name`, `value`, `createdAt`, `updatedAt`)
VALUES
	(1,'Host Banner Title 1','hostBannerTitle1','It\'s simple to become a YourSite host','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(2,'Host Banner Image 1','hostBannerImage1','b057564695396f78ef5b9d5e717b681d.png','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(3,'Why Block Title 1','whyBlockTitle1','What is Lorem Ipsum?','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(4,'Why Block Title 2','whyBlockTitle2','This tool for our day to day work and our clients?','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(5,'Why Block Content 1','whyBlockContent1','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  \n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(6,'Why Block Content 2','whyBlockContent2','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(7,'Hosting Block Title Heading','hostingBlockTitleHeading','There are 3 Lorem Ipsum generators','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(8,'Hosting Block Title 1','hostingBlockTitle1','Lorem Ipsum','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(9,'Hosting Block Title 2','hostingBlockTitle2','Lorem Ipsum','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(10,'Hosting Block Title 3','hostingBlockTitle3','Lorem Ipsum','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(11,'Hosting Block Content 1','hostingBlockContent1','Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(12,'Hosting Block Content 2','hostingBlockContent2','Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(13,'Hosting Block Content 3','hostingBlockContent3','Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(14,'Cover Section Title 1','coverSectionTitle1','Use our generator to get your own','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(15,'Cover Section Image 1','coverSectionImage1','52b45df1bfb0c06461aba5e4759f88a8.png','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(16,'Cover Section Content 1','coverSectionContent1','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(17,'Cover Section Content 2','coverSectionContent2','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(18,'Cover Section Feature 1','coverSectionFeature1','Excepteur sint occaecat cupidatat non proident','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(19,'Cover Section Feature 2','coverSectionFeature2','quis nostrud exercitation ullamco laboris nisi','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(20,'Cover Section Feature 3','coverSectionFeature3','Sed ut perspiciatis unde omnis iste natus error sit','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(21,'Cover Section Feature 4','coverSectionFeature4','Nemo enim ipsam voluptatem quia voluptas sit aspernatur','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(22,'Cover Section Feature 5','coverSectionFeature5','Ut enim ad minima veniam, quis nostrum exercitationem','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(23,'Cover Section Feature 6','coverSectionFeature6','Excepteur sint occaecat cupidatat non proident','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(24,'Payment Title Heading','paymentTitleHeading','It to make a type specimen book','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(25,'Payment Title 1','paymentTitle1','Sed ut perspiciatis','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(26,'Payment Title 2','paymentTitle2','Nemo enim ipsam','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(27,'Payment Title 3','paymentTitle3','Neque porro','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(28,'Payment Content 1','paymentContent1','Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur\n\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(29,'Payment Content 2','paymentContent2','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(30,'Payment Content 3','paymentContent3','Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(31,'Quote Section Title 1','quoteSectionTitle1','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(32,'Quote Section Title 2','quoteSectionTitle2','It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(33,'Quote Section Content 1','quoteSectionContent1','software like Aldus PageMaker including versions of Lorem Ipsum.\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(34,'Quote Section Content 2','quoteSectionContent2','software like Aldus PageMaker including versions of Lorem Ipsum.\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(35,'Quote Section Image 1','quoteSectionImage1','a15d6d42312a50dacc893d133b27f370.png','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(36,'Quote Section Image 2','quoteSectionImage2','2637fb0602c30d92f0b78f82b79bc7d9.png','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(37,'Quote Section Button 1','quoteSectionButton1','Lorem Ipsum Text','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(38,'Quote Section Button 2','quoteSectionButton2','Lorem Ipsum Text','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(39,'FAQ Title 1','faqTitle1','Lorem ipsum dolor sit amet, consecteturt','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(40,'FAQ Title 2','faqTitle2','Lorem ipsum dolor sit amet, consecteturt','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(41,'FAQ Title 3','faqTitle3','Lorem ipsum dolor sit amet, consecteturt','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(42,'FAQ Title 4','faqTitle4','Lorem ipsum dolor sit amet, consecteturt','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(43,'FAQ Title 5','faqTitle5','','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(44,'FAQ Title 6','faqTitle6','','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(45,'FAQ Title 7','faqTitle7','','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(46,'FAQ Title 8','faqTitle8','','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(47,'FAQ Content 1','faqContent1','Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.\n\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(48,'FAQ Content 2','faqContent2','Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.\n\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(49,'FAQ Content 3','faqContent3','Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.\n\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(50,'FAQ Content 4','faqContent4','Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.\n\n','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(51,'FAQ Content 5','faqContent5','','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(52,'FAQ Content 6','faqContent6','','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(53,'FAQ Content 7','faqContent7','','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(54,'FAQ Content 8','faqContent8','','2020-04-13 11:33:10','2022-11-03 11:20:47'),
	(55,'Hosting Block Image 1','hostingBlockImage1','74ec7bc248b5e4b76242b570f0c9cdbe.png','2022-11-03 09:57:34','2022-11-03 11:20:47'),
	(56,'Hosting Block Image 2','hostingBlockImage2','3fe605fd854ce13db4749e2976143c00.png','2022-11-03 09:57:34','2022-11-03 11:20:47'),
	(57,'Hosting Block Image 3','hostingBlockImage3','07d46d037a6fd7e872327efaeaca2feb.png','2022-11-03 09:57:34','2022-11-03 11:20:47'),
	(58,'Hosting Banner Image','whyhostBannerImage','ca752b3e20951768f441f6c3742b21c6.png','2022-11-03 09:57:34','2022-11-03 11:20:47'),
	(59,'Hosting Banner Heading','whyhostBannerHeading','Join us! Try hosting on Your-Site','2022-11-03 09:57:34','2022-11-03 11:20:47');

/*!40000 ALTER TABLE `WhyHostInfoBlock` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table WishList
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WishList`;

CREATE TABLE `WishList` (
  `id` int NOT NULL AUTO_INCREMENT,
  `wishListGroupId` int NOT NULL,
  `listId` int NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isListActive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wishListGroupId` (`wishListGroupId`),
  KEY `listId` (`listId`),
  CONSTRAINT `WishList_ibfk_1` FOREIGN KEY (`wishListGroupId`) REFERENCES `WishListGroup` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `WishList_ibfk_2` FOREIGN KEY (`listId`) REFERENCES `Listing` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table WishListGroup
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WishListGroup`;

CREATE TABLE `WishListGroup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isPublic` int DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `WishListGroup` WRITE;
/*!40000 ALTER TABLE `WishListGroup` DISABLE KEYS */;

INSERT INTO `WishListGroup` (`id`, `name`, `userId`, `isPublic`, `createdAt`, `updatedAt`)
VALUES
	(1,'New','977bc550-5069-11e9-a14e-635e0fd3bfa6',0,'2023-02-02 11:25:06','2023-02-02 11:25:06'),
	(2,'Liked','530a1b40-b345-11ed-a6ae-c92d98724b1b',NULL,'2023-02-23 06:48:04','2023-02-23 06:48:04');

/*!40000 ALTER TABLE `WishListGroup` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
