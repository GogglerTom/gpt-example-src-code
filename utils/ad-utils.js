import {getTPID} from '../services/lotame';

const googletag = window.googletag;

export async function enableAds () {
  const app = this;
  const TPID = await getTPID();

  googletag.cmd.push(function() {
    app.gptAdSlots[0] = googletag.defineSlot(app.adUnit, [728, 90], 'gpt-728x90-ad')
      .addService(googletag.pubads())
      .setTargeting('size', '728x90');
    app.gptAdSlots[1] = googletag.defineSlot(app.adUnit, [300, 250], 'gpt-300x250-ad')
      .addService(googletag.pubads())
      .setTargeting('size', '300x250');

    googletag.pubads().set('tpid', TPID).enableSingleRequest();

    googletag.enableServices();

    app.gptAdSlots.forEach(slot => { googletag.display(slot); });
  });
}

export function refreshAds () {
  this.gptAdSlots.forEach(slot => { slot.setTargeting('randomKey', getRandomInt(0, 1000)) });
  googletag.pubads().refresh();
  this.gptAdSlots.forEach(slot => { googletag.display(slot); });  
}


// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
