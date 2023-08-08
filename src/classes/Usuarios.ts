import { listUsuarios } from "../database/usuarios";
import { Usuario } from "./Usuario";


export class Usuarios {
    private _data: Usuario[]

    constructor() {
        this._data = []
    }


    public addUsuario(usuario: Usuario) {
        const existe = listUsuarios._data.findIndex((i) => i.username === usuario.username)

        if(existe >= 0) {
            console.log('Esse nome de usuário já existe. Não foi possível criá-lo.')
            console.log('//----------------------------------------------//')
            return
        }

        if(!listUsuarios._data.length ) {
            listUsuarios._data.push(usuario)
            console.log('Usuário criado com sucesso!')
            console.log('//----------------------------------------------//')
            return
        }

        listUsuarios._data.push(usuario)
        console.log('Usuário criado com sucesso!')
        console.log('//----------------------------------------------//')
    }

    public get data () {
        return this._data
    }
}