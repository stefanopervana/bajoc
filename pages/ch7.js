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
   <header>
<h1>Learn Raw React: Ridiculously Simple Forms</h1>
</header>

                                
<div className="entry-meta">

<span className="post-date">
on <a href="http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms/" title="10:11 am" rel="bookmark"><time className="entry-date" datetime="2012-11-09T23:15:57+00:00">September 20, 2015</time></a>
</span>
</div>

<div className="entry-content clearfix">

<p className="it">Por lo tanto - que tenga la caída de React, e incluso se ha construido una pequeña aplicación. Pero después de hacer su aplicación se ven bien , se recuerda que también es necesario para hacer que funcione . Y eso es cuando se empieza a buscar bibliotecas de formularios.</p>

<p className="p">So – you’ve got the hang of React, and you’ve even built a little app. But after making your app <em>look nice</em>, you remember that you also need to make it <em>work</em>. And that’s when you start searching for form libraries.</p>

<p className="it">En primer lugar nos fijamos para disfrutar de herramientas para estructurar datos y flujo del evento. A continuación, cambiar el foco a las bibliotecas que reducen la repetición en componentes de la forma. Y mientras estás en ello, las herramientas que validan la entrada del usuario sin duda ayudarían. Herramientas como React las formas y formsy-React y de flujo y redux y RxJS y como uno redditor lo puso :</p>

<p className="p">First you look for tools to structure data and event flow. Then you shift focus to libraries which reduce repetition in form components. And while you’re at it, tools which validate user input would certainly help. Tools like react-forms and formsy-react and flux and redux and RxJS and as one redditor <a href="https://www.reddit.com/r/reactjs/comments/383e99/good_patterns_for_forms/cs09gcn">put it</a>:</p>

</div>
<blockquote>

<p className="it">He estado evaluando unos frameworks por ahí. Ha sido la pesadilla de mi existencia durante los últimos dos semanas.</p>


<p className="p">I’ve been evaluating a few frameworks out there. It’s been the bane of my existence for the past <em>two weeks.</em></p>

</blockquote>

<p className="it">No era la idea de que las herramientas se ahorrará tiempo ?</p>
<p className="p"><strong>Wasn’t the whole idea that tools would <em>save you time</em>?</strong></p>

<p className="it">¿Por qué gastar dos semanas investigando cuando se podría haber implementado la parte más importante en tres minutos? Su ni siquiera parecido a lo que hay que pensar que dura; todo lo que tiene que hacer es seguir este ejercicio:</p>

<p className="p">Why spend <em>two weeks</em> investigating when you could have implemented the most important part in <em>three minutes?</em> Its not even like you’d have to think that hard; all you have to do is follow this exercise:</p>

<p className="p"></p>

<h2>Exercise 1 – Collecting user input</h2>

<p className="it">Esta es la segunda parte de mi serie en Raw React. Si eres nuevo en React, comenzar desde la primera parte . De otro modo, obtener el código de arranque de la parte de un repositorio GitHub.</p>

<p className="p"><em>This is part two of my series on Raw React. If you’re new to React, start from <a href="http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/">part one</a>. Otherwise, get the starter code from part one’s <a href="https://github.com/jamesknelson/raw-react-part-1">GitHub repository</a></em>.</p>

<p className="it">Antes de continuar con el ejercicio, vamos a responder a una pregunta de revisión rápida: Si de un elemento puede tomar y valores, pueden también tener una ? Toque o pase el ratón sobre el cuadro de la respuesta:propsstringarrayfunction</p>

<p className="p">Before we move on to the exercise, let’s answer a quick revision question: If an element’s <code>props</code> can take <code>string</code> and <code>array</code> values, can they also take a <code>function</code>? Touch or hover your mouse over this box for the answer:</p>
<p className="it">¡Sí! Las funciones pasadas a se denominan funciones de devolución de llamada .props</p>

<div className="spoiler">
<p className="p">Yes! Functions passed to <code>props</code> are called <strong>callback functions</strong>.</p>
 
 </div>

<p className="it">La recopilación de las pulsaciones de teclado de un elemento se lleva a cabo haciendo pasar una función de devolución de llamada a su prop, así:<code>onChange</code></p>

<p className="p">Gathering keystrokes from an <code>&lt;input&gt;</code> element is accomplished by passing a callback function to its <code>onChange</code> prop, like so:</p>

<div className="image"><img src="/static/james001.jpg" width="100%" alt="Image"/></div>

<div className="">

<p className="it">Pero este ejercicio se titula recogiendo la entrada del usuario, no las funciones de devolución de llamada - así que vamos a recoger los diversos cambios de nuestros elementos. Y qué mejor componente para gestionar los cambios a un objeto que la primera parte de :<code>ContactForm</code></p>

<p className="p">But this exercise is titled <em>collecting user input</em>, not <em>callback functions</em> – so let’s collect the various changes from our <code>&lt;input&gt;</code> elements. And what better component to manage changes to a <code>contact</code> object than part one’s <code>ContactForm</code>:</p>



