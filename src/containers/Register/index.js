/* eslint-disable no-unused-vars */

import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import RegisterImg from '../../assets/carne_burger.svg'
import Logo from '../../assets/logo_burger.svg'
import { Button } from '../../components'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string('Digite seu nome.').required('O nome é obrigatório'),
    email: Yup.string().email('Digite um email válido.').required('O email é obrigatório.'),
    password: Yup.string()
      .required('A senha é obrigatória.')
      .min(6, 'A senha deve conter pelo menos 6 dígitos.'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória.')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro realizado com sucesso')
      } else if (status === 409) {
        toast.error('Email já cadastrado. Faça o Login.')
      } else {
        throw new Error()
      }
    } catch {
      toast.error('Sistema indisponível. Favor, aguardar.')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Register-image" />
      <ContainerItens>
        <img src={Logo} alt="Logomarca" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input type="text" {...register('name')} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 20, marginBottom: 15 }}>
            Cadastrar
          </Button>
        </form>
        <SignInLink>
          Já possui conta?{''}
          <Link style={{ color: 'white' }} to="/login">
            {''} Login
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
