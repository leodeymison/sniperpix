import { store } from './store.js';
import { routes } from './routes.js';

var $ = Dom7;

var device = Framework7.getDevice();
var app = new Framework7({
  name: 'primeiro-app', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  // App store
  store: store,
  // App routes
  routes: routes,
  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova,
    scrollIntoViewCentered: device.cordova,
  },
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
    },
  },
});

app.on('pageInit', function (page) {
  if (page.name === 'article') {
    EventLike();
  }
});
const EventLike = () => {
  const page = app.views.main.router.currentPageEl;

  console.log(page.querySelector('.event-button'))

  page.querySelector('.event-button').addEventListener('click', function () {
    alert('Like em artigo')
  });
}

export default app