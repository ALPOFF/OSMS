-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 22 2019 г., 17:52
-- Версия сервера: 5.7.20
-- Версия PHP: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `Diplom`
--

-- --------------------------------------------------------

--
-- Структура таблицы `satinfo`
--

CREATE TABLE `satinfo` (
  `id` int(255) NOT NULL,
  `name` char(30) NOT NULL,
  `period` int(30) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `int_designator` char(30) NOT NULL,
  `perem` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `satinfo`
--

INSERT INTO `satinfo` (`id`, `name`, `period`, `status`, `int_designator`, `perem`) VALUES
(1, 'SL-1 R/B', 5820, 0, '1957-001A', 0),
(2, 'SPUTNIK 1', 5820, 0, '1957-001B', 0),
(3, 'SPUTNIK 2', 5760, 0, '1957-002A', 0),
(4, 'EXPLORER 1', 5340, 0, '1958-001A', 0),
(5, 'VANGUARD 1', 7980, 1, '1958-002B', 34.00644933),
(6, 'EXPLORER 3', 6240, 0, '1958-003A', 0),
(7, 'SL-1 R/B', 6180, 0, '1958-004A', 0),
(8, 'SPUTNIK 3', 5340, 0, '1958-004B', 0),
(9, 'EXPLORER 4', 5580, 0, '1958-005A', 0),
(10, 'SCORE', 5940, 0, '1958-006A', 0),
(11, 'VANGUARD 2', 7320, 1, '1959-001A', -31.00448712),
(12, 'VANGUARD R/B', 7560, 1, '1959-001B', -13.03300326);

-- --------------------------------------------------------

--
-- Структура таблицы `satpos`
--

CREATE TABLE `satpos` (
  `id` int(255) NOT NULL,
  `latitude0` double NOT NULL DEFAULT '0',
  `longitude0` double NOT NULL DEFAULT '0',
  `altitude0` double NOT NULL DEFAULT '0',
  `speed0` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `satpos`
--

INSERT INTO `satpos` (`id`, `latitude0`, `longitude0`, `altitude0`, `speed0`) VALUES
(1, 0, 0, 0, 0),
(2, 0, 0, 0, 0),
(3, 0, 0, 0, 0),
(4, 0, 0, 0, 0),
(5, -28.37086419, -37.19613552, 1049.42, 7.3216321084977),
(6, 0, 0, 0, 0),
(7, 0, 0, 0, 0),
(8, 0, 0, 0, 0),
(9, 0, 0, 0, 0),
(10, 0, 0, 0, 0),
(11, 18.97391219, -85.63379261, 2054.52, 6.1752144262251),
(12, 2.02718086, 130.97130596, 3184.44, 5.3766821242989);

-- --------------------------------------------------------

--
-- Структура таблицы `test`
--

CREATE TABLE `test` (
  `test1` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `test`
--

INSERT INTO `test` (`test1`) VALUES
(45),
(4),
(6);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(250) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `patronymic` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `login` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `patronymic`, `email`, `password`, `login`) VALUES
(1, 'Алексей', 'Пантелеев', 'Сергеевич', 'leha.mms81@gmail.com', '12345', 'aleksei'),
(2, 'Иван', 'Иванов', 'Иванович', 'hdfhdfj@gmail.com', 'qwerty', 'ivan');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `satinfo`
--
ALTER TABLE `satinfo`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `satpos`
--
ALTER TABLE `satpos`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `satinfo`
--
ALTER TABLE `satinfo`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
