const fs = require('fs')
let person = {
    "name" : "sajid khan",
    "email" : "khan123@gmail.com"
};
let employeeName = {
    name : person.name
}
let employee = JSON.stringify([person, employeeName])
//let employee_name = JSON.stringify(employeeName)
let employee1 = JSON.parse(employee)
fs.writeFileSync('./notes/1-json.json',employee)
//fs.writeFileSync('./notes/notes.txt',employee)
//fs.appendFileSync('./notes/notes.txt', 'i am Computer systems Engineer');
//fs.appendFileSync('./notes/1-json.json', employee_name);
/*let dataBuffer = fs.readFileSync('./notes/1-json.json')
let JSONdata = JSON.parse(dataBuffer)*/
//console.log(dataBuffer.toString())
//console.log(JSONdata.employeeName.name)
let dataBuffer = fs.readFileSync('./notes/1-json.json')
let JSONdata = JSON.parse(dataBuffer)
let userName = JSONdata[0].name = 'sajid'
let updatedName = JSON.stringify(JSONdata)
fs.writeFileSync('./notes/1-json.json',updatedName)