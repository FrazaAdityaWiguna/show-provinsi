import { Provider } from 'react-redux';
import { store } from './redux';
import ShowData from './components/ShowData';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <ShowData />
      </Provider>
    </div>
  );
}

export default App;
