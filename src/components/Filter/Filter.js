import PropTypes from 'prop-types';

export default function Filter({ changeFilter }) {
    return (
        <label>
            Filter
            <input type="text" onChange={changeFilter} placeholder="Search..." />
        </label>
    );
};

Filter.propTypes = {
    changeFilter: PropTypes.func.isRequired,
};