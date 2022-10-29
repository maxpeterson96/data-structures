var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare boolean for if key exists
  var keyExists = false;
  // if a bucket at key does not exist
  if (!this._storage.get(index)) {
    // set empty index in bucket to a bucket with a literal of tuple passed in
    this._storage.set(index, [[k, v]]);
  } else {
    // get bucket at key
    var bucket = this._storage.get(index);
    // iterate over bucket to search for tuple with matching key
    for (var i = 0; i < bucket.length; i++) {
      // if value at index in bucket is equal to k
      if (bucket[i][0] === k) {
        // set value at index in bucket to v
        bucket[i][1] = v;
        // key exists confirm, update keyExists boolean
        var keyExists = true;
      }
    }
    // if key does not exist
    if (!keyExists) {
      // push the new tuple to bucket
      bucket.push([k, v]);
    }
    // overwrite old bucket at index with new bucket at index
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get bucket from storage
  var bucket = this._storage.get(index);
  // if bucket is falsy
  if (!bucket) {
    // return bucket -> return false
    return bucket;
  }
  // iterate over bucket to find tuple with matching k
  for (var i = 0; i < bucket.length; i++) {
    // if matching k is found
    if (bucket[i][0] === k) {
      // return value at key from bucket
      return bucket[i][1];
    }
  }
  // else return undefined
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get bucket from storage
  var bucket = this._storage.get(index);
  // iterate over bucket to find matching k
  for (var i = 0; i < bucket.length; i++) {
    // if matching k is found
    if (bucket[i][0] === k) {
      // remove index from bucket with splice()
      bucket.splice(i, 1);
    }
  }
  // overwrite old bucket at index with new bucket at index
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */




// var getData = this._storage.get(index);
// // console.log(getData);
// if (Array.isArray(getData)) {
//   //console.log(getData);
//   getData.forEach(function(item) {
//     if (item[0] === k) {
//       console.log('k = ' + k);
//       console.log('item:', item[1]);
//       return item[1];
//     }
//   });
// } if (getData !== undefined) {
//   console.log(getData);
//   return getData;
// }
// return getData;
// };





// var getData = this._storage.get(index);
// // console.log(getData);
//   var temp1;
//   if (Array.isArray(getData)) {
//     console.log(getData);
//     getData.forEach(function(item) {
//       console.log('item 0 = ' + item[0]);
//       if (item[0] === k) {
//         temp1 = item[1];
//         // console.log('k = ' + k);
//         // console.log('item:', item[1]);
//         // return item[1];
//       }
//     });
//     console.log('temp = ' + temp1);
//     return temp1;
//   } if (getData !== undefined) {
//     // console.log(getData);
//     return getData;
//   }
//   return getData;



// var getData = this._storage.get(index);
// console.log(getData);
//   var temp1;
//   if (Array.isArray(getData)) {
//     console.log(getData);
//     getData.forEach(function(item) {
//       console.log('item 0 = ' + item[0]);
//       if (item[0] === k) {
//         return item[1];
//         // console.log('k = ' + k);
//         // console.log('item:', item[1]);
//         // return item[1];
//       }
//     });
//     console.log('temp = ' + temp1);
//     // return temp1;
//   } if (getData !== undefined) {
//     // console.log(getData);
//     return getData;
//   }
//   return getData;






var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var keyExists = false;
  if (!this._storage.get(index)) {
    this._storage.set(index, [[k, v]]);
  } else {
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        var keyExists = true;
      }
    }
    if (!keyExists) {
      bucket.push([k, v]);
    }
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return bucket;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  this._storage.set(index, bucket);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


