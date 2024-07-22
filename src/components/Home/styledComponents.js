import styled from 'styled-components'

export const PremiumContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 576px) {
    height: 20vh;
  }
`
export const DoA = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const Image = styled.img`
  height: 30px;
  width: 140px;
  margin-top: 12px;
  margin-left: 20px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #606060;
  margin-left: 20px;
`
export const Button = styled.button`
  height: 40px;
  width: 140px;
  background-color: transparent;
  border-color: #424242;
  border-radius: 5px;
  color: #424242;
  margin-left: 20px;
  margin-bottom: 20px;
`
export const Button4 = styled.button`
  height: 40px;
  width: 140px;
  background-color: transparent;
  border-color: #424242;
  border-radius: 5px;
  color: #424242;
  margin-left: 20px;
  margin-bottom: 20px;
  border-width: 0px;
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

export const Input = styled.input`
  height: 40px;
  @media (min-width: 768px) {
    width: 80%;
  }
  width: 100%;
  margin-top: 20px;
  margin-left: 20px;
  align-self: center;
`
export const I = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 60%;
`
export const Button1 = styled.button`
  height: 40px;
  width: 60px;
  margin-top: 20px;
  align-self: center;
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
export const Unorder = styled.ul`
  list-style-type: none;
  @media (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
  }
  width: 100%;
  margin: 0px;
  padding: 0px;
`
