var express = require('express');
var router = express.Router(); 
let db = require('../utils/db');

/* listar GENEROS */ 
router.get('/listar', function(req, res){
  let cmd = 'SELECT id_genero, nome_genero FROM tb_genero ORDER BY id_genero; '; 
  db.query(cmd, [], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.render('generos_lista', {resultado: listagem}); 
  })
  });


/* listar GENEROS - select */ 
  router.get('/listagem', function(req, res ){
    let cmd = "SELECT id_genero, nome_genero FROM tb_genero ORDER BY id_genero;"; 
    db.query(cmd, [], function(erro, listagem){
      if(erro){
        res.send(erro); 
      } 
      res.json({resultado: listagem}); 
    })
  });

/* adicionar GENEROS */
router.get('/add', function(req, res ){ /* post vai incluir algo */ 
  res.render('generos', {resultado: {}}); 
});

/* adicionar GENEROS */
router.post('/add', function(req, res ){
  let cmd = 'INSERT INTO tb_genero (nome_genero) VALUES (?)'
  let nome      = req.body.nome; 
  db.query(cmd, [nome], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.redirect('/generos/listar');
  })
});

module.exports = router;   