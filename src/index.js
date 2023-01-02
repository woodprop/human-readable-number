module.exports = function toReadable (number) {
    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
      'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const arr = number.toString().split('').map(n => +n);

    if (number === 0) return 'zero';


    let res = '';

    if (arr.length === 3) {
      res += digits[arr[0]] + ' hundred';
      arr.shift();
    }

    if (arr.length === 2) {
        if (arr[0] !== 0) {
            if (res.length > 0) res += ' ';
            if (+(arr.join('')) < 20) {
                res += digits[+(arr.join(''))];
                return res;
            }
            res += tens[arr[0]];
        }
        arr.shift();
    }

    if (arr.length === 1) {
        if (arr[0] === 0) return res;
        if (res.length > 0) res += ' ';

        res += digits[arr[0]];
    }

  return res;
}
