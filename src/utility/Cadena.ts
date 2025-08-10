export function capitalizeFirstLetter(sentence: string) {
  if (typeof sentence !== "string" || sentence.length === 0) return "";
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}