</div>
<div className="image"><img src="/static/james002.jpg" width="100%" alt="Image"/></div>
<div className="">

<p className="it">Así como un elemento <code>&lt;input&gt;</code> muestra su valor <code> actual </code> y emite cambios a través de su devolución de llamada <code>onChange</code> para mostrar un<code> value</code> (que ya hace) y emitir nuevos objetos <code>contact</code> mediante un <code>onChange</code> callback</p>

<p className="p">Just as an <code>&lt;input&gt;</code> element displays its current <code>value</code> and emits changes via its <code>onChange</code> callback, we’d like our <code>ContactForm</code> to display a <code>value</code> (which it already does), and <em>emit new <code>contact</code> objects via an <code>onChange</code> callback</em>.</p>

<p className="it">Así, después de modificar adecuadamente:<code>ContactForm.propTypes</code></p>
<p className="p">So, after modifying <code>ContactForm.propTypes</code> appropriately:</p>

</div>
<div className="image"><img src="/static/james003.jpg" width="100%" alt="Image"/></div>
<div className="">

<p className="it">Y añadiendo un <code>console.log</code> a nuestra clase <code>ContactView</code> para probar nuestro trabajo:</p>
<p className="p">And adding a <code>console.log</code> to our <code>ContactView</code> class to test our work:</p>

</div>
<div className="image"><img src="/static/james004.jpg" width="100%" alt="Image"/></div>
<div className="">

<p className="it">Su tarea consiste en agregar un elemento de trabajo <code>onChange</code> a la clase <code>ContactForm</code>.</p>

<p className="p"><strong>Your task is to add a working <code>onChange</code> prop to the <code>ContactForm</code> class.</strong></p>


<p className="it">Esto implicará la adición de callbacks <code>onChange</code> a los elementos <code>&lt;input&gt;</code> y <code>&lt;textarea&gt;</code>. Estas devoluciones de llamada llaman a la devolución de llamada <code>onChange</code> de <code>ContactForm</code>, emitiendo una copia del valor existente con los cambios aplicados a los valores apropiados. El nuevo valor de su elemento de formulario está disponible a través del paso en el <code>target</code> <a href="https://facebook.github.io/react/docs/events.html">SyntheticEvent</a> (véase el ejemplo anterior).</p>

<p className="p">This will involve adding <code>onChange</code> callbacks to the <code>&lt;input&gt;</code> and <code>&lt;textarea&gt;</code> elements. These callbacks call <code>ContactForm</code>‘s own <code>onChange</code> callback, emitting a copy of the existing <code>value</code> with changes applied to the appropriate values. Your form element’s new <code>value</code> is available through the passed in <a href="https://facebook.github.io/react/docs/events.html">SyntheticEvent</a> <code>target</code> (see above example).</p>

<p className="it">Una vez que todo está funcionando como se esperaba, cada pulsación de tecla en el formulario de contacto debería emitir un mensaje de consola. Podes ver esto en acción con la siguiente solución en JSBin.</p>

<p className="p">Once everything is working as expected, each keystroke in the contact form should emit a console message. You can see this in action with the below JSBin solution.</p>

</div>
<div className="hint">

<p className="it">Sugerencia: ¡No olvides que esto tiene un significado diferente dentro de una función anidada!</p>
<p className="p"><strong>Hint:</strong> Don’t forget that <code>this</code> is has a different meaning within a nested <code>function</code>!</p>

</div>
<div className="">
<p></p>

</div>
<div className="hint">

<p className="it">Sugerencia: Aunque no es estrictamente necesario, la asignación de objetos de ES6 hará que tu vida sea mucho más fácil aquí por lo que sería una persona terrible si no lo mencionara. Utilizá el MDN polyfill para habilitarlo.</p>
<p className="p"><strong>Hint:</strong> While not strictly necessary, ES6’s <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign">Object.assign</a> will make your life so much easier here that I’d be a terrible person if I didn’t mention it. Use the MDN <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill">polyfill</a> to enable it.</p>


<p className="it">Aquí tenes cómo utilizar <code>Object.assign</code> en este ejercicio:</p>

<p className="p">Here is how you’d use <code>Object.assign</code> in this exercise:</p>

<div className="image"><img src="/static/james005.jpg" width="100%" alt="Image"/></div>

</div>
<p><iframe  width="100%" height="600" class="" id="" data-url="http://jsbin.com/pebujejace/embed?console,output" src="http://jsbin.com/pebujejace/embed?console,output"></iframe></p>


<p className="it">Enhorabuena: ahora completastes la parte más importante de tu formulario. Por supuesto, cuando estes construyendo formularios por tu cuenta, no vas a obtener los <code>propTypes</code> correctos que se te entregan en un plato; Va a necesitar para peinar a través de la documentación de React para encontrar lo que funciona, o echar un vistazo a mi React.js Cheatsheet. Pero yo divago. Vamos a seguir adelante e implementar rápidamente la parte divertida de tu formulario.</p>

