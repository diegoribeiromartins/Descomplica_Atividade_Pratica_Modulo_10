import Header from "./components/header";
import Footer from "./components/footer";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-pages">
        <ListarTarefa />
      </div>
      <Footer />
    </div>
  );
}

export default App;
