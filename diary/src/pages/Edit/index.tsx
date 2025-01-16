import { useParams } from 'react-router-dom';

export default function Edit() {
  const { id } = useParams<{ id: string }>();

  return <div>Edit {id}</div>;
}
