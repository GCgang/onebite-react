import './Button.css';

interface ButtonProps {
  type?: string;
  onClick?: () => void;
  text: string;
}

export default function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
}
