import {Component} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike, BiListPlus} from 'react-icons/bi'
import DarkTheme from '../../context/reactContext'
import {
  MainContainer,
  Details,
  Heading,
  Views,
  First,
  Li,
  Li1,
  Second,
  O,
  Para,
  Hr,
  Other,
  Image2,
  Para2,
  Para3,
  Dav,
  Des,
} from './styledComponents'
import './index.css'

class ShowVideo extends Component {
  state = {dataIt: [], like: false, dislike: false, save: false, savedData: []}

  componentDidMount() {
    const {lists} = this.props
    this.setState({dataIt: lists})
  }

  gv = lists => {
    this.setState({dataIt: lists})
  }

  likeThePage = () => {
    this.setState({
      like: true,
      dislike: false,
    })
  }

  dislikeThePage = () => {
    this.setState({
      dislike: true,
      like: false,
    })
  }

  upo = () => {
    this.setState(prev => ({
      save: !prev.save,
    }))
  }

  render() {
    const {lists} = this.props
    const {like, dislike, save} = this.state
    const {
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      channel,
    } = lists
    const {name, profileImageUrl, subscriberCount} = channel
    return (
      <DarkTheme.Consumer>
        {value => {
          const {getSavedData, isDark} = value
          const saveTheData = () => {
            this.upo()
            getSavedData(lists)
          }
          return (
            <MainContainer isDark={isDark}>
              <ReactPlayer url={videoUrl} width="90%" className="re" />
              <Details>
                <Heading isDark={isDark}>{title}</Heading>
                <Views>
                  <First isDark={isDark}>
                    <Li>{viewCount} views</Li>
                    <Li1>{publishedAt} years ago</Li1>
                  </First>
                  <Second isDark={isDark}>
                    <O val={isDark} onClick={this.likeThePage}>
                      <AiOutlineLike />
                      <Para val={like}>Like</Para>
                    </O>
                    <O val={isDark} onClick={this.dislikeThePage}>
                      <BiDislike />
                      <Para val={dislike}>Dislike</Para>
                    </O>
                    <O val={isDark} onClick={saveTheData}>
                      <BiListPlus />
                      <Para val={save}>{save ? 'Saved' : 'Save'}</Para>
                    </O>
                  </Second>
                </Views>
              </Details>
              <Hr val={isDark} />
              <Other>
                <Image2 src={profileImageUrl} alt="channel logo" />
                <Dav>
                  <Para2 isDark={isDark}>{name}</Para2>
                  <Para3 isDark={isDark}>{subscriberCount} subscribers</Para3>
                </Dav>
              </Other>
              <Des isDark={isDark}>{description}</Des>
            </MainContainer>
          )
        }}
      </DarkTheme.Consumer>
    )
  }
}
export default ShowVideo
