import Header from '../../components/Header';
import DiaryList from '../../components/DiaryList';
import Button from '../../components/Button';
import { useDiary } from '../../context/DiaryContext';
import { useState } from 'react';
import { State } from '../../context/DiaryContext';

function getMonthlyData(pivotDate: Date, diary: State) {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return diary.filter(
    (item) => beginTime <= item.createDate && item.createDate <= endTime
  );
}

export default function Home() {
  const diary = useDiary();
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(pivotDate, diary);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <main>
      <div>
        <Header
          title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
          leftChild={<Button text='<' onClick={onDecreaseMonth} />}
          rightChild={<Button text='>' onClick={onIncreaseMonth} />}
        />
        <DiaryList data={monthlyData} />
      </div>
    </main>
  );
}
