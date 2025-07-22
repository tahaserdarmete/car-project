const fs = require("fs");

let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);

module.exports = (req, res, next) => {
  // isteğin id sine ait arabayı bul
  const searchedCar = cars.find((car) => car.id === req.params.id);

  // Eleman bulunamadıysa hata döndür
  if (!searchedCar) {
    return res.status(404).send({
      success: false,
      message: "Gönderdiğiniz ID' ye ait araba bulunamamdı.",
    });
  }

  // Sonraki adımlarda çalışacak olan fonksiyonlar, middlewarelar ve requestler bu middleware' de bulduğumuz arabaya erişebilsin diye bulduğumuz arabayı isteğe ekliyoruz.
  req.car = searchedCar;

  // bir sonraki adıma geç
  next();
};
