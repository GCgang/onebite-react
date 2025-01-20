import './DiaryItem.css';
import Button from '../Button';
import { getEmotionImage } from '../../util/getEmotionImage';

export default function DiaryItem() {
  const emotionId = 3;

  return (
    <div className='DiaryItem'>
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)!} alt='diary emotion image' />
      </div>
      <div className='info_section'>
        <div className='created_date'>{new Date().toLocaleTimeString()}</div>
        <div className='content'>일기 내용</div>
      </div>
      <div className='button_section'>
        <Button text='수정하기' />
      </div>
    </div>
  );
}
