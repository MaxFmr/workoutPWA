export interface CardProps {
  workoutPlaned: boolean;
  entireDate: string;
  workout:
    | {
        date: string;
        workout: string;
      }
    | undefined;
}

const Card = ({ workoutPlaned, entireDate, workout }: CardProps) => {
  return (
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
  );
};
export default Card;
