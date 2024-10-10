// Import necessary libraries
const { Telegraf } = require('telegraf');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Create the bot instance with your bot token (replace with your real token)
const bot = new Telegraf(process.env.BOT_TOKEN); // Use environment variable for security

// Define commands for the bot
bot.start((ctx) => {
    ctx.reply('Welcome to TON Hopper! Ready to start hopping?');
});

bot.help((ctx) => {
    ctx.reply('Here are the available commands:\n/start - Start the game\n/help - Get help\n/score - Check your score\n/leaderboard - View leaderboard');
});

bot.command('score', (ctx) => {
    // Replace with actual score logic
    ctx.reply('Your current score is 100 points.');
});

bot.command('leaderboard', (ctx) => {
    // Replace with actual leaderboard logic
    ctx.reply('Leaderboard:\n1. Player1 - 500 points\n2. Player2 - 450 points');
});

// Launch the bot (this will start the bot polling for new messages)
bot.launch();

// Simple Express server to host the backend
app.get('/', (req, res) => {
    res.send('TON Hopper backend is running.');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
