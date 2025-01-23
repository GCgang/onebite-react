import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import useCurrentDiary from '../../hooks/useCurrentDiary';
import { getStringedDate } from '../../util/getStringedDate';
import Viewer from '../../components/Viewer';

export default function Diary() {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const currentDiary = useCurrentDiary(id!);

  if (!currentDiary) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createDate, emotionId, content } = currentDiary;
  const title = getStringedDate(new Date(createDate));

  return (
    <main>
      <Header
        title={title}
        leftChild={<Button text='< 뒤로가기' onClick={() => nav(-1)} />}
        rightChild={
          <Button text='수정하기' onClick={() => nav(`/edit/${id}`)} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </main>
  );
}
