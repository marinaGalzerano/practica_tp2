const fs = require('fs')
const crypto = require('crypto')
const path = require('path')
const folder = 'data'
const ext = '.txt'
const enc = 'utf-8'

module.exports = {
    /**
     * *** *** *** *** *** *** *** *** ***
     * NO MODIFICAR
     * NO MODIFICAR
     * NO MODIFICAR
     * *** *** *** *** *** *** *** *** ***
     * @param {*} text 
     * @returns 
     */
    save(text) {
        let uuid = crypto.randomUUID()

        let file = path.resolve(folder, uuid + ext)

        fs.writeFileSync(file, text, {encoding: enc, flag: "a+"})

        return uuid
    },

    /**
     * *** *** *** *** *** *** *** *** ***
     * NO MODIFICAR
     * NO MODIFICAR
     * NO MODIFICAR
     * *** *** *** *** *** *** *** *** ***
     * 
     * @param {*} uuid 
     * @returns 
     */
    read(uuid) {
        let file = path.resolve(folder, uuid + ext)

        let content = fs.readFileSync(file, {encoding: enc})

        return content
    }
}