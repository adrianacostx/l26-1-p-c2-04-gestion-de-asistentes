import Cl_mAsistente from "./Cl_mAsistente.js";

export default class Cl_mRegular extends Cl_mAsistente {
    constructor(datos: { nombre: string; apellido: string; cedula: number; genero: string; fechaNacimiento: Date; esEstudiante: boolean }) {
        super(datos);
        this._tipoEntrada = 1; // Regular
    }

    precio(): number {
        // Regular: $10, con 50% descuento si estudiante y menor de edad
        const esMenorEstudiante = this.esEstudiante && this.edadActual() < 18;
        return esMenorEstudiante ? 5 : 10;
    }
}