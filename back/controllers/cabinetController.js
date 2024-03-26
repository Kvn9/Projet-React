const db = require('../database/database');
require('dotenv').config();


exports.getAllCabinet = async(req, res)=> {
    const sql = "SELECT * from cabinets";
    const resultat = await db.query(sql);
    console.log(resultat)
    res.status(200).json(resultat);
}

exports.updateCabinet = async (req, res) => {
    const cabinetId = req.params.id;
    const { nom, adresse, telephone, id_animal} = req.body; 
    const sql = 'UPDATE cabinets SET nom = ?, adresse = ?, telephone = ?, id_animal = ? WHERE id = ?';
    const result = await db.query(sql, [nom, adresse, telephone, id_animal, cabinetId]);
    res.json({ message: 'Cabinet mis à jour avec succès' });
}

exports.deleteCabinet =  async (req, res) => {
    const cabinetId = req.params.id;
    const sql = 'DELETE FROM cabinets WHERE id = ?';
    const result = await db.query(sql, [cabinetId]);
    res.json({ message: 'Cabinet supprimé avec succès' });
}

exports.getCabinetID = async (req, res) => {
    const cabinetId = req.params.id;
    const sql = 'SELECT * FROM cabinets WHERE id = ?';
    const result = await db.query(sql, [cabinetId]);
    res.json(result[0]);
}

exports.insertCabinet = async (req, res) => {
    const { nom, adresse, telephone, id_animal } = req.body;
    const sqlSelect = "SELECT id FROM cabinets WHERE nom = ?";
    
    try {
        const [rows] = await db.query(sqlSelect, [nom]);

        if (rows && rows.length > 0) {
            return res.status(409).json({ error: 'Nom déjà utilisé' });
        } else {
            const sqlInsert = "INSERT INTO cabinets (nom, adresse, telephone, id_animal) VALUES (?, ?, ?, ?)";
            await db.query(sqlInsert, [nom, adresse, telephone, id_animal ]);
            return res.status(201).json({ message: 'Cabinet créé' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'ajout du cabinet' });
    }
}

