const chai = require("chai");
const card = require("../index");
const expect = chai.expect;



describe("Teste de cartão", () => {
  describe("#cardValidator", () => {
    describe("Quando nao houver parametro", () => {
      it("Erro1", () => {
        var badFunc = function () {card.cardValidator( )};
          expect(badFunc).to.throw(Error);
      });
    });

    describe("Quando não houver apenas números", () => {
      it("Erro2", () => {
          expect(() => {card.cardValidator('string')}).to.throw(Error);
      });
    });

    describe("Quando houver menos de dez digitos", () => {
      it("Erro3", () => {
          expect(() => {card.cardValidator('434')}).to.throw(Error);
      });
    });

    describe("Quando numero do cartao é verdadeiro", () => {
      it("Deve retornar true", () => {
          expect(card.cardValidator(36490102462661)).to.be.true;
      });
    });

    describe("Quando numero do cartao não é verdadeiro", () => {
      it("Deve retornar false", () => {
          expect(card.cardValidator(56788675776)).to.be.false;
      });
    });
  });
});