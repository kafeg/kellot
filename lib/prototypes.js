if(!Date.prototype.toLocaleFormat){
  Date.prototype.toLocaleFormat = function(format) {
    var f = {
      Y : this.getFullYear(),
      y : this.getFullYear()-(this.getFullYear()>=2e3?2e3:1900),
      m : this.getMonth() + 1,
      d : this.getDate(),
      H : this.getHours(),
      M : this.getMinutes(),
      S : this.getSeconds()
    }, k;
    for(k in f)
      format = format.replace('%' + k, f[k] < 10 ? "0" + f[k] : f[k]);
    return format;
  }
};

implodeArray = function ( glue, pieces ) {  // Join array elements with a string
  //
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: _argos
  return ( ( pieces instanceof Array ) ? pieces.join ( glue ) : pieces );
};

if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}