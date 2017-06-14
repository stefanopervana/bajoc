import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='diferencias'>
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

             
<h1>React.createClass versus extends React.Component</h1>
<p className="it">Dos maneras de hacer la misma cosa. Casi. React tradicionalmente proporcionó el método <code>React.createClass</code> para crear clases de componentes, y lanzó una pequeña actualización de azúcar sintactica para permitir un mejor uso con módulos ES6 a travez de <code>extends React.Component</code>, que amplía la clase <code>Component</code> en lugar de llamar a <code>createClass</code>.</p>

<p className="p">Two ways to do the same thing. Almost. React traditionally provided the <code>React.createClass</code> method to create component classes, and released a small syntax sugar update to allow for better use with ES6 modules by <code>extends React.Component</code>, which extends the <code>Component</code> class instead of calling <code>createClass</code>.</p>

<p className="it">Estas diferencias son sutiles en algunos lugares, pero tienen bastantes diferencias interesantes que vale la pena explorar, lo que te permitirá tomar la mejor decisión sobre lo que es mejor para vos.</p>

<p className="p">These differences are subtle in places, but have quite a few interesting differences worth exploring, which will allow you to make the best decision for which is best for you.</p>
<h3 id="syntax-differences">
      <a href="#syntax-differences" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span></a>
        Syntax differences
      
    </h3>
<p className="it">En primer lugar, vamos a explorar las diferencias de sintaxis examinando dos ejemplos de código y tomando nota de ellos.</p>

<p className="p">First, let’s explore the syntax differences by looking at two code examples and annotating them.</p>
<h5 id="reactcreateclass">
      <a href="#reactcreateclass" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span>
        React.createClass
      </a>
    </h5>
<p className="it">Aquí tenemos una <code>const</code> con una clase React asignada, con la importante función <code>render</code> después de completar una definición típica de componente base.</p>

<p className="p">Here we have a <code>const</code> with a React class assigned, with the important <code>render</code> function following on to complete a typical base component definition.</p>
<div className="image"><a></a><img src="/static/es6001.jpg" width="100%" alt="Image"/></div>
<h5 id="reactcomponent">
      <a href="#reactcomponent" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span>
        React.Component
      </a>
    </h5>
<p className="it">Tomemos la anterior definición de <code>React.createClass</code> y convirtamosla para utilizar una clase ES6.</p>

<p className="p">Let’s take the above <code>React.createClass</code> definition and convert it to use an ES6 class.</p>
<div className="image"><a></a><img src="/static/es6002.jpg" width="100%" alt="Image"/></div>
<p className="it">Desde una perspectiva de JavaScript ahora estamos utilizando clases ES6, que normalmente se utilizarían con algo como Babel para compilar el ES6 a ES5 a trabajar en otros navegadores. Con este cambio, se introduce el <code>constructor</code>, donde tenemos que llamar a <code>super()</code> para pasar los props a <code>React.Component</code>.</p>

<p className="p">From a JavaScript perspective we’re now using ES6 classes, typically this would be used with something like Babel to compile the ES6 to ES5 to work in other browsers. With this change, we introduce the <code>constructor</code>, where we need to call <code>super()</code> to pass the props to <code>React.Component</code>.</p>

<p className="it">Para los cambios de React, ahora creamos una <code>class</code> llamada "Contacts" y <code>extend</code> desde <code>React.Component</code> en lugar de acceder directamente a <code>React.createClass</code>, que usa menos React boilerplate y más JavaScript. Este es un cambio importante para anotar los cambios adicionales que trae este swap de sintaxis.</p>

<p className="p">For the React changes, we now create a <code>class</code> called “Contacts” and <code>extend</code> from <code>React.Component</code> instead of accessing <code>React.createClass</code> directly, which uses less React boilerplate and more JavaScript. This is an important change to note further changes this syntax swap brings.</p>
<h3 id="proptypes-and-getdefaultprops">
      <a href="#proptypes-and-getdefaultprops" class="linkjuice"></a>propTypes and getDefaultProps
  </h3>
  <p className="it">Hay cambios importantes en la forma en que utilizamos y declaramos props por defecto, sus tipos y estados iniciales de configuración, vamos a echar un vistazo.</p>

  <p className="p">There are important changes in how we use and declare default props, their types and setting initial states, let’s take a look.</p>


