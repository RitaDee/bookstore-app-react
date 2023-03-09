import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <button type="button" onClick={handleCheckStatus}>Check Status</button>
  );
};

export default Categories;