<p className="p">Congratulations – you’ve now completed the most <em>important</em> part of your form! Of course when you’re building forms on your own, you’re not going to get the correct <code>propTypes</code> handed to you on a platter; you’re either going to need to comb through the React documentation to find what works, or take a quick look at my React.js Cheatsheet. But I digress. Let’s move on and quickly implement the <em>fun</em> part of your form.</p>

<div className="image"><img src="/static/james006.jpg" width="100%" alt="Image"/></div>
    <h2>Exercise 2 – Displaying changes</h2>

<p className="it">¿Puedes recordar cómo nos fuimos mostrando nuevos datos en la primera parte? Todo lo que necesitas hacer es crear un nuevo ReactElement con los datos actualizados, y pasarlo a ReactDOM.render:</p>

<p className="p">Can you remember how we went about displaying new data in <a href="#">part one</a>? All you need to do is create a new <code>ReactElement</code> with the updated data, and pass it to <code>ReactDOM.render</code>:</p>

<div className="image"><img src="/static/james007.jpg" width="100%" alt="Image"/></div>

<p className="it">El único problema es que actualmente los nuevos datos sólo están disponibles para el componente ContactView:</p>

<p className="p">The only problem being that the new data is currently only available to the <code>ContactView</code> component:</p>

<div className="image"><img src="/static/james008.jpg" width="100%" alt="Image"/></div>

<p className="it">¿Cómo accederías al nuevo contacto desde el punto de entrada de la aplicación? Usando callbacks, por supuesto!</p>

<p className="p">How would you access the new <code>contact</code> from the application’s entry point? Using callbacks, of course!</p>

<p className="it">tu tarea consiste en agregar un prop <code>onContactChange</code> al componente <code>ContactView</code> y utilizarlo para mostrar los cambios más recientes.</p>


<p className="p"><strong>Your task is to add an <code>onContactChange</code> prop to the <code>ContactView</code> component, and use this to display the latest changes.</strong></p>

<p className="it">Una vez completado, debes tener un formulario de trabajo:</p>

<p className="p">Once complete, you should have a working form:</p>

<p><iframe width="100%" height="600" class="" id="" data-url="http://jsbin.com/fomege/embed?js,output" src="http://jsbin.com/fomege/embed?js,output"></iframe></p>

<p className="it">¡Y ahora sabes todo lo que necesitas saber para construir Formas Ridículamente Simples con React! Así que hablemos de:</p>

<p className="p">And now you know everything you need to know to build Ridiculously Simple Forms with React! So let’s talk about:</p>

<h2>Why?</h2>

<p className="it">La primera vez que vi un componente form con <code>value</code> y props <code>onChange</code>, pensé para mí: esto es estúpido de mierda! ¿Por qué mi forma debe tener un valor prop cuando los elementos <code>&lt;input&gt;</code> debajo de él también tienen props de <code>value</code>? ¿No es esa duplicación de código? ¿No es eso no separar las preocupaciones? Lo sentía algo menos elegante, pero aquí les estoy diciendo que construyan forms de esa manera - ¿por qué?</p>

<p className="p">The first time I saw a form component with <code>value</code> and <code>onChange</code> props, I thought to myself: <em>this is fucking stupid!</em> Why should my form have a <code>value</code> prop when the <code>&lt;input&gt;</code> elements underneath it have <code>value</code> props too? Isn’t that code duplication? Isn’t that failing to separate concerns? It felt anything but elegant, but here I am telling you to build forms that way — <em>why?</em></p>

<p className="it">La característica asesina de React es que nos ayuda a crear interfaces de usuario que son fáciles de razonar. Pero React no puede hacer esto por sí mismo; Necesitamos ayudarlo asegurándonos de que los <code>props</code> de un componente nos dicen todo sobre él. Esto significa que los datos mostrados en nuestro formulario deben estar disponibles bajo su <code>value</code> y que los cambios deben ser emitidos a través de devoluciones de llamada, no ocultos dentro del estado del componente de formulario.</p>

<p className="p">React’s killer feature is that it helps us make user interfaces which are <em>easy to reason about</em>. But React can’t do this by itself; we need to help it out by making sure that a component’s <code>props</code> tell us everything about it. This means that our form’s displayed data must all be available under its <code>value</code>, and that changes must be emitted through callbacks — <em>not</em> hidden inside the form component’s state.</p>


<p className="it">Y la cosa es - no estaríamos manejando ese estado si no tuviéramos que usarlo. Incluso si fuéramos a encontrar una manera de mover los datos de los componentes <code>&lt;input&gt;</code> a donde es necesario sin pasarlo a través del valor de <code>ContactForm</code> y los props <code>onChange</code>, todavía tendría que haber alguna forma de hacer que la transferencia suceda.</p>


