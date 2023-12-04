export class usuario{
    private _user: string="";
    private _psw: string="";

    constructor(user:string, psw: string){
        this._user = user;
        this._psw = psw;
    }

    public get user(): string {
        return this._user
    }

    public set user(value: string){
        this._user = value
    }

    public get psw(): string {
        return this._psw
    }

    public set psw(value: string){
        this._psw = value
    }

    public toString(): string {
        return `USER: ${this._user}, PSW: ${this._psw}`
    }
}