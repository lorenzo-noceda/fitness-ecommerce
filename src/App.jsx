import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import MainCarousel from "./components/Carousel";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={"¡Bienvenidos a la mejor tienda de suplementos deportivos!"}
      />
      <MainCarousel />
    </>
  );
};

export default App;
