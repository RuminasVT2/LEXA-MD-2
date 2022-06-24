const xpperlimit = 1000 
let handler = async (m, { conn, command, args }) => {
  let ftroli = {
    key : {
    remoteJid: '6283136505591-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'Purchase Transaction Limit', 
    orderTitle: `Clara`,
    thumbnail: 'https://telegra.ph/file/5ecbec3e82e247671a18e.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `*「 SUCCESS 」*\n\nBerhasil Membeli ${count} Limit\n🛒Harga ${xpperlimit * count} Money💵`, ftroli) 
  } else conn.reply(m.chat, `Money Anda Tidak Mencukupi Untuk Membeli ${count} Limit\nAnda Bisa Mendapatkan Limit Melalui RPG & GAME`, ftroli) 
}
handler.help = ['buy<jumlah limit>', 'buy <jumlah limit>', 'buyall']
handler.tags = ['xp']
handler.command = /^buylimit([0-9]+)|buylimit|buyalllimit$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler