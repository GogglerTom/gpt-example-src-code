# gpt-example-src-code
An Example of GPT

### utils/ad-utils.js
This file contains the integration code that communicates with GPT.
The enableAds function renders two ads on the screen.
The refreshAds function refreshes the ads on the screen.

### services/lotame.js
This file is used for asynchronous communication with Lotame.
The mockLotameAPI function is used to simulate a slow or fast request to Lotame for a TPID.
The getTPID function is responsible for saving or getting a TPID from localstorage, calling the aforementioned mockLotame function to request a TPID from Lotame, and giving up on the request if Lotame takes a second or longer to respond.

### App.js
This file contains the React component.  It defines the HTML used to contain the ads as well as a custom Button component.  It also calls the aforementioned enableAds function when the component is initialized.

### Button.js
This file contains another React component that renders a button.  When clicked, the button ultimately ends up calling the refreshAds function.

## Screenshot
![alt screenshot](screenshot.png)
