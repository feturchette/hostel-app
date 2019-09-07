export function getHostelsRequest() {
  return {
    type: "@hostels/GET_HOSTELS_REQUEST",
  };
}

export function getHostelsSuccess(hostels) {
  return {
    type: "@hostels/GET_HOSTELS_SUCCESS",
    payload: { hostels }
  };
}

export function getHostelsFailure() {
  return {
    type: "@hostels/GET_HOSTELS_FAILURE",
  };
}

export function setLoading(loading) {
  return {
    type: "@hostels/SET_LOADING",
    payload: { loading }
  };
}
