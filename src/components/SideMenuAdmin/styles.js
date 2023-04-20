import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 264px;

  hr {
    margin: 100px 15px;
  }
`

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${(props) => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 8px;

  .icon {
    color: white;
  }
`

export const ListLinks = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  padding-left: 10px;
`
