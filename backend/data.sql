CREATE DATABASE IF NOT EXISTS `bddlords` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `bddlords`;

-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: bddlords
-- ------------------------------------------------------
-- Server version	8.0.18
 /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!50503 SET NAMES utf8 */;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;

/*!40103 SET TIME_ZONE='+00:00' */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `equipements`
--

DROP TABLE IF EXISTS `equipements`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;


CREATE TABLE `equipements` (`idequipements` int(11) NOT NULL AUTO_INCREMENT,
                                                             `name` varchar(100) DEFAULT NULL,
                                                                                         `type` varchar(100) DEFAULT NULL,
                                                                                                                     `pourcentage1` float DEFAULT NULL,
                                                                                                                                                  `boost1` varchar(45) DEFAULT NULL,
                                                                                                                                                                               `pourcentage2` float DEFAULT NULL,
                                                                                                                                                                                                            `boost2` varchar(45) DEFAULT NULL,
                                                                                                                                                                                                                                         `pourcentage3` float DEFAULT NULL,
                                                                                                                                                                                                                                                                      `boost3` varchar(45) DEFAULT NULL,
                                                                                                                                                                                                                                                                                                   `pourcentage4` float DEFAULT NULL,
                                                                                                                                                                                                                                                                                                                                `boost4` varchar(45) DEFAULT NULL,
                                                                                                                                                                                                                                                                                                                                                             `pourcentage5` float DEFAULT NULL,
                                                                                                                                                                                                                                                                                                                                                                                          `boost5` varchar(45) DEFAULT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                       `Images` varchar(45) DEFAULT NULL,
                                                                                                                                                                                                                                                                                                                                                                                                                                                    PRIMARY KEY (`idequipements`)) ENGINE=InnoDB AUTO_INCREMENT=280 DEFAULT
CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipements`
--
 LOCK TABLES `equipements` WRITE;

/*!40000 ALTER TABLE `equipements` DISABLE KEYS */;


INSERT INTO `equipements`
VALUES (1,'Amber Ring','Accessories',12.5,'construction speed',1,'Wall DEF',NULL,NULL,NULL,NULL,NULL,NULL,'/1.png'),
       (2,'Blight Ring','Accessories',15,'Army DEF',15,'Army Max HP',14,'Ran ATK',25,'Wall DEF',NULL,NULL,'/2.png'),
       (3,'Champion Valor ','Accessories',10,'Army ATK',25,'Army Max HP',15,'Cav ATK',15,'Ran ATK',NULL,NULL,'/3.png'),
       (4,'Frostwings Breath','Accessories',8,'Cav ATK',50,'Gold production increase',8,'Inf ATK',NULL,NULL,NULL,NULL,'/4.png'),
       (5,'Lost Islands Relic','Accessories',2.5,'Army Max HP',6,'Inf ATK',6,'Ran ATK',NULL,NULL,NULL,NULL,'/5.png'),
       (6,'Neptunes Necklace','Accessories',15,'Construction Speed',4,'Inf ATK',1.5,'Wall DEF',NULL,NULL,NULL,NULL,'/6.png'),
       (7,'Sentinels Circlet','Accessories',4,'Cav ATK',25,'Construction Speed',9,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/7.png'),
       (8,'Ambrosial Cup','Accessories',25,'Inf ATK',15,'Inf max HP',25,'Ran ATK',15,'Ran max HP',NULL,NULL,'/8.png'),
       (9,'Burning Scroll','Accessories',9,'Army ATK',9,'Army Max HP',35,'Timber Production Increase',NULL,NULL,NULL,NULL,'/9.png'),
       (10,'Crystal Tear','Accessories',4,'Cav ATK',22.5,'Gold Production Increase',6.5,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/10.png'),
       (11,'Hortensias Diamond','Accessories',34.5,'Food Production Increase',0.5,'Wall DEF',NULL,NULL,NULL,NULL,NULL,NULL,'/11.png'),
       (12,'Lost Pocketwatch','Accessories',18,'Construction Speed',11.5,'Research Speed',5.5,'Trap ATK',NULL,NULL,NULL,NULL,'/12.png'),
       (13,'Pirates Eye Patch','Accessories',8,'Construction Speed',5,'Research Speed',NULL,'',NULL,NULL,NULL,NULL,'/13.png'),
       (14,'Star Dust','Accessories',2,'Army Max HP',27,'Food Production Increase',4,'Ran ATK',NULL,NULL,NULL,NULL,'/14.png'),
       (15,'Ancient Hourglass','Accessories',22.5,'Gold Production Increase',9.5,'Research Speed',NULL,NULL,NULL,NULL,NULL,NULL,'/15.png'),
       (16,'Champion Blessing','Accessories',10,'Army ATK',25,'Army Max HP',15,'Inf ATK',15,'Ran ATK',NULL,NULL,'/16.png'),
       (17,'Dragon Iris','Accessories',10,'Army Max HP',10,'Cav ATK',10,'Ran ATK',NULL,NULL,NULL,NULL,'/17.png'),
       (18,'Hunting Horn','Accessories',500,'Max Energy',5,'Monster Hunt DMG',20,'Monster Hunt Travel Speed',NULL,NULL,NULL,NULL,'/18.png'),
       (19,'Lunar Flute','Accessories',2.5,'Army Max HP',38,'Food Production Increase',26,'Research Speed',NULL,NULL,NULL,NULL,'/19.png'),
       (20,'Prehistoric Horn','Accessories',1,'Army Max HP',13,'Gold Production Increase',NULL,NULL,NULL,NULL,NULL,NULL,'/20.png'),
       (21,'Terror Vial','Accessories',8,'Army DEF',16,'Inf ATK',5,'Inf Max HP',35,'Ore Production Increase',NULL,NULL,'/21.png'),
       (22,'Aqua Anemone','Accessories',8,'Cav ATK',8,'Inf ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/22.png'),
       (23,'Champion Faith','Accessories',10,'Army ATK',25,'Army Max HP',15,'Cav ATK',15,'Inf ATK',NULL,NULL,'/23.png'),
       (24,'Fear Drum','Accessories',16,'Cav ATK',5.5,'Cav Max HP',35,'Gold Production Increase',10,'Siege Engine ATK',NULL,NULL,'/24.png'),
       (25,'Ivory Choker','Accessories',15,'Cav ATK',15,'Trap ATK',28,'Trap DEF',25,'Travel Speed',NULL,NULL,'/25.png'),
       (26,'Mystic Box','Accessories',25,'Familiar Training Lv Exp',6,'Inf ATK',25,'Merging Speed (Pacts)',NULL,NULL,NULL,NULL,'/26.png'),
       (27,'Secret Totem','Accessories',7,'Army DEF',7,'Inf ATK',15,'Inf Max HP',15,'Siege Engine ATK',NULL,NULL,'/27.png'),
       (28,'Wyrm Seal','Accessories',8,'Army Max HP',16,'Ran ATK',15,'Siege Engine ATK',35,'Stone Production Increase',NULL,NULL,'/28.png'),
       (29,'Armor of the Abyss','Body Armor',5,'Army ATK',5,'Cav Max HP',5,'Inf DEF',NULL,NULL,NULL,NULL,'/29.png'),
       (30,'Champion Cuirass','Body Armor',10,'Army ATK',35,'Army DEF',15,'Army Max HP',30,'Cav ATK',52,'Reduced Upkeep','/30.png'),
       (31,'Elder Garb','Body Armor',5.5,'Research Speed',5,'Siege Engine ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/31.png'),
       (32,'Guardian Chestplate','Body Armor',1,'Army Max HP',1.5,'Construction Speed',NULL,NULL,NULL,NULL,NULL,NULL,'/32.png'),
       (33,'Lightning Guard','Body Armor',20,'Construction Speed',20,'Gathering Speed',50,'Gold Production Increase',NULL,NULL,NULL,NULL,'/33.png'),
       (34,'Regal Platemail','Body Armor',14,'Army Capacity',5,'Army Max HP',7.5,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/34.png'),
       (35,'Winter Parka','Body Armor',15,'Army Max HP',25,'Cav DEF',12.5,'Inf ATK',NULL,NULL,NULL,NULL,'/35.png'),
       (36,'Cavalry Mail','Body Armor',31,'Food Production Increase',7,'Research Speed',7,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/36.png'),
       (37,'Champion Mail','Body Armor',10,'Army ATK',35,'Army DEF',15,'Army Max HP',30,'Inf ATK',52,'Reduced Upkeep','/37.png'),
       (38,'Firewall Plate','Body Armor',15,'Army Max HP',30,'Cav ATK',20,'Inf ATK',30,'Siege Engine ATK',NULL,NULL,'/38.png'),
       (39,'Hardened Carapace','Body Armor',10,'Army DEF',25,'Cav ATK',25,'Ran ATK',NULL,NULL,NULL,NULL,'/39.png'),
       (40,'Odysseus','Body Armor',6.2,'Army DEF',5.2,'Research Speed',7.5,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/40.png'),
       (41,'Spirit Mantle','Body Armor',30,'Familiar Training Lv EXP',10,'Merging Speed (Pacts)',NULL,NULL,NULL,NULL,NULL,NULL,'/41.png'),
       (42,'Wyvern Soul','Body Armor',2.6,'Army Max HP',3.8,'Siege Engine ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/42.png'),
       (43,'Centaur Saddle','Body Armor',12.5,'Army Capacity',5.7,'Army DEF',NULL,NULL,NULL,NULL,NULL,NULL,'/43.png'),
       (44,'Champion Plate','Body Armor',42.5,'Army DEF',25,'Army Max HP',40,'Ran ATK',52,'Reduced Upkeep',NULL,NULL,'/44.png'),
       (45,'Frostwing Armor','Body Armor',8,'Inf ATK',8,'Ran ATK',12.5,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/445png'),
       (46,'Hedonic Cuirass','Body Armor',25,'Inf ATK',30,'Inf Max HP',25,'Ran ATK',NULL,NULL,NULL,NULL,'/46.png'),
       (47,'Predator Pauldrons','Body Armor',15,'Army DEF',20,'Cav ATK',25,'Cav Max HP',10,'Travel Speed',NULL,NULL,'/47.png'),
       (48,'Summoner Robe','Body Armor',5,'Army DEF',27,'Food Production Increase',6,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/48.png'),
       (49,'Ceremonial Toga','Body Armor',5,'Army Max HP',3,'Siege Engine ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/49.png'),
       (50,'Deathly Mantle','Body Armor',15,'Army DEF',20,'Ran ATK',15,'Trap ATK',NULL,NULL,NULL,NULL,'/50.png'),
       (51,'Grimy Plate','Body Armor',8,'Inf ATK',9,'Inf Max HP',10,'Wall DEF',NULL,NULL,NULL,NULL,'/51.png'),
       (52,'Hunting Plate','Body Armor',1000,'Max Energy',20,'Monster Hunt DMG',10,'Monster Hunt Travel Speed',NULL,NULL,NULL,NULL,'/52.png'),
       (53,'Prowler Vest','Body Armor',11,'Army Capacity',5,'Army DEF',6,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/53.png'),
       (54,'Terror Shield','Body Armor',15,'Army Max HP',35,'Inf ATK',25,'Inf Max HP',8,'Research Speed',NULL,NULL,'/54.png'),
       (55,'Accursed Mask','Helmets',30,'Merging Speed (Pacts)',3,'Merging Speed (Skillstones)',NULL,NULL,NULL,NULL,NULL,NULL,'/55.png'),
       (56,'Berserker Tuskhelm','Helmets',10.5,'Army DEF',5,'Inf ATK',10,'Trap ATK',NULL,NULL,NULL,NULL,'/56.png'),
       (57,'Champion Helm','Helmets',10,'Army ATK',35,'Army Max HP',35,'Cav ATK',75,'Gold Production Increase',NULL,NULL,'/57.png'),
       (58,'Deathgazer','Helmets',16,'Army DEF',10,'Trap ATK',11.5,'Wall DEF',NULL,NULL,NULL,NULL,'/58.png'),
       (59,'Helmet of Conquest','Helmets',26.5,'Gold Production Increase',5,'Inf ATK',9,'Trap ATK',NULL,NULL,NULL,NULL,'/59.png'),
       (60,'Prosecutors Will','Helmets',3,'Inf ATK',6,'Trap ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/60.png'),
       (61,'Wyrmbone Coronet','Helmets',12.5,'Army Max HP',32.5,'Ran ATK',20,'Ran DEF',10,'Research Speed',NULL,NULL,'/61.png'),
       (62,'Ancient Hat','Helmets',15,'Army DEF',28,'Ran ATK',25,'Ran DEF',NULL,NULL,NULL,NULL,'/62.png'),
       (63,'Blood Stained Helm','Helmets',8,'Cav ATK',8,'Cav DEF',8,'Cav Max HP',NULL,NULL,NULL,NULL,'/63.png'),
       (64,'Champion Visor ','Helmets',10,'Army ATK',20,'Army Max HP',75,'Gold Production Increase',25,'Inf ATK',25,'Ran ATK','/64.png'),
       (65,'Devil Visage','Helmets',17,'Army Capacity',14.5,'Army DEF',10.5,'Wall DEF',NULL,NULL,NULL,NULL,'/65.png'),
       (66,'Hunting Helm','Helmets',5,'Energy Saver',3000,'Max Energy',10,'Monster Hunt DMG',NULL,NULL,NULL,NULL,'/66.png'),
       (67,'Shadow Helm','Helmets',10,'Inf ATK',30,'Trap ATK',30,'Trap DEF',15,'Wall DEF',NULL,NULL,'/67.png'),
       (68,'Barbarian Helmet','Helmets',4.5,'Army DEF',2.5,'Inf ATK',5.5,'Wall DEF',NULL,NULL,NULL,NULL,'/68.png'),
       (69,'Bumblehelm','Helmets',20,'Army Max HP',30,'Cav ATK',30,'Ran ATK',NULL,NULL,NULL,NULL,'/69.png'),
       (70,'Chieftain Headdress','Helmets',6,'Army Capacity',13,'Food Production Increase',NULL,NULL,NULL,NULL,NULL,NULL,'/70.png'),
       (71,'Frostwing Helm','Helmets',11.5,'Army Max HP',9,'Ran ATK',7.5,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/71.png'),
       (72,'Indulgent Visage','Helmets',10,'Inf ATK',10,'Ran ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/72.png'),
       (73,'Skull Kings Legacy','Helmets',1,'Inf ATK',2,'Trap ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/73.png'),
       (74,'Beast Helm','Helmets',10,'Army Max HP',15,'Cav ATK',35,'Inf ATK',30,'Travel Speed',NULL,NULL,'/74.png'),
       (75,'Champion Aramet','Helmets',10,'Army ATK',20,'Army Max HP',25,'Cav ATK',75,'Gold Production Increase',25,'Ran ATK','/75.png'),
       (76,'Coarse Helm','Helmets',15,'Forging Speed',25,'Timber Production Increase',5,'Training Speed',NULL,NULL,NULL,NULL,'/76.png'),
       (77,'Gladiator Helm','Helmets',14.5,'Army Capacity',9,'Wall DEF',NULL,NULL,NULL,NULL,NULL,NULL,'/77.png'),
       (78,'Noceros Mask','Helmets',25,'Army Capacity',10,'Construction Speed',15,'Gathering Speed',15,'Travel Speed',NULL,NULL,'/78.png'),
       (79,'Wanderers Hood','Helmets',12.5,'Army DEF',32,'Food Production Increase',7.5,'Trap ATK',NULL,NULL,NULL,NULL,'/79.png'),
       (80,'Amethyst Boots','Footwear',4.5,'Cav ATK',4,'Construction Speed',4,'Ran ATK',NULL,NULL,NULL,NULL,'/80.png'),
       (81,'Champion Greaves','Footwear',10,'Army ATK',22,'Army Max HP',40,'Cav ATK',50,'Travel Speed',NULL,NULL,'/81.png'),
       (82,'Craggy Greaves','Footwear',20,'Gathering Speed',25,'Ore Production Increase',10,'Training Speed',NULL,NULL,NULL,NULL,'/82.png'),
       (83,'Frostwing Boots','Footwear',6,'Cav ATK',5,'Siege Engine ATK',14.5,'Wall DEF',NULL,NULL,NULL,NULL,'/83.png'),
       (84,'Honeycomb Chaps','Footwear',12,'Cav ATK',12,'Ran ATK',5,'Ran DEF',NULL,NULL,NULL,NULL,'/84.png'),
       (85,'Nether Walkers','Footwear',15,'Army DEF',15,'Ran ATK',10,'Ran DEF',NULL,NULL,NULL,NULL,'/85.png'),
       (86,'Sylph Sandals','Footwear',2.5,'Cav ATK',4,'Ran ATK',5.5,'Wall DEF',NULL,NULL,NULL,NULL,'/86.png'),
       (87,'Ancestral Kilt','Footwear',10,'Familiar Training Lv EXP',20,'Merging Speed (Pacts)',NULL,NULL,NULL,NULL,NULL,NULL,'/87.png'),
       (88,'Champion Stride','Footwear',10,'Army ATK',22,'Army Max HP',40,'Inf ATK',50,'Travel Speed',NULL,NULL,'/88.png'),
       (89,'Dragon Talon','Footwear',15,'Army Max HP',20,'Inf ATK',30,'Ran ATK',NULL,NULL,NULL,NULL,'/89.png'),
       (90,'Gargantuan Belt','Footwear',15,'Army DEF',27.5,'Cav Max HP',37.5,'Inf ATK',50,'Stone Production Increase',NULL,NULL,'/90.png'),
       (91,'Hunting Greaves','Footwear',2000,'Max Energy',5,'Monster Hunt DMG',50,'Monster Hunt Starting MP',30,'Monster Hunt Travel Speed',NULL,NULL,'/91.png'),
       (92,'Nomad Boots','Footwear',24,'Army Capacity',2.5,'Cav ATK',5,'Wall DEF',NULL,NULL,NULL,NULL,'/92.png'),
       (93,'Untamed Boots','Footwear',20,'Army Max HP',15,'Cav ATK',50,'Cav DEF',20,'Travel Speed',NULL,NULL,'/93.png'),
       (94,'Atlas Ankle Locks','Footwear',6,'Army DEF',2.5,'Ran ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/94.png'),
       (95,'Cobra Sandals','Footwear',3.5,'Cav ATK',3.5,'Ran ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/95.png'),
       (96,'Durable Boots','Footwear',10,'Army DEF',4.5,'Cav ATK',4.5,'Ran ATK',NULL,NULL,NULL,NULL,'/96.png'),
       (97,'Goatskin Boots','Footwear',1.5,'Cav ATK',2,'Wall DEF',NULL,NULL,NULL,NULL,NULL,NULL,'/97.png'),
       (98,'Legs of the Deceiver','Footwear',12,'Army ATK',5,'Ran ATK',15,'Ran DEF',NULL,NULL,NULL,NULL,'/98.png'),
       (99,'Seafarer Cleats','Footwear',27.5,'Army Capacity',4,'Cav ATK',3.5,'Construction Speed',NULL,NULL,NULL,NULL,'/99.png'),
       (100,'Winter Stompers','Footwear',13,'Army DEF',7,'Cav ATK',25,'Ran DEF',NULL,NULL,NULL,NULL,'/100.png'),
       (101,'Champion Boots','Footwear',10,'Army ATK',22,'Army Max HP',40,'Ran ATK',50,'Travel Speed',NULL,NULL,'/101.png'),
       (102,'Corrupted Boots','Footwear',10,'Inf ATK',10,'Inf DEF',15,'Siege Engine ATK',15,'Siege Engine Max HP',NULL,NULL,'/102.png'),
       (103,'Dwarven toe Guards','Footwear',16,'Gold Production Increase',2,'Ran ATK',2.5,'Wall DEF',NULL,NULL,NULL,NULL,'/103.png'),
       (104,'Gryphons Walkers','Footwear',35,'Construction Speed',100,'Food Production Increase',17.5,'Research Speed',NULL,NULL,NULL,NULL,'/104.png'),
       (105,'March Treadders','Footwear',1,'Construction Speed',1,'Ran ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/105.png'),
       (106,'Storm Tasset','Footwear',20,'Army DEF',10,'Army Max HP',30,'Cav ATK',30,'Inf ATK',NULL,NULL,'/106.png'),
       (107,'Venom Stinger ','Main-Hand',10,'Inf ATK',5,'Ran ATK',5,'Trap ATK',NULL,NULL,NULL,NULL,'/107.png'),
       (108,'Bone Staff','Main-Hand',3,'Familiar Skill EXP',50,'Familiar Training Lv EXP',15,'Merging Speed (Pacts)',NULL,NULL,NULL,NULL,'/108.png'),
       (109,'Decadent Sword ','Main-Hand',25,'Inf ATK',10,'Inf Max HP',25,'Ran ATK',10,'Ran DEF',NULL,NULL,'/109.png'),
       (110,'Falcon Gale','Main-Hand',10,'Cav ATK',5,'Ran ATK',5,'Trap ATK',NULL,NULL,NULL,NULL,'/110.png'),
       (111,'Harbinger','Main-Hand',10,'Army DEF',8,'Ran ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/111.png'),
       (112,'Malicious Saw','Main-Hand',25,'Inf ATK',15,'Inf DEF',25,'Siege Engine ATK',25,'Siege Engine DEF',NULL,NULL,'/112.png'),
       (113,'Septic Spikes','Main-Hand',9,'Cav ATK',9,'Inf ATK',6.5,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/113.png'),
       (114,'Tempest Crossbow','Main-Hand',8,'Inf ATK',3,'Ran ATK',3.5,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/114.png'),
       (115,'Wrath Star','Main-Hand',8,'Cav ATK',4,'Ran ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/115.png'),
       (116,'Champion Blade','Main-Hand',15,'Army ATK',17,'Army DEF',20,'Inf ATK',20,'Ran ATK',15,'Research Speed','/116.png'),
       (117,'Dragons Bite','Main-Hand',10,'Army Max HP',10,'Inf ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/117.png'),
       (118,'Fatal Flail','Main-Hand',5.5,'Inf ATK',3,'Trap ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/118.png'),
       (119,'Horn Cudgel','Main-Hand',30,'Cav ATK',15,'Cav DEF',35,'Trap DEF',NULL,NULL,NULL,NULL,'/119.png'),
       (120,'Nectar Orb','Main-Hand',25,'Cav ATK',10,'Cav DEF',25,'Ran ATK',10,'Ran Max HP',NULL,NULL,'/120.png'),
       (121,'Shadow Steel','Main-Hand',3.5,'Cav ATK',2,'Ran ATK',2.5,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/121.png'),
       (122,'Terror Lash','Main-Hand',20,'Army Capacity',10,'Construction Speed',27.5,'Inf ATK',10,'Inf DEF',NULL,NULL,'/122.png'),
       (123,'Wyrm Rod','Main-Hand',25,'Ran ATK',17.5,'Ran Max HP',50,'Timber Production Increase',NULL,NULL,NULL,NULL,'/123.png'),
       (124,'Champion Edge','Main-Hand',15,'Army ATK',17,'Army DEF',35,'Cav ATK',15,'Research Speed',NULL,NULL,'/124.png'),
       (125,'Earthshatter','Main-Hand',5,'Energy Saver',2000,'Max Energy',30,'Monster Hunt DMG',NULL,NULL,NULL,NULL,'/125.png'),
       (126,'Fiery Tomahawk','Main-Hand',10,'Cav ATK',6.5,'Inf ATK',3.5,'Ran ATK',NULL,NULL,NULL,NULL,'/126.png'),
       (127,'Krakens Anchor','Main-Hand',25,'Cav ATK',13,'Cav Max HP',25,'Inf ATK',13,'Inf DEF',NULL,NULL,'/127.png'),
       (128,'Reapers Axe','Main-Hand',1.5,'Cav ATK',1.5,'Inf ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/128.png'),
       (129,'Skullcrusher','Main-Hand',20,'Army ATK',25,'Inf DEF',15,'Ran ATK',NULL,NULL,NULL,NULL,'/129.png'),
       (130,'Trident','Main-Hand',7,'Construction Speed',6.5,'Siege Engine ATK',6,'Trap ATK',NULL,NULL,NULL,NULL,'/130.png'),
       (131,'Champion Greatsword','Main-Hand',15,'Army ATK',17,'Army DEF',20,'Cav ATK',20,'Ran ATK',15,'Research Speed','/131.png'),
       (132,'Electric Lance','Main-Hand',35,'Army Capacity',30,'Gathering Speed',10,'Research Speed',15,'Travel Speed',NULL,NULL,'/132.png'),
       (133,'Frostwing Greastword','Main-Hand',20,'Cav ATK',20,'Inf ATK',12.5,'Ran ATK',NULL,NULL,NULL,NULL,'/133.png'),
       (134,'Lumos Lance','Main-Hand',5.5,'Construction Speed',6.5,'Inf ATK',3.5,'Ran ATK',NULL,NULL,NULL,NULL,'/134.png'),
       (135,'Ripper Claw','Main-Hand',15,'Cav ATK',20,'Cav DEF',35,'Travel Speed',NULL,NULL,NULL,NULL,'/135.png'),
       (136,'Slayers Sword','Main-Hand',3,'Construction Speed',3,'Inf ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/136.png'),
       (137,'Blighted Vial','Off-Hand',50,'Familiar Training Lv Exp',10,'Merging Speed (Skillstones)',NULL,NULL,NULL,NULL,NULL,NULL,'/137.png'),
       (138,'Champion Light','Off-Hand',20,'Army DEF',30,'Cav ATK',35,'Inf ATK',10,'Training Speed',NULL,NULL,'/138.png'),
       (139,'Eternal Codex','Off-Hand',20,'Cav ATK',20,'Cav Max HP',35,'Ran ATK',NULL,NULL,NULL,NULL,'/139.png'),
       (140,'Heralds Crest','Off-Hand',6.5,'Army Max HP',2.5,'Cav ATK',2,'Trap ATK',NULL,NULL,NULL,NULL,'/140.png'),
       (141,'Noahs Cube','Off-Hand',5,'Cav ATK',6,'Ran ATK',14,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/141.png'),
       (142,'Tome of Saints','Off-Hand',3,'Ran ATK',2,'Research Speed',NULL,NULL,NULL,NULL,NULL,NULL,'/142.png'),
       (143,'Winter Mitts','Off-Hand',25,'Army DEF',25,'Army Max HP',32.5,'Inf DEF',10,'Ran ATK',NULL,NULL,'/143.png'),
       (144,'Call of the Deep','Off-Hand',15,'Cav ATK',10,'Cav Max HP',15,'Inf ATK',10,'Inf Max HP',NULL,NULL,'/144.png'),
       (145,'Crusaders Shield','Off-Hand',4.5,'Inf ATK',6.5,'Ran ATK',10,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/145.png'),
       (146,'Fiendish Fang','Off-Hand',1.5,'Cav ATK',3.5,'Siege Engine ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/146.png'),
       (147,'Hunting Mace','Off-Hand',30,'Monster Hunt DMG',50,'Monster Hunt Starting MP',NULL,NULL,NULL,NULL,NULL,NULL,'/147.png'),
       (148,'Orb of Pestilence','Off-Hand',11,'Cav ATK',30,'Trap ATK',45,'Trap Max HP',NULL,NULL,NULL,NULL,'/148.png'),
       (149,'Umbral Whisper','Off-Hand',10,'Army Max HP',3.5,'Trap ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/149.png'),
       (150,'Wyrm Lantern','Off-Hand',5,'Cav DEF',10,'Ran ATK',9,'Ran Max HP',NULL,NULL,NULL,NULL,'/150.png'),
       (151,'Champion Katar','Off-Hand',20,'Army DEF',35,'Cav ATK',30,'Ran ATK',10,'Training Speed',NULL,NULL,'/151.png'),
       (152,'Dark Aegis','Off-Hand',10,'Army ATK',10,'Inf ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/152.png'),
       (153,'Frostwing Shield','Off-Hand',12.5,'Army DEF',8.5,'Army Max HP',9,'Wall DEF',NULL,NULL,NULL,NULL,'/153.png'),
       (154,'Lunar Scimitar','Off-Hand',11.5,'Army Max HP',9,'Ran ATK',14,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/154.png'),
       (155,'Rabid Claws','Off-Hand',4,'Cav ATK',3.5,'Inf ATK',11.5,'Siege Engine ATK',NULL,NULL,NULL,NULL,'/155.png'),
       (156,'Vice Grips','Off-Hand',13,'Army Max HP',5,'Research Speed',4.5,'Trap ATK',NULL,NULL,NULL,NULL,'/156.png'),
       (157,'Champion Lamp','Off-Hand',20,'Army DEF',30,'Inf ATK',35,'Ran ATK',10,'Training Speed',NULL,NULL,'/157.png'),
       (158,'Dragons Fist','Off-Hand',20,'Army Max HP',22,'Cav ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/158.png'),
       (159,'Gryphons Talon','Off-Hand',25,'Army Capacity',17.5,'Construction Speed',35,'Gold Production Increase',NULL,NULL,NULL,NULL,'/159.png'),
       (160,'Morning Star','Off-Hand',3,'Inf ATK',6.5,'Ran ATK',NULL,NULL,NULL,NULL,NULL,NULL,'/160.png'),
       (161,'Terror Blade','Off-Hand',9,'Inf ATK',12,'Inf DEF',25,'Timber Production Increase',NULL,NULL,NULL,NULL,'/161.png'),
       (162,'Viral Switchblade','Off-Hand',15,'Inf ATK',15,'Ran ATK',25,'Siege Engine ATK',20,'Siege Engine DEF',NULL,NULL,'/162.png');

/*!40000 ALTER TABLE `equipements` ENABLE KEYS */;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-03 17:03:07
