import { useNavigate, useParams } from 'react-router-dom';
import {
  DiaryEntry,
  useDiary,
  useDiaryDispatch,
} from '../../context/DiaryContext';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Editor from '../../components/Editor';
import { useEffect, useState } from 'react';

export default function Edit() {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const diary = useDiary();
  const { onUpdate, onDelete } = useDiaryDispatch();
  const [curDiaryItem, setCurDiaryItem] = useState<DiaryEntry>();

  useEffect(() => {
    const currentDiaryItem = diary.find((item) => String(item.id) === id);

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true });
      return;
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id]);

  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요 ? 다시 복구되지 않습니다.')) {
      onDelete(Number(id));
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input: DiaryEntry) => {
    if (window.confirm('일기를 정말 수정할까요 ?')) {
      onUpdate(input);
      nav('/', { replace: true });
    }
  };

  return (
    <main>
      <Header
        title='일기 수정하기'
        leftChild={<Button text='< 뒤로가기' onClick={() => nav(-1)} />}
        rightChild={
          <Button text='삭제하기' type='NEGATIVE' onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </main>
  );
}
