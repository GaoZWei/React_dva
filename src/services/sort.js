import request from '../utils/request';
//import qs from 'qs';

const Test_API = 'https://jsonplaceholder.typicode.com';

export async function query() {
  // console.log( request(`/api/users`));不好使
  return request(`${Test_API}/posts`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
//     body: JSON.stringify({
//       userId:1
// })
  })

  // return request("https://jsonplaceholder.typicode.com/users");
}
export async function queryById(){
  return request(`${Test_API}/posts`,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}
