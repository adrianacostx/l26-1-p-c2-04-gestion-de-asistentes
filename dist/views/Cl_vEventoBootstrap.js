export default class Cl_vEventoBootstrap {
    lblTotalEntrada;
    lblTotalRegulares;
    lblTotalVIP;
    lblTotalAsistentes;
    lblPorcentajeMenores;
    lblPorcentajeMayores;
    lblPorcentajeRegulares;
    lblPorcentajeVIP;
    lblPorcentajeMasculino;
    lblPorcentajeFemenino;
    lblPrecioBasePromedioMenores;
    btAgregarAsistente;
    vista;
    constructor() {
        this.vista = document.getElementById("app-bootstrap");
        this.btAgregarAsistente = document.getElementById("body_btAgregarAsistente");
        this.lblTotalEntrada = document.getElementById("body_lblTotalEntrada");
        this.lblTotalRegulares = document.getElementById("body_lblTotalRegulares");
        this.lblTotalVIP = document.getElementById("body_lblTotalVIP");
        this.lblTotalAsistentes = document.getElementById("body_lblTotalAsistentes");
        this.lblPorcentajeMenores = document.getElementById("body_lblPorcentajeMenores");
        this.lblPorcentajeMayores = document.getElementById("body_lblPorcentajeMayores");
        this.lblPorcentajeRegulares = document.getElementById("body_lblPorcentajeRegulares");
        this.lblPorcentajeVIP = document.getElementById("body_lblPorcentajeVIP");
        this.lblPorcentajeMasculino = document.getElementById("body_lblPorcentajeMasculino");
        this.lblPorcentajeFemenino = document.getElementById("body_lblPorcentajeFemenino");
        this.lblPrecioBasePromedioMenores = document.getElementById("body_lblPrecioBasePromedioMenores");
    }
    onAgregarAsistente(callback) {
        this.btAgregarAsistente.onclick = callback;
    }
    reportar({ totalEntrada, totalRegulares, totalVIP, totalAsistentes, porcentajeMenores, porcentajeMayores, porcentajeRegulares, porcentajeVIP, porcentajeMasculino, porcentajeFemenino, precioBasePromedioMenores, precioBasePromedioNoEstud }) {
        this.lblTotalEntrada.innerHTML = `$${totalEntrada}`;
        this.lblTotalRegulares.innerHTML = `$${totalRegulares}`;
        this.lblTotalVIP.innerHTML = `$${totalVIP}`;
        this.lblTotalAsistentes.innerHTML = `${totalAsistentes}`;
        this.lblPorcentajeMenores.innerHTML = `${porcentajeMenores.toFixed(2)}%`;
        this.lblPorcentajeMayores.innerHTML = `${porcentajeMayores.toFixed(2)}%`;
        this.lblPorcentajeRegulares.innerHTML = `${porcentajeRegulares.toFixed(2)}%`;
        this.lblPorcentajeVIP.innerHTML = `${porcentajeVIP.toFixed(2)}%`;
        this.lblPorcentajeMasculino.innerHTML = `${porcentajeMasculino.toFixed(2)}%`;
        this.lblPorcentajeFemenino.innerHTML = `${porcentajeFemenino.toFixed(2)}%`;
        this.lblPrecioBasePromedioMenores.innerHTML = `$${precioBasePromedioMenores.toFixed(2)}`;
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
//# sourceMappingURL=Cl_vEventoBootstrap.js.map