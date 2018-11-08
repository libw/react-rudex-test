import Header from '../../components/header'
import React from 'react';
import { connect } from 'react-redux'
import Part1 from '../part1'
import Part2 from '../part2'
import Part3 from '../part3'
import Part4 from '../part4'
import style from "./index.css"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: this.props.showNum
        }
    }

    swith(e) {
        e=parseInt(e)
        console.log(e)
        switch (e) {
            case 1:
                return <Part1 />
                break
            case 2:
                return <Part2 />
                break
            case 3:
                return <Part3 />
                break
            case 4:
                return <Part4 />
                break

        }
    }

    render() {
        console.log(222,this.props.showNum)
        return (
            <div>
                <Header />
                <div className={style.content}>
                    {this.swith(this.props.showNum)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        showNum: state.showNum
    }
}
function mapDispatchToProps(dispatch) {
    return {
        
    }
}
const HomeBox = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeBox