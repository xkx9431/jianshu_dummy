import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav,
        NavItem, NavSearch, Addition, Button,
        SearchWrapper
} from './style'

const Header = ( props ) => {
    return (
        <HeaderWrapper>
        <Logo />
        <Nav>
            <NavItem className='left'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
            <CSSTransition
                in = { props.focused }
                timeout = { 200 }
                classNames = "slide"
            >
                <NavSearch 
                    className = { props.focused ?'focused': ''}
                    onFocus = { props.handleInputFocus }
                    onBlur = { props.handleInputBlur }
                    >
                </NavSearch>
                </CSSTransition>
                <i className= { props.focused ? 'focused iconfont' : 'iconfont' }>&#xe62a;</i>
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className='reg'>
            <i className="iconfont">&#xe678;</i> 
                写文章
            </Button>
            <Button className='writing'>注册</Button>
        </Addition>
    </HeaderWrapper>
    )
}

const mapPropsToProps = ( props ) =>{
    return {
        focused: props.focused
    }
}
const mapDispatchToProps = ( dispatch )=> {
    return {
        handleInputFocus(){
            const action = {
                type: 'search_focus'
            };
            dispatch( action )
        },
        handleInputBlur(){
            const action = {
                type: 'search_blur'
            };
            dispatch( action )
        }
    }

}
export default connect( mapPropsToProps, mapDispatchToProps )(Header)