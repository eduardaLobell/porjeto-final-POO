import { Tweet } from "./Tweet"
import { listUsuarios } from "../database/usuarios"
import { Base } from "./Base"

export class Usuario extends Base {
    private _seguidores: Usuario[]
    private _tweets: Tweet[]

    constructor(private _nome: string, private _username: string, private _email: string, private _senha: string) {
        super()
        this._seguidores = []
        this._tweets = []
    } 

    public mandarTweet(tweet: Tweet) {
        if(this._id !== tweet.mostrar().usuario._id){
            console.log('Não é permitido enviar um tweet que é de outro usuário')
            console.log('//----------------------------------------------//')
            return
        }
        if(tweet.mostrar().tipo !== "normal") {
            console.log('Não é permitido criar um novo tweet do tipo reply.')
            console.log('//----------------------------------------------//')
            return
        }
        this._tweets.push(tweet)
        console.log('Tweet enviado com sucesso!')
        console.log('//----------------------------------------------//')
    }

    public seguir (usuario: Usuario) {
        const existe = listUsuarios.data.findIndex((user) => user._username === usuario._username)

        if (existe === -1) {
            console.log('Esse usuário não existe.')
            console.log('//----------------------------------------------//')
            return
        }

        if(this._username === usuario._username) {
            console.log('Não é possível/permitido seguir a si mesmo.')
            console.log('//----------------------------------------------//')
            return
        }

        this._seguidores.push(usuario)
        console.log(`Usuário @${usuario._username} seguido!`)
        console.log('//----------------------------------------------//')
    }

    public mostrarFeed() {
        if(!this._seguidores.length) {
            console.log('Você não segue ninguém para mostrar o feed.')
            console.log('//----------------------------------------------//')
            return
        }

        this._seguidores.forEach((seguidor) => {
            if(!seguidor._tweets.length){
                console.log('Os usuários que você segue não twitaram nada ainda...')
                console.log('//----------------------------------------------//')
                return
            }

            seguidor.mostrar()
        })
    }

    public mostrar() {
        if (this._tweets.length === 0) {
            console.log('Você não twitou nenhuma vez.')
            console.log('//----------------------------------------------//')
            return
        }

        this._tweets.forEach((tweet) => {
            if(!tweet.mostrar().likes.length) {
                console.log(`@${this._username}: ${tweet.mostrar().conteudo} \n [0] likes.`)
                if(tweet.mostrar().replies.length === 0) {
                    console.log('//----------------------------------------------//')
                    return
                }
                tweet.mostrar().replies.forEach((reply) => {
                    console.log(`     >@${reply.mostrar().usuario._username}: ${reply.mostrar(). conteudo}`)
                })
                console.log('//----------------------------------------------//')
                return
            }

            if(tweet.mostrar().likes.length === 1) {
                console.log(`@${this._username}: ${tweet.mostrar().conteudo} \n [${tweet.mostrar().likes[0].username}] curtiu`)
                if(!tweet.mostrar().replies.length) {
                    console.log('//----------------------------------------------//')
                    return
                }
                tweet.mostrar().replies.forEach((reply) => {
                    console.log(`     >@${reply.mostrar().usuario._username}: ${reply.mostrar(). conteudo}`)
                })
                console.log('//----------------------------------------------//')
                return
            }

            if(!tweet.mostrar().replies.length) {
                console.log(`@${this._username}: ${tweet.mostrar().conteudo} \n [${tweet.mostrar().likes.length}] likes`)
                console.log('//----------------------------------------------//')
                return
            }
            
            console.log(`@${this._username}: ${tweet.mostrar().conteudo} \n [${tweet.mostrar().likes.length}] likes`)
            tweet.mostrar().replies.forEach((reply) => {
                console.log(`     >@${reply.mostrar().usuario._username}: ${reply.mostrar(). conteudo}`)
            })
            console.log('//----------------------------------------------//')
        })
    }

    public get username (): string{
        return this._username
    }
}