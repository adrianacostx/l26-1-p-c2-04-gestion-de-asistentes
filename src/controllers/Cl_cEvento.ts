import Cl_mEvento from "../models/Cl_mEvento.js";
import { I_vEvento } from "../interfaces/I_vEvento.js";
import Cl_cAsistente from "./Cl_cAsistente.js";

export default class Cl_cEvento {
    private mEvento: Cl_mEvento = new Cl_mEvento();
    private vEvento: I_vEvento;
    private cAsistente: Cl_cAsistente;

    constructor(vistaEvento: I_vEvento, controladorAsistente: Cl_cAsistente) {
        this.vEvento = vistaEvento;
        this.cAsistente = controladorAsistente;
        this.vEvento.onAgregarAsistente(() => this.procesarAsistente());
    }

    procesarAsistente() {
        this.cAsistente.solicitarAsistente((asistente) => {
            if (asistente) {
                this.mEvento.procesarAsistente(asistente);
                this.vEvento.reportar({
                    totalEntrada: this.mEvento.totalEntrada(),
                    totalRegulares: this.mEvento.totalRegulares(),
                    totalVIP: this.mEvento.totalVIP(),
                    totalAsistentes: this.mEvento.totalAsistentes(),
                    porcentajeMenores: this.mEvento.porcentajeMenores(),
                    porcentajeMayores: this.mEvento.porcentajeMayores(),
                    porcentajeRegulares: this.mEvento.porcentajeRegulares(),
                    porcentajeVIP: this.mEvento.porcentajeVIP(),
                });
            }
        });
    }
}