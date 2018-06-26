var coins = {
  'q': 25,
  'd': 10,
  'n': 5,
  'p': 1
};

var coinTypes = ['q', 'd', 'n', 'p'];

module.exports = {
  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    if (coinTypes.indexOf(coinType) === -1) {
      throw new Error('Unrecognized coin ' + coinType);
    }
    else {
      return coins[coinType];
    }
  },

  convertToChange: function(number){
    var converted = [];
    while (number != 0) {
      if (number < 0) throw new Error('Oops!');
      for (coinType of coinTypes) {
        if (number - this.getAmount(coinType) >= 0) {
          number -= coins[coinType];
          converted.push(coinType);
          break;
        }
      }
    }
    return converted;
  }
};