var express = require('express');
var router = express.Router(); 
let db = require('../utils/db');

/* listar PRODUTORAS */ 
router.get('/listar', function(req, res){
    let cmd = 'SELECT id_produtora, nome_produtora, endereco_produtora FROM tb_produtora ORDER BY id_produtora; '; 
    db.query(cmd, [], function(erro, listagem){
      if(erro){
        res.send(erro); 
      } 
      res.render('produtoras_lista', {resultado: listagem}); 
    })
    });


/* listar PRODUTORAS - select */ 
router.get('/listagem', function(req, res){
    let cmd = 'SELECT id_produtora, nome_produtora, endereco_produtora FROM tb_produtora ORDER BY id_produtora; '; 
    db.query(cmd, [], function(erro, listagem){
      if(erro){
        res.send(erro); 
      } 
      res.json({resultado: listagem}); 
    })
  });

/* adicionar PRODUTORAS */
router.get('/add', function(req, res ){ /* post vai incluir algo */ 
res.render('produtoras', {resultado: {}}); 
});

/* adicionar PRODUTORAS */
router.post('/add', function(req, res ){
  let cmd = 'INSERT INTO tb_produtora (nome_produtora, endereco_produtora) VALUES (?, ?)'
  let nome      = req.body.nome; 
  let endereco  = req.body.endereco; 
  db.query(cmd, [nome, endereco], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.redirect('/produtoras/listar'); 
  })
});

module.exports = router;   