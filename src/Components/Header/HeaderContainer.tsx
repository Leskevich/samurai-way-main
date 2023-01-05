import React from "react";
import {ReactComponent} from "*.svg";
import {Header} from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {AuthType, setLoginData} from "../../Redux/Auth-Reduser";
import {stateType} from "../../Redux/Redux-Store";

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:true})
            .then(res => {
                if (res.data.resultCode===0){
                    console.log(res)
                    this.props.setLoginData(res.data.data)
                }
            })
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
            />
        );
    }
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    isAuth: boolean
    login:string|null
}
type mapDispatchToPropsType = {
    setLoginData: (data: AuthType) => void
}
const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        isAuth: state.Auth.isAuth,
        login: state.Auth.auth.login
    }
}

export default connect(mapStateToProps, {setLoginData})(HeaderContainer)