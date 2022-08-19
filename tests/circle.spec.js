/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(Object.values(circle(15.5)).map(num => num.toFixed(2))).toEqual(["15.50", "754.38", "97.34"]);
    expect(Object.values(circle(1)).map(num => num.toFixed(2))).toEqual(["1.00", "3.14", "6.28"]);
    expect(Object.values(circle(7)).map(num => num.toFixed(2))).toEqual(["7.00", "153.86", "43.96"]);
    // https://stackoverflow.com/questions/9671203/how-to-round-all-the-values-in-an-array-to-2-decimal-points
  });
  
  it('Teste se circle retorna undefined, caso o parâmetro passado não seja um número', () => {
    expect(circle('pi')).toBeUndefined();
    expect(circle([' '])).toBeUndefined();
    expect(circle(['3'])).toBeUndefined();
  });

  it('Verifica se ao receber um raio, a função `circle` retorna um objeto', () => {
    expect(typeof circle(5)).toBe('object');
  });

  it('Teste se o objeto retornado possui 3 propriedades', () => {
    expect(Object.keys(circle(6)).length).toEqual(3);
  });

  it('Teste se a função, quando não recebe nenhum parâmetro, retorna undefined', () => { 
    expect(circle(' ')).toBeUndefined();
    expect(circle()).toBeUndefined();
  });
  
  it('Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2', () => {
    expect(circle(2).circumference).toEqual(12.56);
  });  
  
  it('Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3', () => {
    expect(circle(3).area).toBeCloseTo(28.26);
  }); 

  it('Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3', () => {
    expect(Object.values(circle(3)).map(num => num.toFixed(2))).toEqual(["3.00", "28.26", "18.84"]);
  }); 
});
