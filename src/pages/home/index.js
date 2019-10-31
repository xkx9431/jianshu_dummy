import React, { Component } from 'react';
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
                    <img className='homePic' src= "https://upload-images.jianshu.io/upload_images/15879578-7b4bd273b66064c4.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1066/format/webp"/>
                </HomeLeft>
                <HomeRight>Right</HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home