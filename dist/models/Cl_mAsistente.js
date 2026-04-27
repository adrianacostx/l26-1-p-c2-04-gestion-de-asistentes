import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mAsistente extends Cl_mPersona {
    _esEstudiante;
    _tipoEntrada = 0;
    constructor({ nombre, apellido, cedula, sexo, fechaNacimiento, esEstudiante, tipoEntrada }) {
        super({ nombre, apellido, cedula, sexo, fechaNacimiento });
        this._esEstudiante = esEstudiante;
        this._tipoEntrada = tipoEntrada;
    }
    tipoEntrada() {
        return this._tipoEntrada;
    }
    edadActual() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const cumpleEsteAno = new Date(hoy.getFullYear(), this.fechaNacimiento.getMonth(), this.fechaNacimiento.getDate());
        if (hoy < cumpleEsteAno)
            edad--;
        return edad;
    }
    precio() {
        if (this._tipoEntrada === 1) { // Regular
            // $10, con 50% descuento si estudiante y menor de edad
            const esMenorEstudiante = this._esEstudiante && this.edadActual() < 18;
            return esMenorEstudiante ? 5 : 10;
        }
        else { // VIP
            // $30, $25 para damas (sexo 'F')
            return this.sexo.toUpperCase() === "F" ? 25 : 30;
        }
    }
}
//# sourceMappingURL=Cl_mAsistente.js.map