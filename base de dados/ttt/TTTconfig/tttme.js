const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
『 🌀💮 Tic Tac Toe 💮🌀』

『❖ NOME: ${pushname} 』

『  ➣ Vitórias: ${userWins} 🎊』
『  ➣ Derrotas: ${userDefeats} 💥』
『  ➣ Empates : ${userTies} 🌀』
『  ➣ Pontos  : ${userPoints} ✨』
`
}

exports.tttme = tttme