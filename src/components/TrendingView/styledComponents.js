import styled from 'styled-components'

export const Image = styled.img`
  @media (max-width: 575px) {
    width: 100%;
    height: 200px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 300px;
    height: 200px;
  }
  height: 200px;
  width: 300px;
`
export const Con = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`
export const Image2 = styled.img`
  height: 40px;
  width: 40px;
  margin: 14px;
`
export const Rem = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #475569;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  flex-wrap: wrap;
  color: ${props => (props.isDark ? '#f1f5f9' : '#1e293b')};
`

export const Cont = styled.div`
  @media (max-width: 575px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
  display: flex;
  flex-direction: column;
`
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0px;
  margin-top: 20px;
  @media (max-width: 576px) {
    margin-top: 0px;
    margin-left: 20px;
  }
`
export const Li = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 400;
  color: #475569;
  @media (min-width: 576px) {
    list-style-type: none;
  }
  @media (max-width: 576px) {
    margin: 0px;
    margin-top: 10px;
  }
`
export const Li1 = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 400;
  color: #475569;
  margin-left: 30px;
`
