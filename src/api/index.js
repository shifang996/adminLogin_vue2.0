import http from './http';


//这个是数据和请求发送数据
export let getUserList=(pageIndex,pageSize)=>{
    return http.get("/sys/shitinglist"+"?pageIndex="+pageIndex+"&pageSize="+pageSize);
}

//这个是获取数据长度
export let getTotalCount=()=>{
    return http.get("/sys/shitingcount")
}