import Header from '../../components/Header';
import DiaryList from '../../components/DiaryList';
import Button from '../../components/Button';

export default function Home() {
  return (
    <main>
      <div>
        <Header
          title='2022년 5월'
          leftChild={<Button text='<' />}
          rightChild={<Button text='>' />}
        />
        <DiaryList />
      </div>
    </main>
  );
}
