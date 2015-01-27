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