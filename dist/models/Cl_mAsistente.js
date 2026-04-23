import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mAsistente extends Cl_mPersona {
    esEstudiante;
    _tipoEntrada = 0;
    constructor({ nombre, apellido, cedula, genero, edad, esEstudiante }) {
        super({ nombre, apellido, cedula, genero, edad });
        this.esEstudiante = esEstudiante;
    }
    get precio() {
        throw new Error("Se implementa en las subclase");
    }
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    get edadActual() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.edad.getFullYear();
        const cumpleEsteAno = new Date(hoy.getFullYear(), this.edad.getMonth(), this.edad.getDate());
        if (hoy < cumpleEsteAno)
            edad--;
        return edad;
    }
}
//# sourceMappingURL=Cl_mAsistente.js.map