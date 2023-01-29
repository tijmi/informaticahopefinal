-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2023 at 08:58 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql_login`
--

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `message` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `nolikes` int(11) DEFAULT 0,
  `token` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `title`, `message`, `user_id`, `username`, `date`, `nolikes`, `token`) VALUES
(57, 'dfas', 'afdsa', 38, 'test2', '2023-01-29', 0, 'isdX8HmysHscxu5nm8se'),
(58, 'sfg', 'sgfd', 16, 'test', '2023-01-29', 0, 'hkE6Se0wM7pryU7f6uPU');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `verify` varchar(250) DEFAULT '0',
  `token` varchar(250) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `verify`, `token`, `password`) VALUES
(16, 'test', 'thdegroote18@gmail.com', '1', 'JqKwUWhsIWGrn8mdJHJW', '$2a$08$LZ0dZ0SNEgqHQeuLEbI/y.1gqAdznft5Q8Aq.a/jX9S4kFuK1PnQi'),
(17, 'adfgfddaf', 'ololotnfcqzjetreob@tmmcv.net', '0', 'H8o7VcoqZc2cAn4hbngC', '$2a$08$o3BwxNd/L5eUsTEOpXJUwug/lqSzmdaFnA2p.AA9tUfJy0INUbxJS'),
(18, 'fadsf', 'eys93940@xcoxc.com', '0', '8V1OmvBMZFOYX377clHH', '$2a$08$AWjugZciCcgDS38orAiiRuVXoQlEJg8g3/SXWqcd4SXCXhYDe4RB.'),
(19, 'tgfdsgf', 'woocsovvyksrycumoi@tmmcv.com', '1', 'Vx2zzXCb2d4yQxOchTq5', '$2a$08$X4oiHUcDhwEJum3aKrtyuOyRrpggJD3BSBsqbxrorXXSnFVCGK/fS'),
(20, 'bgrtdugoumrrpypsrq@tmmwj.net', 'bgrtdugoumrrpypsrq@tmmwj.net', '1', 'lvhy61KGTLKPVHK8sU3L', '$2a$08$Cu6/dFHOcP0YuyalBW41KeKZnyg3y4ptLwIOUgcSdbWOc6JH.2Pf.'),
(21, 'helltaga', 'wrellblfvxpuionmsn@tmmcv.com', '0', 'q8y6tZuOgE8q5a0X7F6P', '$2a$08$Xug8PSxdgE05F8zEBjCU3eBtVB0X/oWkVDw1ym6QtTHK3C4vC3bpO'),
(22, 'ahagfdhafdh', 'jyb70369@nezid.com', '1', 'oLIGKNh5Mg77XiqSsy1D', '$2a$08$/UbHzqIwaed3dJjsF7.uFeqSrGbpynjdV3/tEj/Hj79VOV4jVTy/y'),
(23, 'agdfafdg', 'ogd25886@nezid.com', '1', 'PzMw9kXp21CvPGbXrELS', '$2a$08$QHdmW4DN7wxW3KRZPUoqc.FwWszh7PgNfa8pppy7zoxV33QGiGalm'),
(24, 'gagadfgafdgad', 'tlu17330@omeie.com', '1', 'KN6vE3FeGm6yMIxzVO2u', '$2a$08$toRUU.1p.s0utOZDV2wCS.q6HLXEZFDROvKoqmGyhqSruer.ADiPW'),
(25, 'dsagfadsfgadf', 'kwl43986@nezid.com', '1', 'WhmwJJpZpRwZQvCza572', '$2a$08$qjZq5WIjbfbK0PLEf/Ygqe1cN2GvVKld37HMNFkbAq1ozEgg0SqmO'),
(26, 'dsagfadsfgadfrqewr', 'qhw96029@nezid.com', '1', '2BKNIUkhR5SFpAtK7Ps0', '$2a$08$n29U5HGUEnZuPmKe9hMFpOHwdWT1cfnQc9bm89fq7NA1XOLJRAO/O'),
(27, 'dsfdasfads', 'lqi24939@omeie.com', '1', 'EbTbNmJs85ovJkK8UF3Q', '$2a$08$sOgVIQLlg0w5mAhixUGatec2yppPm09vVTEieAoZLeh3P5gNdM5im'),
(28, 'dsfdasfadsFDAS', 'wxd03727@omeie.com', '1', 'E24Yt3zU7DHSizdgcqWX', '$2a$08$LW3FGNTvk/OAyalOloHpyOop2ZgBZRdR3uLDLUWLISb0PoT7gTJ.a'),
(29, 'heagadfs', 'hdc76393@nezid.com', '1', 'wVi8XS2HMb62U2RMkv5A', '$2a$08$RgYDA4DEG8WqttwazyCaL.H8iWBov/LhRrcPzmWN/0z0LcLoD9zv2'),
(30, 'afdasfadsf', 'yemija2388@ekcsoft.com', '0', 'SBOubqAEFPfGbVVbGjI5', '$2a$08$2vWvo47lqAbKDptblwJKN.mEwyOGdIgucnbUX/i2TlOdETR1XOGoC'),
(31, 'adfgadg', 'fph49978@nezid.com', '0', 'tAwgkMcmX8T5N0PaIau4', '$2a$08$wYkpaANGH2DsxPD0xtUee.E/ZyYk.0haVuEK6/LxYbml4y6zwa/1q'),
(32, 'gfsdbfdg', 'khj60355@xcoxc.com', '0', 'YqoTXNuapJEdyChTsFha', '$2a$08$0wlQcuc1JV3ZmMGBMHM1N.V9BiX3Hr7DynOQ5OaxGHaoyzJBCVOvK'),
(33, 'gfsdbfdggadfg', 'cvy28828@omeie.com', '0', 'kfCURShU6RNASlcEY7Rw', '$2a$08$6BwU2SNwG.Ffii7Icb3wAOh8hzjhZUurjUBTwdL9kqwkjFeLjXw82'),
(34, 'kevinlam', 'xxrxyufi@duck.com', '1', 'qysJxlqpaHOmqj3zbFzT', '$2a$08$iDNvjhGTIUh4MgKpVIZRHepa0UjiFtp.6gZk2QZKgo54v6gZqYGp2'),
(35, 'fghfadh', 'ers89450@nezid.com', '1', 'dknPf1lrl29rs6Fie0hm', '$2a$08$V4zLqUwv4yJlytqGsM5rUO2D/KlcB0TTTd/NLMUrIAe7pdcdMINtq'),
(36, 'dgadsgfda', 'udxogdxapjipuuuoov@tmmwj.com', '1', 'VLpkfJAMcSgWn4iNRm7t', '$2a$08$Y15o4imsp.NIDTA0TH149uCBsyqL/q4th1ImZl0dbZP0f6FEqKp9O'),
(37, 'like[i].user_id', 'bwd62191@xcoxc.com', '1', 'N6JmnO78oC4QQpFoD3D0', '$2a$08$A33K.uIHiiWvGtKQEVat9u.9wCgmE6/fh/MyXQf/1KQhetpu053Eq'),
(38, 'test3 ', '137804@edu.pcc.nu', '1', 'nMjCYcW2OhlvpUgiy2Hl', '$2a$08$zo4Qln97JDoBqckR/UkK4ebaXgexErEm1o8urhxFAtzGpgM1Am2ci');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
