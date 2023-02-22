import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={"¡Bienvenidos a la mejor tienda de suplementos deportivos!"}
      />
      <Carousel />
    </>
  );
};

export default App;
