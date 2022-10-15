import './App.css';
import Blogs from './components/Blogs';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Header />
      <Search />
      <Filter />
      <Blogs/>
      <Footer />
    </Provider>
    </div>
  );
}

export default App;
