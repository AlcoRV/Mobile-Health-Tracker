import PushNotification, { Importance } from "react-native-push-notification"

const activeNotifications = {};

const CreateChannel = () => {
    PushNotification.createChannel(
        {
          channelId: "1", // (required)
          channelName: "My channel", // (required)
          channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
          playSound: true, // (optional) default: true
          soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
          importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
          vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
        },
    (created) => console.log(`createChannel returned '${created}'`));
} 

const ShowNotification = (title, message) => {
    CreateChannel();
    PushNotification.localNotification({
        channelId : "channel-id",
        title: title,
        message: message,
        isMedicine: true
    });
};

const ShowSheduleNotification = (title, message, date, subject) => {
    CreateChannel();
    const id = parseInt((Math.random() + 1) * 100000) + "";
    activeNotifications[id] = subject.value;
    PushNotification.localNotificationSchedule({
        id: id,
        channelId : "1",
        title: title,
        message: message,
        date: date,
        allowWhileIdle: false,
        //repeatTime: 1,
        repeatType: "minute",
        subject: subject.value
    });
    
};

const CancelNotifications = (id) => {
    PushNotification.cancelAllLocalNotifications();
}

const CancelNotNeededNotifications = (subject) => {
    for(let key of Object.keys(activeNotifications)){
        if(activeNotifications[key] == subject.value){
            PushNotification.cancelLocalNotification(key);
            delete activeNotifications[key];
        }
    }
}

export {ShowNotification, ShowSheduleNotification, CancelNotNeededNotifications}