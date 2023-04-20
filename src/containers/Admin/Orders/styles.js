import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
  padding: 20px;
`
export const Menu = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin: 20px 0;
`
export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: ${(props) => (props.isActiveStatus ? 'bold' : '400')};
  border-bottom: ${(props) => (props.isActiveStatus ? '2px solid #9758A6;' : 'none')};
  padding-bottom: 5px;
`
export const ProductsImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 300px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`
