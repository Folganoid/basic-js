const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let res = {};
  for (let i of domains) {
    let arr = i.split('.');
    let dom = "";
    for(let z = arr.length - 1; z>=0; z--) {
      dom = dom + "." + arr[z];
      if (!res[dom]) {
        res[dom] = 1;
      } else if (res[dom]){
        res[dom]++;
      }
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
