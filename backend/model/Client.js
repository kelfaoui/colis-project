	//on appelle la connexion a la base de données.
	const bdd = require('./database');




	// ajout livraison client 
	let form_add_livraison = function (username,userprenom,region,adresse,poids,date,type,nature,sens,montant,id_login,callback){

		
		let sql="insert into livraison (nom_distinataire,prenom_destinataire,region,adresse_destinataire,poids_colis,date_livraison,type_livraison,nature_livraison,sensibilite_livraison,montant,id_login) VALUES ?";

		let data_insert=[username,userprenom,region,adresse,poids,date,type,nature,sens,montant,id_login];


		bdd.db.query(sql,[[data_insert]],function(err,result,fields){
			if (err) throw err;

			callback(err,result)
		});
	}


	// ajout  livreur cote admin 
	let add_livreur = function (nom,username,role,userprenom,region,password,sexe,tel,salaire,callback){


		let sql="insert into login (nom,username,role,prenom,region,password,sexe,telephone,salaire) VALUES ?";

		let data_insert=[nom,username,role,userprenom,region,password,sexe,tel,salaire];


		bdd.db.query(sql,[[data_insert]],function(err,result,fields){
			if (err) throw err;

			callback(err,result)
		});
	}


    // recuperer tout les livraison d'une regison specéfique liée a un livreur responsable de sa région
    let all_livraison_region = function (region,callback){

		let sql=`SELECT * 
		         FROM livraison
		         WHERE region ="${region}"`;

				 bdd.db.query(sql,function (err,result,fields){

					if(err) console.log('error : ',err);
			
					callback(err,result)
			
					});
	}


	// recuperer les commande d'un seule client
    let commandes_client = function (id_login,callback){

		let sql=`SELECT * 
		         FROM livraison
		         WHERE id_login ="${id_login}"`;

				 bdd.db.query(sql,function (err,result,fields){

					if(err) console.log('error : ',err);
			
					callback(err,result)
			
					});
	}
	

	// recuperer tous les livraison faites en details:
	let get_all_livraison = function (callback){

		let sql = `SELECT * FROM livraison`;
	
		bdd.db.query(sql,null,function (err,result,fields){
	
			if(err) console.log('error : ',err);
	
			callback(err,result)
	
			});
		}


exports.form_add_livraison=form_add_livraison;

exports.add_livreur=add_livreur;

exports.get_all_livraison=get_all_livraison;

exports.all_livraison_region=all_livraison_region;

exports.commandes_client=commandes_client;