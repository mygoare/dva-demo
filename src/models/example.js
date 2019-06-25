import * as example from '../services/example'

export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
	    console.log('hi')
      yield call(example.query, {link: 'https://jsonplaceholder.typicode.com/todos/1'});
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, {payload}) {
      return { ...state, ...payload };
    },
  },

};
