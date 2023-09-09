import RoundLoader from '@/@core/common/loader/round-loader';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import logoImage from '../assets/logo-loader1.png';
import SpinLoader from '@/@core/common/loader/spin-loader';
import SingleRoundLoader from '@/@core/common/loader/single-round-loader';
import Login from './auth/page';

export default function Home() {
  /*  async function fetchTeam(id) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
 
export default async function Profile({ params }) {
  const team = await fetchTeam(params.id)
  if (!team) {
    redirect('/login')
  }
 
 
}
   */ return (
    <main>
      <div className="flex justify-center h-[80vh] items-center">
        <Login />
      </div>
    </main>
  );
}
