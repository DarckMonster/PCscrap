import { TipoComponente } from "./tipo_componente";

export interface Componente {
  readonly nombre: string;
  readonly tipo: TipoComponente;
  readonly modelo: string;
  precioEur: number;
}