export interface I_vEvento {
    onAgregarAsistente(callback: () => void): void;
    reportar(datos: {
        totalEntrada: number;
        totalRegulares: number;
        totalVIP: number;
        totalAsistentes: number;
        porcentajeMenores: number;
        porcentajeMayores: number;
        porcentajeRegulares: number;
        porcentajeVIP: number;
    }): void;
}