var str1 = 'Hello world!'
var str2 = "Hello world 2!"

var personName = 'Виктор'

var message = 'Человека зовут "' + personName + '"' 
var message2 = "Человека зовут '" + personName + "'"
var message3 = 'Человека зовут \'' + personName + '\'' 

console.log (message3)

var newMessage = 'Hello world!!!'

console.log (newMessage.length)
console.log (newMessage.toUpperCase())
console.log (newMessage.toLowerCase())
console.log (newMessage.charAt(1))
console.log (newMessage.indexOf('world'))
console.log (newMessage.indexOf('cat'))
console.log (newMessage.substr(1, 4))
console.log (newMessage.substr(newMessage.indexOf('world'), 5))
console.log (newMessage.substring(1))
console.log (newMessage.substring(1, 3))