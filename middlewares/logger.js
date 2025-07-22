exports.logger = (req, res, next) => {
  console.log(
    ` \n
    İSTEK GELDİ ✅ \n
    METHOD: ${req.method} \n
    URL: ${req.url}\n
    `
  );

  // Middleware' e manuel olarak bir sonraki fonksiyona geçebilirsin dememiz gerekiyor. Çünkü bunu demezsek issteğimiz middleware'de takılı kalır ve cevap döndüremeyiz.

  next();
};
