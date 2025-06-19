const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Ganti dengan URL WebApp kamu (misalnya dari Vercel)
const WEBAPP_URL = "https://you-tube-ten-rouge.vercel.app";

bot.command("start", (ctx) => {
  ctx.reply("Selamat datang! Klik tombol di bawah untuk buka WebApp:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🌐 Buka WebApp",
            web_app: { url: WEBAPP_URL },
          },
        ],
      ],
    },
  });
});

bot.launch();
console.log("Bot aktif 🚀");
const express = require('express');
const app = express();
app.get("/", (req, res) => res.send("Bot is running"));
app.listen(3000, () => console.log("Ping server ready"));