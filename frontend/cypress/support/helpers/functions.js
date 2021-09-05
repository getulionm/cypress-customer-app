export function getExpectedSize(number) {
  if (number <= 100) {
    return 'Small';
  } else if (number <= 1000) {
    return 'Medium'
  } else return 'Big';
}
