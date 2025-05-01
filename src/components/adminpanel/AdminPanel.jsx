import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBasketThunk, getBasketThunk, postBasketThunk } from '../../redux/reducers/basketSlice';
import { useFormik } from 'formik';
import styles from './AdminPanel.module.scss'

const AdminPanel = () => {
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket.basket) || [];

  useEffect(() => {
    dispatch(getBasketThunk());
  }, [dispatch]);

  const deleteItem = (id) => {
    dispatch(deleteBasketThunk(id));
  };

  const formik = useFormik({
    initialValues: {
      thumbnail: '',
      title: '',
      price: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      dispatch(postBasketThunk(values));
    },
  });

  return (
    <div className={styles.cards}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="thumbnail">Thumbnail</label>
        <input
          id="thumbnail"
          name="thumbnail"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.thumbnail}
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Price</th>
            <th>Title</th>
            <th>SIL</th>
          </tr>
        </thead>
        <tbody>
          {basket && basket.map(item => (
            <tr key={item.id}>
              <td><img src={item.thumbnail} alt={item.title} width="60" /></td>
              <td><p>{item.price}</p></td>
              <td><p>{item.title}</p></td>
              <td><button onClick={() => deleteItem(item.id)}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
