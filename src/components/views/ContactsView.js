import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Filter from 'components/Filter/Filter';
import PhonebookList from 'components/PhonebookList/PhonebookList';
import Container from 'components/Container/Container';
import s from './RegisterViews.module.css';

export default function ContactsView() {
  return (
    <Container>
      <div className={s.formWrapper}>
        <PhonebookForm />
        <Filter />
        <PhonebookList />
      </div>
    </Container>
  );
}
