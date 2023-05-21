import { Workout } from '../types';

interface ListProps {
  data: Workout[];
  formattedDate: string;
}

const List = ({ data, formattedDate }: ListProps) => {
  return (
    <div className='list'>
      <h2>Entrainements à venir : </h2>
      <ul>
        {data.map((item) => {
          const date = new Date(item.date);
          const today = new Date(formattedDate);

          return (
            date > today && (
              <li>
                <h3>
                  {date.toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  :
                </h3>

                <p>{item.workout}</p>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};
export default List;
