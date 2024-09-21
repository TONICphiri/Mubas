-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2024 at 08:06 AM
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
-- Database: `mubas`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user` enum('student','admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `password`, `user`) VALUES
(67, 'tamadam@gmai.com', '$2y$10$GsvBhV.WD9tgkDkp6XbjQOo/AQoHb2YrZ2I78e99xF1R7SMPEu8yS', 'student'),
(68, 'tamadam@gmai.com', '$2y$10$7QbQRwb1b3N8LHiyCQGK0en18Tf5Or1ZVdxOQEmg9pbgLyAcWANsq', 'admin'),
(69, 'tamadam@gmai.com', '$2y$10$tyvFHhQXI/VYJ9viXLffneCiy4/MxpvXc77fNlUeAFl1SrEb0pRGa', 'admin'),
(70, 'tonicadam@admin.ac.mw', '$2y$10$CnDYhH1hvScaZeGuBejS5.08hL/s9EqTfar6K3jW4FCNql2t8xO3W', 'admin'),
(71, 'tonicadam@admin.ac.mw', '$2y$10$sSYL2SzZlV.N8TyeXD8VEeSDoMbvIya4973PASP71pS1cg1FAwz1K', 'admin'),
(72, 'tamadam@gmai.com', '$2y$10$xIl.tL6YNNtyI6F0kwqIGuZ4UBQ5EQcxjYGB5zb0JgsazLhsnLbnO', 'admin'),
(73, 'tamadam@gmai.com', '$2y$10$WIrqrzWVlHTpgUW/eZXkD.YFlxkh0a3uMmknUIXxo/6K2feltyL2C', 'admin'),
(74, 'tamadam@gmai.com', '$2y$10$B6yUqiSE1N96arrUavIgbODd8z.23/h9w.fmWEgrMoilfviIhoGPi', 'admin'),
(75, 'tamadam@gmai.com', '$2y$10$O3.scWZBb5tzEGACWYZxbeZjGKL7LtqcfPU2aUgtb4Vrrc/jiakDm', 'student'),
(76, 'phiriadam@admin.com', '$2y$10$WHwJssi/M/AVWcCBovPSXOvdbFsR.D20wDT9w1gK.Z6td.KTrKhaS', 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
