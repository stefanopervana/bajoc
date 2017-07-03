import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='negrito'>
 <div>
    
     
                <style jsx>{`

                    .col-md-6 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 1100px;
                        background-color: #E8EDEE;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        color: #2D0D0D;
                        line-height: 1.1;
                        padding: 4.7em;

                    }

                    .home {
                        margin: 1.5em 0;
                        
                    }

                    h1 {
                        color: #867452;
                        font-size: 60px;
                    }

                    h2 {
                        color: #867452;
                        font-size: 40px;
                    }
                        h3 {
                        color: #867452;
                        font-size: 30px;
                    }


                    .it, .listit {
                        color: brown;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }
                    .p, .listitem {
                        color: #75AFAD;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }

                    pre {
                    display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 16px
}

                

                    code
                    {
                    margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;
                    }
                    code strong
                    {
                    color:#000;
                        background:#F5FD11;
                        padding:1px;
                        font-weight:normal;
                    }

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                `}</style>

              <div className="col-md-6">  

<p className="it">El término "universal" es un término acuñado por la comunidad para la creación de aplicaciones web que se renderizan felizmente en el servidor. Es posible que estés familiarizado con "isomorfo" también, pero el objetivo de este artículo no es el debatir nombres; vamos a aprender cómo construir aplicaciones React dictadas por el servidor con <a href="https://github.com/zeit/next.js">Next.js</a> .</p>

<p className="p">The term "universal" is a community-coined term for building web apps that render happily on a server. You might be familiar with "isomorphic" as well but the goal of this article is not to debate names; we are going to learn how to build server-rendered React apps with <a href="https://github.com/zeit/next.js">Next.js</a>.</p>
<p className="it">Hemos hablado de la construcción con <a href="https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app">React del lado del servidor</a>. Hoy vamos a discutir el tema, ya que es más importante.</p>

<p className="p">We've talked about building <a href="https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app">React server-side</a> before. Today we'll discuss the topic more since it's an important one.</p>
<h2 id="toc-why-build-universal-apps">
    <a href="#toc-why-build-universal-apps">
      <span class="icon">#</span>
      Why Build Universal Apps.
    </a> 
  </h2>

<p className="it">Las apps en React implementan la ideología DOM virtual que es una abstracción de la real/original DOM. Esta abstracción es muy útil para el renderizado de aplicaciones, ya que podemos tener una parte de la DOM, se unen todos los datos que necesitamos para unirse, e insertar de nuevo al árbol DOM originales. Esto es de ninguna manera estandarizado y es sólo un concepto que los frameworks frontales utilizan para hacer mejor experiencia al usuario de una historia real.</p>

<p className="p">React apps implement the virtual DOM ideology which is an abstraction of the real/original DOM. This abstraction is very useful to app performance because we can take a portion of the DOM, bind whatever data we need to bind, and insert back to the original DOM tree. This is in no way standardized and is just a concept that front-end frameworks utilize to make better user experience a true story.</p>
<p className="it">Al igual que cada gran cosa viene con un precio, el DOM virtual plantea un problema. El DOM original que fue recibido en base a información proporcionada por el servidor se ha perdido. Es posible que te preguntes si importa - no y vamos a ver porque.</p>

<p className="p">Just as every great thing comes with a price, Virtual DOM poses a problem. The original DOM which was received based on some information provided by the server has been lost. You might be wondering why that matters -- it does and we will see how.</p>
<p className="it">Los motores de búsqueda no se preocupan por cómo se ha diseñado tu aplicación o cualquier ideología utilizada para ajustar y obtener el contenido adecuado. Sus robots no son tan inteligentes como para usar sus aplicaciones como lo haría un usuario real. Todo lo que les importa es que una vez que envían sus arañas para rastrear e indexar tu sitio, lo que el servidor proporciona en la primera solicitud es lo que se indexa. Esa es una mala noticia porque en ese momento tu aplicación carece del contenido real en el servidor. Esto es lo que la araña lleva a casa desde su sitio web:</p>

