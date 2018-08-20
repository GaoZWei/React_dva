export default {
  namespaces: 'sort',
  state: [],
  reducers: {
    'show'(state, {payload: title}) {
      console.log(title);
    }
},
}
