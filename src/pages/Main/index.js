import Header from "../../components/Header";
import TransationsList from "../../components/TransationsList";
import "./styles.css";

function Main() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <TransationsList />
      </main>
    </div>
  );
}

export default Main;
