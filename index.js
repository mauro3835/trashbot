
/********** MÓDULOS NPM **********/
const fs = require('fs');
const imageToBase64 = require('image-to-base64');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const request = require('request')
const fetc = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const http = require('http');
const util = require('util');
const yts = require('yt-search')
const fetch = require('node-fetch')
const encodeUrl = require('encodeurl')
const googleImage = require('g-i-s')
const os = require('os');
const ggs = require('google-it')
const hx = require("hxz-api");

/********** ARQUIVOS **********/
const Exif = require('./base de dados/data/exif');
const exif = new Exif();
const { addMetadata } = require('./base de dados/lib/exif.js')
const { webp2gifFile } = require("./base de dados/lib/gif.js")
const { fetchJson } = require('./base de dados/lib/fetcher');
const { help } = require('./base de dados/database/help/help')
const { linguagem } = require('./base de dados/datauser/mess')
const { lirikLagu } = require('./base de dados/lib/lirik.js')
const {convertSticker} = require("./base de dados/lib/swm.js") 
const { mediafireDl } = require('./base de dados/lib/mediafire.js')
const {dafontDown,dafontSearch } = require('./base de dados/lib/dafont')
const totalhit = JSON.parse(fs.readFileSync('./base de dados/lib/totalcmd.json'))

/********** ARQUIVOS NA NUVEM **********/
let setiker = JSON.parse(fs.readFileSync('./base de dados/database/temp/stik.json'))
let videonye = JSON.parse(fs.readFileSync('./base de dados/database/temp/vid.json'))
let audionye = JSON.parse(fs.readFileSync('./base de dados/database/temp/vn.json'))
let imagenye = JSON.parse(fs.readFileSync('./base de dados/database/temp/image.json'))
let sotoy = JSON.parse(fs.readFileSync('./base de dados/data/sotoy.json'))
let daily = JSON.parse(fs.readFileSync('./base de dados/data/diario.json'))
let prem = JSON.parse(fs.readFileSync('./base de dados/datauser/premium.json'));
let uang = JSON.parse(fs.readFileSync('./base de dados/datauser/uang.json'));
let ban = JSON.parse(fs.readFileSync('./base de dados/datauser/banned.json'));
let _level = JSON.parse(fs.readFileSync('./base de dados/datauser/level.json'));
let _registered = JSON.parse(fs.readFileSync('./base de dados/datauser/registered.json'));
let welcome = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/welcome.json'));
let antiflod = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/_antiflod.json'));
let viewchat = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/viewchat.json'));
let _leveling = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/leveling.json'));
let antilink = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/antilink.json'));
let antifaker = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/antifaker.json'));
let palavrão = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/palavrão.json'));
let autconversa = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/autconversa.json'));
let palavra = JSON.parse(fs.readFileSync('./base de dados/lib/palavras.json'))
let _informe = JSON.parse(fs.readFileSync('./base de dados/lib/informe.json'));
let _solicitar = JSON.parse(fs.readFileSync('./base de dados/lib/solicitar.json'));
let scommand = JSON.parse(fs.readFileSync('./base de dados/lib/scommand.json'))
img2 = fs.readFileSync("./base de dados/lib/bot/fotos/tobi_lolizit.jpg");

/********** CONFIGURAÇÕES **********/
const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, emoji_bot, SeuNome, OwnerNumber, NomeDoBot} = infos
 
macarrão = 'Ikyy69' //Pra qm quiser 😁

/********** CONST, (N MEXA AQUI) **********/
const blocked = []; 
aaa = 'on'
cdd = "480000" 
crtt = "Jogo da velha" 
baterai = 'Cargando...'
charging = 'Cargando...'
emoji_bot = "🖤🥀"
const limitawal = 30

//_NUMERO DO DONO DO BOT

/********** VCARD DO DONO **********/
const vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `FN:Mauu-moder\n`
+ `ORG:trah-bot;\n` 
+ `TEL;type=CELL;type=VOICE;waid=5493813959749:+54 9 381 395-9749\n` 
+ `END:VCARD`

/********** CONST TIC-TAC-TOE **********/
const tictactoe = JSON.parse(fs.readFileSync('./base de dados/ttt/TTTconfig/tictcotacto.json'));
const { ttthelp } = require('./base de dados/ttt/TTTconfig/ttthelp');
const { tttme } = require('./base de dados/ttt/TTTconfig/tttme');
var tttset = require('./base de dados/ttt/TTTconfig/tttset.json');
var esp = require('./base de dados/ttt/TTTconfig/tttframe.json');

/********** WHATSAPP CONEXÃO **********/
const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, GroupSettingChange, MessageOptions, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, waChatKey, mentionedJid, processTime, ChatModification } = require('@adiwajshing/baileys');
const simple = require('./base de dados/lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)

/********** CORES **********/
const { color, bgcolor } = require('./base de dados/lib/color');

/********** ANTI FLOD **********/
const { isFiltered, addFilter } = require('./base de dados/lib/antispam')

/********** LIMIT TTT **********/
const { addLimit, getLimit } = require('./base de dados/lib/limit.js')

/********** FUCTION PLAY **********/
const { y2mateA, y2mateV } = require('./base de dados/lib/y2mate.js')

/********** CONSTS **********/
const { erroCmd, erroOwner, ts, semPremium} = require('./base de dados/lib/bot/arquivos/respon');

/********** FUNÇÕES **********/
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, banner2, start, info, success, close, log } = require('./base de dados/lib/functions');

/********** FUCTION LEVEL **********/
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./base de dados/lib/leveling.js') 

/********** FUCTION TTT **********/
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./base de dados/lib/tictactoe.js')

/********** FUCTION REGISTRO **********/
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./base de dados/lib/register.js')

/********** FUCTION CASH **********/
const _cashB = JSON.parse(fs.readFileSync('./base de dados/lib/cash_.json'))

/********** FUCTION CASH **********/
const cashLoja = (userid, amount) => {
let position = false
Object.keys(_cashB).forEach((i) => {
if (_cashB[i].id === userid) {
position = i
}
})
if (position !== false) {
_cashB[position].cash -= amount
fs.writeFileSync('./base de dados/lib/cash_.json', JSON.stringify(_cashB))
}
}

/********** FUCTION CASH **********/
const bayarLimit = (sender, amount) => {
let position = false
Object.keys(_cashB).forEach((i) => {
if (_cashB[i].id === sender) {
position = i
}
})
if (position !== false) {
_cashB[position].cash -= amount
fs.writeFileSync('./base de dados/lib/cash_.json', JSON.stringify(_cashB))
}
}

 /********** FUCTION CASH **********/
const requestCash = (userid) => {
 let position = false
Object.keys(_cashB).forEach((i) => {
if (_cashB[i].id == userid) {
position = i
}
})
if (position !== false) {
_cashB[position].cash += 1
fs.writeFileSync('./base de dados/lib/cash_.json', JSON.stringify(_cashB))
}
}

/********** FUCTION DINHEIRO **********/
const addATM = (sender, pushname) => {
const obj = {id: sender, nome: pushname, uang : 0}
uang.push(obj)
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}

/********** FUCTION DINHEIRO **********/
const getNameDinheiro = (sender) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].nome
}
}

/********** FUCTION DINHEIRO **********/
const addKoinUser = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}
}
   
/********** FUCTION DINHEIRO **********/
const checkATMuser = (sender) => {  
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].uang
}
}

/********** FUCTION DINHEIRO **********/
const confirmATM = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}
}

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
if (
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
) {
return true
} else {
return false
}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
if (
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = () => {
if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
return true
} else {
return false
}
}

const IA = () => {
if (WinnerX() || WinnerO() || Tie()) {
tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
tttset.reActivate1 = "off"
IAmove1()
//JOGADAS PROGRAMADAS ABAIXO
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "??" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "??" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "??" && esp.a3 == "??" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
//PRIORIZAR CANTOS E CENTRO
tttset.reActivate1 = "off"
while (tttset.reActivate3 == "on") {
priorityC()
}
tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "HARD" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//HARD
tttset.reActivate1 = "off"
IAmove1()
} else if (tttset.tttdifficulty == "NORMAL" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="??"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//NORMAL
tttset.reActivate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1()
} else {
while (tttset.reActivate2 == "on") {
IAalter()
}
}
tttset.reActivate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
}
break
}
}
}

const IAmove1 = () => {
//JOGADA PARA VITÓRIA
if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
esp.a1 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
esp.b1 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
esp.a1 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
esp.a2 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
esp.a1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
esp.a3 = "⭕"
//JOGADA PARA BLOQUEIO
} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
esp.a1 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
esp.b1 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
esp.a1 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
esp.a2 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
esp.a1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
esp.a3 = "⭕"
}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate2 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate2 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate2 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate2 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate2 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate2 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate2 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate2 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate2 = "off"
esp.c3 = "⭕"
}
break
}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (esp.a1 == "🔲") {
tttset.reActivate3 = "off"
esp.a1 = "⭕"
}
break
case 1 :
if (esp.a3 == "🔲") {
tttset.reActivate3 = "off"
esp.a3 = "⭕"
}
break
case 2 :
if (esp.b2 == "🔲") {
tttset.reActivate3 = "off"
esp.b2 = "⭕"
}
break
case 3 :
if (esp.c1 == "🔲") {
tttset.reActivate3 = "off"
esp.c1 = "⭕"
}
break
case 4 :
if (esp.c3 == "??") {
tttset.reActivate3 = "off"
esp.c3 = "⭕"
}
break
}
}

/********** FUCTION TEMPORIZADO **********/ 
function temporizado(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} minutos ${pad(seconds)} Segundos`
}

/********** CONEXÃO DO QR CODE **********/
async function starts() {
const tobi = new WAConnection()
tobi.logger.level = 'warn'
console.log(banner.string)
console.log(banner2.string)
tobi.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('escaneie o código qr'))
})
fs.existsSync('./qr.json') && tobi.loadAuthInfo('./qr.json')
tobi.on('connecting', () => {
start('2', ' ')
})
tobi.on('open', () => {
success('2', "Lolizita-BOT Conectada")
})

await tobi.connect({ timeoutMs: 2400 * 1000 });
fs.writeFileSync('./qr.json',JSON.stringify(tobi.base64EncodedAuthInfo(), null, "\t"));

/********** WELCOME (BEM VINDO) **********/
var ase = new Date();
var tempoByTobi = ase.getHours();
switch(tempoByTobi){
case 0: tempoByTobi = `Boa noite`; break;
case 1: tempoByTobi = `Boa noite`; break;
case 2: tempoByTobi = `Boa noite`; break;
case 3: tempoByTobi = `Bom Dia`; break;
case 4: tempoByTobi = `Bom Dia`; break;
case 5: tempoByTobi = `Bom Dia`; break;
case 6: tempoByTobi = `Bom Dia`; break;
case 7: tempoByTobi = `Bom Dia`; break;
case 8: tempoByTobi = `Bom Dia`; break;
case 9: tempoByTobi = `Bom Dia`; break;
case 10: tempoByTobi = `Bom Dia`; break;
case 11: tempoByTobi = `Boa tarde`; break;
case 12: tempoByTobi = `Boa tarde`; break;
case 13: tempoByTobi = `Boa tarde`; break;
case 14: tempoByTobi = `Boa tarde`; break;
case 15: tempoByTobi = `Boa tarde`; break;
case 16: tempoByTobi = `Boa tarde`; break;
case 17: tempoByTobi = `Boa tarde`; break;
case 18: tempoByTobi = `Boa noite`; break;
case 19: tempoByTobi = `Boa noite`; break;
case 20: tempoByTobi = `Boa noite`; break;
case 21: tempoByTobi = `Boa noite`; break;
case 22: tempoByTobi = `Boa noite`; break;
case 23: tempoByTobi = `Boa noite`; break;
}
var tempoByTobi = '' + tempoByTobi;

/********** WELCOME (BEM VINDO) **********/
tobi.on('group-participants-update', async (anu) => {
if (antifaker.includes(anu.jid)) {
const mdata = await tobi.groupMetadata(anu.jid)
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(54)) {
tobi.sendMessage(mdata.id, 'Los numeros fake no estan permitidos aqui️️', MessageType.text)							
setTimeout(async function () {
console.log(color('[','white'), color('!','red'), color(']','white'), color('Banindo O Número Fake...','red'))
tobi.groupRemove(mdata.id, [num])
}, 5000)
}
}
}		
  
if (!welcome.includes(anu.jid)) return
try {
const mdata = await tobi.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {
num = anu.participants[0]
try {
ppimg = await tobi.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
mett = ["1", "2", "3"] 
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
teks = `Hi @${num.split('@')[0]}, Bienvenid@ al grupo <3, *por favor lee las reglas del grupo para evitar baneos*`
let buff = await getBuffer(ppimg)
tobi.sendMessage(mdata.id, buff, MessageType.image, {thumbnail:null, caption: teks})
setTimeout( () => {
result = fs.readFileSync(`./base de dados/database/figurinhas/welcomeByTobi1.webp`)
tobi.sendMessage(mdata.id, result, MessageType.sticker)
}, 1000)
} else if (res == "2") {
res = mett[Math.floor(Math.random() * mett.length)]
teks = `Hi @${num.split('@')[0]}, Bienvenid@ al grupo <3, *por favor lee las reglas del grupo para evitar baneos*`
result = fs.readFileSync(`./base de dados/lib/bot/fotos/welcomeByTobi.jpeg`)
tobi.sendMessage(mdata.id, result, MessageType.image, {thumbnail:null, caption: teks})
setTimeout( () => {
tobi.sendMessage(mdata.id, `Fala alguma coisa, @${num.split('@')[0]}`, MessageType.text)
}, 1000)
} else if (res == "3") {
res = mett[Math.floor(Math.random() * mett.length)]
teks = `Hi @${num.split('@')[0]}, Bienvenid@ al grupo <3, *por favor lee las reglas del grupo para evitar baneos*`

fotosAnime = ["1", "2", "3", "4", "5"]
ramdomRes = fotosAnime[Math.floor(Math.random() * fotosAnime.length)]
result = fs.readFileSync(`./base de dados/lib/bot/fotos/animeByTobi` + ramdomRes + `.png`)
tobi.sendMessage(mdata.id, result, MessageType.image, {thumbnail:null, caption: teks})
setTimeout( () => {
tobi.sendMessage(mdata.id, `Bienvenid@ <3, @${num.split('@')[0]}`, MessageType.text)
}, 1000)
}
 //ENTRADA FIM

} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppimg = await tobi.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
mett = ["1", "2"] 
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
teks = `@${num.split('@')[0]}, Fue expulsado, un impostor restante`
result = fs.readFileSync(`./src/welcometeste1.jpeg`)
tobi.sendMessage(mdata.id, result, MessageType.image, {thumbnail:null, caption: teks})
} else if (res == "2") {
mett = ["1", "2"]
res = mett[Math.floor(Math.random() * mett.length)]
teks = ` @${num.split('@')[0]} Salio del grupo... bye bye👋`
let buff = await getBuffer(ppimg)
tobi.sendMessage(mdata.id, buff, MessageType.image, {thumbnail:null, caption: teks})
}
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

tobi.on('group-update', async (anu) => {
falfa = {key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${NomeDoBot}`}}}
const grupoAbertoByTobi = {text: 'oi', "forwardingScore": 1000000000, "externalAdReply": {"title": `「 *❗GRUPO ABERTO❗* 」`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": img2}}
const grupoFechadoByTobi = {text: 'oi', "forwardingScore": 1000000000, "externalAdReply": {"title": `「 *❗GRUPO FECHADO❗* 」`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": img2}}
const alteraçãoDaDescrição = {text: 'oi', "forwardingScore": 1000000000, "externalAdReply": {"title": `「 *❗DESCRIÇÃO ALTERADA❗* 」`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": img2}}
metdata = await tobi.groupMetadata(anu.jid)

/********** FUNCTION GRUPO ABERTO **********/
if(anu.announce == 'false'){
teks = `◤*ɢʀᴜᴘᴏ ᴀʙɪᴇʀᴛᴏ* ◢\n\n_Eʟ ɢʀᴜᴘᴏ ғᴜᴇ ᴀʙɪᴇʀᴛᴏ ᴘᴏʀ ᴇʟ ᴀᴅᴍ_\n_Aʜᴏʀᴀ ᴛᴏᴅᴏs ʟᴏs ᴍɪᴇᴍʙʀᴏs ᴘᴜᴇᴅᴇɴ ʜᴀʙʟᴀʀ <3_`
tobi.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: grupoAbertoByTobi})
}

/********** FUNCTION GRUPO FECHADO **********/
else if(anu.announce == 'true'){
teks = `◤*ɢʀᴜᴘᴏ ᴄᴇʀʀᴀᴅᴏ* ◢\n\n_Eʟ ɢʀᴜᴘᴏ ᴅᴇ ᴄᴇʀʀᴏ ᴘᴏʀ ᴇʟ ᴀᴅᴍ_\n_Aʜᴏʀᴀ sᴏʟᴏ ʟᴏs ᴀᴅᴍɪɴs ᴘᴜᴇᴅᴇɴ ʜᴀʙʟᴀʀ :)_`
tobi.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: grupoFechadoByTobi})
console.log(anu)
}

/********** FUNCTION DESCRIÇÃO **********/
else if(!anu.desc == ''){
teks = `◤*ᴅᴇsᴄʀɪᴘᴄɪᴏɴ ᴅᴇʟ ɢʀᴜᴘᴏ ᴄᴀᴍʙɪᴀᴅᴀ* ◢\n\nLᴀ ᴅᴇsᴄʀɪᴘᴄɪᴏɴ ᴄᴀᴍʙɪᴏ, ᴇʟ ᴀᴅᴍɪɴ wa.me/${anu.descOwner.split('@')[0]} ʟᴀ ᴄᴀᴍʙɪᴏ\n• Nᴜᴇᴠᴀ ᴅᴇsᴄʀɪᴘᴄɪᴏɴ ᴅᴇʟ ɢʀᴜᴘᴏ : \n${anu.desc}`
tobi.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: alteraçãoDaDescrição})
console.log(anu)
}
})
  
