const Mixpanel = require("mixpanel");

// track an event with optional properties
const trackEvent = (eventName, value) => {
  const mixPanelProjectToken = process.env.MIXPANEL_PROJECT_TOKEN;
  console.log(mixPanelProjectToken);

  if (mixPanelProjectToken) {
    const mixpanel = Mixpanel.init(mixPanelProjectToken, {
      geolocate: true,
    });

    console.log("mixpanel init");
    mixpanel.track(eventName, {
      url: value,
    });
  }
};

module.exports = trackEvent;
