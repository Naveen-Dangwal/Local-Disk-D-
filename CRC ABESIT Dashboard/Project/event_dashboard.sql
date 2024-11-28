-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 25, 2024 at 04:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `event_dashboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `event_tb`
--

CREATE TABLE `event_tb` (
  `event_id` int(3) NOT NULL,
  `event_name` varchar(20) NOT NULL,
  `event_desc` varchar(30) NOT NULL,
  `event_img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=eucjpms COLLATE=eucjpms_bin;

--
-- Dumping data for table `event_tb`
--

INSERT INTO `event_tb` (`event_id`, `event_name`, `event_desc`, `event_img`) VALUES
(1, 'Hacknovate', 'Hacknovate 5.0 will gather bri', 'pic/heck3.jpeg'),
(2, 'IdeaThon', 'Ideathons are intensive brains', 'pic/idea.jpeg'),
(3, 'Job-A-Thon', 'It is very good exercise.', 'pic/job.png'),
(4, 'Smart India', 'Smart india is a very good inn', 'pic/sih22.png');

-- --------------------------------------------------------

--
-- Table structure for table `participants_tb`
--

CREATE TABLE `participants_tb` (
  `id` int(3) NOT NULL,
  `name` varchar(20) NOT NULL,
  `collegename` varchar(30) NOT NULL,
  `branch` varchar(10) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `city` varchar(20) NOT NULL,
  `age` int(2) NOT NULL,
  `gender` enum('m','f','o') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=eucjpms COLLATE=eucjpms_bin;

--
-- Dumping data for table `participants_tb`
--

INSERT INTO `participants_tb` (`id`, `name`, `collegename`, `branch`, `mobile`, `city`, `age`, `gender`) VALUES
(101, 'sapna', 'shayam lal college', 'bsc', '9292929292', 'delhi', 21, 'f'),
(111, 'abhilasha', 'delhi university', 'bca', '1010101010', 'meerut', 20, 'f'),
(112, 'naveen', 'abesit', 'mca', '2020202020', 'ghaziabad', 22, 'm'),
(113, 'kansal', 'abesit', 'bsc', '9292929290', 'meerut', 21, 'm');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(3) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `age` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=eucjpms COLLATE=eucjpms_bin;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `username`, `password`, `email`, `age`) VALUES
(1, 'ramesh', '123', 'ramesh@gmail.com', 20),
(3, 'sapna', '1234', 'sappipathak@gmail.com', 40),
(4, 'ravi', '123', 'naveendangwal09@gmail.com', 22);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `participants_tb`
--
ALTER TABLE `participants_tb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `participants_tb`
--
ALTER TABLE `participants_tb`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
