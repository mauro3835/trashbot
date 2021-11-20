const fs = require('fs')
const crypto = require('crypto')

const _registered = JSON.parse(fs.readFileSync('./base de dados/datauser/registered.json'))

/* Nota: Vai da o tempo q foi registrado */
const getRegisterTime = (sender) => { 
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].time
            }
        }

/* Nota: Não tem definição no json */
const getRegisterAge = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].age
            }
        }
        
/* Nota: Vai difinir o serial dentro do json */
  const getRegisterSerial = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].serial
            }
        }
        
/* Nota: vai depositar o nome, (pushname) dentro do json */
const getRegisterName = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].name
            }
        }
        
/* Nota: Vai depositar o Id da pessoa */
const getRegisterNo = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].id
            }
        }
        
/* Nota: Mart random do id no json */
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

/* Nota: Vai depositar todas as function dentro do json */
const addRegisteredUser = (userid, sender, time, serials) => {
            const obj = { id: userid, name: sender,  time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./base de dados/datauser/registered.json', JSON.stringify(_registered))
        }

/* Nota: Vai criar o serial em ramdom para usar como cretidos */
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }

module.exports = {
	getRegisterTime,
	getRegisterAge,
	getRegisterSerial,
	getRegisterName,
	getRegisterNo,
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser,
}