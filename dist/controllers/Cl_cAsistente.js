// Se tiene la clase base persona con los siguientes datos:
import Cl_mRegular from "../models/Cl_mRegular.js";
import Cl_mVIP from "../models/Cl_mVIP.js";
export default class Cl_cAsistente {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarAsistente(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        const datosBase = {
            nombre: this.vista.nombre,
            apellido: this.vista.apellido,
            cedula: this.vista.cedula,
            genero: this.vista.genero,
            edad: this.vista.edad,
            esEstudiante: this.vista.esEstudiante,
        };
        let asistente;
        if (this.vista.tipoEntrada === 1) {
            asistente = new Cl_mRegular(datosBase);
        }
        else {
            asistente = new Cl_mVIP(datosBase);
        }
        this.callback(asistente);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cAsistente.js.map