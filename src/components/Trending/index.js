import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import DarkTheme from '../../context/reactContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingView from '../TrendingView'
import {
  DIVV,
  OV,
  Button2,
  Container,
  Para2,
  Heading,
  Image2,
  S,
  Conn,
  Unorder,
  DAV,
  Head,
  DoA,
} from './styledComponents'
import './index.css'

const apiStatus = {
  success: 'Success',
  failure: 'Failure',
  loading: 'Loading',
  inProgress: 'IN_Progress',
  noData: 'No_Data',
}

class Trending extends Component {
  state = {
    dataStatus: apiStatus.inProgress,
    dataList: [],
  }

  componentDidMount() {
    this.getTheData()
  }

  getSearchRes = () => {
    this.getTheData()
  }

  tryAgain = () => {
    this.getTheData()
  }

  getTheData = async () => {
    this.setState({dataStatus: apiStatus.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      if (updatedData.length === 0) {
        this.setState({dataStatus: apiStatus.noData})
      } else {
        this.setState({dataList: updatedData, dataStatus: apiStatus.success})
      }
    } else {
      this.setState({dataStatus: apiStatus.failure})
    }
  }

  showFailureView = isDark => (
    <Container>
      <Image2
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <Heading isDark={isDark}>OOps! Something Went Wrong</Heading>
      <Para2 isDark={isDark}>
        We are having some trouble to complete your request Please try again.
      </Para2>
      <Button2 type="button" onClick={this.tryAgain}>
        Retry
      </Button2>
    </Container>
  )

  showNoDataPage = isDark => (
    <Container>
      <Image2
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <Heading isDark={isDark}>No Search results found</Heading>
      <Para2 isDark={isDark}>
        Try different key words or remove search filter
      </Para2>
      <Button2 type="button" onClick={this.tryAgain}>
        Retry
      </Button2>
    </Container>
  )

  showLoadingView = isDark => (
    <Conn className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        height="50"
        color={isDark ? '#ffffff' : '#000000'}
        width="50"
      />
    </Conn>
  )

  showSuccessView = isDark => {
    const {dataList} = this.state
    return (
      <Unorder>
        {dataList.map(each => (
          <TrendingView lists={each} key={each.id} isDark={isDark} />
        ))}
      </Unorder>
    )
  }

  showTheViews = isDark => {
    const {dataStatus} = this.state
    switch (dataStatus) {
      case apiStatus.success:
        return this.showSuccessView(isDark)
      case apiStatus.failure:
        return this.showFailureView(isDark)
      case apiStatus.loading:
        return this.showLoadingView(isDark)
      case apiStatus.noData:
        return this.showNoDataPage(isDark)
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
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
                  <DAV isDark={isDark}>
                    <HiFire className="coll" />
                    <Head isDark={isDark}>Trending</Head>
                  </DAV>
                  {this.showTheViews(isDark)}
                </OV>
              </DIVV>
            </DoA>
          )
        }}
      </DarkTheme.Consumer>
    )
  }
}
export default Trending
