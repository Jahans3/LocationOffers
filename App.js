import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Notifications } from 'react-native-notifications';

function useRegisterNotifications() {
  useEffect(() => {
    Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
      console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
      completion({ alert: true, sound: true, badge: true });
    });

    Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
      console.log(`Notification opened: ${notification.payload}`);
      completion();
    });
  }, []);
}

function sendNotification() {
  Notifications.postLocalNotification({
    title: 'Lloyds Offers',
    body: 'Get 50% off at Pret ${location}',
    extra: 'data',
  });
}

export default function App() {
  useRegisterNotifications();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lloyds Location Offers</Text>
      <TouchableOpacity onPress={sendNotification} style={styles.button}>
        <Text style={styles.buttonText}>Send Test Notification</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 27,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0b46cd',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 22,
    color: '#ffffff',
  },
});
