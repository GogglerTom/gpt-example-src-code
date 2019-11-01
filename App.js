import React, {Component} from 'react';
import Button from './Button';
import {enableAds, refreshAds} from './utils/ad-utils';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      renderTimeStamp: Date.now()  // Increment this number with the latest time to refresh ads.
    }; 

    this.gptAdSlots = [];
    this.adUnit = '344101295/SI/www.silive.com/news/index.ssf';
    this.updateAdsTimeStamp = this.updateAdsTimeStamp.bind(this);
  }

  componentDidUpdate (prevProps, prevState) {
    if (!this.gptAdSlots.length) return;

    refreshAds.call(this);
  }  

  componentDidMount () {
    enableAds.call(this);
  }

  updateAdsTimeStamp () {
    this.setState({ renderTimeStamp: Date.now() });
  }

  render () {
    return (
      <div className="App">
        <div id="gpt-728x90-ad">
        </div>
        <nav>
        </nav>
        <article>
          <Button clickHandler={this.updateAdsTimeStamp} text='Refresh Ads'/>
        </article>
        <aside>
          <div id="gpt-300x250-ad">
          </div>
        </aside>
      </div>
    );
  }
}

export default App;
