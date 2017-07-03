import Layout from '../components/layout'

export default () => (
  <Layout title='Reactweb'>
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



      <h3>Declarative</h3>
      <p className="it">React es un sencillo programa para crear interfaces de usuario interactivas. Diseñas vistas simples para cada estado de la aplicación, y React actualizará y renderizará de manera eficiente sólo los componentes adecuados cuando sus datos cambien.</p>


      <p className="p">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      <p className="it">Las vistas declarativas hacen que el código sea más predecible y fácil de depurar.</p>

      <p className="p">Declarative views make your code more predictable and easier to debug.</p>
    
      <h3>Component-Based</h3>
      <p className="it">Se construyen componentes encapsulados que gestionan su propio estado, y luego se componen para renderizar interfaces de usuario complejas.</p>


      <p className="p">Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>

      <p className="it">Desde la lógica el componente está escrito en JavaScript en lugar de plantillas, puede pasar fácilmente a través de datos enriquecidos en tu aplicación y mantener el estado del DOM.</p>


      <p className="p">Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the&nbsp;DOM.</p>
   

   
      <h3>Learn&nbsp;Once, Write&nbsp;Anywhere</h3>
      <p className="it">No hacemos suposiciones sobre el resto de tu tecnología de pila, por lo que podemos desarrollar nuevas funciones en React sin reescribir el código existente.</p>


      <p className="p">We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
      <p className="it">React También puede procesarse en el servidor mediante nodos y potencia las aplicaciones móviles utilizando <a href="https://facebook.github.io/react-native/">React Native</a> .</p>


      <p className="p">React can also render on the server using Node and power mobile apps using <a href="https://facebook.github.io/react-native/">React Native</a>.</p>
 

      <h3>A Simple Component</h3>
      <p className="it">Los componentes de React implementan un método <code>render()</code> que toma los datos de entrada y devuelve lo que se ve. En este ejemplo se utiliza una sintaxis XML, llamada JSX. A los datos de entrada que se pasan en el componente se puede acceder desde el metodo <code>render()</code> por vía de <code>this.props</code>. </p>


      <p className="p">
        React components implement a <code>render()</code> method that takes input data and
        returns what to display. This example uses an XML-like syntax called
        JSX. Input data that is passed into the component can be accessed by
        <code>render()</code> via <code>this.props</code>.
      </p>
      <p className="it"> <strong>JSX es opcional y no es necesario para utilizar React. </strong>Intentá renderizar clic en "JS Compilado" para ver el código JavaScript en bruto producido por el compilador JSX. </p>


      <p className="p">
        <strong>JSX is optional and not required to use React.</strong> Try
        clicking on "Compiled JS" to see the raw JavaScript code produced by
        the JSX compiler.
      </p>
      

<div className="image"><a></a><img src="/static/react001.jpg" width="100%" alt="Image"/></div>

    
      <h3>A Stateful Component</h3>
      <p className="it"> Además de tomar los datos de entrada (accede a través de <code>this.props</code>), un componente puede mantener los datos de estado internos (accede a través <code>this.state</code>). Cuando cambian los datos de estado de un componente, el markup dictado será actualizado por la re-invocación al metodo <code>render()</code>. </p>


      <p className="p">
        In addition to taking input data (accessed via <code>this.props</code>), a
        component can maintain internal state data (accessed via <code>this.state</code>).
        When a component's state data changes, the rendered markup will be
        updated by re-invoking <code>render()</code>.
      </p>
      <div className="image"><a></a><img src="/static/react002.jpg" width="100%" alt="Image"/></div>
      <h3>An Application</h3>
      <p className="it"> Mediante el uso de <code>props</code> y <code>state</code>, podemos armar una pequeña aplicación de Todo. En este ejemplo se utiliza <code>state</code> para rastrear la lista actual de artículos, así como el texto que el usuario ha introducido. A pesar de que los controladores de eventos parecen ser renderizados en linea, serán recogidos e implementados usando la delegación de eventos. </p>


      <p className="p">
        Using <code>props</code> and <code>state</code>, we can put together a small Todo application.
        This example uses <code>state</code> to track the current list of items as well as
        the text that the user has entered. Although event handlers appear to be
        rendered inline, they will be collected and implemented using event
        delegation.
      </p>
      <div className="image"><a></a><img src="/static/react003.jpg" width="100%" alt="Image"/></div>
    
      <h3>A Component Using External Plugins</h3>
      <p className="it"> React es flexible y proporciona ganchos que te permiten renderizar la interfaz con otras bibliotecas y frameworks. En este ejemplo se utiliza <strong>remarkable</strong>, una biblioteca de Markdown externa, para convertir el valor de la caja de texto en tiempo real. </p>


      <p className="p">
        React is flexible and provides hooks that allow you to interface with
        other libraries and frameworks. This example uses <strong>remarkable</strong>, an
        external Markdown library, to convert the textarea's value in real time.
      </p>

      <div className="image"><a></a><img src="/static/react004.jpg" width="100%" alt="Image"/></div>



</div>
</div>
  </Layout>
)