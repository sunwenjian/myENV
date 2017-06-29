import React, {
    Component
} from 'react';
import axios from 'axios';


//封装好的get和post接口，调用方法情况action文件
axios.defaults.baseURL = "http://xxx.xxx.xxx.xxx:xxx/";

const getData = (url, param, onReady, onError) => {

    let onReadyDefault = function (response) {
        console.log("success");
    };
    let onErrorDefault = function (response) {
        console.log("error");
    };
    onReady = onReady || onReadyDefault;
    onError = onError || onErrorDefault;
    // axios.get(axios.defaults.baseURL + url, {
    //         params: param
    //     })
    //     .then(
    //         onReady
    //     )
    //     .catch(
    //         onError
    //     );

}
const postData = (url, param, onReady, onError) => {

    let onReadyDefault = function (response) {
        console.log("success");
    };
    let onErrorDefault = function (response) {
        console.log("error");
    };
    onReady = onReady || onReadyDefault;
    onError = onError || onErrorDefault;
    // axios.post(axios.defaults.baseURL + url, {
    //     params: param
    // }).then(onReady).catch(onError);


}

class FetchData {
    //
    static GetCitys(param, onReady, onError) {
        getData("/GetCitys", param, onReady, onError);
    }
    //获取UserInfo
    static GetCityWeather(param, onReady, onError) {
        getData("/GetCityWeather", param, onReady, onError);
    }
    //UpdateUser
    static GetTide(param, onReady, onError) {
        getData("/GetTide", param, onReady, onError);
    }
    //UpdatePhone

}
export default FetchData;