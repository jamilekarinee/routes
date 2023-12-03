var express = require('express');
var router = express.Router(); 
let db = require('../utils/db');

/* listar FILMES */ 
router.get('/listar', function(req, res ){
  let cmd = "SELECT id_filme, nome_filme, nome_produtora, horas_filme , nome_genero ";
  cmd = cmd + "FROM tb_filme " ;
  cmd = cmd + "INNER JOIN tb_produtora "; 
  cmd = cmd + "ON tb_produtora.Id_Produtora = tb_filme.Id_Produtora "; 
  cmd = cmd + "INNER JOIN tb_genero "; 
  cmd = cmd + "ON tb_genero.Id_Genero = tb_filme.Id_Genero "; 
  cmd = cmd + "ORDER BY id_filme; "; 
  db.query(cmd, [], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.render('filmes_lista', {resultado: listagem}); 
  })
});

router.get('/add', function(req, res ){ /* post vai incluir algo */ 
    res.render('filmes_add', {resultado: {}}); 
});

/* adicionar FILMES */
router.post('/add', function(req, res ){
  let cmd = 'INSERT INTO tb_filme (nome_filme, id_produtora, horas_filme, id_genero) VALUES (?, ?, ?, ?)'
  let nome      = req.body.nome; 
  let produtora = req.body.produtora; 
  let horas     = req.body.horas; 
  let genero    = req.body.genero; 
  db.query(cmd, [nome, produtora, horas, genero], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.redirect('/filmes/listar'); 
  })
});

module.exports = router; 
