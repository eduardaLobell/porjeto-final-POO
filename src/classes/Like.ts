import { Base } from "./Base";
import { Usuario } from "./Usuario";

export class Like extends Base {
    constructor(private _usuario: Usuario) {
        super()
    }

    public get username(): string {
        return this._usuario.username;
    }
}