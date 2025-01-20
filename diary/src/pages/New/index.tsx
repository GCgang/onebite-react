import Header from '../../components/Header';
import Editor from '../../components/Editor';
import Button from '../../components/Button';

export default function New() {
  return (
    <main>
      <Header title='새 일기 쓰기' leftChild={<Button text='< 뒤로가기' />} />
      <Editor />
    </main>
  );
}
