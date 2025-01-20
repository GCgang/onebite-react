import './DiaryList.css';
import Button from '../Button';
import DiaryItem from '../DiaryItem/DiaryItem';
import { DiaryEntry } from '../../context/DiaryContext';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

interface DiaryListProps {
  data: DiaryEntry[];
}

export default function DiaryList({ data }: DiaryListProps) {
  const nav = useNavigate();
  const [sortedType, setSortedType] = useState('latest');

  const onChageSortedType = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortedType(e.target.value);
  };

  const getSortedData = () => {
    return data.sort((a, b) => {
      if (sortedType === 'oldest') {
        return Number(a.createDate) - Number(b.createDate);
      } else {
        return Number(b.createDate) - Number(a.createDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <section className='DiaryList'>
      <div className='menu_bar'>
        <select value={sortedType} onChange={onChageSortedType}>
          <option value='latest'>최신순</option>
          <option value='oldest'>오래된 순</option>
        </select>
        <Button
          text='새 일기쓰기'
          type='POSITIVE'
          onClick={() => nav('/new')}
        />
      </div>
      <div className='list_wrapper'>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
