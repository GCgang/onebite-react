import {
  emotion1,
  emotion2,
  emotion3,
  emotion4,
  emotion5,
} from '../assets/emotion';

export function getEmotionImage(emotionId: number) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
