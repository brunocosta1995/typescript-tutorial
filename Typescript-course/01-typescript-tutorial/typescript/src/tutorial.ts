function processData(
  input: string | number,
  config: { reverse: boolean} = {reverse: false}
) {
    if (typeof input === 'number'){
        return input*input
    } else if (config.reverse === true && typeof input === 'string') {
        return input.toString().split('').reverse().join('').toUpperCase();
    } else {
        return input.toUpperCase()
    } 
}

console.log(processData('100'));


