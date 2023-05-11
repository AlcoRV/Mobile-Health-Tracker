import { registerRootComponent } from 'expo';

import App from './App';
import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

PushNotification.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
  
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
      PushNotification.cancelLocalNotification(notification.id);
    },
  
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    popInitialNotification: true,

    requestPermissions: Platform.OS == 'ios'

  });

registerRootComponent(App);
