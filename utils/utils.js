export function capitalizeString(word) {
  return word
    .split("")
    .map((letter, index) =>
      index ? letter.toLowerCase() : letter.toUpperCase(),
    )
    .join("");
}
