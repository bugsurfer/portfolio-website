import React from 'react'
import {Layout} from 'antd'
import "../css/sider.css"

const { Sider } = Layout;

class Side extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (
            <React.Fragment>
                <Sider>
                    <div className="shanu">Shanu</div>
                </Sider>
            </React.Fragment>
        )
    }
}

export default Side
