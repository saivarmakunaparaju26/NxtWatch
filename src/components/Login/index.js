import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  MainContainer,
  DetailsContainer,
  LogoImage,
  Label,
  Input,
  Inputs,
  DIV,
  DIVV,
  Button,
  Lab,
  Para,
} from './styledComponents'
import DarkTheme from '../../context/reactContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showOrNot: false,
    errorMsg: '',
  }

  getName = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  s = () => {
    this.setState(prev => ({
      showOrNot: !prev.showOrNot,
    }))
  }

  showMsg = msg => {
    this.setState({errorMsg: `*${msg}`})
  }

  goSuccessView = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitData = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      this.setState({errorMsg: ''})
      this.goSuccessView()
    } else {
      this.showMsg(data.error_msg)
    }
  }

  renderLoginInLight = isDark => {
    const {showOrNot, errorMsg} = this.state
    return (
      <MainContainer isDark={isDark}>
        <DetailsContainer onSubmit={this.submitData} isDark={isDark}>
          <LogoImage
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
          <DIV>
            <Label isDark={isDark} htmlFor="username">
              USERNAME
            </Label>
            <Input
              isDark={isDark}
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.getName}
            />
          </DIV>
          <DIV>
            <Label isDark={isDark} htmlFor="password">
              PASSWORD
            </Label>
            <Input
              isDark={isDark}
              id="password"
              type={showOrNot ? 'text' : 'password'}
              placeholder="Password"
              onChange={this.getPassword}
            />
          </DIV>
          <DIVV>
            <div>
              <Inputs type="checkbox" id="box" onClick={this.s} />
              <Lab htmlFor="box" isDark={isDark}>
                Show Password
              </Lab>
            </div>
            <div>
              <Button type="submit">Login</Button>
            </div>
          </DIVV>
          <Para>{errorMsg}</Para>
        </DetailsContainer>
      </MainContainer>
    )
  }

  render() {
    const jtToken = Cookies.get('jwt_token')
    if (jtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <DarkTheme.Consumer>
          {value => {
            const {isDark} = value
            return (
              <div>
                <div>{this.renderLoginInLight(isDark)}</div>
                <Inputs type="checkbox" />
              </div>
            )
          }}
        </DarkTheme.Consumer>
      </div>
    )
  }
}
export default Login
