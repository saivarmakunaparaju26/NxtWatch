import styled from 'styled-components'

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
export const Button2 = styled.button`
  height: 60px;
  width: 140px;
  border-width: 0px;
  border-radius: 8px;
  background-color: #00306e;
  color: #ffffff;
  margin: 30px;
`
export const Conn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const DIVV = styled.div`
  display: flex;
  width 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const OV = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const S = styled.div`
  width: 30%;
  @media (max-width: 576px) {
    width: 0%;
  }
`
export const DoA = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
