import React from 'react'
import Navbar from './Navbar'
import styled from "styled-components"

const Section = styled.div`
 height: 100vh;
 background: linear-gradient(180deg, #ecd8ac 0%, #6e9ca0 100%)
`

function WorksScene() {
  return (
    <Section>
      <Navbar/>
    </Section>

  )
}

export default WorksScene