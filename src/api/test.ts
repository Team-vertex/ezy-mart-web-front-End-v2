
import {AxiosError} from "axios";
import {contactUs, DefaultErrorResponse, requestMobile, requestPos} from "./axios-instance";

console.log(process.env.BACK_END_API_URL)

contactUs({
    firstName:"ff",
    mobile:"0771972107",
    message:"msg",
    reason:"reason"
}).then(res=>{
    console.log(res.data)
}).catch((err:AxiosError<DefaultErrorResponse>)=>{
    console.error(err.response?.data)
})


requestMobile({
    mobile:"0771972107",
    lastName:"sdv",
    firstName:"sdf"
}).then(res=>{
    console.log(res.data)
}).catch((err:AxiosError<DefaultErrorResponse>)=>{
    console.error(err.response?.data)
})


requestPos({
    firstName: "sithija",
    lastName: "gg",
    city: "gg",
    district: "grgr",
    email: "sithija@gmail.com",
    mobile:"0771972107"
}).then(res=>{
    console.log(res.data)
}).catch((err:AxiosError<DefaultErrorResponse>)=>{
    console.error(err.response?.data)
})
