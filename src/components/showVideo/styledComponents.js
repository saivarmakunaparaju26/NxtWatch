import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 14px;
`
export const First = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => (props.isDark ? '#cccccc' : '#475569')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 10px;
`
export const Second = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 575px) {
    margin-top: 20px;
  }
`
export const O = styled.button`
  display: flex;
  flex-direction: row;
  color: ${props => (props.val ? '#2563eb' : '#64748b')};
  margin-left: 10px;
  border-width: 0px;
  background-color: transparent;
`
export const Li1 = styled.p`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`
export const Li = styled.p`
  display: flex;
  flex-direction: row;
`
export const Para = styled.p`
  display: flex;
  flex-direction: row;
  color: ${props => (props.val ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  margin: 0px;
`
export const Hr = styled.hr`
  border: solid 1px ${props => (props.val ? '#cccccc' : '#000000')};
  width: 90%;
`
export const Other = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`
export const Dav = styled.div`
  display: flex;
  flex-direction: column;
`
export const Para2 = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
`
export const Para3 = styled.p`
  color: ${props => (props.isDark ? '#cccccc' : '#94a3b8')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 10px;
`
export const Des = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 10px;
  width: 90%;
`
export const Image2 = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
`
export const Views = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 575px) {
    flex-direction: column;
    height: 20%;
  }
`
