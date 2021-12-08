# BIDGAMES - NodeJS

## Installation
#### Serveur
Le serveur NodeJS fonctionne sous n'importe quel système ayant **NodeJS** d'installé.

Le projet contient un fichier nommé ```package.json```, ce fichier est l'idendité du serveur. En demandant à NodeJS de lancer l'installation du projet, il va lire ce fichier est installer les paquets dont a besoin notre serveur.

#### Linux
##### Installation NodeJS
La commande a exécuter pour installer NodeJS est la suivante :
```bash
sudo apt install nodejs
```
##### Installation des paquets NodeJS
```bash
npm install
``` 

Le serveur, est configuré par défaut sur le port **3000**. Il est possible de modifier ce dernier, en modifiant la constante **PORT** comme ceci :
```js
const PORT = xxxx;
```