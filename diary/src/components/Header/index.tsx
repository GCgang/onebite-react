import './Header.css';
import { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  leftChild?: ReactNode;
  rightChild?: ReactNode;
}

export default function Header({ title, leftChild, rightChild }: HeaderProps) {
  return (
    <header className='Header'>
      <div className='header_left'>{leftChild}</div>
      <div className='header_center'>{title}</div>
      <div className='header_right'>{rightChild}</div>
    </header>
  );
}
