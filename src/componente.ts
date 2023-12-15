import { TipoComponente } from "./tipo_componente";

export class Componente {
  nombre: string;
  tipo: TipoComponente;
  precioEur: number;

  constructor (
    nombre: string,
    tipo: TipoComponente,
    precioEur: number
  ) {
    this.nombre=nombre;
    this.tipo=tipo;
    this.precioEur=precioEur;
  }
}