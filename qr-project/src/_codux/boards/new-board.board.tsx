import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginPage = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `16px`,
  padding: `24px`,
  boxSizing: `border-box`,
}));

const LoginField = styled(TextField)({
  marginBottom: '20px',
  width: '300px',
});

const LoginButton = styled(Button)({
  width: '300px',
});

const LoginBoard = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can add your login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <LoginPage>
      <form onSubmit={handleLogin}>
        <LoginField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton variant="contained" type="submit">Login</LoginButton>
      </form>
    </LoginPage>
  );
};

export default createBoard({
  name: 'Login Board',
  Board: LoginBoard,
});

