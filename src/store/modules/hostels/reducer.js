import produce from "immer";

export const INITIAL_STATE = {
  hostels: [],
  loading: false
};

export default function hostels(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@hostels/GET_HOSTELS_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@hostels/GET_HOSTELS_SUCCESS": {
        draft.loading = false;
        draft.hostels = action.payload.hostels;
        break;
      }
      case "@hostels/GET_HOSTELS_FAILURE": {
        draft.loading = false;
        break;
      }
      case "@hostels/SET_LOADING": {
        draft.loading = action.payload.loading;
        break;
      }
      default:
        return state;
    }
  });
}
