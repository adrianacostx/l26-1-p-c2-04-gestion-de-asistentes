export default class Cl_vAsistenteBootstrap {
    inNombre;
    inApellido;
    inCedula;
    inGenero;
    inEdad;
    inTipoEntrada;
    inEsEstudiante;
    btCancelar;
    btAceptar;
    vista;
    modal;
    constructor() {
        this.vista = document.getElementById("asistente");
        this.inNombre = document.getElementById("asistente_inNombre");
        this.inCedula = document.getElementById("asistente_inCedula");
        this.inApellido = document.getElementById("asistente_inApellido");
        this.inGenero = document.getElementById("asistente_inGenero");
        this.inEdad = document.getElementById("asistente_inEdad");
        this.inTipoEntrada = document.getElementById("asistente_inTipoEntrada");
        this.inEsEstudiante = document.getElementById("asistente_inEsEstudiante");
        this.btCancelar = document.getElementById("asistente_btCancelar");
        this.btAceptar = document.getElementById("asistente_btAceptar");
        const elementoModal = document.getElementById("asistente");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get apellido() {
        return this.inApellido.value.trim();
    }
    get cedula() {
        return this.inCedula ? +this.inCedula.value : 0;
    }
    get genero() {
        return this.inGenero.value;
    }
    get edad() {
        return this.inEdad.valueAsDate || new Date();
    }
    get tipoEntrada() {
        return this.inTipoEntrada ? +this.inTipoEntrada.value : 0;
    }
    get esEstudiante() {
        return this.inEsEstudiante.checked;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inNombre.value = "";
        this.inCedula.value = "";
        this.inApellido.value = "";
        this.inGenero.value = "M";
        this.inEdad.value = "";
        this.inTipoEntrada.value = "1";
        this.inEsEstudiante.checked = false;
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=Cl_vAsistenteBootstrap.js.map