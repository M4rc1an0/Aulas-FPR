import './App.css';

function Home() {
    
    return (
        <div className='container'>
          <div className='style-button'>
            <button 
              onClick={() => {window.location.href='/split?app=kanui&cor=preto&tipodeapp=roupas'}}>
                Split
            </button>
            <button 
              onClick={() => {window.location.href='/querystring?nome=rogerio&altura=alto&peso=magro&hobby=skate&trabalho=desenvolvedor'}}>
                Query-string
            </button>
          </div>
        </div>
      );
  }
  
  export default Home;