/********** FUCTION ANTI CALL **********/
tobi.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LIGAÇÃO DETECTADA LIGAÇÕES = BLOCK \x1b[1;37m]')
tobi.sendMessage(callerId, `${emoji_bot} Ligações = block`, MessageType.text)
setTimeout(async() => {
await tobi.blockUser(callerId, "add")
}, 3000)
})

/********** FUCTION BATERIA **********/
tobi.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
})
global.p
global.batrei = global.batrei ? global.batrei : []
tobi.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})

/********** FUCTION BATERIA **********/
tobi.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
var baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(color('Bᴀᴛᴇʀɪᴀ 📲: ' + batterylevel+'%', "green"))
})

const getCmd = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return scommand[position].chats
}
}

/************* LINGUAGEM ************/
tobi.on('chat-update', async (mek) => {
  try {
  if (!mek.hasNewMessage) return
  mek = mek.messages.all()[0]
  if (!mek.message) return
  if (mek.key && mek.key.remoteJid == 'status@broadcast') return
  m = simple.smsg(tobi, mek)
  if (mek.key.fromMe) return 
  global.p
  global.blocked

/************** HORAS ************/
  const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
  const speedB = moment.tz('America/Sao_Paulo').format('ss')
  const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  const data = moment.tz('Asia/Jakarta').format('DD/MM')
  const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
  const waktu = moment.tz('Asia/Jakarta').format('HHmmss')
  const time3 = moment().tz('America/Sao_Paulo').format('HH:mm')

/************** TYPE DOS CONSOLE ************/
  const content = JSON.stringify(mek.message)
  const from = mek.key.remoteJid
  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
  const type = Object.keys(mek.message)[0]

/************** BUDY DO AUTO RESPONDER ************/
  body = (type === 'conversation' && mek.message.conversation.startsWith(p)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(p) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(p) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(p) ? mek.message.extendedTextMessage.text : ''
  budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
  selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
  const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
  
/************** CONST DE STRING ************/
  const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const arg = budy.slice(comando.length + 2, budy.length)
  const isCmd = body.startsWith(p)
  const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
  var totalchat = await tobi.chats.all()
  const botNumber = tobi.user.jid
  const q = args.join(' ')
  const me = tobi.user
  const tescuk = ["0@s.whatsapp.net"]

/************** LINGUAGEM GRUPO ************/
  const isGroup = from.endsWith('@g.us')
  const senderr = isGroup ? mek.participant : mek.key.remoteJid
  const sender = mek.key.fromMe ? tobi.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
  const jid = senderr
  const groupMetadata = isGroup ? await tobi.groupMetadata(from) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const groupId = isGroup ? groupMetadata.jid : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
  const groupDesc = isGroup ? groupMetadata.desc : ''
  const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
  const isGroupAdmins = groupAdmins.includes(sender) || false
  const groupOwner = isGroup ? groupMetadata.owner : ''
  const ownerNumber = [`${OwnerNumber}@s.whatsapp.net`] 
  const isOwner = ownerNumber.includes(sender)
  const isBanned = ban.includes(sender) 
  const bater = global.batrei[global.batrei.length - 1]
  const desc = isGroup ? groupMetadata.desc : ''
  const nãoMexaAquiSeuPreto = botNumber
  const numberBot = [`${nãoMexaAquiSeuPreto}@s.whatsapp.net`] 
  const isBotk = numberBot.includes(sender)
  
  /************** VERIFICADO CONST ************/
  const dfrply = fs.readFileSync('./base de dados/lib/bot/fotos/tobi_lolizit.jpg')

/************** PUSHNAME (NOME) ************/
  const conts = mek.key.fromMe ? tobi.user.jid : tobi.contacts[sender] || { notify: jid.replace(/@.+/, '') }
  let pushname = mek.key.fromMe ? tobi.user.name : conts.notify || conts.vname || conts.name || '-'

/************** CONST ANTILINK ************/
  var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
  const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

/************** RECURSO DE SEGURANÇA ************/
  const isWelcome = isGroup ? welcome.includes(from) : true 
  const isLevelingOn = isGroup ? _leveling.includes(from) : true 
  const isAntiLink = isGroup ? antilink.includes(from) : true 
  const isAntifaker = isGroup ? antifaker.includes(from) : true 
  const isPalavrão = isGroup ? palavrão.includes(from) : false
  const isAutconversa = isGroup ? autconversa.includes(from) : false
  const isAntiflod = isGroup ? antiflod.includes(from) : true
  const isViewchat = isGroup ? viewchat.includes(from) : true

/************** REGISTRO ************/
  const isRegistered = checkRegisteredUser(sender) 
  const isUser = checkRegisteredUser(sender) //Use

/************** PREMIUM ************/
  const isPremium= prem.includes(sender)	 

/************** EM JAPONÊS 🙂 ************/
var ase = new Date();
var bolo_de_carne = ase.getHours();
switch(bolo_de_carne){
case 0: bolo_de_carne = `Konbanwa ${pushname}🌛`; break;
case 1: bolo_de_carne = `Konbanwa ${pushname}🌛`; break;
case 2: bolo_de_carne = `Konbanwa ${pushname}🌛`; break;
case 3: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 4: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 5: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 6: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 7: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 8: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 9: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 10: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 11: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 12: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 13: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 14: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 15: bolo_de_carne = `Konnichiwa ${pushname}🌹`; break;
case 16: bolo_de_carne = `Konnichiwa ${pushname}🌹`; break;
case 17: bolo_de_carne = `Konnichiwa ${pushname}🌹`; break;
case 18: bolo_de_carne = `Konnichiwa ${pushname}??`; break;
case 19: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 20: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 21: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 22: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 23: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
}
var bolo_de_carne = '' + bolo_de_carne;

/********** OUTRAS CONST **********/
const sendMediaURL = async(to, url, text="", mids=[]) =>{
  if(mids.length > 0){
  text = normalizeMention(to, text, mids)
  }
  const fn = Date.now() / 10000;
  const filename = fn.toString()
  let mime = ""
  var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
  mime = res.headers['content-type']
  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
 });
 };
}

const sendStickerFromUrl = async(to, url) => {
  var names = Date.now() / 10000;
  var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
  };
  download(url, './sticker' + names + '.png', async function () {
  console.log('pronto');
  let filess = './sticker' + names + '.png'
  let asw = './sticker' + names + '.webp'
  exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
  let media = fs.readFileSync(asw)
  tobi.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
  fs.unlinkSync(filess)
  fs.unlinkSync(asw)
  });
 });
} 

const sendSticker = (from, filename, mek) => {
tobi.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
}

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
  for (let i = 0, n = str.length; i < n; i++) {
  if (str.charCodeAt(i) > 255) {
  return true;
 }
 }
 return false;
}

/********** FUCTION FOTO **********/
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
tobi.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
tobi.sendMessage(from, hasil, type, options).catch(e => {
tobi.sendMessage(from, { url : link }, type, options).catch(e => {
enviar('_❎ Eʀʀᴏʀ ᴀʟ ᴅᴇsᴄᴀʀɢᴀʀ ʏ ᴇɴᴠɪᴀʀ ᴍᴇᴅɪᴏs_')
})
})
})
})
}

/********** ENVIAR MSG **********/
const msg = (teks) => {tobi.sendMessage(from, teks, text, {contextInfo: {text: 'hi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${bolo_de_carne}`,"previewType": "PHOTO","thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg","thumbnail": img2,}, mentionedJid:[sender]}, quoted : mek})
}

const webPage = (teks) => {tobi.sendMessage(from, teks, text, {contextInfo: {text: 'hi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${bolo_de_carne}`,"previewType": "PHOTO","thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg","thumbnail": img2,}, mentionedJid:[sender]}, quoted : mek})
}

const enviar = (teks) => {
tobi.sendMessage(from, teks, text,  {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
}

const fotothumb = {text: 'oi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${bolo_de_carne}`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": img2, mentionedJid:[sender]}
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

/********** COSTUM DO TTT **********/
const costum = (pesan, tipe, target, target2) => {
 tobi.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

/********** SENDMESS DO BC **********/
const sendMess = (hehe, teks) => {
tobi.sendMessage(hehe, teks, text)
}

/********** RAMDOM **********/
const math = (teks) => {
return Math.floor(teks)
} 

/********** MECIONADOR **********/
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? tobi.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tobi.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
}

/********** TIME **********/
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

/********** PERDA DE XP **********/
randomPerda = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(randomPerda)

/********** GANHO EM XP **********/
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(randomTTTXP)

/********** MENSAGENS DO BOT **********/
var replys = [`🖤🥀 Espere unos segundos....\n si no funciona usa el mismo comando de nuevo`]
var replys_loli= replys[Math.floor(Math.random() * replys.length)] 

/********** MESS && PTBR **********/
mess = {
espere: `${replys_loli}`,
success: '🖤🥀 Exito senpai',
error: {
stick: '❌  Error',
},
only: {
tobireplayoff: `El comando ${comando} se desactivó con exito`,
tobireplay: `El comando ${comando} se activó con exito`,
tobantilink: `Tienes permitido pasar links por ser adm! ._.`,
}
}

/********** FUNCTION CASH **********/
const cashCheck = (sender) => {
let found = false
for (let lmt of _cashB) {
if (lmt.id === sender) {
limitCounts = limitawal - lmt.cash
if (limitCounts <= 0) return tobi.sendMessage(from,`Su solicitacion de cash se acabo\n\n_Note : el cash se puede consegur por ${p}buycash o subiendo de nivel_`, text, {quoted: mek})
tobi.sendMessage(from, linguagem.cashConta(limitCounts), text, {quoted: mek})
found = true 
}
}
if (found === false) {
let obj = {id: sender, cash: 0}
_cashB.push(obj)
fs.writeFileSync('./base de dados/lib/cash_.json', JSON.stringify(_cashB))
tobi.sendMessage(from, linguagem.cashConta(limitCounts), text, {quoted: mek})
}
}

/********** FUCTION PATENTE **********/
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {
patt = 'Bronze  I🥉'
} else if (nivelAtual === 2) {
patt = 'Bronze II🥉'
} else if (nivelAtual === 3) {
patt = 'Bronze  III🥉'
} else if (nivelAtual === 4) {
patt = 'Bronze  IV🥉'
} else if (nivelAtual === 5) {
patt = 'Bronze  V🥉'
} else if (nivelAtual === 6) {
patt = 'Prata I🥈'
} else if (nivelAtual === 7) {
patt = 'Prata II🥈'
} else if (nivelAtual === 8) {
patt = 'Prata III🥈'
} else if (nivelAtual === 9) {
patt = 'Prata IV🥈'
} else if (nivelAtual === 10) {
patt = 'Prata V🥈'
} else if (nivelAtual === 11) {
patt = 'Oro I🥇'
} else if (nivelAtual === 12) {
patt = 'Oro II🥇'
} else if (nivelAtual === 13) {
patt = 'Oro III🥇'
} else if (nivelAtual === 14) {
patt = 'Oro IV🥇'
} else if (nivelAtual === 15) {
patt = 'Oro V🥇'
} else if (nivelAtual === 16) {
patt = 'Platino I🛡️'
} else if (nivelAtual === 17) {
patt = 'Platino II🛡️'
} else if (nivelAtual === 18) {
patt = 'Platino III🛡️'
} else if (nivelAtual === 19) {
patt = 'Platino IV🛡️'
} else if (nivelAtual === 20) {
patt = 'Platino V'
} else if (nivelAtual === 21) {
patt = 'Diamante I 💎'
} else if (nivelAtual === 22) {
patt = 'Diamante II 💎'
} else if (nivelAtual === 23) {
patt = 'Diamante III 💎'
} else if (nivelAtual === 24) {
patt = 'Diamante IV 💎'
} else if (nivelAtual === 25) {
patt = 'Diamante V 💎'
} else if (nivelAtual === 26) {
patt = 'Heróico I 🦅'
} else if (nivelAtual === 27) {
patt = 'Heróico II 🦅'
} else if (nivelAtual === 28) {
patt = 'Heróico III 🦅'
} else if (nivelAtual === 29) {
patt = 'Heróico IV 🦅'
} else if (nivelAtual === 30) {
patt = 'Heróico V 🦅'
} else if (nivelAtual === 31) {
patt = 'Gran maestro I 👑'
} else if (nivelAtual === 32) {
patt = 'Gran maestro II 👑'
} else if (nivelAtual === 33) {
patt = 'Gran maestro III 👑'
} else if (nivelAtual === 34) {
patt = 'Gran maestro IV 👑'
} else if (nivelAtual === 35) {
patt = 'Gran maestro V 👑'
} else if (nivelAtual === 36) {
patt = 'Dios del caos I🕴'
} else if (nivelAtual === 37) {
patt = 'Dios del caos II🕴'
} else if (nivelAtual === 38) {
patt = 'Dios del caos III🕴'
} else if (nivelAtual === 39) {
patt = 'Dios del caos IV🕴'
} else if (nivelAtual === 40) {
patt = 'Dios del caos V🕴'
} else if (nivelAtual === 41) {
patt = 'Creador de mundos I 🛐'
} else if (nivelAtual === 42) {
patt = 'Creador de mundos II 🛐'
} else if (nivelAtual === 43) {   	
patt = 'Creador de mundos III 🛐'
} else if (nivelAtual === 44) {
patt = 'Creador de mundos IV 🛐'
} else if (nivelAtual >= 45) {
patt = 'Leyenda del universo 🔰'
} 

/********** FUCTION TIPO DE USUÁRIO **********/
if (groupAdmins) {
prema = 'Premiun'
}
if (isOwner) {
prema = `Creador del bot`
} else {
var prema = 'Miembro comun'
}

/********** FUCTION BODIA **********/
var ase = new Date();
var tempo = ase.getHours();
switch(tempo){
case 0: tempo = `Boa noite ${pushname}🌛`; break;
case 1: tempo = `Boa noite ${pushname}🌛`; break;
case 2: tempo = `Boa noite ${pushname}🌛`; break;
case 3: tempo = `Bom Dia ${pushname}✨`; break;
case 4: tempo = `Bom Dia ${pushname}✨`; break;
case 5: tempo = `Bom Dia ${pushname}✨`; break;
case 6: tempo = `Bom Dia ${pushname}✨`; break;
case 7: tempo = `Bom Dia ${pushname}✨`; break;
case 8: tempo = `Bom Dia ${pushname}✨`; break;
case 9: tempo = `Bom Dia ${pushname}✨`; break;
case 10: tempo = `Bom Dia ${pushname}✨`; break;
case 11: tempo = `Boa tarde ${pushname}🔥`; break;
case 12: tempo = `Boa tarde ${pushname}🔥`; break;
case 13: tempo = `Boa tarde ${pushname}🔥`; break;
case 14: tempo = `Boa tarde ${pushname}🔥`; break;
case 15: tempo = `Boa tarde ${pushname}🌹`; break;
case 16: tempo = `Boa tarde ${pushname}🌹`; break;
case 17: tempo = `Boa tarde ${pushname}🌹`; break;
case 18: tempo = `Boa noite ${pushname}🌛`; break;
case 19: tempo = `Boa noite ${pushname}🌛`; break;
case 20: tempo = `Boa noite ${pushname}🌛`; break;
case 21: tempo = `Boa noite ${pushname}🌛`; break;
case 22: tempo = `Boa noite ${pushname}🌛`; break;
case 23: tempo = `Boa noite ${pushname}🌛`; break;
}
var tempo = '' + tempo;

/********** FUCTION LEVELING **********/
var up_porcenntagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const level_porcen = getLevelingLevel(sender)
if (level_porcen <= 10) {
up_porcenntagem = `*[█▒▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 20) {
up_porcenntagem = `*[██▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 30) {
up_porcenntagem = `*[███▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 40) {
up_porcenntagem = `*[████▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 50) {
up_porcenntagem = `*[█████▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 60) {
up_porcenntagem = `*[██████▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 70) {
up_porcenntagem = `*[███████▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 80) {
up_porcenntagem = `*[████████▒▒] ${level_porcen}%*`
} else if (level_porcen <= 90) {
up_porcenntagem = `*[█████████▒] ${level_porcen}%*`
} else if (level_porcen <= 100) {
up_porcenntagem = `*[██████████] ${level_porcen}%*`
} 		

/********** FUCTION BATERIA **********/
var porcentagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const bateria = (`${baterai}`)
if (bateria <= 10) {
porcentagem = `*[█▒▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 20) {
porcentagem = `*[██▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 30) {
porcentagem = `*[███▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 40) {
porcentagem = `*[████▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 50) {
porcentagem = `*[█████▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 60) {
porcentagem = `*[██████▒▒▒▒] ${bateria}%*`
} else if (bateria <= 70) {
porcentagem = `*[███████▒▒▒] ${bateria}%*`
} else if (bateria <= 80) {
porcentagem = `*[████████▒▒] ${bateria}%*`
} else if (bateria <= 90) {
porcentagem = `*[█████████▒] ${bateria}%*`
} else if (bateria <= 100) {
porcentagem = `*[██████████] ${bateria}%*`
} 			

/********** FUCTION TEMPO **********/
const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

resposta = {
leveis: "🖤🥀 La nivelación esta desactivada",
}

/********** VERIFICADOS **********/
/** Verificado com o nome bom dia **/
const tob = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${tempo}`}}}

/** Verificado com o nome ohayo **/
const tob1 = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${bolo_de_carne}`}}}

/** Verificado com o nome e foto **/
const tob2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${bolo_de_carne}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;AKAME,;;;\nFN:AKAME,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./base de dados/lib/bot/fotos/tobi_lolizit.jpg`), thumbnail:fs.readFileSync(`./base de dados/lib/bot/fotos/tobi_lolizit.jpg`),sendEphemeral: true}}}

/** Verificado de catálogo com nome **/
const tobCat = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": dfrply}, "title": `${bolo_de_carne}`, "description": `${bolo_de_carne}`, "currencyCode": "USD", "priceAmount1000": "2000", "retailerId": `${bolo_de_carne}`, "productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

/** Verificado de carrinho com nome **/
const tobCarr = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 123, status: 1, surface : 1, message: `${bolo_de_carne}`, orderTitle: `${bolo_de_carne}`, thumbnail: dfrply, sellerJid: '0@s.whatsapp.net' }}}

/** Verificado de localização com nome **/
const tobLoc = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {caption: `${bolo_de_carne}`,jpegThumbnail: dfrply}}}

/** Verificado de video com nome **/
const tobVid = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": {"title": `${bolo_de_carne}`, "h": `${bolo_de_carne}`, 'duration': '99999', 'caption': `${bolo_de_carne}`, 'jpegThumbnail': dfrply}}}

/** Verificado de documento com nome **/
const tobDoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${bolo_de_carne}`, jpegThumbnail: dfrply}}}

/** Verificado de convite com nome **/
const tobCon = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": `${bolo_de_carne}`,"groupName": `${bolo_de_carne}`, "caption": `${bolo_de_carne}`, 'jpegThumbnail': dfrply}}}

/** Verificado de sticker com nome **/
const tobStk = {"key": {"participant": `0@s.whatsapp.net`,"remoteJid": "6289643739077-1613049930@g.us","fromMe": false,"id": "3B64558B07848BD81108C1D14712018E"},"message": {"stickerMessage": {"fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=","pngThumbnail": dfrply,"mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE","fileLength": "60206","firstFrameLength": 3626,"isAnimated": false}},"messageTimestamp": "1614070775","status": "PENDING"}

/** Verificado de gif com nome **/
const tobGif = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title": `${bolo_de_carne}`,"h": `${bolo_de_carne}`,'duration': '99999', 'gifPlayback': 'true', 'caption': `${bolo_de_carne}`,'jpegThumbnail': dfrply}}}

/** Verificado com nome **/
const tobTex = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "extendedTextMessage": {"text": `${bolo_de_carne}`,"title": `${bolo_de_carne}`,'jpegThumbnail': dfrply}}}

/** Verificado de audio com nome **/
const tobAud = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "99999","ptt": "true"}}}

/********** FUNÇÕES APARTI DAQUI **********/
//--- Total comandos 
const cmdadd = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./base de dados/lib/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) cmdadd()
const reqcmd = JSON.parse(fs.readFileSync('./base de dados/lib/totalcmd.json'))[0].totalcmd

//-- Fecha
function fecha(){
myMonths = ["Enero","febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
myDays = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
var tgl = new Date();
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

const stickerAdm = (hehe) => {
anu = fs.readFileSync('./base de dados/database/figurinhas/stickerAdm_sticker.webp')
tobi.sendMessage(hehe, anu, sticker,{
quoted: mek})
}

/********** FUCTION HIDETAG **********/
const hideTag = async function(from, text){
let anu = await tobi.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
tobi.sendMessage(from, text, 'extendedTextMessage', {quoted: mek, contextInfo: {"mentionedJid": ane}})
}  

/********** FUCTION LEVEL XP **********/
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
var requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
var getLevel = getLevelingLevel(sender)
const namelv = checkId
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./base de dados/database/audios/som` + res + `.mp3`)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
bayarLimit(sender, 3)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LEVEL UP \x1b[1;37m]', color(pushname, "yellow"), color('subiu'), color('de', "yellow"), color('level'), color('no', "yellow"), color('grupo:'), color(groupName, "yellow"))
const lvup = { 
text:
`
━┈╼[sᴜʙɪᴏ ᴅᴇ ɴɪᴠᴇʟ]╾┄━                           
  ▻ Nombre : @${namelv.split('@')[0]}
◤━━━━━☆━━━━━◥
┃
┃Xp : ${getLevelingXp(sender)}
┃
┃Nivel : ${getLevel} -> ${getLevelingLevel(sender)}
┃
┃Rango : ${patt}
┃
◣━━━━━━━━━━━◢
`,
contextInfo: {mentionedJid: [namelv]}}
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\nTag: @${namelv.split('@')[0]}\n${up_porcenntagem}`}}}
tobi.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
tobi.sendMessage(from, lvup, text, {quoted: level_quetod})
}
} catch (err) {
console.error(err)
}
}

