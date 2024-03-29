use projet - ipssi;

delimiter / /

create procedure getalluser() 
begin 
	select * from user;
end
// 

delimiter;

delimiter / /

create procedure getuserbyid(IN p_id INT) 
BEGIN 
	SELECT * FROM user WHERE id = p_id;
end
// 

delimiter;

DELIMITER / /

CREATE PROCEDURE userdeleteId(IN userid VARCHAR(255
)) 
BEGIN 
	DELETE FROM user WHERE id = userid;
END
// 

DELIMITER;

DELIMITER / /

CREATE PROCEDURE updateuser(IN userid INT, IN name 
VARCHAR(255), IN username VARCHAR(50), IN email VARCHAR(100
)) 
BEGIN 
	UPDATE user
	SET
	    name = name,
	    username = username,
	    email = email
	WHERE
	    id = userid;
END// 

DELIMITER;