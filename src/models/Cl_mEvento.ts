import Cl_mAsistente from "./Cl_mAsistente.js";

export default class Cl_mEvento {
    private cntTotalAsistentes: number = 0;
    private acTotalEntrada: number = 0;
    private acTotalRegulares: number = 0;
    private acTotalVIP: number = 0;
    private contadorTipo1: number = 0;
    private contadorTipo2: number = 0;
    private contadorMenores: number = 0;

    procesarAsistente(a: Cl_mAsistente): void {
        this.cntTotalAsistentes++;
        const precio = a.precio;
        this.acTotalEntrada += precio;
        if (a.tipoEntrada === 1) {
            this.contadorTipo1++;
            this.acTotalRegulares += precio;
        } else if (a.tipoEntrada === 2) {
            this.contadorTipo2++;
            this.acTotalVIP += precio;
        }
        if (a.edadActual < 18) {
            this.contadorMenores++;
        }
    }

    get totalAsistentes(): number { return this.cntTotalAsistentes; }
    get totalEntrada(): number { return this.acTotalEntrada; }
    get totalRegulares(): number { return this.acTotalRegulares; }
    get totalVIP(): number { return this.acTotalVIP; }
    get porcentajeMenores(): number {
        return this.cntTotalAsistentes > 0 ? (this.contadorMenores / this.cntTotalAsistentes) * 100 : 0;
    }
    get porcentajeMayores(): number {
        return this.cntTotalAsistentes > 0 ? ((this.cntTotalAsistentes - this.contadorMenores) / this.cntTotalAsistentes) * 100 : 0;
    }
    get porcentajeRegulares(): number {
        return this.cntTotalAsistentes > 0 ? (this.contadorTipo1 / this.cntTotalAsistentes) * 100 : 0;
    }
    get porcentajeVIP(): number {
        return this.cntTotalAsistentes > 0 ? (this.contadorTipo2 / this.cntTotalAsistentes) * 100 : 0;
    }
}