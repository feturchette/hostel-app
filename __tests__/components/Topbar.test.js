import React from 'react';
import TopBar from '~/components/TopBar'

import { render } from '@testing-library/react-native';

describe('TopBar Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<TopBar />);

    expect(getByText('Hostel World')).toBeTruthy();
  });
});
