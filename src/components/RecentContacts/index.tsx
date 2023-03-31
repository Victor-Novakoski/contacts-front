import { RecentStyle } from './style'
import { BsFillGearFill } from 'react-icons/bs'
import { useContactContext } from '../../providers/ContactContext'
import ModalContactConfig from '../ModalContactConfig'

export function RecentContacts() {
  const {
    recentContact,
    search,
    setSearch,
    modalContactConfig,
    setModalContactConfig,
    setContactId,
    loadContact,
  } = useContactContext()

  const searchLowerCase = search.toLocaleLowerCase()

  // const filteredContacts = recentContact?.filter(
  //   e => e.name.toLowerCase().includes(searchLowerCase)
  // )

  const filteredContacts =
    search.length > 0
      ? recentContact?.filter(contact => contact.name.includes(searchLowerCase))
      : recentContact

  return (
    <RecentStyle>
      {modalContactConfig ? <ModalContactConfig /> : null}
      <h1>Contatos recentes</h1>
      <div className="divInput">
        <input
          type="text"
          name="search"
          placeholder="Buscar contato"
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <ul>
        {recentContact?.length === 0 ? (
          <li>
            <p>você tem que adicionar um novo contato</p>
          </li>
        ) : (
          filteredContacts?.map(elem => {
            return (
              <li key={elem.id} onClick={() => setContactId(elem.id)}>
                <div>
                  <p>{elem.name}</p>
                  <p>{elem.email}</p>
                  <p>{elem.phone}</p>
                </div>
                <button onClick={() => setModalContactConfig(true)}>
                  <BsFillGearFill />
                </button>
              </li>
            )
          })
        )}
      </ul>
    </RecentStyle>
  )
}
