import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/authContext';
import { PageAuth } from '../../style/styles';
import { ButtonConfirm, Input, LoginContainer, SpanClick } from './styles';

export const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(Context);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const submit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        handleLogin(form);
      } catch (error) {
        console.log(error);
      }
    },
    [handleLogin, form]
  );

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <PageAuth>
      <LoginContainer>
        <h1 style={{ marginTop: '40px', marginBottom: '40px' }}>Login</h1>
        <Input
          id='email'
          name={'email'}
          label='Email'
          style={{ margin: '40px' }}
          color='success'
          variant='outlined'
          placeholder='Digite seu email...'
          autoComplete='off'
          required
          value={form.email}
          onChange={handleChange}
        />
        <Input
          id='senha'
          label='Senha'
          name={'password'}
          color='success'
          variant='outlined'
          type='password'
          placeholder='Digite sua senha...'
          required
          style={{ marginBottom: '40px' }}
          value={form.password}
          onChange={handleChange}
        />
        <ButtonConfirm variant='contained' onClick={(e) => submit(e)}>
          Login
        </ButtonConfirm>
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
