import React from 'react';
import {Profile} from "../Profile";
import axios from "axios";
import {stateType} from "../../../Redux/Redux-Store";
import {setProfileUser, userProfileType} from "../../../Redux/Profile-Reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<RouteType> {
    componentDidMount() {

        let userId = this.props.match.params.userId ? this.props.match.params.userId : 18930
        axios.get<userProfileType>('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(res => {
                this.props.setProfileUser(res.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}


type ContainerType = MapStateToProsType & MapDispatchToPropsType
type RouteType = RouteComponentProps<pathParamsType> & ContainerType

type pathParamsType = {
    userId: string
}
type MapStateToProsType = {
    profile: userProfileType | null
}
type MapDispatchToPropsType = {
    setProfileUser: (userProfile: userProfileType) => void
}
const mapStateToPros = (state: stateType): MapStateToProsType => {
    return {
        profile: state.profilePage.profile,
    }
}
let d = withRouter(ProfileContainer)
export default connect(mapStateToPros, {setProfileUser})(d)


