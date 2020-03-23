import React from 'react'
import WithUtterances from 'with-utterances'

const theme = {
  gl: `github-light`,
  gd: `github-dark`,
  gdo: `github-dark-orange`,
  id: `icy-dark`,
  db: `dark-blue`,
  pd: `photon-dark`,
}

class Comments extends React.Component { 
  constructor(props) {
    super(props)
  } 

  render () {
    return (
        <div>
            <WithUtterances/>
        </div>
    )
  }
}

export default WithUtterances(Comments, 'veryfaraway/gatsby-leko-blog2', theme.gdo, 'og:title', 'comments')