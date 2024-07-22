import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ShowVideo from '../showVideo'
import DarkTheme from '../../context/reactContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  Container,
  Heading,
  Para2,
  Button2,
  Image2,
  Conn,
  DIVV,
  S,
  OV,
  DoA,
} from './styledComponents'

const apiStatus = {
  success: 'Success',
  failure: 'Failure',
  loading: 'Loading',
  inProgress: 'In_Progress',
}

class VideosDetails extends Component {
  state = {itemData: [], itemStatus: apiStatus.inProgress}

  componentDidMount() {
    this.getTheData()
  }

  getTheData = async () => {
    this.setState({itemStatus: apiStatus.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const e = data.video_details
      console.log(e)
      const updateData = {
        id: data.video_details.id,
        title: e.title,
        videoUrl: e.video_url,
        thumbnailUrl: e.thumbnail_url,
        viewCount: e.view_count,
        publishedAt: e.published_at,
        description: e.description,
        channel: {
          name: e.channel.name,
          profileImageUrl: e.channel.profile_image_url,
          subscriberCount: e.channel.subscriber_count,
        },
      }
      this.setState({itemData: updateData, itemStatus: apiStatus.success})
    } else {
      this.setState({itemStatus: apiStatus.failure})
    }
  }

  tryAgain = () => {
    this.getTheData()
  }

  showTheView = () => {
    const {itemStatus} = this.state
    switch (itemStatus) {
      case apiStatus.success:
        return this.showSuccessView()
      case apiStatus.failure:
        return this.showFailureView()
      case apiStatus.loading:
        return this.showLoadingView()
      default:
        return null
    }
  }

  showSuccessView = () => {
    const {itemData} = this.state
    return <ShowVideo lists={itemData} key={itemData.id} />
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
        We are having some trouble to complete your request. Please try again.
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
            <DoA isDark={isDark} data-testid="videoItemDetails">
              <Header />
              <DIVV isDark={isDark}>
                <S>
                  <Sidebar />
                </S>
                <OV>{this.showTheView(isDark)}</OV>
              </DIVV>
            </DoA>
          )
        }}
      </DarkTheme.Consumer>
    )
  }
}
export default VideosDetails
