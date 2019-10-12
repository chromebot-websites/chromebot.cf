const send = (url, xmlhttp) => {
  xmlhttp.open("GET", url + "?timestamp=" + new Date().getTime(), true); //we append the current timestamp to bypass caching, it's hacky but it works. Please don't remove it unless you have a better solution.
};

const SendXMLHTTP = (url, xmlhttp, ms) => {
  console.log(url, xmlhttp, ms);
  send(url, xmlhttp);
  return setTimeout(() => {
    send(url, xmlhttp);
  }, ms);
};

export default SendXMLHTTP;
