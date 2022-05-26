import { useNavigate } from 'react-router-dom';
import { PageAuth } from '../../style/styles';
import { ButtonConfirm, Input, SingUpContainer, SpanClick } from './styles';

export const Cadastro = () => {
  const navigate = useNavigate();
  return (
    <PageAuth>
      <SingUpContainer>
        <h1 style={{ marginTop: '40px', marginBottom: '40px' }}>Cadastre-se</h1>
        <Input
          id='name'
          label='Nome'
          style={{ margin: '10px' }}
          color='success'
          variant='outlined'
          required
          placeholder='Digite seu nome...'
          autoComplete='off'
        />
        <Input
          id='phone'
          label='Telefone'
          type='tel'
          style={{ margin: '10px' }}
          color='success'
          required
          variant='outlined'
          placeholder='Digite seu telefone...'
          autoComplete='off'
        />
        <Input
          id='email'
          label='Email'
          style={{ margin: '10px' }}
          color='success'
          required
          variant='outlined'
          placeholder='Digite seu email...'
          autoComplete='off'
        />
        <Input
          id='senha'
          label='Senha'
          color='success'
          variant='outlined'
          required
          type='password'
          placeholder='Digite sua senha...'
          autoComplete='off'
          style={{ margin: '10px' }}
        />
        <Input
          id='confirmSenha'
          label='Confirmar senha'
          color='success'
          variant='outlined'
          required
          type='password'
          placeholder='Digite sua senha...'
          autoComplete='off'
          style={{ margin: '10px' }}
        />
        <ButtonConfirm variant='contained'>Cadastre-se</ButtonConfirm>
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
