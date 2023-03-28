import { UserInfoStyle } from './style'
import { BsFillGearFill } from 'react-icons/bs'
import { ImExit } from 'react-icons/im'
import { useUserContext } from '../../providers/UserContext'
import { Navigate } from 'react-router-dom'
import { useContactContext } from '../../providers/ContactContext'
import Modal from '../ModalAddContact'
import ModalUserConfig from '../ModalConfigUser'

export function UserInfo() {
  const { user, logout } = useUserContext()
  const { modalVisible, setModalVisible } = useContactContext()
  const { modalConfigVisible, setModalConfigVisible } = useUserContext()
  return (
    <UserInfoStyle>
      {modalVisible ? <Modal /> : null}
      {modalConfigVisible ? <ModalUserConfig /> : null}
      {user && (
        <>
          <div className="userInfo">
            <figure>
              <img src={user.imageProfile} alt="imagem de usuario" />
            </figure>
            <ul>
              <li>{user.name}</li>
              <li>{user.phone}</li>
            </ul>
          </div>
          <div>
            <button
              className="btnContact"
              onClick={() => setModalVisible(true)}
            >
              adicionar contato
            </button>
            <button
              className="btnConfig"
              onClick={() => setModalConfigVisible(true)}
            >
              <BsFillGearFill />
            </button>
            <button className="btnExit" onClick={logout}>
              SAIR
              <ImExit />
            </button>
          </div>
        </>
      )}
    </UserInfoStyle>
  )
}
