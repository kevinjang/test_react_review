import React from 'react'

import { Card, Statistic, Icon, Alert } from 'antd'

import { Button as ButtonMD, Card as CardMD, CardTitle, CardText, CardActions } from 'react-md'
class Home extends React.Component {
    constructor(props) {
        super(props);

        let { show } = props;

        console.log('show:', show)
        this.state = {
            show
        }
    }
    render() {
        return (
            <div>
                <h2>主页</h2>
                <div style={{ display: "flex", margin: "0 auto" }}>
                    <Card>
                        <Statistic title="Active" value={11.28} precision={2} valueStyle={{ color: '#3f8600' }}
                            prefix={<Icon type="arrow-up"></Icon>} suffix="%">

                        </Statistic>
                    </Card>
                    <CardMD style={{width: '500px', height: '200px'}}>
                        <CardTitle title="test md cardtitle" subtitle="test md subtitle">

                        </CardTitle>
                        <CardActions expander>
                            <ButtonMD raised>Action 1</ButtonMD>
                            <ButtonMD raised>Action 2</ButtonMD>
                        </CardActions>
                        <CardText expandable>
                            hhhhhhhhhhhhhhhhhhhhhhh
                        </CardText>
                    </CardMD>
                    <Card>
                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<Icon type="arrow-down" />}
                            suffix="%"
                        />
                    </Card></div>
                <Alert showIcon={true} message="提示信息"
                    type="error"
                    style={{ display: `${this.state.show}` }}
                    closable={true}
                    // onClose={}
                    description="hhhhhhhhhhhhhhhhhhhhhhh"></Alert>
            </div>
        )
    }
}

export default Home