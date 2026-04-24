export default class Cl_mPersona {
    _nombre;
    _apellido;
    _cedula;
    _genero;
    _fechaNacimiento;
    constructor({ nombre, apellido, cedula, genero, fechaNacimiento }) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._genero = genero;
        this._fechaNacimiento = fechaNacimiento;
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
    set fechaNacimiento(value) {
        this._fechaNacimiento = value;
    }
    get fechaNacimiento() {
        return this._fechaNacimiento;
    }
}
//# sourceMappingURL=Cl_mPersona.js.map