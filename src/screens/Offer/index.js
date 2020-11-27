import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import { Container, Card, Text, CardItem, Content, Header, Left, Body, Title, Right, Thumbnail } from 'native-base';

const routeProps = {
  title: 'Offer title',
  description: 'This is an offer of a description',
  coordinates: {
    latitude: 51.51758926035574,
    longitude: -0.09363967616390254,
    latitudeDelta: 0,
    longitudeDelta: 0,
  },
  image: '',
};

export default function Offer() {
  const route = useRoute();
  const { offerName, offerTitle, cashback, expiryDate, coordinates, thumbnail } = route.params;
  const coords = {
    latitude: coordinates.lat,
    longitude: coordinates.lng,
    latitudeDelta: 0,
    longitudeDelta: 0,
  };
  return (
    <Container>
      <Content>
        <Header style={{ backgroundColor: '#006a4d', paddingLeft: 45 }}>
          <Body>
            <Title>{offerName}</Title>
          </Body>
        </Header>
        <Card style={{ flex: 1, height: 500, width: '100%' }}>
          <MapView
            showsUserLocation
            style={{ flex: 1, height: 500, width: '100%' }}
            camera={{
              center: {
                latitude: 51.51758926035574,
                longitude: -0.09363967616390254,
              },
              pitch: 0,
              heading: 0,
              altitude: 10,
              zoom: 15,
            }}>
            <Marker title={offerName} coordinate={coords} description="Cashback offer" />
          </MapView>
        </Card>
        <Card>
          <CardItem>
            <Thumbnail source={{ uri: thumbnail }} style={{ marginRight: 15 }} />
            <Text style={{ fontSize: 27, fontWeight: '700' }}>{offerName}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text note>
                Get {cashback} Cashback now at {offerTitle}
              </Text>
              <Text note>Expires: {expiryDate}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
