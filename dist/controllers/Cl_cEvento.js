import Cl_mEvento from "../models/Cl_mEvento.js";
export default class Cl_cEvento {
    mEvento = new Cl_mEvento();
    vEvento;
    cAsistente;
    constructor(vistaEvento, controladorAsistente) {
        this.vEvento = vistaEvento;
        this.cAsistente = controladorAsistente;
        this.vEvento.onAgregarAsistente(() => this.procesarAsistente());
    }
    procesarAsistente() {
        this.cAsistente.solicitarAsistente((asistente) => {
            if (asistente) {
                this.mEvento.procesarAsistente(asistente);
                this.vEvento.reportar({
                    totalEntrada: this.mEvento.totalEntrada,
                    totalRegulares: this.mEvento.totalRegulares,
                    totalVIP: this.mEvento.totalVIP,
                    totalAsistentes: this.mEvento.totalAsistentes,
                    porcentajeMenores: this.mEvento.porcentajeMenores,
                    porcentajeMayores: this.mEvento.porcentajeMayores,
                    porcentajeRegulares: this.mEvento.porcentajeRegulares,
                    porcentajeVIP: this.mEvento.porcentajeVIP,
                });
            }
        });
    }
}
//# sourceMappingURL=Cl_cEvento.js.map