/********** FUCTION DINHEIRO **********/
if (isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender, pushname)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}

/********** FUCTION CASH **********/
const isLimit = (sender) =>{
if (isOwner) {return false;}
let position = false
for (let i of _cashB) {
if (i.id === sender) {
let limits = i.cash
if (limits >= limitawal) {
position = true
return true
} else {
_cashB
position = true
return false
}
}
}
if (position === false) {
const obj = {id: sender, cash: 1}
_cashB.push(obj)
fs.writeFileSync('./base de dados/lib/cash_.json', JSON.stringify(_cashB))
return false
}
}

/***** FINALIZAR TTT AUTOMATICAMENTE *****/
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
tobi.sendMessage(tttset.local,`❌ SE ACABÓ EL TIEMPO ❌\n\n➣  XP OTENIDO: ${randomEndTTTXP} XP `, text, {quoted: tttset.mentionPlayer})
} else {
tobi.sendMessage(tttset.local,`❌ SE ACABO EL TIEMPO❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

/***** ANTI LINK DE GRUPOS *****/
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar('🧐')
enviar(`*◤ LINK DETECTADO ◢*\n\nNo envies links, perdon pero tendre que eliminarte`)
tobi.groupRemove(from, [sender])
}

/*[--ANTI PALAVRÃO --]*/
if (isGroup && isPalavrão) { 
if (palavra.includes(messagesC)) {
enviar(`Esᴀ ᴘᴀʟᴀʙʀᴀ ᴇsᴛᴀ ᴘʀᴏɪʙɪᴅᴀ ᴇɴ ᴇsᴛᴇ ɢʀᴜᴘᴏ\nᴛᴇɴᴅʀᴇ ǫᴜᴇ ᴇʟɪᴍɪɴᴀʀᴛᴇ ᴇɴ 4 ᴍɪɴ`)
setTimeout( () => { 
tobi.groupRemove(from, [sender]).catch((e)=>{enviar(`*ᴇʀʀᴏʀ : * ${e}`)})
}, 2000)
setTimeout( () => { 
enviar(`Aᴅɪᴄɪᴏɴᴀɴᴅᴏ ${pushname} Nᴏᴠᴀᴍᴇɴᴛᴇ`)
}, 185000) //240000
var addd = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => { 
tobi.groupAdd(from, [addd]).catch((e)=>{enviar(`*ᴇʀʀᴏʀ * ${e}`)})
}, 240000)
setTimeout( () => {
tobi.updatePresence(from, )
enviar("Aᴅᴇᴜsシ︎")
}, 0)
}
}

//ANTI SPAM EU PEGUEI DO ITALU/TIRINGA-BOT
 if (isCmd && isFiltered(from) && !isGroup && isAntiflod) {
console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${comando}`), 'DE:', color(pushname))
const ff = {
text:  `Esᴘᴇʀᴇ ᴜɴ ᴘᴏᴄᴏ  @${sender.split('@')[0]}...\n\nEsᴘᴇʀᴇ 3 sᴇɢᴜɴᴅᴏs ᴘᴀʀᴀ ᴜsᴀʀ ᴏᴛʀᴏ ᴄᴏᴍᴀɴᴅᴏ`,
contextInfo: {
mentionedJid: [sender]
}
}
return enviar(ff)}

if (isCmd && isFiltered(from) && isGroup && isAntiflod) {
console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${comando}`), 'DE:', color(pushname))
const ff1 = {
text:  `Esᴘᴇʀᴇ ᴜɴ ᴘᴏᴄᴏ @${sender.split('@')[0]}...\n\nEsᴘᴇʀᴇ 3 sᴇɢᴜɴᴅᴏs ᴘᴀʀᴀ ᴜsᴀʀ ᴏᴛʀᴏ ᴄᴏᴍᴀɴᴅᴏ`,
contextInfo: {
mentionedJid: [sender]
}
}
return enviar(ff1)}

/********** TIPOS DE MENSAGENS **********/
colors = ['red','white','black','blue','yellow','green']
//_TIPO DE MENSAGEM
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isDocument = type == 'documentMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isDocument) typeMessage = "Document"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const stickerMessage = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const tipoMensagem = type == 'audioMessage' ? 'Audio' : type == 'stickerMessage' ? 'Sticker' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Video' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' : 'Mensagem'
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))
if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color(`${tipoMensagem}`, "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))
if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color(`${tipoMensagem}`, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))

/********** VISUALIZADOR AS MENSAGENS  **********/
tobi.chatRead(from)

/********** USUÁRIO BANIDO **********/
if (isCmd && isBanned) {
enviar(linguagem.ban())
return console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('BAN', "red"), ']', color('Ignorando', "yellow"), 'comando', color('do', "yellow"), color(pushname), 'Horas', color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'))
}

/********** REGISTRO **********/
if (isCmd && !isRegistered) {
let contentt = fs.readFileSync(`./base de dados/lib/bot/fotos/tobi_lolizit.jpg`)
const media = await tobi.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [
{buttonId: 'Rg', buttonText: {displayText: 'ツ Rᴇɢɪsᴛʀᴀʀ'}, type: 1},
]

const btn1 = {
contentText: `_*Nᴇᴄᴇsɪᴛᴀs Rᴇɢɪsᴛʀᴀʀᴛᴇ*_`,
footerText: `Sɪ ɴᴏ ʟᴇ ᴀᴘᴀʀᴇᴄᴇ ᴇʟ ʙᴏᴛᴏɴ ᴅᴇ ᴀʙᴀᴊᴏ ᴇsᴄʀɪʙᴀ :\n "reg" ᴇɴ ᴇʟ ᴄʜᴀᴛ`,
buttons: buttons1,
headerType: 4,
imageMessage: qweriio.message.imageMessage
}
tobi.sendMessage(from,  btn1, MessageType.buttonsMessage, {quoted: mek})
return 
}

/********** LOGIN **********/
if (selectedButton == `Rg`) {
if (isUser) return enviar(`🖤🥀 *Ya esta registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
enviar('✅ Se registro con exito, usa .menu para usar el bot')
try {
var ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
const tekentod = 
`
┏┈━┈━┈━┈━┈━┈━┓
┃
┃༻Iɴғᴏ ᴅᴇʟ ʀᴇɢɪsᴛʀᴏ༺
┃
┃ʜᴏʀᴀ : ${time}
┃
┃ɴᴏᴍʙʀᴇ : ${pushname}
┃
┃ɴᴜᴍᴇʀᴏ : ${sender.split('@')[0]}
┃
┃ɪᴅ : ${serialUser}
┃
┗┈━┈━┈━┈━┈━┈━┛
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                 
} else {
addRegisteredUser(from, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                  
}
}

if ((budy === "reg") || (budy === "Reg") || (budy === "Reg")) {
if (isUser) return enviar(`🖤🥀 *Ya esta registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
enviar('✅ Se registro con exito, usa .menu para usar el bot')
try {
var ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
const tekentod = 
`
┏┈━┈━┈━┈━┈━┈━┓
┃
┃༻Iɴғᴏ ᴅᴇʟ ʀᴇɢɪsᴛʀᴏ༺
┃
┃ʜᴏʀᴀ : ${time}
┃
┃ɴᴏᴍʙʀᴇ : ${pushname}
┃
┃ɴᴜᴍᴇʀᴏ : ${sender.split('@')[0]}
┃
┃ɪᴅ : ${serialUser}
┃
┗┈━┈━┈━┈━┈━┈━┛
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {thumbnail: null, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                 
} else {
addRegisteredUser(from, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {thumbnail: null, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                  
}
}

/********** EVAL CMDS **********/
if (budy.startsWith('>')){
if(!isOwner) return
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return enviar(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
enviar(`${e}`)
}
}

if (budy.startsWith('=>')){
if (!isOwner) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return enviar(bang)
}
try {
enviar(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
enviar(String(e))
}
}

if (budy.startsWith(`${p}exec`)){
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return enviar(bang)
}
try {
exc = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
//enviar(JSON.stringify(eval(`;(async () => { ${exc} })()`)))
enviar(util.format(eval(`;(async () => { ${exc} })()`)))
} catch(e){
enviar(String(e))
}
}

/********** COMANDOS SEM PREFIX, BR TOBI **********/
if (isAutconversa) {
if ((budy.match("Pq")) || (budy.match("pq"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/Pq_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("hentai")) || (budy.match("Hentai"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/hentai_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Analise")) || (budy.match("analise"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/Analise_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Sexo")) || (budy.match("sexo"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/sexo_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Não")) || (budy.match("não"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/sim_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("🤔"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/analise_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("😭"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/chorando_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Mentira")) || (budy.match("mentira"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/verdade_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Bye")) || (budy.match("bye")) || (budy.match("Tchau")) || (budy.match("tchau"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/audios/bye_audio.mp3`)
tobi.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

if ((budy.match("🙈")) || (budy.match("🙉")) || (budy.match("🙊")) || (budy.match("🐵")) || (budy.match("🐒"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/audios/macaco_audio.mp3`)
tobi.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

if ((budy.match(`@${me.jid.split('@')[0]}`))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/tag_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}
}

/********** TODOS OS CMD APARTI DAQUI **********/
switch(comando) {
case 'menu':
case 'ayuda':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
tobi.updatePresence(from, Presence.composing)
uptime = process.uptime()
const checATM = checkATMuser(sender)
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const requireXp = 5 * Math.pow(useLevel, 2) + 50 * useLevel + 100
const chatss = `${totalchat.length}`
const antifaker_by_tobi = isAntifaker ? 'Ativado' : 'Desativado'
const antilink_by_tobi = isAntiLink ? 'Ativado' : 'Desativado'
const welcome_by_tobi = isWelcome ? 'Ativado' : 'Desativado'
const levelingon_by_tobi = isLevelingOn ? 'Ativado' : 'Desativado'
const selfchat_by_tobi = isAutconversa ? 'Ativado' : 'Desativado'
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: help(p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, chatss, antilink_by_tobi, welcome_by_tobi, levelingon_by_tobi, antifaker_by_tobi, selfchat_by_tobi)})
await requestCash(sender)
break

case 'grupo':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) return enviar(linguagem.group())
const total_gp1 = `${totalchat.length}`
const grupo_by_tobi = (linguagem.menu2(pushname, hr, total_gp1, bateria))
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: grupo_by_tobi})
await requestCash(sender)
break

case 'creador':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
tobi.sendMessage(from, 'Eɴᴠɪᴀɴᴅᴏ ᴇʟ ɴᴜᴍᴇʀᴏ ᴅᴇ ᴍɪ ᴄʀᴇᴀᴅᴏʀ...',MessageType.text, { quoted: mek} )
tobi.sendMessage(sender, 'Esᴛᴇ ᴇs ᴇʟ ɴᴜᴍᴇʀᴏ ᴅᴇ ᴍɪ ᴄʀᴇᴀᴅᴏʀ, ᴄᴜᴀʟǫᴜɪᴇʀ ᴄᴏsᴀ ʜᴀʙʟᴇ ᴄᴏɴ ᴇʟ <3',MessageType.text, { quoted: mek} )
tobi.sendMessage(sender, {displayname: "Jeff", vcard: vcard}, MessageType.contact, {quoted: mek})
await requestCash(sender)
break

case 'botar':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot}  Usa : ${p + comando} @${OwnerNumber}`)
if (args[0].startsWith(`@${OwnerNumber}`)) return enviar(`Solo ${OwnerNumber} lo puede usar`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Eliminando a  :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
tobi.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} Alvo removido com sucesso : @${mentioned[0].split('@')[0]}`, mentioned, true)
tobi.groupRemove(from, mentioned)
}
break

case 'add':
try {
if (!isGroup) return enviar("Solo en grupo senpai!")
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return enviar("Solo para admins")  
if (!isBotGroupAdmins) return enviar(`Necesito admin para esto!`)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await tobi.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('Error!')
if(inv[0].code == 403) return enviar('Error, la cuenta desactivo para que todos los agreguen ah grupos')
if(inv[0].code == 408) return enviar('Error, el usuario salio del grupo')
if(inv[0].code == 401) return enviar('Error, el usuario bloqueo al bot')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await tobi.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('Fallo! ')
if(inv[0].code == 403) return enviar('Fallo, la cuenta desactivo para que todos los agreguen ah grupos')
if(inv[0].code == 408) return enviar('Fallo, el usuario salio del grupo')
if(inv[0].code == 401) return enviar('Fallo, el usuario bloqueo al bot')
}
} catch {
return 
}
break

case 'adm+':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} @${OwnerNumber}`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Se agrego a \n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]} como admin\n`
}
mentions(from, mentioned, true)
tobi.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} Ok, Ahora : @${mentioned[0].split('@')[0]} es admin del grupo <3!`, mentioned, true)
tobi.groupMakeAdmin(from, mentioned)
}
break

