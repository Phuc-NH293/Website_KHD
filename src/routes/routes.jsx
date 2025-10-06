import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/contact/contact'
import Home from '../pages/Home/home'
import ProjectDetail from '../pages/project-detail/ProjectDetail'
import Projects from '../pages/project/Projects'
import Service from '../pages/service/Service'
const Approutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
       <Route path="/project" element={<Projects />} />
         <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  )
}

export default Approutes