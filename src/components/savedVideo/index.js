import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {BiListPlus} from 'react-icons/bi'
import DarkTheme from '../../context/reactContext'
import ShowSavedData from '../ShowSavedData'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  DoA,
  DIVV,
  S,
  OV,
  DAV,
  Head,
  Container,
  Image2,
  Heading,
  Para2,
} from './styledComponents'

const SavedVideos = () => (
  <DarkTheme.Consumer>
    {value => {
      const {savedData, isDark} = value
      console.log(savedData)
      const jtToken = Cookies.get('jwt_token')
      if (jtToken === undefined) {
        return <Redirect to="/login" />
      }
      return (
        <>
          <DoA isDark={isDark} data-testid="savedVideos">
            <Header />
            <DIVV isDark={isDark}>
              <S>
                <Sidebar />
              </S>
              <OV isDark={isDark}>
                {savedData.length === 0 ? (
                  <Container>
                    <Image2
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <Heading isDark={isDark}>No saved videos found</Heading>
                    <Para2 isDark={isDark}>
                      You can save your videos while watching them
                    </Para2>
                  </Container>
                ) : (
                  <>
                    <DAV isDark={isDark}>
                      <BiListPlus className="coll" />
                      <Head isDark={isDark}>Saved Videos</Head>
                    </DAV>
                    <ul>
                      {savedData.map(each => (
                        <ShowSavedData
                          lists={each}
                          key={each.id}
                          isDark={isDark}
                        />
                      ))}
                    </ul>
                  </>
                )}
              </OV>
            </DIVV>
          </DoA>
        </>
      )
    }}
  </DarkTheme.Consumer>
)
export default SavedVideos
