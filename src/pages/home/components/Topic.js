import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'
class Topic extends Component{
    render(){
        const { list } = this.props;
        return (
            <TopicWrapper>
            {list.map((item) => (
                <TopicItem key = {item.get('id')}>
                <img 
                className ='topic-item-pic'
                alt = "topicItemPic"
                src={item.get('imgUrl')} 
                />
                {item.get('title')}
                </TopicItem>
            ))}
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','list'])
});


export default connect( mapStateToProps, null )(Topic);