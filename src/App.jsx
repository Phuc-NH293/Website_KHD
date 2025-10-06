import MainLayout from "./layouts/Main"
import Approutes from "./routes/routes"
function App() {
  return (
    <>
   <div className="max-w-screen-xl mx-auto px-4">
    <MainLayout>
    <Approutes/>
    </MainLayout>


    </div>  
</>
  )
}

export default App
