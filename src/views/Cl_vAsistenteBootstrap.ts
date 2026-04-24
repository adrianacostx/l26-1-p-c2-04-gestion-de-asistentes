import { I_vAsistente } from "../interfaces/I_vAsistente.js";
declare var bootstrap: any;

export default class Cl_vAsistenteBootstrap implements I_vAsistente {
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
  private modal: any;

  constructor() {
    this.vista = document.getElementById("asistente") as HTMLElement;
    this.inNombre = document.getElementById(
      "asistente_inNombre",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "asistente_inCedula",
    ) as HTMLInputElement;
    this.inApellido = document.getElementById(
      "asistente_inApellido",
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
    const elementoModal = document.getElementById("asistente");
    this.modal = new bootstrap.Modal(elementoModal);
  }
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get apellido(): string {
    return this.inApellido.value.trim();
  }
  get cedula(): number {
    return this.inCedula ? +this.inCedula.value : 0;
  }
  get genero(): string {
    return this.inGenero.value;
  }
  get fechaNacimiento(): Date {
    return this.inFechaNacimiento.valueAsDate || new Date();
  }
  get tipoEntrada(): number {
    return this.inTipoEntrada ? +this.inTipoEntrada.value : 0;
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
    this.inNombre.value = ""; 
    this.inCedula.value = "";
    this.inApellido.value = "";
    this.inGenero.value = "M";
    this.inFechaNacimiento.value = "";
    this.inTipoEntrada.value = "1";
    this.inEsEstudiante.checked = false;
    this.modal.show();
  }
  ocultar(): void {
    this.modal.hide();
  }
}