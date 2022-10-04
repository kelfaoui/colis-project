//on appelle la connexion a la base de données.
const bdd = require('./database');


let login = function (username,password,callback){

	
	let sql = `SELECT username,password,role,region,id_login FROM login WHERE username="${username}" AND password="${password}" `;

	bdd.db.query(sql,function(err,result,fields){
		if (err) throw err;

		callback(err,result)
	});
}


exports.login=login;//verification mdp

 	

