/*
N KIBA XEREQUINHA. 
BOM ISSO EU PEGUEI DO ITALU DONO DO TIRINGA BOT
SE DA ALGUM PROBLEMA POR USAR ISSO, EU TIRO OU PEÇO A ELE
ENTÃO NE MEU ZAP; wa.me/5594817512
*/
const fs = require('fs')
const crypto = require('crypto')

const _level = JSON.parse(fs.readFileSync('./base de dados/datauser/level.json'))

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
        
const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./base de dados/datauser/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./base de dados/datauser/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./base de dados/datauser/level.json', JSON.stringify(_level))
        }
        
        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
        
        const getUserRank = (sender, _level) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: sender, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./base de dados/datauser/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

    const xpGain = new Set()
    
    const isGained = (sender) => {
    return !!xpGain.has(sender)
}
     const addCooldown = (sender) => {
    xpGain.add(sender)
    setTimeout(() => {
        return xpGain.delete(sender)
    }, 10000) 
}

const dellprem = (userId, _data) => {
    let position = null
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _data.splice(position, 1)
        fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(_data))
    }
    return true
}
     
const leveltab = (sender, pushname, userLevel, userXp, patt, NomeDoBot) => {
const requiredXp = 5 * Math.pow(userLevel) + 50 * userLevel + 100
const requiredXp1 = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
var requiredXp2 = 5 * Math.pow((userLevel - 1), (5 / 2)) + 50 * (userLevel - 1) + 100
if (userLevel == 1) {
    requiredXp2 = 0
} 
const porcent = Math.round(((userXp - requiredXp2) * 100) / (requiredXp1 - requiredXp2))
const bar = [`[▒▒▒▒▒▒▒▒▒]`, `[███▒▒▒▒▒▒]`, `[████▒▒▒▒▒]`, `[██████▒▒▒]`, `[████████▒]`, `[█████████]`]
var selectbar = ``
if (porcent < 20) {
    selectbar = bar[0]
} else if (porcent > 20 && porcent < 40) {
    selectbar = bar[1]
} else if (porcent > 40 && porcent < 60) {
    selectbar = bar[2]
} else if (porcent > 60 && porcent < 80) {
    selectbar = bar[3]
} else if (porcent > 80 && porcent < 100) {
    selectbar = bar[4]
} else {
    selectbar = bar[5]
}
const moon = [`🌑` ,`🌘` ,`🌗` ,`🌖` ,`🌕` ,`🌔` ,`🌓` ,`🌒`]
var selectMoon1 = ``
var selectMoon2 = ``
if (porcent < 20) {
    selectMoon1 = moon[0]
    selectMoon2 = moon[0]
} else if (porcent >= 20 && porcent < 40) {
    selectMoon1 = moon[1]
    selectMoon2 = moon[7]
} else if (porcent >= 40 && porcent < 60) {
    selectMoon1 = moon[2]
    selectMoon2 = moon[6]
} else if (porcent >= 60 && porcent < 80) {
    selectMoon1 = moon[3]
    selectMoon2 = moon[5]
} else if (porcent >= 80) {
    selectMoon1 = moon[4]
    selectMoon2 = moon[4]
}

    return `
╭ ⋟ ️👾⃝༘⃕»𝖱𝖺𝗇𝗄 𝖫ᴇᴠᴇʟ« ⃝༘⃕👾
┃╭┯━❋ཻུ۪۪⸙
┃┃█ ⪧ 𝙻ᴇᴠᴇʟ: ${userLevel} 
┃┃├━ཻུ۪
┃┃█ ⪧ 𝖯ᴀᴛᴇɴᴛᴇ: ${patt}
┃┃├━ཻུ۪
┃┃█ ⪧𝚇ᴘ: ${getLevelingXp(sender)}
┃┃█ ⪧ └ ${selectbar} ${porcent}%
╰┴┶━❋ཻུ۪۪⸙
`
}
  
module.exports = {
     getLevelingXp, 
     getLevelingId, 
     addLevelingXp, 
     addLevelingLevel, 
     addLevelingId, 
     getLevelingLevel,
     getUserRank,
     isGained,
     addCooldown,
     leveltab,
     dellprem
}

