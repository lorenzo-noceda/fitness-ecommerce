import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CarouselBootstrap from "./components/CarouselBootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <h1 className="title lead">
        ¡Bienvenidos a la mejor tienda de suplementos deportivos!
      </h1>
      <CarouselBootstrap />
      <ItemListContainer greeting={"Catalogo de productos"} />
      <ItemDetailContainer />
    </>
  );
};

export default App;
