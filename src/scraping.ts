import { Componente } from "./componente";
import { Tienda } from "./tienda";

export class Scraping {
  private tienda: Tienda;
  private componentes: Componente[];

  gpuMasBarata() : Componente {

  }

  constructor (tienda: Tienda) {
    this.tienda=tienda;
    this.componentes=new Array();
  }
}

