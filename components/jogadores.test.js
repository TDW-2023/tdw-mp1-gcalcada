// jogadores.test.js
const jogadoresDeFutebol = require('./jogadores');

test('Verifica se o array de jogadores nao é nulo', () => {
  expect(jogadoresDeFutebol).not.toBeNull();
  expect(jogadoresDeFutebol.length).toBeGreaterThan(0);
});

test('Verifica se os jogadores têm atributos como nome idade e clube', () => {
  for (const jogador of jogadoresDeFutebol) {
    expect(jogador).toHaveProperty('nome');
    expect(jogador).toHaveProperty('idade');
    expect(jogador).toHaveProperty('clube');
  }
});