<p className="p">Search Engines do not care about how your app is architected or whatever ideology was used so as to adjust and fetch the right content. Their bots are not as smart as using your apps like a real user would. All they care about is that once they send their spiders to crawl and index your site, whatever the server provides on the first request is what gets indexed. That is bad news because at that time your app lacks the actual content on the server. This is what the spider takes home from your website:</p>

<p className="p"><img data-original="https://cdn.scotch.io/1/U50tlOGSyO3by8ApKik9_7Z3o6vh.jpg" alt="React Server-side Preview" class="loaded" src="https://cdn.scotch.io/1/U50tlOGSyO3by8ApKik9_7Z3o6vh.jpg" data-was-processed="true" width="100%" /></p>
<p className="it"><em>Avance</em></p>



<p className="p"><img data-original="https://cdn.scotch.io/1/CSjumcCyS4O0vG0Be72s_bLzZIWI.jpg" alt="React Server-side Preview" class="loaded" src="https://cdn.scotch.io/1/CSjumcCyS4O0vG0Be72s_bLzZIWI.jpg" data-was-processed="true" width="100%" /></p>


<p className="p"><em>Source</em></p>
<p className="it">Las cosas se ponen aún peor cuando intentas compartir tu aplicación en una plataforma de medios sociales como Facebook o Twitter. Vas a terminar con un comportamiento inesperado debido a que tu contenido real no se carga en el servidor, es sólo el punto de entrada (probablemente es el contenido de algunos <code>index.html</code>).</p>

<p className="p">Things even get worst when you try to share your app on a social media platform like Facebook or Twitter. You are going to end up with an unexpected behavior because your actual content is not loaded on the server, it's just the entry point (probably the content of some <code>index.html</code>) that is.</p>
<p className="it"><strong>¿Cómo podemos resolver estos problemas?</strong></p>

<p className="p"><strong>How do we tackle these problems?</strong></p>
<h2 id="toc-go-universal-with-nextjs">
    <a href="#toc-go-universal-with-nextjs">
      <span class="icon">#</span>
      Go Universal with Next.js
    </a> 
  </h2>
<p className="it">Las apps universales tienen una arquitectura de tal manera que renderiza tu aplicación tanto en el cliente como en el servidor. En el caso de React, el DOM virtual se cayó eventual en el servidor, así como el uso de algunos mecanismos que pudieran dar dolor de cabeza si no elegís la herramienta adecuada.</p>

<p className="p">Universal apps are architected in such manner that your app renders both on the client and the server. In React's case, the virtual DOM is eventually dropped on the server as well as using some mechanisms that might give you headache if you don't choose the right tool. </p>
<p className="it">He trabajado con algunas soluciones, pero Next.js es muy prometedor. Next se inspira en los <a href="http://rauchg.com/2014/7-principles-of-rich-web-applications/">7 Principios de aplicaciones dinámicas</a>. La idea es tener una buena experiencia durante el uso de aplicaciones web, así como la construcción de ésta. La experiencia debe sentirse natural.</p>

<p className="p">I have worked with few solutions but Next.js it is very promising. Next is inspired by the <a href="http://rauchg.com/2014/7-principles-of-rich-web-applications/">7 Principles of Rich Applications</a>. The idea is to have a good experience while using web app as well as building it. The experience should feel natural.</p>
<p className="it">Next ofrece más fuera de la caja:</p>

<p className="p">Next offers more out of the box:</p>
<ul><li className="it">Sin configuración o configuración adicional</li>

<li className="p">No configuration or additional setup</li>
<li className="it">Fácilidad con el componente y el estilo global con <a href="https://github.com/threepointone/glamor">Glamor</a></li>

<li className="p">Easy component and global style with <a href="https://github.com/threepointone/glamor">Glamor</a></li>
<li className="it">transpilation automática y bundling (con webpack y Babel)</li>

