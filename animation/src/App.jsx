import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
      AOS.init({duration:"1000"});
  },[])
  return (
 <>
<div className=' mx-auto mx-auto max-w-screen-md '>
  <div className=' bg-blue-800 h-56 my-32' data-aos="fade-right">
   </div>

   <div className=' bg-blue-800 h-56 my-32' data-aos="fade-left">
   </div>

   <div className=' bg-blue-800 h-56  my-32' data-aos="fade-up-right">
   </div>

   <div className=' bg-blue-800 h-56  my-32' data-aos="fade-down-right">
   </div>

   <div className=' bg-blue-800 h-56  my-32' data-aos="zoom-in">
   </div>

   <div className=' bg-blue-800 h-56  my-32' data-aos="fade-left">
   </div>
</div>

 </>
  )
}

export default App
