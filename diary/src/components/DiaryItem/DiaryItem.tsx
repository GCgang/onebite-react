import './DiaryItem.css';
import Button from '../Button';
import { getEmotionImage } from '../../util/getEmotionImage';
import { DiaryEntry } from '../../context/DiaryContext';
import { useNavigate } from 'react-router-dom';

export default function DiaryItem({
  id,
  createDate,
  emotionId,
  content,
}: DiaryEntry) {
  const nav = useNavigate();

  const goDiaryPage = () => {
    nav(`/diary/${id}`);
  };

  const goEditPage = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className='DiaryItem'>
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)!} alt='diary emotion image' />
      </div>
      <div className='info_section' onClick={goDiaryPage}>
        <div className='created_date'>
          {new Date(createDate).toLocaleDateString()}
        </div>
        <div className='content'>{content}</div>
      </div>
      <div className='button_section'>
        <Button text='수정하기' onClick={goEditPage} />
      </div>
    </div>
  );
}
