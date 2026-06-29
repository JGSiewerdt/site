import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';

export default function GastroPage() {
  return (
    <main>
      <Navbar/>
      
      {}


      <h1>Sabores de Florianópolis</h1>

      <p>
      A gastronomia de Florianópolis é fortemente influenciada pela cultura açoriana e pela abundância de frutos do mar encontrados na região.
      </p>

            <Image 
        src="/camarao.jpg" 
        alt="Sequencia de camarao"
        width={600} 
        height={400} 
        style={{ marginBottom: '1.5rem', borderRadius: '8px' }}
      />

      <h2>Sequência de Camarão</h2>

      <p>
      Um dos pratos mais famosos da cidade, a sequência de camarão reúne diversas preparações servidas em etapas.<br/>
      Entre elas estão camarão empanado, grelhado, ao alho e óleo e ao molho especial.
      </p>

      <h2>Ostras Frescas</h2>

      <p>
      Florianópolis é considerada uma das maiores produtoras de ostras do Brasil.<br/>
      As ostras podem ser servidas frescas, gratinadas ou acompanhadas de molhos variados.
      </p>

      <h2>Tainha</h2>

      <p>
      A tainha é um peixe muito tradicional na culinária local.<br/>
      Durante a temporada de pesca, torna-se um dos pratos mais consumidos pelos moradores e turistas.
      </p>

      <h2>Pirão</h2>

      <p>
      O pirão é um acompanhamento típico preparado com caldo de peixe e farinha de mandioca.<br/>
      Ele complementa diversos pratos da culinária catarinense.
      </p>

      <h2>Influência Açoriana</h2>

      <p>
      Os imigrantes açorianos trouxeram receitas e costumes que permanecem vivos até hoje.<br/>
      Muitos pratos valorizam ingredientes simples e sabores tradicionais.
      </p>
    </main>
  );
}