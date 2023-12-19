
//we need to install some polyfills for the fetch method, because the fetch method is not recognized in the versions below 18 of nodejs, so, we need to install the polyfill whatwg-fetch, and import it in the file jest.setup.js

import 'whatwg-fetch';