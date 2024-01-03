import { file } from "bun";

export enum TipoComponente {
  GPU,
  CPU
}

const texto = await file('./assets/tipo_componente.txt').text();
const modelos: readonly string[] = texto.split(/\r?\n/);

export { modelos };
