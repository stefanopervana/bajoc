import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='Post5'>
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
																		<h1 class="entry-title">The 5 Types Of React Application State</h1>
								</header>
								
								
								<div class="entry-meta">
									<span class="post-category">
										posted in <a href="http://jamesknelson.com/category/flux/" rel="category tag">Flux</a>, <a href="http://jamesknelson.com/category/react/" rel="category tag">React</a>, <a href="http://jamesknelson.com/category/state-of-react/" rel="category tag">State Of React</a>									</span>
									
									
									<span class="post-date">
										on <a href="http://jamesknelson.com/5-types-react-application-state/" title="6:27 am" rel="bookmark"><time class="entry-date" datetime="2012-11-09T23:15:57+00:00">August 29, 2016</time></a>
									</span>
							
									
									<span class="by-author"> by										<span class="author vcard">
											<a class="url fn n" href="http://jamesknelson.com/author/jamesknelson/" title="View all posts by James K Nelson" rel="author">James K Nelson</a>
										</span>
								
									</span>
							
									
																		
																	</div>
							
								
																
<div class="entry-content clearfix">
<p className="it">No sé ustedes, pero cuando empecé a escribir aplicaciones Reaccionar, <a href="http://jamesknelson.com/state-react-1-stateless-react-app/">luché</a> para decidir dónde debe ir mi estado. No importa cómo lo reorganizan <code>setState</code>las llamadas, las cosas nunca se sintió del todo bien.</p>

<p className="p">I don’t know about you, but when I started writing React apps, <a href="http://jamesknelson.com/state-react-1-stateless-react-app/">I struggled</a> to decide where my state should go. No matter how I re-arranged <code>setState</code> calls, things never felt quite right.</p>


<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2016/08/mess.png" width="100%" alt=" &quot;Messy state&quot;"></img></p>
<p className="it">Y quizás por eso me emocioné cuando encontré Redux. Redux me dio <a href="http://jamesknelson.com/state-react-2-inception-redux/">un solo lugar para poner todo mi estado</a> . Que sonaba bien en teoría.</p>

<p className="p">And maybe that is why I got so excited when I found Redux. Redux gave me <a href="http://jamesknelson.com/state-react-2-inception-redux/">a single place to put all my state</a>. Which sounded great in theory.</p>


<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2016/08/statebox.png" width="100%" alt=" &quot;What if&quot;"></img></p>
<p className="it">Pero entonces me di cuenta de que tener un lugar para poner las cosas no significa necesariamente que sean fáciles de conseguir.</p>

<p className="p">But then I realised that having one spot to put things doesn’t necessarily make them easy to get to.</p>


<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2016/08/statebox-inside.png" width="100%" alt=" &quot;Still messy&quot;"/></p>
<p className="it">Resulta que necesitaba algo más que un lugar para poner las cosas. También necesito un sistema para ponerlos en el lugar correcto.</p>

<p className="p">It turns out that I needed more than just a place to put things. I also need a system for putting them in the right place.</p>


<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2016/08/drawers.png" width="100%" alt=" &quot;Banzai!&quot;"/></p>
<p className="it">Para mí, ese sistema provenía de la división de mi estado en cinco categorías. Resultó el problema de decidir “qué hace este pedazo de estado se refieren a todo el otro estado”, en el problema de decidir “qué tipo de estado es este”. Y como resulta que, este es un <strong>conjunto mucho más fácil.</strong></p>

<p className="p">For me, that system came from splitting my state into five categories. It turned the problem of deciding “how does this piece of state relate to all the other state”, into the problem of deciding “what type of state is this”. And as it turns out, this is a <em>whole lot easier.</em></p>

<p className="p"><span id="more-1081"></span></p>
<p className="it">Así que aquí está la oferta. Reaccionar aplicaciones tienen cinco tipos de estado. Cada tipo de estado tiene un número de reglas que se sigue. Interactúa con los otros tipos de Estado en formas bien definidas - <strong>con tal de que sigue las reglas. </strong>Y en base a estas reglas, usted encontrará que hay maneras de almacenar el estado que <strong>solo tiene sentido</strong> .</p>

