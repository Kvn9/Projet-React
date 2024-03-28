const db = require('../database/database');
require('dotenv').config();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getAllUtilisateur = async(req, res)=> {
    const sql = "SELECT * from user";
    const resultat = await db.query(sql);
    console.log(resultat)
    res.status(200).json(resultat);
}

exports.updateUtilisateur = async (req, res) => {
    const userId = req.params.id;
    const { nom, prenom, email, password, role } = req.body; // Ajout des variables manquantes
    const sql = 'UPDATE user SET name = ?, username = ?, email = ?, password = ?, role = ? WHERE id = ?';
    const result = await db.query(sql, [nom, prenom, email, password, role, userId]); 
    res.json({ message: 'Utilisateur mis à jour avec succès' });
};


exports.deleteUtilisateur =  async (req, res) => {
    const userId = req.params.id;
    const sql = 'DELETE FROM user WHERE id = ?';
    const result = await db.query(sql, [userId]);
    res.json({ message: 'Utilisateur supprimé avec succès' });
};


exports.getUtilisateurID = async (req, res) => {
    const userId = req.params.id;
    const sql = 'SELECT * FROM user WHERE id = ?';
    const result = await db.query(sql, [userId]);
    res.json(result[0]);
};
    

exports.insertUtilisateur = async (req, res) => {
        const { name, username, email, password, role } = req.body;
        const sqlSelect = "SELECT id FROM user WHERE email = ?";
        
        try {
            const [rows] = await db.query(sqlSelect, [email]);
    
            if (rows && rows.length > 0) {
                // L'utilisateur avec cette adresse e-mail existe déjà
                return res.status(409).json({ error: 'Adresse e-mail déjà utilisée' });
            } else {
                const sqlInsert = "INSERT INTO user (name, username, email, password, role) VALUES (?, ?, ?, ?,?)";
                await db.query(sqlInsert, [name, username, email, password, role ]);
                return res.status(201).json({ message: 'Utilisateur créé' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'ajout de l\'utilisateur' });
        }
    };

exports.register = async(req, res)=> {
    const { email, password } = req.body
    const result = await db.query('select * from user where email = ?', [email])
    if(result.length > 0){
        return res.status(409).json({error: "utilisateur existant"})
    }
    const hash = await bcrypt.hash(password, 10)
    await db.query('insert into user (email, password) values (?, ?)', [email, hash])
    const token = jwt.sign({email}, process.env.SECRET_KEY, { expiresIn : '1h'})
    res.json({token})
}

   
exports.login = async(req, res)=> {
        // vérifier l'email de l'utilisateur => récupérer le mdp
        const { email, password } = req.body 
        const result = await db.query('select email, password, role from user where email = ?', [email])
        if(result.length == 0){
            return res.status(401).json({error: "utilisateur non existant"})
        }
        const utilisateur = result[0];
        console.log(utilisateur);
        // comparaison du mdp avec le mdp hasher en bdd avec bcrypt
        const SamePwd = await bcrypt.compare(password, utilisateur.password)
        if(!SamePwd){
            return res.status(401).json({error: "mdp incorrect"})
        }
        // renvoie jwt token pour la signature
        const token = jwt.sign({email, ...utilisateur}, process.env.SECRET_KEY, { expiresIn : '1h'})
        res.json({token, user:utilisateur})
        
    }
    