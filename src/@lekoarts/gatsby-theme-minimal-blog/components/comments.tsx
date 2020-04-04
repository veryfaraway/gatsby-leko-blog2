import React from 'react'
import Utterances from "utterances-react"

const UtterancesTheme = {
  light: `github-light`,
  dark: `github-dark`,
  darkOrange: `github-dark-orange`,
  iceDark: `icy-dark`,
  darkBlue: `dark-blue`,
  photonDark: `photon-dark`,
}
 
export default ({ isDark }) => {
  const themeMode = isDark ? UtterancesTheme.darkBlue : UtterancesTheme.light

  return (
    <Utterances
      repo="veryfaraway/gatsby-leko-blog2"
      issueTerm="pathname"
      label="comments"
      theme={themeMode}
      crossorigin="anonymous"
      async={false}
      style={`
      & .utterances {
        max-width: 950px;
      }
    `}
    />
    
  )
}