import { Container, Form, DivInput } from './style'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import 'animate.css'
import { useUserContext } from '../../providers/UserContext'
import { yupResolver } from '@hookform/resolvers/yup'

export interface IUserRegister {
  name: string
  email: string
  password: string
  confirm_password: string
  phone: string
  imageProfile?: string
}

function Register() {
  const { registerSubmit } = useUserContext()

  const regexPhone =
    /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/

  const formSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().required('Email obrigatório').email('Email inválido'),
    password: Yup.string().min(6).required('senha obrigatório'),
    confirm_password: Yup.string().oneOf(
      [Yup.ref('password')],
      'Confirmação de senha deve ser igual a senha'
    ),
    phone: Yup.string().required('telefone obrigatório').matches(regexPhone),
    imageProfile: Yup.string()
      .default(
        'https://argumentumpericias.com.br/biblioteca/2019/09/sem-imagem-avatar.png'
      )
      .notRequired(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(formSchema),
  })

  return (
    <Container className="animate__animated animate__fadeIn">
      <div>
        <figure></figure>
        <Link to="/">Voltar</Link>
      </div>
      <div className="div_tittle">
        <div>
          <h3>Crie sua conta</h3>
          <span>Rapido e grátis, vamos nessa</span>
        </div>

        <Form onSubmit={handleSubmit(registerSubmit)}>
          <DivInput>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              placeholder="Digite aqui seu nome"
              {...register('name')}
            />
            <p>{errors.name?.message}</p>
          </DivInput>

          <DivInput>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Digite aqui seu email"
              {...register('email')}
            />
            <p>{errors.email?.message}</p>
          </DivInput>

          <DivInput>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              placeholder="Digite aqui sua senha"
              type="password"
              {...register('password')}
            />
            <p>{errors.password?.message}</p>
          </DivInput>

          <DivInput>
            <label htmlFor="confirmar senha">Confirmar Senha</label>
            <input
              id="confirmar-senha"
              placeholder="Digite novamente sua senha"
              type="password"
              {...register('confirm_password')}
            />
            <p>{errors.confirm_password?.message}</p>
          </DivInput>

          <DivInput>
            <label htmlFor="phone">telefone</label>
            <input
              id="phone"
              placeholder="(99) 99999-9999"
              {...register('phone')}
            />
            <p>{errors.phone?.message}</p>
          </DivInput>

          <DivInput>
            <label htmlFor="imageProfile">Imagem de perfil</label>
            <input
              id="imageProfile"
              placeholder="Opção de imageProfile"
              {...register('imageProfile')}
            />
            <p>{errors.imageProfile?.message}</p>
          </DivInput>

          <button type="submit">Cadastrar</button>
        </Form>
      </div>
    </Container>
  )
}

export default Register
