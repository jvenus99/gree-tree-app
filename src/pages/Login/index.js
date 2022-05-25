import { Input, LoginContainer } from './styles';

export const Login = () => {
  return (
    <LoginContainer>
      <h1 style={{ marginTop: '20%', marginBottom: '20%' }}>Login</h1>
      <Input
        id='email'
        label='Email'
        style={{ margin: '10%' }}
        color='success'
        variant='outlined'
        placeholder='Digite seu email...'
        autoComplete='off'
      />
      <Input
        id='senha'
        label='Senha'
        color='success'
        variant='outlined'
        placeholder='Digite sua senha...'
        autoComplete='off'
        style={{ marginBottom: '10%' }}
      />
    </LoginContainer>
  );
};
