const myHeaders = new Headers();
myHeaders.append("apikey", "qQFFd2H9yCgzN0picIFBgoMOhh1tyjxG");

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders
};
export default {
  getCurrenciesConvertRates(currency) {
    return fetch(`https://api.apilayer.com/fixer/latest?&base=${currency}`, requestOptions);
  }
};