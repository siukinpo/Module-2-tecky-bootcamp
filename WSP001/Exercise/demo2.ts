import { number } from "yargs";

// 1.
// function findFactors(num: number): number[] {
//   let factors = [];
//   for (let factor = 2; factor <= num / 2; factor++) {
//     if (num % factor === 0) {
//       factors.push(factor);
//     }
//   }
//   return factors;
// }

function findFactors(num: number): Array<number> {
  let factors = [];
  for (let factor = 2; factor <= num / 2; factor++) {
    if (num % factor === 0) {
      factors.push(factor);
    }
  }
  return factors;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.
function leapYear(year: number): boolean {
  if (year % 400 === 0) {
    console.log("Leap Year");
    return true;
  } else if (year % 100 === 0) {
    console.log("Not a Leap Year");
    return false;
  } else if (year % 4 === 0) {
    console.log("Leap Year");
    return true;
  } else {
    console.log("Not a Leap Year");
    return false;
  }
}
//////////////////////////////////////////////////////////////////////////////////////
//3.
function rnaTranscription(dna: DNA[]): string {
  let rna: string = "";
  for (let nucleotide of dna) {
    switch (nucleotide) {
      case "G":
        rna += "C";
        break;
      case "C":
        rna += "G";
        break;
      case "T":
        rna += "A";
        break;
      case "A":
        rna += "U";
        break;
      default:
        throw new Error(`The nucleotide ${nucleotide} does not exist`);
    }
  }
  return rna;
}

console.log(rnaTranscription("ACGTACGT"));

//////////////////////////////////////////////////////////////////////////////////////
//4.

function factorial(number: number): number {
  if (number === 0 || number === 1) {
    return 1;
  }

  return factorial(number - 1) * number;
}

//////////////////////////////////////////////////////////////////////////////////////
//5.

const peter = {
  name: "Peter",
  age: 50,
  students: [
    { name: "Andy", age: 20 },
    { name: "Bob", age: 23 },
    {
      name: "Charlie",
      age: 25,
      exercises: [{ score: 60, date: new Date("2019-01-05") }],
    },
  ],
};

///////////////////////////////////////////////////////////////////////////////////////
//6.

// const timeoutHandler: () => void = () => {
//   console.log("Timeout happens!");
// };

// const timeout = 1000;

// setTimeout(timeoutHandler, timeout);

const timeoutHandler = (): void => {
  console.log("Timeout happens!");
};

const timeout = 1000;

setTimeout(timeoutHandler, timeout);

///////////////////////////////////////////////////////////////////////////////////////
//7.

const someValue: 12 | null = Math.random() > 0.5 ? 12 : null;
