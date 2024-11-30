var express = require("express");
var router = express.Router();
const utils = require("./../utils/utils.js");
const validaciones = require("./../utils/validaciones.js");

/**
 * NO MODIFICAR AQUI
 */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/**
 * MODIFICAR AQUI (Consigna 1)
 */
router.get("/texts", function (req, res, next) {
  /**
   * La funcion render devuelve el formulario de la carpeta utils/formulario.ejs
   * Aqui solo debes enviar los errores cuando haya
   */
  res.render("formulario", { errores: [] });
});

router.post("/texts", function (req, res, next) {
  const text = req.body.text;
  const errores = [];

  if (!text || text.trim().length === 0) {
    errores.push("El texto no puede estar vacío.");
  }
  if (!validaciones.noSuperaCaracter(text)) {
    errores.push("El texto no supera los caracteres esperados");
  }
  if (!validaciones.contieneMinimoCaracter(text)) {
    errores.push(
      "El texto debe contener al menos 10 palabras y 100 caracteres en las primeras 10 palabras."
    );
  }

  if (!validaciones.noSuperaCaracter(text)) {
    errores.push("El texto no puede superar los 10,000 caracteres.");
  }

  if (errores.length > 0) {
    return res.render("formulario", { errores: errores });
    console.error(errores);
  } else {
    let id = utils.save(text);
    res.send({ id: id });
  }
});

module.exports = router;
