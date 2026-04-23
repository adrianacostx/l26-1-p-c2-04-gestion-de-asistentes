export default class Cl_mPersona {
    _nombre;
    _apellido;
    _cedula;
    _genero;
    _edad;
    constructor({ nombre, apellido, cedula, genero, edad }) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._genero = genero;
        this._edad = edad;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get nombre() {
        return this._nombre;
    }
    set apellido(value) {
        this._apellido = value;
    }
    get apellido() {
        return this._apellido;
    }
    set cedula(value) {
        this._cedula = value;
    }
    get cedula() {
        return this._cedula;
    }
    set genero(value) {
        this._genero = value;
    }
    get genero() {
        return this._genero;
    }
    set edad(value) {
        this._edad = value;
    }
    get edad() {
        return this._edad;
    }
}
//# sourceMappingURL=Cl_mPersona.js.map