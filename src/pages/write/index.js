import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


class Write extends PureComponent {
	render() {
		const { loginStates } =this.props
		if(loginStates){
			return (
				<div>write</div>
			)
		} else {
			return <Redirect to='/login'/>
		}
	}
}

const mapState = (state) => ({
	loginStates:state.getIn(['login','login'])
});



export default connect(mapState, null)(Write);