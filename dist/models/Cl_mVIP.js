import Cl_mAsistente from "./Cl_mAsistente.js";
export default class Cl_mVIP extends Cl_mAsistente {
    constructor(datos) {
        super(datos);
        this._tipoEntrada = 2; // VIP
    }
    get precio() {
        // VIP: $30, $25 para damas
        return this.genero.toUpperCase() === "F" ? 25 : 30;
    }
}
//# sourceMappingURL=Cl_mVIP.js.map