import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  width: max-content;
`

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProductName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`

export const ProductPrice = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-top: 30px;
`
