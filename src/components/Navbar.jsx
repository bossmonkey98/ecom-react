import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
background-color:red;
display:flex;
align-items: center;
justify-content:space-between;
padding:5px;`

const Left =styled.div`
background-color: red;`

const Center =styled.div`
background-color: red;`

const Right =styled.div`
background-color:red;`

const Navbar = () => {
  return (
    <Container>
        <Left>left</Left>
        <Center>center</Center>
        <Right>right</Right>
    </Container>
  )
}

export default Navbar

