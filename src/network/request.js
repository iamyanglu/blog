import axios from 'axios'

export  function request(config) {
    const request = axios.create(
        {
            baseURL: 'http://127.0.0.1:2000',
            timeout:5000
        }


    )
    return request(config)


}
export  function subimtPost(){
  let post = axios.create({
        baseURL: 'http://127.0.0.1:2000',
        method:'post'
    })
   return post
}