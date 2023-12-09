/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result = 0)
  {
    this._result = result;
  }

  add(num)
  {
    this._result += num;
  }

  subtract(num)
  {
    this._result -= num;
  }

  multiply(num)
  {
    this._result *= num;
  }

  divide(num)
  {
    if(num === 0)
      throw new Error("Divide by 0");
    this._result /= num;
  }

  getResult()
  {
    return this._result;
  }

  clear()
  {
    this._result = 0;
  }

  isNum(chr)
  {
    if(chr >= '0' && chr <= '9')
      return true;
    return false;
  }

  isArth(chr)
  {
    if(chr === '+' || chr === '-' || chr === '*' || chr === '/')
      return true;
    return false;
  }

  findNum(i, str)
  {
    var j = i;

    for(; j < str.length; ++j)
    {
      if(str[j] === ' ' || this.isNum(str[j]) || str[j] === '.')
        continue;

      if(this.isArth(str[j]) || str[j] === ')')
        break;

      else 
        throw new Error("Invalid expression");
    }
    return {value: +str.slice(i, j), index: j};
  }
  evalExp(exp)
  {    
    
    var result = eval(exp.join(' '));
    if(result === Infinity)
      throw new Error("Divide by 0");
    return result;
  }

  calculate(str)
  {
    let exp = [];

    for(var i = 0;i < str.length; i++)
    {
      if(str[i] === ' ')
        continue;

      else if(this.isNum(str[i]))
      {
        var obj = this.findNum(i, str);
        exp.push(obj.value);
        i = obj.index - 1;
      }
      
      else if(this.isArth(str[i]) || str[i] === '(' || str[i] === ')')
      {
        exp.push(str[i]);
      }

      else
        throw new Error("Invalid Expression");
    }

    this._result = this.evalExp(exp);
  }
  
}

// var obj = new Calculator();
// console.log(obj.calculate("(    19 + 2      + 3) * 2       / (2 + 2       *       5)"));
// console.log(eval("(19 + 2 + 3) * 2 / (2 + 2 * 5)"));
module.exports = Calculator;
