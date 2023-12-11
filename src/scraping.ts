import { Componente } from "./componente";
import { Tienda } from "./tienda";
import { TipoComponente, modelosGPU } from "./tipo_componente";

function eurotoNumber(str: string) : number {
  str=str.slice(0,-1).replace('.','').replace(',','.');
  var n: number = parseFloat(str);
  return n;
}

function toNombre(str: string) : string {
  return str.slice(str.indexOf("\"")+1,str.lastIndexOf("\""));
}

export class Scraping {
  private tienda: Tienda;
  private componentes: Componente[];

  setTiendas(tienda: Tienda) {
    this.tienda = tienda;
  }

  getComponente(i: number,tipoC?: TipoComponente) : Componente {
    if (tipoC==null) return this.componentes[i];
    else {
      let n = 0;
      for (var c of this.componentes) {
        if (c.getTipo()==tipoC)
          n++;
        if (n==i)
          return c;
      }
    }
    return this.componentes[0];
  }

  numComponentes(tipoC?: TipoComponente) : number {
    if (tipoC==null)  return this.componentes.length;
    else {
      let n = 0;
      for (var c of this.componentes)
        if (c.getTipo()==tipoC)
          n++;
      return n;
    }
  }

  scrape(str: string, tipoC: TipoComponente) {
    let nombre = "", precio = 0;
    let regex = new RegExp(/"product-list-bottom-container"|"product-grid"|(data-product-name=".+?")|((\d+\.)?\d{1,3}(,)?(\d+(<!-- -->)?€))/g);
    let elementos = str.match(regex);

    let lista: string[] = [];
    let centro = false;
    let anterior = "";
    if (elementos!=null) {
      for (var e of elementos) {
        if (e == "\"product-list-bottom-container\"") centro = false;
        if (centro && (!anterior.endsWith("€") && e.endsWith("€") || e.startsWith("d"))) lista.push(e);
        anterior=e;
        if (e == "\"product-grid\"")  centro = true;
      }

      for (var i=0; i<lista.length; i+=2) {
        nombre=toNombre(lista[i]);
        precio=eurotoNumber(lista[i+1]);
        this.componentes.push(new Componente(nombre,tipoC,precio));
      }
    } else {
      console.error("elementos no encontrados");
    }
  }

  compMasBarato(modelo: modelosGPU) {
    
  }

  constructor(
    tienda: Tienda
  ) {
    this.tienda = tienda; 
    this.componentes = new Array();
  }
}
