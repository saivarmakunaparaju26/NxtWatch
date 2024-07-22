import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#383838' : '#f9f9f9')};
  @media (max-width: 576px) {
    display: none;
  }
`
export const WhereToGo = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`
export const Ho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding-left: 10px;
  margin-left: 20px;
  text-decoration: none;
  background-color: ${props => (props.val ? '#3b82f6' : 'transparent')};
  cursor: pointer;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  padding-left: 20px;
  color: #909090;
  text-decoration: none;
`
export const DetailsCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
`
export const To = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`
