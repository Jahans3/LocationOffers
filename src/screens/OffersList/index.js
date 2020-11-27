import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Notifications } from 'react-native-notifications';

function sendNotification(offerText) {
  return () => {
    Notifications.postLocalNotification({
      title: 'Lloyds Offers',
      body: offerText,
      extra: 'data',
    });
  };
}

function PlaceholderOffer({ offerName = 'Test Offer' }) {
  return (
    <TouchableOpacity onPress={sendNotification(offerName)}>
      <View
        style={{
          width: '100%',
          height: 150,
          borderWidth: 1,
          borderColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Some offer</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function OffersList() {
  return (
    <ScrollView>
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
      <PlaceholderOffer />
    </ScrollView>
  );
}
