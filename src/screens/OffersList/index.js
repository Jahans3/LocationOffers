import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Notifications } from 'react-native-notifications';
import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Left } from 'native-base';

function sendNotification(offerText) {
  return () => {
    Notifications.postLocalNotification({
      title: 'Lloyds Offers',
      body: offerText,
      extra: 'data',
    });
  };
}

function PlaceholderOffer({ offerName, offerTitle, cashback, expiryDate }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Offer', { offerName, offerTitle, cashback, expiryDate })}>
      {/*<TouchableOpacity onPress={sendNotification(offerName)}>*/}
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../../assets/Costacoffee.png')} />
            <Body>
              <Text>{offerTitle}</Text>
              <Text note>{`${offerTitle} ${cashback} Cashback`}</Text>
              <Text note>Expire {expiryDate}</Text>
            </Body>
          </Left>
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
          <PlaceholderOffer
            offerName="Costa Coffee 10% Cashback"
            offerTitle="Costa Coffee"
            cashback="5%"
            expiryDate="12 Dec 2020"
          />
          <PlaceholderOffer
            offerName="Five Guys 5% cashback"
            offerTitle="Five Guys"
            cashback="5%"
            expiryDate="13 Dec 2020"
          />
          <PlaceholderOffer
            offerName="Everyone Active £20 cashback"
            offerTitle="Everyone Active"
            cashback="£20"
            expiryDate="14 Dec 2020"
          />
          <PlaceholderOffer
            offerName="Jojo Maman Bebe 10% cashback"
            offerTitle="Jojo Maman Bebe"
            cashback="10%"
            expiryDate="20 Dec 2020"
          />
          <PlaceholderOffer
            offerName="Co-op Food store 10% cashback"
            offerTitle="Co-op Food store"
            cashback="10%"
            expiryDate="24 Dec 2020"
          />
          <PlaceholderOffer
            offerName="Hotel Chocolat 10% cashback"
            offerTitle="Hotel Chocolat"
            cashback="10%"
            expiryDate="29 Dec 2020"
          />
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
