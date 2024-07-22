import DarkTheme from '../../context/reactContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  DIVV,
  OV,
  Container,
  Para2,
  Heading,
  Image2,
  S,
  DoA,
} from './styledComponents'

const BadPath = () => (
  <DarkTheme.Consumer>
    {value => {
      const {isDark} = value
      return (
        <DoA isDark={isDark} data-testid="trending">
          <Header />
          <DIVV isDark={isDark}>
            <S>
              <Sidebar />
            </S>
            <OV isDark={isDark}>
              <Container>
                <Image2
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                />
                <Heading isDark={isDark}>Page Not Found</Heading>
                <Para2 isDark={isDark}>
                  we are sorry, the page you requested could not be found.
                </Para2>
              </Container>
            </OV>
          </DIVV>
        </DoA>
      )
    }}
  </DarkTheme.Consumer>
)
export default BadPath
