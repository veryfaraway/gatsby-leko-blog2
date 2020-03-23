import React from 'react'
import Utterances from "utterances-react"

const UtterancesTheme = {
  gl: `github-light`,
  gd: `github-dark`,
  gdo: `github-dark-orange`,
  id: `icy-dark`,
  db: `dark-blue`,
  pd: `photon-dark`,
}
 
export default ({ isDark }) => {
  const themeMode = isDark ? UtterancesTheme.gd : UtterancesTheme.gl

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