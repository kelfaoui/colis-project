const express = require('express');
const api = express.Router();

var session = require('express-session')

//importation  de la fonction a partir du fichier model
const login = require('../model/Login');
const Client = require('../model/Client');




		///// recuperer toutes les livraisons

		api.get('/get_all_livraison',function (req,res){

			Client.get_all_livraison(function (err,result){
 
				 if (err) console.log(err)
 
				 let dataSent = {
				 data: result
			 }
			
			 res.status(200).send(dataSent)
 
	 })
 });

api.post("/add_livreur",function(req,res){

	let input =req.body;

	let {nom,username,role,userprenom,region,password,sexe,tel,salaire} =input;

	Client.add_livreur(nom,username,role,userprenom,region,password,sexe,tel,salaire,function(err,data){
		if (err) console.log(err)

		res.status(200).json(data);
	})
	
});

api.post("/form_add_livraison",function(req,res){

	let input =req.body;

	let {username,userprenom,region,adresse,poids,date,type,nature,sens,montant,id_login} =input;

	Client.form_add_livraison(username,userprenom,region,adresse,poids,date,type,nature,sens,montant,id_login,function(err,data){
		if (err) console.log(err)

		res.status(200).json(data);
	})
	
});


// recuperer tout les livraison lié a une région dont un responsable est chargé de cette derniere
api.post('/all_livraison_region',function (req,res){

	let input =req.body;
	
	let {region} =input;

	Client.all_livraison_region(region,function (err,result){
			if (err) console.log(err)


			let dataSent = {
			data: result
		}
		
		res.status(200).send(dataSent)

})
});

// recuperer les commandes d'un seule clients

// recuperer tout les livraison lié a une région dont un responsable est chargé de cette derniere
api.post('/commandes_client',function (req,res){

	let input =req.body;
	
	let {id_login} =input;

	Client.commandes_client(id_login,function (err,result){
			if (err) console.log(err)
			let dataSent = {
			data: result
		}
		
		res.status(200).send(dataSent)

})
});


api.post("/login",function(req,res){

	let input =req.body;

	let {username,password} =input;

	login.login(username,password,function(err,data){
		if (err) console.log(err)


			if(data.length>0)
			{
				// regarder le role 
					console.log(data)
							//verification du role utilisateur cas admin
									if (data[0].role === "admin")
									{
										var rol=1; 
									}
									//verification du role utilisateur csa dsasi
									if (data[0].role === "client")
									{
										var rol=2;
									}
									if (data[0].role === "livreur")
									{
										var rol=3;
									}
				let obj = {
              	err: err,
              	data: 1,
              	role: rol,
				region : data[0].region,
				id_login : data[0].id_login

              	// on peut envoyer ce qu'on veut
	          	}
				
	          	res.status(200).json(obj);
			}
			else
			{
				let obj = {
              	err: err,
              	data: 0,
              	// on peut envoyer ce qu'on veut
	          	}
	          	res.status(400).json(obj);
			}
	})
	
})

module.exports = api;