<p className="p">And the thing is — we wouldn’t be managing that state if we didn’t need to use it. Even if we were to find a way to move data from the <code>&lt;input&gt;</code> components to where it is needed <em>without</em> passing it through <code>ContactForm</code>‘s <code>value</code> and <code>onChange</code> props, there would still need to be <em>some</em> way of making that transfer happen.</p>



<p className="it">En los proyectos más grandes, todo este cableado puede hacer un poco más difícil de grok la imagen más grande. En estos casos, herramientas como Flux ayudarán a agregar estructura para gestionar su complejidad. Pero, si estás empezando un nuevo proyecto, no tiene complejidad para administrar! Así que mientras que nuestras formas ridículamente simples no pueden ser particularmente elegante, son sin duda increíblemente simples:</p>

<p className="p">In larger projects, all this wiring <em>can</em> make it a little harder to grok the bigger picture. In these cases, tools like Flux will help add structure to manage your complexity. <em>But,</em> if you’re just starting a new project, you don’t <em>have</em> any complexity to manage! So while our Ridiculously Simple Forms may not be particularly <em>elegant</em>, they are certainly incredibly <em>simple</em>:</p>

<p className="p"><img src="http://jamesknelson.com/wp-content/uploads/2015/09/banner.jpg" alt="Elegant vs Simple"></img></p>

<div className="hint">

<p className="it">Probablemente debo mencionar que React es una iglesia amplia. Además de los componentes controlados que has estado utilizando, React también soporta algo denominado componentes no controlados (es decir, aquellos que no tienen un valor sólido). Nadie las usa, o al menos nadie debería hacerlo.</p>

<p className="p">I <em>probably</em> should mention that React is a broad church. In addition to the <strong>controlled components</strong> you’ve been using, React also supports something called <a href="https://facebook.github.io/react/docs/forms.html#uncontrolled-components">uncontrolled components</a> (i.e. those without a solid <code>value</code> prop). Nobody uses them though, or at least nobody <em>should</em>.</p>



</div>
<p className="it">Así que ahora que hemos decidido que vamos a estructurar los formularios de esta manera, vamos a pasar un poco de tiempo haciéndolos más fáciles de trabajar. Empezando con:</p>
<p className="p">So now that we’ve decided we’re going to structure forms this way, lets spend a little time making them easier to work with. Starting with:</p>

<h2>Instance methods and auto-binding</h2>

<p className="it">¿Tu solución para el ejercicio 1 utiliza funciones anónimas para devoluciones <code>onChange</code>, como la mía?</p>

<p className="p">Did your solution to Exercise One use anonymous functions for <code>onChange</code> callbacks, like mine?</p>

<div className="image"><img src="/static/james009.jpg" width="100%" alt="Image"/></div>

<p className="it">Ignorando el hecho de que JavaScript crea estas funciones anónimas cada vez que se llama a <code>render</code> (que es sloooooow), definir manejadores como este es un dolor en el culo porque necesitamos una solución para acceder a <code>this</code>. Y dado el número de manejadores de eventos que nuestros formularios necesitan, esto no es sólo un pequeño dolor.</p>

<p className="p">Ignoring the fact that JavaScript creates these anonymous functions anew <em>every single time <code>render</code> is called</em> (which is sloooooow), defining handlers like this is a pain in the arse because we need a workaround to access <code>this</code>. And given the number of event handlers our forms need, this isn’t just a <em>small</em> pain.</p>

<p className="it">Para evitar esto, defina sus manejadores como métodos de instancia de componente pasándolos a <code>React.createClass</code>. Reactar auto-binds los métodos de instancia, asegurándose de que <code>this</code> siempre se refiere a su instancia de componente. Incluso cuando se utiliza como devoluciones de llamada:</p>

<p className="p">To avoid this, define your handlers as component instance methods by passing them to <code>React.createClass</code>. React auto-binds instance methods, ensuring that <code>this</code> always refers to your component instance. Even when used as callbacks:</p>

<div className="image"><img src="/static/james010.jpg" width="100%" alt="Image"/></div>
<div className="hint">


<p className="it">Si te encontras ahogando en los métodos de devolución de llamada, podes automatizar tu creación con un componente de orden superior. Pero sólo si realmente se están ahogando en ellos.</p>

<p className="p">If you find yourself drowning in callback methods, you could automate their creation with a <a href="http://jamesknelson.com/structuring-react-applications-higher-order-components/">Higher-Order Component</a>. But only if you really are drowning in them.</p>

</div>
<h2>Structuring application state</h2>

<p className="it">Tal como está, nuestra aplicación sólo contiene dos variables de nivel superior: los <code>contacts</code> y el and <code>newContact</code>, por lo que pensaría que sería una manera de tener que preocuparnos por la estructura. Pero las aplicaciones no se quedan pequeñas para siempre, y esto plantea la cuestión de dónde se dibuja la línea? ¿Cinco variables? 50?</p>


