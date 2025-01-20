import './DiaryList.css';
import Button from '../Button';
import DiaryItem from '../DiaryItem/DiaryItem';

export default function DiaryList() {
  return (
    <section className='DiaryList'>
      <div className='menu_bar'>
        <select>
          <option value='latest'>최신순</option>
          <option value='oldest'>오래된 순</option>
        </select>
        <Button text='새 일기쓰기' type='POSITIVE' />
      </div>
      <div className='list_wrapper'>
        <DiaryItem />
      </div>
    </section>
  );
}
