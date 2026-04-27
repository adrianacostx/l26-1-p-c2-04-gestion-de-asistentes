export default class Cl_mPersona {
    private _nombre: string;
    private _apellido: string;
    private _cedula: number;
    private _sexo: string;
    private _fechaNacimiento: Date;

    constructor({ nombre, apellido, cedula, sexo, fechaNacimiento }: { nombre: string; apellido: string; cedula: number; sexo: string; fechaNacimiento: Date }) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._sexo = sexo;
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
    set sexo(value: string) {
        this._sexo = value;
    }
    get sexo(): string {
        return this._sexo;
    }
    set fechaNacimiento(value: Date) {
        this._fechaNacimiento = value;
    }
    get fechaNacimiento(): Date {
        return this._fechaNacimiento;
    }
}