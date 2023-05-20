import './app.css';
import data from '../data.json';
import { useState, useEffect } from 'preact/hooks';

interface Workout {
  date: string;
  workout: string;
}

export function App() {
  const [workoutPlaned, setWorkoutPlaned] = useState(false);
  const [workout, setWorkout] = useState<Workout>();

  const today = new Date().toISOString().split('T')[0];

  const entireDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  useEffect(() => {
    data.map((item) => {
      if (item.date === today) {
        setWorkoutPlaned(true);
        setWorkout(item);
      }
    });
  }, []);

  return (
    <>
      <div className='card'>
        {workoutPlaned ? (
          <div>
            <h1>{entireDate}</h1>

            <div>
              <h2>Votre entrainement :</h2>
            </div>
            <div>
              <p>{workout && workout.workout}</p>
            </div>
          </div>
        ) : (
          <div>
            <h1>{entireDate}</h1>
            <p>Pas d'entrainement planifié aujourd'hui.</p>
          </div>
        )}
      </div>
      <div className='liste'>
        <h2>Entrainements à venir : </h2>
        <ul>
          {data.map((item) => {
            const date = new Date(item.date);
            const today = new Date();
            return (
              date > today && (
                <li>
                  <h3>
                    {date.toLocaleDateString('fr-FR', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}{' '}
                    :
                  </h3>

                  <p>{item.workout}</p>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </>
  );
}
