import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch8'>
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

                `}</style>

              <div className="col-md-6">  

                                <header class="entry-header">
                                                                        <h1 class="entry-title">Building a Router with Raw React</h1>
                                </header>
                                
                                
                                <div class="entry-meta">
                                    <span class="post-category">
                                        posted in <a href="http://jamesknelson.com/category/javascript/" rel="category tag">Javascript</a>, <a href="http://jamesknelson.com/category/react/" rel="category tag">React</a>                                  </span>
                                    
                                    
                                    <span class="post-date">
                                        on <a href="http://jamesknelson.com/routing-with-raw-react/" title="2:44 pm" rel="bookmark"><time class="entry-date" datetime="2012-11-09T23:15:57+00:00">October 5, 2015</time></a>
                                    </span>
                                    
                                    
                                    <span class="by-author"> by                                     <span class="author vcard">
                                            <a class="url fn n" href="http://jamesknelson.com/author/jamesknelson/" title="View all posts by James K Nelson" rel="author">James K Nelson</a>
                                        </span>
                                        
                                    </span>
                                    
                                    
                                                                        
                                                                    </div>
                                
                                
                                                                
                                <div class="entry-content clearfix">
                                    <p className="it">Así que ha decidido construir una página de la aplicación individual con React, y todo parece ir de dandy. Ha adquirido algunas estructuras alámbricas, un archivo HTML y algunos componentes, y luego decide agregar algunas rutas. Fácil, ¿verdad?</p>

                                    <p className="p">So you’ve decided to build a Single Page App with React, and everything seems to be going dandy. You’ve got yourself some wireframes, a HTML file and a few components, and then you decide to add some routes. Easy, right?</p>
<p className="it">Bueno, eso es lo que <em>pensaba</em> hasta que empezó a leer internet. Pero ahora te preocupa isomorfismo y la API del historial HTML 5 e incluso <em>la forma de pasar los apoyos a sus componentes de vista nuevo</em> . Y si usted pensaba aprendiendo todo <em>esto</em> fue doloroso, imaginar <strong>volver a escribir su aplicación cuando de la biblioteca de enrutamiento se rompe API en unas pocas semanas.</strong></p>

<p className="p">Well, thats what you <em>thought</em> until you started reading the internet. But now you’re worrying about isomorphism and the HTML 5 history API and even <em>how to pass props to your view components again</em>. And if you thought learning all <em>this</em> was painful, imagine <strong>rewriting your application when the routing library’s API breaks in a few weeks.</strong></p>
<p className="it">El enrutamiento no tiene que ser complicado, así que por qué se tensione a cabo con las bibliotecas cuando un router enrollado a mano puede tomar menos de 20 líneas? Sobre todo viendo que si lo que acaba de guardado siguiendo esta guía, que habría tenido algo de trabajo en <em>sólo dos minutos a</em> ...</p>

<p className="p">Routing doesn’t have to be complicated, so why stress yourself out with libraries when a hand-rolled router can take less than 20 lines? Especially seeing that if you’d have just kept following this guide, you would have had something working in <em>only two minutes</em>…</p>
<p className="it"><span id="more-504"></span></p>

<p className="p"><span id="more-504"></span></p>
<h2><a id="hash-based-routing" href="#hash-based-routing">Hash-based routing in two minutes</a></h2>
<p className="it"><strong>Enrutamiento</strong> significa <em>hacer algo en respuesta a un cambio en la dirección actual del navegador</em> . Hay dos maneras de lograr esto:</p>

<p className="p"><strong>Routing</strong> means <em>doing something in response to a change in the browser’s current URL</em>. There are two ways you can accomplish this:</p>
<ol>
<li className="it"><strong>enrutamiento pushState</strong> , mediante la API de HTML5 Historia</li>

<li className="p"><strong>pushState routing</strong>, using the HTML5 History API</li>
<li className="it"><strong>enrutamiento hash basado</strong> , utilizando la parte del URL de la página a partir de <code>#</code>, es decir, el <strong>de hash</strong> .</li>

<li className="p"><strong>hash-based routing</strong>, using the portion of the page’s URL starting with <code>#</code>, i.e. the <strong>hash</strong>.</li>
</ol>
<p className="it">Enrutamiento basado en hash es por lejos el más simple de las dos alternativas, y con la excepción de algunos <a href="http://jamesknelson.com/push-state-vs-hash-based-routing-with-react-js/">casos específicos</a> , por lo general va a hacer el trabajo. Así que vamos a ir con esto.</p>

<p className="p">Hash-based routing is by far the simpler of the two alternatives, and with the exception of a few <a href="http://jamesknelson.com/push-state-vs-hash-based-routing-with-react-js/">specific cases</a>, it’ll usually do the job. So let’s go with this.</p>
<p className="it">La implementación de enrutamiento basado en hash con React es simple; acaba de elegir qué mostrar sobre la base de la cadena almacenada en <code>window.location.hash</code>. Haremos esto una vez al cargar la página, y otra vez cada vez que el navegador emite el <code>hashchange</code>evento:</p>

<p className="p">Implementing hash-based routing with React is simple; just choose what to render based on the string stored in <code>window.location.hash</code>. We’ll do this once on page load, and again each time the browser emits the <code>hashchange</code> event:</p>
<pre class="prettyprint"><code><span class="com">// Handle the initial route</span><span class="pln">
navigated</span><span class="pun">()</span><span class="pln">

</span><span class="com">// Handle browser navigation events</span><span class="pln">
window</span><span class="pun">.</span><span class="pln">addEventListener</span><span class="pun">(</span><span class="str">'hashchange'</span><span class="pun">,</span><span class="pln"> navigated</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">);</span></code></pre>
<p className="it">Teniendo en cuenta las dos líneas anteriores, todo lo que tenemos que hacer para terminar nuestro router es implementar la <code>navigated</code>función. Y ya que usted no va a aprender nada sin ponerlo en práctica, vamos a hacer esto como un ejercicio.</p>

<p className="p">Given the above two lines, all we need to do to finish our router is implement the <code>navigated</code> function. And since you won’t learn anything without putting it into practice, let’s do this as an exercise.</p>
<h3>Exercise 1: Create a hash-based router</h3>
<p className="it">La especificación para <code>navigated</code>es simple; que llama <code>ReactDOM.render</code>, con la pasaron en el componente en función del valor de <code>window.location.hash</code>.</p>

<p className="p">The specification for <code>navigated</code> is simple; it calls <code>ReactDOM.render</code>, with the passed in component depending on the value of <code>window.location.hash</code>.</p>
<p className="it"><strong>Su tarea es poner en práctica la <code>navigated</code>función, el manejo de los siguientes valores hash:</strong></p>

<p className="p"><strong>Your task is to implement the <code>navigated</code> function, handling the following hashes:</strong></p>
<ul>
<li className="it">Para <code>#/</code>, utilizar un componente que contiene el texto<code>I'm amazing! I've made a Raw React Router!</code></li>

<li className="p">For <code>#/</code>, use a component containing the text <code>I'm amazing! I've made a Raw React Router!</code></li>
<li className="it">De lo contrario, utilizar un componente que contiene el texto <code>Not Found</code></li>

<li className="p">Otherwise, use a component containing the text <code>Not Found</code></li>
</ul>
<p className="it">Si necesita un archivo HTML para probar su script con, utilice el archivo de <a href="http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/">la parte 1</a> Ejercicio 's 1.</p>

<p className="p">If you need a HTML file to test your script with, use the file from <a href="http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/">part 1</a>‘s Exercise 1.</p>
<p className="it">Una vez que haya probado su trabajo mediante la introducción de varias direcciones URL, compare su solución para explotar al tocar o solo pasar el puntero del ratón sobre esta casilla:</p>

<p className="p">Once you have tested your work by entering in various URLs, compare your solution to mine by touching or hovering your mouse over this box:</p>
<div class="spoiler">
<div class="spoiler-mask"></div>


<p className="it">código</p>

<p className="p">code</p>
</div>
<p className="it">Felicitaciones, ahora saben cómo construir un router de trabajo! Dado el tiempo suficiente, podría utilizar lo que ha aprendido a construir un sistema de enrutamiento con todas las funciones.</p>

<p className="p">Congratulations, you now know how to build a working router! Given enough time, you could use what you’ve learned to build a full-featured routing system.</p>
<p className="it">Por supuesto, mientras que este router increíblemente básico <em>funciona</em> , tratando de integrarlo con nuestra lista de contactos de aplicación de las partes <a href="http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/">uno</a> y <a href="http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms/">dos</a> no va a escala. Así que vamos a aprender cómo aplicar estos fundamentos para una aplicación real.</p>

<p className="p">Of course, while this incredibly basic router <em>works</em>, trying to integrate it with our contact list app from parts <a href="http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/">one</a> and <a href="http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms/">two</a> is not going to scale. So let’s learn how to apply these fundamentals to a real app.</p>
<p className="it"><em>Esta es la tercera parte de mi serie en Raw React. Si eres nuevo en React.js, comenzar desde <a href="http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/">la primera parte</a> . De lo contrario, puede orientarse a parte de dos <a href="https://github.com/jamesknelson/raw-react-part-2">repositorio GitHub</a></em> .</p>

<p className="p"><em>This is part three of my series on Raw React. If you’re new to React.js, start from <a href="http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/">part one</a>. Otherwise, you can get your bearings at part two’s <a href="https://github.com/jamesknelson/raw-react-part-2">GitHub repository</a></em>.</p>
<h2><a id="managing-location" href="#managing-location">Managing the current location</a></h2>
<p className="it">En el ejemplo anterior, hemos referenciado directamente <code>window.location.hash</code>al elegir qué mostrar:</p>

<p className="p">In the example above, we’ve directly referenced <code>window.location.hash</code> when choosing what to render:</p>
<p>codigo</p>
<p className="it">Como hemos aprendido en la primera parte, React aplicaciones no volver a hacer ellos mismos. Debido a esto, cuando <code>window.location.hash</code>los cambios de valor, tenemos que llamar manualmente <code>ReactDOM.render</code>para actualizar el DOM. No tuvimos ningún problema de hacer esto en el primer ejercicio, pero ¿cómo podemos ir sobre la aplicación de esta a nuestra solicitud de lista de contactos?</p>

<p className="p">As we learned in part one, React apps don’t re-render themselves. Because of this, when <code>window.location.hash</code> changes value, we need to manually call <code>ReactDOM.render</code> to update the DOM. We had no trouble doing this in the first exercise, but how would we go about applying this to our contact list application?</p>
<h3>Review: The Story So Far</h3>
<p className="it">En la solicitud de la lista de contactos de las partes uno y dos, <code>ReactDOM.render</code>no se conoce de forma manual. En su lugar, se le llama desde dentro de nuestra   <code>setState</code>función. <em>Pero lo que hace la <code>setState</code>función tiene que ver con la representación?</em></p>

<p className="p">In our contact list application from parts one and two, <code>ReactDOM.render</code> is never called manually. Instead, it is called from within our  <code>setState</code> function. <em>But what does the <code>setState</code> function have to do with rendering?</em></p>
<p className="it">La <code>setState</code>función - como se puede esperar - se utiliza para actualizar el estado de la aplicación actual. Este estado se almacena en un mundial <code>state</code>variables - pero crucialmente - nos aseguramos de que <em>no</em> actualizar esta variable directamente. Y <em>porque</em> todos los cambios a <code>state</code>ocurrir a través de la <code>setState</code>función, también sabemos que la única vez que se debe volver a representar la aplicación está dentro de cada llamada a <code>setState</code>. Es decir - <em>siempre y cuando el estado de la aplicación se almacena por completo en <code>state</code>.</em></p>

<p className="p">The <code>setState</code> function – as you may expect – is used to update the current application state. This state is stored in a global <code>state</code> variable – but crucially – we make sure to <em>never</em> update this variable directly. And <em>because</em> all updates to <code>state</code> happen through the <code>setState</code> function, we also know that the only time the app must be re-rendered is within each call to <code>setState</code>. That is – <em>as long as the application’s state is completely stored in <code>state</code>.</em></p>
<p className="it">Una cosa más. Como <code>setState</code>es un mundial, que <em>podríamos</em> llamar desde cualquier lugar. Pero hemos decidido única llamada <code>setState</code>de funciones que manejan directamente la entrada del usuario. Llamamos a estas funciones <strong>las acciones</strong> , y colocarlos todos en una única ubicación dentro del código fuente, que pasa a través de ellos <code>props</code>a donde son requeridos.</p>

<p className="p">One more thing. As <code>setState</code> is a global, we <em>could</em> call it from anywhere. But  we’ve decided to only call <code>setState</code> from functions which directly handle user input. We call these functions <strong>actions</strong>, and place them all in a single location within the source code, passing them via <code>props</code> to where they are required.</p>
<h3>Location as state</h3>
<p className="it">Pero ahora que hemos recordó cómo nuestra aplicación encaja, parece que tenemos un problema: nuestro simple enrutador basado en hash requiere que nosotros llamamos <code>ReactDOM.render</code>de forma manual, pero nuestra aplicación requiere que <code>ReactDOM.render</code>se llama desde dentro <code>setState</code>.</p>

<p className="p">But now that we’ve remembered how our app fits together, it seems we have a problem: our simple hash-based router requires that we call <code>ReactDOM.render</code> manually, but our app requires that <code>ReactDOM.render</code> is called from within <code>setState</code>.</p>
<p className="it">Se puede pensar en una forma de reconciliar esto? Tener un pensamiento de que, a continuación, comprobar su intuición al tocar o solo pasar el puntero del ratón sobre esta casilla:</p>

<p className="p">Can you think of a way to reconcile this? Have a think about it, then check your intuition by touching or hovering your mouse over this box:</p>
<div class="spoiler">
<div class="spoiler-mask"></div>
Instead of directly accessing <code>window.location.hash</code> each time we render, we can instead store it <em>inside</em> our <code>state</code> object by calling <code>setState</code> within the hash change handler. In other words, we can turn our <code>navigated</code> function into an <em>action</em>.
</div>
<h3>Exercise 2: Adding routing to your contact list</h3>
<p className="it">Vamos a continuar desde donde lo dejamos en la parte 2, y dar a nuestra lista de contactos de APP algunas rutas! Para empezar, hay que guardar el sencillo proporcionando sólo dos rutas:</p>

<p className="p">Lets continue from where we left off in part 2, and give our contact list app some routes! To start, we’ll keep it simple by providing only two routes:</p>
<ul>
<li className="it"><code>#/contacts</code>, Que muestra la lista de contactos existente</li>

<li className="p"><code>#/contacts</code>, which displays the existing contact list</li>
<li className="it">una ruta por defecto, que muestra un mensaje de “no encontrado” y un enlace a <code>#/contacts</code></li>

<li className="p">a default route, which displays a “Not Found” message and a link to <code>#/contacts</code></li>
</ul>
<p className="it"><strong>Su tarea es poner en práctica los siguientes cambios:</strong></p>

<p className="p"><strong>Your task is to implement the following changes:</strong></p>
<ul>
<li className="it">Agregar una <code>navigated</code>función que almacena el hash actual<code>state.location</code></li>

<li className="p">Add a <code>navigated</code> function which stores the current hash in <code>state.location</code></li>
<li className="it">Llamar <code>navigated</code>al cargar la página, y en los acontecimientos posteriores al cambio de hash</li>

<li className="p">Call <code>navigated</code> on page load, and on subsequent hash change events</li>
<li className="it">Modificar <code>setState</code>para representar el contenido correcto para el valor actual de<code>state.location</code></li>

<li className="p">Modify <code>setState</code> to render the correct content for the current value of <code>state.location</code></li>
</ul>
<p className="it">Una vez que tenga que trabajar (o quedado atascado), compare su respuesta con la mía:</p>

<p className="p">Once you’ve got it working (or gotten stuck), compare your answer with mine:</p>


<p className="p"><iframe width="100%" height="600" class="" id="" data-url="http://jsbin.com/higiguh/embed?js,output" src="http://jsbin.com/higiguh/embed?js,output" ></iframe><script src="https://static.jsbin.com/js/embed.min.js?3.35.0"></script></p>
<div class="hint">
Are the JSBin examples getting a little hard to follow? A <a href="https://github.com/jamesknelson/raw-react-part-3">GitHub repository</a> with the source split over multiple files is available with this guide’s final solution.
</div>

<p className="it">Por supuesto, una sola aplicación página no debe <em>, literalmente,</em> ser una sola página. Así que vamos a añadir un formulario de edición!</p>

<p className="p">Of course, a single page app shouldn’t <em>literally</em> be a single page. So let’s add an edit form!</p>
<h2><a id="extracting-route-parameters" href="#extracting-route-parameters">Extracting route parameters</a></h2>
<p className="it">Nos gustaría ser capaz de especificar el contacto que desea editar, mediante la adición de su <code>id</code>al hash, siguiendo este patrón:</p>

<p className="p">We’d like to be able to specify the contact we want to edit by adding its <code>id</code> to the hash, following this pattern:</p>
<p>codigo</p>
<p className="it">La <code>&lt;id&gt;</code>parte de la almohadilla de arriba se llama un <strong>parámetro de ruta</strong> . Nótese cómo el parámetro está delineada por <code>/</code>los personajes; podrías estar familiarizado con esto si estás acostumbrado una herramienta del lado del servidor como Express o Ruby on Rails.</p>

<p className="p">The <code>&lt;id&gt;</code> part of the above hash is called a <strong>route parameter</strong>. Note how the parameter is delineated by <code>/</code> characters; you might be familiar with this if you’re used a server side tool like Express or Ruby on Rails.</p>
<p className="it">En realidad, no se trata sólo parámetros de la ruta que delinean con <code>/</code>- nuestros nombres de ruta son <em>también</em> intercalan entre barras. Dado que este es el caso, vamos a hacer nuestro trabajo más fácil mediante el almacenamiento de una <em>gran variedad de piezas</em> en <code>state.location</code>, en comparación con el mismo hash de:</p>

<p className="p">Actually, it isn’t just route parameters that we delineate with <code>/</code> – our route names are <em>also</em> sandwiched between slashes. Given this is the case, lets make our job easier by storing an <em>array of parts</em> in <code>state.location</code>, as opposed to the hash itself:</p>
<p>codigo</p>
<p className="it">¿Se dio cuenta cómo <em>no</em> escribir <code>['#', 'contacts', '&lt;id&gt;']</code>o <code>['', 'contacts', '&lt;id&gt;', '']</code>? Si bien estos son formas perfectamente válidas de almacenamiento de su ruta actual, la información que nos importa es todos ubicados entre los primeros y finales <code>/</code>caracteres. Así que vamos a cortar las cortezas:</p>

<p className="p">Did you notice how I <em>didn’t</em> write <code>['#', 'contacts', '&lt;id&gt;']</code> or <code>['', 'contacts', '&lt;id&gt;', '']</code>? While these are perfectly valid ways of storing your current route, the information we care about is all located between the first and final <code>/</code> characters. So let’s cut the crusts off:</p>
<p>codigo</p>
<p className="it"><em>Pero James</em> , te pido - no encaminamiento basado en direcciones URL me meten en problemas en el largo plazo? Si la estructura de mi URL cambios, la refactorización será una pesadilla! En realidad, estás en el clavo.</p>

<p className="p"><em>But James</em>, you ask – won’t routing based on URLs get me into trouble  in the long term? If my URL structure changes, refactoring it will be a nightmare! Actually, you’re spot on.</p>
<h3>URL parsing tools</h3>
<p className="it">Si bien este artículo trata sobre los <em>fundamentos</em> de enrutamiento con React, para cualquier <em>verdadero</em> proyecto es probable que desee utilizar una herramienta para asignar nombres a las rutas y los parámetros de la ruta, y para las operaciones de búsqueda / generará URIs que utilizan estos nombres.</p>

<p className="p">While this article is about the <em>fundamentals</em> of routing with React, for any <em>real</em> project you’ll probably want to use a tool to name your routes and route parameters, and to lookup/generate URIs using these names.</p>
<p className="it">La herramienta que utilizo para este propósito se llama <a href="http://unicornstandard.com/packages/uniloc.html">Uniloc</a> , y es parte del estándar del unicornio - mi colección de herramientas para aplicaciones basadas en JavaScript sola página. Y en la remota posibilidad desea aprender cómo construir una <em>verdadera</em> aplicación de React, se puede obtener una versión de la lista de contactos del proyecto <em>se extendió a utilizar Uniloc</em> simplemente mediante la firma de oír hablar de mis últimos artículos y herramientas! Pero yo divago.</p>

<p className="p">The tool I use for this purpose is called <a href="http://unicornstandard.com/packages/uniloc.html">uniloc</a>, and is part of Unicorn Standard – my collection of tools for JavaScript-based Single Page Applications. And on the odd chance you’d like to learn how to build a <em>real</em> react app, you can get a version of the contact list project <em>extended to use uniloc</em> just by signing up to hear about my latest articles and tools! But I digress.</p>
<script src="https://app.convertkit.com/assets/CKJS4.js?v=18"></script>

<div class="ck_form single_line ck_vertical width500">

  <div class="ck_form_fields">
  
    <h3>Get the uniloc/Raw React example project</h3>

    <div>
      <p className="it">¡Gracias! Por favor, consultar su correo electrónico para el enlace a sus Cheatsheets.</p>

      <p className="p">Thanks! Please check your email for the link to your cheatsheets.</p>
    </div>
  </div>
 </div>

<h3>Exercise 3: Selecting component props by hash</h3>
<p className="it">Ahora que ya sabe cómo extraer los parámetros de la ruta, deja para la creación efectiva de (sólo lectura) formulario de contacto. Aquí está el componente de vista vamos a utilizar:</p>

<p className="p">Now that you know how to extract the route parameters, lets actually set up a (read-only) contact form. Heres the view component we’ll use:</p>
<p className="it">codigo</p>

<p className="p">codigo</p>
<div class="hint">
Take special note of this view component’s <code>props</code>: while the contact objects from part two specify a <code>key</code> value and no <code>id</code>, this view’s <code>props</code> specify an <code>id</code> but no <code>key</code>. This is because <code>key</code> is a special prop which is consumed by React. See the <a href="https://facebook.github.io/react/docs/multiple-components.html#dynamic-children">React documentation</a> for more details.
</div>
<p className="it"><strong>Su tarea consiste en mostrar la <code>ContactView</code>virtud de la <code>/contacts/&lt;id&gt;/</code>ruta, y añadir enlaces a este punto de vista a la lista de contactos.</strong></p>

<p className="p"><strong>Your task is to display the <code>ContactView</code> under the <code>/contacts/&lt;id&gt;/</code> route, and add links to this view to the contact list.</strong></p>
<p className="it">Una vez que tenga este trabajo, compare su respuesta con la mía:</p>

<p className="p">Once you’ve got this working, compare your answer with mine:</p>


<p><iframe width="100%" height="600" class="" id="" data-url="http://jsbin.com/giveqi/embed?js,output" src="http://jsbin.com/giveqi/embed?js,output"></iframe><script src="http://static.jsbin.com/js/embed.min.js?3.35.0"></script></p>

<p className="it">Su aplicación está empezando a tomar forma! Puede agregar contactos, navegar entre las páginas, e incluso se puede utilizar los botones de avance / retroceso del navegador (no se ría, una gran cantidad de aplicaciones web se caen en pedazos cuando el usuario los toca).</p>

<p className="p">Your app is finally starting to take shape! You can add contacts, navigate between pages, and you can even use the browser forward/backward buttons (don’t laugh, a lot of web apps fall to pieces when the user touches them).</p>
<p className="it">Sin embargo, aunque es muy bueno que has logrado llegar tan lejos, que tiene una sentencia switch gigante justo justo en el medio de <code>setState</code>obviamente no va a escala. Así que vamos a arreglar esto con un <code>Application</code>componente.</p>

<p className="p">But while it’s great that you’ve managed to get this far, having a giant switch statement smack bang in the middle of <code>setState</code> obviously isn’t going to scale. So let’s fix this with an <code>Application</code> component.</p>
<h2><a id="the-application-component" href="#the-application-component">The Application component</a></h2>
<p className="it">El <code>Application</code>componente es el componente vamos a pasar a <code>ReactDOM.render</code>. Toma el <code>state</code>global como su <code>props</code>, y devuelve el resto de la aplicación:</p>

<p className="p">The <code>Application</code> component is the component we’ll pass to <code>ReactDOM.render</code>. It takes the <code>state</code> global as its <code>props</code>, and returns the rest of the application:</p>
<p>codigo</p>
<p className="it">Esto parece bastante simple, pero en realidad es un <em>acuerdo muy grande</em> . ¿Por qué?</p>

<p className="p">This seems pretty simple, but it’s actually a <em>really big deal</em>. Why?</p>
<p className="it">Una de las mayores fortalezas de React es que los componentes usados típicamente sin estado con ella se animan a diseñar aplicaciones que son fáciles de razonar acerca. Al especificar el estado de toda su interfaz de usuario con un único <code>state</code>objeto, se separa limpiamente su aplicación en dos partes:</p>

<p className="p">One of React’s biggest strengths is that the stateless components typically used with it encourage you to design apps which are easy to reason about. By specifying your entire user interface’s state with a single <code>state</code> object, you cleanly separate your app into two parts:</p>
<ul>
<li className="it">Un <strong>modelo</strong> , que <em>gestiona</em> el estado de la aplicación</li>

<li className="p">A <strong>model</strong>, which <em>manages</em> your application state</li>
<li className="it">Un <strong>punto de vista</strong> , que define cómo <em>hacen</em> ese estado</li>

<li className="p">A <strong>view</strong>, which defines how to <em>render</em> that state</li>
</ul>
<p className="it">Su <code>Application</code>componente es la interfaz entre el modelo y la vista. Debido a esto, un bien escrito <code>Application</code>componente <em>de un vistazo</em> que muestran <em>la forma en toda su aplicación encaja</em> .</p>

<p className="p">Your <code>Application</code> component is the interface between model and view. Because of this, a well written <code>Application</code> component will <em>at a glance</em> show you <em>how your entire app fits together</em>.</p>
<h3>Actions, Callbacks &amp; <code>Application</code></h3>
<p className="it">Como parte de conexión de una aplicación en conjunto, el <code>Application</code>componente también es responsable de pasar las acciones correctas a las vistas que se presta:</p>

<p className="p">As part of wiring your application together, your <code>Application</code> component is also responsible for passing the correct actions to the views which it renders:</p>
<p className="it">codigo</p>

<p className="p">codigo</p>
<div class="hint">
New to <code>Object.assign</code>? Read about it at <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign">Mozilla Developer Network</a>.
</div>
<p className="it">Pero a medida que nuestra aplicación está actualmente, todas las acciones son las funciones globales. ¿Por qué no sólo tiene que utilizar estas funciones de acción directa de los componentes de vista?</p>

<p className="p">But as our app currently stands, all actions are global functions. So why not just use these action functions directly from the view components?</p>
<p className="it">Cuando esta pregunta, es útil recordar la razón por la que estamos usando React en el primer lugar - queremos ser capaz de componer nuestra aplicación a partir de componentes reutilizables. Uso de acciones globales dentro de componentes de vista los ata a la aplicación específica, mientras que al mismo tiempo ocultar dependencias del componente de cualquiera que trate de asimilar la aplicación a través de su <code>Application</code>componente.</p>

<p className="p">When asking this question, it helps to remember the reason we’re using React in the first place – we want to be able to compose our application from reusable components. Using global actions within view components ties them to the specific application, while at the same time hiding the component’s dependencies from anyone trying to grok the app through its <code>Application</code> component.</p>
<h3>Exercise 4: Implement your <code>Application</code> component</h3>
<p className="it">La implementación de su <code>Application</code>componente es simple: todo lo que necesita hacer es cambiar la funcionalidad que actualmente se encuentra dentro de su <code>setState</code>función para un nuevo <code>Application</code>componente.</p>

<p className="p">Implementing your <code>Application</code> component is simple: all you need to do is shift the functionality which is currently inside your <code>setState</code> function to a new <code>Application</code> component.</p>
<p className="it">También, ya que con el tiempo queremos manejar la entrada del usuario en nuestro formulario de edición, vamos a tomar este ejercicio como una oportunidad para añadir vacío <code>updateContactForm</code>y <code>submitContactForm</code>acciones. Estas acciones deben de pasar de <code>Application</code>en el <code>ContactView</code>componente, que a su vez les pasará a <code>ContactForm</code>.</p>

<p className="p">Also, since we’ll eventually want to handle user input in our edit form, let’s take this exercise as an opportunity to add empty <code>updateContactForm</code> and <code>submitContactForm</code> actions. These actions should be passed from <code>Application</code> into the <code>ContactView</code> component, which will in turn pass them to <code>ContactForm</code>.</p>
<p className="it"><strong>Su tarea es poner en práctica el <code>Application</code>componente, con vacío <code>updateContactForm</code>y <code>submitContactForm</code>manipuladores.</strong></p>

<p className="p"><strong>Your task is to implement the <code>Application</code> component, with empty <code>updateContactForm</code> and <code>submitContactForm</code> handlers.</strong></p>
<p className="it">Cuando haya terminado, compare su aplicación con la mía. Debe ser casi idénticos:</p>

<p className="p">When you’ve finished, compare your implementation with mine. It should be nearly identical:</p>


<p className="p"><iframe   width="100%" height="600" class="" id="" data-url="http://jsbin.com/lafidoz/embed?js,output" src="http://jsbin.com/lafidoz/embed?js,output"></iframe><script src="https://static.jsbin.com/js/embed.min.js?3.35.0"></script></p>

<p className="it">Y con ese simple cambio, las tripas de su aplicación son ahora todo limpio y ordenado! Sin embargo, los usuarios no les importa si el botón “Guardar” no funciona. Así que vamos a solucionarlo.</p>

<p className="p">And with that simple change, your application’s guts are now all clean and tidy! But your users won’t care if the “Save” button doesn’t work. So let’s fix it.</p>
<h2><a id="navigating-programatically" href="#navigating-programatically">Navigating programatically</a></h2>
<p className="it">Acción actúa como el llamado por “salvar” a menudo tienen que enviar al usuario a una página diferente. Pero mientras que <code>&lt;a href="#/..."&gt;</code>las etiquetas proporcionan una forma sencilla de permitir a los usuarios navegar, no van a ayudarnos cuando queremos cambiar la ubicación <em>mediante programación</em> . Entonces, ¿qué vamos a hacer?</p>

<p className="p">Action functions like the one called by “Save” often need to send the user to a different page. But while <code>&lt;a href="#/..."&gt;</code> tags provide a simple way to let users navigate, they won’t help us when we want to change the location <em>programatically</em>. So what are we to do?</p>
<p className="it">Nuestro primer pensamiento podría ser simplemente cambiar nuestro botón “Guardar” para una <code>&lt;a&gt;</code>etiqueta diseñada como un botón. Pero esto no nos va a permitir llamar a una función de acción; El usuario será capaz de navegar, pero <em>no va a</em> ser capaz de guardar el contenido del formulario. Así que en lugar, vamos a imitar la funcionalidad de <code>&lt;a&gt;</code>desde <em>dentro de</em> nuestra acción mediante el uso de la <code>window.location.replace</code>función:</p>

<p className="p">Our first thought might be to simply change our “Save” button to an <code>&lt;a&gt;</code> tag styled like a button. But this will not allow us to call an action function; the user will be able to navigate, but <em>won’t</em> be able to save the form’s contents. So instead, let’s mimic the functionality of <code>&lt;a&gt;</code> from <em>within</em> our action by using the <code>window.location.replace</code> function:</p>
<p>codigo</p>
<h3>Exercise 5: Navigate within an action</h3>
<p className="it">Cuando el usuario hace clic en el botón “Guardar” antes de la entrada de un formulario ha cambiado, el usuario todavía esperará ser llevado de vuelta a la lista de contactos.</p>

<p className="p">When the user clicks on the “Save” button before the form input has changed, the user will still expect to be taken back to the contacts list.</p>
<p className="it"><strong>Su tarea es poner en práctica la <code>submitContactForm</code>acción de tal forma que envía el usuario a la lista de contactos.</strong></p>

<p className="p"><strong>Your task is to implement the <code>submitContactForm</code> action such that it sends the user to the contact list.</strong></p>
<p className="it">Cuando haya terminado, compare su aplicación con la mía al tocar o se cierne sobre esta caja. Debe ser casi idénticos:</p>

<p className="p">When you’ve finished, compare your implementation with mine by touching or hovering over this box. It should be nearly identical:</p>
<div class="spoiler">
<div class="spoiler-mask"></div>
<p className="it"></p>

<p className="p"></p>
<p className="it">codigo</p>

<p className="p">codigo</p>
<p className="it"> </p>

<p className="p">
</p></div>

<p className="it">Maravilloso, el usuario ya no será confundido cuando presionan el botón y nada salvo sucede! Sin embargo, dada la aplicación muestra inmediatamente “no encontrado” cuando se carga, hay una buena probabilidad de que ni siquiera se van a <em>ver</em> el botón de guardar. Vamos a hacer algo al respecto.</p>

<p className="p">Wonderful, the user will no longer be confused when they press the save button and nothing happens! But, given the app immediately displays “Not Found” when it is loaded, there’s a good chance they’ll never even <em>see</em> the save button. Let’s do something about that.</p>
<h2><a id="redirecting" href="#redirecting">Redirecting</a></h2>
<p className="it">Redireccionamiento es sólo una forma elegante de decir “enviar al usuario la ubicación A cuando solicitan la ubicación B”. Y ahora que sabemos cómo navegar mediante programación, la redirección de aplicación es sencillo: basta con actualizar <code>window.location</code>como estamos manejando eventos de navegación:</p>

<p className="p">Redirecting is just a fancy way of saying “sending the user to location A when they request location B”. And now that we know how to navigate programatically, implementing redirection is simple: just update <code>window.location</code> as we’re handling navigation events:</p>
<p className="it">codigo</p>

<p className="p">codigo</p>

<p className="it">El único truco aquí es asegurarse de que no se actualiza <code>setState</code>hasta que haya alcanzado su destino final. Esto se debe a la actualización <code>window.location</code>causará <code>navigated</code>que se llamará una vez que el navegador ha actualizado su URL. Si actualiza <code>setState</code>en cada paso que das, que va a terminar haciendo cada ruta intermedia. Esto hará que los problemas de rendimiento; Más importante, sin embargo, tendrá un aspecto <em>horrible</em> .</p>

<p className="p">The only trick here is to make sure you don’t update <code>setState</code> until you’ve reached the final destination. This is because updating <code>window.location</code> will cause <code>navigated</code> to be called once the browser has updated its URL. If you update <code>setState</code> on each step you take, you’ll end up rendering each intermediate route. This will cause performance issues; more importantly though, it will look <em>terrible</em>.</p>
<h3>Why redirects are necessary</h3>
<p className="it">Dentro de una sola aplicación de la página (o en la web en general), por lo general, quiere asegurarse de que lo que es visible en la barra de direcciones:</p>

<p className="p">Within a single page app (or the web in general), you generally want to ensure that what is visible in the address bar:</p>


<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2015/10/address-bar.png" alt="Address bar" width="100%"></img></p>
<p className="it">Corresponde a lo que es realmente visible dentro de la página:</p>

<p className="p">Corresponds to what is actually visible within the page:</p>


<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2015/10/page.png" alt="Page content" width="100%"></img></p>
<p className="it"><em>James</em> , que dicen - Ya sé que. Acabo de leer a través de un artículo completo sobre el encaminamiento por amor de Dios - y además - <em>esto todavía no explica por qué son necesarias las redirecciones</em> . Pero la razón por la que lo trajo hasta es que a veces hay una dirección URL que corresponde a <em>más de una página</em> .</p>

<p className="p"><em>James</em>, you say – I already know that. I’ve just read through an entire article on routing for crying out loud – and besides – <em>this still doesn’t explain why redirects are necessary</em>. But the reason I brought it up is that sometimes you have a URL which corresponds to <em>more than one page</em>.</p>
<p className="it">El ejemplo clásico de esto es la ubicación raíz, es decir <code>#/</code>. ¿Sabe por qué el contenido debajo <code>#/</code>puede variar? Tener un pensamiento rápido sobre ella, a continuación, comprobar su respuesta al tocar o solo pasar el puntero del ratón sobre esta casilla:</p>

<p className="p">The textbook example of this is the root location, i.e. <code>#/</code>. Do you know why the content underneath <code>#/</code> may vary? Have a quick think about it, then check your answer by touching or hovering your mouse over this box:</p>
<div class="spoiler">
<div class="spoiler-mask"></div>
<p className="it">La ubicación raíz es la primera ubicación que un usuario verá cuando abría una aplicación. Sin embargo, lo que un usuario quiere ver inicialmente dependerá de lo que ha visto antes.</p>
<p className="p">The root location is the first location a user will see when they open an app. However, what a user wants to see initially will depend on what they’ve seen before.</p>


<p className="it">Es el usuario de un cliente que ha iniciado sesión en? Probablemente se quieren ver a sus contactos. ¿Son alguien completamente nuevo? Vamos a querer que les muestre el formulario de inscripción.</p>

<p className="p">Is the user a logged-in customer? They’ll probably want to see their contacts. Are they someone completely new? We’ll want to show them the registration form.</p>
</div>
<p className="it">Con el fin de asegurarse de que la dirección URL de la aplicación y coincidencia de contenido, tendrá que volver a dirigir al usuario de la ubicación raíz con el hash que coincide con su visión deseada.</p>

<p className="p">In order to ensure that the app’s URL and content match, you’ll need to redirect the user from the root location to the hash which matches their desired view.</p>
<h3>Exercise 6: Handle the root location</h3>
<p className="it">Ahora que ya sabe <em>qué</em> necesita una redirección de la raíz y <em>la forma</em> de ponerla en práctica, por qué no darle una oportunidad?</p>

<p className="p">Now that you know <em>why</em> you need a root redirect and <em>how</em> to implement it, why not give it a shot?</p>
<p className="it">Y mientras estás en ello, ya que la aplicación se desplaza mediante programación en múltiples lugares, refactorizar su código mediante la sustitución de su llamada existente a <code>window.location.replace</code>una nueva <code>startNavigating(newLocation)</code>acción.</p>

<p className="p">And while you’re at it, since the app now navigates programatically in multiple places, refactor your code by replacing your existing call to <code>window.location.replace</code> with a new <code>startNavigating(newLocation)</code> action.</p>
<p className="it"><strong>Su tarea es implementar una redirección desde la raíz hasta la ubicación <code>#/contacts</code>, el uso de su nueva <code>startNavigating</code>función.</strong></p>

<p className="p"><strong>Your task is to implement a redirect from the root location to <code>#/contacts</code>, using your new <code>startNavigating</code> function.</strong></p>
<p className="it">Una vez que haya terminado, compare su aplicación con la mía al tocar o se cierne sobre esta caja. Debe ser casi idénticos:</p>

<p className="p">Once you’ve finished, compare your implementation with mine by touching or hovering over this box. It should be nearly identical:</p>
<div class="spoiler">
<div class="spoiler-mask"></div>

<p className="it">codigo</p>

<p className="p">codigo</p>


</div>

<p className="it">¡Buen trabajo! En este punto, sólo hay una cosa que queda: hacer que el formulario de edición <em>de trabajo</em> . Y, dado que haya completado <a href="http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms/">la parte 2</a> , ya debería ser capaz de realizar esto por sí mismo! Pero antes de hacerlo, hay una cosa más que debe saber sobre:</p>

<p className="p">Great work! At this point, there is only one thing left: making the edit form <em>work</em>. And, given you’ve completed <a href="http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms/">part 2</a>, you should already be capable of completing this yourself! But before you do, there is one more thing you should know about:</p>
<h2><a id="transitioning-between-locations" href="#transitioning-between-locations">Transitioning between locations</a></h2>
<p className="it">Si tuviéramos que dibujar una línea de tiempo de la transición entre dos rutas, se vería algo como esto:</p>

<p className="p">If we were to draw a timeline of the transition between two routes, it would look something like this:</p>


<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2015/10/flow-1.png" alt="Flow with one render" width="100%"></img></p>
<p className="it">Cuando la ubicación actual cambia principalmente <em>debido a que el usuario quiere ver algo más</em> , esto tiene sentido total. La intención del usuario es <em>para navegar</em> , por lo que la única propiedad en virtud de <code>state</code>la cual tiene que cambiar es <code>location</code>.</p>

<p className="p">When the current location changes primarily <em>because the user wants to see something else</em>, this makes total sense. The user’s intent is <em>to navigate</em>, so the only property under <code>state</code> which needs to change is <code>location</code>.</p>
<p className="it">¿Pero qué sucede cuando la navegación pasa por alguna otra razón, como la presentación de los cambios a un contacto? ¡Echemos un vistazo! Suponiendo que ponemos en práctica nuestra <code>submitContactForm</code>acción con algo como lo siguiente:</p>

<p className="p">But what happens when navigation happens for some other reason, like submitting changes to a contact? Let’s have a look! Assuming we implement our <code>submitContactForm</code> action with something like the following:</p>
<p className="it">codigo</p>

<p className="p">codigo</p>
<p className="it">Nuestro flujo se verá así:</p>

<p className="p">Our flow will look like this:</p>


<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2015/10/flow-2.png" alt="Flow with two renders" width="100%"></img></p>
<p className="it">Hay un problema aquí. ¿Lo ves? Una vez que creo que sí, comprobar su comprensión al tocar o solo pasar el puntero del ratón sobre esta casilla:</p>

<p className="p">There is a problem here. Do you see it? Once you think you do, check your understanding by touching or hovering your mouse over this box:</p>
<div class="spoiler">
<div class="spoiler-mask"></div>
<p className="it"><code>ReactDOM.render</code>primero hace que el nuevo componente de vista sin los contactos actualizados, <em>a continuación,</em> vuelve a renderizar con los datos actualizados. Esto ralentiza las cosas, pero lo más importante también resultará en datos antiguos parpadear brevemente en la pantalla.</p>

<p className="p"><code>ReactDOM.render</code> first renders the new view component without the updated contacts, <em>then</em> re-renders it with the updated data. This slows things down, but more importantly will also result in old data briefly flashing on screen.</p>

</div>
<p className="it">Para eliminar este problema, se puede añadir una nueva <code>transitioning</code>propiedad a nuestro <code>state</code>objeto. Cuando se inicia la navegación, <code>state.transitioning</code>se ajustará a <code>true</code>, y cuando completa, que va a cambiar de nuevo a <code>false</code>. Al garantizar que <code>setState</code>sólo sirve para hacer cuando <code>state.transitioning</code>es <code>false</code>, eliminamos el doble render.</p>

<p className="p">To eliminate this problem, we can add a new <code>transitioning</code> property to our <code>state</code> object. When navigation starts, <code>state.transitioning</code> will be set to <code>true</code>, and when complete, it will change back to <code>false</code>. By ensuring <code>setState</code> only renders when <code>state.transitioning</code> is <code>false</code>, we eliminate the double render.</p>
<div class="hint">
If we were to handle <code>state.transitioning</code> in our <code>Application</code> component’s <code>render</code> method instead, it would also be possible to apply CSS transitions between views. 
</div>
<h2>Exercise 7: Complete implementation of the edit form</h2>
<p className="it">Con la aplicación de la lista de contactos es casi completa, sólo hay una cosa por hacer:</p>

<p className="p">With the contact list app being almost complete, there is only one thing left to do:</p>
<p className="it"><strong>Su tarea es hacer que el formulario de edición de trabajo.</strong></p>

<p className="p"><strong>Your task is to make the edit form work.</strong></p>
<p className="it">Esto implicará:</p>

<p className="p">This will involve:</p>
<ul>
<li className="it">Adición de un nuevo objeto a <code>state</code>que almacena los valores actuales de formas de edición de los distintos contacto</li>

<li className="p">Adding a new object to <code>state</code> which stores the current values of the various contact’s edit forms</li>
<li className="it">La actualización de su <code>ContactView</code>componente para mostrar los datos editados</li>

<li className="p">Updating your <code>ContactView</code> component to show the edited data</li>
<li className="it">Completando el <code>updateContactForm</code>y <code>submitContactForm</code>acciones</li>

<li className="p">Completing the <code>updateContactForm</code> and <code>submitContactForm</code> actions</li>
</ul>
<p className="it">Tenga cuidado para asegurarse de que los datos introducidos no se guarda hasta que el usuario realmente presiona “Guardar”. Además, asegúrese de que la validación se realiza correctamente y los errores se muestran correctamente.</p>

<p className="p">Be careful to make sure that the entered data is not saved until the user actually presses “Save”. Also, ensure that validation is performed correctly and any errors are displayed properly.</p>
<p className="it">Por último, no se olvide de poner en práctica <code>state.transitioning</code>! Si bien no puede <em>sentirse</em> necesario, con una aplicación de este tamaño, asegurando que <code>ReactDOM.render</code>no se llama varias veces será cada vez más importante como su aplicación comienza a crecer.</p>

<p className="p">Finally, don’t forget to implement <code>state.transitioning</code>! While it may not <em>feel</em> necessary with an app of this size, ensuring that <code>ReactDOM.render</code> is not called multiple times will become increasingly important as your app starts to grow.</p>
<p className="it">Una vez que esté satisfecho con su aplicación, compararlo con esta guía de <a href="https://github.com/jamesknelson/raw-react-part-3">repositorio GitHub</a> . Asegúrese de que sus características coinciden con la especificación, pero no se obsesione con las diferencias en la aplicación.</p>

<p className="p">Once you’re happy with your implementation, compare it to this guide’s <a href="https://github.com/jamesknelson/raw-react-part-3">GitHub repository</a>. Make sure your features match the specification, but don’t get too hung up on differences in implementation.</p>

<p className="it">Y ahí lo tienes, ahora sabe los fundamentos de enrutamiento con React! Date unas palmaditas en la espalda por un trabajo bien hecho!</p>

<p className="p">And there you have it, you now know the fundamentals of routing with React!  Pat yourself on the back for a job well done!</p>
<h2><a id="your-next-steps" href="#your-next-steps">Your next steps</a></h2>
<p className="it">Ahora que ya sabe <em>cómo</em> construir un router, el siguiente paso es salir y <em>hacer</em> , ¿verdad?</p>

<p className="p">Now that you know <em>how</em> to build a router, the next step is to go out and <em>do</em> it, right?</p>
<p className="it">Espera un minuto. El siguiente paso <em>en realidad</em> depende de lo que usted está construyendo. ¿Va a crear una aplicación pequeña, con sólo tres o cuatro rutas? En ese caso, es hora de empezar! Pero lo que si usted está construyendo algo un poco más grande?</p>

<p className="p">Hold on a minute. The next step <em>actually</em> depends on what you’re building. Are you creating a tiny app with only three or four routes? In that case, its time to get started! But what if you’re building something a little bigger?</p>
<p className="it">Con el fin de evitar la línea 1000- <code>Application</code>componentes cada vez será más importante centrarse en <em>cómo sus rutas se definen</em> como su aplicación se inicia a escala. Y aunque nada le impide la aplicación de este mismo, <em>no todo se resuelve mejor con React Sin editar</em> .</p>

<p className="p">In order to avoid 1000-line <code>Application</code> components it will become increasingly important to focus on <em>how your routes are defined</em> as your app starts to scale. And while nothing is stopping you from implementing this yourself, <em>not everything is best solved with Raw React</em>.</p>
<h3>Don’t reinvent the wheel</h3>
<p className="it">La última cosa que quiero a nadie a tomar distancia de esta guía es que las herramientas son malas. Las herramientas son <em>muy</em> importantes. <em>Pero</em> - si todo lo que tiene es un martillo, todo parece un clavo. Sin el conocimiento de cómo funciona un router, lo único que tienes es <a href="https://github.com/rackt/react-router">React-enrutador</a> et al.</p>

<p className="p">The last thing I want anyone to take away from this guide is that tools are bad. Tools are <em>incredibly</em> important. <em>But</em> — if all you have is a hammer, everything looks like a nail. Without the knowledge of how a router works, all you really have is <a href="https://github.com/rackt/react-router">react-router</a> et al.</p>
<p className="it">Ahora no me malinterpreten - reaccione-router es una gran herramienta para una serie de casos de uso. Pero ahora que sabe cómo funciona el enrutamiento, debe ser capaz de recoger la mejor herramienta para <em>su caso de uso</em> . Y en la remota posibilidad de que usted decide que éste es un React cruda, un router basado en hash, es probable que desee una herramienta para ayudar a mapear URL a las rutas. Y como es el caso, hice Uniloc sólo para este propósito. Y para darle un buen comienzo, he juntado un pequeño proyecto de ejemplo para mis suscriptores que casa Uniloc con su lista de contactos de aplicación.</p>

<p className="p">Now don’t get me wrong – react-router is a great tool for a number of use cases. But now that you know how routing works, you should be able to pick the best tool for <em>your use case</em>. And on the odd chance that you decide this is a Raw React, hash-based router, you’ll probably want a tool to help map URLs to routes. And as it happens, I made uniloc just for this purpose. And to give you a head start, I’ve put together a small example project for my subscribers which marries uniloc with your contact list app.</p>
<p className="it">A cambio de su dirección de correo electrónico, te voy a enviar los próximos episodios de la serie <em>como son lanzados</em> . Como beneficio adicional, también recibirá inmediatamente la fuente del proyecto Uniloc mejorada, y 3 <em>de impresión optimizada</em> Cheatsheets PDF - en <a href="http://jamesknelson.com/wp-content/uploads/2015/09/react-cheatsheet-thumbnail.png">React</a> , <a href="http://jamesknelson.com/wp-content/uploads/2015/09/es6-cheatsheet-thumbnail.png">ES6</a> y <a href="http://jamesknelson.com/wp-content/uploads/2015/09/promises-cheatsheet-thumbnail.png">JavaScript promete</a> .</p>

<p className="p">In return for your e-mail address, I’ll send you the next episodes in the series <em>as they’re released</em>. As a bonus you’ll also immediately receive the uniloc-enhanced project source, and 3 <em>print-optimised</em> PDF cheatsheets – on <a href="http://jamesknelson.com/wp-content/uploads/2015/09/react-cheatsheet-thumbnail.png">React</a>, <a href="http://jamesknelson.com/wp-content/uploads/2015/09/es6-cheatsheet-thumbnail.png">ES6</a> and <a href="http://jamesknelson.com/wp-content/uploads/2015/09/promises-cheatsheet-thumbnail.png">JavaScript promises</a>.</p>
<script src="https://app.convertkit.com/assets/CKJS4.js?v=21"></script>

<p className="it">Una cosa más - <em>Me encanta saber de los lectores. </em>Si tiene algo que decir, enviar <a href="https://twitter.com/james_k_nelson">@james_k_nelson</a> un tweet, o enviar un correo electrónico a <a href="mailto:james@jamesknelson.com">james@jamesknelson.com</a> . <em>¡Gracias por leer!</em></p>

<p className="p">One more thing – <em>I love hearing from readers.</em> If you have something to say, send <a href="https://twitter.com/james_k_nelson">@james_k_nelson</a> a tweet, or send me an e-mail at <a href="mailto:james@jamesknelson.com">james@jamesknelson.com</a>. <em>Thanks for reading!</em></p>



<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2015/10/overview2.png" alt="Raw React Routing" width="100%"></img></p>

<h2>Read More</h2>
<ul>


<li className="p"><a href="http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/">Learn Raw React Part 1</a></li>


<li className="p"><a href="http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms/">Learn Raw React Part 2: Ridiculously Simple Forms</a></li>


<li className="p"><a href="http://jamesknelson.com/push-state-vs-hash-based-routing-with-react-js/">Push-state vs hash-based routing</a></li>


<li className="p"><a href="http://jamesknelson.com/react-js-by-example-interacting-with-the-dom/">Interacting with the DOM in React</a></li>
</ul>
<h2>Related Links</h2>
<ul>


<li className="p"><a href="https://github.com/jamesknelson/raw-react-part-3">Full source at Github</a></li>


<li className="p"><a href="https://facebook.github.io/react/docs/multiple-components.html#dynamic-children">React Documentation: The <code>key</code> prop</a></li>
</ul>

</div> 
</div> 
</div> 
   
  
  
  </Layout>
  )