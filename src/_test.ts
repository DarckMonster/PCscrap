import { expect, test } from "bun:test";
import * as fs from 'fs';
import { Scraping } from "./scraping";
import { Tienda } from "./tienda";
import * as tipo from "./tipo_componente";


const pagina_web_GPU = fs.readFileSync('/home/juan/Public/IV/PCscrap/docs/PcComponentesGPU.html','utf8');
const pagina_web_CPU = fs.readFileSync('/home/juan/Public/IV/PCscrap/docs/PcComponentesCPU.html','utf8');
const test_txt = fs.readFileSync('/home/juan/Public/IV/PCscrap/docs/test.txt','utf8');
let test_array = test_txt.split(/\r?\n/);

let scraping = new Scraping(new Tienda("https://www.pccomponentes.com",["/procesadores","/tarjetas-graficas"]));
scraping.scrape(pagina_web_GPU,tipo.TipoComponente.GPU);
scraping.scrape(pagina_web_CPU,tipo.TipoComponente.CPU);

let offset = 0;
test("PcComponentes", () => {
  for (var i=0; i<scraping.numComponentes(); i++) {
    expect(scraping.getComponente(i).getNombre()).toBe(test_array[i+offset++]);
    expect(scraping.getComponente(i).getPrecio().toString()).toBe(test_array[i+offset]);
  }
});


test("RTX 4070 más barata", () => {

});

test("RTX 3060 más barata", () => {

});


