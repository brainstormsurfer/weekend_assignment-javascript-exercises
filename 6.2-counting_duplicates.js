function duplicatesCounter(str) {
  let literalResult = `${str}:` + "\n";
  let counter = 1;
  let dupliChars = [,];
  str = str.toLowerCase();

  for (const char of str) {
    str = str.replace(char, "");

    while (str.indexOf(char) !== -1) {
      counter++;
      str = str.replace(char, "");
    }
    if (counter > 1) {
      dupliChars = [char, counter];
      literalResult += `'${dupliChars[0]}' occurs ${dupliChars[1]} times`;
      counter = 1;
    }
}

    if (dupliChars[0] !== undefined) {
      return literalResult;
    } else {
      return "no characters repeat more than once" + "\n";
    }
  }
console.log(duplicatesCounter("abcde"));
console.log(duplicatesCounter("aabbcde"));
console.log(duplicatesCounter("aaBbcde"));
console.log(duplicatesCounter("indivisibility"));
console.log(duplicatesCounter("Indivisibilities"));
console.log(duplicatesCounter("aA11"));
console.log(duplicatesCounter("ABBA"));
