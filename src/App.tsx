import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './contexts/auth';
// import { Home } from "./pages/Home";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import More from './pages/More';
import Final from './pages/Final';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              
              </RequireAuth>
            }
          /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/more" element={<More />} />
          <Route path="/final" element={<Final />} />

          {/* <Route
            path="/subjects/:id"
            element={
              <RequireAuth>
                <CustomTable2/>
              
              </RequireAuth>
            }
          /> */}
          {/* <Route  path="dashboard" element={<Dashboard/>}/> */}
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
