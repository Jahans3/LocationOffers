import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Container, Card, Text, CardItem, Content, Header, Left, Body, Title, Right } from 'native-base';

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
  return (
    <Container>
      <Content>
        <Header style={{ backgroundColor: '#006a4d' }}>
          <Left />
          <Body>
            <Title>{routeProps.title}</Title>
          </Body>
          <Right />
        </Header>
        <Card style={{ flex: 1, height: 500, width: '100%' }}>
          <MapView style={{ flex: 1, height: 500, width: '100%' }} region={routeProps.coordinates}>
            <Marker
              title={routeProps.title}
              coordinate={routeProps.coordinates}
              image={routeProps.image}
              description={routeProps.description}
            />
          </MapView>
        </Card>
        <Card>
          <CardItem>
            <Text style={{ fontSize: 27, fontWeight: '700' }}>{routeProps.title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{routeProps.description}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
