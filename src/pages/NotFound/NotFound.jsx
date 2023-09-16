import './NotFound.css'

const NotFound = () => {

  document.title = "Not Found"

  return (
    <div className='notFoundPage'>
        <h1>404</h1>
        <p>Esta página não existe!</p>
    </div>
  )
}

export default NotFound