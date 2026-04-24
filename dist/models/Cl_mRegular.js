import Cl_mAsistente from "./Cl_mAsistente.js";
export default class Cl_mRegular extends Cl_mAsistente {
    constructor(datos) {
        super(datos);
        this._tipoEntrada = 1; // Regular
    }
    precio() {
        // Regular: $10, con 50% descuento si estudiante y menor de edad
        const esMenorEstudiante = this.esEstudiante && this.edadActual() < 18;
        return esMenorEstudiante ? 5 : 10;
    }
}
//# sourceMappingURL=Cl_mRegular.js.map