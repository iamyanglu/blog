import {subimtPost} from './request'

export  function putArt(obj) {
    let post = subimtPost()
    post.post('/put',obj).then(res=> 1).catch(err=>0)


}