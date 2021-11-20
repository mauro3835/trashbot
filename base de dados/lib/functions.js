const fs = require('fs')
const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const CFonts  = require('cfonts')

const uang = JSON.parse(fs.readFileSync('./base de dados/datauser/uang.json'))
const _cashB = JSON.parse(fs.readFileSync('./base de dados/lib/cash_.json'))
corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"]
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		});
		return res.data;
	} catch (e) {
		console.log(`Error : ${e}`);
	}
};

const randomBytes = (length) => {
    return Crypto.randomBytes(length);
};

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase();
};

const getGroupAdmins = (participants) => {
	admins = [];
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : '';
	}
	return admins;
};

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const spinner = { 
"interval": 120,
"frames": [
"C",
"Co",
"Con",
"Cone",
"Conec",
"Conect", 
"Conecta",
"Conectan",
"Conectand", 
"Conectando",
"Conectando a",
"Conectando a T",
"Conectando a Tr",
"Conectando a Tra",
"Conectando a Tras",
"Conectando a Trash",
"Conectando a Trash-",
"Conectando a Trash-B",
"Conectando a Trash-Bo",
"Conectando a Trash-Bot",
"Conectando a Trash-Bot",
"Conectando a Trash-Bot :",
"Conectando a Trash-Bot :)",
  ]}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: `${cor1}`, succeedColor: `${cor1}`, spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
	}
	const log = (id, text) => {
	spins.add(id, {text: text})
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

        
        var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Dᴏᴍɪɴɢᴏ'; break;
                case 1: hari = 'Lᴜɴᴇs'; break;
                case 2: hari = 'Mᴀʀᴛᴇs'; break;
                case 3: hari = 'Mɪᴇʀᴄᴏʟᴇs'; break;
                case 4: hari = 'Jᴜᴇᴠᴇs'; break;
                case 5: hari = 'Vɪᴇʀɴᴇs'; break;
                case 6: hari = 'Sᴀʙᴀᴅᴏ'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Eɴᴇʀᴏ'; break;
                case 1: bulan1 = 'Fᴇʙʀᴇʀᴏ'; break;
                case 2: bulan1 = 'Mᴀʀᴢᴏ'; break;
                case 3: bulan1 = 'Aʙʀɪʟ'; break;
                case 4: bulan1 = 'Mᴀʏᴏ'; break;
                case 5: bulan1 = 'Jᴜɴɪᴏ'; break;
                case 6: bulan1 = 'jᴜʟɪᴏ'; break;
                case 7: bulan1 = 'Aɢᴏsᴛᴏ'; break;
                case 8: bulan1 = 'Sᴇᴘᴛɪᴇᴍʙʀᴇ'; break;
                case 9: bulan1 = 'Oᴄᴛᴜʙʀᴇ'; break;
                case 10: bulan1 = 'Nᴏᴠɪᴇɴʙʀᴇ'; break;
                case 11: bulan1 = 'Dɪᴄɪᴇᴍʙʀᴇ'; break;
            }
                 var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
                var tampilJam = '' + jam + ':' + menit + ':' + detik + '';
var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = 'trash'; break;
                case 1: waktoo = 'trash'; break;
                case 2: waktoo = 'trash'; break;
                case 3: waktoo = 'trash'; break;
                case 4: waktoo = 'trash'; break;
                case 5: waktoo = 'trash'; break;
                case 6: waktoo = 'tras'; break;
                case 7: waktoo = 'trash'; break;
                case 8: waktoo = 'trash'; break;
                case 9: waktoo = 'trash'; break;
                case 10: waktoo = 'trash'; break;
                case 11: waktoo = 'trash'; break;
                case 12: waktoo = 'trash'; break;
                case 13: waktoo = 'trash'; break;
                case 14: waktoo = 'trash'; break;
                case 15: waktoo = 'trash'; break;
                case 16: waktoo = 'trash'; break;
                case 17: waktoo = 'trash'; break;
                case 18: waktoo = 'trash'; break;
                case 19: waktoo = 'trash'; break;
                case 20: waktoo = 'trash'; break;
                case 21: waktoo = 'trash'; break;
                case 22: waktoo = 'trash'; break;
                case 23: waktoo = 'trash'; break;
            }
            var tampilUcapan = '' + waktoo;  

 const banner = cfonts.render((`${waktoo}`), {
font: 'block',
align: "center",
gradient: ['red', 'magenta']
});                
const banner2 = cfonts.render((`Trash-bot V1.0`), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
});
             
module.exports = {
getBuffer,
h2k,
generateMessageID, 
getGroupAdmins, 
getRandom, 
start, 
info, 
success, 
banner, 
banner2,
close, 
log
}
