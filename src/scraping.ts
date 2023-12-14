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

  setTiendas(tienda: Tienda) {
    this.tienda = tienda;
  }

  getComponente(i: number,tipoC?: TipoComponente) : Componente {
    if (tipoC==null) return this.componentes[i];
    else {
      let n = 0;
      for (let c of this.componentes) {
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
      for (let c of this.componentes)
        if (c.getTipo()==tipoC)
          n++;
      return n;
    }
  }

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

  gpuMasBarata(modelo: Modelos, rango=0) : Componente[] {
    let comparar: Componente[] = new Array();
    for (let p of this.componentes)
      if (p.getModelo()==modelo)
        comparar.push(p);

    let barato: Componente[] = new Array();
    let aux = new Componente("",TipoComponente.GPU,Modelos.UNKNOWN,Infinity);
    for (const c of comparar)
      if (c.getPrecio()<aux.getPrecio())
        aux=c;      

    for (const c of comparar)
      if (c.getPrecio()<=aux.getPrecio()+rango)
        barato.push(c);

      return barato;
  }

  constructor(
    tienda: Tienda
  ) {
    this.tienda = tienda; 
    this.componentes = new Array();

    this.scrape('./docs/PcComponentesGPU.html', TipoComponente.GPU);
    this.scrape('/docs/PcComponentesCPU.html', TipoComponente.CPU);
  }
}

