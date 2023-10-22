# Application pokémons

[Installation Express JS](#express)
[Installation des dépendances](#installation-des-dépendances)
[Lancement du projet](#projet)
[Description des dépendances](#dépendances)
[Description de l'architecture projet](#architecture)
[Pourquoi](#pourquoi)

### Installation Express JS
- Création d'un package.json pour initier le projet : npm init -y
- Installation d'Express js : npm install express --save
- Création d'un fichier server

## Installation des dépendances

|         Dépendances           |               Commandes                   |
|-------------------------------|-------------------------------------------|
|   Bcrypt                      | npm install bcrypt                        |
|   Body-parser                 | npm install body-parser                   |
|   Cors                        | npm install cors                          |
|   Dotenv                      | npm install dotenv                        |
|   Express                     | npm install express                       |
|   Jsonwebtoken                | npm install jsonwebtoken                  |
|   Mongodb                     | npm install mongodb                       |  
|   Mongoose                    | npm install mongoose                      |
|   Mongoose-unique-validator   | npm install mongoose-unique-validator     |      
|   Nodemon                     | npm install nodemon                       |  


## Projet
- Créer un fichier .env placer les variables d'environnement : JWT_TOKEN, SALT_BCRYPT, EXPIRE_TOKEN et MONGO_DB_URI.
- Dans package.json configurez le lancement du projet : start: nodemon index.js 
- Lancez l'application : npm start

## Dépendances

**Bcrypt** : Bcrypt est une bibliothèque de hachage de mot de passe qui est largement utilisée pour stocker de manière sécurisée les mots de passe des utilisateurs. Elle offre un hachage sécurisé avec salage et est particulièrement adaptée à la protection des informations sensibles, comme les mots de passe.

**Body parser** : Body-parser est un middleware Express qui permet d'analyser les données du corps des requêtes HTTP. Il est couramment utilisé pour analyser les données envoyées via les formulaires HTML et les requêtes POST.

**Express** :  Express est un framework Node.js minimaliste et flexible qui permet de créer des applications Web robustes et évolutives. Il simplifie la gestion des routes, des requêtes HTTP et des réponses, facilitant ainsi la création de serveurs Web.

**Dotenv** : Dotenv est un module qui permet de charger des variables d'environnement à partir d'un fichier .env dans votre application Node.js. Cela permet de stocker des informations sensibles comme des clés API sans les exposer dans le code source.

**Cors** : CORS (Cross-Origin Resource Sharing) est un middleware Express qui permet de gérer les autorisations pour les requêtes entre domaines différents. Il est utilisé pour définir les règles de sécurité des requêtes AJAX et d'autres types de requêtes entre domaines.

**JsonWebToken** : Jsonwebtoken est une bibliothèque qui permet de générer, de vérifier et de déchiffrer des jetons JSON (JWT). Elle est couramment utilisée pour l'authentification et l'autorisation des utilisateurs dans les applications Web.

**Mongodb** : MongoDB est une base de données NoSQL orientée document qui stocke les données au format JSON. Elle est adaptée aux applications Web modernes et est souvent utilisée avec Node.js.

**Mongoose** : Mongoose est une bibliothèque Node.js qui simplifie l'interaction avec MongoDB. Elle offre un modèle de données, une validation des schémas, des requêtes avancées et bien plus encore pour travailler avec MongoDB.

**Mongoose-unique-validator** : Mongoose Unique Validator est un plugin Mongoose qui facilite la gestion des contraintes d'unicité dans les schémas Mongoose. Il simplifie la validation et la gestion des erreurs pour les champs uniques.

**Nodemon** : Nodemon est un utilitaire qui surveille les fichiers de votre projet Node.js et redémarre automatiquement l'application lorsque des modifications sont détectées. Cela facilite le développement en continu sans avoir à redémarrer manuellement le serveur.

### Architecture
- **Controllers** :  Les contrôleurs sont responsables de recevoir les requêtes HTTP des clients (par exemple, les navigateurs web), d'extraire les données de ces requêtes (paramètres, corps de la requête, en-têtes, etc.) et de décider de l'action appropriée à entreprendre en fonction de la requête. Cela peut inclure l'affichage d'une page, la modification des données, la création de ressources, etc.Les contrôleurs contiennent la logique métier de l'application. Cela signifie qu'ils déterminent comment les données sont manipulées, quelles actions sont autorisées en fonction de l'utilisateur et de ses droits, comment les erreurs sont gérées, etc. Les contrôleurs valident souvent les données entrantes pour s'assurer qu'elles sont correctes et sécurisées. Ils peuvent également filtrer et nettoyer les données avant de les utiliser dans le modèle.

- **Dico** : Contient les retours de messages status. Contient l'affichage des données en dure.

- **Middlewares** : Les middlewares (ou intergiciels) sont des composants logiciels qui agissent comme des filtres ou des gestionnaires de requêtes dans une application web. Ils sont couramment utilisés dans le développement web, en particulier avec des frameworks comme Express.js pour Node.js, pour effectuer diverses tâches lors du traitement des requêtes HTTP. Les middlewares sont positionnés entre le serveur et les routes de l'application et peuvent être utilisés pour accomplir différentes tâches, notamment :
    - Analyse des requêtes
    - Validation des données
    - Authentification et Autorisation
- **Models**: Contient le format des données et ses attributs.

- **Router**: Le module express.Router est un composant d'Express.js qui permet de créer des routeurs modulaires dans une application Express. Les routeurs sont utiles pour organiser les routes de manière structurée, en particulier dans les applications web complexes ou de grande envergure.

- **.env** : Le fichier .env (prononcé "dot env") est un fichier de configuration couramment utilisé dans le développement logiciel pour stocker des variables d'environnement. Les variables d'environnement sont des valeurs ou des paramètres qui sont spécifiques à l'environnement d'exécution de votre application, comme des clés API, des informations de base de données, des secrets, des URL, des paramètres de configuration, etc. Le fichier .env est utilisé pour définir ces variables de manière structurée.

- **.gitignore** : Le fichier .gitignore est un fichier de configuration utilisé avec le système de contrôle de version Git pour spécifier les fichiers et répertoires qui ne doivent pas être pris en compte par Git. En d'autres termes, les fichiers et répertoires répertoriés dans le fichier .gitignore sont ignorés par Git et ne sont pas inclus dans les commits.

- **index** : Contient le serveur.

### Pourquoi
**bcrypt** : J'ai choisi d'utiliser bcrypt pour le hachage sécurisé des mots de passe dans votre application. Cette dépendance est appropriée car elle offre un moyen robuste de stocker les mots de passe de manière sécurisée en utilisant une fonction de hachage unidirectionnelle.

**express** : express est un framework web populaire pour Node.js qui simplifie la création d'applications web. Je l'ai choisi en raison de sa simplicité et de sa flexibilité pour la gestion des routes, des middlewares et des requêtes HTTP.

**body-parser** : body-parser est un middleware Express qui facilite l'analyse des données du corps des requêtes HTTP. Il est utile pour extraire les données des formulaires et les données JSON des requêtes entrantes, ce qui facilite leur utilisation dans votre application.

**dotenv** : L'utilisation de dotenv est justifiée pour la gestion des variables d'environnement de l'application. Les variables d'environnement stockées dans un fichier .env améliorent la sécurité en isolant les informations sensibles, telles que les clés API et les secrets, et en permettant la configuration facile de l'application sur différents environnements.

**cors** : J'ai choisi d'utiliser cors pour gérer les problèmes de sécurité liés à la politique de même origine (Same-Origin Policy) dans les requêtes HTTP. Cela me permet d'autoriser ou de restreindre l'accès à votre API depuis des domaines différents en fonction de vos besoins.

**jsonwebtoken** : jsonwebtoken est utilisé pour implémenter l'authentification basée sur les tokens JWT (JSON Web Tokens). Cela permet de sécuriser les endpoints de mon API en générant et en vérifiant des tokens d'authentification.

**mongodb et mongoose** : J'ai choisi MongoDB comme système de gestion de base de données (SGBD) pour stocker les données de votre application. mongoose est une bibliothèque ODM (Object-Document Mapping) qui facilite l'interaction avec MongoDB. Le choix de MongoDB et de mongoose peut être justifié par des besoins spécifiques en matière de bases de données NoSQL et par leur compatibilité avec Node.js.

**mongoose-unique-validator** : Cette dépendance est utile pour ajouter des validations de champ unique à vos modèles MongoDB. Cela garantit que les données stockées dans la base de données sont cohérentes et conformes à vos exigences.

**nodemon** : nodemon est un utilitaire qui surveille les fichiers de votre application et redémarre automatiquement le serveur lorsqu'un changement est détecté. Cela accélère considérablement le processus de développement, en permettant de voir les modifications en temps réel.
