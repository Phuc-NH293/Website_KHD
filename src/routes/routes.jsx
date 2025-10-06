import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/contact/contact'
import Home from '../pages/Home/home'
import ProjectDetail from '../pages/project-detail/home'
import Project from '../pages/project/project'
import Service from '../pages/service/service'
const Approutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
       <Route path="/project" element={<Project />} />
         <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  )
}

export default Approutes