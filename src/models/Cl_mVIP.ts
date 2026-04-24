import Cl_mAsistente from "./Cl_mAsistente.js";

export default class Cl_mVIP extends Cl_mAsistente {
    constructor(datos: { nombre: string; apellido: string; cedula: number; genero: string; fechaNacimiento: Date; esEstudiante: boolean }) {
        super(datos);
        this._tipoEntrada = 2; // VIP
    }

    precio(): number {
        // VIP: $30, $25 para damas
        return this.genero.toUpperCase() === "F" ? 25 : 30;
    }
}