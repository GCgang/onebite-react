import { useParams } from 'react-router-dom';

export default function Diary() {
  const { id } = useParams<{ id: string }>();

  return <div>Diary {id}</div>;
}
