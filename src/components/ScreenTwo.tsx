import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

type ScreenTwoProps = {
  route: RouteProp<MainStackParamList, 'Two'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Two'>;
};

export function ScreenTwo({ navigation, route }: ScreenTwoProps) {
  return (
    <flexboxLayout>
      <label>Météo {route.params.ville}</label>
      <button onTap={() => navigation.goBack()}>Go back</button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
