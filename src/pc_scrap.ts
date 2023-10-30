import { Componente } from "./componente";

/**
 *
 * @param componente Componente del que se va a obtener el listado de precios.
 * @param tiendas Mapa que contiene las urls de las tiendas en las que se va a buscar el componente.
 * @param listadoPrecios Mapa que contiene los precios de los componentes en las tiendas.
 * @returns Objeto que contiene el componente, las tiendas y los precios.
 *
 */
class PcScrap {
  componente: Componente;
  tiendas: Map<string, string>;
  listadoPrecios: Map<string, number>;

  setTiendas(tiendas: Map<string, string>) {
    this.tiendas = tiendas;
  }

  setListadoPrecios(listadoPrecios: Map<string, number>) {
    this.listadoPrecios = listadoPrecios;
  }

  constructor(componente: Componente) {
    this.componente = componente;
    this.tiendas = new Map<string, string>();
    this.listadoPrecios = new Map<string, number>();
  }
}
