import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const PageLink = styled.a`
  cursor: pointer;
  font-style: normal;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.isActive ? '#9758a6' : '#555555')};
  text-decoration: none;
`
export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid #bababa;
`
export const PageLinkExit = styled.a`
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #9758a6;
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`
