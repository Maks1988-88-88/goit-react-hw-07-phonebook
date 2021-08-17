import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
} from 'redux/slices/contacts';

// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContacts } from 'redux/actions/contacts';
// import { deleteContacts } from 'redux/slices/contacts';

import s from 'components/ContactList/ContactList.module.css';

// const filtersContacts = (contacts, filter) =>
//   contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );

export default function ContactList() {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContacts, { isLoading : isDeleting }] =
    useDeleteContactsMutation();

  // console.log(data);

  // const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);
  // const dispatch = useDispatch();
  // const contactsList = filtersContacts(contacts, filter);

  // const deleteItem = id => {
  //   dispatch(deleteContacts(id));
  // };

  return (
    <ol className={s.list}>
      {isFetching && <p>Loading...</p>}
      {data &&
        data.map(el => (
          <li key={el.id}>
            <p className={s.posBtn}>
              <span className={s.text}>
                {el.name}: {el.number}
              </span>
              <button
                type="button"
                onClick={() => deleteContacts(el.id)}
                className={s.btn}
              >
                {isDeleting ? `Delete...` : `Delete`}
              </button>
            </p>
          </li>
        ))}
    </ol>
  );
}
