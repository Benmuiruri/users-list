// @ts-nocheck
/*eslint-disable */
import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault()
    if (userName.trim().length === 0 || +age.trim() === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid user name and age',
      });
      return
    } if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age greater than 0',
      });
      return
    }
    props.onAddUser(userName, age);
    setUserName('');
    setAge('');
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      {error && (
        <ErrorModal title={error.title} message={error.message} />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={userName}
            onChange={userNameHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' value={age} onChange={ageHandler} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
