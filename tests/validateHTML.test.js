const { validateHTMLFile } = require('./validator');

describe("Validação de HTML", () => {
    const result = validateHTMLFile();
    test("Verifica conformidade do HTML", () => {

        console.log("Resultados HTML:", result);

        expect(result.failed.length).toBe(0);
    });

    test("Verifica se o HTML é válido", () => {
        expect(result.valid).toBe(true);
    });
});