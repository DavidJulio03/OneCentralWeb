import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'


function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Ruta para manejar errores 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;