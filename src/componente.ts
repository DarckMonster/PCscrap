import { TipoComponente } from "./tipo_componente";

export class Componente {
  private nombre: string;
  private tipo: TipoComponente;
  private precioEur: number;

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