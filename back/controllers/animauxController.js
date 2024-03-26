const e = require('express');
const db = require('../database/database'); // Assurez-vous du chemin correct
require ('dotenv').config();


exports.getAllAnimaux = async(req, res)=> {
    const sql = "SELECT * from animaux";
    const resultat = await db.query(sql);
    console.log(resultat)
    res.status(200).json(resultat);
}

exports.updateAnimaux = async (req, res) => {
    const animal_id = req.params.id;
    const { age, genre} = req.body; // Ajout des variables manquantes
    const sql = 'UPDATE animaux SET age = ?, genre = ? WHERE id = ?';
    const result = await db.query(sql, [age, genre, animal_id]);
    res.json({ message: 'Animaux mis à jour avec succès' });
}

exports.deleteAnimaux =  async (req, res) => {
    const animal_id = req.params.id;
    const sql = 'DELETE FROM animaux WHERE id = ?';
    const result = await db.query(sql, [animal_id]);
    res.json({ message: 'Animaux supprimé avec succès' });
} 

exports.getAnimauxID = async (req, res) => {
    const animal_id = req.params.id;
    const sql = 'SELECT * FROM animaux WHERE id = ?';
    const result = await db.query(sql, [animal_id]);
    res.json(result[0]);
}

exports.insertAnimaux = async (req, res) => {
    const { age, genre } = req.body;
    const result = await db.query('select * from animaux where genre = ?', [genre])
    if(result.length > 0){
        return res.status(401).json({error: "Genre déjà existant"})
    }
    const sql = "INSERT INTO animaux (age, genre) VALUES (?, ?)";
    await db.query(sql, [age, genre]);
    res.status(201).json({ message: 'Animal créé' });
}
    


