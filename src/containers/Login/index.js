/* eslint-disable import-helpers/order-imports */
/* eslint-disable no-unused-vars */

import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { Link, useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import LoginImg from '../../assets/burger.svg'
import Logo from '../../assets/logo_burger.svg'
import { Button } from '../../components'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

export function Login() {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um email válido.').required('O email é obrigatório.'),
    password: Yup.string()
      .required('A senha é obrigatória.')
      .min(6, 'A senha deve conter pelo menos 6 dígitos.')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados.',
        success: 'Tudo ok! Seja bem vindo(a).',
        error: 'Algo deu errado. Verifique seus dados.'
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 1000)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Login-image" />
      <ContainerItens>
        <img src={Logo} alt="Logomarca" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>
            Entrar
          </Button>
        </form>
        <SignInLink>
          Não possui conta?{''}
          <Link style={{ color: 'white' }} to="/cadastro">
            {''} Cadastre-se
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
