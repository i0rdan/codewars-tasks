// https://www.codewars.com/kata/52cf02cd825aef67070008fa

// General Patron is faced with a problem , his intelligence has intercepted some secret messages from the enemy but they are all encrypted.
// Those messages are crucial to getting the jump on the enemy and winning the war.
// Luckily intelligence also captured an encoding device as well.
// However even the smartest programmers weren't able to crack it though.
// So the general is asking you , his most odd but brilliant programmer.
// You can call the encoder like this.
// console.log (device.encode ('What the hell')) ;

device.decode = function (w) {
  const key = '82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,';
  return w.split('')
    .map((c,i) => key.indexOf(c) >= 0 ? key[(key.indexOf(c) + 65 - i) % 66 ] : c)
    .join('');
}