<li className="p">Automatic transpilation and bundling (with webpack and babel)</li>
<li className="it">Hot code reloading</li>

<li className="p">Hot code reloading</li>
<li className="it">El archivo estático del servidor. ./static/ se asigna a /static /</li>

<li className="p">Static file serving. ./static/ is mapped to /static/</li>
<li className="it">La obtención previa de ruta. <a href="https://github.com/zeit/next.js/wiki/Roadmap#prefetching">Próximamente</a></li>

<li className="p">Route prefetching. <a href="https://github.com/zeit/next.js/wiki/Roadmap#prefetching">Coming soon</a></li>
</ul><h2 id="toc-demo-barclays-premier-league-table">
    <a href="#toc-demo-barclays-premier-league-table">
      <span class="icon">#</span>
      DEMO: Barclays Premier League Table
    </a> 
  </h2>
<p className="it">Juntos vamos a hacer algo divertido con Next.js . Vamos a utilizar la <a href="http://api.football-data.org/">API de datos de Fútbol</a> para construir una pequeña aplicación sencilla que muestra la tabla de clasificación de la Premier League. Si eso suena divertido para vos, entonces vamos a empezar.</p>

<p className="p">Let's do something fun with Next.js together. We will use the <a href="http://api.football-data.org/">Football Data API</a> to build a simple small app that shows the Barclays Premier League ranking table. If that sounds like fun to you, then let's get started.</p>

<h3>Prerequisites</h3>
<p className="it">Los desarrolladores odian historias largas cuando se trata de la creación de un nuevo proyecto. No te preocupes, Next.js es sólo un paquete <code>npm</code> y todo lo que necesitas hacer es instalarlo a nivel local y empezar a construir tu aplicación:</p>

<p className="p">Developers hate long stories when it comes to setting up a new project. Worry not, Next.js is just an <code>npm</code> package and all you need do is install locally and start building your app:</p>
<pre data-title="bash" class=" language-bash"><code class=" language-bash"><span class="token comment" spellcheck="true"># Start a new project</span><br></br>
<span class="token function">npm</span> init<br></br>
<span class="token comment" spellcheck="true"># Install Next.js</span><br></br>
<span class="token function">npm</span> <span class="token function">install</span> next --save</code></pre>
<p className="it">Una vez que se haya completado la instalación, podes actualizar el script <code>start</code> para ejecutar <code>next</code>:</p>

<p className="p">Once the installation is completed, you can update the <code>start</code> script to run <code>next</code>:</p>
<pre data-title="json" class=" language-json"><code class=" language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
   <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"next"</span>
 <span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code></pre>
<p className="it">La instalación siguiente instala React, así que no hay necesidad de hacerlo de nuevo. Todo lo que hay que hacer ahora para poner una página Web representada en el servidor de salida es crear un directorio <code>pages</code> en la raíz de la aplicación y agregar un archivo <code>index.js</code>:</p>

<p className="p">The Next installation installs React as well so no need to do that again. All you need to do now to put a server-rendered web page out there is to create a <code>pages</code> directory in the root of the app and add an <code>index.js</code> file:</p>
<pre data-title="js" class=" language-js"><code class=" language-js"><span class="token comment" spellcheck="true">// ./pages/index.js</span>

<span class="token comment" spellcheck="true">// Import React</span><br></br>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><br></br>
<br></br>
<span class="token comment" spellcheck="true">// Export an anonymous arrow function</span><br></br>
<span class="token comment" spellcheck="true">// which returns the template</span><br></br>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span><br></br>
  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>This is just so easy<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><br></br>
<span class="token punctuation">)</span></code></pre>
<p className="it">Ahora ejecutá el siguiente comando para ver tu aplicación corriendo en localhost: 3000:</p>

<p className="p">Now run the following command to see your app running at localhost:3000:</p>
<pre data-title="bash" class=" language-bash"><code class=" language-bash"><span class="token comment" spellcheck="true"># Start your app</span><br></br>
<span class="token function">npm</span> start</code></pre>

