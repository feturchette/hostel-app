import reducer, { INITIAL_STATE } from '~/store/modules/hostels/reducer';
import * as Actions from '~/store/modules/hostels/actions';

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

describe('Hostels reducer', () => {
  it('GET_HOSTELS_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, Actions.getHostelsSuccess(hostels))

    expect(state).toStrictEqual({ hostels: hostels, loading: false})
  });

  it('GET_HOSTELS_FAILURE', () => {
    const state = reducer(INITIAL_STATE, Actions.getHostelsFailure(hostels))

    expect(state).toStrictEqual({ hostels: [], loading: false})
  });

  it('GET_HOSTELS_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Actions.getHostelsRequest())

    expect(state).toStrictEqual({ hostels: [],loading: true})
  });

  it('SET_LOADING TRUE', () => {
    const state = reducer(INITIAL_STATE, Actions.setLoading(true))

    expect(state).toStrictEqual({ hostels: [], loading: true })

  });

  it('NO_ACTION', () => {
    const state = reducer(INITIAL_STATE, {type: 'UNDEFINED'})

    expect(state).toStrictEqual({ hostels: [], loading: false })

  });
})
