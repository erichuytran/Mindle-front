import React, { useState, useEffect } from 'react';
import MainActivity from './components/MainActivity'
import ConnexionActivity from './components/ConnexionActivity'

function App() {

  const [connexionStatus, setConnexionStatus] = useState(false)

  const [hash, setHash] = useState('')

  const setNewHash = (newHash) => {
    setHash(newHash['access_token'])
  }

  useEffect(() => {
    hash != 0 && setConnexionStatus(!connexionStatus)
  }, [hash])

  return (
    <div>
      {
        connexionStatus ? <MainActivity accessToken={hash} /> : <ConnexionActivity setNewHash={setNewHash} />
      }
    </div>
  )
}

export default App;