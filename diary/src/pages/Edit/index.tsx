import { useNavigate, useParams } from 'react-router-dom';
import { DiaryEntry, useDiaryDispatch } from '../../context/DiaryContext';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Editor from '../../components/Editor';
import useCurrentDiary from '../../hooks/useCurrentDiary';

export default function Edit() {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const { onUpdate, onDelete } = useDiaryDispatch();
  const currentDiary = useCurrentDiary(id!);

  if (!currentDiary) {
    return <div>데이터 로딩중...!</div>;
  }
  
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
      <Editor initData={currentDiary} onSubmit={onSubmit} />
    </main>
  );
}
