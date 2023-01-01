/*
  Hamming distance is the number of string characters between an
  input DNA sequence and an output DNA sequence

  If DNA sequences are of different sizes, compare difference over the
  sequence of shorter length
*/

class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }

  hammingDistance(newSequence) {
    // If one sequence has shorter length, use that length
    let len = this.sequence.length < newSequence.length ? this.sequence.length : newSequence.length;
    let differences = 0;

    for (let idx = 0; idx < len; idx++) {
      if (this.sequence[idx] !== newSequence[idx]) {
        differences += 1;
      }
    }

    return differences;
  }
}

module.exports = DNA;