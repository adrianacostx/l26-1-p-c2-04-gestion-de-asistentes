export default class Cl_mEvento {
    cntTotalAsistentes = 0;
    acTotalEntrada = 0;
    acTotalRegulares = 0;
    acTotalVIP = 0;
    contadorTipo1 = 0;
    contadorTipo2 = 0;
    contadorMenores = 0;
    procesarAsistente(a) {
        this.cntTotalAsistentes++;
        const precio = a.precio;
        this.acTotalEntrada += precio;
        if (a.tipoEntrada === 1) {
            this.contadorTipo1++;
            this.acTotalRegulares += precio;
        }
        else if (a.tipoEntrada === 2) {
            this.contadorTipo2++;
            this.acTotalVIP += precio;
        }
        if (a.edadActual < 18) {
            this.contadorMenores++;
        }
    }
    get totalAsistentes() { return this.cntTotalAsistentes; }
    get totalEntrada() { return this.acTotalEntrada; }
    get totalRegulares() { return this.acTotalRegulares; }
    get totalVIP() { return this.acTotalVIP; }
    get porcentajeMenores() {
        return this.cntTotalAsistentes > 0 ? (this.contadorMenores / this.cntTotalAsistentes) * 100 : 0;
    }
    get porcentajeMayores() {
        return this.cntTotalAsistentes > 0 ? ((this.cntTotalAsistentes - this.contadorMenores) / this.cntTotalAsistentes) * 100 : 0;
    }
    get porcentajeRegulares() {
        return this.cntTotalAsistentes > 0 ? (this.contadorTipo1 / this.cntTotalAsistentes) * 100 : 0;
    }
    get porcentajeVIP() {
        return this.cntTotalAsistentes > 0 ? (this.contadorTipo2 / this.cntTotalAsistentes) * 100 : 0;
    }
}
//# sourceMappingURL=Cl_mEvento.js.map