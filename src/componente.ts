import { TipoComponente } from "./tipo_componente";

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
}
