import logo from './logo.svg';
import './App.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { Counter } from './counter';
import Copy from './Copy';
// import Counter2 from './counter2';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter></Counter>
      {/* <Counter2></Counter2> */}
      <Copy></Copy>
    </div>
    </Provider>
  );
}

export default App;
