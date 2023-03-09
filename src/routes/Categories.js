import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = ({ id }) => {
  const dispatch = useDispatch();
  const handleCheckStatus = () => {
    dispatch(checkStatus(id));
  };

  return (
    <button type="button" onClick={handleCheckStatus}>Check Status</button>
  );
};

Categories.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Categories;
