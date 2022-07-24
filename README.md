# Desafio de estágio proposto pela StartDB

## Desafio

Neste desáfio é necessário realizar correções e implementações de regras de negócio envolvendo um jogo de forca.

## Requisitos

✅ Javascript
✅ POO

## Regras do jogo

1. ✅ O jogo deve iniciar com 6 vidas
2. ✅ O jogo deve iniciar com o estado `aguardando chute`.
3. ✅ Todo chute deve conter apenas uma letra, caso tenha mais de uma a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
4. ✅ Caso a letra chutada esteja errada mas já foi chutada anteriormente a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
5. ✅ Toda chamada ao método chutar deve registrar a letra em letrasChutadas
6. ✅ Se a letra chutada não estiver contida na palavra, deve subtrair uma vida
7. ✅ Se a letra chutada estiver contida na palavra, deve ser substituida na "palavra" em sua respectiva posição. Ex.: A palavra secreta é "bala" e o jogador chutou a letra "b", então a palavra que é retornada no método buscarDadosDoJogo, deve ser ["b", "", "", "_" ].
8. ✅ Caso a quantidade de vidas chegue a 0 (zero), o estado do jogo deve mudar para `perdeu`.
9. ✅ Caso a quantidade de vidas seja maior que zero e o jogador acerte a última letra, o estado do jogo deve mudar para `ganhou`.

## Instruções

### Instalando o Node e rodando localmente

1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:

```bash
npm install
```

3. Para interagir com o jogo durante o desenvolvimento, você pode executar `desafio.js`, que irá iniciar o jogo no terminal, com o seguinte comando:

```bash
npm start
```

Você pode rodar o jogo através do comando:

```bash
node desafio.js
```

> Obs: para rodar o comando você precisa estar na raiz do diretório.
