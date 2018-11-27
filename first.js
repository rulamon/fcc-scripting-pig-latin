function translatePigLatin(str) {
  return str.replace(/^[aeiou]\w*/, "$&way") .replace(/(^[^aeiou]+)([aeiou]*)(\w*)/, "$2$3$1ay")
}

console.log(translatePigLatin("glv"));