import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/store';

export default function Filter() {
  const dispatch = useDispatch();
  const getFilterValue = e => dispatch(filterContacts(e.target.value));
  return (
    <label>
      Filter
      <input type="text" onChange={getFilterValue} placeholder="Search..." />
    </label>
  );
}
