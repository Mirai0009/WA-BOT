import fetch from 'node-fetch';

let handler = async(m, { conn }) => {
const pan = ['rikagusriani', 'santuy', 'ukhty', 'bocil', 'gheayubi', 'euni']
const asu = pan[Math.floor(Math.random() * pan.length)]
const asupan = await fetch(API('btc', `/api/asupan/${asu}`, { apikey: btc }));     
  await conn.sendFile(m.chat, await asupan.buffer(), 'asupan.mp4', '', m)
}
handler.help = ['asupan']
handler.tags = ['fun']
handler.command = /^asupan$/i
handler.owner = false
handler.premium = false
handler.group = false
handler.private = false
export default handler