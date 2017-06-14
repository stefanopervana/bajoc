import Layout from '../components/layout'

export default () => (
  <Layout title='Chapter 5'>
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
                    .hint {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 100%;             
                        max-width: 1000px;
                        background-color: #E9E3B9;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        line-height: 1.1;
                        padding: 1.7em;

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

                    pre {display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 16px


                    }

                    code
                    {margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;}
                    
                    code strong
                    {color:#000;
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

                    .sub{
                        text-decoration: underline;
                    }
                `}</style>
<div className="col-md-6">
<header class="entry-header">
<h1 class="entry-title">Learn Raw React — no JSX, no Flux, no ES6, no Webpack…</h1>
</header>             
<div class="entry-meta">
                  <span class="post-category">
                    posted in <a href="http://jamesknelson.com/category/javascript/" rel="category tag">Javascript</a>, <a href="http://jamesknelson.com/category/react/" rel="category tag">React</a>
                    </span>                 
                  <span class="post-date">
                    on <a href="http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/" title="11:01 am" rel="bookmark"><time class="entry-date" datetime="2012-11-09T23:15:57+00:00">September 14, 2015</time></a>
                  </span>                 
                  <span class="by-author"> by                   <span class="author vcard">
                      <a class="url fn n" href="http://jamesknelson.com/author/jamesknelson/" title="View all posts by James K Nelson" rel="author">James K Nelson</a>
                    </span>                
                  </span>
</div>   

                           
                <div class="entry-content clearfix">               
                  <p className="p"><strong>2016/4/24</strong>: <a href="http://postd.cc/learn-raw-react-no-jsx-flux-es6-webpack/">POSTD.ccが日本語に翻訳してくれました。</a></p>
<p className="it"><em>Exención de responsabilidad: Me encantan JSX, Flux, <a href="http://jamesknelson.com/es6-the-bits-youll-actually-use/">ES6</a> y <a href="http://jamesknelson.com/build-es6-and-less-with-autorefresh-in-only-26-lines-of-configuration/">webpack</a>. Hablaré más de estas herramientas en otra serie.</em></p>
<p className="p"><em>Disclaimer: I love JSX, Flux, <a href="http://jamesknelson.com/es6-the-bits-youll-actually-use/">ES6</a> and <a href="http://jamesknelson.com/build-es6-and-less-with-autorefresh-in-only-26-lines-of-configuration/">Webpack</a>. I’ll discuss these tools more in another series.</em></p>
<p className="it">Así que has oído todo el alboroto sobre React.js - al parecer es la mejor cosa desde <code>XMLHttpRequest</code>. Pero has pasado un par de horas investigando, sólo para encontrar tantas palabras de moda que sólo se siente <em>abrumador</em>. JSX y flux y ES6 y webpack y React-router y <em>todo lo que quiero es alguien que simplemente me diga cómo utilizar <strong>React</strong> ya</em>!</p>
<p className="p">So you’ve heard all the fuss about React.js – apparently it is the best thing since <code>XMLHttpRequest</code>. But you’ve spent a couple hours investigating, only to find so many buzzwords that it just feels <em>overwhelming</em>. JSX and flux and ES6 and webpack and react-router and <em>all I want is somebody to just tell me how to use <strong>React</strong> already</em>!</p>
<p className="it">Por suerte para vos, eso es exactamente lo que esta serie va a hacer! No me crees? Eso está bien - si después de haber construido tu primera aplicación React en aproximadamente <em>2 minutos de tiempo</em>. Sin descargar nada. Sólo siguiendo este ejercicio:</p>
<p className="p">Luckily for you, that’s exactly what this series will do! Don’t believe me? That’s OK – you will after you’ve built your first React app in about <em>2 minutes time</em>. Without downloading anything. Just by following this exercise:</p>
<h2>Exercise 1 – Write a single-file React.js app</h2>
<p className="it">¿Has trabajado con JavaScript, CSS y HTML antes? ¡Estupendo! Eso significa que podes hacer este ejercicio!</p>
<p className="p">Have you worked with JavaScript, CSS and HTML before? Great! That means you can do this exercise!</p>
<p className="it">El resultado de este ejercicio es un solo archivo HTML, que contiene tu primera aplicación React. Hay tres pasos, comenzando con:</p>
<p className="p">The result of this exercise is a single HTML file, which contains your first React app. There are three steps, starting with:</p>
<h3>Step 1</h3>
<p className="it">Copiar este código HTML en un nuevo archivo y guardarlo en algún lugar:</p>
<p className="p">Copy this HTML into a new file and save it somewhere:</p>
<div className="image"><img src="/static/james099.jpg" width="100%" alt="Image"/></div>
<p className="it">Este archivo HTML hace dos cosas importantes - crea el <code>div</code> donde vivirá tu contenido renderizado (con id <code>react-app</code>), y se cargan los dos archivos de la biblioteca, donde vivirá React.</p>
<p className="p">This HTML file does two important things – it creates the <code>div</code> where your rendered content will live (with id <code>react-app</code>), and it loads the two library files where React lives.</p>
<p className="it">Una vez hecho esto, vamos a pasar a:</p>
<p className="p">With that done, let’s move on to:</p>
<h3>Step 2</h3>
<p className="it">Escribir este script en una nueva etiqueta <code>&lt;script&gt;</code> al final de tu archivo HTML.</p>
<p className="p">Type this script into a new <code>&lt;script&gt;</code> tag at the end of your HTML file.</p>


<div class="hint">
<p className="it">¿Por qué escribir en lugar de copiar y pegar? Bueno, teclear te obliga a procesar cada uno de los comandos individuales, perforándolos en tu cabeza en el proceso - mientras que copiar y pegar sólo te da una breve sensación de astucia y un tiro de dopamina. Y si sólo queres dopamina, deja de leer y juga flappy bird o algo así.</p>
<p className="p">Why type it out instead of copy and paste? Well, typing forces you to process each of the individual commands, drilling them into your head in the process – while copying and pasting just gives you a short feeling of cleverness and a shot of dopamine. And if you just want dopamine, quit reading and play flappy bird or something.</p>
</div>
<div className="image"><img src="/static/james100.jpg" width="100%" alt="Image"/></div>
<p className="it">Uf, eso fue un poco de trabajo, ¿verdad? Sin embargo, es de esperar toda la repetición te habrá dado una idea de lo que hace el método <a href="https://facebook.github.io/react/docs/top-level-api.html#react.createelement"><code>createElement</code></a>. Si no, tal vez el tercer paso te ayudará.</p>
<p className="p">Phew, that was a bit of work, wasn’t it? But, hopefully all the repetition will have given you an idea of what that <a href="https://facebook.github.io/react/docs/top-level-api.html#react.createelement"><code>createElement</code></a> method does. If not, maybe step three will help.</p>
<h3>Step 3</h3>
<p className="it">Abrí el archivo HTML en un navegador web, y comprobá que la salida es la siguiente:</p>
<p className="p">Open your HTML file in a web browser, and check that the output looks like this:</p>

<p className="p"><iframe width="100%" height="300" src="//jsfiddle.net/61ohft4r/embedded/result,js,html/" frameborder="0"></iframe></p>
<p className="it">¿Lo tenes? En ese caso, felicitaciones! Que hayas realizado tu primera aplicación React.js, sin ni siquiera instalar <code>npm</code>. Y para celebrar, vamos a echar un vistazo a cómo funciona.</p>
<p className="p">Got it? In that case, congratulations! You’ve made your first React.js app, without even installing <code>npm</code>. And to celebrate, let’s have a look at how it works.</p>
<h2>Introducing React</h2>
<p className="it">En su forma más básica, React es una herramienta para la representación HTML con JavaScript. <code>ReactDOM.render</code>realiza un objeto <code>ReactElement</code> que describe qué renderizar, añadiendo el resultado al nodo <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">DOM</a> ya dado. Pero, ¿cómo crear objetos <code>ReactElement</code>? Ahí es donde entra <code>React.createElement</code>.</p>
<p className="p">At it’s most basic, React is a tool for rendering HTML with JavaScript. <code>ReactDOM.render</code> takes a <code>ReactElement</code> object describing what to render, adding the result to the given <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">DOM</a> node. But how do you create <code>ReactElement</code> objects? That’s where <code>React.createElement</code> comes in.</p>
<p className="it"><code>React.createElement</code> toma tres parámetros, y devuelve un <code>ReactElement</code>. A partir de la <a href="https://facebook.github.io/react/docs/top-level-api.html#react.createelement"> documentación React</a>:</p>
<p className="p"><code>React.createElement</code> takes three parameters, and returns a <code>ReactElement</code>. From the <a href="https://facebook.github.io/react/docs/top-level-api.html#react.createelement">React documentation</a>:</p>
<div className="image"><img src="/static/james098.jpg" width="100%" alt="Image"/></div>
<p className="it">El argumento <code>type</code> nos permite especificar qué tipo de elemento HTML utilizaremos; También nos permite especificar elementos <em>personalizados</em> (que veremos después). El argumento <code>props</code> es una forma de especificar qué atributos se definen en el elemento HTML, como podes haber adivinado por el enlace <code>mailto</code> en el ejercicio. Finalmente, los argumentos <code>children</code> son cadenas u objetos <code>ReactElement</code> (o arrays del mismo) que se utilizarán para el contenido del elemento devuelto. Al elegir omitir o especificar <code>children</code>, puede devolver un solo <code>ReactElement</code> o un árbol completo.</p>
<p className="p">The <code>type</code> argument lets us specify what type of HTML element to use; it also lets us specify <em>custom</em> elements (which we’ll learn about later). The <code>props</code> argument is a way of specifying which attributes are defined on the HTML element, as you may have guessed from the <code>mailto</code> link in the exercise. Finally, the <code>children</code> arguments are strings or <code>ReactElement</code> objects (or arrays of the same) which will be used for the returned element’s content. By choosing to omit or specify <code>children</code>, you can return a single <code>ReactElement</code> or an entire tree.</p>
<p className="it">Dado que <code>createElement</code> es simplemente JavaScript, se puede mezclar en bucles, declaraciones <code>if</code>, y cualquier otra cosa que permita JavaScript. También se puede sustituir con facilidad en los datos almacenados en JSON. Por ejemplo, si tenías una lista de contactos, pero no querías renderizar los que no tienen direcciones de correo electrónico, podrías hacer algo como esto:</p>
<p className="p">Since <code>createElement</code> is just plain JavaScript, you can mix in loops, <code>if</code> statements, and anything else JavaScript allows. You can also easily substitute in data stored in JSON. For example, if you had a list of contacts but didn’t want to render the ones without e-mail addresses, you could do something like this:</p>
<div className="image"><img src="/static/james101.jpg" width="100%" alt="Image"/></div>
<p className="it">Ordenado. Así React se puede utilizar como un sistema de plantillas basado en JavaScript muy detallado! Pero ... seguramente eso no explicaría el culto que ha recibido. ¿Lo que da?</p>
<p className="p">Neat. So React can be used as a very verbose JavaScript-based templating system! But… surely that wouldn’t explain the cult-like following it has received. What gives?</p>
<h2>Components</h2>
<p className="it">¿Te diste cuenta del pequeño <code>ReactClass</code> en la firma type de <code>React.createElement</code>? Lo salté porque no lo habíamos usado todavía, pero se puede adivinar lo que hace?</p>
<p className="p">Did you notice the little <code>ReactClass</code> in the type signature of <code>React.createElement</code>? I skipped over it because we hadn’t used it yet, but can you guess what it does?</p>
<p className="it">La respuesta es ... <em>redoble de tambores por favor</em>: <code>React.createElement</code> no se limita a HTML estándar. También te permite crear tus propios componentes!</p>
<p className="p">The answer is … <em>drum roll please</em>:  <code>React.createElement</code> isn’t limited to standard HTML. It also lets you create your very own components!</p>
<p className="it">¿Cómo? con <code>React.createClass</code>:</p>
<p className="p">How? With <code>React.createClass</code>:</p>
<div className="image"><img src="/static/james102.jpg" width="100%" alt="Image"/></div>
<p className="it">Este pequeño fragmento define un nuevo componente llamado <code>ContactItem</code>. Al igual que los elementos HTML, un <code>ContactItem</code> acepta una lista de atributos (llamados <code>props</code>). A diferencia de los elementos HTML, podes definir los <code>props</code> que necesitas!</p>
<p className="p">This little snippet defines a new component called <code>ContactItem</code>. Like HTML elements, a <code>ContactItem</code> accepts a list of attributes (called <code>props</code>). Unlike HTML elements, you can define whatever <code>props</code> you need!</p>
<p className="it">Tendrás que utilizar el componente por encima de este modo:</p>
<p className="p">You’d use the above component like so:</p>
<div className="image"><img src="/static/james103.jpg" width="100%" alt="Image"/></div>
<p className="it">Y así como se puede esperar, <code>element</code> ahora contendría el valor devuelto por el componente de su función <code>render</code>.</p>
<p className="p">And just as you may expect, <code>element</code> would now contain the value returned by your component’s <code>render</code> function.</p>
<div class="hint">

<p className="it">Si pasas un argumento <code>children</code> a <code>createElement</code>, su valor estará disponible bajo <code>this.props.children</code></p>
<p className="p">If you pass a <code>children</code> argument to <code>createElement</code>, it’s value will be available under <code>this.props.children</code></p>

<p className="it">Vamos a probar tu comprensión con otro ejercicio:</p>
<p className="p">Let’s test your understanding with another exercise:</p>
<h2>Exercise 2 – Refactor your contact list</h2>
<p className="it">Refactorizá tu solución para el primer ejercicio con lo que has aprendido. En particular:</p>
<p className="p">Refactor your solution to the first exercise using what you’ve learned. In particular:</p>
<ul>
<li className="it">Creá una clase <code>ContactItem</code> que acepte tres propiedades: <code>name</code>, <code>email</code> y <code>description</code></li>
<li className="p">Create a <code>ContactItem</code> class which accepts three properties: <code>name</code>, <code>email</code> and <code>description</code></li>
<li className="it">Filtrá los contactos sin dirección de correo electrónico</li>
<li className="p">Filter out contacts with no e-mail address</li>
<li className="it">Almacená tus datos en una array en lugar de pasar directamente a <code>createElement</code></li>
<li className="p">Store your data in an array instead of passing it directly to <code>createElement</code></li>
</ul>
<p className="it">Utilizá los siguientes datos:</p>
<p className="p">Use the following data:</p>
<div className="image"><img src="/static/james104.jpg" width="100%" alt="Image"/></div>
<p className="it">Cuando hayas terminado, revisá tu trabajo contrastandolo con este fiddle:</p>
<p className="p">When you’re done, check your work against this fiddle:</p>
<p className="p"><iframe width="100%" height="300" src="//jsfiddle.net/6L0da2sw/1/embedded/result,js,html/" frameborder="0"></iframe></p>
<h2><code>propTypes</code></h2>
<p className="it">podes haber notado que mi solución al Ejercicio dos utiliza dos valores diferentes para el objeto <code>propTypes</code> - una con <code>isRequired</code> y otra sin ella. Este sufijo se puede aplicar a cualquiera de los  <a href="https://facebook.github.io/react/docs/reusable-components.html#prop-validation">prop types</a> disponibles de React para indicar que el prop específico <em>debe</em> ser pasado a <code>React.createElement</code>.</p>
<p className="p">You may have noticed that my solution to Exercise Two uses two different values for the <code>propTypes</code> object – one with <code>isRequired</code>, and one without. This suffix can be applied to any of React’s available <a href="https://facebook.github.io/react/docs/reusable-components.html#prop-validation">prop types</a> to indicate that the specific prop <em>must</em> be passed to <code>React.createElement</code>.</p>
<p className="it">Pero vos decis -esperá un minuto-. ¿Qué hace el objeto <code>propTypes</code> realmente?</p>
<p className="p">But wait a minute, you say. What does the <code>propTypes</code> object <em>actually do?</em></p>
<p className="it">El secreto es que en la mayoría de los casos, <code>propTypes</code> en realidad no hace <em>nada</em>. De hecho, se podría eliminar por completo, y nuestra aplicación seguiría funcionando de forma idéntica. Así que por qué está ahí?</p>
<p className="p">The secret is that in most cases, <code>propTypes</code> doesn’t actually do <em>anything</em>. In fact, we could completely remove it, and our app would still function identically. So why is it there?</p>
<p className="it"><code>propTypes</code>es un mecanismo de depuración; React que te permite comprobar en tiempo real que el argumento <code>props</code> pasado a <code>createElement</code> tiene sentido. Si no lo tiene, React registrará una advertencia en la consola:</p>
<p className="p"><code>propTypes</code> is a debugging mechanism; it lets React check in real time that the <code>props</code> argument passed to<code>createElement</code> actually makes sense. If it doesn’t, React will log a warning to the console:</p>
<p className="p"><img src="http://jamesknelson.com/console-warning.png" alt="React console warning"></img></p>
<p className="it">He incluido <code>propTypes</code> en esta guía porque <em> con él te podes ahorrar mucho dolor en el largo plazo</em> - incluso si no es estrictamente necesario. Y puede que sea aún <em>menos</em> doloroso imprimiendo la cheatsheet PDF que obtendrás cuando te suscribas a mi boletín de noticias - pero estoy divagando! Ahora que sabemos cómo mostrar algunos datos, vamos a aprender cómo actualizarlos.</p>
<p className="p">I’ve included <code>propTypes</code> in this guide because <em>it’ll save you a lot of pain in the long run</em> – even if it isn’t strictly necessary. And you can make it even <em>less</em> painful by printing out the cheatsheet PDF you’ll get when you sign up for my newsletter – but I digress! Now that we know how to display some data, let’s learn how to update it.</p>
<h2>Displaying new data</h2>
<p className="it">Hasta ahora, nuestra aplicación sólo ha tenido que tomar un conjunto estático de datos, y renderizarlos al DOM <strong>una vez</strong>. ¿Pero qué sucede cuando nuestros datos cambian?</p>
<p className="p">So far, our app has only had to take a static set of data, and render it to the DOM <em>once</em>. But what happens when our data changes?</p>
<p className="it">A pesar de lo que se puede esperar de una herramienta llamada <strong>React</strong>, <em>nada</em> cambia. A diferencia de los puntos de vista de actualización automática de tantos otros frameworks de JavaScript, React nos espera para ordenar manualmente un re-renderizado. Entonces, ¿Cómo lo hacemos?</p>
<p className="p">Despite what you may expect from a tool called <strong>React</strong>, <em>nothing</em> changes. Unlike the automatically-updating views in so many other JavaScript frameworks, React waits for us to manually order a re-render. So how do we do it?</p>
<div className="image"><img src="/static/james105.jpg" width="100%" alt="Image"/></div>
<p className="it">Pero en nuestra primera llamada <code>render</code> crea un entero nuevo árbol de elementos HTML bajo <code>#react-app</code>, nuestra segunda llamada <strong> sólo cambia las partes que han cambiado realmente</strong>. Aquí es donde React obtiene su reputación por su rendimiento. De hecho, si tuviéramos que hacer esto:</p>
<p className="p">But where our first <code>render</code> call creates an entire new tree of HTML elements under <code>#react-app</code>, our second call <em>only changes the parts which have actually changed</em>. This is where React gets it’s reputation for performance. In fact, if we were to do this:</p>
<div className="image"><img src="/static/james106.jpg" width="100%" alt="Image"/></div>
<p className="it">La segunda llamada a renderizar no haría <strong>absolutamente nada</strong>. Nada, a menos que se renderice una <em>array</em> de elementos sin asignar un único <code>key</code> prop a cada uno. Para entender por qué es esto, necesitas saber un poco acerca de cómo funciona <code>render</code> bajo el capó.</p>
<p className="p">The second call to render would do <em>absolutely nothing</em>. Nothing – that is – unless you are rendering an <em>array</em> of elements without assigning a unique <code>key</code> prop to each. To understand why this is, you’ll need to know a little about how <code>render</code> works under the hood.</p>
<h2>How <code>ReactDOM.render</code> works</h2>
<p className="it">La primera llamada a <code>ReactDOM.render</code> es simple - va a través de lo aprobado en <code>ReactElement</code> y crea un árbol HTML correspondiente bajo <code>#react-app</code>. Pero como he mencionado anteriormente, la segunda y subsiguientes llamadas no modifican elementos HTML previamente renderizados a menos que los correspondientes objetos <code>ReactElement</code> hallan cambiado. ¿Por qué?</p>
<p className="p">The first call to <code>ReactDOM.render</code> is simple – it walks through the passed in <code>ReactElement</code> and creates a corresponding HTML tree under <code>#react-app</code>. But as I mentioned above, the second and subsequent calls don’t modify previously rendered HTML elements unless the corresponding <code>ReactElement</code> objects have changed. Why?</p>
<p className="it">Con el fin de decidir <strong>lo que</strong> cambiará, React compara el nuevo árbol <code>ReactElement</code> con el anterior. Se utiliza una serie de <a href="https://facebook.github.io/react/docs/reconciliation.html">reglas</a> para decidir qué hacer:</p>
<p className="p">In order to decide <em>what</em> to change, React compares the new <code>ReactElement</code> tree with the previous one. It uses a number of <a href="https://facebook.github.io/react/docs/reconciliation.html">rules</a> to decide what to do:</p>

<ul>
<li className="it"><code>ReactElement</code>s con diferentes tipos se deterioran y se re-renderizan</li>
<li className="p"><code>ReactElement</code>s with differing types are trashed and re-rendered</li>
<li className="it"><code>ReactElement</code>s con diferentes props o los childs se re-renderizan en su sitio</li>
<li className="p"><code>ReactElement</code>s with differing props or children are re-rendered in place</li>
<li className="it">Los <code>ReactElement</code> idénticos que han sido re-ordenados dentro de una array se mueven para reflejar el nuevo orden</li>
<li className="p">Identical <code>ReactElement</code>s which have been re-ordered within an array are moved to reflect the new order</li>
</ul>
<p className="it">Hay un tema - cuando React se encuentra con una serie de <code>ReactElement</code> con idénticos <code>type</code> y <code>props</code>, a pesar de <strong>reconocer</strong> que son idénticos desde el exterior no puede saber si son <strong>realmente</strong> idénticos. Esto se debe a que los elementos pueden tener estado interno - por ejemplo, si el elemento tiene el foco de usuario. Esto se convierte en un problema cuando React va a volver a renderizar esos elementos, ya que no puede distinguir uno de otro - y por lo tanto no sabe si el orden dentro de la array ha cambiado.</p>
<p className="p">There’s one catch – when React encounters an array of <code>ReactElement</code>s with identical <code>type</code> and <code>props</code>, despite <em>looking</em> identical from the outside it cannot know that they are <em>really</em> identical. This is because elements can have internal state – for example, whether the element currently has user focus. This becomes a problem when React goes to re-render those elements, as it cannot tell one from another – and thus doesn’t know if their order within the array has changed.</p>
<p className="it">Aquí es donde la propiedad <code>key</code> de los ejemplos anteriores entra en juego. React permite distinguir entre los elementos y mantener el DOM alineado con nuestro árbol <code>ReactElement</code>.</p>
<p className="p">This is where the <code>key</code> property from the earlier examples comes in. It lets React distinguish between elements, and keep the DOM aligned with our <code>ReactElement</code> tree.</p>
<p className="it">Pero ya es suficiente con la teoría, vamos a hablar de algo práctico.</p>
<p className="p">But enough theory, let’s talk about something practical.</p>
<h2>Forms</h2>
<p className="it">Ahora ya sabes lo suficiente como para añadir un formulario a tu aplicación! Es decir, siempre y cuando no te importe que los usuarios no podrán interactuar con él todavía. Pero ¿por qué esta limitación?</p>
<p className="p">You now know enough to add a form to your app! That is, as long as you don’t mind that users won’t be able to interact with it yet. But why this limitation?</p>
<p className="it">En React, los elementos de entrada no son realmente tan especiales. Toman un prop <code>value</code>, y muestrán lo que es <code>value</code>. Y puesto que <strong>un componente no puede cambiar directamente los props que se transmiten desde el mundo exterior</strong> - la entrada del usuario no causará ningún cambio en el valor mostrado.</p>
<p className="p">In React, input elements aren’t actually all that special. They take a <code>value</code> prop, and they’ll display what that <code>value</code> is. And since <em>a component can’t directly change the props which are passed in from the outside world</em> – user input won’t cause any change in the displayed value.</p>
<p className="it">Tomate un momento para dejar que se hundan. Si se teclea en un formulario de entrada con un atributo <code>value</code>, <strong>nada cambia</strong>. Esto no quiere decir que el valor <strong>no se puede</strong> cambiar - si escuchas a los eventos <code>input</code> y actualizas el valor en consecuencia, sin embargo se puede cambiar lo deseado. Más sobre esto más adelante, sin embargo.</p>
<p className="p">Take a moment to let that sink in. If you type into a form input with a <code>value</code> attribute, <em>nothing changes</em>. This isn’t to say the value <em>can’t</em> change – if you listen to the <code>input</code> events and update the value accordingly, you can change it however you’d like. More about this later, though.</p>
<p className="it">Además de <code>value</code>, los elementos de entrada toman los prop que esperamos. Con algunas <a href="https://facebook.github.io/react/docs/tags-and-attributes.html">excepciones menores </a>, los atributos se pueden pasar a un <code>&lt;input&gt;</code> de HTML y también están disponibles como <code>props</code>. Hay dos excepciones que vale la pena tener en cuenta:</p>
<p className="p">In addition to <code>value</code>, input elements take the props you’d expect them to. With a few minor <a href="https://facebook.github.io/react/docs/tags-and-attributes.html">exceptions</a>, the attributes you can pass to a HTML <code>&lt;input&gt;</code> are also available as <code>props</code>. There are two exceptions worth keeping in mind:</p>
<ul>
<li className="it">Los elementos React <code>textarea</code> toman su contenido como un <code>value</code>prop, no como <code>children</code></li>
<li className="p">React <code>textarea</code> elements take their content as a <code>value</code> prop, not as <code>children</code></li>
<li className="it">El atributo HTML <code>for</code> está ligado a la <code>htmlFor</code> prop (como <code>for</code> es una palabra reservada en JavaScript)</li>
<li className="p">The HTML <code>for</code> attribute is bound to the <code>htmlFor</code> prop (as <code>for</code> is a reserved word in JavaScript)</li>
</ul>
<p className="it">Estas excepciones se enumeran en la cheatsheet React que recibirás después de suscribirte a mi boletín de noticias.</p>
<p className="p">These exceptions are listed on the React cheatsheet you’ll receive after signing up for my newsletter.</p>
<h2>Exercise 3: Add a read-only form</h2>
<p className="it">Vamos a crear una nueva clase <code>ContactForm</code> de componente, con el siguiente <code>propTypes</code>:</p>
<p className="p">Let’s create a new <code>ContactForm</code> component class, with the following <code>propTypes</code>:</p>

<div className="image"><img src="/static/james107.jpg" width="100%" alt="Image"/></div>
<p className="it">Esto debe renderizar un elemento <code>&lt;form&gt;</code> que contiene elementos <code>&lt;input&gt;</code> para <code>name</code> y <code>email</code>, una <code>&lt;textarea&gt;</code>para <code>description</code>, y una <code>&lt;button type="submit"&gt;</code>. Para simplificar, en lugar de utilizar marcadores de posición de las etiquetas. Y recordá - el componente React <code>textarea</code> acepta que es <code>value</code> bajo <code>props</code>, no <code>children</code>.</p>
<p className="p">It should render a <code>&lt;form&gt;</code> element containing <code>&lt;input&gt;</code> elements for <code>name</code> and <code>email</code>, a <code>&lt;textarea&gt;</code> for <code>description</code>, and a <code>&lt;button type="submit"&gt;</code>. For simplicity, use placeholders instead of labels. And remember – the React <code>textarea</code> component accepts it’s <code>value</code> under <code>props</code>, not <code>children</code>.</p>
<p className="it">Una vez que has construido tu clase <code>ContactForm</code>, añadila debajo de tu lista de contactos con un contacto en blanco en el pasado para el <code>contact</code>prop . Voy a esperar aquí hasta que hayas terminado.</p>
<p className="p">Once you’ve built your <code>ContactForm</code> class, add it beneath your contact list with a blank contact passed in for the <code>contact</code> prop. I’ll wait here until you’re done.</p>
<p className="it">¿Hecho? ¡Estupendo! Ahora comprobá cómo tu aplicación se compara con la mía - tomá nota de las diferencias, pero no te obsesiones en que coincida con mi aplicación línea por línea. Lo importante es que se escribe algo que funciona.</p>
<p className="p">Done? Great! Now check how your implementation compares to mine – take note of any differences, but don’t get too hung up on matching my implementation line-for-line. The important thing is that you write something which works.</p>
<p className="p"><iframe width="100%" height="300" src="//jsfiddle.net/adhrfmLy/embedded/result,js,html/" frameborder="0"></iframe></p>
<h2>Making your app beautiful</h2>
<p className="it">Ni siquiera has terminado este artículo, y ya estás en camino a matar a salesforce. Pero nadie va a comprar tu producto si se ve como la mierda. Así que vamos a añadir algo de <strong>style</strong>..</p>
<p className="p">You haven’t even finished this article, and you’re <em>already on your way to killing salesforce</em>. But nobody is going to buy your product if it looks shit. So let’s add some <em>style</em>.</p>
<p className="it">¿Cómo deberíamos atacar esto? Bueno, ya que esta aplicación es muy pequeña, le <strong>podríamos</strong> dar Style usando selectores HTML:</p>
<p className="p">How should we go about this? Well, since this app is tiny, we <em>could</em> just style it using HTML selectors:</p>
<div className="image"><img src="/static/james108.jpg" width="100%" alt="Image"/></div>
<p className="it">Pero esto va a dejar de funcionar si nuestra aplicación cada vez gana otra lista - así que vamos a evitar dolores de cabeza más tarde y asignar clases a nuestros elementos. Para evitar conflictos, vamos namespace con nombre de la clase de su componente principal.</p>
<p className="p">But this will stop working if our app ever gains another list – so let’s avoid headaches later and assign classes to our elements. To avoid conflicts,  we’ll namespace them with their parent component’s class name.</p>
<p className="it">Para nuestro componente <code>ContactItem</code>, esto va a ser algo así:</p>
<p className="p">For our <code>ContactItem</code> component, this will look something like this:</p>
<div className="image"><img src="/static/james109.jpg" width="100%" alt="Image"/></div>
<div class="hint">
<p className="it">Tené en cuenta que, al igual que el DOM, React utiliza la propiedad <code>className</code> para asignar clases CSS (pues <code>class</code> es una palabra reservada en JavaScript).</p>
<p className="p">Note that like the DOM, React uses the <code>className</code> property to assign CSS classes (as <code>class</code> is a reserved word in JavaScript).</p>
</div>
<p className="it">Pero, ¿cómo recogemos los nombres de clase para nuestras llamadas a <code>createElement</code> que no son parte de un componente de la función <code>render</code>?</p>
<p className="p">But how do we pick class names for our <code>createElement</code> calls which aren’t part of a component <code>render</code> function?</p>
<p className="it">Encontrarás generalmente que los proyectos React organizan <em>todo</em> en clases, con una sola llamada a <code>React.createElement</code> de la renderización de un elemento de nivel superior que se pasa directamente a <code>ReactDOM.render</code>. Para esta aplicación, vamos a usar un nivel superior de <code>ContactView</code>con esta firma:</p>
<p className="p">You’ll generally find that React projects organise <em>everything</em> into classes, with a single <code>React.createElement</code> call rendering a top-level element which is directly passed to <code>ReactDOM.render</code>. For this app, let’s use a top-level <code>ContactView</code> with this signature:</p>
<div className="image"><img src="/static/james110.jpg" width="100%" alt="Image"/></div>
<h2>Exercise 4 (optional):</h2>
<p className="it">Si deseas el estilo de tu nueva aplicación, creá la clase <code>ContactView</code> como se ha definido anteriormente, añadí props <code>className</code> en tu caso, y agregá una hoja de estilo para tu archivo HTML.</p>
<p className="p">If you’d like to style your new app, create the <code>ContactView</code> class as defined above, add <code>className</code> props where relevant, and add a stylesheet to your HTML file.</p>
<p className="it">¿Necesitas ideas? Aquí esta un fiddle que preparé antes:</p>
<p className="p">Need ideas? Here is a fiddle I prepared earlier:</p>
<p className="p"><iframe width="100%" height="600" src="//jsfiddle.net/adhrfmLy/1/embedded/result,js,css,html/" frameborder="0"></iframe></p>
<h2>Nobody likes a read-only app</h2>
<p className="it">Ahora ya sabes lo suficiente para hacer <strong>bonitas</strong> aplicaciones, pero ¿cómo se aprende a hacerlas <strong>interactivas</strong>?</p>
<p className="p">You now know enough to make <em>pretty</em> apps, but how do you learn to make <em>interactive</em> ones?</p>
<p className="it">Este artículo es sólo el primero de una serie sobre <em>React Sin editar</em> . Mi objetivo es lanzar un nuevo artículo cada semana, y no detenerme hasta que puedas utilizarlo para hacer una <em>aplicación real,</em> con React. Eso significa una aplicación la cual:</p>
<p className="p">This article is only the first in a series on <em>Raw React</em>. I aim to release a new article every week, and won’t be stopping until you can use them to make a <em>real app</em> with React. That means an app which:</p>

<ul>
<li className="it">Maneje los eventos de formulario</li>
<li className="p">Handles form events</li>
<li className="it">Maneje la navegación / enrutamiento</li>
<li className="p">Handles navigation/routing</li>
<li className="it">Se comunique con su API</li>
<li className="p">Communicates with your API</li>
<li className="it">Gestione la autenticación de usuarios</li>
<li className="p">Manages user authentication</li>
</ul>

<p className="p"><em>Update: <a href="http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms/">Part 2: Ridiculously Simple Forms</a> has been released.</em></p>

<p className="p">In return for your e-mail address, I’ll send you the complete series via e-mail <em>as it is released</em>. And as a bonus you’ll immediately receive 3 <em>print-optimised</em> PDF cheatsheets – on <a href="http://jamesknelson.com/wp-content/uploads/2015/09/react-cheatsheet-thumbnail.png">React</a>, <a href="http://jamesknelson.com/wp-content/uploads/2015/09/es6-cheatsheet-thumbnail.png">ES6</a> and <a href="http://jamesknelson.com/wp-content/uploads/2015/09/promises-cheatsheet-thumbnail.png">JavaScript promises</a>.</p>

<script src="https://app.convertkit.com/assets/CKJS4.js?v=21"></script>
<div class="ck_form ck_vertical_subscription_form ck_horizontal">
  <div class="ck_form_content">
      <h3 class="ck_form_title">I will send you useful articles, cheatsheets and code.</h3>
      <div class="ck_description">
          <p className="p">I won't send you useless inbox filler. <em>No spam, ever.</em></p>
      </div>
  </div>
  <div class="ck_form_fields">
    <div id="ck_success_msg">

      <p className="p">Thanks! Please check your email for the link to your cheatsheets.</p>
    </div>
<p className="p"><em>I love hearing from readers. Send <a href="https://twitter.com/james_k_nelson">@james_k_nelson</a> a tweet, or send me an e-mail at <a href="mailto:james@jamesknelson.com">james@jamesknelson.com</a>. Thanks for reading!</em></p>
<h2>Read more</h2>
<ul>

<li className="p"><a href="http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms/">Learn Raw React Part 2: Ridiculously Simple Forms</a></li>

<li className="p"><a href="http://jamesknelson.com/routing-with-raw-react/">Learn Raw React Part 3: Routing</a></li>

<li className="p"><a href="http://jamesknelson.com/react-js-by-example-interacting-with-the-dom/">Interacting with the DOM in React</a></li>
</ul>
<h2>Related links</h2>
<ul>

<li className="p"><a href="https://github.com/jamesknelson/raw-react-part-1">Full source at GitHub</a></li>

<li className="p"><a href="https://facebook.github.io/react/docs/top-level-api.html">React Top-Level API Documentation</a></li>
</ul>
<h2 class="comments-title">29 Comments <span class="on">→</span> <span>Learn Raw React — no JSX, no Flux, no ES6, no Webpack…</span></h2>
</div>
</div>
</div>



</div>










</div>
</div>
  </Layout>
)