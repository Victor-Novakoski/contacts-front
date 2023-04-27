import { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import { useForm } from 'react-hook-form'
import { LoginPage } from './style'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import 'animate.css'
import { useUserContext } from '../../providers/UserContext'

export interface IUserLogin {
  email: String
  password: String
}

function Login() {
  const [passwordShow, setPasswordShow] = useState(true)
  const { loginFunction } = useUserContext()

  const formSchema = Yup.object({
    email: Yup.string().required('email obrigatório'),
    password: Yup.string().required('senha obrigatória'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(formSchema),
  })
  return (
    <LoginPage className="animate__animated animate__fadeIn">
      <div>
        <h3>Login</h3>
        <form action="" onSubmit={handleSubmit(loginFunction)}>
          <label htmlFor="">
            Email
            <input
              type="text"
              placeholder="Digite aqui seu email"
              {...register('email')}
            />
            <p>{errors.email?.message}</p>
          </label>

          <label htmlFor="">
            Senha
            <input
              type={passwordShow ? 'password' : 'text'}
              placeholder="Digite aqui sua senha"
              {...register('password')}
            />
            <Icon
              icon={passwordShow ? eyeOff : eye}
              onClick={() => {
                setPasswordShow(!passwordShow)
              }}
            />
            <p>{errors.password?.message}</p>
          </label>
          <button type="submit">Entrar</button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </LoginPage>
  )
}

export default Login
