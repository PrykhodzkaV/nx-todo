// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

 import { useGetAllToDosQuery } from '@nx-todo/todo-feature-lib';
export function App() {
  const { data, loading, error } = useGetAllToDosQuery();
  console.log('data', data);
  return (<>
      <h1>ToDo</h1>
      {data?.todos?.map((item) => {
        return (
          <div>
            <h3>
              {item?.title} {item?.status + ''}
            </h3>
          </div>
        );
      })}
      </>
  );
}

export default App;
