import './App.css';
import splitUrl from './utils/index'

function Split() {

  return (
      <div className='container'>
        {splitUrl()}
      </div>
  )
}

export default Split