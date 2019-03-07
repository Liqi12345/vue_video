import axios from 'axios'
import qs from 'qs'
import router from '../router'

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
let loading = null;
var service = axios.create({
    baseURL:'http://118.24.197.138',

})

//添加请求拦截器
service.interceptors.request.use(function(config){


    //loading = ElementUI.Loading.service({})
    if(localStorage.getItem('token')){

        config.headers.Authorization = 'JWT ' + localStorage.getItem('token')
    }
    return config
},function(error){
    setTimeout(() => {
        //loading.close();
    },3000)
    return Promise.reject(error)
})
//添加响应拦截器
service.interceptors.response.use(function(response){
    //loading.close();
        /**
         * 下面的注释为通过在response里，自定义code来标示请求状态
         * 当code返回如下情况则说明权限有问题，登出并返回到登录页
         * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
         */
        // response => {
        //   const res = response.data
        //   if (res.code !== 20000) {
        //     })
        //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
        //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //       }).then(() => {
        //         })
        //       })
        //     }
        //     return Promise.reject('error')
        //   } else {
        //     return response.data
        //   }
        // },
        return response
    },function(error){
    //loading.close();
    console.log(error)
    if (error.response.status) {

        switch (error.response.status) {
            // 401: 未登录
            // 未登录则跳转登录页面，并携带当前页面的路径
            // 在登录成功后返回当前页面，这一步需要在登录页操作。
            case 401:
                // console.log(router)

                // router.replace({
                //     path: '/login',
                //     query: {
                //         redirect: router.currentRoute.fullPath
                //     }
                // });
                localStorage.clear()
                router.push({path:'/login'})
                break;
            case 404:
            router.push({path:'/404'})
            // 403 token过期
            // 登录过期对用户进行提示
            // 清除本地token和清空vuex中token对象
            // 跳转登录页面
            // case 403:
            //     Toast({
            //         message: '登录过期，请重新登录',
            //         duration: 1000,
            //         forbidClick: true
            //     });
            //     // 清除token
            //     localStorage.removeItem('token');
            //     store.commit('loginSuccess', null);
            //     // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
            //     setTimeout(() => {
            //         router.replace({
            //             path: '/login',
            //             query: {
            //                 redirect: router.currentRoute.fullPath
            //             }
            //         });
            //     }, 1000);
            //     break;
            //
            // // 404请求不存在
            // case 404:
            //     Toast({
            //         message: '网络请求不存在',
            //         duration: 1500,
            //         forbidClick: true
            //     });
            //     break;
            // // 其他错误，直接抛出错误提示
            // default:
            //     Toast({
            //         message: error.response.data.message,
            //         duration: 1500,
            //         forbidClick: true
            //     });
        }
        return Promise.reject(error.response);
    }
    }
)

export default{
    //get请求
    get(methods,url,param){

        //promise示例
        //   axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        return new Promise((resolve,reject)=>{

            service({
                method:methods,
                url,
                params:param,

            }).then(res=>{
                resolve(res)  //resolve在promise执行器内部
            }).catch(err=>{

                if(err.data){
                    if(err.status == 500){
                        ElementUI.Message.error('网络错误，请稍后再试');
                    }else{
                        ElementUI.Message.error(JSON.stringify(err.data));
                    }


                }else{
                    ElementUI.Message.error('网络错误，请稍后再试');
                }
                reject(err)
            })

        })
    },
    //post请求
    post(url,param){
        return new Promise((resolve,reject)=>{
            service({
                method:'post',
                url,
                data:param,

            }).then(res=>{
                resolve(res)
            }).catch(err=>{
                console.log(err)
                if(err.data){
                    if(err.status == 500){
                        ElementUI.Message.error('网络错误，请稍后再试');
                    }else{
                        ElementUI.Message.error(JSON.stringify(err.data));
                    }


                }else{
                    ElementUI.Message.error('网络错误，请稍后再试');
                }
                reject(err)
            })
        })
    },
    //post请求
    put(url,param){
        return new Promise((resolve,reject)=>{
            service({
                method:'put',
                url,
                data:param,

            }).then(res=>{
                resolve(res)
            }).catch(err=>{
                if(err.data){
                    if(err.status == 500){
                        ElementUI.Message.error('网络错误，请稍后再试');
                    }else{
                        ElementUI.Message.error(JSON.stringify(err.data));
                    }


                }else{
                    ElementUI.Message.error('网络错误，请稍后再试');
                }
                reject(err)
            })
        })
    }
}
function show(){
    $('.app > div').append('<div class="dialog"></div><div class="dialog-content"><div class="dialog-content-bd"><img src="data:image/gif;base64,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" alt="" class="info-icon" /></div></div>')
}
function close(){
    $('.app > div').children('.dialog').remove();
    $('.app > div').children('.dialog-content').remove();
}