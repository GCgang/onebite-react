import './Button.css';

interface IButtonProps {
  type?: string;
  onClick?: () => void;
  text: string;
}

export default function Button({ text, type, onClick }: IButtonProps) {
  return (
    <button className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
}
