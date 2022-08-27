type DNA = "G" | "C" | "T" | "A";

function rnaTranscription(dna: DNA[]): string {
  let rna = "";
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

// console.log(rnaTranscription('ACGTACGT789'))
// @ts-expect-error
console.log(rnaTranscription(["A", "C", "G", "T", "7"]));

let inputValue = "ACGT";
let values = inputValue.split("");
// @ts-expect-error
rnaTranscription(values);

//***********************************************************************************************************************
//教緊點樣d user按制的時候push落個array到

let dnaElements: DNA[] = [];
window.addEventListener("keypress", (event) => {
  switch (event.key) {
    case "A":
    case "C":
    case "G":
    case "T":
      dnaElements.push(event.key);
      break;
    default:
      // show error message
      break;
  }
});
