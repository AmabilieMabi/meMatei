import NoticiaComponente from './componentes/noticiasComponentes';
import img from './img/phoca_thumb_l_image03_grd.png';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1 className='title'> Imagem </h1>
       <NoticiaComponente titulo="Titulo da Noticia"
       imagem={img}
       alt="Abacaxi doce"
       descricao="Olha o Abacaxi"
       categoria="abacaxizinho"/>
    </div>
  );
}

export default App;
