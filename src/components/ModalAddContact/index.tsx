import { VscClose } from 'react-icons/vsc'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { ModalStyle } from './style'
import {
  IcontactRequest,
  useContactContext,
} from '../../providers/ContactContext'
import InputMask from 'react-input-mask'

function Modal() {
  const { createContactFunc, setModalVisible } = useContactContext()
  const formSchema = Yup.object().shape({
    name: Yup.string().required('nome obrigatório'),
    email: Yup.string().required('email obrigatório'),
    phone: Yup.string().required('telefone obrigatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IcontactRequest>({
    resolver: yupResolver(formSchema),
  })

  return (
    <ModalStyle>
      <div className="backGround"></div>

      <div className="div_modal">
        <div>
          <p>Cadastrar Contato</p>
          <button onClick={() => setModalVisible(false)}>
            <VscClose />
          </button>
        </div>

        <form action="" onSubmit={handleSubmit(createContactFunc)}>
          <label>Nome</label>
          <input type="text" {...register('name')} />
          <p>{errors.name?.message}</p>

          <label>email</label>
          <input type="text" {...register('email')} />
          <p>{errors.email?.message}</p>

          <label>telefone</label>
          <InputMask
            mask="(99)9 9999-9999"
            type="text"
            {...register('phone')}
          />
          <p>{errors.phone?.message}</p>

          <button>Cadastrar Contato</button>
        </form>
      </div>
    </ModalStyle>
  )
}

export default Modal
