import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';


export default function PraiaPage() {
  return (
    <main>
      <Navbar/>
      
      <Image 
        src="/furb.jpg" 
        alt="Campus da FURB" 
        width={600} 
        height={400} 
      />

      <h1>As Praias de Florianópolis</h1>

      <p>
      Florianópolis é famosa por suas praias diversificadas, capazes de agradar desde surfistas experientes até famílias em busca de tranquilidade.
      </p>

      <h2>Praia da Joaquina</h2>

      <p>
      A Praia da Joaquina é uma das mais conhecidas da cidade.<br/>
      Suas ondas fortes atraem surfistas durante todo o ano.<br/>
      Além disso, as dunas próximas são ideais para a prática de sandboard e para apreciar belas paisagens.
      </p>

      <h2>Praia dos Ingleses</h2>

      <p>
      Localizada no norte da ilha, a Praia dos Ingleses possui águas cristalinas e ótima infraestrutura turística.<br/>
      É uma excelente opção para famílias e visitantes que procuram conforto e lazer.
      </p>

      <h2>Praia Mole</h2>

      <p>
      Muito popular entre os jovens, a Praia Mole combina natureza exuberante, mar agitado e um ambiente descontraído.<br/>
      É um dos principais pontos de encontro durante o verão.
      </p>

      <h2>Praia do Campeche</h2>

      <p>
      A Praia do Campeche chama atenção por sua extensa faixa de areia e pela vista para a Ilha do Campeche.<br/>
      O local é considerado um dos mais bonitos e preservados da região.
      </p>

      <h2>Lagoinha do Leste</h2>

      <p>
      Para quem gosta de aventura, a Lagoinha do Leste é um destino imperdível.<br/>
      O acesso é feito por trilhas e a recompensa é uma das paisagens mais bonitas de Florianópolis.
      </p>
    </main>
  );
}