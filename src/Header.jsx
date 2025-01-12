// Esta es la barra de navegación de la página, se muestra en la parte superior de la página y contiene los enlaces a las diferentes secciones de la página.


const navigation = [
  { name: "Accesorios", href: "#", current: true },
  { name: "Maquillaje", href: "#", current: false },
  { name: "SkinCare", href: "#", current: false },
  { name: "Promociones", href: "#", current: false },
];

export default function Header() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-98vw"style={{ backgroundColor: "#E0479E" ,margin:0 }}>
      <div className="w-98vw  lg:px-8" >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="hola"
            />
            <span className="ml-3 text-white text-lg font-semibold">
              Koquete
            </span>
          </div>
          <div className="flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={item.current ? { backgroundColor: "#9EBC9E", color: "white" } : {}}
                  className={classNames(
                    !item.current && "text-gray-300  hover:text-white",
                    "px-3 py-2 rounded-md text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}