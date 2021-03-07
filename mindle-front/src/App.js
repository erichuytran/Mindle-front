import React, {useState} from 'react';
import MainActivity from './components/MainActivity'
import ConnexionActivity from './components/ConnexionActivity'

function App() {

  const [connexionStatus, setConnexionStatus] = useState(false)

  const handleConnexionStatus = () => {
    setConnexionStatus(!connexionStatus)
  }

  return (
    <div>
      {
        connexionStatus ? <MainActivity /> : <ConnexionActivity handleConnexionStatus={handleConnexionStatus} />
      }
    </div>
  );
}

export default App;