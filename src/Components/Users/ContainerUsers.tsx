import React from 'react';
import {connect} from "react-redux";
import {stateType} from "../../Redux/Redux-Store";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    UserType
} from "../../Redux/Users-Reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {Follow, UserApi} from "../../Api/Api";

class UsersApi extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        UserApi.getUsers(this.props.currentPage,this.props.pageSize)
            .then(res => {
                this.props.setUsers(res.items)
                this.props.setTotalCount(res.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    follow(userId: number) {
        Follow.follow(userId)
            .then(res => {
                this.props.follow(userId)

            })
    }

    getPage(page: number) {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        UserApi.getUsers(page,this.props.pageSize)
            .then(res => {
                this.props.setUsers(res.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                currentPage={this.props.currentPage}
                users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                follow={this.follow}
                unFollow={this.props.unFollow}
                getPage={(page: number) => this.getPage(page)}
            />
        </>
    }
}

export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    users: UserType[]
    totalCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        users: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
    }
}

export const ContainerUsers = connect(mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching})(UsersApi)


