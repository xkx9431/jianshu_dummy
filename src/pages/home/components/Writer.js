import React, { Component } from 'react';
import { WriterWrapper, WriterItem, WriterInfo } from '../style';

class Writer extends Component {
	render() {
		return (
			<WriterWrapper>
				<WriterItem>
				<img alt ='' className= 'writer-pic' src="//upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"></img>
				<WriterInfo>
					<p className='title'>简书钻首席小管家</p>
					<p className='detail'>写了4846428字</p>
				</WriterInfo>
				</WriterItem>
			</WriterWrapper>
		)
	}
}

export default Writer;