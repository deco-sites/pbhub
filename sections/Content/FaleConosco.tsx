export default function ContactForm() {
  return (
    <div className="flex justify-center items-center h-screen bg-primary-500">
      <div className="w-full max-w-4xl p-5 flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-white mb-8">Fale Conosco</h1>
        <form className="w-full md:w-2/3 lg:w-1/2 bg-white rounded-lg shadow-md p-5">
          {/* Campo Nome */}
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Nome:
              <input
                type="text"
                id="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
              />
            </label>
          </div>

          {/* Campo Nome da Empresa */}
          <div className="mb-4">
            <label className="block mb-2" htmlFor="company">
              Nome da Empresa:
              <input
                type="text"
                id="company"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
              />
            </label>
          </div>

          {/* Campo Email */}
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
              />
            </label>
          </div>

          {/* Campo Telefone */}
          <div className="mb-4">
            <label className="block mb-2" htmlFor="phone">
              Telefone:
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
              />
            </label>
          </div>

          {/* Campo Mensagem */}
          <div className="mb-4">
            <label className="block mb-2" htmlFor="message">
              Mensagem:
              <textarea
                id="message"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
                style={{ minHeight: "100px" }}
              />
            </label>
          </div>

          {/* Botão Enviar */}
          <button
            type="button"
            className="px-4 py-2 rounded text-white bg-[#d53226] hover:bg-[#c22e1f] focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
