import React from 'react'

const Banner = () => {
  return (
    <div className="md:bg-[url('./images/fundo2_d.jpg')]  bg-[url('./images/fundo1_m.jpg')] bg-center h-screen bg-no-repeat flex flex-col justify-start pl-8">
      {/* <img src="./assets/images/fundo1_m.jpg" alt="" /> */}
      <h1 className=" mt-[200px] mb-3">Transforme visitantes em clientes e <span className="text-green-400 ">aumente suas vendas</span> </h1>
      <h2 >Crie uma experiência única e atraente com <span className="text-green-400 ">páginas otimizadas para conversão e resultados reais.</span> </h2>

      <div>
        <button className="cursor-pointer py-5 px-4 fit p-5 bg-green-600 hover:bg-green-800  text-white font-bold mt-8 text-3xl border-none rounded ">
          Quero aumentar as vendas
        </button>
      </div>
    </div>
  )
}

export default Banner
