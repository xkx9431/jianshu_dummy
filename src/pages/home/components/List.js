import React, { Component } from 'react';
import { ListItem, ListInfo,LoadMore } from '../style';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'

class List extends Component {
	render() {
		const { list, getMoreInfo } = this.props;
		return (
			<div>
				{
					list.map((item) => {
						return (
							<ListItem key={item.get('id')}>
								<img alt='' className='pic' src={item.get('imgUrl')} />
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						);
					})
				}
				<LoadMore onClick = { getMoreInfo }>加载更多</LoadMore>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList'])
})

const mapDispatch = (dispatch)=>(
	{
		getMoreInfo(){
			dispatch(actionCreators.getMoreInfo())
		}
	}
)

export default connect(mapState, mapDispatch )(List);