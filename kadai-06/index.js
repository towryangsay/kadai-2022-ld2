const fs = require('fs')
const json = fs.readFileSync('./kadai-06/data.json').toString()

let object
try {
    object = JSON.parse(json)
} catch (error) {
    console.log('不正な JSON フォーマットです')
    process.exit(1)
}

object.count = object.count + 1
object.updateAt = new Date().toISOString()
fs.writeFileSync(
    './kadai-06/data.json',
    JSON.stringify(object, null, 2)
)
