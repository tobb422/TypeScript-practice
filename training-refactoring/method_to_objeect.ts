class Account {
  gamma = (inputVal: number, quantity: number, yearToDate: number): number => {
    // const importantValue1 = (inputVal * quantity) + this.delta();
    // let importantValue2 = (inputVal * yearToDate) + 100;
    // if ((yearToDate - importantValue1) > 100) { importantValue2 -= 20; }
    // const importantValue3 = importantValue2 * 7;
    // return importantValue3 - 2 * importantValue1;
    return new Gamma(this, inputVal, quantity, yearToDate).compute();
  }

  delta = () => 3;
}

// このgammaメソッドをリファクタ対象として考える

class Gamma {
  private account: Account;
  private inputVal: number;
  private quantity: number;
  private yearToDate: number;

  constructor(source: Account, inputValArg: number, quantityArg: number, yearToDateArg: number) {
    this.account = source;
    this.inputVal = inputValArg;
    this.quantity = quantityArg;
    this.yearToDate = yearToDateArg;
  }

  compute = () => {
    const importantValue1 = (this.inputVal * this.quantity) + this.account.delta();
    let importantValue2 = (this.inputVal * this.yearToDate) + 100;
    if ((this.yearToDate - importantValue1) > 100) { importantValue2 -= 20; }
    const importantValue3 = importantValue2 * 7;
    return importantValue3 - 2 * importantValue1;
  }
}

