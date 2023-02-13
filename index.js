function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  let results = [];
  myEach(collection, function(val) {
    results.push(callback(val));
  });
  return results;
}

function myReduce(collection, callback, accumulator) {
  let hasAccumulator = accumulator !== undefined;
  myEach(collection, function(val) {
    if (!hasAccumulator) {
      accumulator = val;
      hasAccumulator = true;
    } else {
      accumulator = callback(accumulator, val);
    }
  });
  return accumulator;
}

function myFind(collection, callback) {
  let result;
  let found = false;
  myEach(collection, function(val) {
    if (!found && callback(val)) {
      result = val;
      found = true;
    }
  });
  return result;
}


function myFilter(collection, callback) {
  let results = [];
  myEach(collection, function(val) {
    if (callback(val)) {
      results.push(val);
    }
  });
  return results;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    let size = 0;
    for (let key in collection) {
      size++;
    }
    return size;
  }
}

function myFirst(collection, n) {
  if (Array.isArray(collection)) {
    if (n === undefined) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  } else {
    for (let key in collection) {
      return collection[key];
    }
  }
}

function myLast(collection, n) {
  if (Array.isArray(collection)) {
    if (n === undefined) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(Math.max(0, collection.length - n), collection.length);
    }
  }
}

function myKeys(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}

function myValues(obj) {
  let values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
}