case 'adm-':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} @${OwnerNumber}`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Se quito a \n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]} como admin\n`
}
mentions(teks, mentioned, true)
tobi.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} Ok, Ahora : @${mentioned[0].split('@')[0]} perdio el admin :/`, mentioned, true)
tobi.groupDemoteAdmin(from, mentioned)
}
break

case 'kick':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque el mensaje asi elimine el participante!')
kick = mek.message.extendedTextMessage.contextInfo.participant
tobi.groupRemove(from, [kick])
enviar('Se elimino con exito')
break

case 'revivir':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque el mensaje asi lo vuelva ah agregar!')
addGay = mek.message.extendedTextMessage.contextInfo.participant
tobi.groupAdd(from, [addGay])
enviar('_Vou tentar adicionar esse macaco_\n\nCaso da erro tente adicionar manualmente!')
break

case 'promote':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque algun mensaje del miembro al que le de admin!')
promoverGay = mek.message.extendedTextMessage.contextInfo.participant
tobi.groupMakeAdmin(from, [promoverGay])
tobizinhokkkk = mek.message.extendedTextMessage.contextInfo.participant
enviar(`Este pro *@${tobizinhokkkk.split('@')[0]}*... ahora es admin`)
break

case 'demote':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque el mensaje de el admin asi ya no lo sea!')
rebaixarGay = mek.message.extendedTextMessage.contextInfo.participant
tobi.groupDemoteAdmin(from, [rebaixarGay])
kapiuugvb = mek.message.extendedTextMessage.contextInfo.participant
enviar(`Este men *@${kapiuugvb.split('@')[0]}*... perdera el admin :)`)
break 

case 'addprem': 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner && !isPremium) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
prem.push(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
susp = `@${mentioned[0].split('@')[0]} fue agregado a los usuarios premiun <3`
mentions(`${susp}`, mentioned, true)   
break

case 'dellprem': 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
let dellprem = body.slice(12)
let positio = prem.indexOf(dellprem)
prem.splice(positio, 1)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
susp = `@${mentioned[0].split('@')[0]} ya no es premiun :/`
mentions(`${susp}`, mentioned, true)   
break

case 'group': //by resen e Tobi
case 'grup':
case 'gp':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Usa : ${p + comando} abrir/cerrar`)
if (args[0].toLowerCase() == 'abrir') { 
enviar(`${emoji_bot} Grupo aberto com sucesso`)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0].toLowerCase() == 'cerrar') {
await tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)
enviar(`${emoji_bot} Grupo fechado com sucesso`)
}
break                  

case 'totag':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
enviar(`${emoji_bot} Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${p + comando}`)
}
break

case 'setnome':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Usa : ${p + comando} [Nuevo nombre del grupo]`)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
tobi.groupUpdateSubject(idgrup, `${body.slice(9)}`)
tobi.sendMessage(from, `${emoji_bot} Nombre del grupo cambiado con exito`, text, {quoted: mek})
await requestCash(sender)
break

case 'setdesk':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Usa : ${p + comando} [Nueva Descripción]`)
tobi.groupUpdateDescription(from, `${body.slice(9)}`)
tobi.sendMessage(from, `${emoji_bot} Descripción cambiada con exito`, text, {quoted: mek})
break

case 'setppgc':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isQuotedImage) return enviar(`${emoji_bot} Usa : ${p + comando} [Marque alguna fto para el nuevo icono del grupo]`)
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const medipp = await tobi.downloadAndSaveMediaMessage(ftgp)
await tobi.updateProfilePicture (from, medipp)
enviar(`${emoji_bot} foto del grupo cambiada con exito`) 
break

case 'delete': 
case 'del':
case 'apagar':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup)return enviar(linguagem.group())
if (!isGroupAdmins)return enviar(linguagem.admin())
try {
tobi.deleteMessage(from, {
id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
enviar(`${emoji_bot} Solo se puede eliminar mensajes mios`)
}
break

case 'marcar':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `${q}\n\n`
for (let mem of groupMembers) {
todos += `⪧ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(' '+todos+' ', members_id, true)
break

case 'info': //by resen e Tobi
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (args.length < 1) return enviar(`${emoji_bot} Usa : ${p + comando} [Grupo o Perfil]`)
if (args[0].toLowerCase() == 'grupo') {
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
ppUrl = await tobi.getProfilePicture(from) 
buffer = await getBuffer(ppUrl)
infoGrupTob = `
*Nombre del Grupo* : ${groupName}
*Creador del Grupo* : @${from.split("-")[0]}
*Membros* : ${groupMembers.length}
*Admin(s)* : ${groupAdmins.length}

>Bienvenida : ${isWelcome ? 'Activado':'Desactivado'}
>AntiLink : ${isAntiLink? 'Activado':'Desactivado'}
>AntiFake : ${isAntifaker? 'Activado':'Desactivado'}
>SelfChat : ${isAutconversa? 'Activado':'Desactivado'}
>Antispam : ${isAntiflod? 'Activado':'Desactivado'}

 Descripción del grupo :
\`\`\`${groupDesc}\`\`\``
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: infoGrupTob})
} else if (args[0].toLowerCase() == 'perfil') {
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender) 
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
const teste64 = sender
const teste65 = await tobi.getStatus(teste64 , MessageType.text)
try {
ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
pf = 
`
┏╾◤ɪɴғᴏ ᴅᴇʟ ᴘᴇʀғɪʟ◢╼╾
┃
┃⋗Nombre : ${pushname}
┃
┃⋗Nivel : ${usLevel}
┃
┃⋗XP : ${usXp}/${requirXp}
┃
┃⋗Rango : ${patt}
┃
┃⋗Link de WA : wa.me/${sender.split("@")[0]}
┃
┃⋗Su info : ${teste65.status}
┃
┗━━━━━━━━━━━━༲࿆༫࿆࿂࿆༗
`
its = await getBuffer (ppimg)
tobi.sendMessage(from, its, image, {quoted: mek, thumbnail:null, caption: pf, contextInfo: {mentionedJid: [sender]}})
}
await requestCash(sender)
break

case 'listadmins': 
case 'listadmin':
case 'adminlist':
case 'listadm':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) return enviar(linguagem.group())
adl = `Lista de administradores del grupo : ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
await requestCash(sender)
break

case 'linkgp': 
case 'link':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Usa : ${p + comando} [Grupo o Pri]`)
if (args[0].toLowerCase() == 'grupo') {
linkgc = await tobi.groupInviteCode(from)
enviar('https://chat.whatsapp.com/'+linkgc)
} else if (args[0].toLowerCase() == 'pri') {
if (isGroup) enviar(`🖤🥀${comando} Enviando a su privado`)
linkgc = await tobi.groupInviteCode(from)
tobi.sendMessage(sender, 'https://chat.whatsapp.com/'+linkgc, MessageType.text)
}
break

case 'hidetag':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})  
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
await requestCash(sender)
break

case 'bienvenida':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`🖤🥀 Use on|off, Ejemplo : ${p + comando} on`)
if (args[0] === 'on') {
if (isWelcome) return enviar('*🖤🥀 Está opción ya estaba activa...*')
welcome.push(from)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = welcome.indexOf(welcome.find((x) => x === from))
if (position === -1) return enviar(`${comando} Ya estaba desactivado antes`)
welcome.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplayoff)
} else {
enviar(`🖤🥀 Como activar|desactivar?, Ejemplo ${p + comando} on`)
}
break

case 'leveling':
case 'nivelacion':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`🖤🥀 Use on|off, Ejemplo ${p}${comando} on`)
if (args[0] === 'on') {
if (isLevelingOn) return enviar('*🖤🥀 Está opción ya estaba activa...*')
_leveling.push(from)
fs.writeFileSync('./base de dados/database/arquivos/leveling.json', JSON.stringify(_leveling))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = _leveling.indexOf(_leveling.find((x) => x === from))
if (position === -1) return enviar(`${comando} ya estaba descativado antes`)
_leveling.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/leveling.json', JSON.stringify(_leveling))
enviar(mess.only.tobireplayoff)
} else {
enviar(`🖤🥀 Usa : on|off, Ejemplo ${p}${comando} on`)
}
break

case 'antilink':
case 'antilinks':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAntiLink) return enviar('*🖤🥀 Está opción ya estaba activa...*')
antilink.push(from)
fs.writeFileSync('./base de dados/database/arquivos/antilink.json', JSON.stringify(antilink))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = antilink.indexOf(antilink.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
antilink.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/antilink.json', JSON.stringify(antilink))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
}
break

case 'antifake':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAntifaker) return enviar('*🖤🥀 Está opción ya estaba activa...*')
antifaker.push(from)
fs.writeFileSync('./base de dados/database/arquivos/antifaker.json', JSON.stringify(antifaker))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = antifaker.indexOf(antifaker.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
antifaker.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/antifaker.json', JSON.stringify(antifaker))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
}
break

case 'autconversa':
case 'selfchat':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAutconversa) return enviar('*🖤🥀 Está opción ya estaba activa...*')
autconversa.push(from)
fs.writeFileSync('./base de dados/database/arquivos/autconversa.json', JSON.stringify(autconversa))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = autconversa.indexOf(autconversa.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
autconversa.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/autconversa.json', JSON.stringify(autconversa))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]on/off, Exemplo ${p + comando} off`) 
}
break

case 'antiflod':
case 'antiflods':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]ativar/desativar, Exemplo ${p}${comando} on`)
if (args[0] === 'on') {
if (isAntiflod) return enviar('*🖤🥀 Está opción ya estaba activa...*')
antiflod.push(from)
fs.writeFileSync('./base de dados/database/arquivos/_antiflod.json', JSON.stringify(antiflod))
enviar(`[❗] Comando ${comando} ativado, Aparti de agora não pode flodar comandos`)
} else if (args[0] === 'off') {
let position = antiflod.indexOf(antiflod.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
antiflod.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/_antiflod.json', JSON.stringify(antiflod))
enviar(`[❗] Comando ${comando} desativado, Aparti de agora pode flodar comandos`)
} else {
enviar(`[❗]ativar/desativar, Exemplo ${p}${comando} ativar`)
}
break

//<~FIM DOS COMANDOS EM GRUPOS

//<~COMEÇO DOS COMANDOS STICKERS
case 'stickers':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
const total_gp2 = `${totalchat.length}`
const figurinhas_by_tobi = (linguagem.figurinhas(pushname, hr, total_gp2, bateria))
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: figurinhas_by_tobi})
await requestCash(sender)
break

case 's':
case 'f':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
case 'sgif':  
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
case 'teste27':  
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const dlfile1 = await tobi.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : ` ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : ` @${pushname}`
var mantap1 = await convertSticker(bas641, `${dua}`, `${satu}`)
var st = new Buffer.from(mantap1, 'base64');
tobi.sendMessage(from, st, sticker, {quoted: mek})
} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media2 = await tobi.downloadAndSaveMediaMessage(encmedia2, `./src/sticker/${sender}`)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${SeuNome}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${NomeDoBot}`
const Nombre2 = `${satu}` 
const author101 = `${dua}`
exif.create(Nombre2, author101, `stickwm_${sender}`)
enviar(mess.espere)
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`❌, En la conversión de  ${type} en sticker`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./src/sticker/stickwm_${sender}.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
if (error) return enviar('error')
sendSticker(from, fs.readFileSync(`./src/sticker/${sender}.webp`), mek)
fs.unlinkSync(media2)
fs.unlinkSync(`./src/sticker/${sender}.webp`)
fs.unlinkSync(`./src/sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./src/sticker/${sender}.webp`)
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
await requestCash(sender)
break

case 'st':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
enviar(linguagem.stick())
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
tobi.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`Fallo en la conversión de  ${tipe} para sticker`)
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
tobi.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
await requestCash(sender)
break

case 'stk':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
tobi.updatePresence(from, Presence.composing)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
enviar(linguagem.stick())
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(linguagem.stick())
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: mek
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(linguagem.stick())
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: mek
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
await requestCash(sender)
break

case 'toimg':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
tobi.updatePresence(from, Presence.composing)
if (!isQuotedSticker) return enviar(`${emoji_bot} usa el comando y marca un sticker`)
enviar(mess.espere)
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medtmg = await tobi.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return enviar(`${emoji_bot} fallo en comvertir el sticker a gif`)
buffer = fs.readFileSync(ran)
tobi.sendMessage(from, buffer, image, {quoted: mek, caption: '✅️'})
fs.unlinkSync(ran)
})
await requestCash(sender)
break

case 'togif':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isQuotedSticker) return enviar(`${emoji_bot} Tienes que marcar un sticker animado`)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await tobi.downloadAndSaveMediaMessage(encmediaaa)
enviar(mess.espere)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
tobi.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break

case 'perrito':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})               
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figupet = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figupet.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Ocurrió un error `)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Y la imagen?')
}
await requestCash(sender)
break

case 'arma':
case 'figuarma':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuarma = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuarma.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuarma1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
exec(`wget ${figuarma1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Ocurrió un error `)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Y la imagen?')
}
await requestCash(sender)
break

case 'triggered':
case 'figuger':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)  
owgi = await tobi.downloadAndSaveMediaMessage(ger)
triggered = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${triggered.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuger1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
exec(`wget ${figuger1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Ocurrió un error `)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Y la imagen?')
}
await requestCash(sender)
break

case 'stickgay':
case 'arcoiris':
case 'figulgbt':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/rainbow?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Ocurrió un error `)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Y la imagen?')
}
await requestCash(sender)
break

case 'wasted':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})              
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuwasted = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuwasted.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuwasted1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
exec(`wget ${figuwasted1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Ocurrió un error `)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Y la imagen?')
}
await requestCash(sender)
break

case 'preso':
case 'figupreso':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
preso = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${preso.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
preso1 = `https://api-exteam.herokuapp.com/api/jail?img=${imgtrg}`
exec(`wget ${preso1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Ocurrió un error`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Y la imagen?')
}
await requestCash(sender)
break

case 'figuinvert':
case 'invertido':
case 'figuinvertida':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuinvertida = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuinvertida.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuinvertida1 = `https://api-exteam.herokuapp.com/api/invert?img=${imgtrg}`
exec(`wget ${figuinvertida1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Ocurrió un error `)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Y la imagen?')
}
await requestCash(sender)
break

case 'sebusca':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Ocurrió un error`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Y la imagen?')
}
await requestCash(sender)
break

case 'attp':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (args.length < 1) return enviar(`Use dessa forma:\nComando: ${p}attp ${SeuNome} gado`)
enviar(mess.espere)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
tobi.sendMessage(from, attp2, sticker, {quoted: mek})
await requestCash(sender)
break

case 'attp1': 
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})  
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
await requestCash(sender)
break	     

case 'attp2':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})  
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)                                
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
await requestCash(sender)
break	

case 'attp3':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})  
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
await requestCash(sender)
break	

case 'attp4':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})  
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
await requestCash(sender)
break	

case 'attp5':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})  
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
await requestCash(sender)
break

case 'attp6':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})  
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
await requestCash(sender)
break	                    

case 'borrosa':
case 'figuborrada':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Ocurrió un error`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Y la imagen?')
}
await requestCash(sender)
break           
//<~FIM DOS COMANDOS DE FIGURINHAS

//<~COMEÇO DOS COMANDOS AUDIOS
case 'descargas':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
const total_gp3 = `${totalchat.length}`
const plars_by_tobi = (linguagem.playrs(pushname, hr, total_gp3, bateria))
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: plars_by_tobi})
await requestCash(sender)
break

case 'play':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (args.length < 1) return enviar('que estas buscando? Recuerda ser específico')
teks = args.join(' ')
enviar(mess.espere)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
enviar('_Error T~T_')
})
let thumbInfo = `
 *-${res.all[0].title}-*
          
          
          
  ├────●───────────┤
00:28ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ${res.all[0].timestamp}

 ◁ㅤㅤㅤㅤㅤ❚❚ㅤㅤㅤㅤㅤㅤ ▷  
  
  
*_Espere unos minutos se, esta enviando....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
enviar('_ᴇʀʀᴏʀ ᴅᴇ ʏ2ᴍᴀᴛᴇ * ɪɴᴛᴇɴᴛᴇ ᴅᴇ ɴᴜᴇᴠᴏ*_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
enviar('_ᴇʀʀᴏʀ : ᴇʟ ᴀʀᴄʜɪᴠᴏ ɴᴏ ᴇxɪsᴛᴇ_')
})
let thumbInfo = `
 *-${res.all[0].title}-*
          
          
          
  ├────●───────────┤
00:28ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ${res.all[0].timestamp}

 ◁ㅤㅤㅤㅤㅤ❚❚ㅤㅤㅤㅤㅤㅤ ▷  
  
  
