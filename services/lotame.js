import {getRandomInt} from '../utils/ad-utils';

const localStorage = window.localStorage;

/*
 *  This function is used to simulate a slow or fast
 *  response for a 'TPID' value.'
*/
async function mockLotameAPI () {
  const latency = getRandomInt(0, 3) * 1000;                  // Generate a random latency between 0-2 seconds.

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({tpid: '1266bec41f02b8b6a37d42a977233ff1'});    // This is a mock value!
    }, latency);
  });
}

/*
 *  This function returns a TPID.
 *  If one is not returned in less than a second, look in localStorage.
 *  If all else fails, return a 'none' value.
*/
export async function getTPID () {
  let TPID = 'none';

  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('timeout')), 1000);
  });

  await Promise.race([mockLotameAPI(), timeoutPromise])
    .then(realTPID => {
      TPID = realTPID.tpid;
      localStorage && localStorage.setItem('tpid', TPID);
    }, function (err) {
      console.error('LOTAME API CALL', err); 

      if (localStorage && localStorage.getItem('tpid')) {
        TPID = localStorage.getItem('tpid');
      }
    });

  return TPID;
}
