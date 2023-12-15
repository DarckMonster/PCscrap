import { expect, test } from "bun:test";
import { Scraping } from "../src/scraping"
import { Tienda } from "../src/tienda";


const scraping = new Scraping(new Tienda("https://www.pccomponentes.com",["/procesadores","/tarjetas-graficas"]));

test("PcComponentes", () => {
    expect(scraping.gpuMasBarata()).toBe("");
});