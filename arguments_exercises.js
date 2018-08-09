function sum1 () {
  let args = Array.prototype.slice.call(arguments);
  let result = 0
  args.forEach(arg => result += arg);
  return result;
}

function sum2 (...args) {
  let result = 0
  args.forEach((arg) => {
    result += arg
  });
  return result;
}

function sum3 (...args) {
  let result = 0
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

Function.prototype.myBind1 = function(context) {
  const bindArgs = Array.from(arguments).slice(1);
  const fn = this
  return function bindingFun() {
    const callArgs = Array.from(arguments);
    return fn.apply(context, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind2 = function(context, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  }
}

function curriedSum(numArgs) {
  const numbers = [];
  function _curriedSum(arg) {
    numbers.push(arg);
    if (numbers.length === numArgs) {
      let result = 0;
      numbers.forEach((num) => {result += num});
      return result;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  const numbers = [];
  const fn = this;
  function _curriedFn(arg) {
    numbers.push(arg);
    if (numbers.length === numArgs) {
      return fn.apply(null ,numbers);
    } else {
      return _curriedFn;
    }
  }
  return _curriedFn;
}

Function.prototype.curry2 = function (numArgs) {
  const args = [];
  const _curriedFn = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this(...args);
    } else {
      return _curriedFn;
    }
  };
  return _curriedFn;
};
