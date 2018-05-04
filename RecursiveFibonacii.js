function fib(n) {
  if (n >= 3) {
    return fib(n - 1) + fib(n - 2);
  } else return 1;
}
console.log(fib(8));
