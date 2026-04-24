export default class Cl_vAsistente {
    inNombre;
    inApellido;
    inCedula;
    inGenero;
    inFechaNacimiento;
    inTipoEntrada;
    inEsEstudiante;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("asistente");
        this.inNombre = document.getElementById("asistente_inNombre");
        this.inApellido = document.getElementById("asistente_inApellido");
        this.inCedula = document.getElementById("asistente_inCedula");
        this.inGenero = document.getElementById("asistente_inGenero");
        this.inFechaNacimiento = document.getElementById("asistente_inFechaNacimiento");
        this.inTipoEntrada = document.getElementById("asistente_inTipoEntrada");
        this.inEsEstudiante = document.getElementById("asistente_inEsEstudiante");
        this.btCancelar = document.getElementById("asistente_btCancelar");
        this.btAceptar = document.getElementById("asistente_btAceptar");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get cedula() {
        return this.inCedula ? +this.inCedula.value : 0;
    }
    get apellido() {
        return this.inApellido.value.trim();
    }
    get genero() {
        return this.inGenero.value;
    }
    get fechaNacimiento() {
        return new Date(this.inFechaNacimiento.value);
    }
    get tipoEntrada() {
        return +this.inTipoEntrada.value;
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
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vAsistente.js.map