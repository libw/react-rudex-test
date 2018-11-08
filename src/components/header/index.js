import { Menu, Icon } from 'antd';
import React from 'react';
import { connect } from 'react-redux'
import {showN} from '../../actions/home'
import {bindActionCreators} from 'redux'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
    state = {
        current: '1',
    }

    handleClick = (e) => {
        // console.log('click ', e);
        this.setState({
            current: e.key,
        });
        
        this.props.showN({data:e.key})
        // console.log()
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="1">
                    <Icon type="mail" />Navigation 1
        </Menu.Item>
                <Menu.Item key="2" >
                    <Icon type="appstore" />Navigation 2
        </Menu.Item>
                <Menu.Item key="3" >
                    <Icon type="appstore" />Navigation 3
        </Menu.Item>
                <Menu.Item key="4" >
                    <Icon type="appstore" />Navigation 4
        </Menu.Item>
            </Menu>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        showNum: state.showNum
    }
}
function mapDispatchToProps(dispatch) {
    return {
        showN: bindActionCreators(showN, dispatch)
    }
}
const AppBox = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppBox