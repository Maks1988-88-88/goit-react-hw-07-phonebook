import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/slices/filter';

// import PropTypes from 'prop-types';

export default function Filter() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const changeFilter = e => {
    console.log(e.currentTarget.value);
    let value = e.currentTarget.value;
    dispatch(filterContacts(value));

  };

  return (
    <label>
      <input type="text" onChange={changeFilter} />
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
