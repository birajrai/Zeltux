const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fetch = require('node-fetch');
const { decode } = require('html-entities'); 

module.exports = {
  data: new SlashCommandBuilder()
    .setName('trivia')
    .setDescription('Fetches a random trivia question.'),
    
  async execute(interaction) {
    
    const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
    const triviaData = await response.json();
    const question = triviaData.results[0];

    
    const decodedQuestion = decode(question.question);
    const decodedCorrectAnswer = decode(question.correct_answer);
    const decodedIncorrectAnswers = question.incorrect_answers.map(answer => decode(answer));

    
    const allAnswers = [decodedCorrectAnswer, ...decodedIncorrectAnswers];
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    
    const answerLabels = ['A', 'B', 'C', 'D'];
    const answerFields = shuffledAnswers.map((answer, index) => {
      return { name: `${answerLabels[index]})`, value: answer, inline: true };
    });

    
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('Trivia Question')
      .setDescription(decodedQuestion)
      .addFields(answerFields)
      .setFooter({ text: 'Choose your answer by clicking a button' });

    
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('answer_A')
          .setLabel('A')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('answer_B')
          .setLabel('B')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('answer_C')
          .setLabel('C')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('answer_D')
          .setLabel('D')
          .setStyle(ButtonStyle.Primary),
      );

    await interaction.reply({ embeds: [embed], components: [row] });

    
    const filter = i => {
      i.deferUpdate(); 
      return i.user.id === interaction.user.id;
    };

    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 30000 }); 

    collector.on('collect', async i => {
      
      const selectedAnswer = i.customId.split('_')[1]; 
      const correctAnswerIndex = shuffledAnswers.indexOf(decodedCorrectAnswer); 
      const correctAnswerLabel = answerLabels[correctAnswerIndex]; 

      
      const responseEmbed = new EmbedBuilder()
        .setColor(selectedAnswer === correctAnswerLabel ? 0x00ff00 : 0xff0000)
        .setTitle(selectedAnswer === correctAnswerLabel ? 'Correct!' : 'Incorrect!')
        .setDescription(selectedAnswer === correctAnswerLabel 
          ? 'Great job! 🎉' 
          : `Oops! The correct answer was: **${correctAnswerLabel}) ${decodedCorrectAnswer}**`);

      await interaction.followUp({ embeds: [responseEmbed] });
      collector.stop(); 
    });

    collector.on('end', collected => {
      if (collected.size === 0) {
        interaction.followUp('Time is up! The correct answer was: **' + correctAnswerLabel + ') ' + decodedCorrectAnswer + '**');
      }
    });
  },
};
