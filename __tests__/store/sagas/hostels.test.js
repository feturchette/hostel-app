import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import { getHostelsSuccess, getHostelsFailure }  from '~/store/modules/hostels/actions';
import { getHostels } from '~/store/modules/hostels/sagas';
import api from '~/services/api';

const apiMock = new MockAdapter(api);

const hostels = {
  properties: [
    {
      name: "Wombats City Hostel London",
      overallRating: {
        overall: 91,
      },
      isFeatured: true,
      type: "HOSTEL",
      district: {
        name: "London Bridge"
      },
    }
  ],
  location: {
    city: {
      name: "London",
      country: "England"
    }
  }
};

describe('Hostels Sagas', () => {
  it('should be able to fetch hostels', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('bf8d095f2e92da94938810b8a8187c21/raw/70b112f88e803bf0f101f2c823a186f3d076d9e6/properties.json')
      .reply(200, hostels);

    await runSaga({ dispatch }, getHostels).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getHostelsSuccess(hostels))
  })

  it('should fails when api return errors', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('bf8d095f2e92da94938810b8a8187c21/raw/70b112f88e803bf0f101f2c823a186f3d076d9e6/properties.json')
      .reply(500);

    await runSaga({ dispatch }, getHostels).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getHostelsFailure())
  })
});
