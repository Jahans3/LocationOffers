import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Notifications } from 'react-native-notifications';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

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
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Offer')}>
      {/*<TouchableOpacity onPress={sendNotification(offerName)}>*/}
      <Card>
        <CardItem>
          <Body>
            <Text>Some offer</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

export default function OffersList() {
  return (
    <Container>
      <Header />
      <Content>
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
      </Content>
    </Container>
  );
}
