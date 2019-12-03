spinner = `\rl\r/\r-\r\\\rl\n`;
function spinnaker() {
  for (let i =0; i < spinner.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinner[i])// print the char here
    }, i * 100) // 
  }        
}
spinnaker();





// setTimeout(() => {
//   process.stdout.write('\rl   ');
// }, 100)

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\\  '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\rl\n'); 
// }, 800);