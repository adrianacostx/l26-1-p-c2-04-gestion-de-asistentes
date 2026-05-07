import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mAsistente extends Cl_mPersona {
    private _esEstudiante: boolean;
    private _tipoEntrada: number;

    constructor({ nombre, apellido, cedula, sexo, fechaNacimiento, esEstudiante, tipoEntrada }: 
                { nombre: string; apellido: string; cedula: number; sexo: string; fechaNacimiento: Date; esEstudiante: boolean; tipoEntrada: number }) {
        super({ nombre, apellido, cedula, sexo, fechaNacimiento });
        this._esEstudiante = esEstudiante;
        this._tipoEntrada = tipoEntrada;
    }
    set esEstudiante(value: boolean) {
        this._esEstudiante = value;
    }
    get esEstudiante(): boolean {
        return this._esEstudiante;
    }
    set tipoEntrada(value: number) {
        this._tipoEntrada = value;
    }
    get tipoEntrada(): number {
        return this._tipoEntrada;
    }

    genero(): string {
        if (this.sexo.toUpperCase() === "M") {
            return "M";
        } else if (this.sexo.toUpperCase() === "F") {
            return "F";
        }
        return "";
    }

    precioBase(): number {
        if (this.tipoEntrada === 1) {
            return 10;
        } else if (this.tipoEntrada === 2 && this.sexo.toUpperCase() === "F") {
            return 25;
        } else if (this.tipoEntrada === 2) {
            return 30;
        }
        return 0;
    }
    descuento(): number {
        if (this.tipoEntrada === 1 && this.esEstudiante && this.edadActual() < 18) {
            return 5;
        }
        return 0;
    }
    precio(): number {
        return this.precioBase() - this.descuento();
    }
    precioPromedioBaseMenores25NoEstudiantes(): number {
        if (this.edadActual() < 25 && this.esEstudiante === false) {
            return this.precioBase();
        }
        return 0;
    }
}