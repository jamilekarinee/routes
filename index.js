var express = require('express');
var router = express.Router(); 
let db = require('../utils/db');


/*
router.get('/edit/:id', function(req, res ){
  let id = req.params.id; 
  let cmd = "SELECT id_produtora, nome_produtora, endereco_produtora FROM tb_produtora WHERE id_produtora = ?;";           /* ADD Produtoras */ 
  /*db.query(cmd, [id], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.render('produtoras_add', {resultado: listagem[0]}); 
  })
});*/


/* vai do \cadastro_de_filmes para o filmes.ejs */
router.get('/cadastro_de_filmes', function(req, res){
  res.render('filmes');                                           /* FILMES */ 
});
/* vai do \cadastro_de_cinemas para o cinemas.ejs */
router.get('/cadastro_de_cinemas', function(req, res){
  res.render('cinemas');                                           /* CINEMAS */ 
}); 
/* vai do \cadastro_de_produtoras para o produtoras.ejs */
router.get('/cadastro_de_produtoras', function(req, res){
  res.render('produtoras');                                        /* PRODUTORAS */ 
}); 
/* vai do \cadastro_de_generos para o generos.ejs */
router.get('/cadastro_de_generos', function(req, res){
  res.render('generos');                                           /* GÊNEROS */ 
}); 


module.exports = router;
