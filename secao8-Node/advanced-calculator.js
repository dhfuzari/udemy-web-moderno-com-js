const calculator = require('./calculator');

class AdvancedCalculator extends calculator {
  multiply(opr1, opr2) { return opr1 * opr2 }
  divide(opr1, opr2) { return opr1 / opr2 }
}

module.exports = new AdvancedCalculator;