export const removeEmptyFromArray = (array) => {
  return array.filter(function(n) { return n != undefined });
}

export const removeDuplicatesFromArray = (array) => {
  var uniqueArray = array.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
  });
  return uniqueArray;
}

export const isFloat = (n) => {
  return n === +n && n !== (n|0);
}

export const isObject = (val) => {
    return ( (typeof val === 'function') || (typeof val === 'object') );
}

export const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export const isString = (x) => {
  return Object.prototype.toString.call(x) === "[object String]"
}

export const isObjectEmpty = (obj) => {
  if (obj == null) {
    return true;
  }

  if (Number.isInteger(obj)) {
    return false;
  }

  if (isFloat(obj)) {
    return false;
  }

  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }

  return true;
}

export const groupBy = (array, key) => {
  return array.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const generateUuid = () => {
    var d = new Date().getTime();
    var uuid = 'Axxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

export const capitalizeFirstLetter = (s) => {
    return s[0].toUpperCase() + s.slice(1);
}

export const stringArrayReplace = (s, words) => {
  for(var i = 0; i < words.length; i++) {
    s = s.replace('%' + i, words[i])
  }
  return s
}

export const invalidateCacheCreation = (file, identifier) => {
  var prefix = file.split(".")
  var newFile = ""
  for (var i = 0; i < prefix.length - 1; i++) {
    newFile += prefix[i] + "."
  }
  newFile += identifier
  newFile += "."
  newFile += prefix[prefix.length - 1]
  return newFile
}

export const swapFileType = (file, fileType) => {
  var prefix = file.split(".")
  var newFile = ""
  for (var i = 0; i < prefix.length - 1; i++) {
    newFile += prefix[i] + "."
  }
  newFile += fileType
  return newFile
}

export const getMonthAsString = (month) => {

  switch(month) {
    case 1:
      return "January"
    case 2:
      return "February"
    case 3:
      return "March"
    case 4:
      return "April"
    case 5:
      return "May"
    case 6:
      return "June"
    case 7:
      return "July"
    case 8:
      return "August"
    case 9:
      return "September"
    case 10:
      return "October"
    case 11:
      return "November"
    case 12:
      return "December"
  }
}

export const getImageSize = (img, callback) => {
  var loaded = false;
  var image = document.createElement('img');
  image.onload = function () { loaded = true };
  image.src = img

  var wait = setInterval(function () {
    if (loaded) {
      clearInterval(wait);
      callback.apply(this, [image.naturalWidth, image.naturalHeight]);
    }
  }, 30);
}
