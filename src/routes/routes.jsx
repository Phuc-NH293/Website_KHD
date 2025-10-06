import { Route, Routes } from 'react-router-dom'

import Contact from '../pages/contact/contact'
import Home from '../pages/home/home'
import ProjectDetail from '../pages/project-detail/home'
import Projects from '../pages/project/project'
import Service from '../pages/service/service'
const Approutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<Service />} />
       <Route path="/project" element={<Projects />} />
         <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  )
}

export default Approutes