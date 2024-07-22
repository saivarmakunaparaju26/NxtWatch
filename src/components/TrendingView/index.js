import {Link} from 'react-router-dom'
import {
  Image,
  Con,
  Rem,
  Heading,
  Cont,
  Name,
  Ul,
  Li,
  Li1,
} from './styledComponents'
import './index.css'

const TrendingView = props => {
  const {lists, isDark} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = lists
  const {name} = channel
  return (
    <Link to={`/videos/${id}`} className="conn">
      <li>
        <Image src={thumbnailUrl} alt="video thumbnail" />
        <Con>
          <Rem>
            <Heading isDark={isDark}>{title}</Heading>
            <Cont>
              <Name>{name}</Name>
              <Ul>
                <Li>{viewCount}</Li>
                <Li1>{publishedAt}</Li1>
              </Ul>
            </Cont>
          </Rem>
        </Con>
      </li>
    </Link>
  )
}

export default TrendingView
