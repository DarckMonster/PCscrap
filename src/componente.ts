import { TipoComponente } from "./tipo_componente";

export class Componente {
  private nombre: string;
  private tipo: TipoComponente;
  private precioEur: number;

  getNombre() : string {
    return this.nombre;
  }

  getTipo() : TipoComponente {
    return this.tipo;
  }

  getPrecio() : number {
    return this.precioEur;
  }

  constructor(
    nombre: string,
    tipo: TipoComponente,
    precioEur: number
  ) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precioEur = precioEur;  
  }
}