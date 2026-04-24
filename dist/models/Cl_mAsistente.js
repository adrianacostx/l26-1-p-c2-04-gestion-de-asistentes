import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mAsistente extends Cl_mPersona {
    esEstudiante;
    _tipoEntrada = 0;
    constructor({ nombre, apellido, cedula, genero, fechaNacimiento, esEstudiante }) {
        super({ nombre, apellido, cedula, genero, fechaNacimiento });
        this.esEstudiante = esEstudiante;
    }
    precio() {
        throw new Error("Se implementa en las subclase");
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
}
//# sourceMappingURL=Cl_mAsistente.js.map