export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in _tests_
    return "mthani2";
  }

  if (query.includes("What is your name")) {
    return "mthani2-313";
  }

  if (query.includes("What is") && query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      return (numbers[0] + numbers[1]).toString();
    }
  }
  

  if (query.includes("Which of the following numbers is the largest:")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
  }

  if (query.includes("What is") && query.includes("multiplied by")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      return (numbers[0] * numbers[1]).toString();
    }
  }

  if (query.includes("Which of the following numbers is both a square and a cube:")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      const isSquareAndCube = (num: number) => {
        const sqrt = Math.sqrt(num);
        const cbrt = Math.cbrt(num);
        return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      };
      const result = numbers.filter(isSquareAndCube);
      return result.length > 0 ? result.join(", ") : "None";
    }
  }

  if (query.includes("Which of the following numbers are primes:")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      const isPrime = (num: number) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
      const result = numbers.filter(isPrime);
      return result.length > 0 ? result.join(", ") : "None";
    }
  }

  if (query.includes("What is") && query.includes("minus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      return (numbers[0] - numbers[1]).toString();
    }
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("to the power of")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      return Math.pow(numbers[0], numbers[1]).toString();
    }
  }
  

  return "";
}
