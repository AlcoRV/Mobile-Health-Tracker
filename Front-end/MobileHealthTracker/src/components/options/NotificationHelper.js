import PushNotification, { Importance } from "react-native-push-notification"


const ShowNotification = (title, message) => {
    PushNotification.createChannel(
        {
          channelId: "1", // (required)
          channelName: "My channel", // (required)
          channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
          playSound: false, // (optional) default: true
          soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
          importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
          vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
        },
        (created) => console.log(`createChannel returned '${created}'`));
    PushNotification.localNotification({
        channelId : "1",
        title: title,
        message: message
    });
};

export {ShowNotification}