<p className="p">So here’s the deal. React apps have five types of state. Each type of state has a number of rules which it follows. It interacts with the other types of state in well defined ways — <em>as long as it follows the rules.</em> And based on these rules, you’ll find that there are ways of storing the state which <em>just make sense</em>.</p>
<p className="it">Así que sin más preámbulos, los cinco tipos de estado son:</p>

<p className="p">So without further ado, your five types of state are:</p>
<ul>
<li className="p">Data</li>
<li className="p">Communication</li>
<li className="p">Control</li>
<li className="p">Session</li>
<li className="p">Location</li>
</ul>
<p className="it">Y de estos cinco, “Datos” es la que realmente necesita un mejor nombre. También pasa a ser el más fácil de explicar. Así que vamos a profundizar en.</p>

<p className="p">And of these five, “Data” is the one which really needs a better name. It also happens to be the easiest one to explain. So let’s dig in.</p>
<h2>Data</h2>
<p className="it">Estado de datos cubre la información, que su aplicación almacena temporalmente sobre el gran mundo. Es decir, que cubre sus datos empresariales.</p>

<p className="p">Data state covers information which your application temporarily stores about the big wide world. That is, it covers your business data.</p>
<p className="it">Ahora digamos que usted está construyendo algo cadera y fresco como una aplicación de facturación. Ejemplos del estado de datos para su aplicación incluirá cosas recibidas desde el servidor - facturas, contactos, recibos, etc., y, como todos sus datos proviene del mundo exterior, que probablemente va a tener algún tipo de identificador que se utiliza para solicitarlo:</p>

<p className="p">Now let’s say you’re building something hip and cool like an invoicing application. Examples of the Data state for you application will include things received from the server — invoices, contacts, receipts, etc. And, as all of your data comes from the outside world, it is probably going to have some sort of identifier which you use to request it:</p>
<p className="it"><strong><code>GET</code>el <code>/invoice</code>con <code>?id=happiness</code>, o algo</strong></p>

<p className="p"><em><code>GET</code> the <code>/invoice</code> with <code>?id=happiness</code>, or something</em></p>
<p className="it">En realidad, voy a consagrar esto como <strong>La Regla de Estado de datos</strong> :</p>

<p className="p">Actually, I’m going to enshrine this as <strong>The Rule of Data state</strong>:</p>
<p className="it"><strong>Cada pieza de información recibida tiene un <strong>tipo</strong> y un <strong>selector</strong> que especifica exactamente la que se reciben los datos.</strong></p>

<p className="p"><em>Every piece of received Data has a <strong>type</strong>, and a <strong>selector</strong> which exactly specifies which data was received.</em></p>
<p className="it">Este hecho hace que sea fácil diseñar una tienda Redux para nuestros datos; como mínimo, que va a incluir una forma de asignar un tipo y la identificación de un objeto recibido. También incluirá acciones para actualizar la tienda con objetos recibidos.</p>

<p className="p">This fact makes it easy to design a Redux store for our data; at minimum, it is going to include a way to map a type and id to a received object. It will also include actions to update the store with received objects.</p>


<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2016/08/shelf.png" width="100%" alt=" &quot;Data goes on shelves&quot;"/></p>
<p className="it">Y esto es impresionante, porque ahora tenemos un almacén de datos que se puede acceder desde cualquier lugar dentro de la aplicación usando <a href="https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options">conexión</a> . También, siempre y cuando sus datos sigue la regla del estado de los datos, se puede condimentar las cosas con los índices y los componentes de la orden de encargo más alto también.</p>

<p className="p">And this is awesome, because now we have a data store which can be accessed from anywhere within the application using <a href="https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options">connect</a>. Also, as long as your data follows the rule of data state, you can spice things up with indexes and custom higher order components too.</p>
<p className="it">Por supuesto, los datos no se limita a aparecer mágicamente en una aplicación. Hay que solicitarlo, y luego esperar hasta que la solicitud tiene éxito o no. Y aquí es donde viene en Estado de comunicación.</p>

