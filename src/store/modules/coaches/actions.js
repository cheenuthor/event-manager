export default {
  async registerCoach(context, data) {
    // const user = context.rootGetters.userId;
    const coachData = {
      // id: user,
      name: data.name,
      description: data.description,
      date: data.date,
      deadline: data.deadline
    };
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://vue-http-4079e.firebaseio.com/events/${data.name}.json?auth=${token}`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }
    context.commit('registerCoach', { ...coachData,  });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://vue-http-4079e.firebaseio.com/events.json`
    );
    const responseData = await response.json();

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        name: responseData[key].name,
        description: responseData[key].description,
        date: responseData[key].date,
        deadline: responseData[key].deadline
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
