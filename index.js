const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Aternos 7/24 Uptime")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})
var mineflayer = require('mineflayer');
var pass = "12345"; //Authme plugini þifresi (Plugin yoksa silmeyin)
var ayar = {
  host: "sunucuip", //Sunucunuzun ipsi
  port: 25565, //Değiştirme
  username: "bot1", //Sunucuya Gircek Olan Bot
  version: false //Değiştirme

};

var bot = mineflayer.createBot(ayar);


bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  function intervalFunc() {
    bot.setControlState('forward', true)
  }
  setInterval(intervalFunc, 7000);
  console.log('Sunucuya Giriş Yapıldı!');
  bot.chat('/login ' + pass);
});

bindEvents(bot);
function bindEvents(bot) {

  bot.on('error', function(err) {
    console.log("Bir Hata Oluştu!");
  });

  bot.on('end', function() {
    console.log("Bot sunucudan atıldı!");
    setTimeout(relog, 5000);
  });

  function relog() {
    console.log("Sunucuya tekrardan bağlanılıyor");
    bot = mineflayer.createBot(ayar);

    bot.on('chat', function(username, message) {
      if (username === bot.username) return;
      console.log("Bot tekrardan sunucuya Giriş yaptı!");
      bot.chat('/login ' + pass);
    });


    bindEvents(bot);
  }
}
