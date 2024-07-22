import {Link} from 'react-router-dom'
import {Image, Con, Rem, Heading, Li} from './styledComponents'
import './index.css'

const GamingView = props => {
  const {lists, isDark} = props
  const {id, title, thumbnailUrl, viewCount} = lists
  return (
    <Link to={`/videos/${id}`} className="a">
      <li>
        <Image src={thumbnailUrl} alt="video thumbnail" />
        <Con>
          <Rem>
            <Heading isDark={isDark}>{title}</Heading>
            <Li>{viewCount} Watching Worldwide</Li>
          </Rem>
        </Con>
      </li>
    </Link>
  )
}

export default GamingView