<p className="p">Of course, Data doesn’t just magically appear in an application. We need to request it, and then wait until the request succeeds or fails. And that is where Communication state comes in.</p>
<h2>Communication state</h2>
<p className="it">Este tipo de estado cubre la información aparentemente simple, pero un tanto espinoso que representa cosas como hiladores de carga y mensajes de error. También cubre el estado que usted no se haya dado cuenta que introduce en su aplicación cuando se aprobó una devolución de llamada a una petición HTTP.</p>

<p className="p">This type of state covers the seemingly simple yet somewhat thorny information which represents things like loading spinners and error messages. It also covers the state which you may not have realised you introduced into your application when you passed a callback to a HTTP request.</p>
<p className="it">Pero la explicación anterior es bastante compleja. Para simplificar las cosas, vamos a olvidarse de lo Estado de comunicación <strong>hace</strong> , y en lugar de pensar acerca de lo que es. De hecho, <strong>La Regla de Estado de comunicación</strong> cubre lo siguiente:</p>

<p className="p">But the above explanation is pretty complex. To simplify things, lets forget about what Communication state <em>does</em>, and instead think about what it is. In fact, <strong>The Rule of Communication state</strong> covers this:</p>
<p className="it"><strong>Estado de comunicación es el estado de todas las solicitudes que aún no es completa a otros servicios.</strong></p>

<p className="p"><em>Communication state is the status of any not-yet-complete requests to other services.</em></p>
<p className="it">Esto significa que todos los siguientes estados de comunicación son:</p>

<p className="p">This means that all of the following are communication state:</p>
<ul>
<li className="it">El tipo / selector para todos los datos que espera recibir</li>

<li className="p">The type/selector for any Data you expect to receive</li>
<li className="it">El tipo de selector y el cambio esperado de cualquier operación que ha solicitado en datos</li>

<li className="p">The type, selector and expected change of any operations you have requested on Data</li>
<li className="it">Los mensajes de error para cualquier cosa que no van bastante como estaba previsto</li>

<li className="p">The error messages for anything which didn’t go quite as planned</li>
</ul>

<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2016/08/inoutbox.png" width="100%" alt=" &quot;Communications goes in queues&quot;"/></p>
<p className="it">Definición de Estado de comunicación de esta manera tiene dos ventajas principales:</p>

<p className="p">Defining Communication state this way has two major benefits:</p>
<script src="https://app.convertkit.com/assets/CKJS4.js?v=18"></script>

<div class="ck_form single_line ck_vertical width500">

  <div class="ck_form_fields">
  
    <h3>Speaking of Communication benefits...</h3>

    <div id="ck_success_msg">
      <p className="it">¡Gracias! Por favor, consultar su correo electrónico para el enlace a sus Cheatsheets.</p>

      <p className="p">Thanks! Please check your email for the link to your cheatsheets.</p>
    </div>

  </div>
 </div>

