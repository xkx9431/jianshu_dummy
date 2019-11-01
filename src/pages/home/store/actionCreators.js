import axios from 'axios'
import * as constants from './constants';
import { fromJS } from 'immutable'

const changeHomeData = (result) =>({
		type: constants.CHANGE_HOME_DATA,
		topicList: result.topicList,
		articleList: result.articleList,
		recommendList: result.recommendList,
		writerList: result.writerList
})
const addHomeData = (articleList) =>({
	type:constants.GET_MORE_INFO,
	list:fromJS(articleList)

})


export const getHomeInfo = () =>{
    return (dispatch) =>{
        axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changeHomeData(result));
		})
    }
}
export const getMoreInfo = () =>{
    return (dispatch) =>{
        axios.get('/api/homeList.json').then((res) => {
			const result = res.data.data;
			dispatch(addHomeData(result));
		})
    }
}

