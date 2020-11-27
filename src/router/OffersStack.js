import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OffersList from '../screens/OffersList';
import Offer from '../screens/Offer';

const OffersRouter = createStackNavigator();

export default function OffersStack() {
  return (
    <OffersRouter.Navigator>
      <OffersRouter.Screen name="OffersList" component={OffersList} />
      <OffersRouter.Screen name="Offer" component={Offer} />
    </OffersRouter.Navigator>
  );
}
