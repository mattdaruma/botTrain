const fs = require('fs')
const path = require('path')
const codePath = path.join(__dirname, 'node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js')
let codeValue = fs.readFileSync(codePath, 'utf8')
codeValue = codeValue.replace(/console\.log\(\`\s*\*+[^)]*\);/g, '')
fs.writeFileSync(codePath, codeValue)
