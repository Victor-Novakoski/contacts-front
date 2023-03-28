import { VscClose } from 'react-icons/vsc'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { IContacts } from '../../providers/UserContext'
import { ModalStyle } from '../ModalAddContact/style'
import { useContactContext } from '../../providers/ContactContext'

function ModalContactConfig() {
  const { setModalContactConfig, deleteContact, patchContact, contactId } =
    useContactContext()

  const formSchema = Yup.object().shape({
    name: Yup.string().notRequired(),
    email: Yup.string().notRequired(),
    phone: Yup.string().notRequired(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContacts>({
    resolver: yupResolver(formSchema),
  })

  return (
    <ModalStyle>
      <div className="backGround"></div>

      <div className="div_modal">
        <div>
          <p>Atualizar Contato</p>
          <button onClick={() => setModalContactConfig(false)}>
            <VscClose />
          </button>
        </div>

        <form action="" onSubmit={handleSubmit(patchContact)}>
          <label>Nome</label>
          <input type="text" {...register('name')} />
          <p>{errors.name?.message}</p>

          <label>email</label>
          <input type="text" {...register('email')} />
          <p>{errors.email?.message}</p>

          <label>phone</label>
          <input type="text" {...register('phone')} />
          <p>{errors.phone?.message}</p>

          <button>atualizar Contato</button>
          <span
            className="deleteBtnContacts"
            onClick={() => deleteContact(contactId)}
          >
            excluir Contato
          </span>
        </form>
      </div>
    </ModalStyle>
  )
}

export default ModalContactConfig