<p className="p">As it stands, our app only contains <em>two</em> top level variables – <code>contacts</code> and <code>newContact</code> – so you’d think we’d be a way from having to worry about structure. But apps don’t stay small forever, and this begs the question of <em>where do you draw the line?</em> Five variables? 50?</p>
<p className="it">Para Ridiculously Simple Forms, y de hecho Ridiculously Simple Apps, el mejor lugar para dibujar la línea es en realidad una variable de estado. La gestión de todo su estado de un lugar significa que nunca olvidará hacer su limpieza, y también elimina ese problema más molesto de decidir dónde poner las cosas.</p>

<p className="p">For Ridiculously Simple Forms, and indeed Ridiculously Simple Apps, the best place to draw the line is actually <em>one</em> state variable. Managing all your state from one place means you’ll never forget to do your housekeeping, and also eliminates that most annoying problem of <em>deciding where to put things</em>.</p>

<p className="it">Pero, ¿cómo convertir dos variables de estado en una? Exactamente de la misma manera que React hace con un objeto de estado y una función setter:</p>
<p className="p">But how do you turn two state variables into one? Exactly the same way that React does – with a state object and a setter function:</p>

<div className="image"><img src="/static/james011.jpg" width="100%" alt="Image"/></div>

<p className="it">Y ya que estamos decidiendo dónde poner las cosas, vamos a terminar el trabajo correctamente y también decidir dónde poner el código que modifica el estado. Puesto que estamos apuntando para simple, vamos a crear una <code>function</code> para cada una de las acciones que podemos realizar. Me gusta esto:</p>



<p className="p">And since we’re deciding where to put things, let’s finish the job properly and also decide where to put code which <em>modifies</em> state. Since we’re aiming for simple, let’s just creates one <code>function</code> for each of the <strong>actions</strong> we can perform. Like this:</p>


<div className="image"><img src="/static/james012.jpg" width="100%" alt="Image"/></div>

<p className="it">Cambia la función anónima asignada a <code>onNewContactChange</code> para nuestro nuevo <code>updateNewContact</code>, y estamos listos para ir!</p>

<p className="p">Switch out the anonymous function assigned to <code>onNewContactChange</code> for our new <code>updateNewContact</code>, and we’re good to go!</p>

<p><iframe width="100%" height="600" class="" id="" data-url="http://jsbin.com/fomege/embed?js,output" src="http://jsbin.com/fomege/embed?js,output"></iframe></p>

<p className="it">Así que ahora que podes agregar acciones y estado en tu sueño, vamos a probar:</p>
<p className="p">So now that you can add actions and state in your sleep, let’s try:</p>

<h2>Exercise 3 – Saving contacts</h2>

<p className="it">Lo único que queda antes de que tu formulario sea completamente funcional es la posibilidad de agregar nuevos contactos a la lista.</p>

<p className="p">The only thing left before your form is fully functional is the ability to add new contacts to the list.</p>

<p className="it">Para ello, necesitará una acción que amplíe la array de <code>contacts</code> y restablezca <code>newContact</code> - vamos a llamar a esta acción <code>submitNewContact</code>. También querrá asegurarse de que esta acción ignore los contactos con un nombre vacío o correo electrónico. Una vez que tengas tu acción, necesitarás una manera de llamarla.</p>

<p className="p">To do this, you’ll need an action which expands the <code>contacts</code> array and resets <code>newContact</code> – let’s call this action <code>submitNewContact</code>. You’ll also want to make sure this action ignores contacts with an empty <code>name</code> or <code>email</code>. Once you’ve got your action though, you’ll need a way to <em>call</em> it.</p>

<p className="it">Podríamos hacer esto pasando el <code>submitNewContact</code> a través de su prop de <code>onClick</code> del botón de envío, que se llama cada vez que el usuario hace clic en el botón (sorpresa!). Pero, ya que nos preocupamos por la experiencia del usuario, no queremos que se sorprendan cuando golpean entrar después de entrar en su contacto - y no pasa nada. Así que en su lugar, vamos a llamar a nuestra acción cuando el evento <code>submit</code> se dispara en el <code>&lt;form&gt;</code> HTML.</p>

<p className="p">We <em>could</em> do this by passing <code>submitNewContact</code> through to your submit button’s <code>onClick</code> prop, which is called every time the user clicks the button (surprise!). But, since we care about the user experience, we don’t want them to be surprised when they hit <em>enter</em> after entering their contact — and nothing happens. So instead, let’s call our action when the <code>submit</code> event is fired on the HTML <code>&lt;form&gt;</code>.</p>


<p className="it">Tu tarea es implementar la acción <code>submitNewContact</code>.</p>
<p className="p"><strong>Your task is to implement the <code>submitNewContact</code> action.</strong></p>


<p className="it">Consultá la documentación de React si necesitas ayuda para encontrar accesorios de devolución de llamada adecuados. Una vez que lo tengas funcionando, mira cómo se compara tu solución con la mía. Sin embargo, no te coloques demasiado en las diferencias, ¡lo importante es que funcione!</p>

