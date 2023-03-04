function cahrsInRange(char1, char2) {
  let chars = [];
  if (char1 < char2) {
    for (let i = char1.charCodeAt(0) + 1; i < char2.charCodeAt(0); i++) {
      chars.push(String.fromCharCode(i));
    }
  } else {
    for (let i = char2.charCodeAt(0) + 1; i < char1.charCodeAt(0); i++) {
      chars.push(String.fromCharCode(i));
    }
  }
  console.log(chars.join(" "));
}
cahrsInRange("C", "#");