<p className="p"><img data-original="https://cdn.scotch.io/1/nY32DqulSPGGcHYmxlgJ_w5yq8oZ.jpg" alt="" class="loaded" src="https://cdn.scotch.io/1/nY32DqulSPGGcHYmxlgJ_w5yq8oZ.jpg" data-was-processed="true" width="100%"/></p>
<p className="it"><em>Avance</em> <img data-original="https://cdn.scotch.io/1/mkOuBQMSZaCyzkcBnj9m_Zc2UYpI.jpg" alt="" class="loaded" src="https://cdn.scotch.io/1/mkOuBQMSZaCyzkcBnj9m_Zc2UYpI.jpg" data-was-processed="true" width="100%"/></p>

<p className="p"><em>Preview</em>
<img data-original="https://cdn.scotch.io/1/mkOuBQMSZaCyzkcBnj9m_Zc2UYpI.jpg" alt="" class="loaded" src="https://cdn.scotch.io/1/mkOuBQMSZaCyzkcBnj9m_Zc2UYpI.jpg" data-was-processed="true" width="100%"/></p>

<p className="p"><em>Source</em></p>

<p className="it">Apuesto a que esto era más fácil de lo que incluso te esperabas. Tenes una aplicación funcionando en unos 5 minutos que es dictada por el servidor. Estamos haciendo historia!</p>

<p className="p">I bet this was easier than you even expected. You have a running app in about 5 minutes that is server-rendered. We are making history! </p>

<h3>Page Head</h3>

<p className="it">Podemos añadir una sección <code>head</code> en la página con el fin de definir los estilos globales y establecer los meta detalles:</p>

<p className="p">We can add a <code>head</code> section in the page so as to define global styles and set meta details:</p>
<div className="image"><a></a><img src="/static/negri06.jpg" width="100%" alt="Image"/></div>
<p className="it">El componente <code>Head</code> que es proporcionado a continuación se utiliza para unir el <code>head</code> a la DOM de una página. Acabamos de envolver el supuesto contenido de <code>head</code> del DOM en el Next component <code>Head</code>.</p>

<p className="p">The <code>Head</code> component which is provided by Next is used to attach <code>head</code> to the DOM of a page. We just wrap the supposed <code>head</code> DOM content in <code>Head</code> Next component.</p>
<h2 id="toc-ajax-requests">
    <a href="#toc-ajax-requests">
      <span class="icon">#</span>
      Ajax Requests
    </a> 
  </h2>
<p className="it">Next proporciona una <code>getInitialProps</code> que se puede utilizar con <code>async</code> (opcional) que ayuda en la realización de las operaciones asíncronas. Podes utilizar la palabra clave <code>await</code> para manejar las operaciones que son diferidas. Mirá el siguiente ejemplo:</p>

<p className="p">Next provides a <code>getInitialProps</code> which can be used with <code>async</code> (optional) which assists in performing async operations. You can use the <code>await</code> keyword to handle operations that are deferred. See the following example:</p>
<div className="image"><a></a><img src="/static/negri07.jpg" width="100%" alt="Image"/></div>
<p className="it">Estamos utilizando la biblioteca <a href="https://github.com/mzabriskie/axios">axios</a> para llevar a cabo las peticiones HTTP. Las solicitudes son asíncronas por lo que necesitamos una manera de capturar la respuesta en el futuro, cuando esté disponible. Con <code>async...await</code>, podemos manejar la petición real asincrónica sin tener que utilizar devoluciones de llamada o promesas de cadena.</p>

<p className="p">We are using the <a href="https://github.com/mzabriskie/axios">axios</a> library to carry out HTTP requests. The requests are asynchronous so we need a way to catch the response in the future when it is available. With <code>async...await</code>, we can actual handle the async request without having to use callbacks or chain promises. </p>
<p className="it">Pasamos el valor a <code>props</code> devolviendo un objeto que las propiedades se pueden acceder desde el <code>props</code> como <code>this.props.data</code>:</p>