<h5 id="reactcomponent-1">
      <a href="#reactcomponent-1" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span></a>
        React.createClass
      
    </h5>

<p className="it">En la versión <code>React.createClass</code>, la propiedad <code>propTypes</code> es un objeto en el que se puede declarar el tipo para cada prop. La propiedad <code>getDefaultProps</code> es una función que devuelve un objeto para crear props iniciales.</p>

<p className="p">In the <code>React.createClass</code> version, the <code>propTypes</code> property is an Object in which we can declare the type for each prop. The <code>getDefaultProps</code> property is a function that returns an Object to create initial props.</p>
<div className="image"><a></a><img src="/static/es6003.jpg" width="100%" alt="Image"/></div>
<h5 id="reactcomponent-1">
      <a href="#reactcomponent-1" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span>
        React.Component
      </a>
    </h5>
<p className="it">Esto utiliza <code>propTypes</code> como una propiedad real en la clase <code>Contacts</code> en lugar de una propiedad como parte de la definición del objeto <code>createClass</code>. Creo que es más agradable la sintaxis para crear propiedades de clase por lo que es mucho más claro cuáles son las API de React frente a su propio objeto en la definición.</p>

<p className="p">This uses <code>propTypes</code> as a property on the actual <code>Contacts</code> class instead of a property as part of the <code>createClass</code> definition Object. I think it’s nicer syntax to create class properties so it’s much clearer what are React APIs versus your own on the definition Object.</p>
<p className="it">La <code>getDefaultProps</code> ha cambiado ahora a solo una propiedad de objeto en la clase llamada <code>defaultProps</code>, puesto que ya no es una función de “obtener”, es sólo un objeto. Me gusta esta sintaxis, ya que evita repetirse en React, tal como en JavaScript plano.</p>

<p className="p">The <code>getDefaultProps</code> has now changed to just an Object property on the class called <code>defaultProps</code>, as it’s no longer a “get” function, it’s just an Object. I like this syntax as it avoids more React boilerplate, just plain JavaScript.</p>
<div className="image"><a></a><img src="/static/es6004.jpg" width="100%" alt="Image"/></div>

<h3 id="state-differences">
      <a href="#state-differences" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span>
        State differences
      </a>
    </h3>
<p className="it">El estado es un cambio interesante, ahora estamos usando constructores la implementación de cambios de estados iniciales.</p>

<p className="p">State is an interesting change, now we’re using constructors the implementation of initial states changes.</p>
<h5 id="reactcreateclass-2">
      <a href="#reactcreateclass-2" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span>
        React.createClass
      </a>
    </h5>
<p className="it">Tenemos una función <code>getInitialState</code>, que simplemente devuelve un objeto de estados iniciales.</p>

<p className="p">We have a <code>getInitialState</code> function, which simply returns an Object of initial states.</p>
<div className="image"><a></a><img src="/static/es6005.jpg" width="100%" alt="Image"/></div>
<h5 id="reactcomponent-2">
      <a href="#reactcomponent-2" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span>
        React.Component
      </a>
    </h5>
<p className="it">La función <code> getInitialState </code> ha fallecido y ahora declaramos todo el estado como una propiedad de inicialización simple en el <code>constructor</code>, que creo que es mucho más JavaScript y menos "API".</p>

<p className="p">The <code>getInitialState</code> function is deceased, and now we declare all state as a simple initialisation property in the <code>constructor</code>, which I think is much more JavaScript-like and less “API” driven.</p>
<div className="image"><a></a><img src="/static/es6006.jpg" width="100%" alt="Image"/></div>
<h3 id="this-differences">
      <a href="#this-differences" class="linkjuice"></a>
        "this" differences
      
    </h3>
<p className="it">El uso de <code>React.createClass</code> vinculará automáticamente los valores <code>this</code> correctamente para nosotros, pero los cambios al usar las clases ES6 afectan esto.</p>

