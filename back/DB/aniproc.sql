use projetreact;

delimiter / /

create procedure getallanimaux() 
begin 
	select * from animaux;
end
// 

delimiter;

DELIMITER / /

CREATE PROCEDURE deleteanimaux(IN animauxid VARCHAR
(255)) 
BEGIN 
	DELETE FROM animaux WHERE id = animauxid;
END
// 

DELIMITER;

DELIMITER / /

CREATE PROCEDURE updateanimaux(IN animal_id INT, IN 
age INT, IN genre VARCHAR(50)) 
BEGIN 
	UPDATE animaux SET age = age, genre = genre WHERE id = animal_id;
END// 

DELIMITER;

DELIMITER / /

CREATE PROCEDURE getanimalbyid(IN animal_id VARCHAR
(255)) 
BEGIN 
	SELECT * FROM animaux WHERE id = animal_id;
END
// 

DELIMITER;

DELIMITER / /

CREATE PROCEDURE insertanimaux(IN age INT, IN genre 
VARCHAR(50)) 
BEGIN 
	INSERT INTO animaux (age, genre) VALUES (age, genre);
END// 

DELIMITER;

DELIMITER / /

CREATE PROCEDURE getinsertanimaux() 
BEGIN 
	SELECT genre FROM animaux;
END
// 

DELIMITER;