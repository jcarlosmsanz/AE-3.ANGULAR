export class Videojuego {
    private static _contadorId: number = 1; // Cambiado a estátic
    private _id: number = 0;
    private _titulo: string = "";
    private _compania: string = "";
    private _valoracion: string = "";
    private _imagen: string = "";


    constructor(titulo: string, compania: string, valoracion: string, imagen: string) {
        this._id = Videojuego._contadorId++;
        this._titulo = titulo;
        this._compania = compania;
        this._valoracion = valoracion;
        this._imagen = imagen;

    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value
    }

    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(value: string) {
        this._titulo = value
    }

    public get compania(): string {
        return this._compania;
    }

    public set compania(value: string) {
        this._compania = value
    }

    public get valoracion(): string {
        return this._valoracion;
    }

    public set valoracion(value: string) {
        this._valoracion = value
    }

    public get imagen(): string {
        return this._imagen;
    }

    public set imagen(value: string) {
        this._imagen = value
    }

    public toString(): string {
        return `ID: ${this._id}, Titulo: ${this.titulo}, Compania: ${this.compania}, Valoracion: ${this.valoracion}, Imagen: ${this.imagen}`
    }

}