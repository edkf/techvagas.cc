export default function () {
  var name = "Unknown";
  if(navigator.userAgent.indexOf("MSIE")!==-1){
      name = "MSIE";
  }
  else if(navigator.userAgent.indexOf("Firefox")!==-1){
      name = "Firefox";
  }
  else if(navigator.userAgent.indexOf("Opera")!==-1){
      name = "Opera";
  }
  else if(navigator.userAgent.indexOf("Chrome") !== -1){
      name = "Chrome";
  }
  else if(navigator.userAgent.indexOf("Safari")!==-1){
      name = "Safari";
  }
  return name;   
}