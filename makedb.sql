drop table IF EXISTS .`users`;
drop table IF EXISTS .`dicelog`;
drop table IF EXISTS .`jokes`;

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
VALUES ('trh4@walla.com', 1, '5', 'title is title' );

CREATE TABLE IF NOT EXISTS .`jokes` (
    `joke_id` INT AUTO_INCREMENT,
	`title` varchar(255) NOT NULL,
    PRIMARY KEY (`joke_id`)
);

INSERT INTO jokes (title)  
VALUES ('q. How do you comfort a JavaScript bug? a. You console it'),
('When a JavaScript date has gone bad, "Dont call me, Ill callback you. I promise!"'),
('Dev1 saw a strange JavaScript function & asked, "What is this?". Dev2 responded, "I dont know. I wouldve called you, but I was in a bind"'),
('What do you call __proto__? a. Dunder proto q. Michael Scott was the regional manager where? a. __mifflin__'),
('Why did the TypeScript developer hear clicking sounds? a. Because they were basically a human type-writer!'),
('How did the JavaScript developer learn TypeScript so quickly? a. Because they coded anytime, anyplace, and anywhere'),
('Why do developer trolls love the terminal? a. Because their past-time is bashing!'),
('Why was the JavaScript developer sad? a. Because they didnt Node how to Express himself'),
('dev1 > What tool do you use to switch versions of node? dev1> nvm, I figured it out.'),
('Why did the child component have such great self-esteem? a. Because its parent kept giving it props!'),
('Why did the functional component feel lost? a. Because it didnt know what state it was in!'),
('Why did the React Higher Order Component give up? a. Because it sur-rendered to the prop-aganda!'),
('Why did the react class component feel relieved? a. Because it was now off the hook.'),
('Why couldn’t the React component understand the joke? a. Because it didn’t get the context.'),
('Why did the Web A11y Dev keep getting distracted? a. Beacuse they couldnt maintain focus!'),
('How do you make a Web App accessible? a. ARIA kidding me?'),
('Why did the C# developer fall asleep? a. Because they didnt like Java.'),
('Why do C# and Java developers keep breaking their keyboards a. Because they use a strongly typed language');

