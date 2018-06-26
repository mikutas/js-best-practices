var coins = {
  'p': 1,
  'n': 5,
  'd': 10,
  'q': 25
};

var coinTypes = ['p', 'n', 'd', 'q'];

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
  }
};