<p className="p">Check the <a href="https://facebook.github.io/react/docs/events.html">React documentation</a> if you need help finding appropriate callback props. Once you’ve got it working, see how your solution compares with mine. Don’t get too hung up on any differences, though – the important thing is that it works!</p>





<div className="hint">

<p className="it">¿Tu navegador está recargando la página cada vez que presiona <em>Add Contact</em>? Asegúrese de llamar a <code>e.preventDefault()</code> en su evento de envío, de lo contrario tu navegador hará lo que normalmente hace y enviará el formulario!</p>
<p className="p">Is your browser reloading the page each time you press <em>Add Contact</em>? Make sure to call <code>e.preventDefault()</code> on your <code>submit</code> event, otherwise your browser will do what it normally does and submit the form!</p>
</div>

<p><iframe width="100%" height="600"  class="" id="" data-url="http://jsbin.com/sizove/embed?js,output" src="http://jsbin.com/sizove/embed?js,output"></iframe></p>

No hagas que los usuarios piensen

<h2>Don’t make users think</h2>

<p className="it">¡Enhorabuena, ahora has completado una aplicación funcional! Sin embargo, no vas a matar a salesforce simplemente consiguiendo la funcionalidad correcta. La gente no comprará su producto a menos que lo entienda.</p>

<p className="p">Congratulations – you’ve now completed a functional app! However, you’re not going to kill salesforce by just getting the <em>functionality</em> right. People won’t buy your product unless they <em>understand</em> it.</p>

<p className="it">Desde el punto de vista de su cliente, todavía hay un problema serio con esta aplicación: cuando el usuario hace clic en el botón "Añadir contacto" sin introducir nada, no pasa nada. La gente espera que algo suceda cuando hacen clic en un botón, así que evitemos cualquier confusión asegurándose de que algo suceda.</p>

<p className="p">From your customer’s point of view, there is still a serious issue with this app: when the user clicks the “Add Contact” button without entering anything, <em>nothing happens</em>. People expect something to happen when they click a button, so let’s prevent any confusion by making sure something <em>does</em>.</p>

<h2>Ridiculously Simple Validation</h2>

<p className="it">Si completastes el ejercicio tres (lo que deberías tener, viendo que estás leyendo esto), ¡ya has implementado la validación básica! Nuestra tarea es mostrar el resultado al usuario.</p>


<p className="p">If you’ve completed exercise three (which you <em>should</em> have, seeing you’re reading this), you’ve already implemented basic validation! Our task is to actually display the result to the user.</p>

<p className="it">Hacerlo requerirá pasar nuestro resultado de validación desde donde se calcula hasta donde se procesa. Felizmente, no necesitamos ninguna devolución de llamada esta vez; Podemos implementar esto agregando un objeto errors al objeto <code>newContact</code> dentro de nuestra acción submit:</p>
<p className="p">Doing so will require passing our validation result from <em>where it is computed</em> to <em>where it is rendered</em>. Happily, we don’t need any callbacks this time; we can implement this by adding an <code>errors</code> object to the <code>newContact</code> object inside our submit action:</p>

<div className="image"><img src="/static/james013.jpg" width="100%" alt="Image"/></div>
<p className="it">Almacená cualquier mensaje en las propiedades apropiadas bajo <code>contact.errors</code>:</p>
<p className="p">Store any messages on the appropriate properties under <code>contact.errors</code>:</p>

<div className="image"><img src="/static/james014.jpg" width="100%" alt="Image"/></div>

<p className="it">Y para distinguir entre los nuevos contactos y los que han fallado la validación, mantengamos los errores como nulos en nuestra plantilla de contacto:</p>

<p className="p">And to distinguish between new contacts and those which have failed validation, let’s keep <code>errors</code> as <code>null</code> on our contact template:</p>

<div className="image"><img src="/static/james015.jpg" width="100%" alt="Image"/></div>

<p className="it">Si has utilizado Ruby on Rails, este patrón probablemente se siente bastante familiar - la única diferencia es que no usa una clase especial de Errors, haciéndola aún más simple. Pero ahora que hemos almacenado nuestros mensajes de error en el estado de la aplicación, ¿cómo los mostramos?</p>
<p className="p">If you’ve used Ruby on Rails, this pattern probably feels fairly familiar – the only difference is that it doesn’t use a special Errors class, making it <em>even simpler</em>. But now that we’ve stored our error messages in the application state, how do we display them?</p>

<h2>Exercise 4 – Displaying validation errors</h2>

<p className="it">Para mantener las cosas simples, ignoremos los propios mensajes.</p>

<p className="p">To keep things simple, let’s ignore the messages themselves.</p>

<p className="it">Tu tarea es mostrar un borde rojo en los elementos <code>&lt;input&gt;</code> que tienen un error.</p>
<p className="p"><strong>Your task is to display a red border on the <code>&lt;input&gt;</code> elements which have an error.</strong></p>

<p className="it">Para ello, agregue props <code>className</code> a los elementos <code>&lt;input&gt;</code> apropiados. Una vez que lo tengas trabajando, compara tu solución con la mía.</p>

