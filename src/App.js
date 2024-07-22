import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import DarkTheme from './context/reactContext'
import Login from './components/Login'
import Trending from './components/Trending'
import Home from './components/Home'
import Gaming from './components/Gaming'
import VideosDetails from './components/VideosDetails'
import SavedVideos from './components/savedVideo'
import BadPath from './components/badPath'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    savedData: [],
  }

  changeTheTheme = () => {
    this.setState(prev => ({
      isDark: !prev.isDark,
    }))
  }

  getSavedData = lists => {
    const {savedData} = this.state
    const e = lists
    const newLis = {
      id: e.id,
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
      isSaved: true,
    }
    const rem = savedData.filter(a => a.id !== lists.id)
    console.log(rem)
    const v = savedData.filter(each => each.id === newLis.id)
    if (v.length === 0) {
      this.setState(prev => ({
        savedData: [...prev.savedData, lists],
      }))
    } else if (rem.length !== savedData.length) {
      this.setState({savedData: rem})
    }
  }

  render() {
    const {isDark, savedData} = this.state
    console.log(savedData)
    return (
      <DarkTheme.Provider
        value={{
          isDark,
          savedData,
          changeTheTheme: this.changeTheTheme,
          getSavedData: this.getSavedData,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/videos/:id" component={VideosDetails} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/bad-path" component={BadPath} />
          <Redirect to="/bad-path" />
        </Switch>
      </DarkTheme.Provider>
    )
  }
}

export default App
