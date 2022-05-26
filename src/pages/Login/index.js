import { useNavigate } from 'react-router-dom';
import { PageAuth } from '../../style/styles';
import { ButtonConfirm, Input, LoginContainer, SpanClick } from './styles';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <PageAuth>
      <LoginContainer>
        <h1 style={{ marginTop: '40px', marginBottom: '40px' }}>Login</h1>
        <Input
          id='email'
          label='Email'
          style={{ margin: '40px' }}
          color='success'
          variant='outlined'
          placeholder='Digite seu email...'
          autoComplete='off'
          required
        />
        <Input
          id='senha'
          label='Senha'
          color='success'
          variant='outlined'
          type='password'
          placeholder='Digite sua senha...'
          required
          style={{ marginBottom: '40px' }}
        />
        <ButtonConfirm variant='contained'>Login</ButtonConfirm>
        <SpanClick>Esqueci a senha</SpanClick>
        <span>
          Ainda não tem conta?{' '}
          <SpanClick
            onClick={() => {
              navigate('/cadastro');
            }}
          >
            Registre-se agora
          </SpanClick>
        </span>
      </LoginContainer>
    </PageAuth>
  );
};
