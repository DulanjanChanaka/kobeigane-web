import About from '@/components/About'
import Clinics from '@/components/Clinics'
import Contact from '@/components/Contact'
import Educational from '@/components/Educational'
import Footer from '@/components/Footer'
import Homepage from '@/components/Homepage'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
<div>
  <Navbar/>
  <Homepage/>
  <Clinics/>
  <Educational/>
  <About/>
  <Contact/>
  
  <Footer/>
</div>
  )
}
