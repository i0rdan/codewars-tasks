// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c

// In some countries of former Soviet Union there was a belief about lucky tickets.
// A transport ticket of any sort was believed to posess luck if sum of
// digits on the left half of its number was equal to the sum of digits on the right half.

function luckCheck(ticket){
  if(isNaN(ticket) || ticket.includes('E') || ticket.includes(' ')) {
    throw new Error('Error');
  }

  const length = Math.floor(ticket.length / 2);
  const [a, b] = [ticket.slice(0, length), ticket.slice(-length)]
    .map((el) => el.split('').reduce((prev, curr) => prev + Number(curr), 0));
  
  return a === b;
}
