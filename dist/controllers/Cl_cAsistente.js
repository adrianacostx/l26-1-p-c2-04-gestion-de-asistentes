// Se tiene la clase base persona con los siguientes datos:
import Cl_mAsistente from "../models/Cl_mAsistente.js";
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
        const asistente = new Cl_mAsistente({
            nombre: this.vista.nombre,
            apellido: this.vista.apellido,
            cedula: this.vista.cedula,
            sexo: this.vista.sexo,
            fechaNacimiento: this.vista.fechaNacimiento,
            esEstudiante: this.vista.esEstudiante,
            tipoEntrada: this.vista.tipoEntrada
        });
        this.callback(asistente);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cAsistente.js.map