*_Espere unos minutos se, esta enviando....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
enviar('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break

case 'play1':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})    
if (args.length < 1) return enviar(`Exemplo : ${p + comando} Plutão`)	
enviar(mess.espere)
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${q}`)
lagu = await getBuffer(anu.result.url)		
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
await requestCash(sender)
break

case 'play2':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})  
if (args.length < 1) return enviar('Qual o nome da música?')
enviar(mess.espere)
play_4 = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${q}`)
buffer = await getBuffer(play_4.result.thumb)
lagu = await getBuffer(play_4.result.url)
tobi.sendMessage(from, buffer, image, {quoted: mek, caption: `${play_4.result.title}`})
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
await requestCash(sender)
break

case 'play3':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (args.length < 1) return enviar(`Exemplo : ${p + comando} Plutão`)	
testeki = body.slice(6)
enviar(mess.espere)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${testeki}`)
lagu = await getBuffer(anu.Link_De_Download)
buffer = await getBuffer(anu.Imagem_Do_Video)
testekkzu = `💎 Título: ${anu.Titulo_Encontrado}\n👾Tamanho: ${anu.Tamanho_Do_Video}\n📥 Duração: ${anu.Duracao_Do_Video}\n📝 Link: ${anu.Link_Do_Video}`
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${testekkzu}`})		
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
await requestCash(sender)
break

case 'play4':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (args.length < 1) return enviar(`Exemplo : ${p + comando} Plutão`)	
hay = body.slice(6)
enviar(mess.espere)
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=S38aL2CO2Ez4wZjJWxD2vaJKKrC&q=${hay}`)
lagu = await getBuffer(anu.result.url_audio)
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
await requestCash(sender)
break

case 'play5':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (args.length < 1) return enviar("Cadê o texto vida? kkkkk")
enviar(mess.espere)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${q}`)
lagu = await getBuffer(anu.Link_De_Download)		
kapaTobiAqui = `💎 Título: ${anu.Titulo_Encontrado}\n👾Canal: ${anu.Link_Do_Video}\n📥 Duração: ${anu.Duracao_Do_Video}\n📝 Tamanho: ${anu.Tamanho_Do_Video}`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${kapaTobiAqui}`})
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
await requestCash(sender)
break

case 'playvid':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (args.length < 1) return enviar(`_*Sintaxe incorreta...*_\n\nUse assim: ${p + comando} Moça bonita`)
teks = args.join(' ')
enviar(mess.espere)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
enviar('_[ ! ] Erro ao baixar e enviar mídia_')
})
enviar(`Enviando ${res.all[0].title}....`)
let thumbInfo = `
 *-${res.all[0].title}-*
          
          
          
  ├●───────────────┤
00:02ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ${res.all[0].timestamp}

 ◁ㅤㅤㅤㅤㅤ❚❚ㅤㅤㅤㅤㅤㅤ ▷  
  
  
*_Espere unos minutos se, esta enviando....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateV(res.all[0].url).catch(e => {
enviar('_[ ! ] Erro ao entrar no Y2mate Web *Tente repetir*_')
})
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
}
await requestCash(sender)
break

case 'playvid1':  
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (args.length < 1) return enviar("Cadê o texto vida? kkkkk")
enviar(mess.espere)
playvideoByTobi = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/video?video=${playvideoByTobi}`)   
lagu = await getBuffer(anu.Link_De_Download)
tobi.sendMessage(from, lagu, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
await requestCash(sender)
break

case 'tomp3':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
tobi.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return enviar(`Marque um vídeo com ${p}tomp3`)
enviar(mess.espere)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await tobi.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return enviar('❌falha ao converter video para mp3❌')
buffer = fs.readFileSync(ran)
tobi.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await requestCash(sender)
break

case 'rapido':  
case 'nightcore':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} , Adicionando efeito rápido....`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bmedia = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bmedia} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bmedia)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await requestCash(sender)
break   

case 'devagar': 
case 'slow':
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito devagar....`)
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await tobi.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await requestCash(sender)
break

case 'esquilo':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito esquilo....`)
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await tobi.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await requestCash(sender)
break

case 'gemuk': 
case 'gigante':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito gigante....`)
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await tobi.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await requestCash(sender)
break

case 'fast': 
case 'rapid':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito rapido 3x....`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
amedia = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${amedia} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(amedia)
if (err) return enviar('Erro')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await requestCash(sender)
break

case 'baixo': 
case 'bass':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito baixo 50hz....`) 
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tobi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await requestCash(sender)
break

case 'earrape': 
case 'estourar':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})       
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito estorado....`)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tobi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await requestCash(sender)
break

case 'ytsearch':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (args.length < 1) return enviar(`${emoji_bot} Procure de forma certa!!\nUse ${p + comando} Mc poze`)
const srch = args[0];
try {
var aramas = await yts(srch);
} catch {
return await tobi.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
});
ytresult += `◩ *${NomeDoBot}*`
await tobi.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./base de dados/lib/bot/fotos/logo.jpeg'),quoted: mek, caption: ytresult})
await requestCash(sender)
break

case 'sombrio':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
encmmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mehdia = await tobi.downloadAndSaveMediaMessage(encmmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mehdia} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mehdia)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
await requestCash(sender)
break
//<~FIM DOS COMANDOS DE MUSICAS

//<~COMEÇO DOS COMANDOS DE NUVEM
case 'nube':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
const total_gp4 = `${totalchat.length}`
const nuvem_by_tobi = (linguagem.nuvem(pushname, hr, total_gp4, bateria))
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: nuvem_by_tobi})
await requestCash(sender)
break

case 'liststik':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
teks = `Lista de sticker : \n`
for (let awokwkwk of setiker) {
teks += `⪧ ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*\nUse o comando\n*${p}getstik (nome do pacote)*\nPara pegar adesivos`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
await requestCash(sender)
break

case 'getstik':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
namastc = body.slice(9)
try {
result = fs.readFileSync(`./base de dados/database/temp/stick/${namastc}.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} catch {
enviar('Pacote não registrado')
}
await requestCash(sender)
break

case 'addstik':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isQuotedSticker) return enviar('Responder o adesivo')
if (!isOwner) return enviar(mess.only.ownerB)
svst = body.slice(9)
if (!svst) return enviar('Qual é o nome do adesivo?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await tobi.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./base de dados/database/temp/stick/${svst}.webp`, delb)
fs.writeFileSync('./base de dados/database/temp/stik.json', JSON.stringify(setiker))
tobi.sendMessage(from, `Adicionando adesivo com sucesso\nConferido por ${p}liststik`, MessageType.text, { quoted: mek })
await requestCash(sender)
break

case 'listvn':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
case 'vnlist':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
teks = '*Lista de audio:*\n\n'
for (let awokwkwk of audionye) {
teks += `⪧ ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*\nUse comandos\n*${p}getvn (nome do pacote)*\nPara pegar o audio`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
await requestCash(sender)
break

case 'getvn':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
namastc = body.slice(7)
try {
buffer = fs.readFileSync(`./base de dados/database/temp/audio/${namastc}.mp3`)
tobi.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
} catch {
enviar('Pacote não registrado')
}
await requestCash(sender)
break

case 'addvn':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isQuotedAudio) return enviar('Marque um audio!!!')
if (!isOwner) return enviar(mess.only.ownerB)
svst = body.slice(7)
if (!svst) return enviar('Qual é o nome do audio')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await tobi.downloadMediaMessage(boij)
audionye.push(`${svst}`)
fs.writeFileSync(`./base de dados/database/temp/audio/${svst}.mp3`, delb)
fs.writeFileSync('./base de dados/database/temp/vn.json', JSON.stringify(audionye))
tobi.sendMessage(from, `Sucesso ao adicionar audio\nConferido por ${p}listvn`, MessageType.text, { quoted: mek })
await requestCash(sender)
break

case 'listimg':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
teks = '*Lista Imagem :*\n\n'
for (let awokwkwk of imagenye) {
teks += `⪧ ${awokwkwk}\n`
}
teks += `\n*Total : ${imagenye.length}*\nUse o comando\n*${p}getimg (nome do pacote)*\nPara tirar fotos`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, thumbnail:null, contextInfo: { "mentionedJid": imagenye } })
await requestCash(sender)
break

case 'addimg':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isQuotedImage) return enviar('responder imagem ')
if (!isOwner) return enviar(mess.only.ownerB)
svst = body.slice(8)
if (!svst) return enviar('Qual é o nome da imagem ')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await tobi.downloadMediaMessage(boij)
imagenye.push(`${svst}`)
fs.writeFileSync(`./base de dados/database/temp/foto/${svst}.jpeg`, delb)
fs.writeFileSync('./base de dados/database/temp/image.json', JSON.stringify(imagenye))
tobi.sendMessage(from, `Adicionando Video com Sucesso\nConferido por ${p}listimg`, MessageType.text, { quoted: mek })
await requestCash(sender)
break

case 'getimg':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
namastc = body.slice(8)
try {
buffer = fs.readFileSync(`./base de dados/database/temp/foto/${namastc}.jpeg`)
tobi.sendMessage(from, buffer, image, { quoted: mek, caption: `Resultado do banco de dados : ${namastc}.jpeg` })
} catch {
enviar('Pack tidak terdaftar')
}
await requestCash(sender)
break

case 'listvid':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
teks = '*Lista de Videos :*\n\n'
for (let awokwkwk of videonye) {
teks += `⪧ ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*\nUse o comando\n*${p}getvid (nome do pacote)*\nPara pegar um video`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
await requestCash(sender)
break

case 'addvid':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return enviar(mess.only.ownerB)
if (!isQuotedVideo) return enviar('Marque um video')
svst = body.slice(8)
if (!svst) return enviar('O nome do video')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await tobi.downloadMediaMessage(boij)
videonye.push(`${svst}`)
fs.writeFileSync(`./base de dados/database/temp/vídeo/${svst}.mp4`, delb)
fs.writeFileSync('./base de dados/database/temp/vid.json', JSON.stringify(videonye))
tobi.sendMessage(from, `Sucesso Adicionais Video\nConferido por ${p}listvid`, MessageType.text, { quoted: mek })
await requestCash(sender)
break

case 'getvid':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
namastc = body.slice(8)
try {
buffer = fs.readFileSync(`./base de dados/database/temp/vídeo/${namastc}.mp4`)
tobi.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
} catch {
enviar('Pacote não registrado')
}
await requestCash(sender)
break
//<~FIM DOS COMANDOS DE NUVEM

//<~COMEÇO DOS COMANDOS DE JOGOS
case 'juegos':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
const total_gp5 = `${totalchat.length}`
const jogos_by_tobi = (linguagem.jogos(pushname, hr, total_gp5, bateria))
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: jogos_by_tobi})
await requestCash(sender)
break

case 'otaku':
case 'feo':
case 'gay':
case 'burro':
case 'gordo':
case 'flaco':
case 'cornudo':
case 'bonito':
case 'mujeriego':
case 'goloso':
d = []
teks = `el mas *${comando}* es : `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
break

case 'amongus':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} Fue B O T A D O
                  Queda 1 impostor restante   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
mentions(`${sus}`, mentioned, true)
await requestCash(sender)
break

case 'getn':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque uma mensagem do alvo!')
var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = tobi.contacts[ambl] != undefined ? tobi.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : tobi.contacts[ambl].notify || tobi.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
enviar(sname)
await requestCash(sender)
break

case 'getname':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (args.length < 1) return enviar(`Tag alguém`)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const arroz = tobi.contacts[mentioned] != undefined ? tobi.contacts[mentioned].vname || tobi.contacts[mentioned].notify: undefined
nome = `${arroz}`
tobi.sendMessage(from, nome, text, {quoted: mek})	
await requestCash(sender)
break

case 'dado':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./base de dados/datauser/dados/'+dadu+'.webp')
tobi.sendMessage(from, dador, sticker, {quoted: mek})
await requestCash(sender)
break

case 'tagme':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
const tagme = {text: `@${sender.split("@")[0]} 🧙‍♂️`, contextInfo: {mentionedJid: [sender]}}
tobi.sendMessage(from, tagme, text)
await requestCash(sender)
break

case 'cassino':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
tobi.updatePresence(from, Presence.composing) 
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🍒',
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}
const cassino = `
┏━━━━❪🎰❫━━━━
┣►${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*
`
enviar(cassino)
if (Vitória == "Você ganhou!!!") {
dinherocassino = Math.floor(Math.random() * 14) + 10000
addKoinUser(sender, dinherocassino)
setTimeout( () => {
enviar(`Parabéns você ganhou *${dinherocassino}* dinheiro 💰💎`)
}, 1100)
}
await requestCash(sender)
break

