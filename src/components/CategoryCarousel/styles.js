import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
`

export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  .rec.rec-arrow {
    background: #9758a6;
    color: #fff;
  }
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`

export const Button = styled.button`
  margin-top: 16px;
  background: #9758a6;
  border: none;
  border-radius: 8px;
  height: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
