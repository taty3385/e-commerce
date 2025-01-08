
export default function Secciones() {
  return (
    <div className="flex justify-center space-x-4 p-4 mt-8">
      <div className="w-1/2 h-96 mr-4 rounded overflow-hidden shadow-lg"style={{backgroundColor:"#9EBC9E"}}>
        <img className="w-full" src="https://via.placeholder.com/300" alt="Imagen 1" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card 1</div>
          <p className="text-gray-700 text-base">
            Descripción de la primera tarjeta.
          </p>
        </div>
      </div>
      <div className="w-1/2 h-96 rounded overflow-hidden shadow-lg" style={{backgroundColor:"#9EBC9E"}}>
        <img className="w-full" src="https://via.placeholder.com/300" alt="Imagen 2" />
        <div className="px-6 py-4">
          <div className=" font-bold text-xl mb-2">Card 2</div>
          <p className="text-gray-700 text-base">
            Descripción de la segunda tarjeta.
          </p>
        </div>
      </div>
    </div>
  );
}