export default class Cl_mPersona {
    _nombre;
    _apellido;
    _cedula;
    _sexo;
    _fechaNacimiento;
    constructor({ nombre, apellido, cedula, sexo, fechaNacimiento }) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._sexo = sexo;
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
    set sexo(value) {
        this._sexo = value;
    }
    get sexo() {
        return this._sexo;
    }
    set fechaNacimiento(value) {
        this._fechaNacimiento = value;
    }
    get fechaNacimiento() {
        return this._fechaNacimiento;
    }
    edadActual() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const cumpleEsteAno = new Date(hoy.getFullYear(), this.fechaNacimiento.getMonth(), this.fechaNacimiento.getDate());
        if (hoy < cumpleEsteAno)
            edad--;
        return edad;
    }
}
//# sourceMappingURL=Cl_mPersona.js.map