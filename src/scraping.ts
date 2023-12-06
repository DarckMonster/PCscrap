import { Componente } from "./componente";
import { Tienda } from "./tienda";
import { TipoComponente } from "./tipo_componente";

export class Scraping {
  tienda: Tienda;
  componente: Componente[];

  setTiendas(tienda: Tienda) {
    this.tienda = tienda;
  }

  getComponentes(tipoC :TipoComponente) {
    // Está en id="product-grid"
  }

  scrape(str: string) {
    return str;
  }

  constructor(
    tienda: Tienda
  ) {
    this.tienda = tienda; 
    this.componente = new Array();
  }
}

let pccomponentes = new Scraping(new Tienda("https://www.pccomponentes.com",["/procesadores","/tarjetas-graficas"]))

console.log(pccomponentes);
