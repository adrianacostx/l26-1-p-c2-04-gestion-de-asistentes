export default class Cl_mEvento {
    cntTotalAsistentes = 0;
    acTotalEntrada = 0;
    acTotalRegulares = 0;
    acTotalVIP = 0;
    contadorTipo1 = 0;
    contadorTipo2 = 0;
    contadorMenores = 0;
    contadorMasculino = 0;
    contadorFemenino = 0;
    procesarAsistente(a) {
        this.cntTotalAsistentes++;
        const precio = a.precio();
        this.acTotalEntrada += precio;
        if (a.tipoEntrada === 1) {
            this.contadorTipo1++;
            this.acTotalRegulares += precio;
        }
        else if (a.tipoEntrada === 2) {
            this.contadorTipo2++;
            this.acTotalVIP += precio;
        }
        if (a.edadActual() < 18) {
            this.contadorMenores++;
        }
        if (a.genero() === "M") {
            this.contadorMasculino++;
        }
        else if (a.genero() === "F") {
            this.contadorFemenino++;
        }
    }
    totalEntrada() {
        return this.acTotalEntrada;
    }
    totalRegulares() {
        return this.acTotalRegulares;
    }
    totalVIP() {
        return this.acTotalVIP;
    }
    totalAsistentes() {
        return this.cntTotalAsistentes;
    }
    porcentajeMenores() {
        return this.cntTotalAsistentes > 0 ? (this.contadorMenores / this.cntTotalAsistentes) * 100 : 0;
    }
    porcentajeMayores() {
        return this.cntTotalAsistentes > 0 ? ((this.cntTotalAsistentes - this.contadorMenores) / this.cntTotalAsistentes) * 100 : 0;
    }
    porcentajeRegulares() {
        return this.cntTotalAsistentes > 0 ? (this.contadorTipo1 / this.cntTotalAsistentes) * 100 : 0;
    }
    porcentajeVIP() {
        return this.cntTotalAsistentes > 0 ? (this.contadorTipo2 / this.cntTotalAsistentes) * 100 : 0;
    }
    porcentajeMasculino() {
        return this.cntTotalAsistentes > 0 ? (this.contadorMasculino / this.cntTotalAsistentes) * 100 : 0;
    }
    porcentajeFemenino() {
        return this.cntTotalAsistentes > 0 ? (this.contadorFemenino / this.cntTotalAsistentes) * 100 : 0;
    }
}
//# sourceMappingURL=Cl_mEvento.js.map