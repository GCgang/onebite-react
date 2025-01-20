import Header from '../../components/Header';
import Editor from '../../components/Editor';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { DiaryEntry, useDiaryDispatch } from '../../context/DiaryContext';

export default function New() {
  const { onCreate } = useDiaryDispatch();
  const nav = useNavigate();
  const onSubmit = (input: DiaryEntry) => {
    onCreate(input);
    nav('/', { replace: true });
  };

  return (
    <main>
      <Header
        title='새 일기 쓰기'
        leftChild={<Button text='< 뒤로가기' onClick={() => nav(-1)} />}
      />
      <Editor onSubmit={onSubmit} />
    </main>
  );
}
