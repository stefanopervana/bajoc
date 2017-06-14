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
<h1>Chapter 5: Advanced topics</h1>
<h2>Relevant Libraries &amp; Concepts</h2>

<p className="it">React es quizás la biblioteca de código abierto más popular de Facebook, pero no es la única. Se han publicado un buen número de bibliotecas interesantes últimamente. Debemos señalar 4 bibliotecas conceptuales  que se han introducido y se mencionan a menudo en la misma categoría que React. Este tutorial es sobre todo acerca de React, pero debemos hablar brevemente sobre estas otras bibliotecas.</p>
<p className="p">React is perhaps Facebook’s most popular open source library, but it is not the only one. They have released quite a few interesting libraries lately. We should point out 4 libraries/concepts they have introduced since they are often mentioned in the same breath as React. This tutorial is mostly about React, but we should briefly talk about these other libraries.</p>
<h2>Flux</h2>
<p className="it">Más que un patrón de arquitectura de una biblioteca, Flux proporciona una solución más robusta para organizar los datos y la lógica del negocio. Cuando una aplicación React crece, puede ser útil para separar la lógica de negocio principal de sus componentes de interfaz de usuario. Sin MVC, Facebook necesita otro paradigma de flujo de datos unidireccional que se adhiera a React. Flux trabaja en conjunto con el flujo de datos unidireccional de React.</p>
<p className="p">More of an architecture pattern than a library, Flux provides a more robust solution to organizing your data and business logic. As a React application grows, it can be useful to separate your core business logic from your UI components. Without MVC, Facebook needed another paradigm that adheres to React’s unidirectional data flow. Flux works in tandem with React’s unidirectional data flow.</p>
<p className="it">Flux tiene 4 partes principales: acciones, despachadores, almacenes, y vistas (componentes React). Las acciones son métodos de ayuda al despachador utilizados para crear una API más semántica. Cuando un usuario interactúa con la vista, una acción se propaga a un despachador central que sabe a que almacen tiene que llamar. Las tiendas de retención de datos y la lógica de negocio de la aplicación, que cuando se llama actualizará vistas que dependen del estado de una tienda. Esto ayuda a limpiar los datos y la lógica de negocio de los componentes React.</p>
<p className="p">Flux has 4 major parts: actions, dispatchers, stores, and views (React components). Actions are dispatcher helper methods used to create a more semantic API. When a user interacts with the view, an action is propagated to a central dispatcher that knows which stores it needs to call. Stores hold the application’s data and business logic, which when called will update views that are dependent to a store’s state. This helps clean out data and business logic from React components.</p>
<p className="it">Este es un paso en la dirección correcta, pero por la complejidad de flujo de Flux no vale la pena el esfuerzo hasta que comiences a tener problemas de razonamiento sobre tus datos y la lógica del negocio. Sólo una vez que empieces a alcanzar cierto nivel de complejidad en una aplicación de React, deberías considerar echarle un vistazo a Flux.</p>
<p className="p">This is a step in the right direction but the overhead complexity of Flux is not worth the effort until you start having problems reasoning about your data and business logic. Only once you start reaching a certain level of complexity in a React application that you should consider taking a look at Flux.</p>
<h2>GraphQL</h2>
<p className="it">REST no está muerto, pero para algunos tipos de aplicaciones, REST no es lo suficientemente expresiva para servir las necesidades de datos de muchas aplicaciones sin un montón de llamadas de la API al servidor. Para una aplicación tan grande como Facebook, hacer llamadas individuales a la API sólo para los puntos finales de RESTful no es  eficiente.</p>

