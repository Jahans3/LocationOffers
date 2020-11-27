import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OffersList from '../screens/OffersList';

const OffersRouter = createStackNavigator();

export default function OffersStack() {
  return (
    <OffersRouter.Navigator>
      <OffersRouter.Screen name="OffersList" component={OffersList} />
    </OffersRouter.Navigator>
  );
}
