
import {Content, NarutoImg } from "./AppStyle";
import narutoImg from "./assets/naruto.png";
import { Quotes } from "./components/Quotes";

function App() {
  return (
    <Content className="App">
      <Quotes quote='test quote' speaker='random speaker'/>
      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>
  );
}


export default App;
