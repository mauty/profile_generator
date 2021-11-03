const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const log = console.log




rl.question("What's your name? ", (answer1) => {
  rl.question("What's your favourite thing to eat? ", (answer2) => {
    rl.question("What's an activity you like doing? ", (answer3) => {
      rl.question("What do you listen to while doing that? ", (answer4) => {
        rl.question("Which sport is your absolute favourite? ", (answer5) => {
          console.log(`Here's your new profile: ${answer1}. ${answer2}. ${answer3}. ${answer4}. ${answer5}`);
          rl.close();
        });
      });
    });
  });
});