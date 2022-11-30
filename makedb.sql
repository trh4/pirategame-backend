drop table IF EXISTS .`users`;
drop table IF EXISTS .`dicelog`;

CREATE TABLE IF NOT EXISTS .`users` (
    `email` varchar(50) NOT NULL,
    `name` varchar(50) NOT NULL,
    `wins` int DEFAULT 0,
    `loses` int DEFAULT 0,
	`created_ts` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`email`)
);

INSERT INTO users(email,`name`)
VALUES('trh4@walla.com','ariel barak');

CREATE TABLE IF NOT EXISTS .`dicelog` (
    `log_id` INT AUTO_INCREMENT,
	`email` varchar(50) NOT NULL,
    `won` TINYINT(1) DEFAULT NULL,
    `dice_number` int DEFAULT NULL,
	`title` varchar(255) NOT NULL,
     `ts` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`log_id`)
);


INSERT INTO dicelog (email,won,dice_number,title)  
VALUES ('trh4@walla.com', 1, '5', 'title is title' )