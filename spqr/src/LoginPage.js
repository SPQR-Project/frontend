import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import logo from './ruun.png'; 
import jwt_decode from 'jwt-decode';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';

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

  const userPoolId = 'ap-northeast-2_DUBc9Z9vB';
  const clientId = '32o2uldsj0sd01riffclu7l12v';
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('hello');
    const userPool = new CognitoUserPool({
      UserPoolId: userPoolId,
      ClientId: clientId,
    });

    const user = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log('access token: ' + result.getAccessToken().getJwtToken());
        const decodedToken = jwt_decode(result.getAccessToken().getJwtToken());
        const isHQUser = decodedToken['cognito:groups'].includes('headquarters')
        console.log(decodedToken['cognito:groups']);
        console.log(isHQUser);
        navigate('/order',  { state: { isHQUser } });
       
      },
      onFailure: (err) => {
        console.error(err);
        // TODO: handle failed sign in, e.g. show error message to user
      },
    });
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
};

export default LoginPage;
