import CarrucelPlay from "./CarrucelPlay";
import Header from "./Header";
import Promocion from "./Promocion";
import Carrucel from "./Carrucel";
import Secciones from "./Secciones";
export default function Home() {
  return (
    <div >
      <Promocion />
      <Header />
      <CarrucelPlay />
      <Carrucel />
      <Secciones />
      <div className="h-24 flex justify-center items-center">
        <p className="text-center">Toda Moda new</p>
      </div>
    </div>
  );
}
