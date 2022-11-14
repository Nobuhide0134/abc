import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { Box, chakra } from '@chakra-ui/react'

const Mainarea = styled.div`
  background-color: #008000;
  width: 600px;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`
const Border = styled.div`
  position: relative;
  border: solid 1px #000000;
`
const Container = styled.div`
  background-color: white;
  display: flex;
  position: relative;
  height: 100vh;
  min-height: 100vh;
  padding: 0 0.5rem;
`

const Piece_white = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
`

const Piece_black = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: black;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
`

const HomePage: NextPage = () => {
  return (
    <Container>
      <Mainarea>
        <Border>
          <Piece_white />
        </Border>
        <Border>
          <Piece_black />
        </Border>
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
        <Border />
      </Mainarea>
    </Container>
  )
}

export default HomePage
