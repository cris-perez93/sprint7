import {Fragment} from 'react'
import Linea from './components/linea'





function App() {

  
const texto = [

  "Hola Romeo.", 
 
 "Hola Julieta", 
 
 "T'estimo, Romeo", 
 
 "I jo a tu Julieta", 
 
 "Escapem-nos a Mèxic", 
 
 "Millor no, no li caus bé a la meva família i si seguim endavant amb el nostre amor, aquesta història acabarà malament", 
 
 "Doncs vaja" 
 
 ] 

  return (
    <Fragment>
      
      {Array.from(texto).map(t => {
        
      return <Linea
         texto = {t}
      />
      })}
     
    </Fragment>
    
    
  )
};

export default App;
