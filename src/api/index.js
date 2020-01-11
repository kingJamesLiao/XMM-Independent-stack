import axios from 'axios'

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data.data;
},
err => {
  // 对响应错误做些什么
console.log('err', err.response) // 修改后
  return Promise.reject(err)
});

//请求订单Ment组件的数据接口
export let getMent = () => {
	return axios.get('/static/mock/detail/list.json')
}
//请求商品Ment组件的数据接口
export let getCommo = () => {
  return axios.get('/static/mock/commodity/commodityManage.json')
}
//请求todos的数据接口
export let getTodos = () => {
  return axios.get('/static/mock/todos.json')
}

