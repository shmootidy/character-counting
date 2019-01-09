function countLetters(str) {
var obj = {};

str = str.split(" ").join("").toLowerCase();

for (var i = 0; i < str.length; i++) {
  var char = str[i];
  if (obj[char] > 0){
    obj[char]++;
  } else {
    obj[char] = 1;
  }
}
return obj;
}

console.log(countLetters("beep boop BEEP"));
console.log(countLetters("it's raining"));