<p className="p">We pass the value to <code>props</code> by returning an object which properties can be accessed from the <code>props</code> like <code>this.props.data</code>:</p>
<div className="image"><a></a><img src="/static/negri08.jpg" width="100%" alt="Image"/></div>

<p className="p"><img data-original="https://cdn.scotch.io/1/v4WHllcRkSIokYKMGXow_E5ZVKx2.jpg" alt="React Universal App Progress" class="loaded" src="https://cdn.scotch.io/1/v4WHllcRkSIokYKMGXow_E5ZVKx2.jpg" data-was-processed="true" width="100%"/></p>
<p className="it">Ahora podemos enlazar los datos a la plantilla dictada por iteración sobre la propiedad <code>standing</code> de los datos y la impresión de cada una de las posiciones. Los nombres de las clases son como resultado del estilo <a href="http://purecss.io/">CSS puro</a> incluido en la cabeza que es una biblioteca CSS muy simple para empezar.</p>

<p className="p">We can now bind the data to the rendered template by iterating over the <code>standing</code> property on the data and printing each of the standings. The class names are as a result of the <a href="http://purecss.io/">Pure CSS</a> style included in the head which is a very simple CSS library to get you started.</p>
<h3>Routing</h3>
<p className="it">Puede que no seas consciente pero ya tenemos rutas en nuestra aplicación. Lo siguiente no requiere ninguna configuración adicional para el enrutamiento de configuración. Que acaba de seguir añadiendo rutas como páginas en el directorio <code>pages</code>. Vamos a crear otra ruta para mostrar más detalles acerca de un equipo:</p>

<p className="p">You might not be aware but we already have routes in our application. Next does not require any additional configuration to setup routing. You just keep adding routes as pages to the <code>pages</code> directory. Let's create another route to show more details about a team:</p>
<div className="image"><a></a><img src="/static/negri09.jpg" width="100%" alt="Image"/></div>
<p className="it">Podes navegar de una ruta a otra utilizando el componente <code>Link</code> del siguiente:</p>

<p className="p">You can navigate from one route to another using the <code>Link</code> component from Next:</p>
<div className="image"><a></a><img src="/static/negri10.jpg" width="100%" alt="Image"/></div>
<p className="it">Es hora de actualizar la página de detalles para mostrar más información acerca de un equipo determinado. La posición del equipo se pasa como un parámetro de consulta, <code>id</code> para la página. El <code>id</code> se utilizará para luego filtrar la información del equipo:</p>

<p className="p">It's time to update the details page to display more information about a given team. The team's position will be passed as a query parameter, <code>id</code>, to the page. The <code>id</code> will be used to then filter the team's information:</p>
<div className="image"><a></a><img src="/static/negri11.jpg" width="100%" alt="Image"/></div>
<p className="it">Esta página muestra el contenido dinámico basado en el parámetro de consulta. Recibimos el <code>query</code> de la <code>getInitialProps</code> y luego utiliza el valor <code>id</code> para filtrar la array de datos de un equipo determinado en función de su posición en la table.</p>

<p className="p">This page displays dynamic content based on the query parameter. We receive the <code>query</code> from the <code>getInitialProps</code> and then use the <code>id</code> value to filter the data array from a given team based on their position on the table.</p>
<p className="it">El aspecto más interesante de la lógica anterior es que no estamos solicitando datos más de una vez en el ciclo de vida de la aplicación. Una vez que el servidor renderiza, buscamos a los datos y la memoria caché con <code>sessionStorage</code>. La navegación posterior se basará en los datos almacenados en caché. <code>sessionStorage</code> se prefiere <code>localStorage</code> porque los datos no persisten una vez que se cierre la ventana actual</p>

