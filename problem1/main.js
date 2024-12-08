// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence

  //making dna strign into array with split
  let dNa2 = dna.toUpperCase().split("");
  let now = [];

  for (let i = 0; i < dNa2.length; i++) {
    if (dNa2[i] === "T") {
      //checking if dna2 = T if so replace it with U
      dNa2[i] = "U";
      console.log(dNa2[i], "<<<<< index");
    }
    now += dNa2[i];
  }
  return now.toString("");
}

console.log(DNAtoRNA("GNCT"));
