import readline from "readline";
// import util from 'util'

// iface.question('What is your name?\n> ', answer => {
//   console.log('the answer is:', answer)
// 	iface.close()
// })

async function main() {
  let iface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // this doesn't work, because iface.question expect the callback to be (answer:string)=>void, without error as 1st argument
  // let question = util.promisify(iface.question.bind(iface))

  function askQuestion(question: string): Promise<string> {
    question += "\n> ";
    return new Promise<string>((resolve, reject) => {
      iface.question(question, (answer) => resolve(answer));
    });
  }

  // let name = await askQuestion('What is your name?')
  // console.log('Hi,', name)

  console.log("1. Test js-recursive with await promise");
  console.log("2. Test js-recursive with promise.then");

  let option = await askQuestion("Choose an action:");

  console.log("TODO: option ", option);

  iface.close();
}

main();
