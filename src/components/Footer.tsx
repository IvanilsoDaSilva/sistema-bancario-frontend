const Footer = () => {
  return (
    <footer className="">
      <div className="my-section bg-gray-900 text-white lg:flex grid grid-cols-1">
        <div className="w-full space-y-1 ">
          <span className="block font-bold text-2xl lg:text-left text-center">Sistema Bancario</span>
          <div className="flex items-center lg:justify-start justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-secondary lg:block hidden"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
              </svg>
            </div>
            <div>
              <span className="block text-sm text-primary">
                Instituto Federal FLuminense - Centro
              </span>
            </div>
          </div>
          <div className="flex items-center lg:justify-start justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-secondary lg:block hidden"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </div>
            <div>
              <span className="block text-sm text-primary">
                R. Dr. Siqueira 273, Campos dos Goytacazes, RJ
              </span>
            </div>
          </div>
          <div className="flex items-center text-sm lg:justify-start justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-secondary lg:block hidden"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </div>
            <div>
              <a
                href="https://github.com/ivanilsodasilva"
                title="O backend"
                className="hover:underline text-sm text-primary"
              >
                Ivanilso da Silva
              </a>
            </div>
          </div>
          <div className="flex items-center text-sm lg:justify-start justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-secondary lg:block hidden"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </div>
            <div>
              <a
                href="https://github.com/micaelgomestavares"
                title="O frontend"
                className="hover:underline text-primary"
              >
                Micael Gomes
              </a>
            </div>
          </div>
          <div className="flex items-center text-sm lg:justify-start justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-secondary lg:block hidden"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </div>
            <div>
              <a
                href="#"
                title="O vagabundo"
                className="hover:underline text-primary"
              >
                Caike Lobo
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:justify-start justify-center">
          <div className="lg:flex lg:justify-end justify-items-center grid grid-cols-1 gap-2 my-2">
            <a title="Sistema Bancario | Home" href="/"
                className="lg:w-auto lg:bg-transparent bg-primary w-full flex justify-center hover:underline text-sm lg:text-primary font-bold">Início</a>
            <a title="Sistema Bancario | Cliente" href="/about"
                className="lg:w-auto lg:bg-transparent bg-primary w-full flex justify-center hover:underline text-sm lg:text-primary font-bold">Cliente</a>
            <a title="Sistema Bancario | Administrador" href="/categories/services"
                className="lg:w-auto lg:bg-transparent bg-primary w-full flex justify-center hover:underline text-sm lg:text-primary font-bold">Administrador</a>
          </div>

          <div className="flex space-x-3 justify-center lg:justify-end">
            <a
              aria-label="Acessar Facebook"
              href="#"
              title="Facebook"
              className="bg-primary text-white py-2 px-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.258,4.458c0-0.144,0.02-0.455,0.06-0.931c0.043-0.477,0.223-0.976,0.546-1.5c0.32-0.522,0.839-0.991,1.561-1.406 C11.144,0.208,12.183,0,13.539,0h3.82v4.163h-2.797c-0.277,0-0.535,0.104-0.768,0.309c-0.231,0.205-0.35,0.4-0.35,0.581v2.59h3.914 c-0.041,0.507-0.086,1-0.138,1.476l-0.155,1.258c-0.062,0.425-0.125,0.819-0.187,1.182h-3.462v11.542H8.258V11.558H5.742V7.643 h2.516V4.458z" />
              </svg>
            </a>
            <a
              aria-label="Acessar Instagram"
              href="#"
              title="Instagram"
              className="bg-primary text-white py-2 px-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              aria-label="Acessar Linkedin"
              href="#"
              title="Linkedin"
              className="bg-primary text-white py-2 px-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              aria-label="Acessar YouTube"
              href="#"
              title="YouTube"
              className="bg-primary text-white py-2 px-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              aria-label="Acessar Twitter"
              href="#"
              title="Twitter"
              className="bg-primary text-white py-2 px-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 17 17"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="min-w-[400px] md:px-52 px-12 bg-gray-700 text-white">
        <span className="my-auto text-xs">
          Copyright © N/A. (Lei 9610 de 19/02/1998)
        </span>
      </div>
    </footer>
    //     <footer>
    //     <div className="bg-gray-900 text-gray-100">
    //         <div className="my-section lg:flex grid grid-cols-1">
    //             <div className="w-full justify-items-center lg:justify-items-start ">
    //                 <span className="block font-bold text-xl">Sistema Bancario</span>
    //                 <span className="block text-justify">Sistema desenvolvido para o curso de Bacharelado de Sistemas</span>

    //                 <div className="flex">
    //                     <div className="text-gray-100 mr-2">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24"
    //                             stroke="currentColor" stroke-width="2">
    //                             <path stroke-linecap="round" stroke-linejoin="round"
    //                                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    //                         </svg>
    //                     </div>
    //                     <div className="grid">
    //                         <div className="grid">
    //                             <a href="mailto:g8@g8online.com.br" title="Email"
    //                                 className="text-green-500 hover:text-green-700 h-9">g8@g8online.com.br</a>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className="flex">
    //                     <div className="text-gray-100 mr-2">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24"
    //                             stroke="currentColor" stroke-width="2">
    //                             <path stroke-linecap="round" stroke-linejoin="round"
    //                                 d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
    //                         </svg>
    //                     </div>
    //                     <div className="grid">
    //                         <div className="grid">
    //                             <a href="tel:22305211467" title="Contato celular"
    //                                 className="text-green-500 hover:text-green-700 h-9">(22) 3052-1146</a>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className="flex">
    //                     <div className="text-gray-100 mr-2">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24"
    //                             stroke="currentColor" stroke-width="2">
    //                             <path stroke-linecap="round" stroke-linejoin="round"
    //                                 d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
    //                         </svg>
    //                     </div>
    //                     <div className="grid">
    //                         <a href="tel:22988333357" title="Contato telefônico"
    //                             className="text-green-500 hover:text-green-700 h-9">(22) 9.8833-3357</a>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className="w-full justify-items-center lg:justify-items-start lg:my-0 my-2">
    //                 <div className="lg:flex lg:justify-around justify-items-center grid grid-cols-1 gap-2">
    //                     <a title="G8 Online | Home" href="/"
    //                         className="lg:w-auto lg:bg-transparent bg-gray-800 w-full flex justify-center text-green-500 hover:text-green-700">Home</a>
    //                     <a title="G8 Online | Sobre a empresa" href="/about"
    //                         className="lg:w-auto lg:bg-transparent bg-gray-800 w-full flex justify-center text-green-500 hover:text-green-700">Empresa</a>
    //                     <a title="G8 Online | Serviços" href="/categories/services"
    //                         className="lg:w-auto lg:bg-transparent bg-gray-800 w-full flex justify-center text-green-500 hover:text-green-700">Serviços</a>
    //                     <a title="G8 Online | Contato" href="/contact"
    //                         className="lg:w-auto lg:bg-transparent bg-gray-800 w-full flex justify-center text-green-500 hover:text-green-700">Contato</a>
    // 										<a title="G8 Online | Blog" href="/categories/blog"
    // 											className="lg:w-auto lg:bg-transparent bg-gray-800 w-full flex justify-center text-green-500 hover:text-green-700">Blog</a>

    //                 </div>

    //                 <div className="flex justify-center lg:justify-end pt-3 pb-3">
    //                     <a aria-label="Acessar Facebook" href="https://www.facebook.com/g8online.com.br" title="Facebook"
    //                         className="bg-green-700 hover:bg-green-900 dark:text-white dark:hover:text-white text-white hover:text-white font-bold py-2 px-2 rounded mx-2 ">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    //                             <path
    //                                 d="M8.258,4.458c0-0.144,0.02-0.455,0.06-0.931c0.043-0.477,0.223-0.976,0.546-1.5c0.32-0.522,0.839-0.991,1.561-1.406 C11.144,0.208,12.183,0,13.539,0h3.82v4.163h-2.797c-0.277,0-0.535,0.104-0.768,0.309c-0.231,0.205-0.35,0.4-0.35,0.581v2.59h3.914 c-0.041,0.507-0.086,1-0.138,1.476l-0.155,1.258c-0.062,0.425-0.125,0.819-0.187,1.182h-3.462v11.542H8.258V11.558H5.742V7.643 h2.516V4.458z" />
    //                         </svg>
    //                     </a>
    //                     <a aria-label="Acessar Instagram" href="https://www.instagram.com/g8online/" title="Instagram"
    //                         className="bg-green-700 hover:bg-green-900 dark:text-white dark:hover:text-white text-white hover:text-white font-bold py-2 px-2 rounded mx-2 ">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    //                             <path
    //                                 d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    //                         </svg>
    //                     </a>
    //                     <a aria-label="Acessar Linkedin"
    //                         href="https://www.linkedin.com/company/g8solu%C3%A7%C3%B5esintegradasemsms" title="Linkedin"
    //                         className="bg-green-700 hover:bg-green-900 dark:text-white dark:hover:text-white text-white hover:text-white font-bold py-2 px-2 rounded mx-2 ">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    //                             <path
    //                                 d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    //                         </svg>
    //                     </a>
    //                     <a aria-label="Acessar YouTube" href="https://www.youtube.com/channel/UC3M4OOMHwWOh2Jrb56A3aqg"
    //                         title="YouTube"
    //                         className="bg-green-700 hover:bg-green-900 dark:text-white dark:hover:text-white text-white hover:text-white font-bold py-2 px-2 rounded mx-2 ">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    //                             <path
    //                                 d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    //                         </svg>
    //                     </a>
    // 										<a aria-label="Acessar Twitter" href="#"
    //                         title="Twitter"
    //                         className="bg-green-700 hover:bg-green-900 dark:text-white dark:hover:text-white text-white hover:text-white font-bold py-2 px-2 rounded mx-2 ">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 17 17">
    // 													<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
    // 											</svg>
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    //     <div className="bg-gray-700 text-gray-200">
    //         <div className="flex container max-w-4xl items-center py-2">
    //             <span className="text-xs">Copyright &copy; N/A. (Lei 9610 de 19/02/1998)</span>
    //         </div>
    //     </div>
    // </footer>
  );
};

export default Footer;
