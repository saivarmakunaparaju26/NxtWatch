import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import DarkTheme from '../../context/reactContext'

import {
  MainContainer,
  LogoContainer,
  Image,
  SmallShow,
  OtherContainer,
  LargeShow,
  Image2,
  Button,
  Container,
  DIV,
  Button2,
  Button3,
  Buttons,
  Para,
  Dav,
  CONN,
} from './styledComponents'
import './index.css'

const Header = props => (
  <DarkTheme.Consumer>
    {value => {
      const {isDark, changeTheTheme, openTheSide} = value

      const changeVal = () => {
        changeTheTheme()
      }

      const opens = () => {
        openTheSide()
      }

      const col = isDark ? 'gi' : 'vi'

      const {history} = props
      const goOutThePage = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const showTheHeader = () => (
        <MainContainer isDark={isDark}>
          <LogoContainer>
            <Link to="/">
              <Image
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
          </LogoContainer>
          <OtherContainer>
            <SmallShow>
              <button
                onClick={changeVal}
                type="button"
                className="no"
                data-testid="theme"
              >
                {isDark ? (
                  <IoSunnyOutline className={col} />
                ) : (
                  <FaMoon className={col} />
                )}
              </button>
              <GiHamburgerMenu className={col} onClick={opens} />
              <Popup
                modal
                trigger={
                  <Buttons isDark={isDark} type="button">
                    <FiLogOut className={col} />
                  </Buttons>
                }
              >
                {close => (
                  <Container>
                    <Dav isDark={isDark}>
                      <Para>Are you sure, you want to logout?</Para>
                      <DIV>
                        <Button2 type="button" onClick={() => close()}>
                          Cancel
                        </Button2>
                        <Button3 type="button" onClick={goOutThePage}>
                          Confirm
                        </Button3>
                      </DIV>
                    </Dav>
                  </Container>
                )}
              </Popup>
            </SmallShow>
            <LargeShow>
              <button type="button" onClick={changeVal} className="no">
                {isDark ? (
                  <IoSunnyOutline className={col} />
                ) : (
                  <FaMoon className={col} />
                )}
              </button>
              <Image2
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <Button isDark={isDark} type="button">
                    Logout
                  </Button>
                }
              >
                {close => (
                  <Container>
                    <Dav isDark={isDark}>
                      <Para>Are you sure, you want to logout?</Para>
                      <DIV>
                        <Button2 type="button" onClick={() => close()}>
                          Cancel
                        </Button2>
                        <Button3 type="button" onClick={goOutThePage}>
                          Confirm
                        </Button3>
                      </DIV>
                    </Dav>
                  </Container>
                )}
              </Popup>
            </LargeShow>
          </OtherContainer>
        </MainContainer>
      )

      return (
        <CONN>
          <div>{showTheHeader()}</div>
        </CONN>
      )
    }}
  </DarkTheme.Consumer>
)
export default withRouter(Header)
