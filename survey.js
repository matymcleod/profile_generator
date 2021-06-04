const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let array = [];
rl.question('What is your name? ', (answer) => {
  array.push(`your name is ${answer}`);
    rl.question('How old is ya? ', (answer) => {
      array.push(`you are: ${answer}`);
        rl.question('Where do you live? ', (answer) => {
          array.push(`You live in ${answer}`);
          console.log(`These are you answers: ${array}`)
        rl.close();
    });
  });
});

  






