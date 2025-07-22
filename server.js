const express = require("express");
const carRoutes = require("./routes/carRoutes");
const {logger} = require("./middlewares/logger");

// EXPRESS KURULUM

// 1) express fonksiyonunu çağırarak sunucu örneği al
const app = express();

// 2) (isteğe bağlı) portu ayrı bir değişkende tut
const PORT = 3000;

// ---------------------------------

// Middleware(ara yazılım) => backende gelen istekle döndürülen cevabın arasında çalışan işlemler

app.use(express.json());

app.use(logger);

// ---------------------------------

// 3) Router ı çek ve rotaları dinlemesini sağla

app.use(carRoutes);

// 4) aldığımız sunucu örneğini .listen fonksiyonu kullanarak ayağa kaldır
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunu dinlemeye başladı.`);
});
