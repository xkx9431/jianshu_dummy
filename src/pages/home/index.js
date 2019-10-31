import React, { Component } from 'react';
import Topic from './components/Topic';
import Recommend from './components/recommend';
import Writer from './components/Writer';
import List from './components/List';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends Component {
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='homePic' alt="homeTitle" src= "https://upload-images.jianshu.io/upload_images/15098471-d4d705c796d8f6cf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"/>
                    <Topic/>
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home