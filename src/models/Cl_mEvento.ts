import Cl_mAsistente from "./Cl_mAsistente.js";

export default class Cl_mEvento {
    private cntTotalAsistentes: number = 0;
    private acTotalEntrada: number = 0;
    private acTotalRegulares: number = 0;
    private acTotalVIP: number = 0;
    private contadorTipo1: number = 0;
    private contadorTipo2: number = 0;
    private contadorMenores: number = 0;
    private contadorMasculino: number = 0;
    private contadorFemenino: number = 0;
    private acumuladorPrecioBaseMenores25: number = 0;
    private contadorMenores25NoEstudiantes: number = 0;

    procesarAsistente(a: Cl_mAsistente): void {
        this.cntTotalAsistentes++;
        const precio = a.precio();
        this.acTotalEntrada += precio;
        if (a.tipoEntrada === 1) {
            this.contadorTipo1++;
            this.acTotalRegulares += precio;
        } else if (a.tipoEntrada === 2) {
            this.contadorTipo2++;
            this.acTotalVIP += precio;
        }
        if (a.edadActual() < 18) {
            this.contadorMenores++;
        }
        if (a.edadActual() < 25 && a.esEstudiante === false) {
            this.acumuladorPrecioBaseMenores25 += a.precioPromedioBaseMenores25NoEstudiantes();
            this.contadorMenores25NoEstudiantes++;
        }
        if (a.genero() === "M") {
            this.contadorMasculino++;
        } else if (a.genero() === "F") {
            this.contadorFemenino++;
        }
    }

    totalEntrada(): number { 
        return this.acTotalEntrada; 
    }
    totalRegulares(): number { 
        return this.acTotalRegulares; 
    }
    totalVIP(): number { 
        return this.acTotalVIP; 
    }
    totalAsistentes(): number { 
        return this.cntTotalAsistentes;
    }
    porcentajeMenores(): number {
        return this.cntTotalAsistentes > 0 ? (this.contadorMenores / this.cntTotalAsistentes) * 100 : 0;
    }
    porcentajeMayores(): number {
        return this.cntTotalAsistentes > 0 ? ((this.cntTotalAsistentes - this.contadorMenores) / this.cntTotalAsistentes) * 100 : 0;
    }
    porcentajeRegulares(): number {
        return this.cntTotalAsistentes > 0 ? (this.contadorTipo1 / this.cntTotalAsistentes) * 100 : 0;
    }
    porcentajeVIP(): number {
        return this.cntTotalAsistentes > 0 ? (this.contadorTipo2 / this.cntTotalAsistentes) * 100 : 0;
    }
    porcentajeMasculino(): number{
        return this.cntTotalAsistentes > 0 ? (this.contadorMasculino / this.cntTotalAsistentes) * 100 : 0;
    }
    porcentajeFemenino(): number{
        return this.cntTotalAsistentes > 0 ? (this.contadorFemenino / this.cntTotalAsistentes) * 100 : 0;
    }
    precioBasePromedioMenores(): number {
        return this.contadorMenores25NoEstudiantes > 0 ? this.acumuladorPrecioBaseMenores25 / this.contadorMenores25NoEstudiantes : 0;
    }
}