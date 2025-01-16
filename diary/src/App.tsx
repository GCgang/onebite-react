import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import { getEmotionImage } from './util/getEmotionImage';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };
  return (
    <>
      <Header
        title='제목'
        leftChild={<Button text='left' />}
        rightChild={<Button text='right' />}
      ></Header>
      <Button text='버튼' />
      <Button type='POSITIVE' text='버튼' />
      <Button type='NEGATIVE' text='버튼' />
      <div>
        <img src={getEmotionImage(1) ?? ''} alt='Emotion' />
        <img src={getEmotionImage(2) ?? ''} alt='Emotion' />
        <img src={getEmotionImage(3) ?? ''} alt='Emotion' />
        <img src={getEmotionImage(4) ?? ''} alt='Emotion' />
        <img src={getEmotionImage(5) ?? ''} alt='Emotion' />
      </div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
        <button onClick={onClickButton}>New 페이지로 이동</button>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
