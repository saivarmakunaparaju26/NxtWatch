import {Link} from 'react-router-dom'
import {
  Image,
  Con,
  Image2,
  Rem,
  Heading,
  Cont,
  Name,
  Ul,
  Li,
  Li1,
} from './styledComponents'
import './index.css'

const ShowDataList = props => {
  const {lists, isDark} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = lists
  const {name, profileImageUrl} = channel
  return (
    <Link to={`/videos/${id}`} className="con">
      <li>
        <Image src={thumbnailUrl} alt="video thumbnail" />
        <Con>
          <>
            <Image2 src={profileImageUrl} alt="channel logo" />
          </>
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

export default ShowDataList
