import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import Hostels from '~/pages/Hostels';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Hostels
      },
      {
        initialRouteName: 'Hostels',
      },
    ),
  );
