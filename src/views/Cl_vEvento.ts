import { I_vEvento } from "../interfaces/I_vEvento.js";

export default class Cl_vEvento implements I_vEvento {
  lblTotalEntrada: HTMLInputElement;
  lblTotalRegulares: HTMLInputElement;
  lblTotalVIP: HTMLInputElement;
  lblTotalAsistentes: HTMLInputElement;
  lblPorcentajeMenores: HTMLInputElement;
  lblPorcentajeMayores: HTMLInputElement;
  lblPorcentajeRegulares: HTMLInputElement;
  lblPorcentajeVIP: HTMLInputElement;
  btAgregarAsistente: HTMLButtonElement;
  vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btAgregarAsistente = document.getElementById(
      "body_btAgregarAsistente",
    ) as HTMLButtonElement;
    this.lblTotalEntrada = document.getElementById(
      "body_lblTotalEntrada",
    ) as HTMLInputElement;
    this.lblTotalRegulares = document.getElementById(
      "body_lblTotalRegulares",
    ) as HTMLInputElement;
    this.lblTotalVIP = document.getElementById(
      "body_lblTotalVIP",
    ) as HTMLInputElement;
    this.lblTotalAsistentes = document.getElementById(
      "body_lblTotalAsistentes",
    ) as HTMLInputElement;
    this.lblPorcentajeMenores = document.getElementById(
      "body_lblPorcentajeMenores",
    ) as HTMLInputElement;
    this.lblPorcentajeMayores = document.getElementById(
      "body_lblPorcentajeMayores",
    ) as HTMLInputElement;
    this.lblPorcentajeRegulares = document.getElementById(
      "body_lblPorcentajeRegulares",
    ) as HTMLInputElement;
    this.lblPorcentajeVIP = document.getElementById(
      "body_lblPorcentajeVIP",
    ) as HTMLInputElement;
  }
  onAgregarAsistente(callback: () => void): void {
    this.btAgregarAsistente.onclick = callback;
  }
  reportar({ totalEntrada, totalRegulares, totalVIP, totalAsistentes, porcentajeMenores, porcentajeMayores, porcentajeRegulares, porcentajeVIP }: { totalEntrada: number, totalRegulares: number, totalVIP: number, totalAsistentes: number, porcentajeMenores: number, porcentajeMayores: number, porcentajeRegulares: number, porcentajeVIP: number }): void {
    this.lblTotalEntrada.innerHTML = `$${totalEntrada}`;
    this.lblTotalRegulares.innerHTML = `$${totalRegulares}`;
    this.lblTotalVIP.innerHTML = `$${totalVIP}`;
    this.lblTotalAsistentes.innerHTML = `${totalAsistentes}`;
    this.lblPorcentajeMenores.innerHTML = `${porcentajeMenores.toFixed(2)}%`;
    this.lblPorcentajeMayores.innerHTML = `${porcentajeMayores.toFixed(2)}%`;
    this.lblPorcentajeRegulares.innerHTML = `${porcentajeRegulares.toFixed(2)}%`;
    this.lblPorcentajeVIP.innerHTML = `${porcentajeVIP.toFixed(2)}%`;
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}