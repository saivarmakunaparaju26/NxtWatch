import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const LogoContainer = styled.div`
  margin-left: 24px;
  align-self: center;
`
export const Image = styled.img`
  height: 40%;
  width: 140px;
  cursor: pointer;
`
export const OtherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
`
export const SmallShow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  width: 40vw;
  @media (min-width: 768px) {
    display: none;
  }
`
export const LargeShow = styled.div`
  @media (max-width: 766px) {
    display: none;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  width: 30vw;
`
export const Image2 = styled.img`
  height: 40px;
  width: 40px;
`
export const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${props => (props.isDark ? '#ebebeb' : '#3b82f6')};
  color: ${props => (props.isDark ? '#ebebeb' : '#3b82f6')};
  border-radius: 6px;
  font-family: 'Roboto';
  height: 40px;
  width: 120px;
  cursor: pointer;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  width: 300px;
  height: 200px;
  background-color: #000000;
`
export const DIV = styled.div`
  display: flex;
  flex-direction: row;
  margin-botton: 20px;
  text-align: center;
  width: 100%;
  margin-left: 60px;
`
export const Button2 = styled.button`
  background-color: transparent;
  border-color: #ebebeb;
  color: #ebebeb;
  border-radius: 6px;
  font-family: 'Roboto';
  height: 40px;
  width: 120px;
  height: 40px;
  width: 80px;
  cursor: pointer;
`
export const Button3 = styled.button`
  border-width: 0px;
  border-radius: 8px;
  color: #ffffff;
  background-color: #3b82f6;
  height: 40px;
  width: 80px;
  margin-left: 70px;
  cursor: pointer;
`
export const Para = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`
export const Buttons = styled.button`
  border-width: 0px;
  padding: 0px;
  background-color: transparent;
  cursor: pointer;
`
export const Dav = styled.div`
  width: 300px;
  height: 200px;
  background-color: ${props => (props.isDark ? '#ffffff' : '#313131')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
export const CONN = styled.div`
  width: 100%;
`
