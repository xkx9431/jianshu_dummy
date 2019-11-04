import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store'

class Login extends PureComponent {
	render() {
		const { loginStates } =this.props
		if(!loginStates){
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' innerRef ={(input)=> {this.account=input}}/>
						<Input placeholder='密码' type='password' innerRef ={(input)=> {this.password=input}}/>
						<Button onClick = {() =>this.props.login(this.account,this.password)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
			)
		} else {
			return <Redirect to='/'/>
		}
	}
}

const mapState = (state) => ({
	loginStates:state.getIn(['login','login'])
});

const mapDispatch = (dispatch) => ({
	login(accountElem,passwordElement){
		dispatch(actionCreators.login(accountElem.value,passwordElement.value))
	}
	
})

export default connect(mapState, mapDispatch)(Login);