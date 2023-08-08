import { Tweet } from "./classes/Tweet";
import { Usuario } from "./classes/Usuario";
import { listUsuarios } from "./database/usuarios";

console.log('//----------------------------------------------//')
console.log('GROWTWEETER')
console.log('//----------------------------------------------//')

// usuários
console.log('-')
console.log('----------CRIAÇÃO DE USUÁRIOS----------')
console.log('-')
const user1 = new Usuario('Eduarda Lobell', 'dudalobell', 'lobell@teste.com', 'neorfwe8')
const user2 = new Usuario('Pedro Oliveira', 'pedrooli', 'pedro@teste.com', 'js8je8')
const user3 = new Usuario('Ivete da Silva', 'silvaivete', 'ivete@teste.com', 'jifce8')
const user4 = new Usuario('Ivete da Silva', 'silvaivete', 'ivete@teste.com', 'jifce8')

listUsuarios.addUsuario(user1)
listUsuarios.addUsuario(user2)
listUsuarios.addUsuario(user3)
listUsuarios.addUsuario(user4)

// criação de tweets
console.log('-')
console.log('----------CRIAÇÃO DE TWEETS----------')
console.log('-')
const tweet1 = new Tweet('Hoje fui contratada!', 'normal', user1)
user1.mandarTweet(tweet1)
const tweet2 = new Tweet('Amanhã tenho dentista😖', 'normal', user2)
user2.mandarTweet(tweet2)
const tweet3 = new Tweet('Today is gonna be the day...🎶', 'normal', user3)
user3.mandarTweet(tweet3)
const tweet4 = new Tweet('XABLAU!!', 'normal', user1)
user1.mandarTweet(tweet4)
const tweet5 = new Tweet('eu não aguento mais...', 'normal', user2)
user2.mandarTweet(tweet5)


// seguir usuários
console.log('-')
console.log('----------SEGUIR USUARIOS----------')
console.log('-')
user1.seguir(user2)
user2.seguir(user3)
user3.seguir(user1)

// likes
console.log('-')
console.log('----------LIKES----------')
console.log('-')
tweet1.like(user2) 
tweet1.like(user3) 
tweet2.like(user2) 
tweet3.like(user3) 
tweet2.like(user1) 
tweet4.like(user2)

// criação de replies
console.log('-')
console.log('----------CRIAÇÃO DE REPLIES----------')
console.log('-')
const reply1 = new Tweet('Que novidade boa!', 'reply', user2)
const reply2 = new Tweet('Eu também não gosto', 'reply', user1)
const reply3 = new Tweet('Boa sorte!', 'reply', user3)
tweet1.reply(reply1)
tweet2.reply(reply2)
tweet1.reply(reply3)

// metodo mostrarTweets
console.log('-')
console.log('----------MÉTODO MOSTRAR TWEETS DOS USUÁRIOS----------')
console.log('-')
user1.mostrar()
user2.mostrar()
user3.mostrar()

// metodo mostrarFeed 
console.log('-')
console.log('----------MÉTODO MOSTRAR FEED----------')
console.log('-')

user1.mostrarFeed()


