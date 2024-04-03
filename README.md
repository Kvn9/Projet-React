# 🐾 Projet de Site Web avec React, Node.js, Express, et MySQL 🐶

Ce projet est un site web développé avec React pour le front-end, Node.js et Express pour le back-end, et MySQL avec phpMyAdmin comme base de données. Il vise à fournir une plateforme pour une prise de rendez-vous chez un vétérinaire.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre système :

- Node.js - [Télécharger et installer Node.js](https://nodejs.org/)
- MySQL - [Télécharger et installer MySQL](https://www.mysql.com/)
- phpMyAdmin - [Télécharger et installer phpMyAdmin](https://www.phpmyadmin.net/)
  
## Installation

1. **Cloner le référentiel**

    ```
    git clone https://github.com/kvn/projet-site-web.git
    ```

2. **Installer les dépendances du serveur**

    ```
    cd back
    npm install
    ```

3. **Installer les dépendances du client**

    ```
    cd front
    npm install
    ```

4. **Configurer les variables d'environnement**

    Créez un fichier `.env` à la racine du projet avec les variables suivantes :

    ```
    DB_HOST=adresse_de_votre_hôte_mysql
    DB_USER=votre_utilisateur_mysql
    DB_PASSWORD=votre_mot_de_passe_mysql
    DB_NAME=votre_nom_de_base_de_données
    ```

6. **Lancer l'application**

    ```
    cd front
    npm run dev
    ```

## Fonctionnalités

- Création d'un compte utilisateur
- Connexion à un compte existant
- Partie Administrateur
- Modification côté administrateur
- Mise en place de middleware
- Mise en place de route sécurisée
- Mise en place de la Barre de recherche 🔍


