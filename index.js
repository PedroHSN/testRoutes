const express = require('express');
const app = express();
const aluno = require("./routes/aluno")



app.use(express.urlencoded());

app.use("/aluno", aluno);

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(3000, () => {
  console.log('Server rodando...')
});
