# Test_Nodejs

Livello avanzato

1 - git clone https://github.com/yefouearmelle/Test_Nodejs.git

dal terminal

>>>npm install

>>>npm run start

2 -  Installare MongoDB dal link https://nodejs.org/en/download/package-manager/


3-  Dal Promt dei comandi

    creare la cartella che si vuole usare come database

    >>> mongod --dbpath 'directorie della cartella creata'

    es: mongod --dbpath C:\Users\admin\userdb

    da qua si vede il localhost e la port del database mongod

    Aprire un secondo terminal dal Promt dei comandi

    >>>mongo

    poi usare il database appena creato userdb  

    >>shows dbs
    per verificare se è stato creato
    
4- Aprire il progetto con http://localhost:3000/users 

 si vede un array vuoto

 per vedere i dati che ci sono nel data base, bisognerebbe usare mongodb compass dove inserire localhost e la port del database oppure Postman con la GET









