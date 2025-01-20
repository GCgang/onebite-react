import './Editor.css';
import Button from '../Button';
import EmotionItem from '../EmotionItem';
import { DiaryEntry } from '../../context/DiaryContext';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

interface EditorProps {
  onSubmit: (input: DiaryEntry) => void;
}
const emotionList = [
  {
    emotionId: 1,
    emotionName: '완전 좋음',
  },
  {
    emotionId: 2,
    emotionName: '좋음',
  },
  {
    emotionId: 3,
    emotionName: '그럭저럭',
  },
  {
    emotionId: 4,
    emotionName: '나쁨',
  },
  {
    emotionId: 5,
    emotionName: '끔찍함',
  },
];

const getStringedDate = (targetDate: Date) => {
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');
  const date = String(targetDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${date}`;
};

export default function Editor({ onSubmit }: EditorProps) {
  const [input, setInput] = useState<DiaryEntry>({
    createDate: new Date().getTime(),
    emotionId: 3,
    content: '',
  });
  const nav = useNavigate();
  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: name === 'createDate' ? new Date(value).getTime() : value,
    }));
  };

  const onEmotionSelect = (emotionId: number) => {
    setInput((prev) => ({
      ...prev,
      emotionId,
    }));
  };
  const onSubmitButtonClick = () => {
    onSubmit(input);
  };

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input
          name='createDate'
          onChange={onChangeInput}
          value={getStringedDate(new Date(input.createDate))}
          type='date'
        />
      </section>
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((emotion) => (
            <EmotionItem
              key={emotion.emotionId}
              {...emotion}
              isSelected={emotion.emotionId === input.emotionId}
              onClick={() => onEmotionSelect(emotion.emotionId)}
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <textarea
          name='content'
          placeholder='오늘은 어땠나요?'
          onChange={onChangeInput}
        />
      </section>
      <section className='button_section'>
        <Button text='취소하기' onClick={() => nav(-1)} />
        <Button
          text='작성 완료'
          type='POSITIVE'
          onClick={onSubmitButtonClick}
        />
      </section>
    </div>
  );
}
