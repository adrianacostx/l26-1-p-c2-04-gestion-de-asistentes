// Se tiene la clase base persona con los siguientes datos:

// - Nombre
// - Apellido
// - Cédula
// - Sexo (M o F)
// - Fecha de Nacimiento (aaa-mm-dd)

// EVENTO: Gestión de asistentes a evento
//    -> Se registran los datos de cada asistente
//    -> Se conoce además de cada uno:
//        + Tipo de entrada: 1-Regular, 2-VIP
// 	   + Precios: $10 y $30 ($25 damas)
// 	   + La regular tiene 50% descuento para estudiantes menores de edad
//    -> Reportar totales varios
//    -> Repotar porcentajes por edades
//    -> Repotar porcentajes por tipo entrada

import { I_vAsistente } from "../interfaces/I_vAsistente.js";
import Cl_mAsistente from "../models/Cl_mAsistente.js";

export default class Cl_cAsistente {
    private vista: I_vAsistente;
    private callback!: (asistente: Cl_mAsistente | null) => void;

    constructor(vista: I_vAsistente) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }

    solicitarAsistente(callback: (asistente: Cl_mAsistente | null) => void) {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }

    private btAceptarOnClick() {
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