import React, { useState } from 'react';
import MainActivity from './components/MainActivity'
import ConnexionActivity from './components/ConnexionActivity'

function App() {

  const [connexionStatus, setConnexionStatus] = useState(false)

  const [hash, setHash] = useState('')

  const setNewHash = (newHash) => {
    setHash(newHash['access_token'])
    console.log(hash)
    newHash != 0 && setConnexionStatus(!connexionStatus)
  }

  return (
    <div>
      {
        connexionStatus ? <MainActivity /> : <ConnexionActivity setNewHash={setNewHash} />
      }
    </div>
  )
}

export default App;