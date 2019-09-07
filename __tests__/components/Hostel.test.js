import React from 'react';
import Hostel from '~/components/Hostel'

import { render } from '@testing-library/react-native';

it('should render correctly using the required fields', () => {
  const hostel = {
    name: '',
    images: [{
      prefix: '',
      suffix: '',
    }],
    lowestPricePerNight: {
      currency: '',
      value: '',
    }
  };
  const rates = {
    VEF: (1/7.55),
    USD: 1.0937,
    CAD: 1.4627,
    BRL: 4.5684,
    GBP: 0.90885,
  };

  const { getByTestId } = render(<Hostel data={hostel} rates={rates} />);
  expect(getByTestId("banner")).toBeTruthy();
  expect(getByTestId("type")).toBeTruthy();
  expect(getByTestId("name")).toBeTruthy();
  expect(getByTestId("district")).toBeTruthy();
  expect(getByTestId("rate")).toBeTruthy();
  expect(getByTestId("value")).toBeTruthy();
  expect(getByTestId("overview")).toBeTruthy();
});

it('should render correctly using all fields', () => {
  const hostel = {
    isNew: true,
    isFeatured: true,
    overallRating: {
      overall: 90
    },
    district: {
      name: ''
    },
    type: '',
    overview: '',
    name: '',
    images: [{
      prefix: '',
      suffix: '',
    }],
    lowestPricePerNight: {
      currency: '',
      value: '',
    }
  };
  const rates = {
    VEF: (1/7.55),
    USD: 1.0937,
    CAD: 1.4627,
    BRL: 4.5684,
    GBP: 0.90885,
  };

  const { getByTestId } = render(<Hostel data={hostel} rates={rates} />);
  expect(getByTestId("banner")).toBeTruthy();
  expect(getByTestId("new")).toBeTruthy();
  expect(getByTestId("featured")).toBeTruthy();
  expect(getByTestId("type")).toBeTruthy();
  expect(getByTestId("name")).toBeTruthy();
  expect(getByTestId("district")).toBeTruthy();
  expect(getByTestId("rate")).toBeTruthy();
  expect(getByTestId("value")).toBeTruthy();
  expect(getByTestId("overview")).toBeTruthy();
});

it('should calculate the price correctly', () => {
  const hostel = {
    name: '',
    images: [{
      prefix: '',
      suffix: '',
    }],
    lowestPricePerNight: {
      currency: 'VEF',
      value: '200.00',
    }
  };
  const rates = {
    VEF: (1/7.55),
    USD: 1.0937,
    CAD: 1.4627,
    BRL: 4.5684,
    GBP: 0.90885,
  };

  const { getByTestId, getByText } = render(<Hostel data={hostel} rates={rates} />);
  expect(getByTestId("banner")).toBeTruthy();
  expect(getByTestId("type")).toBeTruthy();
  expect(getByTestId("name")).toBeTruthy();
  expect(getByTestId("district")).toBeTruthy();
  expect(getByTestId("rate")).toBeTruthy();
  expect(getByTestId("value")).toBeTruthy();
  expect(getByTestId("overview")).toBeTruthy();

  expect(getByText("€26.49"))
});