<p className="p">Do so by adding <code>className</code> props to the appropriate <code>&lt;input&gt;</code> elements. Once you’ve got it working, compare your solution with mine.</p>

<p><iframe width="100%" height="600" class="" id="" data-url="http://jsbin.com/bijuqu/embed?js,output" src="http://jsbin.com/bijuqu/embed?js,output"></iframe></p>

<p className="it">Y ahí lo tenes - ¡ahora sabes cómo construir Ridiculously Simple Forms! Y todo en menos tiempo de lo que habría llevado incluso a comenzar a construir una lista de bibliotecas de formularios. Pat usted en la parte de atrás para un trabajo bien hecho!</p>

<p className="p">And there you have it – you now know how to build Ridiculously Simple Forms! And all in less time than it would have taken to even <em>start</em> building a list of form libraries. Pat yourself on the back for a job well done!</p>

<h2>Choose your adventure</h2>

<p className="it">Entonces, ¿a dónde vas desde aquí? Bien, dado que usted ahora sabe hacer formas ridículamente simples, no dolería invertir un cierto tiempo en aprender cómo hacerlos usables. Para hacer esto, vas a necesitar entender cómo interactuar con el DOM usando React. Y este artículo le enseñará cómo, utilizando la misma base de código que ya está familiarizado.</p>

<p className="p">So where do you go from here? Well, given that you now know how to make ridiculously <em>simple</em> forms, it wouldn’t hurt to invest some time in learning how to make them <em>usable</em>. To do this, you’re going to need to understand how to interact with the DOM using React. And <a href="http://jamesknelson.com/react-js-by-example-interacting-with-the-dom/">this article will teach you how</a>, using the same codebase that you’re already familiar with.</p>

<p className="it">Pero una vez que hayas dominado la interacción de React DOM, ¿sólo vas a pasar tus semanas ajustando tu único formulario en tu única página? Por supuesto que no. Y es por eso que usted necesita aprender sobre el enrutamiento.</p>

<p className="p">But once you’ve mastered React DOM interaction, are you just going to spend your weeks tweaking your single form on your single page? Of course you’re not. And that is why you need to learn about <strong>routing</strong>.</p>

<p className="it">Por suerte, después de leer el artículo de la próxima semana en la serie Raw React, podrá construir un enrutador increíblemente sencillo para su aplicación React en su sueño. Y usted no se detendrá allí - cuando haya terminado, su aplicación será capaz de:</p>

<p className="p">Luckily, after reading next week’s article in the <em>Raw React</em> series, you’ll be able to build an incredibly simple router for your React application <em>in your sleep</em>. And you won’t stop there – when complete, your app will be able to:</p>

<ul>
<li className="p">Handle navigation/routing</li>
<li className="p">Communicate with an API</li>
<li className="p">Authenticate users</li>
</ul>

<p className="it">Actualización: Parte 3: Enrutamiento con Raw React ha sido puesto en libertad.</p>
<p className="p"><em>Update: <a href="http://jamesknelson.com/routing-with-raw-react/">Part 3: Routing with Raw React</a> has been released.</em></p>

<p className="it">A cambio de su dirección de correo electrónico, le enviaré la serie completa por correo electrónico a medida que se publique. Y como un bono recibirá de inmediato 3 hojas de cheats PDF optimizadas para imprimir - en React, ES6 y las promesas de JavaScript.</p>

<p className="p">In return for your e-mail address, I’ll send you the complete series via e-mail <em>as it is released</em>. And as a bonus you’ll immediately receive 3 <em>print-optimised</em> PDF cheatsheets – on <a href="http://jamesknelson.com/wp-content/uploads/2015/09/react-cheatsheet-thumbnail.png">React</a>, <a href="http://jamesknelson.com/wp-content/uploads/2015/09/es6-cheatsheet-thumbnail.png">ES6</a> and <a href="http://jamesknelson.com/wp-content/uploads/2015/09/promises-cheatsheet-thumbnail.png">JavaScript promises</a>.</p>


<div className="image"><img src="/static/james016.jpg" width="100%" alt="Image"/></div>


<p className="p">One more thing – <em>I love hearing from readers.</em> If you have something to say, send <a href="https://twitter.com/james_k_nelson">@james_k_nelson</a> a tweet, or send me an e-mail at <a href="mailto:james@jamesknelson.com">james@jamesknelson.com</a>. <em>Thanks for reading!</em></p>


<h2>Read More</h2>
<ul>
<li className="p"><a href="http://jamesknelson.com/react-js-by-example-interacting-with-the-dom/">Interacting with the DOM in React</a></li>
<li className="p"><a href="http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/">Learn Raw React Part 1</a></li>
<li className="p"><a href="http://jamesknelson.com/routing-with-raw-react/">Learn Raw React Part 3: Routing</a></li>
<li className="p"><a href="http://jamesknelson.com/structuring-react-applications-higher-order-components/">Introduction to Higher Order Components</a></li>
</ul>
<h2>Related Links</h2>
<ul>
<li className="p"><a href="https://github.com/jamesknelson/raw-react-part-2">Full source at Github</a></li>
<li className="p"><a href="https://facebook.github.io/react/docs/events.html">React event system documentation</a></li>
</ul>
<div>


