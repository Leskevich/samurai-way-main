import {InitialStateType, UsersReducer} from "../Redux/Users-Reducer";
import {v1} from "uuid";


// test('user-Reducer-Test', () => {
//     const initialState: InitialStateType = {
//         users: [
//             {
//                 id: v1(),
//                 followed: true,
//                 fullName: "Roma",
//                 status: 'I am boss',
//                 location: {city: 'Minsk', country: 'Belarus'}
//             },
//             {
//                 id: v1(),
//                 followed: false,
//                 fullName: "Anton",
//                 status: 'I am boss to',
//                 location: {city: 'Grodno', country: 'Belarus'}
//             },
//             {
//                 id: v1(),
//                 followed: true,
//                 fullName: "Vadim",
//                 status: 'I am boss to',
//                 location: {city: 'Grodno', country: 'Belarus'}
//             },
//             {
//                 id: v1(),
//                 followed: false,
//                 fullName: "Andrey",
//                 status: 'I am boss to',
//                 location: {city: 'Zelva', country: 'Belarus'}
//             },
//         ]
//     }
//
//     const a:InitialStateType = UsersReducer(initialState, {type: "FOLLOW", id: initialState.users[3].id})
//
//     expect(a.users[3].followed).toBe(true)
//     expect(a.users[1].followed).toBe(false)
//
// })
// test('user-Reducer-unFollow', () => {
//     const initialState: InitialStateType = {
//         users: [
//             {
//                 id: v1(),
//                 followed: true,
//                 fullName: "Roma",
//                 status: 'I am boss',
//                 location: {city: 'Minsk', country: 'Belarus'}
//             },
//             {
//                 id: v1(),
//                 followed: false,
//                 fullName: "Anton",
//                 status: 'I am boss to',
//                 location: {city: 'Grodno', country: 'Belarus'}
//             },
//             {
//                 id: v1(),
//                 followed: true,
//                 fullName: "Vadim",
//                 status: 'I am boss to',
//                 location: {city: 'Grodno', country: 'Belarus'}
//             },
//             {
//                 id: v1(),
//                 followed: false,
//                 fullName: "Andrey",
//                 status: 'I am boss to',
//                 location: {city: 'Zelva', country: 'Belarus'}
//             },
//         ]
//     }
//
//     const a:InitialStateType = UsersReducer(initialState, {type: "UN-FOLLOW", id: initialState.users[0].id})
//
//     expect(a.users[0].followed).toBe(false)
//     expect(a.users[2].followed).toBe(true)
//
// })