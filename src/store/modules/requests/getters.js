export default {
  requests(state, 
    // _g, _s, 
    // rootGetters
    ) {
    // const coachID = rootGetters.userId;
    // return state.requests.filter(req => req.coachId === coachID);
    return state.requests
  },
  hasRequests(state, getters) {
    return getters.requests && state.requests.length > 0;
  }
};
