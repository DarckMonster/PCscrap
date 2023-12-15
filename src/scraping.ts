import { file } from "bun";
import { Componente } from "./componente";
import { Tienda } from "./tienda";
import { Modelos, TipoComponente } from "./tipo_componente";

export class Scraping {
  private tienda: Tienda;
  private componentes: Componente[];

  async scrape(str: string, tipoC: TipoComponente) {

    const pagina_web = await file(str).text();

    let nombre = "", precio = 0, modelo=Modelos.UNKNOWN;
    let regex = new RegExp(/"product-list-middle-container"|"product-grid"|(data-product-name=".+?")|((\d+\.)?\d{1,3}(,)?(\d+(<!-- -->)?€))/g);
    let elementos = pagina_web.match(regex);

    let lista: string[] = [];
    let centro = false;
    let anterior = "";
    if (elementos!=null) {
      for (const e of elementos) {
        if (e == "\"product-list-middle-container\"") centro = false;
        if (centro && (!anterior.endsWith("€") && e.endsWith("€") || e.startsWith("d"))) lista.push(e);
        anterior=e;
        if (e == "\"product-grid\"")  centro = true;
      }

      for (let i=0; i<lista.length-1; i+=2) {
        nombre=toNombre(lista[i]);
        precio=eurotoNumber(lista[i+1]);
        modelo=extraerModelo(nombre);
        this.componentes.push(new Componente(nombre,tipoC,modelo,precio));
      }
    } else {
      console.error("elementos no encontrados");
    }
  }

  gpuMasBarata(modelo: Modelos) : Componente {

  }

  constructor (tienda: Tienda) {
    this.tienda=tienda;
    this.componentes=new Array();
  }
}

