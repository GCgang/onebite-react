import { useNavigate } from 'react-router-dom';
import { DiaryEntry, useDiary } from '../context/DiaryContext';
import { useEffect, useState } from 'react';

export default function useCurrentDiary(id: string) {
  const diary = useDiary();
  const [curDiaryItem, setCurDiaryItem] = useState<DiaryEntry | undefined>();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = diary.find((item) => String(item.id) === id);

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true });
      return;
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id]);

  return curDiaryItem;
}
