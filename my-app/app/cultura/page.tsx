import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';

export default function CHPage() {
  return (
    <main>
      <Navbar/>
      
      {}

      <h1>Cultura e História de Florianópolis</h1>

      <p>
      A história de Florianópolis é marcada pela influência dos colonizadores portugueses, especialmente dos açorianos que chegaram à região no século XVIII.
      </p>

      <Image 
        src="/historia.jpg" 
        alt="centro historico" 
        width={600} 
        height={400} 
        style={{ marginBottom: '1.5rem', borderRadius: '8px' }}
      />

      <h2>Origem da Cidade</h2>

      <p>
      A região era originalmente habitada por povos indígenas.<br/>
      Com a chegada dos portugueses surgiram os primeiros povoados que deram origem à atual capital catarinense.
      </p>

      <h2>Herança Açoriana</h2>

      <p>
      A cultura açoriana está presente na arquitetura, na culinária, no artesanato e nas festas populares.<br/>
      Essa influência é um dos principais elementos da identidade local.
      </p>

      <h2>Centro Histórico</h2>

      <p>
      O centro da cidade preserva construções antigas e importantes marcos históricos.<br/>
      É uma região que recebe visitantes durante todo o ano.
      </p>

      <h2>Lendas da Ilha</h2>

      <p>
      Florianópolis é conhecida por diversas lendas folclóricas envolvendo bruxas, tesouros escondidos e seres misteriosos.<br/>
      Essas histórias ajudaram a popularizar o apelido "Ilha da Magia".
      </p>

      <h2>Tradições Populares</h2>

      <p>
      Festas religiosas, apresentações folclóricas e celebrações comunitárias mantêm vivas as tradições transmitidas entre gerações.<br/>
      Essas manifestações fortalecem a cultura local até os dias atuais.
      </p>
    </main>
  );
}