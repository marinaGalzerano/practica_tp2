var express = require('express');
var router = express.Router();

/**
 * NO MODIFICAR AQUI
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * MODIFICAR AQUI (Consigna 1)
 */
router.get('/texts', function(req, res, next) {
  /**
   * La funcion render devuelve el formulario de la carpeta utils/formulario.ejs
   * Aqui solo debes enviar los errores cuando haya
   */
  res.render('formulario', { errors: [] });
});

module.exports = router;
