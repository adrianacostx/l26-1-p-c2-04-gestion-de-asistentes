import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mAsistente extends Cl_mPersona {
    private _esEstudiante: boolean;
    private _tipoEntrada: number = 0;

    constructor({ nombre, apellido, cedula, sexo, fechaNacimiento, esEstudiante, tipoEntrada }: 
                { nombre: string; apellido: string; cedula: number; sexo: string; fechaNacimiento: Date; esEstudiante: boolean; tipoEntrada: number }) {
        super({ nombre, apellido, cedula, sexo, fechaNacimiento });
        this._esEstudiante = esEstudiante;
        this._tipoEntrada = tipoEntrada;
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
    precio(): number {
        if (this._tipoEntrada === 1) {  // Regular
            // $10, con 50% descuento si estudiante y menor de edad
            const esMenorEstudiante = this._esEstudiante && this.edadActual() < 18;
            return esMenorEstudiante ? 5 : 10;
        } else {  // VIP
            // $30, $25 para damas (sexo 'F')
            return this.sexo.toUpperCase() === "F" ? 25 : 30;
        }
    }
}