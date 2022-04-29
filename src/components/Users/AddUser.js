/*eslint-disable */
import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault()
    if (userName.trim().length === 0 || +age.trim() === 0) {
      return
    } if (+age < 1) {
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
  );
};

export default AddUser;