<ol>
<li className="it">Se puede almacenar con un simple reductor Redux que maneja una gran variedad de objetos Solicitar</li>
<li className="p">You can store it with a simple Redux reducer which manages an array of Request objects</li>
<li className="it">Ahora puede calcular el estado ( <code>retrieving</code>, <code>updating</code>, <code>fuckwhathappened</code>, etc.) de cualquier dato en su tienda con una <strong>pura función</strong> de su estado de datos y comunicaciones.</li>
<li className="p">You can now compute the status (<code>retrieving</code>, <code>updating</code>, <code>fuckwhathappened</code>, etc.) of any Data in your store with a <em>pure function</em> of your Data and Communications state.</li>
<li className="it">Sin srsly. Eso significa que ahora que nunca tenga que escribir una <code>setState(&#123; saving: trueorfalse &#125;)</code>vez de nuevo.</li>
<li className="p">No srsly. That means that now you never have to write a <code>setState(&#123;  saving: trueorfalse &#125; )</code> ever again.</li>
</ol>
<p className="it">Por lo tanto el estado y el estado de Comunicaciones de Datos pueden ser implementados como tiendas independientes, administrados por Redux. Los dos son accesibles a toda la aplicación utilizando <code>connect</code>. Estoy empezando a ver un patrón aquí - tal vez todo el estado se ajusta bien a un determinado tipo de reductor de la cual toda la aplicación puede hacer uso de ella? <strong>Si sólo fuera así de simple.</strong></p>

<p className="p">So both Communications state and Data state can be implemented as independent stores, managed by Redux. They’re both accessible to your entire application using <code>connect</code>. I’m starting to see a pattern here — maybe all state fits well into a certain type of Reducer which the entire application can make use of it? <em>If only it were that simple.</em></p>
<h2>Control state</h2>
<p className="it">En contraste con los dos tipos de estado anteriores, estado de control <strong>no</strong> representan el entorno de la aplicación. En su lugar, se refiere al estado que el usuario tiene de entrada en la aplicación. Entradas de formulario, los elementos seleccionados, cosas por el estilo.</p>

<p className="p">In contrast to the above two types of state, Control state <em>does not</em> represent the application’s environment. Instead, it refers to the state which the user has input into the app. Form inputs, selected items, things like that.</p>
<p className="it"><strong>Cosas como wha? </strong>Sí, por lo que puede haber notado que las formas y los elementos seleccionados son completamente diferentes tipos de información. Los elementos seleccionados probablemente toman la forma de una sola cadena que representa un id, mientras que las formas pueden ser enormes objetos anidados. Y eso es lo que pasa con el estado de control - su forma en realidad no sigue ningún patrón.</p>

<p className="p"><em>Things like wha?</em> Yeah, so you may have noticed that forms and selected items are completely different types of information. Selected items probably take the form of a single string representing an id, while forms can be huge nested objects. And that is the thing about control state — its shape doesn’t really follow any pattern.</p>
<p className="it">Afortunadamente, sin embargo, se <strong>hace</strong> seguir otro tipo de patrón. Usted ve, la cosa sobre el estado de control es que por lo general es específico para una sola vista. O pantalla. O <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.tl1cvdgxg">componente de contenedor</a> . Lo que nos lleva a <strong>la regla del estado de control</strong> :</p>

<p className="p">Luckily though, it <em>does</em> follow another type of pattern. You see, the thing about control state is that it is generally specific to a single view. Or screen. Or <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.tl1cvdgxg">container component</a>. Which brings us to <strong>The Rule of Control state</strong>:</p>
<p className="it"><strong>Estado de control es el estado que es específico para un componente contenedor determinado, y que no se almacena en el URL de la pantalla o en la API HTML5 Historia.</strong></p>

<p className="p"><em>Control State is state which is specific to a given container component, and which is not stored in the screen’s URL or in the HTML5 History API.</em></p>


<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2016/08/controlbox.png" width="100%" alt=" &quot;Each view's control state gets its own box&quot;"/></p>
<p className="it">Grande, por lo que tenemos un patrón para trabajar. Ahora ¿cómo se usa ese patrón para escribir reductores Redux para nuestros puntos de vista? Ten un poco de pensar en ello, y una vez que tienes una respuesta, comprobarlo con solo pasar el puntero del ratón por encima o tocando el cuadro de abajo.</p>

<p className="p">Great, so we have a pattern to work with. Now how do we use that pattern to write Redux reducers for our views? Have a little think about it, and once you’ve got an answer, check it by hovering your mouse over or touching the box below.</p>
<div class="spoiler">
<div class="spoiler-mask"></div>
You don’t.
</div>
<p className="it">¿Pensaste en eso por un tiempo? Lo siento. Pero creo que esto es un punto importante para hacer. Y Dan Abramov, autor de Redux, <a href="https://twitter.com/dan_abramov/status/699241546248536064">parece pensar lo mismo</a> :</p>

<p className="p">Did you think about that for a while? Sorry. But I think this is an important point to make. And Dan Abramov, author of Redux, <a href="https://twitter.com/dan_abramov/status/699241546248536064">seems to think so too</a>:</p>
<blockquote>
<p className="it">No utilice Redux hasta que tenga problemas con la vainilla Reaccionar</p>

<p className="p">Don’t use Redux until you have problems with vanilla React</p>
</blockquote>
<p className="it">Recuerde cómo los datos y las Comunicaciones Estado tiene que estar disponible para toda la aplicación? Estado de control sólo tiene que estar disponible para una vista específica. Y eso significa que <code>setState</code>- es decir, la vainilla React - es <strong>perfecta</strong> .</p>

<p className="p">Remember how Data and Communications state needs to be available to the entire application? Control state only needs to be available to a specific view. And that means that <code>setState</code> — i.e. vanilla React — is <em>perfect</em>.</p>
<p className="it">De hecho, acabo pasado por alto un punto importante, así que me lo deletree un poco mejor:</p>

<p className="p">Actually, I just glossed over an important point, so let me spell it out a little better:</p>
<p className="it"><strong>Usted no tiene que utilizar el mismo método para almacenar todo tipo de estado. Seriamente.</strong></p>

<p className="p"><em>You don’t have to use the same method for storing every type of state. Seriously.</em></p>
<p className="it">¿Tiene el estado que tiene una forma predecible y tiene que estar disponible en cualquier lugar dentro de su aplicación? Utilice Redux. ¿Qué hay de estado con una forma impredecible que se limita a un solo punto de vista? Utilizar <code>setState</code>. Tal vez usted tiene estado que tiene que estar disponible en todas partes, pero tiene una forma impredecible? Uhhh ...</p>

<p className="p">Do you have state which has a predictable shape and needs to be available everywhere within your application? Use Redux. What about state with an unpredictable shape which is limited to one view? Use <code>setState</code>. Maybe you have state which needs to be available everywhere but has an unpredictable shape? Uhhh…</p>
<h2>Session state</h2>
<p className="it">Cuando usted tiene información que debe estar disponible en toda la aplicación, pero su forma no está bien definido que el horario de su proyecto, es probable que sea el estado de sesión.</p>

<p className="p">When you have information which needs to be available application-wide, but its shape is less well defined than your project’s schedule, it is probably Session state.</p>
<p className="it">O dicho de otra, y obtenemos <strong>la primera regla del estado de la sesión</strong> :</p>

<p className="p">Or put it another, and we get <strong>The First Rule of Session state</strong>:</p>
<p className="it"><strong>El estado de sesión contiene información sobre el ser humano, que actualmente está utilizando la aplicación.</strong></p>

<p className="p"><em>Session state contains information about the human being which is currently using your application.</em></p>
<p className="it">Esto incluye las cosas obvias - su identificador de usuario, permisos, etc. Pero también puede incluir las preferencias del usuario para la aplicación cómo debería funcionar.</p>

<p className="p">This includes the obvious stuff – their user id, permissions, etc. But it also may include a user’s preferences for how the application should work.</p>
<p className="it">Ahora bien, una cosa sobre el estado de sesión es que partes de ella pueden ser bastante similar al control del Estado. Por ejemplo, es posible que tenga un pedazo de estado de control que representa a qué partes de una vista de árbol están contraer o expandir. Usted también puede tener un pedazo de estado de sesión que representa ... exactamente lo mismo. Pero te prometo que hay una diferencia. Y es probable que pueda averiguarlo usted mismo con <strong>la segunda regla de estado de sesión</strong> :</p>

<p className="p">Now one thing about session state is that parts of it can be pretty similar to Control state. For example, you may have a piece of Control state which represents which parts of a tree view are collapsed or expanded. You may also have a piece of Session state which represents … exactly the same thing. But I promise you there is a difference. And you can probably figure it out yourself with <strong>The Second Rule of Session State</strong>:</p>
<p className="it"><strong>El estado de sesión solamente se lee cada vez que un componente está montado.</strong></p>

<p className="p"><em>Session state is only ever read when a component is mounted.</em></p>
<p className="it">Por supuesto, esto significa que la versión de sesión de la expansión de su vista de árbol es una <strong>copia</strong> del estado de control. Claro, su vista se puede <strong>escribir</strong> a la sesión cada vez que quiera. Pero sólo lee de ella para inicializar la vista. O, para decirlo de otra manera: el estado de sesión se puede utilizar para guardar las preferencias.</p>

<p className="p">Of course, this means that the Session version of your tree view’s expansion is a <em>copy</em> of the Control state. Sure, your view can <em>write</em> to the session whenever it wants. But it only reads from it to initialise the view. Or to put it another way: Session state can be used to save preferences.</p>
<p className="it">Está bien. Entonces, ¿cómo se almacenan estado de la sesión? Me gusta esto:</p>

<p className="p">Ok, cool. So how does session state get stored? Like this:</p>


<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2016/08/cloud.png" width="100%" alt=" &quot;Session state comes from above&quot;"/></p>
<p className="it">El estado de sesión llueve desde arriba. En el mundo Reaccionar, eso significa que es probable que sólo un objeto viejo y simple que ha encontrado su camino en su componente de <a href="https://facebook.github.io/react/docs/context.html">contexto</a> . Es probable que desee alguna manera para asegurarse de que no desaparece entre la carga de la página, pero estoy seguro de que usted puede darse cuenta de eso. Pero antes de hacerlo, vamos a hablar del más malo, el estado más malo de todos ellos.</p>

<p className="p">Session state rains down from above. In the React world, that means it is probably just a plain old object which has found its way into your component’s <a href="https://facebook.github.io/react/docs/context.html">context</a>. You’ll probably want some way to make sure it doesn’t disappear between page loads, but I’m sure you can figure that out. But before you do, let’s talk about the baddest, meanest state of them all.</p>
<h2>Location state</h2>
<p className="it">¿Qué cuenta como <strong>ubicación</strong> ? Intuitivamente, yo diría que “cualquier cosa que se puede dar a alguien direcciones concretas a”. Pero una explicación wishy washy así no se nos va a llevar muy lejos. Así que vamos a probar algo concreto:</p>

<p className="p">What counts as <em>location</em>? Intuitively, I’d say “anything which you can give someone concrete directions to”. But a wishy washy explanation like that isn’t going to get us very far. So let’s try something concrete:</p>
<p className="it"><strong>Localización estado es que UTF-8 desorden que aparece en la barra de URL.</strong></p>

<p className="p"><em>Location state is that UTF-8 mess which appears in your URL bar.</em></p>
<p className="it">Esta definición tiene una serie de cosas a su favor:</p>

<p className="p">This definition has a number of things going for it:</p>
<ul>
<li className="it">Que UTF-8 lío sin duda representa el estado de su solicitud</li>
<li className="p">That UTF-8 mess definitely represents the state of your application</li>
<li className="it">Compartiéndola entre los usuarios es algo así como dar instrucciones</li>
<li className="p">Sharing it between users is kind of like giving directions</li>
<li className="it">La L en el URL refiere a <strong>Locatooor</strong></li>
<li className="p">The L in URL stands for <em>Locatooor</em></li>
</ul>
<p className="it">Pero tan grande como esta definición es, en realidad no es completa. Para empezar, no tiene en cuenta el hecho de que se puede dar a la gente direcciones a partes de la aplicación que no <strong>tienen</strong> una dirección URL única. Además, la API HTML5 Historia en realidad le permite almacenar el estado separado de la URL. Acertadamente, esto se hace llamando a un método llamado <code>pushState</code>.</p>

<p className="p">But as great as this definition is, it isn’t really complete. For a start, it doesn’t take into account the fact that you can give people directions to parts of your application which don’t <em>have</em> a unique URL. Also, the HTML5 History API actually lets you store state separately from the URL. Aptly, you do this by calling a method named <code>pushState</code>.</p>
<p className="it">Para ser honesto, realmente no he tenido éxito en la fijación abajo una definición precisa de Localización estado. Así que me he ido con una pragmática en su lugar. Y también pasa a ser <strong>la regla de estado Localidad</strong> :</p>

<p className="p">To be honest, I haven’t really succeeded in pinning down an accurate definition of Location state. So I’ve gone with a pragmatic one instead. And it also happens to be <strong>The Rule of Location state</strong>:</p>
<p className="it"><strong>Localización estado es la información almacenada en el URL</strong> y <strong>la <a href="https://developer.mozilla.org/en/docs/Web/API/History">historia de HTML5</a> <code>state</code> objeto</strong></p>

<p className="p"><em>Location state is the information stored in the URL</em> and <em>the <a href="https://developer.mozilla.org/en/docs/Web/API/History">HTML5 History</a> <code>state</code> object</em></p>
<p className="it">Convenientemente, esta definición abarca tanto el <strong>tipo</strong> de información que se almacena, así como el <strong>método</strong> para el almacenamiento de la misma. Por desgracia, no nos ayuda con la estructura. En su lugar, nos obliga a almacenar una de las piezas más importantes del Estado en toda nuestra aplicación como una sangrienta <strong>cadena</strong> .</p>

<p className="p">Handily, this definition covers both the <em>type</em> of information which is stored, as well as the <em>method</em> for storing it. Unfortunately, it doesn’t help us with the structure. Instead, it forces us into storing one of the most important pieces of state in our entire application as a bloody <em>string</em>.</p>
<p className="it">Y no hace falta decir que ningún webmaster competente va a construir una aplicación web a gran escala con el enrutamiento basado en <code>window.location.hash.indexOf</code>. Pero una de las cosas divertidas sobre URLs es que mientras están almacenados como cadenas, no representan cadenas. Que en realidad representan una jerarquía. Y esto sucede a solaparse con jerarquía de componentes de la aplicación.</p>

<p className="p">And it goes without saying that no competent webmaster is going to build a large scale web application with routing based on <code>window.location.hash.indexOf</code>.  But one of the funny things about URLs is that while they’re stored as strings, they don’t represent strings. They actually represent a hierarchy. And that happens to overlap with your application’s component hierarchy.</p>

<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2016/08/tree.png" width="100%" alt=" &quot;Location is a subset of a tree&quot;"/></p>
<p className="it">De hecho, mediante la combinación de la jerarquía almacenada en las URL con la capacidad de almacenar la ubicación adicional con <code>pushState</code>, se puede construir un <strong>árbol de ubicaciones</strong> que se asigna a un subconjunto (esperemos adecuada) de árbol de componentes de la aplicación. O para decirlo de otra manera, su estado de ubicación termina siendo un conjunto de indicadores que permiten y desactivar ramas de su aplicación. Simple, ¿verdad?</p>

<p className="p">In fact, by combining the hierarchy stored in URLs with the ability to store extra location with <code>pushState</code>, you can build a <em>location tree</em> which maps to a (hopefully proper) subset of your application’s component tree. Or to put it another way, your location state ends up being a set of flags which enable and disable branches of your application. Simple, right?</p>
<p className="it">Sería, si no fuera por los efectos secundarios.</p>

<p className="p">It would be, if it wasn’t for side effects.</p>
<h2>Side effects</h2>
<p className="it">De los cinco tipos de estado, cuatro de ellos sobre todo de sus propios asuntos. Cambios en los datos, comunicación, control y estado de la sesión serán <strong>generalmente</strong> no causa otros tipos de estado para cambiar también.</p>

<p className="p">Of our five types of state, four of them mostly mind their own business. Changes to Data, Communication, Control and Session state will <em>generally</em> not cause other types of state to change as well.</p>
<p className="it">Localización estado es un juego totalmente diferente. Cada vez que cambia, encontrará otro estado cambiando también:</p>

<p className="p">Location state is a whole different ball game. Every time it changes, you’ll find other state changing too:</p>
<ul>
<li className="it">Cambio de ubicación monta componentes de contenedor, provocando el estado de control para cambiar</li>
<li className="p">Changing Location mounts container components, causing Control state to change</li>
<li className="it">Cambio de ubicación hace peticiones HTTP que causan Estado de comunicación para cambiar, antes de que también causan estado a cambios</li>
<li className="p">Changing Location makes HTTP requests which cause Communication state to change, before also causing Data state to change</li>
<li className="it"><strong>Cambio de ubicación puede incluso causar que cambiará! </strong>Eso es lo redirige hacer.</li>
<li className="p"><em>Changing Location can even cause Location to change!</em> That’s what redirects do.</li>
</ul>
<p className="it">Así que aquí está la cosa sobre su estado después de haber estructurado así: de repente te das cuenta de la cantidad de un dolor en el culo efectos secundarios no controlados son.</p>

<p className="p">So here’s the thing about having your state structured well: you suddenly realise how much of a pain in the arse uncontrolled side effects are.</p>
<p className="it">Por suerte, ellos no tienen que permanecer sin control. Eso es lo que <strong>los controladores</strong> son para. ¿Quieres saber cómo usarlos? A continuación, suscribirse para asegurarse de que no se pierda en el Episodio 4 de <strong>Estado de Reaccionar</strong> , donde se discute la C en MVC! Incluso me voy a lanzar en 5 ReactJS libres y Cheatsheets JavaScript:</p>

<p className="p">Luckily, they don’t have to stay uncontrolled. That’s what <em>controllers</em> are for. Want to find out how to use them? Then subscribe to make sure you don’t miss out on Episode 4 of <em>State Of React</em>, where I discuss the C in MVC! I’ll even throw in 5 free ReactJS and JavaScript cheatsheets:</p>
<script src="https://app.convertkit.com/assets/CKJS4.js?v=21"></script>

<div class="ck_form ck_vertical_subscription_form ck_horizontal">
  <div class="ck_form_content">
      <h3 class="ck_form_title">I will send you useful articles, cheatsheets and code.</h3>
      <div class="ck_description">
          I won't send you useless inbox filler. <em>No spam, ever.</em>
      </div>
  </div>

  <div class="ck_form_fields">

    <div>


      <p className="p">Thanks! Please check your email for the link to your cheatsheets.</p>
    </div>

  </div>

 </div>


<p className="p">codigo</p>
<p className="it">Una cosa más - <strong>Me encanta escuchar tus preguntas, ofertas y opiniones. </strong>Si tiene algo que decir, dejar un comentario o enviar un correo electrónico a <a href="mailto:james@jamesknelson.com">james@jamesknelson.com</a> . Estoy deseando escuchar de usted!</p>

<p className="p">One more thing – <em>I love hearing your questions, offers and opinions.</em> If you have something to say, leave a comment or send me an e-mail at <a href="mailto:james@jamesknelson.com">james@jamesknelson.com</a>. I’m looking forward to hearing from you!</p>
<h2>More Reading</h2>
<ul>
<li className="p"><a href="http://jamesknelson.com/state-react-1-stateless-react-app/">State of React #1: A stateless React app?</a></li>
<li className="p"><a href="http://jamesknelson.com/state-react-2-inception-redux">State of React #2: From Inception to Redux</a></li>
<li className="p"><a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">Presentational and Container components</a></li>
<li className="p"><a href="https://facebook.github.io/react/docs/context.html">React Context</a></li>
<li className="p"><a href="https://developer.mozilla.org/en/docs/Web/API/History">The HTML5 History API</a></li>
</ul>
</div>									
</div>
</div> 
   
  
  
  </Layout>
  )