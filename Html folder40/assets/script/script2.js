// 116)

function mapping(letters) {
    const result = {};
  
    for (let i = 0; i < letters.length; i++) {
      const lowercaseLetter = letters[i];
      const uppercaseLetter = lowercaseLetter.toUpperCase();
      result[lowercaseLetter] = uppercaseLetter;
    }
  
    return result;
  }
  
  console.log(mapping(["p", "s"]));
  console.log(mapping(["a", "b", "c"]));
  console.log(mapping(["a", "v", "y", "z"]));


// 117)

function inkLevels(inks) {
    const minPages = Math.min(...Object.values(inks));
  
    return minPages;
  }
  
  console.log(inkLevels({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
  }));
  
  console.log(inkLevels({
    "cyan": 432,
    "magenta": 543,
    "yellow": 777
  }));
  
  console.log(inkLevels({
    "cyan": 700,
    "magenta": 700,
    "yellow": 0
  })); 
  
// 118)

function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const values = Object.values(obj);
  
    return [keys, values];
  }
  
  console.log(keysAndValues({ a: 1, b: 2, c: 3 })); 
  console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
  console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));


// 119)

// ?

// 120)

function expensiveOrders(orders, cost) {
    const expensive = {};
  
    for (let order in orders) {
      if (orders[order] > cost) {
        expensive[order] = orders[order];
      }
    }
  
    return expensive;
  }
  
  console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000));
  
  console.log(expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000));
  
  console.log(expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40));  