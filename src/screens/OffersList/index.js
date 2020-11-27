import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Notifications } from 'react-native-notifications';
import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Left, Title } from 'native-base';
import MapView, { Marker } from 'react-native-maps';

function sendNotification(offerText) {
  return () => {
    Notifications.postLocalNotification({
      title: 'Lloyds Offers',
      body: offerText,
      extra: 'data',
    });
  };
}

function PlaceholderOffer({ offerName, offerTitle, cashback, expiryDate, thumbnail, coordinates }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Offer', { offerName, offerTitle, cashback, expiryDate, thumbnail, coordinates })
      }>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: thumbnail }} />
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

const offers = [
  {
    offerName: 'Costa Coffee 10% Cashback',
    offerTitle: 'Costa Coffee',
    cashback: '5%',
    expiryDate: '12 Dec 2020',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/CostaLogo.svg/1200px-CostaLogo.svg.png',
    coordinates: {
      lat: 51.51517091752627,
      lng: -0.09041510414283441,
    },
  },
  {
    offerName: 'Five Guys 5% cashback',
    offerTitle: 'Five Guys',
    cashback: '5%',
    expiryDate: '13 Dec 2020',
    // thumbnail: '../../assets/download.png',
    thumbnail: 'https://www.bh2leisure.co.uk/wp-content/uploads/2017/02/Five_Guys_Logo_gallery_700x466.jpg',
    coordinates: {
      lat: 51.517133116911,
      lng: -0.08785972338326588,
    },
  },
  {
    offerName: 'Everyone Active £20 cashback',
    offerTitle: 'Everyone Active',
    cashback: '£20',
    expiryDate: '14 Dec 2020',
    thumbnail: 'https://investhemel.co.uk/wp-content/uploads/2018/02/EveryOne-Active.jpg',
    coordinates: {
      lat: 51.51670660072623,
      lng: -0.08561657993495812,
    },
  },
  {
    offerName: 'Jojo Maman Bebe 10% cashback',
    offerTitle: 'Jojo Maman Bebe',
    cashback: '10%',
    expiryDate: '20 Dec 2020',
    thumbnail: 'https://medialabgroup.co.uk/wp-content/uploads/2018/12/Jojo-Maman-Bebe.png',
    coordinates: {
      lat: 51.51664310548418,
      lng: -0.08367579800003232,
    },
  },
  {
    offerName: 'Co-op Food store 10% cashback',
    offerTitle: 'Co-op Food store',
    cashback: '10%',
    expiryDate: '24 Dec 2020',
    thumbnail: 'https://www.coop.co.uk/assets/static/images/social/coop-logo-1200x630.png',
    coordinates: {
      lat: 51.515547594072224,
      lng: -0.09085127091943118,
    },
  },
  {
    offerName: 'Hotel Chocolat 10% cashback',
    offerTitle: 'Hotel Chocolat',
    cashback: '10%',
    expiryDate: '29 Dec 2020',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9hDs1RUdKHB0NcFopJ1L2lHh8KEGmsZ4IQ&usqp=CAU',
    coordinates: {
      lat: 51.51417104774266,
      lng: -0.09491919377081601,
    },
  },
];

export default function OffersList() {
  return (
    <Container>
      <Header style={{ backgroundColor: '#006a4d', paddingLeft: 45 }}>
        <Body>
          <Title>You have {offers.length} offers within 1km!</Title>
        </Body>
      </Header>
      <Content>
        <Card>
          <CardItem>
            <MapView
              showsUserLocation
              minZoomLevel={1}
              style={{ flex: 1, height: 250, width: '100%' }}
              region={{
                latitude: 51.51758926035574,
                longitude: -0.09363967616390254,
                latitudeDelta: 0,
                longitudeDelta: 0,
              }}>
              {offers.map(({ offerTitle, coordinates }) => (
                <Marker
                  title={offerTitle}
                  coordinate={{
                    latitude: coordinates.lat,
                    longitude: coordinates.lng,
                    latitudeDelta: 0,
                    longitudeDelta: 0,
                  }}
                  description="Cashback offer"
                />
              ))}
            </MapView>
          </CardItem>
        </Card>
        <ScrollView>
          {offers.map((offer) => (
            <PlaceholderOffer key={offer.offerName} {...offer} />
          ))}
        </ScrollView>
      </Content>
    </Container>
  );
}