<p className="it">Buen artículo, James.</p>
<p className="p">Nice article, James.</p>

<p className="it">Pregunta: Cada vez que se agrega un contacto se copia una array de contactos. ¿No es demasiado lento cuando hay muchos contactos?</p>

<p className="p">Question:  Everytime when adding a contact you copy an array of contacts. Isn’t it too slow when there are many contacts?</p>

<p className="p">state.contacts.slice(0).concat(contact)</p>

<p className="it">Posiblemente, aunque miles de contactos antes de que esto se convirtió en un problema. No es algo que preocuparse con una aplicación de este tamaño, y asegurar que estamos copiando en lugar de mutar la array es importante, ya que de lo contrario estaríamos mutando nuestro estado.</p>
<p className="p">Possibly, although you’d thousands of contacts before this became a problem. It isn’t something to worry about with an app this size, and ensuring we’re copying instead of mutating the array is important, as otherwise we’d be mutating our state.</p>

<p className="it">En el ejercicio 2 saltamos a la derecha al estado antes de explicarlo? Me he perdido un poco.
</p>
<p className="p">On Exercise 2 we skipped right to state before explaining it ? I got a bit lost there.</p>

<p className="it">Gracias, James!</p>
<p className="p">Thank you, James!</p>

<p className="it">Esta ha sido una buena introducción a ReactJS. Disfruto de su escritura, y sus explicaciones se comunican claramente.</p>

<p className="p">This has been a nice introduction to ReactJS. I enjoy your writing, and your explanations are clearly communicated.</p>

<p className="it">Muy buen trabajo. Sus esfuerzos son apreciados.</p>
<p className="p">Very nice work. Your efforts are appreciated.</p>

<p className="p">Looks great! will give it a try to see how its going</p>

<p className="it">Me gustan tus tutoriales, muy bien hecho!</p>

<p className="p">I like your tutorials, very nicely done!</p>

<p className="it">¿Qué ventaja tiene el corte en este escenario?</p>

<p className="p">What advantage does slicing have in this scenario?</p>

<p className="it">¡James, gran artículo! Soy un diseñador y no se desarrollan a diario. Estoy familiarizado con React y trabajado para una puesta en marcha que utiliza React como marco. Obtuve más comprensión de cómo funciona React trabajando con sus ejercicios. Gracias por tomarse el tiempo para poner esto juntos!</p>
<p className="p">James,  Great article!  I am a designer and don’t develop daily.  I am familiar with React and worked for a start-up that used React as framework.  I gained more understanding of how React works by working through your exercises.  Thanks for taking the time to put this together!</p>
<p className="it">No puedo ver tus códigos jsBin. ¿Alguien más también enfrenta este problema?</p>
<p className="p">I am unable to see your jsBin codes. Anyone else also facing this issue?</p>
<p className="it">Puede agregar un atributo "nombre" para cada elemento de entrada y, a continuación, utilizar un único método onChange que utilizará e.target.name como "clave" para el valor de entrada</p>
<p className="p">You can add a “name” attribute for every input element, and then use a single onChange method that will use e.target.name as “key” for input value </p>

<p className="it">Me sorprendió que la consola de salida en el ejercicio 1 siempre fue un solo carácter - esperaba que el campo de entrada (s) para almacenar cada carácter, y concatenarlos para formar la cadena de entrada. Es evidente que los datos devueltos en la devolución de llamada del elemento (sintético) se forman concatenando la propiedad de valor actual, y el carácter introducido, porque el código tutorial ciertamente no hace la concatenación y los campos están correctamente concatenados en ex. 2. Observo que en el ex. 1, puedo conseguir más de un carácter para ser registrado pegando en una cadena en el campo de entrada - una goma se considera obviamente ser un solo acontecimiento de la entrada.</p>

<p className="p">I was surprised that the console output in exercise 1 was always a single character – I expected the input field(s) to store each character, and concatenate them to form the input string.  Clearly, the data returned in the (synthetic) element callback is formed by concatenating the current value property, and the entered character, because the tutorial code certainly never does the concatenation, and the fields are correctly concatenated in ex. 2.  I notice that in ex. 1, I can get more than one character to be logged by pasting in a string into the input field – a paste is obviously considered to be a single input event.</p>

<p className="it">Por favor, ayúdame a averiguar por qué textfields no tiene marcadores de posición después de la presentación con éxito submit? Debo hacer clic en el campo, por lo que los marcadores de posición se van visibles.</p>
<p className="p">Please help me figure out why textfields hasn’t placeholders after sucessful form submit? I must click to field, so placeholders are going visible.</p>

</div>
 </div>
</div>

  </Layout>
)
