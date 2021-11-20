const axios = require('axios')
const cheerio = require('cheerio')

const SuperHt = async(search) => {
const resu = await axios.get(`https://superhentais.vip/tv/s?=${search}`) 
const $ = cheerio.load(resu.data)
const naosei = []
$('gridbox').each(function(a, b) {
const link = $(b).find('a').attr('href')
const thumb = $(b).find('img').attr('src') 
const titulo = $(b).find('img').attr('alt')
naosei.push({ titulo, link, thumb })

return naosei
console.log(`${link}`)
})
}
module.exports = {SuperHt}