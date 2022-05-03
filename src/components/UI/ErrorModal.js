/*eslint-disable */
import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onErrorConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className={styles.content}>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onErrorConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
