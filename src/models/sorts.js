import {query,queryById} from '../services/sort'

export default {
  namespace: 'sorts',
  state: {
    data: ''
  },
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
    * querySort({payload}, {put, call}) {
      //下面两行不好使
      const result = yield call(query);
      // const result1=result.parseJSON(result)
      //console.log(result);
      if (result) {
        yield put({
          type: 'querySortSuccess',
          payload: {
            data: result.data
          }
        });
      }
    }
  },
  reducers: {
    querySortSuccess(state,{payload:{data}}) {
      console.log(data);
      //console.log(data[0].userId);
      const sortModel = {
        //下面需要状态添加状态

        list: data
        //   [
        //   {
        //     title: 'Javasewadad',
        //     content: '1213456789'
        //   },
        //   {
        //     title: 'Android 知识点',
        //     content: '123456789'
        //   },
        //   {
        //     title: 'Web知识点',
        //     content: '1123456'
        //   },
        //   {
        //     title: 'javascript知识点',
        //     content: '1123456'
        //   },
        // ]
      };
      return {...state, ...sortModel}
    }
  },
}
