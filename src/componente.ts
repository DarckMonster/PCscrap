import { Mode } from "fs";
import { Modelos, TipoComponente } from "./tipo_componente";

export class Componente {
  nombre: string;
  tipo: TipoComponente;
  modelo: Modelos;
  precioEur: number;

  constructor (
    nombre: string,
    tipo: TipoComponente,
    modelo: Modelos,
    precioEur: number
  ) {
    this.nombre=nombre;
    this.tipo=tipo;
    this.modelo=modelo;
    this.precioEur=precioEur;
  }
}