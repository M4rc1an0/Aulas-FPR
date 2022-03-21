import './App.css';

function App() {

  const eventosEsportivos = [
    {
      evento: 'Olimpiadas',
      organizador: 'Toshiro Muto',
      data: '15/04/1998',
      modalidade: [
        {
          esporte: 'Futebol',
          id: 1
        },
        {
          esporte: 'Basquete',
          id: 2
        }
      ]
    },
    {
      evento: 'Esportes Bela Vaq',
      organizador: 'Belinha',
      data: '21/03/2022',
      modalidade: [
        {
          esporte: 'Basquete',
          id: 3
        },
        {
          esporte: 'Futebol',
          id: 4
        }
      ] 
    },
  ]

  return (
    <div className="App">
      {
       eventosEsportivos.map(eventos => {
         const modalidade = eventos.modalidade.filter(esporteCerto => {
           return esporteCerto.esporte !== 'Futebol'
         }
           
         )
         return (
           <>
           <h2>Evento:</h2>
            <p>{eventos.evento}</p>
            <h2>Organizador:</h2>
            <p>{eventos.organizador}</p>
            <h2>Data:</h2>
            <p>{eventos.data}</p>
            {modalidade.map(esporte => {
              return <><h2>Esporte:</h2><p>{esporte.esporte}</p></>
            })}
           </>
         )
       }) 
      }
    </div>
  );
}

export default App;
