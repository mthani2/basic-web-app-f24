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

  if (query.includes("which of the following numbers is the largest")) {
    // Extract numbers from the query
    const numbers = query.match(/\d+/g).map(Number);
    // Find and return the largest number
    return Math.max(...numbers).toString();
  }

  return "";
}
