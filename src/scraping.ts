import { Componente } from "./componente";
import { Tienda } from "./tienda";
import { Modelos } from "./tipo_componente";

export class Scraping {
  private tienda: Tienda;
  private componentes: Componente[];

  gpuMasBarata(modelo: Modelos) : Componente {

  }

  constructor (tienda: Tienda) {
    this.tienda=tienda;
    this.componentes=new Array();
  }
}

