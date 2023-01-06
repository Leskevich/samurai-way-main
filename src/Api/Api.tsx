import axios from "axios";
import {InitialStateType} from "../Redux/Users-Reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e9ba546b-c611-4fa5-a013-95b51f08ac2c"
    },
})

export const UserApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<InitialStateType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    }
}

export const Follow ={
    follow(userId:number){
        return  instance.post("follow/" + userId)
            .then(res=>{
                return res.data
            })
    }
}