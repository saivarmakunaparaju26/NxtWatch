import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const DetailsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${props => (props.isDark ? 'none' : '3px 3px 3px 3px #909090')};
  border-radius: 10px;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  width: 40%;
  height: 50%;
  @media (max-width: 575px) {
    width: 90%;
    height: 75%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 60%;
    height: 50%;
  }
`

export const LogoImage = styled.img`
  height: 40px;
  width: 40%;
  margin-top: 20px;
`

export const DIV = styled.div`
  margin-top: 20px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#cccccc')};
`
export const Lab = styled(Label)`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  margin-top: 5px;
  background-color: ${props => (props.isDark ? 'transparent' : '#ffffff')};
  color: ${props => (props.isDark ? '#ffffff' : '#cccccc')};
`
export const Inputs = styled.input`
  margin-top: 5px;
`

export const DIVV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-top: 20px;
`
export const Button = styled.button`
  border-width: 0px;
  border-radius: 6px;
  background-color: #4f46e5;
  color: #ffffff;
  height: 40px;
  width: 180px;
  cursor: pointer;
`
export const Para = styled.p`
  color: #ff0000;
  margin: 0px;
`
