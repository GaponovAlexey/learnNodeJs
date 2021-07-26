//file System

const fs = require('fs')
const path = require('path')

//fs.mkdir(path.join(__dirname, 'test'), (err) =>{
//	if(err) {
//		throw err
//	}
//	console.log('create a folder');
//})



//fs.writeFile(filePath, 'Hello again', err => {
//	if (err) { throw err }

//	console.log('file created');
//})
//fs.appendFile(filePath, '\nHello again', err => {
//	if (err) { throw err }

//	console.log('file created');
//})
const filePath = path.join(__dirname, 'test', 'text.txt')

fs.readFile(filePath, 'utf-8', (err, content) => {
	if (err) { throw err }
	//const data = Buffer.from(content)
	console.log('content:', content)
})