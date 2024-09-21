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
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(100) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `gender` enum('m','f','o') NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` bigint(10) NOT NULL,
  `user` enum('student','admin') NOT NULL DEFAULT 'student'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `firstname`, `lastname`, `gender`, `email`, `password`, `phone`, `user`) VALUES
(12, 'wisdom', 'chafu', 'm', 'wusdom@gmail.com', '$2y$10$946OpfRTvyMFUJWUJsexyumhuK70uazM7haPij7IdqmxjqIrjgdAa', 995257752, 'student'),
(18, 'tamandani', 'phiri', 'f', 'tamadam@gmai.com', '$2y$10$WOt1RJtVmbUwYhY2siDYJOEtUvtYXAqCxUnpPLJTV0ppfgJSUgKuG', 995257754, 'student'),
(20, 'tonic', 'phiri', 'm', 'tonicadam@gmail.com', '$2y$10$36Sjn3nEedqsl3lgvNE7YOqKIjlM7DezldFwRm1qZL9BzTBUaa8.O', 995257754, 'admin'),
(22, 'misoma', 'kacamba', 'm', 'misokacha@gmail.com', '$2y$10$crNSxyjDM9OpLlT0iAbWW.GH7ATexds6tt1u2tDyP/VTlr0LQJEiy', 9987886867, 'admin'),
(31, 'adam', 'phiri', 'o', 'phiriadam@admin.com', '$2y$10$hjCVMrzNfRLgbiihTLdqu.Hff04fp6I3S5a0dk.qD9VDDHTGhHpXu', 988297780, 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