case "ppt": 
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (args.length < 1) return enviar(linguagem.tterro())
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return enviar(linguagem.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do bot"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
enviar(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
enviar(pph)
}
await requestCash(sender)
break

case 'gado':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
enviar(hisil)
await requestCash(sender)
break

case 'sn':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return tobi.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${p}sn O ${SeuNome} é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
enviar(hasil)
await requestCash(sender)
break

case 'chance':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
tobi.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return tobi.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${p}chance do ${SeuNome} ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
tobi.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
await requestCash(sender)
break

case 'ttt':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
const limitrl = getLimit(sender, daily)
if (!isGroup) {
enviar(linguagem.group())
} else if (tttset.tttstatus == "on") {
enviar(`
「❗ESPERE❗ 」

 Alguém já está jogando no momento
 Por favor aguarde 8 minutos`)
} else if (tttset.waitingTime == "on") {
enviar(`
「❗ESPERE 8 MINUTOS❗ 」

Alguém jogou recentemente
Por favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
enviar(`
「❗Defina a dificuldade❗ 」

${p}ttt easy
Dificuldades: easy, normal... 
hard e impossible....`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
enviar(`
「❗ESPERE❗」

Opa, deixe seus amigos jogarem.
também, tente novamente Em 8 minutos.`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`╭◪「❗COMEÇOU❗ 」╰───────────────╮  \n╭───────────────╯\n├❏ O Jogo Começou!!!\n├❏ Modo: ${tttset.tttdifficulty}\n╰───────────────╯`, text, tescuk, crtt)
tobi.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
tobi.sendMessage(from,`Caso não saiba como jogar digite: ${p}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'level':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) return enviar(linguagem.group())
if (!isLevelingOn) return enviar(resposta.leveis)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return enviar(linguagem.levelnol())
var requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
var getLevel = getLevelingLevel(sender)
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\n⪧𝖳𝚊𝚐: @${sender.split('@')[0]}\n${up_porcenntagem}`}}}
tobi.sendMessage(from, leveltab(sender, pushname, userLevel, userXp, patt, getLevel), text, {quoted: level_quetod, contextInfo: {mentionedJid: [sender]}})
.catch(async(err) => {
console.error(err)
await enviar(`Error!\n${err}`)
})
await requestCash(sender)
break

case 'ranklevel':
case 'nivelrall':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isLevelingOn) return enviar(resposta.leveis)
let userh = _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = `*〈👾 Rᴀɴᴋ Lᴇᴠᴇɪs 👾〉*\n\n`
let nom = 0
try {
for (let i = 0; i < 5; i++) {
nom++
leaderboardlvl += `⪧ ⃝༘⃕ꪶ📱ꫂ @${userh[i].id.replace('@s.whatsapp.net', '')}\n⪧ ⃝༘⃕ꪶ👾ꫂ 𝚇ᴘ: ${userh[i].xp}\n⪧ ⃝༘⃕ꪶ🌀ꫂ 𝙻ᴇᴠᴇʟ: ${userh[i].level}\n\n`
}
tobi.sendMessage(from, leaderboardlvl, text, {quoted: mek})
} catch (err) {
console.error(err)
await enviar(`pelo menos 10 usuários para poder acessar o banco de dados`)
}
await requestCash(sender)
break

case 'coord':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
tttset.playertest = sender
if (!isGroup) {
enviar(linguagem.group())
} else if (tttset.tttstatus == "off") {
enviar(`Você ainda não iniciou o jogo\nDigite ${p}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
enviar(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
enviar(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
enviar(`Digite o comando com uma coordenada\nExemplo: ${p}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
enviar(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
tobi.sendMessage(from, `『❗』Parabens *${pushname}* Você ganhou no jogo da velha\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
tobi.sendMessage(from, `『❗』Parabens *${pushname}* Você Ganhou.`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "??"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
tobi.sendMessage(from, `『❗』Parabens *${pushname}* Você perdeu.\n\n➣  PUNIÇÃO: +${randomTTTXP} XP 🔮`, text)
} else {
tobi.sendMessage(from, `『❗』Vitoria da *${NomeDoBot}* Você Perdeu amigo!`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "??"; esp.b3 = "🔲"
esp.c1 = "??"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
tobi.sendMessage(from, `『❗』Empate entre *${pushname}* e *${NomeDoBot}*\n\n ➣ NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
tobi.sendMessage(from, `『❗』Empate entre *${pushname}* e *${NomeDoBot}*`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break

case 'ttthelp':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
tobi.sendMessage(from, ttthelp(p), text, {quoted:mek})
await requestCash(sender)
break

case 'tttme':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isGroup) return enviar(linguagem.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
tobi.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
await requestCash(sender)
break

case 'tttrank':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isGroup) return enviar(linguagem.group())
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 7; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 3) {board += `${i + 1}º 🏆 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} ??\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 4) {board += `${i + 1}º 💎 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 5) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} ??\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 6) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await tobi.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
await requestCash(sender)
break

case 'pau':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
enviar(hasil)
await requestCash(sender)
break

case 'slot':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : ??') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : ?? : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '?? : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : ?? : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
╭╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╝

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
enviar(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
tobi.sendMessage(from, slott, text, {quoted: mek})
await requestCash(sender)
break
   
case 'gay':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
tobi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não???'} else if (boiola > 51) {bo = 'você é gay??'
}
hasil = `Você é ${random}% gay\n\n${bo}`
enviar(hasil)
await requestCash(sender)
break

case 'roleta':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./base de dados/database/figurinhas/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
tobi.sendMessage(from, figb, sticker, {quoted: mek})
}, 2100)
}
setTimeout( () => {
tobi.sendMessage(from, morte, text, {quoted: mek})
}, 2300)
await requestCash(sender)
break

case 'caracoroa':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
const cara = fs.readFileSync('./base de dados/datauser/cara/cara.webp');
const coroa = fs.readFileSync('./base de dados/datauser/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
enviar(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./base de dados/datauser/cara/'+fej+'.webp')
tobi.sendMessage(from, cararoa, sticker, {quoted: mek})
await requestCash(sender)
break
//<~FIM DOS COMANDOS DE JOGOS

//<~COMEÇO DOS HENTAIS
case 'animes':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
const total_gp6 = `${totalchat.length}`
const animes_by_tobi = (linguagem.animes(pushname, hr, total_gp6, bateria))
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: animes_by_tobi})
await requestCash(sender)
break

case 'ass':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
var apikey = `akame`
hentanime = await getBuffer(`https://akamer.herokuapp.com/api/ass?apikey=${apikey}`)
tobi.sendMessage(sender, hentanime, image, {quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'holo':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`) 
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'erofeet':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'trap':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'eron':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'anal':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'ero':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'cum':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'les':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'holoero':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case  'hentai':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
tk = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(tk.url)
tobi.sendMessage(sender, buffer, image, {caption: 'Baum né?', quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'eroyuri':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'hentain':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case  'neko':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
znn = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(znn.url)
tobi.sendMessage(sender, buffer, image, {caption: `${comando}, certo?`, quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'lewd':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'solog':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'bdsm':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
var apikey = `akame`
hentanime = await getBuffer(`https://akamer.herokuapp.com/api/bdsm?apikey=${apikey}`)
tobi.sendMessage(sender, hentanime, image, {quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'feet':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'feetg':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'classic':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'erokemo':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'nsfwneko':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
var apikey = `akame`
hentanime = await getBuffer(`https://akamer.herokuapp.com/api/nsfwNeko?apikey=${apikey}`)
tobi.sendMessage(sender, hentanime, image, {quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'futanari':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'nsfwloli':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
var apikey = `akame`
hentanime = await getBuffer(`https://akamer.herokuapp.com/api/nsfwloli?apikey=${apikey}`)
tobi.sendMessage(sender, hentanime, image, {quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'femdom':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'blowjob':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'pwankg':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'lewdk':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case'boobs':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'spank':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'trapnime':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
tobir = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(tobir.url)
tobi.sendMessage(sender, buffer, image, { quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'solo':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'erok':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'feed':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'hololewd':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break

case 'lewdkemo':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
await requestCash(sender)
break
//<~FIM DOS COMANDOS DE HENTAI

//<~COMEÇO DOS COMANDOS ANIMES
case 'loli':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomloli?apikey=Ikyy69`)
img = await getBuffer(anu.link)
tobi.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'waifu':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
anu = (`https://bx-hunter.herokuapp.com/api/sfw/waifu?apikey=Ikyy69`)
img = await getBuffer(anu)
tobi.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'abraço':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
lolizita_2 = (`https://bx-hunter.herokuapp.com/api/sfw/cuddle?apikey=Ikyy69`)
img = await getBuffer(lolizita_2)
tobi.sendMessage(from, img, image, {quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'shinobu':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
lolizita_3 = (`https://bx-hunter.herokuapp.com/api/sfw/shinobu?apikey=Ikyy69`)
img = await getBuffer(lolizita_3)
tobi.sendMessage(from, img, image, {quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'ahegao':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
var apikey = `akame`
hentanime = await getBuffer(`https://akamer.herokuapp.com/api/ahegao?apikey=${apikey}`)
tobi.sendMessage(from, hentanime, image, {quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'lolizinha':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
var apikey = `akame`
lolizinha = await getBuffer(`https://akamer.herokuapp.com/api/loli?apikey=${apikey}`)
tobi.sendMessage(from, lolizinha, image, {quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'bully':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
lolizita_4 = (`https://bx-hunter.herokuapp.com/api/sfw/bully?apikey=Ikyy69`)
img = await getBuffer(lolizita_4)
tobi.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'shota':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
var apikey = `akame`
shota = await getBuffer(`https://akamer.herokuapp.com/api/shotas?apikey=${apikey}`)
tobi.sendMessage(from, shota, image, {quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'nekoa':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
lolizita_6 = (`https://bx-hunter.herokuapp.com/api/sfw/neko?apikey=Ikyy69`)
img = await getBuffer(lolizita_6)
tobi.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
await requestCash(sender)
break

case  'megumin':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
tobiu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(tobiu.url)
tobi.sendMessage(from, buffer, image, {caption: `${comando}, certo?`, quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'zoro': case 'nami': case 'carrot': case 'buggy':
case 'shanks': case 'ace': case 'naruto': case 'sakura':
case 'hinata': case 'madara': case 'sasuke': case 'obito':
case 'shikamaru': case 'shikaku': case 'shikadai': case 'asuma': 
case 'luffy':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
teks = `${comando}`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
await requestCash(sender)
break

case 'pinterest':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
enviar(mess.espere)
teks = `${q}`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
await requestCash(sender)
break
//<~FIM DOS COMANDOS DE ANIMES

//<~COMEÇO DOS COMANDOS DO DONO
case 'menucreador':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isOwner) return enviar(linguagem.criadores(p))
const total_gp7 = `${totalchat.length}`
const dono_by_tobi = (linguagem.dono(pushname, hr, total_gp7, bateria))
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: dono_by_tobi})
await requestCash(sender)
break

case 'bateria':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return  enviar(linguagem.ownerB())
tobi.sendMessage(from, linguagem.bateria(baterai, porcentagem), text, {contextInfo: fotothumb, quoted: mek})
await requestCash(sender)
break

case 'bc':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return  enviar(linguagem.ownerB())
if (args.length < 1) return enviar('Cadê o texto?')
tobis = await tobi.chats.all()
for (let _ of tobis) {
tobi.sendMessage(_.jid, `${q}`, text, {contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "externalAdReply": {"title": `Transmissão De Aviso`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2}}})
}
enviar('Transmissão enviada com sucesso')
await requestCash(sender)
break

case 'bcstik':
case 'bcfig':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return enviar('Quem é Você, Você não é meu dono ???')
if (!isQuotedSticker) return enviar('Marque uma figurinha!!!')
bcsticker = await tobi.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await tobi.downloadMediaMessage(encmedia)
for (let _ of bcsticker) {
tobi.sendMessage(_.jid, bc, sticker) 
}
enviar(`Figurinha envianda para: ${totalchat.length} chats`)
}
await requestCash(sender)
break

case 'clone':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return  enviar(linguagem.ownerB())
if (args.length < 1) return enviar('Mencione quem devo roubar a foto de perfil')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await tobi.getProfilePicture(id)
buffer = await getBuffer(pp)
tobi.updateProfilePicture(botNumber, buffer)
mentions(`Roubei a foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
enviar('ocorreu um erro')
}
await requestCash(sender)
break

case 'block':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return enviar(linguagem.ownerB(ownerName))
tobi.blockUser(`${body.slice(8)}@c.us`, "add")
tobi.sendMessage(from, `Usuário bloqueado`, text, {quoted: mek})
await requestCash(sender)
break

case 'ban':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot`
mentions(`${susp}`, mentioned, true)   
await requestCash(sender)
break

case 'unban':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot`
mentions(`${susp}`, mentioned, true)   
await requestCash(sender)
break

case 'ficha': 
if (!m.quoted) return enviar('🥥👒🥥👒🥥👒🥥👒🥥\n\nBienvenid@ *( ╹▽╹ )*\n\nLlena está ficha porfavor\n*┬──────────────────┬* ¯\_(ツ)\n\n*↝* Nᴏᴍʙʀᴇ:\n\n*↝* Eᴅᴀᴅ:\n\n*↝* (opcional) Dᴇ ᴅᴏɴᴅᴇ ᴇʀᴇs?: \n\n*↝* (opcional) Fᴏᴛᴏ:\n\n*↝* Esᴄᴏɢᴇ ᴜɴ ᴀɴɪᴍᴇ ᴀʟ ǫᴜᴇ ǫᴜɪᴇʀᴀs ᴘᴇʀᴛᴇɴᴇᴄᴇʀ:\n\n\nA͜͡n͜͡i͜͡m͜͡e͜͡s a͜͡ e͜͡s͜͡c͜͡o͜͡g͜͡e͜͡r͜͜͡͡:\n\n• Tᴇɴsᴇɪ sʜɪᴛᴀʀᴀ sʟɪᴍᴇ\n• Oɴᴇ ᴘɪᴇᴄᴇ\n• Sʜɪɴɢᴇᴋɪ ɴᴏ ᴋʏᴏᴊɪɴ\n\n• Jᴜᴊᴜᴛsᴜ ᴋᴀɪsᴇɴ\n• Kɪᴍᴇᴛsᴜ ɴᴏ ʏᴀɪʙᴀ\n• Vᴀɴɪᴛᴀs ɴᴏ ᴄᴀʀᴛᴇ\n• Oᴡᴀʀɪ ɴᴏ sᴇʀᴀᴘʜ\n\n┻━━━━━━━━━━━━━━━━━━━━┻\n\n🥥👒🥥👒🥥👒🥥👒🥥')
let qse = tobi.serializeM(await m.getQuotedObj())
if (!qse.quoted) return enviar('a mensagem que você está respondendo não contém uma resposta!')
await qse.quoted.copyNForward(m.chat, true)
break

case 'antipalavras':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`[❗]ativar/desativar, Exemplo ${p + comando} ativar`)
if (args[0] === 'on') {
if (isPalavrão) return enviar('*Já esta ativado...*')
palavrão.push(from)
fs.writeFileSync('./base de dados/database/arquivos/palavrão.json', JSON.stringify(palavrão))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
palavrão.splice(from, 1)
fs.writeFileSync('./base de dados/database/arquivos/palavrão.json', JSON.stringify(palavrão))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]on/off, Exemplo ${p + comando} on`)
}
await requestCash(sender)
break

case 'addpalavra':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
if (args.length < 1) return enviar( `Use assim : ${p + comando} [palavra]. exemplo ${p + comando} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./base de dados/lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palavra *${q}* adicionado na lista com sucesso!`)
await requestCash(sender)
break

case 'delpalavra':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
if (args.length < 1) return enviar( `Use assim : ${p + comando} [palavra]. exemplo ${p + comando} puta`)
let dbw = body.slice(12)
var position = palavra.indexOf(dbw)
palavra.splice(position, 1)
fs.writeFileSync('./base de dados/lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palavra *${q}* removida da lista com sucesso!`)
await requestCash(sender)
break 

case 'listname':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
teks = `Lista de palavras: \n\n`
for (let ahzhgxnshxg of palavra) {
teks += `⪧ ${ahzhgxnshxg}\n`
}
teks += `\nTotal : ${palavra.length}\nUse o comando\n${p}Addpalavra『Nome』\nPara adicionar texto\n\n E use o comando\n${p}Delpalavra『Nome』\nPara tirar texto`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": palavra } })
await requestCash(sender)
break

case 'destrabar':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
 if (!isOwner) return enviar('Este comando e so pro meu criador')
var groups = tobi.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = tobi.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
timestamp = speed();
totalChat = await tobi.chats.all()
charge = charging ? 'sim' : 'não'
listrik = charging ? '⚡' : 'ga di cas'
latensi = speed() - timestamp
let total = math(`${groups.length}*${privat.length}`)
teks = `
❀࿆⃧፝྅⃕ꦿ𝘿𝙚𝙨𝙩𝙧𝙖𝙫𝙖 𝙀𝙨𝙥𝙖𝙙𝙖 𝙈𝙖́𝙜𝙞𝙘𝙖
𝑩𝒚: 𝑬𝒖 𝑴𝒆𝒔𝒎𝒐 𝑫𝒖𝒏𝒊𝒐𝒎𝒐𝒅𝒛
.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[

.   ║.
    ║▒.
    ║▒▒\
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
    ║░▒║
▓▓▓▓▓▓▓
     ]█▓[
     ]█▓[
     ]█▓[`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${teks}`})
await requestCash(sender)
break

case 'delchat':
if (!isOwner) return enviar(`Macaco 😡`)
enviar('Pronto papai, deletei esse chat')
console.log(from)
tobi.modifyChat(from, "delete", {includeStarred: false})
break

case 'setname': 
if (args.length < 1) return enviar(`Use ${p + comando} Churrasco-Bot`)
if (!isOwner) return  enviar(linguagem.ownerB())
anu = q
tobi.updateProfileName(anu)
await enviar(`_*Sucesso em mudar o nome do bot_*\n\nPara : *${anu}*`)
break

case 'setname':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (args.length < 1) return enviar(`Use ${p + comando} Churrasco-Bot`)
if (!isOwner) return  enviar(linguagem.ownerB())
NomeDoBot = args[0]
enviar(`*O nome do bot foi alterado com sucesso para*: ${q}`)
await requestCash(sender)
break 		 		

case 'setprefix':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (args.length < 1) return enviar(`Use ${p + comando} !`)
if (!isOwner) return  enviar(linguagem.ownerB())
p = args[0]
enviar(`*O prefix do bot foi alterado com sucesso para*: ${q}`)
await requestCash(sender)
break

case 'tagstick':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return enviar(linguagem.ownerB())
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const enmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await tobi.downloadAndSaveMediaMessage(enmedia, filename = getRandom())
var value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
tobi.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(filePath)
} else {
enviar(`Marque um sticker para que eu mencione todos com ele`)
}
await requestCash(sender)
break

case 'tagimg':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return enviar(linguagem.ownerB(ownerName))
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const ncmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await tobi.downloadAndSaveMediaMessage(ncmedia, filename = getRandom())
var value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
tobi.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(filePath)
} else {
enviar(`Marque uma imagem para que eu mencione todos com ela`)
}
await requestCash(sender)
break

case 'ping':
addFilter(from)
var timestamp = speed();
var latensi = speed() - timestamp
tobi.updatePresence(from, Presence.composing)
uptime = process.uptime()
tobi.sendMessage(from, linguagem.speed(speedB, temporizado), text, {quoted: mek})
break

case 'visuchat':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
const readallid = await tobi.chats.all()
tobi.setMaxListeners(25)
for (let xyz of readallid) {
await tobi.chatRead(xyz.jid)
}
tobi.sendMessage(from, `Pronto`, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": "Todos os chats foram vistos",
'jpegThumbnail': fs.readFileSync('./base de dados/lib/bot/fotos/logo.jpeg')
}
}
}
})
await requestCash(sender)
break

case 'bloqueados':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
teks = 'Esta é uma lista de números bloqueados :\n'
for (let block of blocked) {
teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
tobi.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
await requestCash(sender)
break

case 'desligar':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !mek.key.fromMe) return enviar(linguagem.ownerB())
enviar('Bot desligado')
setTimeout(() => {
tobi.close()
}, 3000)
await requestCash(sender)
break

case 'reiniciar':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isOwner) return enviar(linguagem.ownerB())
npm = `npm start`
enviar("Aguarde, Estou Reiniciando...")
exec(npm, (err, stdout) => {
if(err) return tobi.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
tobi.sendMessage(from, stdout, text, {quoted: mek})
} 
})
await requestCash(sender)
break

case 'limpiarchat': 
case 'clearall':
case 'clear-all':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return  enviar(linguagem.ownerB())
tobif = await tobi.chats.all()
list_chat = await tobi.chats.all()
for (let chat of list_chat) {
tobi.modifyChat(chat.jid, "delete", {includeStarred: false})
}
tobi.sendMessage(from, `Listo`, text, {
quoted: { key: {fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"caption": `Todos los chat se vaciaron con exito`
}
}
}
})
await requestCash(sender)
break
//<~FIM DOS COMANDOS DE DONOS

case 'report':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) //info
const bug = `${q}`
 if (args.length > 300) return tobi.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `╭ ⋟ 𝖲𝗎𝗀𝖾𝗌𝗍𝖺̃𝗈 + ??𝖾𝗉𝗈𝗋𝗍𝖾\n├ ⋟ 𝖣𝖾: ${pushname}\n├ ⋟ 𝖭𝗎𝗆𝖾𝗋𝗈: @${sender.split("@s.whatsapp.net")[0]}\n╰━━━━━── • ──━━━━━\n ⋟ 𝖲𝗎𝗀𝖾𝗌𝗍𝖺̃𝗈:\n${bug}`
var options = {text: teks1, contextInfo: {mentionedJid: [sender]},}
tobi.sendMessage(`${OwnerNumber}@s.whatsapp.net`, options, text, {quoted: mek})
enviar("Mensagem enviada ao meu dono; Spam = block + ban.")
await requestCash(sender)
break

case 'premium':  
case 'prem':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
var totalchat = `${totalchat.length}`
const premiun_by_tobi = (linguagem.premium(pushname, hr, totalchat, bateria))
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: premiun_by_tobi})
await requestCash(sender)
break

case 'ddd':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar(`Use ${p + comando} 94`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
tobi.sendMessage(from, dddlist, text, {quoted: mek})	
await requestCash(sender)
break

case 'letra':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Qual é o nome da música? ._.")
enviar(mess.espere)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
if (!res[0].result) {
enviar("_*Titulo não encontrado...*_\n\nTalves eu não tenha essa resposta") 
} else {
enviar(`${res[0].result}`) 
}
})
await requestCash(sender)
break

case 'pinapi':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})   
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar(`${emoji_bot} Quer pesquisar algo? Use ${p + comando} Anime loli!!`) 
enviar(mess.espere)
const pes2 = ['0','3','9','8','7','6','5','4','2','1']      
const pes3 = pes2[Math.floor(Math.random() * (pes2.length))]       
const pes1 = ['333.878','988.432','746.748','454.018','893.263','273.064','379.311','283.808','111.878','028.282','930.718','927.283','017.287','018.739','013.543']           
const pes = pes1[Math.floor(Math.random() * (pes1.length))]    
by_tob_hgo = await fetchJson(`https://bx-hunter.herokuapp.com/api/pinterest?text=${q}&apikey=${macarrão}`)
buffer = await getBuffer(by_tob_hgo.image)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `Pesquisa sobre: ${q}`})
await requestCash(sender)
break

case 'github':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})   
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length == 0) return enviar(`_*Sintaxe de nome incorreto...*_\n\nExemplo: ${p + comando} Tobizinho`)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/github?nomedeusuario=${q}`)
githubByTobi = `
🏷️ Nome : ${anu.Nome_De_Usuario}
📆 Criada em : *${anu.Criada_Em}*
💫 Ultima atualização : *${anu.Ultima_Atualizacao}*
👤 Seguidores : *${anu.Total_De_Seguidores}*
👥 Total de Repositorios : *${anu.Total_De_Seguidores}*
🌍 Seguindo : *${anu.Total_Seguindo} Pessoas*
📊 Seguidores : 
*${anu.Link_De_Seguidores}*
📁 Repositório : 
*${anu.Link_Do_Repositorios}*
`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${githubByTobi}`})
await requestCash(sender)
break

case 'mediafire':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})   
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar('Onde está o link? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return enviar(mess.error.Iv)
enviar(mess.espere)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `
き⃟❗️MEDIAFIRE DOWNLOAD❗⃟ き

\`📁 Nome : ${res[0].nama}
\`📊 Tamanho : ${res[0].size}
\`🧧 Link : ${res[0].link}

_*Aguarde o processo de upload de mídia......*_`
enviar(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
await requestCash(sender)
break

case 'covidst':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
enviar(mess.espere)
teks = args.join(' ')
if (!q) return enviar(`${emoji_bot} Use apenas a sigla do estado e, apenas uma sigla por consulta`)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/brasil?estado=${q}`)
const by_tobi_thiago = `
╭═══════════════⊷
╰╮✙◗ 𝖢𝗈𝗏𝗂𝖽 𝖬𝗎𝗇𝖽𝗈 
╭┤➩ Sigla do estado: ${anu.Sigla_Do_Estado}
┃│➩ Estado: ${anu.Estado_Informado}
┃│➩ Casos desconhecidos: ${anu.Casos_Desconhecidos}
┃│➩ Casos encontrados: ${anu.Casos_Encontrados}
┃│➩ Mortes encontradas: ${anu.Mortes_Encontradas}
┃│➩ Previsões Econtradas: ${anu.Previsoes_Encontradas}
┃╰═════════════⊷
╰══════「★」═════⊷`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${by_tobi_thiago}`})
await requestCash(sender)
break

case 'xsearch':
case 'xs':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return enviar('Nome do que deseja pesquisar😈?')
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${q}&apikey=${macarrão}`)
enviar(mess.espere)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `🍟Titulo : ${x.title}\n\n`
ini_txt += `🍟Info : ${x.info}\n\n`
ini_txt += `🍟Link : ${x.link}\n\n\n`
}
lolizita_7 = `${ini_txt}───────────────\n\n`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${lolizita_7}`})
await requestCash(sender)
break

case 'sticknime':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
enviar(mess.espere)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
await requestCash(sender)
break

case 'anime':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Cadê o texto vida? kkkkk")
enviar(mess.espere)
buscarByTobi = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/educacional/buscaranimes?anime=${buscarByTobi}`)
img = await getBuffer(anu.Foto_anime)
tobi.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
await requestCash(sender)
break

case 'playstore':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar(`${emoji_bot} Quer pesquisar algo? Use ${p + comando} Whatsapp!!`) 
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/playstore-search?text=${q}&apikey=${macarrão}`)
buffer = await getBuffer(`${anu.data[0].icon}`)
teks = args.join(' ')            
const play_store = 
`  「🍛PLAY STORE🍛」
            
📄 Titulo: ${anu.data[0].title}
📤 Id da empresa: ${anu.data[0].appId}
🤵🏻 Criador: ${anu.data[0].developer}
🏦 Empresa: ${anu.data[0].developerId}
⛩️ Tipo: ${anu.data[0].priceText}
💵 Preço: ${anu.data[0].price}
📓 Resumo: ${anu.data[0].summary}
📊 Pontuação: ${anu.data[0].scoreText}
🔎 Total de pontuação: ${anu.data[0].score}
📂 Link do app: ${anu.data[0].url}`
tobi.sendMessage(from, buffer, image, { quoted: mek, thumbnail:null, caption: `${play_store}`})
await requestCash(sender)
break

case 'wikipedia':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Cadê o texto vida? kkkkk")
wikipediaByTobi = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/educacional/wikipedia?pergunta=${wikipediaByTobi}`)
if (!anu.Resultado) {
enviar("_*Titulo não encontrado...*_\n\nTalves eu não tenha essa resposta") 
} else {
enviar(`${anu.Resultado}`) 
}
await requestCash(sender)
break

case 'buscaimg':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return enviar(`❎ Que imagem você quer que eu pesquise? `);
enviar(mess.espere)
let pin = await hx.pinterest(q);
let ac = pin[Math.floor(Math.random() * pin.length)];
let di = await getBuffer(ac);
await tobi.sendMessage(from, di, image, {quoted: mek, caption: `✅ *${q}*` });
await requestCash(sender)
break;

case 'glosearch':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar('O que você está procurando?')
teks = args.join(' ')
enviar(mess.espere)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `\n
「  *─「🍛 GOOGLE 🍛」*  」
‣ *🧧Título :* ${i.title}
‣ *🏷️Link :* ${i.link}
‣ *📁Sobre :* ${i.snippet}`
}
var tobiDev = kant.trim()
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${tobiDev}`})
await requestCash(sender)
break

case 'playstore1':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
if(!q) return enviar('O que você está procurando?')
let play = await hx.playstore(`${q}`)
let store = ' 「🍛PLAY STORE🍛」'
for (let i of play){
store += `
‣ *📌Nome* : ${i.name}
‣ *📟Ligação* : ${i.link}
‣ *🎈Dev* : ${i.developer}
‣ *🔗Link Dev* : ${i.link_dev}\n❉─── 「🍛PLAY STORE🍛」───❉`
}
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${store}`})
await requestCash(sender)
break

case 'celular':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return enviar(`Qual celular você está procurando?`)
teks = args.join(' ')
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
📝 Titulo: ${anu.judul}
❗Última atualização: ${anu.rilis}
📱 Tamanho do celular: ${anu.ukuran}
⚡ Tipo: ${anu.type}
🗃️ Armazenamento: ${anu.storage}
📴 Tela: ${anu.display}
📳 Polegada: ${anu.inchi}
🔰 Resolução da câmera: ${anu.pixel}
📲 Resolução do video: ${anu.videoPixel}
💭 Ram do celular: ${anu.ram}
👤 Hardware do celular: ${anu.chipset}
⚠️ Bateria: ${anu.batrai}
🔋 Tipo da bateria: ${anu.merek_batre}`
 wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${busca_celular}`})
await requestCash(sender)
break

case 'amazon':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek}) 
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar(`${emoji_bot} Quer pesquisar algo? Use ${p + comando} iphone!!`) 
teks = args.join(' ')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/amazon?text=${q}&apikey=${macarrão}`)
item = 
`  「🍙 AMAZON PRIME 🍙」

📂Item: ${anu.item}
📊Visualizações: ${anu.review}
🔎Avaliação: ${anu.rating}
💵Preço: ${anu.price}
📤Pontuação: ${anu.score}
⚖️Disconto: ${anu.discounted}
🛍️patrocinios: ${anu.sponsored}
⚠️Melhor preço: ${anu.bestseller}
‼️Amazon primes: ${anu.amazonprime}
🐣Link do produto: ${anu.url}` 
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${item}`})
await requestCash(sender)
break

case 'rename':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
var namaPackss = q.substring(0, q.indexOf('|') - 0)
var authorPackss = q.substring(q.lastIndexOf('|') + 1)
texto = body.slice(7)
if (isDoubleByte(texto)) return enviar('🤖⚠️ Não é permitido letras modificadas!!')
stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await tobi.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
tobi.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: mek})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
await requestCash(sender)
break

case 'covidmundo':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner && !isPremium) return webPage(semPremium(p))
enviar(mess.espere)
teks = args.join(' ')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/mundial`)
const bya_tobi_thiago = `
╭═══════════════⊷
╰╮✙◗ ??𝗈𝗏𝗂𝖽 𝖬𝗎𝗇𝖽𝗈 
╭┤➩ Total de casos: ${anu.Total_Casos}
┃│➩ Total de casos ativos: ${anu.Total_Casos_Ativos}
┃│➩ Total de casos criticos: ${anu.Total_Casos_Criticos}
┃│➩ Total de casos hoje: ${anu.Total_Casos_Hoje}
┃│➩ Total de mortes: ${anu.Total_Mortes}
┃│➩ Total de mortes hoje: ${anu.Total_Mortes_Hoje}
┃│➩ Total de recuperados: ${anu.Total_Recuperados}
┃╰═════════════⊷
╰══════「★」═════⊷`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${bya_tobi_thiago}`})
await requestCash(sender)
break 

case 'bankbot':
addFilter(from)
var totalchat = `${totalchat.length}`
const bankLojaByTobi = (linguagem.bankloja(pushname, hr, totalchat, bateria))
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: bankLojaByTobi})
break

case 'cash':		
case 'meucash':
if (isOwner) return enviar("Dono do bot não pode ter cash!!!")
cashCheck(sender)
break

case 'buycash':
addFilter(from)
if (args.length < 1) return enviar('Qual o limite que voce quer comprar mano? Certifique-se de ter dinheiro suficiente mano!')
payout = q
const koinPerlimit = 1000
var total3 = koinPerlimit * payout
if ( checkATMuser(sender) <= total3) return enviar(`Desculpe, você não tem dinheiro suficiente. por favor colete e compre mais tarde`)
if ( checkATMuser(sender) >= total3 ) {
confirmATM(sender, total3)
bayarLimit(sender, payout)
await enviar(`*「 PAGAMENTO COM SUCESSO 」*\n\n*Vendendor* : ${me.name}\n*Destinatário* : ${pushname}\n*Quantidade De Compra* : ${payout} \n *Preço cash* : ${koinPerlimit}/cash\n *Seu saldo:* : ${checkATMuser(sender)}\n\n*O Processo foi bem sucedido com o número do pagamento* : \n${createSerial(15)}`)
}
break

case 'buypack':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
payout2 = 1
const valorPack = 1000
const buyPacks = valorPack * payout2
if ( checkATMuser(sender) <= buyPacks) return enviar(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do premiun : ${valorPack} mil`)
if ( checkATMuser(sender) >= buyPacks) {
confirmATM(sender)
var pornoByTobi = [
"Michelle Rabbit\nhttps://mega.nz/folder/FXB0ELpS#CaCYgD8f8YNPc_dL4JjtDA ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ",
"Sia Sibéria\nhttps://drive.google.com/drive/u/0/mobile/folders/1pOfYV7ZFqumnZpB-6eu03fHsByBJgNWt",
"Nicole Bum\nhttps://drive.google.com/drive/mobile/folders/1MRARgrA4GIcw14MGNpr5NxAKJTcnLjra",
"Love Lilah\nhttps://drive.google.com/drive/u/0/mobile/folders/145OnVBWuA54ZwfW5zL6WOQ7pQ41-fBx3 ",
"Taty Maia\nhttps://mega.nz/folder/i841xSqT#8sP2vyffUbS1RjQ_keNYoA/folder/O9hX1QSR ",
"Me1adinha\nhttps://accounts.google.com/ServiceLogin?service=lh2&passive=1209600&osid=1&continue=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&followup=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&authuser=0\n(Via Google Fotos) ",
"Mari Ávila\nhttps://drive.google.com/drive/u/0/mobile/folders/1lVU8GgLTHfPoYUh5ZJ1oj5gluiTRmgB5 ",
"Feh Galvão\nhttps://mega.nz/folder/OxQiHJAA#8dGkVcq08YtonYSJQgZFfQ/folder/etx0QRQT ",
"Marina Mui\nhttps://mega.nz/folder/nhxWCQhC#jefLXWFJiqCXMtj6wEEN4A ",
"Sophia Carracini\nhttps://drive.google.com/drive/u/0/mobile/folders/1mIpBq3amINT9am9yxQGlbz7dd8-NMN_o ",
"Maria Eugênia\nhttps://drive.google.com/drive/u/0/mobile/folders/10kdyiz9TCQuqEQXK_78KJJjG-zd4ywi3 ",
"Skylar Vox\nhttps://mega.nz/folder/XIQTSKzR#_0vLyBUESlCj3l5HCCUkQg ",
"Neiva Mara\nhttps://mega.nz/folder/PZZxQABC#IVO1DL-zczyMd1Kr83sDBw ",
"Amorazz\nhttps://mega.nz/folder/6kpT0IoT#Zqin16-ASUvoXgoEK6BsIw ",
"Nayara\nhttps://drive.google.com/drive/u/0/mobile/folders/1JpJdDtuI408EpCmoQalcOC8oz3szAxqE ",
"Megnutt\nhttps://mega.nz/folder/UAJE0DQT#gCEzz702Amr2rdqSWmshMA/folder/lQx21JjC ",
"Littl Misfit\nhttps://mega.nz/#F!QvhW2RiB!kog5LiL5dOU_115ZEVpcGg!UyhkGLCL ",
"Anitta\nhttps://drive.google.com/drive/u/0/mobile/folders/1K5NZNNJPGVo3FGuWIjZ0jNoJ-8Gh9hG3 ",
"MC Princesa\nhttps://drive.google.com/drive/u/0/mobile/folders/1Zsj66cMEPgQTcT91VenAkl9L1TAuguSF ",
"MC Pipokinha\nhttps://drive.google.com/drive/u/0/mobile/folders/1X7u7cj8MKj1cE6hM2_mkQe9bOF8M2npm ",
"Lana Rhoades\nhttps://mega.nz/folder/JEkWhaoZ#lho_3rS4nhf28tGtyvImCw ",
"Belle Delphine\nhttps://drive.google.com/drive/mobile/folders/1IzUUxQO6owpvW9r5Yj6xJ_711yTtlZg9 ",
"Venomous Dolly\nhttps://mega.nz/folder/pxYAXLjI#QnZHek_zGQDz5ct9d63Bmg ",
"MC Mirella\nhttps://seulink.online/qOkcdS\n(Esse ta com encurta) ",
"LoverLaci\nhttps://mega.nz/folder/yRIHgQ5A#euOpAQNEcZiej5uBuxjBkw/folder/XEQWSZBC ",
"Victoria Matosa\nhttps://drive.google.com/drive/mobile/folders/1x2j-SglJX-nezdBuc4WhpYleZO2c8Tl9 ",
"Segredos Da Ana\nhttps://www.mediafire.com/folder/tcpjkncy4as5f/d.gg\n(FONTE: Wakai T) ",
"Letícia Shirayuki\nhttps://www.mediafire.com/file/2a4kq8pmxc3je71/Let%25C3%25ADcia_Shirayuki.zip/file ",
"KITTYXKUM\nhttps://mega.nz/folder/f4xDSS7R#_5ZrSNVwLJ4nEUdEJxoijw ",
"Kinechan\nhttps://mega.nz/folder/GgxRQCaS#kdT7IidrqwgbggnpZOkMHA ",
"Grazi Mourão\nhttps://mega.nz/folder/2hwgwYpI#kUTsXqrwDNFeKcDhTINz-w ",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"Polonesa Do Hype\nhttps://drive.google.com/drive/u/0/mobile/folders/1yA4MOOhL1Qjfx8BOtjZptyNDgZPxzYAC",
"Ashley Tervort\nhttps://mega.nz/folder/X5wQwIbK#579uPWLNfCuUDuXvuIJ3aA ",
"Ashley Alban\nhttps://mega.nz/folder/9eBBBQZb#pi0kaL6zqRYq3SoSJHUJpQ ",
"Emília Bunny\nhttps://mega.nz/folder/q1pkBJoI#5ZiKfZhaKIUg9ea0eS6EYw ",
"Maru Karv\nhttps://mega.nz/folder/tHoC2CaY#bPf5ZHzM89nq-oCr0Civdw ",
"Evilena\nhttps://drive.google.com/drive/u/0/mobile/folders/1j5OR2qsYQ9uKrO2V2ywdpdUpooBlIJCo ",
"Bambi Doe\nhttps://mega.nz/folder/IxgyhZJI#Rd8bzK3_Ri2I3LUvy2Tf6Q ",
"Mulher Melão\nhttps://mega.nz/folder/is8w1Q7a#XmaNa0PNl6J-JS9VXneDJg ",
"Aline Faria\nhttps://drive.google.com/drive/u/0/mobile/folders/1QEaiSu9SFeoV__Obo42252zj-WQaEZxQ ",
"Rafaela Nery\nhttps://drive.google.com/drive/u/0/mobile/folders/1dYfY3QTybo_gFeNE-oQsxN45VnZ7HRW0 ",
"Remy LaCroix\nhttps://mega.nz/folder/sTxmzDAb#_0igusp-mS454WIEh_lGqg ",
"Mayakayagaia\nhttps://mega.nz/folder/5MsATbYI#V-90W2qijBk3N5YzJTgfHQ ",
"Bella Thorne\nhttps://mega.nz/folder/okw0gYLL#O6-OqnJhRYTbHiMJbNqI3Q ",
"Canela Skin\nhttps://mega.nz/folder/vN5XBIIZ#m7P5H4J_B5HcsYrf26tmoQ ",
"Hailey Queen\nhttps://mega.nz/folder/FFlgXBIT#8X5NYUFWkTjVDUqmwXSVow/folder/pc1yVbyA ",
"Adriana Chechik\nhttps://mega.nz/folder/1XgFnKyJ#HETOSi3Qi8Kwckbm2FBXDw ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ ",
"Steffy Moreno\nhttps://mega.nz/folder/QkYARZ7J#vtktDmYALs5wwcImYy8tnw ",
"Angelic Videos\nhttps://mega.nz/folder/XgMRQYAL#GidekeyDkkEDFWit2kAJ_g "]
var pornkkkByTobiNekkkk = pornoByTobi[Math.floor(Math.random() * pornoByTobi.length)]
tobi.sendMessage(from, `${pornkkkByTobiNekkkk}`, text, {contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "externalAdReply": {"title": `Packs porno?? by © Tobikkk`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2}}})
}
await requestCash(sender)
break

case 'buyprem':
addFilter(from)
if (prem.includes(sender)) return enviar("❌ Só pode comprar premium uma vez! ❌")
payout2 = 1
const koinPerlimit2 = 100000
const buyPrem = koinPerlimit2 * payout2
if ( checkATMuser(sender) <= buyPrem) return enviar(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do premiun : 100000 mil`)
if ( checkATMuser(sender) >= buyPrem) {
confirmATM(sender, buyPrem)
prem.push(`${sender}`)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
await enviar(`き⃟💲COMPRA BEM SUCEDIDA💲️⃟き\n\nき⃟👤️ Vendedor : *${me.name}*\nき⃟🏷️ Comprador : *${pushname}*\nき⃟💱 Preço do premium : *${koinPerlimit2}*`)				
}
break

case 'transfer':
case 'transferir':             			
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!q.includes('/')) return  enviar(`[❗] Use assim : ${p}transferir @/2500`)
const tujuan = q.substring(0, q.indexOf('/') - 1)
const jumblah = q.substring(q.lastIndexOf('/') + 1)
if(isNaN(jumblah)) return await enviar('[❗] PRECISA SER UM NÚMERO')
if (jumblah < 100) return enviar(`transfrência mínima e de 100 reais`)
if (checkATMuser(sender) < jumblah) return enviar(`[❗] você não tem dinheiro suficiente para fazer uma transferência, você precisa ter no minímo 100 de dinhero`)
const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
fee = 0.010 *  jumblah 
hasiltf = jumblah - fee
addKoinUser(tujuantf, hasiltf)
confirmATM(sender, jumblah)
addKoinUser('556181496039@s.whatsapp.net', fee)
enviar(`き⃟💲TRANSFERÊNCIA💲️⃟き\n\nき⃟👤️ Transferidor: wa.me/${sender.split("@")[0]}\nき⃟🏷️ Recebidor : ${tujuan}\nき⃟💱 Valor Da Transferência : ${jumblah}\nき⃟🧧Taxa : ${fee}`)
await requestCash(sender)
break		

case 'darcash':
addFilter(from)
if (!isOwner) return enviar(`._. Somente meu dono pode dar cash!\n\nOu você pode comprar com ${p}buycash 10`)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const ovoFrito = tobi.contacts[mentioned] != undefined ? tobi.contacts[mentioned].vname || tobi.contacts[mentioned].notify: undefined
const nomerr = args[0].replace('@','')
const jmla = args[1]
if (jmla <= 1) return enviar(`Precisa dar no minímo 1 cash`)
if (isNaN(jmla)) return enviar(`[❗] USE ASSIM\n ${p}darcash @556181496039 5`)
if (!nomerr) return enviar(`[❗] USE ASSIM\n ${p}darcash @556181496039 5`)
const cysz = nomerr + '@s.whatsapp.net'
var found = false
Object.keys(_cashB).forEach((i) => {
if(_cashB[i].id === cysz){
found = i
}
})
if (found !== false) {
_cashB[found].cash -= jmla
const updated = _cashB[found]
const result = `き⃟💰SUCESSO AO ADICIONAR CASH💰️⃟き\n*「 🎁DOAÇÃO BEM SUCEDIDA🎁 」*\n\nき⃟♨️ Nome : *${ovoFrito}*\nき⃟👤️ Usúario : @${updated.id.replace('@s.whatsapp.net','')}\nき⃟💱 Cash: ${limitawal-updated.cash}`
console.log(_cashB[found])
fs.writeFileSync('./base de dados/lib/cash_.json',JSON.stringify(_cashB));
enviar(result)
} else {
enviar(`[❗] Desculpe ${pushname}, este ${nomerr} número não está registrado no bot...`)
}
await requestCash(sender)
break

case 'darmoney':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isOwner) return enviar("Só meu dono")
const numeroUang = args[0].replace('@','')
const uangLimite1 = args[1]
const darmoneyUang = mek.message[type].contextInfo.mentionedJid[0]
if (uangLimite1 <= 1) return enviar(`Precisa dar no minímo 1 limit`)
if (isNaN(uangLimite1)) return enviar(`[❗] USE ASSIM\n ${p + comando} @556181496039 5`)
if (!numeroUang) return enviar(`[❗] USE ASSIM\n ${p + comando} @556181496039 5`)
const idUang = numeroUang + '@s.whatsapp.net'
var found = false
Object.keys(uang).forEach((i) => {
if(uang[i].id === idUang){
found = i
}
})
if (found !== false) {
uang[found].uang += Number(uangLimite1)
const updated = uang[found]
fs.writeFileSync('./base de dados/datauser/uang.json',JSON.stringify(uang))
const verMoney = checkATMuser(darmoneyUang)
const result = `
╭─❒ 「 Sucesso! 」 ❒
├ *🦈 ID : *${createSerial(8)}*
├ *🦈 Horário : *${moment().format('DD/MM/YY HH:mm:ss')}*
├ *🦈 Usúario : *@${updated.id.replace('@s.whatsapp.net','')}*
├ *🦈 Dinheiro:* ${verMoney}
└❏`
console.log(uang[found]);
enviar(result)
} else {
enviar(`[❗] Desculpe ${pushname}, este ${numeroUang} número não está registrado no bot...`)
}
await requestCash(sender)
break

case 'apostar':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (!isGroup) return enviar(`SOMENTE EM GRUPOS`)
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `10000`
if (checkxpr <= quantidader) return enviar(`Você não possui licença para jogar, obtenha uma quando tiver ${quantidader} de dinheiro.\n\nSeu dinheiro: ${checkxpr}`)
if (args.length !== 1) return enviar('Especifique a quantidade de dinheiro para apostar.')
if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro) return enviar(`Você não pode apostar uma quantidade de dinheiro maior do que a você tem, e nosso limite de apostas é de ${quantidader} dinheiro por vez!\n\nSeu dinheiro: ${checkxpr}`)
if (Number(args[0]) < 1000) return enviar(`O minimo para se apostar é de 1000 dinheiro`)
if (isNaN(args[0])) return enviar('Para apostar use apenas números, nada de inserir letras, a menos que queira perder todo o XP que tenha.')
const double = Math.floor(Math.random() * 7) + 1
const nrolxp = Number(-args[0])
const prolxp = double + Number(args[0])
if (double == 1) {
await enviar(`🔪BANG!!!💣\n\nVocê perdeu na roleta-russa, causando uma perca de ${nrolxp} em seu dinheiro.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 2) {
await enviar(`🙌🏻SALVO😇\n\nVocê não levou um tiro e ganhou ${prolxp} dinheiro`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 3) {
await enviar(`👎🏼BAAAAH MÁ SORTE😔\n\nPerdeu ${nrolxp} KKK Continua apostando pra perder mais otário kkkkkkkkkkkkkkk`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 4) {
await enviar(`👍🏼MUITA SORTE!!!😬\n\nVocê pulou o muro, e se salvou da polícia.\nGanhou ${prolxp} Dinheiro, Meu soldado anti prisão!`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 5) {
await enviar(`💀 WASTED - SE FODEU ⚰️\n\nAcabou perdendo ${nrolxp} em seu dinheiro, pra ganhar, aposte mais alto.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 6) {
await enviar(`✨CONGRATULATIONS💫\n\nVocê finalmente ganhou, receba seus ${prolxp} de dinheiro`)
addKoinUser(sender, prolxp, dinheiro)
await requestCash(sender)
}
break

case 'dinheiro':
case 'money':
const testeDinheiro = checkATMuser(sender)
const checkDinheiro = checkATMuser(sender, testeDinheiro)
enviar(linguagem.dinheiroConta(checkDinheiro))
break

case 'rankcash':
let userrg = _cashB
let registrousere = `*〈👾𝚁𝚊𝚗𝚔 𝙲𝚊𝚜𝚑👾〉*\nTᴏᴛᴀʟ : *${_cashB.length}*\n`
let numer = 0
try {
for (let i = 0 ; i < _cashB.length; i++) {
numer++
registrousere += `
┌═════「${numer}」═════⊷
┌┤◉ 𝙽𝚞𝚖𝚎𝚛𝚘: @${userrg[i].id.replace('@s.whatsapp.net', '')} 
┃│◉ 𝙲𝚊𝚜𝚑: ${limitawal - _cashB[i].cash}
┃╰═══════════⊷
└═════「★」════⊷\n`
}
tobi.sendMessage(from, registrousere, text, {quoted: tob})
} catch (err) {
console.error(err)
}
break

case 'rankmoney':
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
bo = args[0]
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
_registered.sort((a, b) => (a.name < b.name) ? 1 : -1)
uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
let rankDinheiro = '🏆【DINHEIRO】🏆\n\n'
let nomNumberRank = 0
try {
for (let i = 0; i < 5; i++) {
nomNumberRank++
rankDinheiro += `
*${nomNumberRank}º*🥇 : @${uang[i].id.replace('@s.whatsapp.net', '')}
╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸
│ ➣ Nome: _${uang[i].nome}_
│ ➣ Dinheiro: _${uang[i].uang}_💰
╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
await enviar(rankDinheiro)
} catch (err) {
console.error(err)
await enviar(`Precisa ter mais Usuários registrados`)
}
await requestCash(sender)
break

case 'vermoney':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (args.length < 1) return enviar(`Use ${p + comando} @tag`)
const verMoneyki = mek.message[type].contextInfo.mentionedJid[0]
const verMoneyMencionador = checkATMuser(verMoneyki)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const feijoada = tobi.contacts[mentioned] != undefined ? tobi.contacts[mentioned].vname || tobi.contacts[mentioned].notify: undefined
enviar(`き⃟💰_Adquirir o saldo na conta do ${feijoada}_💰️⃟ き\n\nき⃟💰 - Dinheiro: ${verMoneyMencionador}`)
await requestCash(sender)
break

case 'vercash':
addFilter(from)
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: mek})
if (args.length < 1) return enviar(`Use ${p + comando} @tag`)
const verCash = mek.message[type].contextInfo.mentionedJid[0]
cashCheck(verCash)
await requestCash(sender)
break

case 'tts': 
addFilter(from)
if (args.length < 1) return tobi.sendMessage(from, `Usa :\n${p}tts (idioma) (texto)\nEjemplo: ${p}tts es hola\n\nUse : ${p}ts para ver la lista de todos los idiomas`, text, {quoted: mek})
const gtts = require('./base de dados/lib/gtts')(args[0])
if (args.length < 2) return tobi.sendMessage(from, 'Y el texto?', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
dtt.length > 800
? enviar('Mucho texto 😎')
: gtts.save(ranm, dtt, function() {
tobi.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break

case 'infobot':
addFilter(from)
var totalchat = `${totalchat.length}`
const imfobotkkkbyTobi = (linguagem.info(pushname, hr, totalchat, bateria))
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: imfobotkkkbyTobi})
break

case 'info':
const suportewhatsapp = "https://chat.whatsapp.com/E1VnjjNshWkL9D0MnZAxxu" 
uptime = process.uptime()
const timestamp2 = speed();
const latensi2 = speed() - timestamp2
runtime2 = process.uptime()
infobot =`
‣ Nombre : *${me.name}*
‣ Versión del Bot : *1.0*
‣ Total de cmds usados : *${reqcmd}*
‣ Usuarios registrados : *${_registered.length}*
‣ Navegador : *${tobi.browserDescription[1]}*
‣ Velocidad de respuesta : *${latensi2.toFixed(4)}*
‣ Tiempo activo : *${temporizado(uptime)}**
‣ Versión de WA : ${tobi.user.phone.wa_version}
‣ Grupo de suporte : 
*${suportewhatsapp}*

◤━━*AGRADECIMIENTOS*━━◥
┃
┃--------------Tobi-----------------
┃Cʀᴇᴀᴅᴏʀ ᴅᴇ ʟᴀ ʙᴀsᴇ 
┃ᴅᴏɴᴅᴇ sᴇ ʜɪᴢᴏ ᴀʟ ʙᴏᴛ
┃
┃ʙᴀsᴇ ᴜsᴀᴅᴀ: Lᴏʟɪᴢɪᴛᴀ-ʙᴏᴛ
┃
┃----------Mauu-moder----------
┃Tʀᴀᴅᴜᴄɪᴏ ʏ ᴄᴀᴍʙɪᴏ ᴇʟ ᴅɪᴄᴇñᴏ
┃ᴅᴇ ᴇʟ ʙᴏᴛ ʏ ᴄᴀᴍʙɪᴏ ʟᴏs ᴄᴍᴅ
┃
◣━━━━━━━━━━━━━━◢
`
tobi.sendMessage(from, infobot, text, {contextInfo: fotothumb, quoted: mek})
break

case 'reportes':
report = `
*INFORMACIÓN*
Solicite el informe funciones de errores en el bot, asegúrese de proporcionar un informe correcto y claro!

┌──【 *REPORTES* 】
‣ *${p}Solicitar (Texto)*
‣ *${p}Informe (Texto)*
└──────────────

*Total*
Solicitaciones : ${_solicitar.length}
Informes : ${_informe.length}

Hable con Mauu-moder sobre los reportes o informes del bot asi pueda mejorar`
enviar(report)
break

case 'informe':
yoi = q
if (args.length < 1) return enviar('️Introduzca el nombre de la función de error que se produce durante la prueba.')
if (yoi.length > 200) return enviar('El texto supera el límite, su solicitud fue rechazada!')
_informe.push(yoi)
fs.writeFileSync('./base de dados/lib/informe.json', JSON.stringify(_informe))
enviar(`✅ Gracias *${pushname}*, Su informe se ha almacenado en la base de datos`)
break

case 'informes':
if (!isOwner) return enviar("Cᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴘᴀʀᴀ ᴍᴀᴜᴜ-ᴍᴏᴅᴇʀ")
teks = `*🄸🄽🄵🄾🅁🄼🄴🅂*\nAcontinuacion verás una lista de los reportes \n*${fecha()}*\n *${_informe.length}*\n\n┌───✞ *Lɪsᴛᴀ* ✞\n`
for (let lap of _informe) {
teks += `‣ ${lap}\n`
}
teks  += `└──────────────`
enviar(teks.trim())
break

case 'pedido':
case 'solicitar':
yoi = q
if (args.length < 1) return enviar(' Ingrese las funciones que desee en el Bot')
if (yoi.length > 200 ) return enviar('El texto supera el límite, su solicitud fue rechazada!')
_solicitar.push(yoi)
fs.writeFileSync('./base de dados/lib/solicitar.json', JSON.stringify(_solicitar))
enviar(`✅ Gracias *${pushname}*, Su solicitud se ha almacenado en la base de datos..`)
break

case 'solicitaciones':
if (!isOwner) return enviar(ownerB())
teks = `*Solicitaciones*\nA seguir está uma lista de inscrições recebidas na data *${fecha()}* com o número de pedidos *${_solicitar.length}*\n\n┌───⊷ *LISTA* ⊶\n`
for (let req of _solicitar) {
teks += `‣ ${req}\n`
}
teks  += `└──────────────`
enviar(teks.trim())
break

//-- NADA A VER

case 'ts':
enviar(ts())
break

default:

if (body == `${p + comando}`)  {
console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color('Comando', "yellow"), color(`${p}${comando}`, "yellow"), color('não registrado', "yellow"), color('de', "yellow"), color(pushname, "yellow"))
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
if (!e.includes("Cannot read property 'conversation' of null")) {
if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
if (!e.includes("Cannot set property 'mtype' of undefined")) {
if (!e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'red'))
}
}
}
}
}
}
})
}
starts()
