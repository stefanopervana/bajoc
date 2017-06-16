import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='game'>
 <div>
    
     
                <style jsx>{`

                    .col-md-7 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 1300px;
                        background-color: #EEEDE8;
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

              <div className="col-md-7"> 

              <div class="site">
                <h2 class="title">Mastermind game in React and ECMAScript 6</h2>
<div class="date"><span>02 Aug 2016</span></div>

<div class="post">


<div className="image"><a></a><img src="/static/mastermind.png" width="60%" alt="Image"/></div>

<p className="it">La mejor manera de aprender nuevas tecnologías es hacer algo interesante, divertido, atractivo y poco convencional. Este tutorial te guiará a través de un <a href="http://zofiakorcz.pl/mastermind">juego Mastermind</a> que he construido para mostrar algunas de las ideas más fundamentales detrás de la biblioteca React, las especificaciónes ECMAScript 6 y el módulo webpack bundler.</p>


<p className="p">The best way to learn new technologies is to make something interesting, fun, engaging and unconventional. In this tutorial I will walk you through a <a href="http://zofiakorcz.pl/mastermind">Mastermind game</a> I built to show some of the most fundamental ideas behind the React library, ECMAScript 6 specification and Webpack module bundler.</p>


<p className="it"><a href="http://www.ecma-international.org/ecma-262/6.0">ECMAScript 6</a> es la más reciente edición de la ECMAScript Language Specification, que estandariza el lenguaje de programación JavaScript. ES6 introduce una nueva sintaxis y características a las que más adelante en este artículo vamos a echar un vistazo más de cerca. Vale la pena mencionar que no todos los <a href="https://kangax.github.io/compat-table/es6/">navegadores son compatibles con</a> esas características de lujo por lo que es importante utilizar un compilador especial como <a href="https://babeljs.io/">Babel</a> para asegurarse de que nuestro código escrito en ES6 funcionará correctamente en los navegadores antiguos.</p>


<p className="p"><a href="http://www.ecma-international.org/ecma-262/6.0">ECMAScript 6</a> is the newest edition of the ECMAScript Language Specification, which standardises the JavaScript programming language. ES6 introduces a new syntax and features which we will take a closer look at later in this article. It's worth mentioning that not all of the <a href="https://kangax.github.io/compat-table/es6/">browsers support</a> those fancy features so it is important to use a special compiler like <a href="https://babeljs.io/">Babel</a> to make sure that our code written in ES6 will run correctly on older browsers.</p>

<p className="it"><a href="https://facebook.github.io/react/">React</a> es una biblioteca hecha por Facebook que utiliza un concepto de <code>Virtual DOM</code>, que tiene como objetivo aplicar el menor número de mutaciones como sea posible. Cuando cambia el estado del elemento, React decide si una actualización del DOM real es necesaria mediante la comparación de los cambios de su <code>Virtual DOM</code> con el DOM real. La filosofía de React también se inclina hacia la separación limpia entre los componentes. Una de las características de la biblioteca es una <code>one-way data flow</code> que significa que los componentes childs no pueden afectar directamente a los componentes principales.</p>


<p className="p"><a href="https://facebook.github.io/react/">React</a> is a library made by Facebook which uses a concept of <code>Virtual DOM</code>, which aims to apply as few mutations as possible. When the element's state changes, React decides whether an actual DOM update is necessary by comparing changes in his <code>Virtual DOM</code> with the actual DOM.
React's philosophy also leans towards clean separation between components. One of the library's features is a <code>one-way data flow</code> which means that child components cannot directly affect parent components.</p>

<p className="it">Antes de empezar quiero hacerte saber que todo el repositorio está disponible en <a href="https://github.com/Calanthe/mastermind">Calanthe/mastermind</a> .</p>


<p className="p">Before we start I want to let you know that the whole repository is available on <a href="https://github.com/Calanthe/mastermind">Calanthe/mastermind</a>.</p>

<h3>Setup and initialization</h3>

<p className="it">Como se mencionó antes, con el fin de ejecutar ES6 sin problemas, tenemos que utilizar <a href="https://babeljs.io/">Babel</a>, que compilará la sintaxis de JavaScript ES6 en ES5. También utilizaremos <a href="https://facebook.github.io/react/docs/jsx-in-depth.html">JSX</a> que es una extensión de la sintaxis de JavaScript, muy similar al conocido <code>XML</code>. Antes de iniciar la codificación, es necesario configurar el proyecto y configurar los compiladores. Vamos a usar <a href="http://webpack.github.io/docs/what-is-webpack.html">webpack</a> para construir archivos JS de trabajo:</p>


<p className="p">As mentioned before, in order to run ES6 smoothly, we need to use <a href="https://babeljs.io/">Babel</a> which will compile JavaScript ES6 syntax into ES5. We will also use <a href="https://facebook.github.io/react/docs/jsx-in-depth.html">JSX</a> which is a JavaScript syntax extension, very similar to well known <code>XML</code>. Before starting coding, we need to setup the project and configure compilers. Let's use <a href="http://webpack.github.io/docs/what-is-webpack.html">Webpack</a> to build working JS files:</p>

<div className="image"><a></a><img src="/static/g001.jpg" width="100%" alt="Image"/></div>

<p className="it">La configuración entera de webpack se especifica en el archivo <code>webpack.config.js</code>, que define las entradas, las salidas del proyecto y los tipos de transformaciones que queremos llevar a cabo. Algunos de los fragmentos más importantes son:</p>


<p className="p">The whole Webpack configuration is specified in the <code>webpack.config.js</code> file, which defines the inputs, the outputs of the project and types of transformations we want to perform. Some of the most important fragments are:</p>
<div className="image"><a></a><img src="/static/g002.jpg" width="100%" alt="Image"/></div>

<p className="it">Si ejecutas el <code>npm run watch</code> especificado en el archivo <code>package.json</code>:</p>


<p className="p">If you run the <code>npm run watch</code> specified in the <code>package.json</code> file:</p>

<div className="image"><a></a><img src="/static/g003.jpg" width="100%" alt="Image"/></div>

<p className="it">Podrás cargar tu archivo <code>///PATH_TO_FOLDER/dist/index.html</code> en el navegador.
Como especificamos en la configuración, nuestro archivo de entrada es <code>./game.js</code>:</p>

<p className="p">You will be able to load your file: <code>///PATH_TO_FOLDER/dist/index.html</code> file in the browser.
As we specified in the configuration, our entry file is <code>./game.js</code>:</p>

<div className="image"><a></a><img src="/static/g004.jpg" width="100%" alt="Image"/></div>
<p className="it">Como se puede ver en la parte superior del archivo, se importan tres módulos: <code>react</code>, <code>react-dom</code> que sirve como punto de entrada de los caminos de renderización relacionados con el DOM y nuestro código Mastermind. Después de la importación de los módulos, el código Mastermind está inicializado y renderizado en el <code>DOM</code> en el <code>ID</code> dentro del elemento <code>mastermind</code> que está definido en el archivo <code>./dist/index.html</code>:</p>


<p className="p">As you can see at the top of the file, there are imported three modules: <code>react</code>, <code>react-dom</code> which serves as the entry point of the DOM-related rendering paths and our Mastermind code.
After importing modules, the Mastermind code is initialised and rendered into the <code>DOM</code> within the element whose <code>ID</code> is <code>mastermind</code>, defined in the <code>./dist/index.html</code> file:</p>

<div className="image"><a></a><img src="/static/g005.jpg" width="100%" alt="Image"/></div>

<p className="it">En la etiqueta <code>script</code> se incluye el archivo <code>game.js</code> que debería estar en la misma carpeta <code>dist</code> de <code>index.html</code>. Si los puntos de entrada y salida del webpack están configurados correctamente, el archivo <code>./dist/game.js</code> debe ser compilado con base en el anterior archivo de origen <code>./game.js</code>.</p>


<p className="p">In the <code>script</code> tag we include the <code>game.js</code> file which should be in the same <code>dist</code> folder as <code>index.html</code>. If the Webpack's entry and output points are configured correctly, the <code>./dist/game.js</code> file should be compiled based on the aforementioned <code>./game.js</code> source file.</p>

<h3>Introduction to the React components</h3>

<p className="it">El proyecto está configurado así que vamos a centrarnos en la parte más interesante - la programación del juego Mastermind en sí. El módulo del juego en su conjunto se puede dividir en unos pocos componentes. Un componente es una clase React, que debe ser responsable de una sola cosa. Como se mencionó antes, React tiene <code>unidirectional data flow</code> por lo que es importante mantener <code>stateless</code> la mayor cantidad de componentes como sea posible. Los desarrolladores de Facebook recomiendan:</p>


<p className="p">The project is setup so let's focus on the most interesting part - programming the Mastermind game itself. The whole game module will be divided into a few components. A component is a React class, which should be responsible for one thing only. As mentioned before, React has <code>unidirectional data flow</code> so it is important to keep as many of components as possible <code>stateless</code>. As Facebook's developers recommend:</p>

<blockquote>
<p className="it">Un patrón común es crear varios componentes sin estado que acaban de renderizar datos, y tienen un componente de estado por encima de ellos en la jerarquía que pasa su estado a sus niños a través de los props. El componente con estado encapsula toda la lógica de la interacción, mientras que los componentes sin estado cuidan la renderización de los datos de una manera declarativa.</p>


<p className="p">A common pattern is to create several stateless components that just render data, and have a stateful component above them in the hierarchy that passes its state to its children via props. The stateful component encapsulates all of the interaction logic, while the stateless components take care of rendering data in a declarative way.</p>
</blockquote>

<p className="it">Veamos los componentes principales que he creado para el juego Mastermind:</p>


<p className="p">Let's look at the top components I've created for the Mastermind game:</p>

<div className="image"><a></a><img src="/static/g006.jpg" width="100%" alt="Image"/></div>

<p className="it"><code>Mastermind</code> es nuestro componente <code>stateful</code> que pasa el estado de sus componentes childs: <code>Rules</code>, <code>DecodingBoard</code>, <code>CodePegs</code> y <code>EndGame</code>. Por supuesto aquellos componentes sub también pueden encapsular otros componentes secundarios, como <code>DecodingBoard</code> y <code>Row</code> en este ejemplo:</p>


<p className="p"><code>Mastermind</code> is our <code>stateful</code> component which passes state to its child components: <code>Rules</code>, <code>DecodingBoard</code>, <code>CodePegs</code> and <code>EndGame</code>. Of course those sub components can also encapsulate other child components, like <code>DecodingBoard</code> and <code>Row</code> in this example:</p>

<div className="image"><a></a><img src="/static/g007.jpg" width="100%" alt="Image"/></div>

<p className="it">La jerarquía de los componentes integrales es más fácil de leer en el siguiente diagrama:</p>


<p className="p">The whole components' hierarchy is more readable on the following diagram:</p>


<div className="image"><a></a><img src="/static/hierarchy.png" width="60%" alt="Image"/></div>

<p className="it">Así es como se ven estos componentes en la extensión React de Chrome:</p>


<p className="p">This is how those components look like in the Chrome's React extension:</p>


<div className="image"><a></a><img src="/static/react_extension.png" width="100%" alt="Image"/>
<span class="caption">DecodingBoard in the Chrome's React extension</span>
</div>

<p className="it">Una de las primeras novedades de ES6 que quiero presentarte es <code>modules</code>. Si te has fijado anteriormente en el archivo <code>./game.js</code>, importé tres módulos en la parte superior de ese archivo:</p>


<p className="p">One of the first new features of ES6 I want to introduce to you are <code>modules</code>. If you noticed earlier in the <code>./game.js</code> file, I imported three modules at the top of that file:</p>

<div className="image"><a></a><img src="/static/g008.jpg" width="100%" alt="Image"/></div>

<p className="it">Los módulos son ya conocidos por la comunidad front-end. Se ejecutaban a través de diferentes bibliotecas como <a href="http://requirejs.org">RequireJS</a> o <a href="http://browserify.org/">Browserify</a> pero afortunadamente ahora podemos utilizar la solución nativa construida en ES6. Una de las principales cosas de los módulos es que tienen que especificarse en un archivo dedicado. Cada módulo es un conjunto unitario, lo que significa que existe a lo sumo una instancia del módulo independientemente del número de veces que se importó. El módulo completo se ejecuta una vez que se carga y su contenido se encapsula, previniendo la contaminación del namespace global.</p>


<p className="p">Modules are already known to the front-end community. There were implemented via different libraries like <a href="http://requirejs.org">RequireJS</a> or <a href="http://browserify.org/">Browserify</a> but fortunately now we can use the native solution built in ES6.
One of the principal of modules is that they have to be specified in one dedicated file. Every module is a singleton, which means that there exists at most one instance of the module regardless of how many times it was imported. The whole module is executed once it is loaded and it's content is encapsulated, preventing the pollution of the global namespace.</p>

<p className="it">La exportación de módulos en ES6 es muy fácil y sencilla:</p>


<p className="p">Exporting modules in ES6 is very easy and straightforward:</p>

<div className="image"><a></a><img src="/static/g009.jpg" width="100%" alt="Image"/></div>

<p className="it">Tenemos unas cuantas clases React definidas en el archivo <code>./src/mastermind</code>, pero queremos exponer un solo valor. La sintaxis <code>default export</code> significa que los otros módulos ES6 sólo pueden acceder a una clase en particular, y sólo puede ser leído sin ninguna modificación. El módulo <code>./src/mastermind</code> exporta la clase <code>Mastermind</code> porque se trata de un módulo child y no puede exportar módulos que se han definido en otro lugar.</p>


<p className="p">We have a few React classes defined in the <code>./src/mastermind</code> file but we want to expose only one value. The <code>default export</code> syntax means that the other ES6 modules can only access that one particular class, and it can only be read without any modifications. The <code>./src/mastermind</code> module exports the <code>Mastermind</code> class because it is a child module and can't export modules that have been defined elsewhere.</p>

<h3>Props versus states</h3>

<p className="it">Los componentes en React son máquinas de estado, lo que significa que el <code>DOM</code> sólo se actualiza en base al nuevo estado. Los componentes también han predefinido métodos, llamados <code>lifecycle methods</code> que se ejecutan en puntos específicos en el ciclo de vida de un componente. No hay punto de revisión de <a href="https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods"> todos ellos</a>, pero vale la pena tener en cuenta que no es: una <code>componentWillMount</code>, invoca justo antes de renderizar; una <code>componentDidMount</code>invoca justo después de la renderización; y <code>shouldComponentUpdate</code> donde podemos especificar si hay una necesidad de renderizar un componente en particular.</p>


<p className="p">Components in React are state machines, which means that the <code>DOM</code> is updated only based on the new state.
Components have also predefined methods, called <code>lifecycle methods</code> which are executed at specific points in a component's lifecycle.
There is no point of reviewing <a href="https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods">all of them</a> but it is worth keeping in mind that there is: a <code>componentWillMount</code>, invoked just before rendering; a <code>componentDidMount</code> invoked just after rendering; and a <code>shouldComponentUpdate</code> where we can specify if there is a need to render particular component.</p>

<p className="it">Vamos a echar un vistazo más profundo a la clase <code>Mastermind</code> en si misma. Como se mencionó antes, es la principal clase que encapsula subclases React y pasa los datos a ellas. En React hay dos tipos de propiedades: <code>props</code> y <code>states</code> y la diferencia entre ellas es crucial para entender toda la filosofía detrás de React. Ambos son objetos JS lisos y sus cambios disparan la actualización del <code>render()</code>. Los <code>Props</code> se pasan al child dentro del método de procesamiento de los padres y son inmutables en los componentes childs. Los componentes childs deben ser lo más <code>stateless</code> posible y simplemente renderizar esos valores <code>props</code>. El mejor ejemplo de tales componentes <code>stateless</code> en el juego Mastermind es el <code>SubmitButton</code>:</p>


<p className="p">Let's take a deeper look at the <code>Mastermind</code> class itself. As mentioned before, it is the main React class which encapsulates sub classes and pass data to them. In React there are two kinds of properties: <code>props</code> and <code>states</code> and the difference between them is crucial to understand the whole philosophy behind React.
Both of them are plain JS objects and their changes trigger <code>render()</code> update. <code>Props</code> are passed to the child within the render method of the parent and are immutable in the child components. The child components should be as <code>stateless</code> as possible and just render those <code>props</code> values. The best example of such <code>stateless</code> component in the Mastermind game is the <code>SubmitButton</code>:</p>

<div className="image"><a></a><img src="/static/g010.jpg" width="100%" alt="Image"/></div>

<p className="it">Sobre la base de <code>props</code> pasar por su módulo padre, que renderiza un elemento <code>&lt;button&gt;</code> con atributos propios como nombre de clase y el método <code>onClick</code>. Como se puede ver, esos valores <code>props</code> son accesibles aquí a través del objeto <code>this.props</code>.</p>


<p className="p">Based on <code>props</code> passed by it's parent module, it renders a <code>&lt;button&gt;</code> element with proper attributes like class name and <code>onClick</code> method. As you can see, those <code>props</code> values are accessible here via <code>this.props</code> object.</p>

<p className="it">Pero ¿cómo podemos cambiar esos valores pasados? Para esto estan los <code>states</code>. Al contrario de los componentes childs, los padres son los componentes <code>stateful</code>, lo que significa que por lo general basado en la acción del usuario, pueden mutar los valores <code>states</code> y pasarlos hacia abajo. Por eso <code>props</code> y <code>state</code> están relacionados. El <code>state</code> de un componente a menudo ces onvertido en el <code>props</code> de un componente child. Como aquí:</p>


<p className="p">But how can we change those passed values? This is what <code>states</code> are for. Contrary to child components, parent components are <code>stateful</code>, which means that usually based on the user's action, they can mutate the <code>states</code> values and pass them down. That's why <code>props</code> and <code>state</code> are related. The <code>state</code> of one component will often become the <code>props</code> of a child component. Like here:</p>

<div className="image"><a></a><img src="/static/g011.jpg" width="100%" alt="Image"/></div>

<p className="it">El <code>codeLength</code> y <code>colors</code> se pasan al módulo <code>Mastermind</code> y se accede allí por los valores <code>this.props.colors</code> y <code>this.props.codeLength</code>:</p>


<p className="p">The <code>codeLength</code> and <code>colors</code> are passed to the <code>Mastermind</code> module and accessed there by <code>this.props.colors</code> and <code>this.props.codeLength</code> values:</p>
<div className="image"><a></a><img src="/static/g012.jpg" width="100%" alt="Image"/></div>

<p className="it">El <code>state</code> <code>selectedPeg</code> es inicializado en la función predefinida <code>getInitialState()</code> que se ejecuta exactamente una vez durante el ciclo de vida del componente y establece todo el estado:</p>


<p className="p">The <code>selectedPeg</code> <code>state</code> is initialised in the predefined <code>getInitialState()</code> function which is executed exactly once during the lifecycle of the component and sets up all state:</p>

<div className="image"><a></a><img src="/static/g013.jpg" width="100%" alt="Image"/></div>

<p className="it">A pesar del método <code>getInitialState</code>, el módulo <code>Mastermind</code> también contiene otras funciones:</p>


<p className="p">Despite the <code>getInitialState</code> method, the <code>Mastermind</code> module also contains other functions:</p>

<div className="image"><a></a><img src="/static/g014.jpg" width="100%" alt="Image"/></div>

<p className="it">Esto se considera que es una buena práctica, ya que el componente <code>stateful</code> <code>Mastermind</code> tiene todas las funciones de devolución de llamada y pasa al estado a través de <code>props</code>. Cuando las funciones de devolución de llamada llaman al método <code>this.setState()</code> y mutan <code>states</code>, React se encarga de re-renderizar los componentes. Como podrás darte cuenta, cada uno de los componentes tiene un método <code>render</code>. Es un método requerido responsable sólo de devolver un único elemento child. Como se puede ver siempre devuelve cualquiera de las etiquetas <code>HTML</code> u otro componente secundario que finalmente renderizará en el HTML.</p>


<p className="p">This is considered to be a good practice, because the <code>stateful</code> <code>Mastermind</code> component has all of the callback functions and pass the state down through <code>props</code>.
When the callback functions call <code>this.setState()</code> method and mutate <code>states</code>, React takes care of re-rendering components.
As you probably noticed, each of the components have a <code>render</code> method. It is a required method responsible only for returning the single child element. As you can see it always returns either <code>HTML</code> tags or another child component which will eventually render to HTML.</p>

<h3>JSX</h3>

<p className="it">Como se mencionó antes, he utilizado la extensión sintáctica <code>JSX</code>. Es posible saltarse <code>JSX</code> y utilizar Javascript plano. En lugar de:</p>


<p className="p">As mentioned before, I used the <code>JSX</code> syntax extension. It is possible to skip <code>JSX</code> and use plain Javascript. Instead of:</p>
<div className="image"><a></a><img src="/static/g015.jpg" width="100%" alt="Image"/></div>
<p className="it">Podrías escribir:</p>


<p className="p">I could write:</p>

<div className="image"><a></a><img src="/static/g016.jpg" width="100%" alt="Image"/></div>
<p className="it">Yo prefiero usar la extensión <code>JSX</code>, porque es una sintaxis más familiar para la definición de las estructuras de árbol con los atributos.</p>


<p className="p">I prefer to use the <code>JSX</code> extension, because it is more familiar syntax for defining tree structures with attributes.</p>

<p className="it">Creo que he cubierto todos los elementos básicos más importantes de la biblioteca React. Será más fácil ahora entender cómo funciona el juego Mastermind.</p>


<p className="p">I think that I covered all of the most important basics of React library. It will be easier now to understand how the Mastermind game works.</p>

<h3>Generating the code to guess the peg colors</h3>

<p className="it">Asumo que ya estás familiarizado con las reglas del juego Mastermind. Si no es así, echá un vistazo a esta útil <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">descripción de Wikipedia</a> .</p>


<p className="p">I assume that you already are familiar with the rules of the Mastermind game. If not, take a look at this useful <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">Wikipedia description</a>.</p>

<p className="it">Lo primero que hay que hacer al principio del juego es crear el código auto generado que el usuario tendrá que adivinar. Lo hacemos en el método <code>getCode</code>:</p>


<p className="p">The first thing that needs to be done at the beginning of the game is create the auto generated code that the user will have to guess. We do that in the <code>getCode</code> method:</p>

<div className="image"><a></a><img src="/static/g017.jpg" width="100%" alt="Image"/></div>

<p className="it">Una vez que comprendas la nueva <code>arrow functions</code> de ES6 el código anterior te resultará sencillo. La expresión <code>generateCode = (i) =&gt; &#123;i&#125;;</code> es una sintaxis más corta que <code>generateCode = function (i) &#123; return i &#125;;</code>. <br></br>No sólo se ve mucho mejor, sino que también se une al léxico <code>this</code>, así que no hay necesidad de utilizar núnca más <code>.bind()</code> o <code>var that = this</code>.</p>


<p className="p">The above code is straightforward once you understand the new ES6 <code>arrow functions</code>. The expression <code>generateCode = (i) =&gt; &#123;i&#125;;</code> is a shorter syntax than <code>generateCode = function (i) &#123; return i &#125;;</code>.
<br></br>It not only looks much better but it also lexically binds <code>this</code>, so there is no need to use <code>.bind()</code> or <code>var that = this</code>, anymore.</p>

<p className="it">También he empezado a utilizar las palabras clave <code>const</code> y <code>let</code> para declarar una variable. Uno de los mayores inconvenientes de ES5 es que <code>var</code> crea una variable con ámbito dentro de su función principal más próxima. Esto conduce a la <a href="http://ignaciothayer.com/post/a-dangerous-example-of-javascript-hoisting/">elevación de los problemas</a> que a veces requiere el uso de arreglarlo con <code>closures</code>. <code>Let</code> alcanza la variable al bloque más cercano, que incluye también los bucles y sentencias condicionales. La principal diferencia entre <code>let</code> y <code>const</code> es que la declaración <code>const</code> crea una <code>reference</code> de solo lectura  a un valor por lo que una vez definido no puede ser reasignado.</p>


<p className="p">I also started using the keywords <code>const</code> and <code>let</code> to declare a variable. One of the biggest drawbacks of ES5 is that <code>var</code> creates a variable scoped within its nearest parent function. This leads to <a href="http://ignaciothayer.com/post/a-dangerous-example-of-javascript-hoisting/">hoisting issues</a> which sometimes requires using <code>closures</code> to fix. <code>Let</code> scopes the variable to the nearest block, which includes also loops and conditional statements. The main difference between <code>let</code> and <code>const</code> is that the <code>const</code> declaration creates a read-only <code>reference</code> to a value so once defined it cannot be re-assigned.</p>

<p className="it">A pesar de no ser totalmente apoyado por React yo uso <a href="http://www.2ality.com/2015/01/es6-maps-sets.html">Map</a> para almacenar datos sobre las clavijas de código y conjetura actual realizada por el usuario. El <code>Map</code> es una nueva estructura de datos en la ES6, que en sí es simplemente un objeto con un simple mapa clave-valor. Las claves pueden ser de cualquier tipo, incluidas las cadenas y objetos. Es muy fácil comparar dos <code>Maps</code>, obtener su tamaño y alterar sus valores. Acabo declaro código como un <code>new Map()</code> objeto y para cada uno de los cuatro clavijas de código, yo genero un número aleatorio de 0-5 que es más adelante representado como un color particular. Los valores generados se almacenan en el objeto <code>Map</code> mediante el uso de un método <code>code.set()</code>.</p>


<p className="p">Despite not being fully supported by React I used <a href="http://www.2ality.com/2015/01/es6-maps-sets.html">Map</a> to store data about code pegs and current guess made by the user. The <code>Map</code> is a new data structure in ES6, which itself is just an object with a simple key-value map. The keys can be any type, including strings and objects. It is very easy to compare two <code>Maps</code>, get its size and alter its values.
I just declare code as a <code>new Map()</code> object and for each of the four code pegs, I generate a random number from 0-5 which is later on represented as a particular color. The generated values are stored in the <code>Map</code> object by using a <code>code.set()</code> method.</p>

<div className="image"><a></a><img src="/static/g018.jpg" width="100%" alt="Image"/></div>

<p className="it">La función <code>getRandomArbitrary</code> es un ejemplo de una función ES6 con un parámetro predeterminado. Esto significa que si no hay valor se pasa al método <code>this.getRandomArbitrary()</code>, los parámetros <code>min</code> y <code>max</code> se inicializan con valores por defecto <code>function(min = 0, max = 5)</code>.</p>


<p className="p">The <code>getRandomArbitrary</code> function is an example of an ES6 function with a default parameter. This means that if no value is passed to the method <code>this.getRandomArbitrary()</code>, the parameters <code>min</code> and <code>max</code> are initialized with default values <code>function(min = 0, max = 5)</code>.</p>

<div className="image"><a></a><img src="/static/g019.jpg" width="100%" alt="Image"/></div>

<p className="it">El método <code>times</code> es un método <a href="http://stackoverflow.com/a/34175903">funcional-ish</a> creado para impedirme que  utilice <code>for var</code> para iterar n veces. He encontrado que la solución es muy limpia y útil.</p>


<p className="p">The <code>times</code> method is a <a href="http://stackoverflow.com/a/34175903">functional-ish</a> method created to prevent me from using <code>for var</code> to iterate n times. I found that solution really clean and useful.</p>

<h3>Building the board and pegs</h3>

<p className="it">La tabla de decodificación situada a la izquierda consta de diez filas, donde cada una de ellas incluye:</p>


<p className="p">The decoding board located on the left consists of ten rows, where each of them includes:</p>

<ul>
<li className="it"><code>DecodeRow</code>, Donde el usuario hace sus intentos,</li>

<li className="p"><code>DecodeRow</code>, where the user makes his/hers attempts,</li>
<li className="it"><code>SubmitButton</code>, Que verifican el valor seleccionado,</li>

<li className="p"><code>SubmitButton</code>, which verify the selected value,</li>
<li className="it"><code>HintsRow</code> para indicar qué clavijas son correctamente elegidas.</li>

<li className="p"><code>HintsRow</code> to indicate which pegs are chosen correctly.</li>
</ul>

<p className="it">El valor <code>key</code> que se pasa abajo a cada componente secundario es un valor necesario que ayuda a React a manejar de una manera mínima los cambios del <code>DOM</code>.</p>


<p className="p">The <code>key</code> value passed down to each child component is a necessary value which helps React handle <code>DOM</code> changes in a minimal way.</p>

<div className="image"><a></a><img src="/static/g020.jpg" width="100%" alt="Image"/></div>

<p className="it">El módulo <a href="https://github.com/JedWatson/classnames">classnames</a> fue originalmente parte de React, pero ahora se pone de pie como una biblioteca de utilidad adicional. Es un módulo muy útil que ayuda a unir <code>classNames</code> juntos. En lugar de:</p>


<p className="p">The <a href="https://github.com/JedWatson/classnames">classNames</a> module originally was part of React, but now it stands up as an additional utility library. It is a really useful module which helps joining <code>classNames</code> together.
Instead of:</p>

<div className="image"><a></a><img src="/static/g021.jpg" width="100%" alt="Image"/></div>

<p className="it">Tengo solución ahora definitivamente más legible:</p>


<p className="p">I have now definitely more readable solution:</p>

<div className="image"><a></a><img src="/static/g022.jpg" width="100%" alt="Image"/></div>

<p className="it">Algunas cosas interesantes que están sucediendo en la clase <code>DecodeRow</code>. En primer lugar, yo no quería actualizar todas las filas ya probada. En tales situaciones, el método <code>shouldComponentUpdate</code> es muy útil:</p>


<p className="p">Some interesting stuff is happening in the <code>DecodeRow</code> class. First of all, I didn't want to update all of the already guessed rows. In such situations, the <code>shouldComponentUpdate</code> method comes in handy:</p>

<div className="image"><a></a><img src="/static/g023.jpg" width="100%" alt="Image"/></div>

<p className="it">El <a href="https://facebook.github.io/react/docs/advanced-performance.html#avoiding-reconciling-the-dom">shouldComponentUpdate</a> es muy eficaz en situaciones en las que estamos seguros de que la re-renderización del componente es redundante. La variable <code>nextProps</code> tiene acceso a las propiedades pasados a este componente y sobre esa base se puede calcular si hay una necesidad de proceder a la re-renderización</p>


<p className="p">The <a href="https://facebook.github.io/react/docs/advanced-performance.html#avoiding-reconciling-the-dom">shouldComponentUpdate</a> is very effective in situations when we are sure that the re-rendering of the component is redundant.
The <code>nextProps</code> variable has access to the properties passed to this component and based on that we can calculate if there is a need to proceed with re-rendering.</p>

<p className="it">El método <code>render</code> del componente <code>DecodeRow</code> es el siguiente:</p>


<p className="p">The <code>render</code> method of the <code>DecodeRow</code> component looks like this:</p>

<div className="image"><a></a><img src="/static/g024.jpg" width="100%" alt="Image"/></div>

<p className="it">La lase CSS de la clavija depende de las clavijas preseleccionadas situadas en el lado derecho, lo que acaba llamando a <code>CodePegs</code>. Este es el lugar donde el usuario puede seleccionar los colores que desee utilizar en la tabla de decodificación de la izquierda. Esos valores seleccionados se almacenan en una <code>Map</code> llamada <code>currentGuess</code> y pueden tomar cualquier valor predefinido en los valores <code>./game.js</code>: cero, uno, dos, tres, cuatro, cinco. Es importante en este punto pasar el valor correcto por lo que los estilos se aplicarán de acuerdo a las clavijas elegidas desde la derecha.</p>


<p className="p">The peg's css class depends on the preselected pegs located on the right hand side, which I just called <code>CodePegs</code>. This is the place where the user can select colors he/she want to use on the decoding board on the left.
Those selected values are stored in a <code>Map</code> called <code>currentGuess</code> and they can take any value predefined in the <code>./game.js</code> values: zero, one, two, three, four, five. It is important at this point to pass the correct value so the styles will be applied accordingly to the chosen pegs from the right.</p>

<p className="it">El componente <code>Peg</code> se encarga de mostrar markup basado en los <code>props</code> pasados. Este es otro ejemplo de un componente <code>stateless</code>:</p>


<p className="p">The <code>Peg</code> component is responsible for displaying markup based on the passed <code>props</code>. This is another example of a <code>stateless</code> component:</p>

<div className="image"><a></a><img src="/static/g025.jpg" width="100%" alt="Image"/></div>

<p className="it">Cada clavija en el juego (en ambos lados izquierdo y derecho) se representa como <code>&lt;input type='radio'/&gt;</code> el que se encarga de almacenar los valores necesarios y correspondiente elemento <code>&lt;label&gt;</code> que se utiliza sólo con fines de estilo. Así es como se les da styled a las clavijas:</p>


<p className="p">Every peg in the game (on both left and right sides) is represented as <code>&lt;input type='radio'/&gt;</code> which is responsible for storing necessary values and corresponding <code>&lt;label&gt;</code> element which is used for styling purposes only. This is how pegs are styled:</p>

<div className="image"><a></a><img src="/static/g026.jpg" width="100%" alt="Image"/></div>

<p className="it">Como probablemente ya has descubierto, el valor <code>className</code> establece el atributo de clase css. Se llama <code>className</code> en lugar de simplemente <code>class</code>, porque <code>JSX</code> se traduce a JS, donde <code>class</code> ya está en uso.</p>


<p className="p">As you probably already figured out, the <code>className</code> value sets the css class attribute. It is called <code>className</code> instead of just <code>class</code>, because <code>JSX</code> gets translated to JS, where <code>class</code> is already in use.</p>

<h3>User actions and peg selection</h3>

<p className="it">Las clavijas en el tablero de decodificación situado a la izquierda cambian su estado (que se representa como colores) sobre la base de la paridad seleccionada a la derecha. Por defecto se selecciona la primera clavija (una naranja), que está marcada con un borde más oscuro. Como se mencionó antes, el <code>Peg</code> es el módulo más bajo en la jerarquía. Las acciones del usuario son manejadas por el atributo <code>onClick</code> <code>onClick=&#123;this.props.activatePeg&#125;</code>.</p>


<p className="p">Pegs on the decoding board located on the left change their state (which is represented as colors) based on the selected peg on the right. By default the first peg (orange one) is selected, which is marked with a darker border.
As mentioned before, the <code>Peg</code> is the lowest module in the hierarchy. The user actions are handled by the <code>onClick</code> attribute <code>onClick=&#123;this.props.activatePeg&#125;</code>.</p>

<p className="it">El método <code>activatePeg</code> se define en el módulo <code>Mastermind</code>:</p>


<p className="p">The <code>activatePeg</code> method is defined in the <code>Mastermind</code> module:</p>

<div className="image"><a></a><img src="/static/g027.jpg" width="100%" alt="Image"/></div>

<p className="it">El nuevo <code>state</code> <code>selectedPeg</code> se establece cuando se selecciona una de las clavijas correctas. Cada clavija en el juego se representa como un <code>&lt;input&gt;</code> por lo que su valor es muy fácil de conseguir. Después de cambiar el estado <code>selectedPeg</code>, React se encarga de la re-renderización y la clavija seleccionado se configura como activa.</p>


<p className="p">The new <code>selectedPeg</code> <code>state</code> is set when one of the right pegs was selected. Every peg in the game is represented as an <code>&lt;input&gt;</code> so its value is really easy to get.
After changing the <code>selectedPeg</code> state, React takes care of the re-rendering and the selected peg is set as active.</p>

<p className="it">Se puede ver aquí el método ES6 <code>startsWith</code>, que determina si una cadena 'clavija' comienza con los caracteres de otra cadena, en este ejemplo - nombre de la entrada en el tablero <code>CodePegs</code>.</p>


<p className="p">You can see here the <code>startsWith</code> ES6 method, which determines whether a string 'peg' begins with the characters of another string, in this example - name of the input on the <code>CodePegs</code> board.</p>

<p className="it">En la situación en la que se selecciona la paridad en el tablero de decodificación, el estado <code>currentGuess</code> se actualiza: <code>this.setState(&#123; currentGuess: this.state.currentGuess.set(event.target.value - 1, this.state.selectedPeg) &#125;);</code>. El <code>currentGuess</code> es una estructura <code>Map</code>, donde un valor adecuado identificado por una clave <code>event.target.value - 1</code>, tiene que ser cambiada a la clavija preseleccionada: <code>this.state.selectedPeg</code>.</p>


<p className="p">In the situation when the peg on the decoding board is selected, the <code>currentGuess</code> state is updated: <code>this.setState(&#123; currentGuess: this.state.currentGuess.set(event.target.value - 1, this.state.selectedPeg) &#125;);</code>.
The <code>currentGuess</code> is a <code>Map</code> structure, where a proper value identified by a <code>event.target.value - 1</code> key, has to be changed to the preselected peg: <code>this.state.selectedPeg</code>.</p>

<p className="it">Una vez más, después de cambiar el <code>state</code>React renderiza la actualización de board.</p>


<p className="p">Once again, after changing the <code>state</code>, React renders the updated board.</p>

<h3>Let's take a guess!</h3>

<p className="it">Después de la elección de cuatro clavijas, el usuario puede enviar una conjetura para comprobar si son correctas. El botón de envío es visible sólo cuando todas las cuatro clavijas en una fila se seleccionan. En la selección, se llama a <code>this.props.submitPegs</code>:</p>


<p className="p">After choosing four pegs, the user can submit a guess to check if they are correct. The submit button is visible only when all of the four pegs in one row are selected.
On selection, the <code>this.props.submitPegs</code> is called:</p>

<div className="image"><a></a><img src="/static/g028.jpg" width="100%" alt="Image"/></div>

<p className="it">Primero necesitamos copiar el objeto <code>Map</code> que representa un código de color generado aleatoriamente (que - como un recordatorio - consta de 4 clavijas). Es importante hacer un clon del objeto, porque más adelante vamos a eliminar algunos de sus valores y no queremos alterar el código de color principal. Después de inicializar los valores, hacemos dos pasos importantes. En primer lugar, queremos ir a través de las clavijas seleccionadas y comparar sus valores y posiciones con el código de color generado. Si hay algúna clavija con la misma posición y el color, tenemos que sacarla de <code>Maps</code> porque no loa queremos en el siguiente paso de cálculos. También tenemos que contar esas clavijas cuya posición y valores son los mismos, con el fin de mostrar los círculos pistas sobre valores coincidentes (de estilo como clavijas negras). Aviso, que a fin de bucle a través de objetos <code>Map</code>, tenemos que utilizar la sintaxis <code>for (let [key, value] of pegs) &#123;&#125;</code>.</p>


<p className="p">First we need to copy the <code>Map</code> object which represents a randomly generated color code (which - as a reminder - consists of 4 pegs). It is important to make a clone of the object, because later on we are going to delete some of its values and we don't want to alter the main color code.
After initializing values, we do two important steps. First, we want to go through the selected pegs and compare their values and positions with the generated color code. If there are any pegs with the same position and color, we need to remove them from <code>Maps</code> because we don't want them in the next step of calculations. We also need to count those pegs whose position and values are the same, in order to show the hints circles as matching values (styled as black pegs).
Notice, that in order to loop through <code>Map</code> objects, we need to use the <code>for (let [key, value] of pegs) &#123;&#125;</code> syntax.</p>

<p className="it">En el segundo paso, tenemos que encontrar todas las clavijas seleccionados que están en cualquier parte del código y marcarla  más tarde con un color blanco. Para ello he utilizado la implementación simple de la función <code>keyOf</code>, que devuelve bien <code>-1</code> o la tecla del elemento encontrado.</p>


<p className="p">In the second pass, we need to find all of the selected pegs which are anywhere in the code and mark them later with a white color. To do that I used the simple implementation of the <code>keyOf</code> function, which returns either <code>-1</code> or the key of the item found.</p>

<p className="it">Tengo que admitir que el algoritmo anterior no fue inventado por mí. He encontrado esta <a href="http://codereview.stackexchange.com/questions/27710/how-can-i-improve-this-version-of-the-board-game-mastermind"> discusión muy interesante</a> y la aplicación de dichos hallazgos a mi juego.</p>

<p className="p">I have to admit that the above algorithm wasn't invented by me. I found this <a href="http://codereview.stackexchange.com/questions/27710/how-can-i-improve-this-version-of-the-board-game-mastermind">really interesting discussion</a> and applied those findings to my game.</p>

<div className="image"><a></a><img src="/static/g029.jpg" width="100%" alt="Image"/></div>

<p className="it">Después de la validación de las clavijas, necesitamos incrementar el valor <code>currentRow</code>, reseteando el <code>Map</code> <code>currentGuess</code>, por lo que el usuario puede tomar otra conjetura y actualizar el <code>exactMatches</code> y <code>valueMatches</code> que necesita el <code>HintsRow</code> componente.</p>


<p className="p">After the pegs' validation, we need to increment the <code>currentRow</code> value, reset the <code>currentGuess</code> <code>Map</code>, so the user can take another guess and update the <code>exactMatches</code> and <code>valueMatches</code> needed by the <code>HintsRow</code> component.</p>

<p className="it"><code>HintsRow</code>proporciona retroalimentación acerca de las clavijas seleccionadas. La pequeña clavija negra se coloca para cada clavija de código que es correcta en color y posición. Así que debe haber clavijas negras <code>exactMatches</code> y clavijas de sugerencia blancas <code>valueMatches</code>:</p>


<p className="p"><code>HintsRow</code> provides feedback about selected pegs. The small black peg is placed for each code peg which is correct in both color and position. So there should be <code>exactMatches</code> black pegs and <code>valueMatches</code> white hint pegs:</p>

<div className="image"><a></a><img src="/static/g030.jpg" width="100%" alt="Image"/></div>

<p className="it">Si todas las clavijas seleccionadas por el usuario están en la ubicación correcta, tenemos que actualizar el estado <code>endGame</code> e informar al usuario sobre el éxito. Si la fila actual es la última y el usuario todavía no adivina el patrón, entonces el juego ha terminado.</p>


<p className="p">If all of the pegs selected by the user are in the correct location, we have to update the <code>endGame</code> status and inform the user about the success. If the current row is the last one and the user still didn't guess the pattern, then the game is over.</p>

<div className="image"><a></a><img src="/static/g031.jpg" width="100%" alt="Image"/></div>

<h3>Summary</h3>

<p className="it">Sé que esto es más bien un post largo y realmente aprecio que te quedastes conmigo hasta aquí :). Me he centrado sólo en las partes más importantes del juego. El código relacionado con una mayor funcionalidad como volver a cargar el juego y alternar las reglas del juego lo dejo como un ejercicio para vos!</p>


<p className="p">I know that this is a rather long post and I really appreciate that you stayed with me this far :). I focused only on the most important parts of the game. The code related to enhanced functionality like reloading the game and toggling game rules I will leave as an exercise for you!</p>

<p className="it">Vamos a resumir lo que hemos aprendido acerca de ECMAScript 6 y la biblioteca React.</p>


<p className="p">Let's summarise what we've just learned about ECMAScript 6 and React library.</p>

<h3>ES6:</h3>

<ul>
<li className="it">Hay nuevas declaraciones de variables llamadas <code>let</code> y <code>const</code>, sobre todo para evitar la elevación.</li>

<li className="p">There are new <code>let</code> and <code>const</code> variable declarations, mostly to avoid hoisting.</li>
<li className="it">El <code>str.startsWith()</code> es uno de los métodos de string más nuevo, lo que determina si una string comienza con los caracteres de otra string.</li>

<li className="p">The <code>str.startsWith()</code> is one of the newest string method, which determines whether a string begins with the characters of another string.</li>
<li className="it">Los mapas son una de las nuevas estructuras de datos que soportan algunos métodos puñado como: <code>set</code>, <code>get</code>, <code>has</code>, <code>delete</code>.</li>

<li className="p">Maps are one of the new data structures which support a few handful methods like: <code>set</code>, <code>get</code>, <code>has</code>, <code>delete</code>.</li>
<li className="it">Utilizá <code>for (var value of myArray) &#123;&#125;</code> para recorrer <code>Maps</code>.</li>

<li className="p">Use <code>for (var value of myArray) &#123;&#125;</code> to iterate through <code>Maps</code>.</li>

<li className="it">Las funciones de dirección <code>=&gt;</code> son útiles cuando se desea enlazar automáticamente <code>this</code>.</li>

<li className="p">Arrow functions <code>=&gt;</code> are useful when you want to automatically bind <code>this</code>.</li>
<li className="it">Es posible crear módulos de importación.</li>

<li className="p">It is possible to create and import modules.</li>

<li className="it">El <code>default parameter</code> de la función de permitir que los parámetros que se inicializan con valores por defecto si no se pasa ningún valor.</li>

<li className="p">The <code>default parameter</code> of the function allow parameters to be initialized with default values if no value is passed.</li>
</ul>

<h3>React:</h3>

<ul>
<li className="it">Un componente es una clase React, que idealmente es responsable de una sola cosa.</li>

<li className="p">A component is a React class, which ideally is responsible for one thing only.</li>

<li className="it">Siempre devuelve un elemento DOM que envuelve los componentes childs o markup en su interior.</li>

<li className="p">Always return one DOM element which wraps child components or markup inside.</li>

<li className="it">Los controladores de eventos modifican el estado y <code>render()</code> refleja el estado actual.</li>

<li className="p">Event handlers modify the state and <code>render()</code> reflects the current state.</li>

<li className="it">La palabra clave <code>className</code> se utiliza porque <code>class</code> se toma en ES6. Así como <code>htmlFor</code> en lugar de <code>for</code>.</li>

<li className="p">The <code>className</code> keyword is used because <code>class</code> is taken in ES6. As well <code>htmlFor</code> instead of <code>for</code>.</li>
<li className="it">Los <code>Props</code> son inmutables en los componentes childs.</li>

<li className="p"><code>Props</code> are immutable in the child components.</li>

<li className="it">Los <code>States</code>son mutables. Después de alterarlos, React se encarga de la re-renderización de componentes.</li>

<li className="p"><code>States</code> are mutable. After altering them, React takes care of re-rendering components.</li>

<li className="it">Las variables en <code>JSX</code> se pasan en <code>&#123;&#125;</code>.</li>

<li className="p">Variables in <code>JSX</code> are passed in <code>&#123;&#125;</code>.</li>

<li className="it">Renderizaremos los componentes lo menos posible, recordando el método <code>shouldComponentUpdate</code>.</li>

<li className="p">Re-render components as little as possible, remember about the <code>shouldComponentUpdate</code> method.</li>
</ul>

<p className="it">Soy consciente de que apenas he tocado el tema de la ES6. Yo recomendaría la lectura de este libro en línea bien escrito sobre <a href="http://exploringjs.com/es6/">EcmaScript 6</a> por <a href="http://www.2ality.com">el Dr. Axel Rauschmayer</a> o simplemente mirar en <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">los documentos Mozilla JavaScript</a> si estás interesado en profundizar en este tema.</p>


<p className="p">I am aware that I barely touched the subject of ES6. I would highly recommend reading this well written online book about <a href="http://exploringjs.com/es6/">EcmaScript 6</a> by <a href="http://www.2ality.com">Dr. Axel Rauschmayer</a> or just look into <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">the Mozilla JavaScript documents</a> if you are interested in going deeper into this topic.</p>

<p className="it">En este ejemplo en particular de React puede que no seá más rápido que las operaciones DOM nativas estándar. Hay <a href="https://objectpartners.com/2015/11/19/comparing-react-js-performance-vs-native-dom/">varias </a> <a href="https://news.ycombinator.com/item?id=9638305">discusiones</a> sobre el rendimiento de esa biblioteca. A pesar de que lo recomendaría utilizar incluso para los pequeños juegos como este. Al menos que consigas conocer la tecnología más reciente es mejor en una manera divertida, interesante.</p>


<p className="p">In this particular example React may not be faster than standard native DOM operations. There are <a href="https://objectpartners.com/2015/11/19/comparing-react-js-performance-vs-native-dom/">various</a> <a href="https://news.ycombinator.com/item?id=9638305">discussions</a> about the performance of that library. Despite that I would recommend to use it even for small games like this. At least you to get know the newest technology better in a fun, interesting way.</p>

<p className="it">Muchas gracias a <a href="https://twitter.com/robjamesberry">Rob Berry</a> y <a href="https://twitter.com/sherbet_noin">Richard Nguyen</a> por guiarme al escribir este juego y el artículo.</p>


<p className="p">Big thanks to <a href="https://twitter.com/robjamesberry">Rob Berry</a> and <a href="https://twitter.com/sherbet_noin">Richard Nguyen</a> for mentoring me while writing this game and article.</p>

</div>

    
    

          </div>

          </div> 
</div> 
   
  
  </Layout>
  )