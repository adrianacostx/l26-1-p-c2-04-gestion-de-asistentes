import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mAsistente extends Cl_mPersona {
    _esEstudiante;
    _tipoEntrada;
    constructor({ nombre, apellido, cedula, sexo, fechaNacimiento, esEstudiante, tipoEntrada }) {
        super({ nombre, apellido, cedula, sexo, fechaNacimiento });
        this._esEstudiante = esEstudiante;
        this._tipoEntrada = tipoEntrada;
    }
    set esEstudiante(value) {
        this._esEstudiante = value;
    }
    get esEstudiante() {
        return this._esEstudiante;
    }
    set tipoEntrada(value) {
        this._tipoEntrada = value;
    }
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    genero() {
        if (this.sexo.toUpperCase() === "M") {
            return "M";
        }
        else if (this.sexo.toUpperCase() === "F") {
            return "F";
        }
        return "";
    }
    edadActual() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const cumpleEsteAno = new Date(hoy.getFullYear(), this.fechaNacimiento.getMonth(), this.fechaNacimiento.getDate());
        if (hoy < cumpleEsteAno)
            edad--;
        return edad;
    }
    precioBase() {
        if (this._tipoEntrada === 1) {
            return 10;
        }
        else if (this._tipoEntrada === 2 && this.sexo.toUpperCase() === "F") {
            return 25;
        }
        else if (this._tipoEntrada === 2) {
            return 30;
        }
        return 0;
    }
    descuento() {
        if (this._tipoEntrada === 1 && this._esEstudiante && this.edadActual() < 18) {
            return 5;
        }
        return 0;
    }
    precio() {
        return this.precioBase() - this.descuento();
    }
}
//# sourceMappingURL=Cl_mAsistente.js.map