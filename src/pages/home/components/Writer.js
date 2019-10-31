import React, { Component } from 'react';
import { WriterWrapper, WriterItem, WriterInfo } from '../style';
import { connect } from 'react-redux';

class Writer extends Component {
	render() {
		const {lists } = this.props
		return (
			<WriterWrapper>
				{
					lists.map((item) => {
						return (
							<WriterItem key={item.get('id')}>
								<img alt='' className='writer-pic' src={item.get('imgUrl')} />
								<WriterInfo>
									<p className='title'>{item.get('writerName')}</p>
									<p className='detail'>{'一共写了'+ Math.ceil(Math.random()*1000000) +'字*获得了'+ Math.ceil(Math.random()*1000000)+'赞' }</p>
								</WriterInfo>
							</WriterItem>
						);
					})
				}
			</WriterWrapper>
		)
	}
}
const mapState = (state) => ({
	lists: state.getIn(['home', 'writerList'])
})
export default connect( mapState )(Writer);

// lists.map((item)=>{
// 	return{
// 		<WriterItem key={item.get('id')}>
// 		<img alt ='' className= 'writer-pic' src={item.get(imgItem)}}></img>
// 		<WriterInfo>
// 			<p className='title'>简书钻首席小管家</p>
// 			<p className='detail'>写了4846428字 * 获得了1648赞</p>
// 		</WriterInfo>
// 		</WriterItem>
// 	}
// })