const db = require('../database/database'); // Assurez-vous du chemin correct
require ('dotenv').config();


exports.getAllAnimaux = async(req, res)=> {
    const sql = "SELECT * from animaux";
    const resultat = await db.query(sql);
    console.log(resultat)
    res.status(200).json(resultat);
}

exports.updateAnimaux = async (req, res) => {
    const animauxId = req.params.id;
    const { nom, type, genre} = req.body; // Ajout des variables manquantes
    const sql = 'UPDATE animaux SET nom = ?, type = ?, genre = ? WHERE id = ?';
    const result = await db.query(sql, [nom, type, genre, animauxId]);
    res.json({ message: 'Animaux mis à jour avec succès' });
}
