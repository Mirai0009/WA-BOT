/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281944303681', 'NANS OFFC', true],
  ['6281944303681']
] // Nomor Owner

global.mods = ['6281944303681'] 
global.prems = ['6281944303681', '6281944303681']

// apikey
global.btc = 'rc7U7qAF'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.botcahx.live. contohnya global.btc = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'RpijsLHr',
  'https://api.botcahx.live': 'rc7U7qAF'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  btc: 'https://api.botcahx.live'
}

// Watermark
global.nama = 'Mirai' // nama owner
global.nomor = '6281944303681' // nomor owner
global.nans = 'Mirai Bot MD' // nama bot 
global.thumb = 'https://telegra.ph/file/2968043b974e1eaebca88.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com' // link group yang ada di menu

// Sticker wm
global.packname = 'Created By' 
global.author = 'Mirai Bot MD' 
global.fgig = 'https://www.instagram.com/mirai' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/mirai0009' // bebas tapi jangan kosong
global.fgyt = 'https://youtube.com/@mirai2708?si=hUOV9DFxf3h1vkii' // bebas tapi jangan kosong
global.fgpyp = 'https://nansoffc.my.id' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '6281944303681'
global.qris = 'https://i.ibb.co/xGC5Y7j/20230712-173348.jpg'
global.web = 'https://youtube.com/@mirai2708?si=hUOV9DFxf3h1vkii'
global.email = 'sagirisagiriizumi@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})