import { Like } from "./Like"
import { Usuario } from "./Usuario"
import { Base } from "./Base"

type TipoConteudo = 'normal' | 'reply'

interface RetornoMostrar {
    conteudo: string,
    likes: Like[],
    replies: Tweet[],
    tipo: TipoConteudo,
    usuario: Usuario
}

export class Tweet extends Base {
    public _replies: Tweet[]
    private _likes: Like[]

    constructor(private _conteudo: string, private _tipo: TipoConteudo, private _proprietario: Usuario) {
        super()
        this._replies = []
        this._likes = []
    }

    public reply(tweet: Tweet): void {
        if(tweet.mostrar().tipo !== 'reply') {
            console.log('Só é possível fazer essa ação quando o tweet é do tipo reply.')
            console.log('//----------------------------------------------//')
            return
        }

        this._replies.push(tweet)
        console.log('Reply feito com sucesso!')
        console.log('//----------------------------------------------//')
    }
    

    public like(usuario: Usuario): void {
        const existe = this._likes.findIndex((i) => i.username === usuario.username)

        if(existe >= 0) {
            console.log('Você já curtiu esse tweet, não é possível curtir mais de uma vez.')
            console.log('//----------------------------------------------//')
            return
        }

        const like = new Like(usuario)
        this._likes.push(like)

        console.log(`Tweet curtido com sucesso!`)
        console.log('//----------------------------------------------//')
    }

    public mostrar(): RetornoMostrar {
        return {
            conteudo: this._conteudo,
            likes: this._likes,
            replies: this._replies,
            tipo: this._tipo,
            usuario: this._proprietario
        }
    }

}
