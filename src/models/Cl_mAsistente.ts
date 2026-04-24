import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mAsistente extends Cl_mPersona {
    protected esEstudiante: boolean;
    protected _tipoEntrada: number = 0;

    constructor({ nombre, apellido, cedula, genero, fechaNacimiento, esEstudiante }: 
                { nombre: string; apellido: string; cedula: number; genero: string; fechaNacimiento: Date; esEstudiante: boolean }) {
        super({ nombre, apellido, cedula, genero, fechaNacimiento });
        this.esEstudiante = esEstudiante;
    }

    precio(): number {
        throw new Error("Se implementa en las subclase");
    }

    tipoEntrada(): number {
        return this._tipoEntrada;
    }

    edadActual(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const cumpleEsteAno = new Date(hoy.getFullYear(), this.fechaNacimiento.getMonth(), this.fechaNacimiento.getDate());
        if (hoy < cumpleEsteAno) edad--;
        return edad;
    }
}