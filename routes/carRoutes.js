const express = require("express");
const {
  getAllCars,
  createCar,
  getSingleCar,
  deleteCar,
  updateCar,
} = require("../controllers");
const idControl = require("../middlewares/idControl");

// 1) Bütün kodlar anasayfada kalmasın diye endpointleri/routerları ayrı bir dosyaya taşımak için bir router örneği alıyoruz, sonrasında isteklerimizi bu routera atılan istekler olarak belirliyoruz.

const router = express.Router();

// routerları/endpoiintleri tanımla

// ----------------------------------------------
// /api/cars tarafına istek atıldıysa
router
  .route("/api/cars")

  // atılan istek GET isteği ise
  .get(getAllCars)

  // atılan istek POST isteği ise
  .post(createCar);

// ----------------------------------------------

// api/cars tarafına :id parametresi ile istek atıldıysa

router
  .route("/api/cars/:id")
  .get(idControl, getSingleCar)
  .patch(idControl, updateCar)
  .delete(idControl, deleteCar);

// server.js e souterı tanıtmak için export ediyoruz.
module.exports = router;
