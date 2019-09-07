import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getHostelsRequest, setLoading } from '~/store/modules/hostels/actions';

import { render } from '@testing-library/react-native';
import Hostels from '~/pages/Hostels';

jest.mock('react-redux');

const cbReturn = {
  hostels: {
    hostels: {
      properties: [{
        name: 'New Property',
        images: [{
          prefix: '',
          suffix: '',
        }],
        lowestPricePerNight: {
          currency: 'VEF',
          value: '200.00',
        },
      }],
      location: {
        city: {
          name: "London",
          country: "England"
        }
      }
    },

    loading: false,
  },
  currency: {
    currencies: {
      rates: {
        VEF: (1/7.55),
        USD: 1.0937,
        CAD: 1.4627,
        BRL: 4.5684,
        GBP: 0.90885,
      }
    }
  }
}

describe('Hostels page', () => {
  it('should renders correctly', () => {

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation(cb => cb(cbReturn));

    const { getByText, getByTestId } = render(<Hostels />);

    expect(dispatch).toHaveBeenCalledWith(getHostelsRequest());
    expect(getByText("Hostel World")).toBeTruthy();
    expect(getByText("London, England")).toBeTruthy();
    expect(getByText("New Property")).toBeTruthy();
    expect(getByTestId("list")).toBeTruthy();

  });

  it('should renders correctly empty List', () => {

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation(cb => cb({
      hostels: { hostels: [],  },
      currency: { currencies: {} }
    }));

    const { getByText, getByTestId } = render(<Hostels />);

    expect(dispatch).toHaveBeenCalledWith(getHostelsRequest());
    expect(getByTestId("list")).toBeTruthy();
  });
});
