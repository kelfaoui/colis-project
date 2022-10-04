// mysql
const  mysql=require('mysql');
//connexion BDD /* une seule fois uniquement ) *************************/

const connection =mysql.createConnection(
{
	host:'localhost',
	user:'root',
	password:'0000',
	database:'colis'
});

connection.connect(); 

exports.db=connection;

//remarque on doit mettre le resultat de la connexion par une variable.