import React from 'react';
import './App.css';
import { Button } from 'antd'

// const { Button: MDButton } = window.ReactMD
import { Button as ButtonMD, Card as CardMD } from 'react-md'

import {Button as ButtonEL} from 'elemental'

import Index from './App1'

import Home from './Home'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: 'none',
      browseHistory: []
    }

    this.iKey = 0;
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    // alert(window.location)
  }

  buttonClick = () => {
    alert('好哒');
    this.setState({
      showAlert: 'block'
    }, () => {
      console.log('showAlert:', this.state.showAlert)
    })
  }
  linkClicked = (e) => {
    console.log('linkClicked:', e.target.href);
    console.log('linkClicked location:', window.location.href)

    const history = this.state.browseHistory;
    if (history.length === 0 || history[history.length - 1].text !== e.target.innerText)
      history.push({
        text: e.target.innerText,
        url: e.target.href.replace(e.target.origin, ''),
        key: e.target.innerText + this.iKey++
      })

    this.setState({
      browseHistory: history
    }, () => {
      console.log(this.state.browseHistory);
    })
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/" onClick={this.linkClicked}>主页</Link>
            </li>
            <li>
              <Link to="/about" onClick={this.linkClicked}>关于</Link>
            </li>
            <li>
              <Link to="/dashboard" onClick={this.linkClicked}>驾驶舱</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/" component={Home}>
              {/* <Home show={this.state.showAlert} /> */}
            </Route>
            <Route exact path="/about" component={About}>
              {/* <About /> */}
            </Route>
            <Route exact path="/dashboard" component={Index}>
              {/* <Index /> */}
            </Route>
          </Switch>
        </div>
        <Button type="primary" onClick={this.buttonClick}>测试</Button>
        <ButtonEL type="primary">Button Elemental</ButtonEL>
        <ButtonMD raised primary swapTheming onClick={() => this.buttonClick()}>测试MDBUtton</ButtonMD>
        {
          // console.log(this.state.browseHistory);
          this.state.browseHistory.map(item=>{
            return <Link to={item.url} key={item.key}>{item.text + ' / '} </Link>
          })
        }
      </Router>
    );
  }
}
function About() {
  return (
    <div>
      <h2>关于</h2>
    </div>
  )
}
export default App;
