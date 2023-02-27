import './style/App.css';
import Header from './components/Header/Header';
import LayoutVertical from './components/LayoutVertical';
import UserInfo from './components/UserInfos';
import Charts from './components/charts/Charts';
import Nutriments from './components/Nutriments';
import Datas from './data/formatData';

console.log(Datas);

function App() {
  return (
    <div className="App">
      <Header />
      <LayoutVertical />
      <div className="main">
        <section className="sectionUp">
          <UserInfo />
        </section>
        <section className="sectionDown">
          <Charts />
          <Nutriments />
        </section>
      </div>
    </div>
  );
}

export default App;
