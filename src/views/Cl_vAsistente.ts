import { I_vAsistente } from "../interfaces/I_vAsistente.js";

export default class Cl_vAsistente implements I_vAsistente {
  inNombre: HTMLInputElement;
  inApellido: HTMLInputElement;
  inCedula: HTMLInputElement;
  inGenero: HTMLSelectElement;
  inFechaNacimiento: HTMLInputElement;
  inTipoEntrada: HTMLSelectElement;
  inEsEstudiante: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
 
  constructor() {
    this.vista = document.getElementById("asistente") as HTMLElement;
    this.inNombre = document.getElementById(
      "asistente_inNombre",
    ) as HTMLInputElement;
    this.inApellido = document.getElementById(
      "asistente_inApellido",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "asistente_inCedula",
    ) as HTMLInputElement;
    this.inGenero = document.getElementById(
      "asistente_inGenero",
    ) as HTMLSelectElement;
    this.inFechaNacimiento = document.getElementById(
      "asistente_inFechaNacimiento",
    ) as HTMLInputElement;
    this.inTipoEntrada = document.getElementById(
      "asistente_inTipoEntrada",
    ) as HTMLSelectElement;
    this.inEsEstudiante = document.getElementById(
      "asistente_inEsEstudiante",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "asistente_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "asistente_btAceptar",
    ) as HTMLButtonElement;
  }
 
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return this.inCedula ? +this.inCedula.value : 0;
  }
  get apellido(): string {
    return this.inApellido.value.trim();
  }
  get genero(): string {
    return this.inGenero.value;
  }
  get fechaNacimiento(): Date {
    return new Date(this.inFechaNacimiento.value);
  }
  get tipoEntrada(): number {
    return +this.inTipoEntrada.value;
}
    get esEstudiante(): boolean {
    return this.inEsEstudiante.checked;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
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