<p className="p">REST is not dead, but for some kinds of applications REST is not expressive enough to serve many application’s data requirements without a lot of API calls to the server. For an application as large as Facebook, making individual API calls to RESTful endpoints is just not efficient.</p>
<p className="it">Una consulta (query) es una cadena GraphQL interpretada por un servidor que devuelve datos en un formato especificado. He aquí un ejemplo de consulta (query):</p>
<p className="p">A GraphQL query is a string interpreted by a server that returns data in a specified format. Here is an example query:</p>
<div className="image"><a></a><img src="/static/cod500.jpg" width="100%" alt="Image"/></div>
<p className="it">Esto es mucho más expresivo que el REST regular. REST es mucho más imperativo en comparación con GraphQL. Al diseñar una API nativa para clientes o basada ​​en la web, el diseñador API a menudo necesita saber mucho acerca de los requisitos del cliente con el fin de evitar múltiples llamadas al servidor. REST es demasiado rígido para gran parte del cliente o aplicaciones nativas. Con GraphQL, puede simplemente hacer una llamada al servidor solicitando los requisitos de datos.</p>
<p className="p">This is much more expressive than regular REST. REST is much more imperative compared to GraphQL. When designing an API for native or web based clients, the API designer often needs to know a lot about the requirements of the client in order to prevent multiple calls to the server. REST is just too rigid for large client-side or native applications. With GraphQL, you can just make one call to the server asking for your data requirements.</p>
<p className="it">Dicho esto, REST no se ha muerto. REST ha sido un gran paso adelante para la web, pero no es el fin de la historia. Es muy imprescindible en comparación con GraphQL. Aún así, REST esta probado y aprobado, pero de ninguna manera debe ser la última palabra de cómo construir APIs escalables.</p>
<p className="p">That said, REST is not dead. REST has been a great step forward for the web, but it is not the end of history. It is very imperative compared to GraphQL. Still, REST is tried and true but in no way should it be the final word for how to build scalable APIs.</p>
<p className="it">Nosotros los programadores deberíamos tratar de evitar problemas, pero haciendo optimizaciones prematuras nos meteremos en problemas. Al igual que con Flux, es mejor seguir con REST a menos que realmente no tenga sentido para tus aplicaciones.</p>
<p className="p">We as programmers should be trying to prevent problems, but making premature optimizations will lead us into trouble. Just like with Flux, it is better to stick with REST unless it really does not make sense for your applications.</p>
<h2>Relay</h2>
<p className="it">Mientras GraphQL puede ayudar a limitar la cantidad de llamadas al servidor, diversos componentes tienen diferentes requisitos de datos, que pueden dar lugar a múltiples llamadas al servidor. Relay, ayuda a combinar todos los requisitos de datos en una sola solicitud. Relay se construye en la parte superior de GraphQL.</p>
<p className="p">While GraphQL can help limit the amount of calls to the server, various components have differing data requirements, which can result in multiple calls to the server. Relay, among other things, helps batch together all data requirements into one request. Relay is built on top of GraphQL.</p>
<p className="it">Una vez más, al igual que Fluxe y GraphQL, no necesitas preocuparte por el uso de Relay a menos que la búsqueda de datos se convierta en un problema.</p>
<p className="p">Again, just like Flux and GraphQL, you don’t need to worry about using Relay unless data fetching becomes a problem.</p>
<h2>Immutable.js</h2>
<p className="it">La filosofía central de React es evitar el estado, los datos que cambian con el tiempo. Los datos inmutables son un concepto poderoso que ayuda a evitar algunos de los problemas de los datos que cambian con el tiempo. Cuando tenes una colección que sabes que nunca puede cambiar, es mucho más fácil razonar sobre esos datos. Ya no tenes que hacer comparaciones costosas u observar los cambios, ya que está absolutamente garantizado que una colección nunca va a cambiar.</p>
<p className="p">React’s core philosophy is avoiding state, data that changes over time. Immutable data is a powerful concept that helps avoid some of the problems of data changing over time. When you have a collection that you know can never change, it is much easier to reason about that data. You no longer have to do expensive comparisons or observe for changes since you are absolutely guaranteed that a collection will never change.</p>
<p className="it">Immutable.js proporciona una poderosa manera de crear colecciones inmutables en JavaScript. Se alinea muy bien con la filosofía de React y Flux.</p>
<p className="p">Immutable.js provides a powerful way to create immutable collections in JavaScript. It aligns very well with the philosophy of React and Flux.</p>
<h2>Performance Optimization</h2>
<p className="it">En la superficie, volver a representar todo un árbol de componentes parece como un menoscabo de su rendimiento. Como hemos demostrado en un capítulo anterior, el algoritmo diff de React es muy sofisticado y rápido. Todo esto se hace en JavaScript, que es muy rápido. Para la gran mayoría de los casos, la manipulación del DOM va a ser, por lejos, tu mayor cuello de botella y no JavaScript.</p>
<p className="p">On the surface, re-rendering an entire tree of components seems like a detriment to performance. As we demonstrated in a prior chapter, React’s diff algorithm is very sophisticated and fast. This is all done in JavaScript, which is very fast. For the vast majority of cases, manipulating the DOM is going to be your biggest performance bottleneck by far and not JavaScript.</p>
<p className="it">Dicho esto, hay formas de mejorar aún más el rendimiento. React te permite decirle al DOM virtual saltar la llamada a <code>{`render()`}</code> en un componente particular y de sus hijos a través del método de ciclo de vida <code>{`shouldComponentUpdate()`}</code>. Este método se llama antes de habilitar el re-renderizado. Por defecto, este método devuelve true, pero se puede utilizar para comprobar ciertas condiciones y determinar si debe o no volverse false. Tené en cuenta que este método es llamado con mucha frecuencia, por lo que el código aquí tiene que ser bastante rápido.</p>
<p className="p">That said, there are ways to improve performance even further. React allows you to tell the Virtual DOM to skip calling <code>{`render()`}</code> on a particular component and its children via the lifecycle method <code>{`shouldComponentUpdate()`}</code>. This method is called before the re-rendering starts. By default, this method returns true but you can use it to check certain conditions and determine whether or not to return false. Keep in mind that this method gets called very frequently, so the code here needs to be pretty fast.</p>
<p className="it">A primera vista, el lugar más obvio para intentar la optimización del rendimiento está en el componente Stars. Después de todo, los datos del sistema de Stars no cambian en absoluto entre vuelve a renderizar. Pase lo que pase a estado, los datos del sistema Star no cambian en absoluto. Sin embargo, hay un problema con esta línea de pensamiento: en realidad no sabemos si eso es cierto. No tenemos ningún dato para respaldar nuestra hipótesis. ¿Cómo sabemos que realmente tendrá un impacto el rendimiento?</p>
<p className="p">At first glance, the most obvious place to attempt performance optimization is in the Stars component. After all, star system data does not change at all between re-renders. No matter what happens to state, star system data does not change at all. However there is a problem with this line of thinking: we do not actually know if that is true. We do not have any data to back up our assumption. How do we know that is actually impacting performance?</p>
<p className="it">La buena noticia es: React ofrece un práctico complemento de herramientas de rendimiento. Sólo está disponible en el entorno de desarrollo y no debe ser incluido en un entorno de producción, pero es muy útil para encontrar mejoras de rendimiento fáciles. Ya se incluye para usted en package.json pero normalmente se instalaría a través de <code>{`npm  i react-addons-perf`}</code> -D.</p>
<p className="p">The good news is: React provides handy add-on performance tools. It is only available in develop- ment and should not be included in a production environment, but it is very useful to find easy performance improvements. It is already included for you in package.json but normally you would install it via <code>{`npm  i react-addons-perf`}</code> -D.</p>
<p className="it">Vamos a poner esto disponible para nosotros en las herramientas dev de tu navegador. Vamos a añadir temporalmente las herramientas de rendimiento al objeto global del navegador para que podamos acceder a él con el fin de realizar pruebas de rendimiento. Abrí <code>{`unfinished/app/index.jsx`}</code> y añadí lo siguiente:</p>
<p className="p">Let’s make this available for us in the browser’s dev tools. Let’s temporarily add the performance tools to the browser global object so that we can access it for performance testing purposes. Open unfinished/app/index.jsx  and  add  the following:</p>
<div className="image"><a></a><img src="/static/cod501.jpg" width="100%" alt="Image"/></div>
<p className="it">Ahora podemos ir al navegador y utilizar Perf en las <code>{`dev tools`}</code>. Perf es bastante simple de usar. Queremos iniciar y detener la medición con <code>{`Perf.start()`}</code> y <code>{`Perf.stop()`}</code>, y luego usar una utilidad de la medición. React proporciona 4 utilidades de medición: <code>{`Perf.printInclusive()`}</code>, <code>{`Perf.printExclusive()`}</code>, <code>{`Perf.printWasted()`}</code>, y <code>{`Perf.printDOM()`}</code>. <code>{`Perf.printWasted()`}</code>) es, con mucho, la utilidad más valiosa, ya que nos dice la cantidad de tiempo dedicado a componentes que en realidad no hacen nada. Podemos tomar los peores delincuentes y aplicar <code>{`shouldComponentUpdate()`}</code> para esos componentes.</p>
<p className="p">Now we can go to the browser and use Perf in the <code>{`dev tools`}</code>. Perf is fairly simple to use. We want to start and stop the measurement using <code>{`Perf.start()`}</code> and <code>{`Perf.stop()`}</code>, and then use a measurement utility. React provides 4 measurement utilities: <code>{`Perf.printInclusive()`}</code>, <code>{`Perf.printExclusive()`}</code>, <code>{`Perf.printWasted()`}</code>, and <code>{`Perf.printDOM()`}</code>. <code>{`Perf.printWasted()`}</code> is by far the most useful utility  since it tells us the amount of time spent on components that did not actually render anything. We can take the worst offenders and apply <code>{`shouldComponentUpdate()`}</code> to those components.</p>
<p className="it">Abrí el navegador en <code>{`localhost:4000`}</code> y abrí las herramientas dev. Iniciá la medición con <code>{`Perf.start()`}</code>. A continuación, fijá un rumbo y velocidad de la nave hacia un sistema de estrellas. Recordá el rumbo y la velocidad por lo que podremos comparar con precisión las mejoras en el rendimiento. Luego activá los motores y esperá hasta que la nave llegue a su destino. Luego, en el tipo de consola dev <code>{`Perf.stop()`}</code> para detener la medición. Ahora escribí <code>{`Perf.printWasted()`}</code>. Deberías ver lo siguiente:</p>
<p className="p">Open up the browser to <code>{`localhost:4000`}</code> and open the dev tools. Start the measurement with <code>{`Perf.start()`}</code>. Then, set a course and speed to a star system. Remember the course and speed so we can accurately compare the performance improvements. Then engage the engines and wait until the starship reaches its destination. Then in the dev console type <code>{`Perf.stop()`}</code> to stop the measurement. Now type <code>{`Perf.printWasted()`}</code>. You should see the following:</p>
<div className="image"><a></a><img src="/static/img098.jpg" width="100%" alt="Image"/></div>
<p className="it">Tenemos un problema con la medición. La columna “Owner &gt; component” no nos está dando un nombre descriptivo para nuestros componentes. Esto se debe a que React no sabe como llamamos a nuestros componentes una vez que se ha alcanzado el navegador. Tenemos que decirle a React los nombres de nuestros componentes.</p>
<p className="p">We have a problem with the measurement. The “Owner &gt; component” column is not giving us a descriptive name for our components. That is because React does not know what we called our components once it has reached the browser. We need to tell React what the names of our components  are.</p>
<p className="it">Para hacer eso, tenemos que añadir idioma a nuestros componentes para que podamos obtener una mejor información del registro. Vamos a empezar con Game.jsx:</p>
<p className="p">To do that, we need to add displayName to our components so we can get better logging information. Let’s start with Game.jsx:</p>
<div className="image"><a></a><img src="/static/cod502.jpg" width="100%" alt="Image"/></div>
<p className="it">Es una buena idea establecer el valor de displayName para el nombre de tu componente, por lo que es más fácil de identificar en la consola de herramientas dev. Tendrás que ir a cada componente y añadir un nombre único a display antes de que puedas hacer más pruebas de rendimiento.</p>
<p className="p">It is a good idea to set the value of displayName to the name of your component, making it easier to identify in the dev tools console. You will need to go into every component and add a unique display name before you can do further performance testing.</p>
<p className="it">Una vez que hayas agregado displayName a todos los componentes, actualizá el navegador y ejecutalo a través de todos los obstáculos para medir el rendimiento. Una vez que lo has hecho, deberías ver lo siguiente:</p>
<p className="p">Once you have added displayName to all the components, refresh the browser and run through all the stops to measure performance. Once you have done so, you should see the following:</p>
<div className="image"><a></a><img src="/static/img099.jpg" width="100%" alt="Image"/></div>
<p className="it">Sorprendentemente, no es el componente Stars el que hace el mayor menoscabo de tu rendimiento, a pesar del tamaño de los datos del sistema Stars. El componente con mayor desperdicio de tiempo es <code>{`ShipInfo`}</code>. Ahora podemos optimizarlo con <code>{`shouldComponentUpdate()`}</code>. Vamos a hacer eso ahora:</p>
<p className="p">Surprisingly, it is not the Stars component that is the biggest detriment to performance, despite the size of star system data. The component with the most wasted time is ShipInfo. Now we can optimize it with <code>{`shouldComponentUpdate()`}</code>. Let’s do that now:</p>
<div className="image"><a></a><img src="/static/cod503.jpg" width="100%" alt="Image"/></div>
<p className="it"><code>{`shouldComponentUpdate()`}</code> recibe a <code>{`nextProps()`}</code> del estado siguiente, que le permite comparar que con los props actuales del componente y el estado con los siguientes accesorios y estado. Puesto que ShipInfo no tiene estado, no necesitamos comprobar si hay un cambio en el estado. Lo que haremos es comprobar si los accesorios han cambiado en absoluto. Si no ha cambiado, queremos devolver false, diciendo a React que omita volver a representar este componente y todos sus hijos.</p>
<p className="p"><code>{`shouldComponentUpdate()`}</code> receives <code>{`nextProps()`}</code> and nextState which allows you to compare that with the component’s current props and state with the next props and state. Since ShipInfo is stateless, we do not need to check for a change in state. What we will do is check if props has changed at all. If it has not changed, we want to return false, telling React to skip re-rendering this component and all of its children.</p>
<p className="it">Hay un problema aquí, sin embargo. <code>{`updateInfo()`}</code> actualiza la referencia a la nave directamente incluso antes <code>{`setState()`}</code> obtiene la llamada. Lo que esto significa es, bajo <code>{`shouldComponentUpdate()`}</code>, <code>{`this.props`}</code> y <code>{`nextProps`}</code> serán siempre iguales entre si, ya que actualizan inadvertidamente <code>{`this.props.info`}</code>. Esto significa que <code>{`shouldComponentUpdate()`}</code> siempre devuelve false, por lo que la info de Ship nunca se re-renderizará incluso cuando la nave haya cambiado.</p>
<p className="p">There is one problem here however. <code>{`updateInfo()`}</code> updates the reference to the ship directly even before <code>{`setState()`}</code> gets called. What this means is, under <code>{`shouldComponentUpdate()`}</code>, <code>{`this.props`}</code> and <code>{`nextProps`}</code> will always equal eachother, because we inadvertantly updated this.props.info. This means <code>{`shouldComponentUpdate()`}</code> will always return false, so ShipInfo will never be re- rendered even when ship info has changed.</p>
<p className="it">Hay algunas maneras de solucionar este problema. Podemos clonar el objeto que necesitamos usando una biblioteca de utilidades como lodash²⁶ y clone²⁷ el objeto de información, luego pasar el objeto de información clonado para actualizar el estado de la nave. Podemos utilizar de forma similar la función ES2015 <code>{`Object.assign`}</code>²⁸ para copiar <code>{`this.props.info`}</code> en un nuevo objeto, y luego pasar ese nuevo objeto para actualizar el estado del buque. O bien, podemos usar estructuras de datos inmutables con Immutable.js²⁹ durante todo el juego, asegurando que nunca podremos actualizar una estructura de datos existente.</p>
<p className="p">There are a few ways we can fix this problem. We can clone the object we need using a utility library such as lodash²⁶ and clone²⁷ the info object, then pass the cloned info object to update the ship state. We can similarly use the ES2015 feature <code>{`Object.assign`}</code>²⁸ to copy <code>{`this.props.info`}</code> into a new object, and then pass that new object to update the ship state. Or, we can use immutable data structures with Immutable.js²⁹ throughout the game, ensuring we can never update an existing data structure.</p>
<p className="index">²⁶https://lodash.com/</p>
<p className="index">²⁷https://lodash.com/docs#clone</p>
<p className="index">²⁸https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign</p>
<p className="index">²⁹https://facebook.github.io/immutable-js/</p>
<p className="it">Por razones de simplicidad, vamos a ir con <code>{`Object.assign`}</code>. Vamos a actualizar updateInfo en <code>{`#unfinished/ap- p/components/ShipInfo.jsx`}</code>:</p>
<p className="p">For simplicity’s sake, we will go with <code>{`Object.assign`}</code>. Let’s update updateInfo in <code>{`#unfinished/ap- p/components/ShipInfo.jsx`}</code>:</p>
<div className="image"><a></a><img src="/static/cod504.jpg" width="100%" alt="Image"/></div>
<p className="it">Ahora, cuando corremos el mismo texto el rendimiento, hay que ver esto:</p>
<p className="p">Now when we run the same performance text, we should see this:</p>
<div className="image"><a></a><img src="/static/img100.jpg" width="100%" alt="Image"/></div>
<p className="it">Este patrón es tan común, no es un complemento de React llamado <code>{`PureRenderMixin`}</code>³⁰ el que hace todo lo que acabamos de hacer bajo <code>{`shouldComponentUpdate()`}</code>. Podemos utilizarlo para eliminar nuestro método de la fecha <code>{`shouldComponentUp- date()`}</code> y utilizar <code>{`PureRenderMixin`}</code></p>
<p className="p">This pattern is so common, there is a React addon called <code>{`PureRenderMixin`}</code>³⁰ which does everything we just did under <code>{`shouldComponentUpdate()`}</code>. We can use it to remove our <code>{`shouldComponentUp- date()`}</code> method and use <code>{`PureRenderMixin`}</code></p>
<div className="image"><a></a><img src="/static/cod505.jpg" width="100%" alt="Image"/></div>
<p className="index">³⁰https://facebook.github.io/react/docs/pure-render-mixin.html</p>
<p className="it">Como nota final, no te olvides de quitar <code>{`Perf`}</code> de <code>{`index.jsx`}</code> cuando hayas terminado con la optimización del rendimiento.</p>
<p className="p">As a final note, don’t forget to remove <code>{`Perf`}</code> from <code>{`index.jsx`}</code> when you are finished with performance optimization.</p>
<h2>More About Props</h2>
<p className="it">Los componentes de React son fácilmente reutilizables porque en muchos sentidos actúan como funciones de interfaz de usuario. Sin embargo, al igual que las funciones, puede correr a través de los errores de tipo o te olvides de pasar un argumento en particular. React tiene algunas soluciones construida para estos problemas, que debes utilizar tanto como sea posible.</p>
<p className="p">React components are easily reusable because in many ways they act like UI functions. However, just like functions, you can run across type errors or forget to pass in a particular argument. React has a few built in solutions for these problems, which you should use as much as possible.</p>
<p className="it">React proporciona una manera de validar el tipo de props que se pasan en un componente llamado <code>{`propTypes`}</code>. Es un método de adición de comprobación de tipos a su componente React. Esto ayuda a asegurar que está de paso en el tipo correcto de sus componentes accesorios.</p>
<p className="p">React provides a way to validate the type of props that are passed into a component called <code>{`propTypes`}</code>. It is a method of adding type checking to your React component. This helps to ensure that you are passing in the correct type to your components props.</p>
<p className="it">Podemos ver cómo esto se ve en acción con <code>{`EditableElement`}</code> ya que este está destinado a ser altamente reutilizable.</p>
<p className="p">We can see how this looks like in action with <code>{`EditableElement`}</code> since this is intended to be highly reusable.</p>
<div className="image"><a></a><img src="/static/cod506.jpg" width="100%" alt="Image"/></div>
<p className="it"><code>{`React.PropTypes`}</code> te ofrece una amplia gama de validaciones para tus componentes, incluyendo formas de crear el tuyo propio. Es compatible con las primitivas de JavaScript a través de <code>{`React.PropTypes.[array, func, bool, number, object, string]`}</code>, así como otros disponibles en la documentación³¹. Estos <code>{`PropTypes`}</code> son opcionales por defecto, por lo que tenes que llamar a <code>{`isRequired`}</code> para que sea necesario. Cuando un valor no válido se pasa como un prop, React registrará una advertencia a la consola de herramientas dev en el navegador. Sin embargo, esto sólo está disponible en desarrollo por razones de rendimiento.</p>
<p className="p"><code>{`React.PropTypes`}</code> gives you a wide range of validations for your components, including ways to create your own. It supports JavaScript primitives via <code>{`React.PropTypes.[array, func, bool, number, object, string]`}</code> as well as others available in the documentation³¹. These <code>{`PropTypes`}</code> are optional by default, so you have to call isRequired to make it required. When an invalid value is passed in as a prop, React will log a warning to the dev tool console in the browser. However, this is only available in development for performance reasons.</p>
<p className="index">³¹https://facebook.github.io/react/docs/reusable-components.html</p>
<p className="it">Echando un vistazo a la consola, obtenemos el siguiente error: “Advertencia: No se pudo PropType: propuestas de valor no válido de número de tipo suministrado a <code>{`EditableElement`}</code>, cadena esperada. Compruebe el método de procesamiento de <code>{`WarpDriveControls`}</code>”. Esto se debe a que estamos pasando en una serie de <code>{`EditableElement`}</code> al interior de <code>{`WarpDriveControls`}</code>. Una forma de solucionar este problema es permitir que el valor en <code>{`EditableElement`}</code> tome un tipo de número con <code>{`React.PropTypes.oneOfType()`}</code>:</p>

