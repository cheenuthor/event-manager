export default {
  async contactCoach(context, payload) {
    const newRequest = {
      // id: new Date().toISOString(),
      name: payload.name,
      mobile: payload.mobile,
      email: payload.email,
      event: payload.event
    };
    const response = await fetch(
      `https://vue-http-4079e.firebaseio.com/requests.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }
    console.log(responseData);
    // newRequest.id = responseData.name;
    // newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  async fetchRequest(context) {
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://vue-http-4079e.firebaseio.com/requests.json?auth=${token}`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const request = {
     
      name: responseData[key].name,
      mobile: responseData[key].mobile,
      email: responseData[key].email,
      event: responseData[key].event
      };
      requests.push(request);
    }
    console.log(requests)
    context.commit('setRequests', requests);
  }
};
