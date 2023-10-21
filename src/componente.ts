import { TipoComponente } from "./tipoComponente";

/**
 * Clase que representa un componente de un ordenador.
 *
 * @param nombre Nombre del componente.
 * @param tipo Tipo del componente.
 * @param precioMax Precio máximo del componente.
 * @param precioMin Precio mínimo del componente.
 * @returns Componente.
 *
 * @see TipoComponente
 */
export class Componente {
  nombre: string;
  tipo: TipoComponente;
  precioMax: number;
  precioMin: number;

  setPrecioMax(precioMax: number) {
    this.precioMax = precioMax;
  }

  setPrecioMin(precioMin: number) {
    this.precioMin = precioMin;
  }

  constructor(
    nombre: string,
    tipo: TipoComponente,
    precioMax: number,
    precioMin: number
  ) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precioMax = precioMax;
    this.precioMin = precioMin;
  }
}
