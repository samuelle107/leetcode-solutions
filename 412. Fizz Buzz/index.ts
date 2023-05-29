function fizzBuzz(n: number): string[] {
  const arr: string[] = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 15 === 0) {
      arr.push("FizzBuzz");
    } else {
      arr.push(String(i));
    }
  }

  return arr;
}

console.log(fizzBuzz(15));
