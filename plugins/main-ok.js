let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/dfcbf97e58267bfdc0e1e.png', m, { packname: "⌬ Lexa Bot", author: "6282253479547" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
