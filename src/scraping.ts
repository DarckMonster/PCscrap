import { Componente } from "./componente";
import { Tienda } from "./tienda";
import { TipoComponente, Modelos } from "./tipo_componente";
import { file } from "bun";


const modelos = Object.values(Modelos).filter((item) => {return item;})

function eurotoNumber(str: string) : number {
  str=str.slice(0,-1).replace('.','').replace(',','.');
  let n: number = parseFloat(str);
  return n;
}

function toNombre(str: string) : string {
  return str.slice(str.indexOf("\"")+1,str.lastIndexOf("\""));
}

function extraerModelo(nombre: string) : Modelos {
  let plano = nombre.replaceAll(' ','').toUpperCase();
  let simple;
  let xt7900;

  for (const modelo of modelos) {
    simple = true;
    xt7900 = false;

    if (modelo.endsWith("XT") || modelo.endsWith("TI"))
      simple = false;
    if(modelo==Modelos.RX7900XT) 
      xt7900 = true;

    if (plano.includes(modelo)) {
      if (simple) {
        let indice = plano.indexOf(modelo)+modelo.length;
        if (!(indice==plano.indexOf("TI") || indice==plano.indexOf("XT")))
          return modelo;
      } else if(xt7900) {
        if (plano[plano.indexOf(modelo)+modelo.length]!='X')
          return modelo;
      } else
        return modelo;
    }
  }
   
  return Modelos.UNKNOWN;
}

export class Scraping {
  private tienda: Tienda;
  private componentes: Componente[];
}

