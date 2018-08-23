export default {
  namespaces: 'sorts',
  state: {},
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/sort') {
          dispatch({
            type: 'querySort',
            payload: {}
          });
        }
      });
    },
  },
  effects: {
    * querySort({payload}, {put}) {
      yield put({
        type: 'querySortSuccess',
        payload: {}
      });
    }
  },
  reducers: {
    querySortSuccess(state) {
      const sortModel = {
        //下面需要状态添加状态
        list: [
          {
            title: 'Javasewadad',
            content: '1213456789'
          },
          {
            title: 'Android 知识点',
            content: '123456789'
          },
          {
            title: 'Web知识点',
            content: '1123456'
          },
          {
            title: 'javascript知识点',
            content: '1123456'
          },
        ]
      };
      return {...state, ...sortModel}
    }
  },
}
