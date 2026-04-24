export default class Cl_mPersona {
    private _nombre: string;
    private _apellido: string;
    private _cedula: number;
    private _genero: string;
    private _fechaNacimiento: Date;

    constructor({ nombre, apellido, cedula, genero, fechaNacimiento }: { nombre: string; apellido: string; cedula: number; genero: string; fechaNacimiento: Date }) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._genero = genero;
        this._fechaNacimiento = fechaNacimiento;
    }

    set nombre(value: string) {
        this._nombre = value;
    }
    get nombre(): string {
        return this._nombre;
    }
    set apellido(value: string) {
        this._apellido = value;
    }
    get apellido(): string {
        return this._apellido;
    }
    set cedula(value: number) {
        this._cedula = value;
    }
    get cedula(): number {
        return this._cedula;
    }
    set genero(value: string) {
        this._genero = value;
    }
    get genero(): string {
        return this._genero;
    }
    set fechaNacimiento(value: Date) {
        this._fechaNacimiento = value;
    }
    get fechaNacimiento(): Date {
        return this._fechaNacimiento;
    }
}