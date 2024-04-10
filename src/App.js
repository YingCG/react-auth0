import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import { LououtButton } from './components/LououtButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isLoading} = useAuth0()

  if (isLoading) return <div>Loading</div>
  return (
    <div className="App">
     <Profile/>
     <LoginButton/>
     <LououtButton/>
    </div>
  );
}

export default App;
