const db = require('../database/database');
require('dotenv').config();



exports.getAllCabinet = async(req, res)=> {
    const sql = "CALL getAllCabinet";
    const resultat = await db.query(sql);
    console.log(resultat)
    res.status(200).json(resultat[0]);
}

exports.updateCabinet = async (req, res) => {
    const cabinetId = req.params.id;
    const { nom, adresse, telephone, id_animal} = req.body; 
    const sql = 'CALL updatecabinet(?, ?, ?, ?, ?)';
    await db.query(sql, [cabinetId, nom, adresse, telephone, id_animal]);
    res.json({ message: 'Cabinet mis à jour avec succès' });
}

exports.deleteCabinet =  async (req, res) => {
    const cabinetId = req.params.id;
    const sql = 'CALL deleteCabinet(?)';
    await db.query(sql, [cabinetId]);
    res.json({ message: 'Cabinet supprimé avec succès' });
} 

exports.getCabinetID = async (req, res) => {
    const cabinetId = req.params.id;
    const sql = 'CALL getcabinetbyid(?)';
    const result = await db.query(sql, [cabinetId]);
    res.json(result[0]);
}

exports.insertCabinet = async (req, res) => {
    const { nom, adresse, telephone, id_animal } = req.body;
    
    try {
        const sqlSelect = "CALL getcabinetName(?)"; 
        const rows = await db.query(sqlSelect, [nom]);
        console.log(rows);
        if (rows && rows.length < 0) {
            return res.status(409).json({ error: "nom cabinet déja crée" });
        } else {
            const sqlInsert = "CALL insertcabinet(?, ?, ?, ?)";
            console.log();
            const data = await db.query(sqlInsert, [nom, adresse, telephone, id_animal ]);
            console.log(data);
            return res.status(201).json({ message: 'Cabinet créé' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'ajout du cabinet' });
    }  
}


