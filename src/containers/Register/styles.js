import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImage = styled.img`
  height: 80%;
  border-radius: 10px 0 0 10px;
`

export const ContainerItens = styled.div`
  background: #373737;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;
  height: 80%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 15px;
  }

  img {
    width: 260px;
    height: 94px;
    align-self: center;
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  margin-top: ${(props) => (props.error ? '10px' : '20px')};
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${(props) => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`
export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  margin-top: 5px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 15px;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
