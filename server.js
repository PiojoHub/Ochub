const express = require("express")
const server = express()

server.all("/", (req, res) => {
  res.send("24/7 ACTIVADO ✅!")
})

function keepAlive() {
  server.listen(4902, () => {
    console.log("El servidor 24/7 está activado!")
  })
}

module.exports = keepAlive