import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  return (
    <>
    <Navbar></Navbar>
    
    <h1 className='text-7xl bg-red-600'>Vite + React</h1>     

    <PriceOptions></PriceOptions>
      
      <LineChart></LineChart>

      <Phones></Phones>

    
    </>
  )
}

export default App
