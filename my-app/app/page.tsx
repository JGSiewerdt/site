import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/navbar';

export default function HomePage() {
  return (
    <main className=''>

      <Navbar/>
      
      {}

      <h1>Florianópolis: A Ilha da Magia</h1>

      <p>
      Bem-vindo ao guia de Florianópolis, uma das cidades mais encantadoras do Brasil.<br/>
      Conhecida como "Ilha da Magia", a capital de Santa Catarina reúne praias paradisíacas,
      rica cultura açoriana, excelente gastronomia e paisagens naturais impressionantes.
      </p>

      <p>
      Com mais de 40 praias espalhadas pela ilha, Florianópolis atrai turistas de todo o país e do exterior.<br/>
      Além das belezas naturais, a cidade oferece trilhas, lagoas, dunas, centros históricos e uma culinária baseada em frutos do mar.
      </p>

      <p>
      Neste site você encontrará informações sobre as principais praias, a gastronomia típica da região e a história que faz de Florianópolis um destino tão especial.
      </p>

      <Image 
        src="/floripa.jpg" 
        alt="floripa" 
        width={600} 
        height={400} 
        style={{ marginBottom: '1.5rem', borderRadius: '8px' }}
      />


      <h2>O que você vai encontrar</h2>

      <h3>Praias</h3>
      <p>
      Conheça algumas das praias mais famosas da cidade e descubra qual combina mais com o seu estilo de viagem.
      </p>

      <h3>Gastronomia</h3>
      <p>
      Explore os sabores da culinária local e os pratos que representam a tradição catarinense.
      </p>

      <h3>Cultura e História</h3>
      <p>
      Descubra como a influência açoriana ajudou a construir a identidade cultural da cidade.
      </p>
    </main>
  );
}