import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route path="/about" element={<About />} />

          <Route path="/wiki/:category" element={<Entities getCategoryData={getCategoryData} />} />
          <Route path="/wiki/:category/:name" element={<EntityDescription getCategoryData={getCategoryData} />} />
        </Routes> 
      </Router>
  );
}

export default App;
