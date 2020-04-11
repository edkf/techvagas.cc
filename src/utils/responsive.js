export default (value1, value2, width1 = 320, width2 = 1920) => {
  const a = decimalRound(100 * (value2 - value1) / (width2 - width1), 3)
  const b = decimalRound((width2 * value1 - width1 * value2) / (width2 - width1), 1)
  return `calc(${a}vw + ${b}px)`
}


function decimalRound (num, places) {
  const power = Math.pow(10, places)
  return (Math.round(num * power) / power)
}