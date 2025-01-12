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
      <div className="flex justify-center space-x-4 p-4 mt-">
        <div className="w-1/3 h-96 rounded overflow-hidden shadow-lg" style={{backgroundColor:"#9EBC9E"}}>
          <img className="w-full h-2/3 object-cover" src="https://via.placeholder.com/300" alt="Imagen 1" />
          <div className="px-6 py-4 h-1/3 flex flex-col justify-center">
            <p className="text-gray-700 text-base">
              Descripción de la primera tarjeta.
            </p>
          </div>
        </div>
        <div className="w-1/3 h-96 rounded overflow-hidden shadow-lg" style={{backgroundColor:"#9EBC9E"}}>
          <img className="w-full h-2/3 object-cover" src="https://via.placeholder.com/300" alt="Imagen 2" />
          <div className="px-6 py-4 h-1/3 flex flex-col justify-center">
           
            <p className="text-gray-700 text-base">
              Descripción de la segunda tarjeta.
            </p>
          </div>
        </div>
        <div className="w-1/3 h-96 rounded overflow-hidden shadow-lg"style={{backgroundColor:"#9EBC9E"}}>
          <img className="w-full h-2/3 object-cover" src="https://via.placeholder.com/300" alt="Imagen 3" />
          <div className="px-6 py-4 h-1/3 flex flex-col justify-center">
           
            <p className="text-gray-700 text-base">
              Descripción de la tercera tarjeta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
