import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userController';
import { PageAuth } from '../../style/styles';
import { ButtonConfirm, Input, SingUpContainer, SpanClick } from './styles';

export const Cadastro = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function signUp() {
    try {
      await createUser(form);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PageAuth>
      <SingUpContainer>
        <h1 style={{ marginTop: '40px', marginBottom: '40px' }}>Cadastre-se</h1>
        <Input
          id='name'
          label='Nome'
          name={'name'}
          style={{ margin: '10px' }}
          color='success'
          variant='outlined'
          required
          placeholder='Digite seu nome...'
          autoComplete='off'
          value={form.name}
          onChange={handleChange}
        />
        <Input
          id='phone'
          label='Telefone'
          name={'phone'}
          type='tel'
          style={{ margin: '10px' }}
          color='success'
          required
          variant='outlined'
          placeholder='Digite seu telefone...'
          autoComplete='off'
          value={form.phone}
          onChange={handleChange}
        />
        <Input
          id='email'
          label='Email'
          name={'email'}
          style={{ margin: '10px' }}
          color='success'
          required
          variant='outlined'
          placeholder='Digite seu email...'
          autoComplete='off'
          value={form.email}
          onChange={handleChange}
        />
        <Input
          id='senha'
          label='Senha'
          name={'password'}
          color='success'
          variant='outlined'
          required
          type='password'
          placeholder='Digite sua senha...'
          autoComplete='off'
          style={{ margin: '10px' }}
          value={form.password}
          onChange={handleChange}
        />
        <Input
          id='confirmSenha'
          label='Confirmar senha'
          name={'confirmPassword'}
          color='success'
          variant='outlined'
          required
          type='password'
          placeholder='Digite sua senha...'
          autoComplete='off'
          style={{ margin: '10px' }}
          value={form.confirmPassword}
          onChange={handleChange}
          onBlur={() => {
            if (form.password !== form.confirmPassword) {
              alert('As senhas não conferem!');
            }
          }}
        />
        <ButtonConfirm variant='contained' onClick={signUp}>
          Cadastre-se
        </ButtonConfirm>
        <span>
          Já possuí uma conta?{' '}
          <SpanClick
            onClick={() => {
              navigate('/login');
            }}
          >
            Fazer Login
          </SpanClick>
        </span>
      </SingUpContainer>
    </PageAuth>
  );
};
