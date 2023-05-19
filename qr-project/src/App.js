import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import logo from './ruun.png'; // Importing the logo image

// Styled components
const StyledDiv = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `16px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  alignItems: 'center',
  padding: `24px`,
  boxSizing: `border-box`,
  height: '100vh',
  justifyContent: 'center',
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '200px',
  height: '200px',
  marginBottom: '24px',
}));

const InputField = styled('input')(({ theme }) => ({
  border: '1px solid rgba(86, 92, 103, 1)',
  borderRadius: '8px',
  width: '55%', // reduced the width to 80%
  height: '40px',
  marginBottom: '16px',
  padding: '8px',
  fontSize: '16px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '40%', // reduced the width to 80%
  marginTop: '16px',
}));

function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Logging in with username: ${username} and password: ${password}`);
    // Here you should add your authentication logic
  };

  return (
    <StyledDiv>
      <LogoImage src={logo} alt="Logo" /> {/* Using the imported logo image */}
      <InputField 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <InputField 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <StyledButton variant="contained" color="primary" onClick={handleLogin}>
        Login
      </StyledButton>
    </StyledDiv>
  );
}

export default LoginPage;


//이게 코그니토 되게 한거
/*
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Auth } from 'aws-amplify';

// Styled components
const StyledDiv = styled('div')(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '16px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  width: '300px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '24px',
  boxSizing: 'border-box',
  height: 'auto',
  margin: 'auto',
}));

const Logo = styled('img')({
  height: '80px',
  marginBottom: '24px',
});

const InputField = styled('input')(({ theme }) => ({
  border: '1px solid rgba(86, 92, 103, 1)',
  borderRadius: '8px',
  width: '100%',
  height: '40px',
  marginBottom: '16px',
  padding: '8px',
  fontSize: '16px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  alignSelf: 'stretch',
  marginTop: '16px',
}));

function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await Auth.signIn(username, password);
      console.log('User logged in successfully', user);
      // Here you would usually navigate to another page
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <StyledDiv>
      <Logo src="ruun.png" alt="Logo" />
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton variant="contained" color="primary" onClick={handleLogin}>
        Login
      </StyledButton>
    </StyledDiv>
  );
}

export default LoginPage;
*/
