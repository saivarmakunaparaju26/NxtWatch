import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import DarkTheme from '../../context/reactContext'
import {
  MainContainer,
  WhereToGo,
  Ho,
  Para,
  DetailsCon,
  To,
} from './styledComponents'
import './index.css'

class Sidebar extends Component {
  state = {isHome: false, isTre: false, isGa: false, isSave: false}

  toHome = () => {
    this.setState(prev => ({
      isHome: !prev.isHome,
      isTre: false,
      isGa: false,
      isSave: false,
    }))
  }

  toTre = () => {
    this.setState(prev => ({
      isTre: !prev.isTre,
      isGa: false,
      isSave: false,
      isHome: false,
    }))
  }

  toGa = () => {
    this.setState(prev => ({
      isGa: !prev.isGa,
      isSave: false,
      isHome: false,
      isTre: false,
    }))
  }

  toSa = () => {
    this.setState(prev => ({
      isSave: !prev.isSave,
      isHome: false,
      isTre: false,
      isGa: false,
    }))
  }

  showNew = () => {
    const {isHome, isTre, isSave, isGa} = this.state
    return (
      <>
        <WhereToGo>
          <Link to="/" className="sa">
            <Ho onClick={this.toHome} val={isHome}>
              <AiFillHome />
              <Para>Home</Para>
            </Ho>
          </Link>
          <Link to="/trending" className="sa">
            <Ho onClick={this.toTre} val={isTre}>
              <HiFire />
              <Para>Trending</Para>
            </Ho>
          </Link>
          <Link to="/gaming" className="sa">
            <Ho onClick={this.toGa} val={isGa}>
              <SiYoutubegaming />
              <Para>Gaming</Para>
            </Ho>
          </Link>
          <Link to="/saved-videos" className="sa">
            <Ho onClick={this.toSa} val={isSave}>
              <BiListPlus />
              <Para>Saved Videos</Para>
            </Ho>
          </Link>
        </WhereToGo>
      </>
    )
  }

  showSidebar = (isDark, issideopen) => {
    const {isHome, isTre, isSave, isGa} = this.state

    console.log(issideopen)
    return (
      <MainContainer isDark={isDark}>
        {issideopen === true ? this.showNew() : null}
        <WhereToGo>
          <Link to="/" className="sa">
            <Ho onClick={this.toHome} val={isHome}>
              <AiFillHome />
              <Para>Home</Para>
            </Ho>
          </Link>
          <Link to="/trending" className="sa">
            <Ho onClick={this.toTre} val={isTre}>
              <HiFire />
              <Para>Trending</Para>
            </Ho>
          </Link>
          <Link to="/gaming" className="sa">
            <Ho onClick={this.toGa} val={isGa}>
              <SiYoutubegaming />
              <Para>Gaming</Para>
            </Ho>
          </Link>
          <Link to="/saved-videos" className="sa">
            <Ho onClick={this.toSa} val={isSave}>
              <BiListPlus />
              <Para>Saved Videos</Para>
            </Ho>
          </Link>
        </WhereToGo>
        <DetailsCon>
          <To>CONTACT US</To>
          <div className="divv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
              className="fa"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
              className="fa"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
              className="fa"
            />
          </div>
          <To>Enjoy! Now to see your channels and recommendations!</To>
        </DetailsCon>
      </MainContainer>
    )
  }

  render() {
    return (
      <DarkTheme.Consumer>
        {value => {
          const {isDark, issideopen} = value
          return <div className="o">{this.showSidebar(isDark, issideopen)}</div>
        }}
      </DarkTheme.Consumer>
    )
  }
}

export default withRouter(Sidebar)
