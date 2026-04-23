import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mAsistente extends Cl_mPersona {
    protected esEstudiante: boolean;
    protected _tipoEntrada: number = 0;

    constructor({ nombre, apellido, cedula, genero, edad, esEstudiante }: 
                { nombre: string; apellido: string; cedula: number; genero: string; edad: Date; esEstudiante: boolean }) {
        super({ nombre, apellido, cedula, genero, edad });
        this.esEstudiante = esEstudiante;
    }

    get precio(): number {
        throw new Error("Se implementa en las subclase");
    }

    get tipoEntrada(): number {
        return this._tipoEntrada;
    }

    get edadActual(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.edad.getFullYear();
        const cumpleEsteAno = new Date(hoy.getFullYear(), this.edad.getMonth(), this.edad.getDate());
        if (hoy < cumpleEsteAno) edad--;
        return edad;
    }
}