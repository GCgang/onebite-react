import './EmotionItem.css';
import { getEmotionImage } from '../../util/getEmotionImage';

interface EmotionItemProps {
  emotionId: number;
  emotionName: string;
  isSelected: boolean;
}
export default function EmotionItem({
  emotionId,
  emotionName,
  isSelected,
}: EmotionItemProps) {
  return (
    <div
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ''
      }`}
    >
      <img
        className='emotion_img'
        src={getEmotionImage(emotionId)!}
        alt='emotion image'
      />
      <div className='emotion_name'>{emotionName}</div>
    </div>
  );
}
