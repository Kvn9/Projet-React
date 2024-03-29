USE projet - ipssi;

DELIMITER / /

CREATE PROCEDURE getallcabinet() 
BEGIN 
	SELECT * FROM cabinets;
END
// 

DELIMITER;

DELIMITER / /

CREATE PROCEDURE updatecabinet(IN cabinetid INT, IN 
adresse VARCHAR(255), IN telephone VARCHAR(20), IN id_animal 
VARCHAR(255)) 
BEGIN 
	UPDATE cabinets
	SET
	    nom = nom,
	    adresse = adresse,
	    telephone = telephone,
	    id_animal = id_animal
	WHERE
	    id = cabinetid;
END
// 

DELIMITER;

DELIMITER / /

CREATE PROCEDURE deletecabinet(IN cabinetid VARCHAR
(255)) 
BEGIN 
	DELETE FROM cabinets WHERE id = cabinetid;
END
// 

DELIMITER;

DELIMITER / /

CREATE PROCEDURE getcabinetbyid(IN cabinetid VARCHAR
(255)) 
BEGIN 
	SELECT * FROM cabinets WHERE id = cabinetid;
END
// 

DELIMITER;

DELIMITER / /

CREATE PROCEDURE insertcabinet(IN nom VARCHAR(255), 
IN adresse VARCHAR(255), IN telephone VARCHAR(20), IN 
id_animal VARCHAR(255)) 
BEGIN 
	INSERT INTO
	    cabinets (
	        nom, adresse, telephone, id_animal
	    )
	VALUES (
	        nom, adresse, telephone, id_animal
	    );
END
// 

DELIMITER;

DELIMITER / /

CREATE PROCEDURE getcabinetName(IN nom VARCHAR(255)
) 
BEGIN 
	SELECT * FROM cabinets WHERE nom;
END
// 

DELIMITER;