<p className="p">The most interesting aspect of the above logic is that we are not requesting data more than once in the app's lifecycle. Once the server renders, we fetch the data and cache it with <code>sessionStorage</code>. Subsequent navigation will be based on the cached data. <code>sessionStorage</code> is preferred to <code>localStorage</code> because the data will not persist once the current window exits. </p>
<blockquote>
<p className="it">El almacenamiento se realiza utilizando <code>componentDidMount</code> y no <code>getInitialProps</code> porque cuando <code>getInitialProps</code> se llama, el navegador no está preparado de modo <code>sessionStorage</code> que no se conoce. Por esta razón, tenemos que esperar a que el navegador y una buena manera de coger es decir, con <code>componentDidMount</code> el método del ciclo de vida React. <code>getInitialProps</code> se dice que es isomorfo.</p>

<p className="p">The storage is done using <code>componentDidMount</code> and not <code>getInitialProps</code> because when <code>getInitialProps</code> is called, the browser is not prepared so <code>sessionStorage</code> is not known. For this reason, we need to wait for the browser and a good way to catch that is with <code>componentDidMount</code> React lifecycle method. <code>getInitialProps</code> is said to be isomorphic.</p>
</blockquote>
<p className="it">Ahora vamos a renderizar al navegador:</p>

<p className="p">Let's now render to the browser:</p>
<div className="image"><a></a><img src="/static/negri12.jpg" width="100%" alt="Image"/></div>


<p className="p"><img data-original="https://cdn.scotch.io/1/MmJ0s3o4SEmuTXP5NGTd_e6aQUkN.jpg" alt="" class="loaded" src="https://cdn.scotch.io/1/MmJ0s3o4SEmuTXP5NGTd_e6aQUkN.jpg" data-was-processed="true" width="100%"/></p>


<p className="p"><img data-original="https://cdn.scotch.io/1/qTtFMCwqRPmULxkzqOvH_fWR9rbR.jpg" alt="" class="loaded" src="https://cdn.scotch.io/1/qTtFMCwqRPmULxkzqOvH_fWR9rbR.jpg" data-was-processed="true" width="100%"/></p>
<p className="it">Nuestra página <code>index</code> no implementa esta característica relacionada con el renderizado en la página <code>details</code>. Podemos actualizar el componente en consecuencia:</p>

<p className="p">Our <code>index</code> page does not implement this performance related feature in <code>details</code> page. We can update the component accordingly:</p>
<div className="image"><a></a><img src="/static/negri13.jpg" width="100%" alt="Image"/></div>
<p className="it">La plantilla <code>index</code> también debe actualizarse para incluir enlaces que apuntan a la página de detalles de cada equipo:</p>

<p className="p">The <code>index</code> template should also be updated to include links that point to each team's details page:</p>
<div className="image"><a></a><img src="/static/negri14.jpg" width="100%" alt="Image"/></div>
<h2 id="toc-error-pages">
    <a href="#toc-error-pages">
      <span class="icon">#</span>
      Error Pages
    </a> 
  </h2>
<p className="it">Se pueden definir las páginas de error personalizada mediante la creación de una página <code>_error.js</code> a manejar 4 <strong>y 5</strong> errores. A continuación ya se muestran errores así que si eso es bien con vos, entonces no hay necesidad de crear la nueva página de error.</p>

<p className="p">You can define custom error pages by creating a <code>_error.js</code> page to handle 4<strong> and 5</strong> errors. Next already displays errors so if that is fine with you, then no need to create the new error page.</p>
<div className="image"><a></a><img src="/static/negri15.jpg" width="100%" alt="Image"/></div>
<p className="it">Esto es a lo que un 404 se parece en la página de error por defecto:</p>

<p className="p">This is what a 404 looks like with the default error page:</p>


<p className="p"><img data-original="https://cdn.scotch.io/1/jWopwg9Ti2xtsWRMDbAZ_D27mEIz.jpg" alt="React Universal 404" class="loaded" src="https://cdn.scotch.io/1/jWopwg9Ti2xtsWRMDbAZ_D27mEIz.jpg" data-was-processed="true" width="100%"/></p>
<p className="it">... pero con la página de error personalizada, se obtiene:</p>

