import { VscClose } from 'react-icons/vsc'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { IUser, useUserContext } from '../../providers/UserContext'
import { ModalStyle } from '../ModalAddContact/style'

function ModalUserConfig() {
  const { patchUser, setModalConfigVisible } = useUserContext()

  const formSchema = Yup.object().shape({
    name: Yup.string().notRequired(),
    email: Yup.string().notRequired(),
    password: Yup.string().notRequired(),
    phone: Yup.string().notRequired(),
    imageProfile: Yup.string().notRequired(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  })

  return (
    <ModalStyle>
      <div className="backGround"></div>

      <div className="div_modal">
        <div>
          <p>Atualizar perfil</p>
          <button onClick={() => setModalConfigVisible(false)}>
            <VscClose />
          </button>
        </div>

        <form action="" onSubmit={handleSubmit(patchUser)}>
          <label>Nome</label>
          <input type="text" {...register('name')} />
          <p>{errors.name?.message}</p>

          <label>password</label>
          <input type="text" {...register('password')} />
          <p>{errors.password?.message}</p>

          <label>email</label>
          <input type="text" {...register('email')} />
          <p>{errors.email?.message}</p>

          <label>phone</label>
          <input type="text" {...register('phone')} />
          <p>{errors.phone?.message}</p>

          <label>imagem de perfil</label>
          <input type="text" {...register('imageProfile')} />
          <p>{errors.imageProfile?.message}</p>

          <button>atualizar perfil</button>
        </form>
      </div>
    </ModalStyle>
  )
}

export default ModalUserConfig
