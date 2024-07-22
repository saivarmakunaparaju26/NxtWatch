import styled from 'styled-components'

export const DoA = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const DIVV = styled.div`
  display: flex;
  width 100vw;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const OV = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const S = styled.div`
  width: 30%;
  @media (max-width: 576px) {
    width: 0%;
  }
`
export const DAV = styled.div`
  height:  20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around
  background-color: ${props => (props.isDark ? '#606060' : '#cccccc')};
`
export const Head = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image2 = styled.img`
  height: 60%;
  width: 60%;
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
`
export const Heading = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
  text-align: center;
`
export const Para2 = styled.p`
  color: ${props => (props.isDark ? '#f8fafc' : '#475569')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  margin: 0px;
`
