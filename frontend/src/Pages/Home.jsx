import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='flex flex-row gap-2 bg-amber-600 h-screen w-full'>
      <div className='h-full w-1/3 bg-amber-300'></div>
      <div className='h-full w-1/3 bg-amber-300'></div>
      <div className='h-full w-1/3 bg-amber-300'></div>
    </div>
  );
}