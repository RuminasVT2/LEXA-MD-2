//=============『 Utama 』================== //
global.owner = ['6281347927862','6282253479547','6285159258830'] 
global.mods = ['6281347927862','6282253479547','6285159258830'] 
global.prems = ['6281347927862','6282253479547','6285159258830'] 

//=============『 Info Owner 』============== //
global.nameowner = '⌬ Clara-DV'
global.numberowner = '6281347927862'
global.instagram = 'https://instagram.com/katyushaclara'
global.github = 'https://github.com/'
global.dana = '082253479547'
global.pulsa = '082253479547'
global.gopay = '082253479547'

//=============『 Info Bot 』=================//
global.namebot = '⌬ LEXA-MD'
global.gc = 'https://chat.whatsapp.com/Jzd9DEVB5nODtNBk1VCNrV'
global.web = 'https://instagram.com/katyushaclara' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '◩─────〔 *SEWA*〕──────◩\n1 Bulan = 12.000\n2 Minggu = 7.000\n1 Minggu = 5.000\n◩────────────────────◩'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://telegra.ph/file/42f6da98e7fac8be363eb.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/2625af86c7d3902adcecd.jpg' //ini juga ganti 
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '⌬ LEXA-MD'
global.watermark = wm
global.wm2 = '╼┅━━┅╾「 ⌬ LEXA-MD 」╼┅━━┅╾'
global.wm3 = '⌬ LEXA-MD'
global.htki = '╼┅━━┅╾『' 
global.htka = '』╼┅━━┅╾'
global.media = 'https://telegra.ph/file/0750bd40c3f29f504c8e2.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '*Memuat Data📂*\n*■□□□□□□□□□ 10%*'
global.eror = '*[❗] Servers Error*'
global.benar = '*「✅」BENAR*\n'
global.salah = '*「❌」SALAH*\n'
global.stiker_wait = '*[⏳]  Stickers In Progress*'
global.packname = '⌬ LEXA-MD'
global.author = '6282253479547'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Papah-Chan',
}

//=============『 RPG GAMES 』================== //
global.multiplier = 38 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
