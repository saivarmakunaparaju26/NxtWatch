import {Link} from 'react-router-dom'
import {BiListPlus} from 'react-icons/bi'
import DarkTheme from '../../context/reactContext'
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
  OV,
  Head,
  DAV,
} from './styledComponents'
import './index.css'

const ShowSavedView = props => {
  const {lists, isDark} = props
  console.log(lists)
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

export default ShowSavedView