<p className="p">Using <code>React.createClass</code> will automatically bind <code>this</code> values correctly for us, but changes when using ES6 classes affect this.</p>
<h5 id="this-differences">
      <a href="#this-differences" class="linkjuice"></a>
        React.createClass
      
    </h5>

   <p className="it">Tené en cuenta la declaración <code>onClick</code> con <code>this.handleClick</code> enlazada. Cuando se llama a este método React aplicará a <code>handleClick</ code> el contexto de ejecución correcto.</p>

   <p className="p"> Note the <code>onClick</code> declaration with <code>this.handleClick</code> bound. When this method gets called React will apply the right execution context to <code>handleClick</code>.</p>
<div className="image"><a></a><img src="/static/es6007.jpg" width="100%" alt="Image"/></div>
      <h5 id="reactcreateclass-4">
      <a href="#reactcreateclass-4" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span>
        React.Component
      </a>
    </h5>
<p className="it">Con las clases ES6 esto es ligeramente diferente, las propiedades de la clase no se unen de forma automática a la instancia React clase.</p>

<p className="p">With ES6 classes this is slightly different, properties of the class do not automatically bind to the React class instance.</p>
<div className="image"><a></a><img src="/static/es6008.jpg" width="100%" alt="Image"/></div>
<p className="it">Hay algunas formas en las que se pudo enlazar el contexto correcto, así es como podríamos unirlo en línea:</p>

<p className="p">There are a few ways we could bind the right context, here’s how we could bind inline:</p>
<div className="image"><a></a><img src="/static/es6009.jpg" width="100%" alt="Image"/></div>
<p className="it">Alternativamente podríamos cambiar el contexto de <code>this.handleClick</code>dentro del constructor para evitar repeticiones en línea, que puede ser un enfoque mejor si se mueve a esta sintaxis para evitar tocar JSX en absoluto:</p>

<p className="p">Alternatively we could change the context of <code>this.handleClick</code> inside the constructor to avoid inline repetition, which may be a better approach if moving to this syntax to avoid touching JSX at all:</p>
<div className="image"><a></a><img src="/static/es6010.jpg" width="100%" alt="Image"/></div>
<h3 id="mixins">
      <a href="#mixins" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span>
        Mixins
      </a>
    </h3>
<p className="it">Ya no se admiten Mixins React cuando se utilizan componentes React escritos en ES6.</p>

<p className="p">React mixins are no longer supported when using React components written in ES6.</p>
<h5 id="reactcreateclass-4">
      <a href="#reactcreateclass-4" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span>
        React.createClass
      </a>
    </h5>
<p className="it">Con <code>React.createClass</code> podemos agregar mixins a componentes usando una propiedad <code>mixins</code> que toma una array de mixins disponibles. A continuación, se amplía la clase de componentes</p>

<p className="p">With <code>React.createClass</code> we can add mixins to components using a <code>mixins</code> property which takes an Array of available mixins. These then extend the component class.</p>
<div className="image"><a></a><img src="/static/es6011.jpg" width="100%" alt="Image"/></div>
<h5 id="reactcomponent-4">
      <a href="#reactcomponent-4" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span>
        React.Component
      </a>
    </h5>
<p className="it">En las clases ES6 no se admiten Mixins.</p>

<p className="p">Mixins aren’t supported in ES6 classes.</p>
<h3 id="recommendations">
      <a href="#recommendations" class="linkjuice">
        <span class="linkjuice-icon">
          <i class="linkjuice__icon"></i>
        </span>
        Recommendations
      </a>
    </h3>
<p className="it">Facebook sugiere la futura eliminación total de <code>React.createClass</code> a favor de las clases ES6 - (<a href="https://facebook.github.io/react/blog/2015/03/10/react-v0.13.html">source</a>). Por ahora, utilizan lo que tiene sentido, los dos son simplemente sintaxis con diferentes semánticas que hacen lo mismo - las dos son clases!</p>

<p className="p">Facebook does suggest the future removal of <code>React.createClass</code> completely in favour of ES6 classes - (<a href="https://facebook.github.io/react/blog/2015/03/10/react-v0.13.html">source</a>). For now, use what makes sense, they’re both just syntax with different semantics that do the same thing - they’re both classes!</p>
</div> 
</div> 
  </Layout>
  )