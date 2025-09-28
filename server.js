const express = require('express');
const app = express();
const PORT = 8000;


app.get('/hello', (req, res) => {
  res.json({ message: "Hello, Elif!" }); // Buraya kendi adını yaz
});

app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