<p className="p">Taking a look at the console, we get the following error: “Warning: Failed propType: Invalid prop value of type number supplied to EditableElement, expected string. Check the render method of <code>{`WarpDriveControls`}</code>”. That is because we are passing in a number to <code>{`EditableElement`}</code> inside of <code>{`WarpDriveControls`}</code>. One way to fix this is to allow value in <code>{`EditableElement`}</code> to take a number  type   with  <code>{`React.PropTypes.oneOfType()`}</code>:</p>
<div className="image"><a></a><img src="/static/cod507.jpg" width="100%" alt="Image"/></div>
<p className="it">Ahora el valor se toma una cadena o un número, y <code>{`onEdit`}</code> siempre será una función requerida.</p>
<p className="p">Now value will take a string or a number, and <code>{`onEdit`}</code> will always be a required function.</p>
<p className="it">Otra característica de las funciones en muchos idiomas es la capacidad de establecer valores por defecto a un argumento. React nos da una manera de hacerlo a través de <code>{`getDefaultProps()`}</code>:</p>
<p className="p">One other feature of functions in many languages is the ability to set default values to an argument. React gives us a way to do this via <code>{`getDefaultProps()`}</code>:</p>
<div className="image"><a></a><img src="/static/cod508.jpg" width="100%" alt="Image"/></div>
<p className="it"><code>{`getDefaultProps()`}</code> funciona de manera muy similar a <code>{`getDefaultState()`}</code> en el que la función debe devolver un objeto con los valores que desea establecer para los props. Esto es útil en los casos en los que un valor prop no se pasa en o no se necesita para ser pasado en todos los casos.</p>
<p className="p"><code>{`getDefaultProps()`}</code> functions very similarly to <code>{`getDefaultState()`}</code> in that the function needs to return an object with the values you would like to set for props. This is useful in the cases where a prop value is not passed in or is not needed to be passed in for every case.</p>
<h2>Inline Styles</h2>
<p className="it">En HTML normal, los estilos en línea se especifican como una cadena. Eso no funcionará para React. Más bien necesitamos pasar un objeto a una propiedad de estilo con keys que son nombres de estilo camelcase para ser consistentes con la API JavaScript de DOM (similar a por qué className es camelcase). React agregará automáticamente "px" a los valores de píxeles, lo que le permite pasar el tipo de número para ciertas propiedades de estilo. Aquí hay un ejemplo:</p>
<p className="p">In normal HTML, inline styles are specified as a string. That will not work for React. Rather we need to pass an object to a style property with keys that are camelcase style names in order to be consistent with the DOM JavaScript API (similar to why className is camelcase). React will automatically add “px” to pixel values, allowing you to pass number type for certain style properties. Here is an example:</p>
<div className="image"><a></a><img src="/static/cod509.jpg" width="100%" alt="Image"/></div>
<p className="it">Ahora tenemos la opción de modular nuestro estilo dentro de nuestros componentes en lugar de usar una hoja de estilo CSS global. Esto es útil para ayudar a CSS a manejar el alcance y estilo de nuestros componentes de una manera más declarativa. Sin embargo, hacer cambios rápidos en la aplicación puede ser mucho más difícil ahora. Hasta ahora, la comunidad no ha adoptado este enfoque, tal vez porque tenemos casi dos décadas de experiencia tratando con el dolor de CSS. Hay algunos proyectos que pretenden hacer este enfoque aún más fácil con React, como React Style³². Este proyecto es algo coherente con cómo React Native trata con el estilo en aplicaciones nativas que no utilizan CSS. En este punto estamos probablemente acostumbrados a la forma en que hemos estado haciendo cosas en lo que respecta al estilo. Sin embargo, este es un enfoque que vale la pena explorar en el futuro.</p>
<p className="p">Now we have the option of modularizing our styling within our components instead of using a global CSS style sheet. This is handy to help scope CSS and style our components in a more declarative way. However, making quick changes across the application can be much more difficult now. So far, the community has not adopted this approach, perhaps because we have nearly two decades of experience dealing with the pain of CSS. There are a few projects aiming to make this approach even easier with React, such as React Style³². This project is somewhat consistent with how React Native deals with styling in native applications that do not use CSS. At this point we are probably used to the way we have been doing thing as far as styling goes. Still, this is an approach that is worth exploring in the future.</p>
<p className="index">³²https://github.com/js-next/react-style</p>
<h2>Conclusion</h2>
<p className="it">Felicitaciones, has llegado al final de este libro! En este punto, estás bien en tu camino a convertirte en un experto en React. No sólo podes entender ahora la gran mayoría de las API de React, sino tambien entender su filosofía y cómo funciona bajo el capó. Ahora entendes el virtual DOM, la reconciliación, la delegación de eventos, y la vinculación automática (autobinding). Con esta comprensión más profunda, se puede mejorar la depuración y optimizar las aplicaciones de React. Ya estás listo para asumir grandes aplicaciones web con React.</p>
<p className="p">Congratulations, you have reached the end of this book! At this point, you are well on your way to becoming an expert in React. Not only do you now understand the great majority of React’s API, but you understand its philosophy and how it works under the hood. You now understand the Virtual DOM, reconciliation, event delegation, and autobinding. With this deeper understanding, you can better debug and optimize React applications. You are ready to take on large web applications with React.</p>
<p className="it">Aún así, siempre hay más que aprender en el desarrollo de software. Cualquier discusión sobre React implica inevitablemente Flux. Si bien lo hemos tocado brevemente, debes tomarte el tiempo para aprender al menos una biblioteca Flux. A continuación, podes tomar mejores decisiones acerca de cuándo utilizar Flux y cuándo seguir con React vainilla o crear tu propia solución de manejo de datos. Yo recomiendo echar un vistazo a Redux³³ que parece ser la biblioteca Flux más popular en este momento.</p>
<p className="p">Still, there is always more to learn in software development. Any discussion of React inevitably involves Flux. While we touched on it briefly, you should take the time to learn at least one Flux library. Then you can make better decisions about when to use Flux and when to either stick with vanilla React or create your own data handling solution. I recommend taking a look at Redux³³ as it seems to be the most popular Flux library at the moment.</p>
<p className="it">También vale la pena analizar la vanguardia de JavaScript: ES2015. Hay muchas características que se están introduciendo a la lengua. React ahora se está moviendo fuertemente hacia ES2015 por lo que es bueno saberlo para el futuro. Además, las clases ES2015 ayudan a limpiar tus componentes React, haciéndolos más fáciles de leer y entender.</p>
<p className="p">Also worth looking into is the cutting edge of JavaScript: ES2015. There are many great features that are being introduced to the language. React is now moving heavily toward ES2015 so it is good to know for the future. Also, ES2015 classes help clean up your React components, making them easier to read and understand.</p>

<p className="it">Gracias por leer este libro! No dudes en acercarte al autor en Twitter con tus pensamientos y comentarios: @frangel85³⁴.</p>
<p className="p">Thanks for reading this book! Feel free to reach out to the author on Twitter with your thoughts and comments: @frangel85³⁴.</p>
<p className="index">³³http://redux.js.org/</p>
<p className="index">³⁴https://twitter.com/frangel85</p>
</div>
</div>
  </Layout>
)
