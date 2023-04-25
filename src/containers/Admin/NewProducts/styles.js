import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 10px;
  min-width: 280px;
  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 7px;
  border: none;
  padding-left: 10px;
  min-width: 280px;
`

export const MySelect = styled(ReactSelect)`
  width: 275px;
  border-radius: 7px;
  border: none;
`
