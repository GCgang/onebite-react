import './Header.css';
import { ReactNode } from 'react';

interface IHeaderProps {
  title: string;
  leftChild: ReactNode;
  rightChild: ReactNode;
}

export default function Header({ title, leftChild, rightChild }: IHeaderProps) {
  return (
    <header className='Header'>
      <div className='header_left'>{leftChild}</div>
      <div className='header_center'>{title}</div>
      <div className='header_right'>{rightChild}</div>
    </header>
  );
}
