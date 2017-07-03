import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/about'><a>About</a></Link> |<br></br>
        <Link href='/intro'><a>Introducción</a></Link>|<br></br>
        <Link href='/ch1'><a>Chapter1</a></Link> |<br></br>
        <Link href='/ch2'><a>Chapter2</a></Link> |<br></br>
        <Link href='/ch3'><a>Chapter3</a></Link> |<br></br>
        <Link href='/ch4'><a>Chapter4</a></Link> |<br></br>
        <Link href='/ch5'><a>Chapter5</a></Link> |<br></br>
        <Link href='/ch6'><a>Chapter6</a></Link> |<br></br>
        <Link href='/ch7'><a>Chapter7</a></Link> |<br></br>
        <Link href='/ch8'><a>Chapter8</a></Link> |<br></br>
        <Link href='/Post5'><a>Post5</a></Link> |<br></br>
        <Link href='/reactiva'><a>Program Reactive</a></Link> |<br></br>
        <Link href='/diferencias'><a>Diferencias ES6</a></Link> |<br></br>
        <Link href='/game'><a>Game</a></Link> |<br></br>
        <Link href='/negri'><a>Negrito</a></Link> |<br></br>
<Link href='/reactweb'><a>reactweb</a></Link> |<br></br>
       
      </nav>
    </header>

    { children }

    <footer>
       <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/about'><a>About</a></Link> |<br></br>
        <Link href='/intro'><a>Introducción</a></Link>|<br></br>
        <Link href='/ch1'><a>Chapter1</a></Link> |<br></br>
        <Link href='/ch2'><a>Chapter2</a></Link> |<br></br>
        <Link href='/ch3'><a>Chapter3</a></Link> |<br></br>
        <Link href='/ch4'><a>Chapter4</a></Link> |<br></br>
        <Link href='/ch5'><a>Chapter5</a></Link> |<br></br>
        <Link href='/ch6'><a>Chapter6</a></Link> |<br></br>
        <Link href='/ch7'><a>Chapter7</a></Link> |<br></br>
        <Link href='/ch8'><a>Chapter8</a></Link> |<br></br>
        <Link href='/Post5'><a>Post5</a></Link> |<br></br>
        <Link href='/reactiva'><a>Program Reactive</a></Link> |<br></br>
           <Link href='/diferencias'><a>Diferencias ES6</a></Link> |<br></br>
           <Link href='/game'><a>Game</a></Link> |<br></br>
           <Link href='/negri'><a>Negrito</a></Link> |<br></br>
           <Link href='/reactweb'><a>reactweb</a></Link> |<br></br>
      </nav>
    </footer>
  </div>
)
