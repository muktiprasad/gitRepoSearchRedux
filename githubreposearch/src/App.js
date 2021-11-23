import { Provider } from 'react-redux';
import store from './redux/Store';
import './ProductThumbnail.css';
import Search from './component/Search'

function App() {
  return (
    <Provider store={store}>
    <div className="bodyClass">
       <Search 
       header="Seach the Git Repo"
        inputText="Search Git Repo" 
        buttonText="Search"
         />
    </div>
    </Provider>
  );
}

export default App;
