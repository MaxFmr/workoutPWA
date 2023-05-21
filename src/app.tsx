import './app.css';
import data from '../data.json';
import { useState, useEffect } from 'preact/hooks';
import Card from './components/card';
import List from './components/list';
import { Workout } from './types';

export function App() {
  const [workoutPlaned, setWorkoutPlaned] = useState(false);
  const [workout, setWorkout] = useState<Workout>();

  //date formatting for today
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = year + '-' + month + '-' + day;

  //date formatting for entire date
  const entireDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  useEffect(() => {
    //cache delete
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        caches.delete(cacheName);
      });
    });

    //data setup
    data.map((item) => {
      console.log(item.date, 'item.date');
      console.log(today, 'today');
      if (item.date === formattedDate) {
        setWorkoutPlaned(true);
        setWorkout(item);
      }
    });
  }, []);

  return (
    <>
      <Card
        workoutPlaned={workoutPlaned}
        entireDate={entireDate}
        workout={workout}
      />
      <List data={data} formattedDate={formattedDate} />
    </>
  );
}
