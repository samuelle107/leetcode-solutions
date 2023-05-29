function title(word: string): string {
  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
}

function detectCapitalUse(word: string): boolean {
  return (
    word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    word === title(word)
  );
}
