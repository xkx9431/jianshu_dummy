import React, { Component } from 'react';
import { ListItem, ListInfo,LoadMore } from '../style';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'
import { Link } from 'react-router-dom';

class List extends Component {
	render() {
		const { list, getMoreInfo } = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<Link key={ index } to={'/detail?id='+ item.get('id')}>
								<ListItem >
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
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