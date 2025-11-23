describe("template spec", () => {
    it("passes", () => {
        cy.visit("http://localhost:8080");
        cy.get(
            "div:nth-child(2) > div:nth-child(1) > div.bp5-html-select > select",
        ).select("Legends: Z-A");
        cy.get('[data-testid="base-editor"] [name="template"]').select(
            "Default Light",
        );
        cy.get('[data-testid="base-editor"] [name="template"]').select(
            "Generations",
        );
        cy.get('[data-testid="base-editor"] [name="template"]').select(
            "Generations Classic",
        );
        cy.get('[data-testid="base-editor"] [name="template"]').select(
            "Hexagons",
        );
        cy.get('[data-testid="base-editor"] [name="template"]').select("Blank");
        cy.get('[data-testid="base-editor"] [name="template"]').select("Cards");
        cy.get(
            '[data-testid="base-editor"] div[aria-labelledby="label-0"] label:nth-child(2)',
        ).click();
        cy.get('[data-testid="base-editor"] input[value="round"]').check();
        cy.get('[data-testid="base-editor"] [name="resultWidth"]').click();
        cy.get('[data-testid="base-editor"] [name="resultWidth"]').click();
        cy.get('[data-testid="base-editor"] [name="resultWidth"]').clear();
        cy.get('[data-testid="base-editor"] [name="resultWidth"]').type("400");
        cy.get("div.style-editor div:nth-child(6)").click();
        cy.get(
            '[data-testid="base-editor"] div:nth-child(31) label.bp5-control',
        ).click();
        cy.get(
            '[data-testid="base-editor"] [name="grayScaleDeadPokemon"]',
        ).check();
        cy.get(
            '[data-testid="base-editor"] div:nth-child(31) label.bp5-control',
        ).click();
        cy.get(
            '[data-testid="base-editor"] [name="grayScaleDeadPokemon"]',
        ).uncheck();
        cy.get(
            '[data-testid="base-editor"] div:nth-child(32) label.bp5-control',
        ).click();
        cy.get('[data-testid="base-editor"] [name="spritesMode"]').check();
        cy.get(
            '[data-testid="base-editor"] div:nth-child(32) label.bp5-control',
        ).click();
        cy.get('[data-testid="base-editor"] [name="spritesMode"]').uncheck();
        cy.get(
            '[data-testid="base-editor"] div:nth-child(32) label.bp5-control',
        ).click();
        cy.get('[data-testid="base-editor"] [name="spritesMode"]').check();
        cy.get('[name="species"]').click();
        cy.get('[name="species"]').type("Zygarde");
        cy.get(
            '[data-testid="base-editor"] div.current-pokemon > div:nth-child(2)',
        ).click();
        cy.get('[data-testid="base-editor"] [name="teamImages"]').select(
            "sugimori",
        );
        cy.get(
            '[data-testid="base-editor"] div:nth-child(32) label.bp5-control',
        ).click();
        cy.get('[data-testid="base-editor"] [name="spritesMode"]').uncheck();
        cy.get('[data-testid="app"] div.cards').click();
        cy.get('[data-testid="base-editor"] [name="template"]').select(
            "Compact",
        );
        cy.get('[data-testid="app"] div.result').click();
    });
});
