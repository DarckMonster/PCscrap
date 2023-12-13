import { Mode } from "fs";
import { Modelos, TipoComponente } from "./tipo_componente";

export class Componente {
  private nombre: string;
  private tipo: TipoComponente;
  private modelo: Modelos;
  private precioEur: number;

  getNombre() : string {
    return this.nombre;
  }

  getTipo() : TipoComponente {
    return this.tipo;
  }

  getModelo() : Modelos {
    return this.modelo;
  }

  getPrecio() : number {
    return this.precioEur;
  }

  constructor(
    nombre: string,
    tipo: TipoComponente,
    modelo: Modelos,
    precioEur: number
  ) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.modelo = modelo;
    this.precioEur = precioEur;  
  }
}