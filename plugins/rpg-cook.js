let { MessageType } = require('@adiwajshing/baileys')
//BY RIZKY ADIβ
//DONT DELETE THIS CREDIT
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || '').toLowerCase()
    let msk= (args[0] || '').toLowerCase()
let cok = `------------γ COOK γ------------\n
Silakan Pilih Apa Yang Akan Dimasak
π ${usedPrefix}ayamb *[ Ayam Bakar ]*
π ${usedPrefix}ayamg *[ Ayam Goreng ]*
π£ ${usedPrefix}leleg *[ Lele Goreng ]*
π£ ${usedPrefix}leleb *[ Lele Bakar ]*
π ${usedPrefix}sapir *[ Sapi Rebus ]*
π ${usedPrefix}ssapi *[ Steak Daging Sapi]*

Cara Memasak:
${usedPrefix + command } sapir
Cara Memakan:
${usedPrefix}eat ayamg
`

try {
       if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'ayamb':
            if (global.db.data.users[m.sender].ayam >= count * 1) {
                           global.db.data.users[m.sender].ayam >= count * 1
                            global.db.data.users[m.sender].ayam -= count * 1
                            global.db.data.users[m.sender].ayamb += count * 1
                            conn.reply(m.chat, `Succes memmasak ${count } ayam bakarπ`, m)
                       } else conn.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
break

                  case 'sapir':
            if (global.db.data.users[m.sender].ayam >= count * 1) {
                            global.db.data.users[m.sender].sapi >= count * 1
                            global.db.data.users[m.sender].sapi -= count * 1
                            global.db.data.users[m.sender].sapir += count * 1
                            conn.reply(m.chat, `Succes memmasak ${ count } Rendang π`, m)
                       } else conn.reply(m.chat, `hewan yg kamu dapatkan tidak cukup untuk dimasak`, m)
break
                   case 'ayamg':
            if (global.db.data.users[m.sender].ayam >= count * 1) {
                           global.db.data.users[m.sender].ayam >= count * 1
                            global.db.data.users[m.sender].ayam -= count * 1
                            global.db.data.users[m.sender].ayamg += count * 1
                            conn.reply(m.chat, `Succes memmasak ${ count } ayam gorengπ`, m)
                       } else conn.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
break
                        case 'leleg':
            if (global.db.data.users[m.sender].lele >= count * 1) {
                          global.db.data.users[m.sender].lele >= count * 1
                            global.db.data.users[m.sender].lele -= count * 1
                            global.db.data.users[m.sender].leleg += count * 1
                            conn.reply(m.chat, `Succes memmasak ${ count } lele gorengπ€`, m)
                       } else conn.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
break
                        case 'leleb':
            if (global.db.data.users[m.sender].lele >= count * 1) {
                            global.db.data.users[m.sender].lele >= count * 1///DONT DELETE THIS
                            global.db.data.users[m.sender].lele -= count * 1
                            global.db.data.users[m.sender].leleb += count * 1
                            conn.reply(m.chat, `Succes memmasak ${ count } lele bakarπ`, m)
                       } else conn.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
break
             case 'ssapi':
            if (global.db.data.users[m.sender].sapi >= count * 1) {
                            global.db.data.users[m.sender].sapi >= count * 1///DONT DELETE THIS
                            global.db.data.users[m.sender].sapi -= count * 1
                            global.db.data.users[m.sender].ssapi += count * 1
                            conn.reply(m.chat, `Succes memmasak ${ count } steak sapi`, m)
                       } else conn.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
break
                default:
                    return conn.sendBut( m.chat, cok, `π― ${wm}`, `Makan`, `.eat ayamb 1`)
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Sepertinya ada yg eror,coba laporin ke owner deh`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['masak <masakan> <args>', 'cook <cook> <args>']
handler.tags = ['rpg']

handler.command = /^(masak|cook)$/i
module.exports = handler

let wm = global.wm