<p className="p">...but with the custom error page, you get:</p>


<p className="p"><img data-original="https://cdn.scotch.io/1/C4GbGOlTRv6Z0EVDxTaB_2Deph83.jpg" alt="" class="loaded" src="https://cdn.scotch.io/1/C4GbGOlTRv6Z0EVDxTaB_2Deph83.jpg" data-was-processed="true" width="100%"/></p>
<h2 id="toc-deploying">
    <a href="#toc-deploying">
      <span class="icon">#</span>
      Deploying
    </a> 
  </h2>
<p className="it">A continuación está siempre lista para producción en todo momento. Vamos a desplegar a <a href="https://zeit.co/now#get-started">now</a> para ver cómo es simple despliegue. Primero instalá <code>now</code>:</p>

<p className="p">Next is always production ready at all time. Let's deploy to <a href="https://zeit.co/now#get-started">now</a> to see how simple deploying is. First install <code>now</code>:</p>
<pre data-title="bash" class=" language-bash"><code class=" language-bash"><span class="token function">npm</span> <span class="token function">install</span> -g now</code></pre>
<blockquote>
<p className="it">Que necesitas para obtener una cuenta mediante la descarga de la <a href="https://zeit.co/desktop#">aplicación de escritorio</a></p>

<p className="p">You need to get an account by downloading the <a href="https://zeit.co/desktop#">desktop app</a></p>
</blockquote>
<p className="it">Actualizar las secuencias de comandos en <code>package.json</code> incluir una orden <code>build</code> para nuestra aplicación:</p>

<p className="p">Update the scripts in <code>package.json</code> to include a <code>build</code> command for our app:</p>
<pre data-title="json" class=" language-json"><code class=" language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><br></br>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"next"</span><span class="token punctuation">,</span><br></br>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"next build"</span><span class="token punctuation">,</span><br></br>
    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"next start"</span><br></br>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code></pre>
<p className="it">Ahora ejecute la construcción y puesta en orden de prepararse para el despliegue:</p>

<p className="p">Now run the build and start command to prepare for deploying:</p>
<pre data-title="bash" class=" language-bash"><code class=" language-bash"><span class="token comment" spellcheck="true"># Build</span><br></br>
<span class="token function">npm</span> run build<br></br>
<span class="token comment" spellcheck="true"># Start</span><br></br>
<span class="token function">npm</span> start</code></pre>
<p className="it">Usted sólo puede implementar mediante la ejecución de <code>now</code>:</p>

<p className="p">You can just deploy by running <code>now</code>:</p>
<pre data-title="bash" class=" language-bash"><code class=" language-bash">now</code></pre>
<h2 id="toc-additional-resources">
    <a href="#toc-additional-resources">
      <span class="icon">#</span>
      Additional Resources
    </a> 
  </h2>
<ul><li className="it"><a href="https://zeit.co/blog/next">Blog Zeit</a></li>

<li className="p"><a href="https://zeit.co/blog/next">Zeit Blog</a></li>
<li className="it"><a href="https://github.com/zeit/next.js/wiki/Global-styles-and-layouts">Estilos y diseño</a></li>

<li className="p"><a href="https://github.com/zeit/next.js/wiki/Global-styles-and-layouts">Styles and Layout</a></li>
<li className="it"><a href="https://github.com/zeit/next.js/wiki/Redux-example">La adición de Redux</a></li>

<li className="p"><a href="https://github.com/zeit/next.js/wiki/Redux-example">Adding Redux</a></li>
<li className="it"><a href="https://github.com/zeit/next.js/wiki/Roadmap">Siguiente Hoja de Ruta</a></li>

<li className="p"><a href="https://github.com/zeit/next.js/wiki/Roadmap">Next Road Map</a></li>
</ul>                                  
                                                        
</div> 
   
  </div> 
  
  </Layout>
  )