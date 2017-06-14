import Layout from '../components/layout'

export default () => (
  <Layout title='Chapter 3'>
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

    <h1>Chapter 3: React’s Design Under the Hood</h1>
<p className="it">En el último capítulo, describimos conceptos básicos de React. En este capítulo vamos a cubrir algunos de los temas con más detalle. El propósito de este capítulo es dar al lector una comprensión más profunda del interior de React con el fin de tener una opinión con más matices de donde encaja React en el desarrollo web moderno.</p>
<p className="p">In the last chapter, we described React’s core concepts. In this chapter we are going to cover some of those topics in more detail. The purpose of this chapter is to give the reader a deeper understanding of React’s internals in order to have a more nuance opinion of where React fits in modern web development.</p>
<p className="it">Como nota al margen, vamos a comparar la eficiencia de los algoritmos que utilizan la notación asintótica. Si no estás familiarizado con la notación asintótica, tomate unos minutos para ponerte al día viendo esta explicación del curso CS50 de Harvard: Asymtotic Notation Video¹⁴.</p>
<p className="p">As a side note, we are going to compare the efficiency of algorithms using asymptotic notation. If you are unfamiliar with asymptotic notation, take a few minutes to get up to speed by watching this explanation from Harvard’s CS50 course: Asymtotic Notation Video¹⁴.</p>
<p className="index">¹⁴https://www.youtube.com/watch?v=iOq5kSKqeR4</p>
<h2>Virtual DOM Diff Algorithm</h2>
<p className="it">Como se mencionó anteriormente, la implementación de enlace de datos de React implica una representación del DOM ivolucrada en una representación en la memoria: el DOM virtual. En cada cambio de estado, React dará lugar a una re-render de componentes que se basan en ese estado. Utiliza un algoritmo de diferencias para calcular el número mínimo de mutaciones del DOM necesarios para alcanzar el nuevo árbol DOM.</p>
<p className="p">As mentioned previously, React’s data binding implementation involves an in memory representation of the DOM: the Virtual DOM. On every state change, React will trigger a re-render of components that rely on that state. It uses a diff algorithm to compute the minimum number of DOM mutation necessary to achieve the new DOM tree.</p>
<p className="it">Este algoritmo es muy eficiente e ingenioso. No sólo hace que sea práctico para re-renderizarlo en cada cambio de estado, sino que también hace órdenes React de magnitud más rápido que cualquier otro sistema de enlace de datos. Aún así, es una abstracción no trivial que, por definición, tendrá fugas. Dicho esto, las fugas de abstracción del DOM virtual son relativamente menores, predecibles y manejables. De ninguna manera es el DOM virtual el fin de la historia de JavaScript en el cliente, sino que es el siguiente paso en su evolución.</p>
<p className="p">This algorithm is incredibly efficient and ingenious. It not only makes it practical to re-render on every state change, it also makes React orders of magnitude faster than any other data binding system. Still, it is a non-trivial abstraction which, by definition, will have leaks. That said, the Virtual DOM’s abstraction leaks are relatively minor, predictable and manageable. By no means is the Virtual DOM the end of history for client-side JavaScript, but it is the next tep in its evolution.</p>
<p className="it">En la superficie, lo que provocó una re-render que parecería ser una forma ineficiente para mantener la interfaz de usuario en sincronización con un modelo de datos. De hecho, esto no es un problema. JavaScript es bastante rápido en comparación con la manipulación DOM y <code>{`render()`}</code> tiende a ser una operación bastante barata. Además, la mutación del DOM es casi siempre el cuello de botella, no JavaScript. React optimizará esto a través de su algoritmo diff, así como otras técnicas que serán explicadas más adelante en este capítulo.</p>
<p className="p">On the surface, triggering a re-render would appear to be an inefficient way to keep the UI in sync with a data model. In fact, this is not a problem. JavaScript is pretty fast compared to DOM manipulation and <code>{`render()`}</code> tends to be a fairly cheap operation. In addition, mutating the DOM is almost always the performance bottleneck, not JavaScript. React will optimize this via its diff algorithm, as well as other techniques which will be explained later in this chapter.</p>
<p className="it">Es importante destacar que React no re-pintará toda la aplicación. Sólo llamará a <code>{`render()`}</code> en los componentes que se ven afectados por haber tenido un cambio de estado en particular y luego realizará el número mínimo de mutaciones del DOM para alcanzar el siguiente estado de la interfaz de usuario. En React los datos viajan siempre del componente de los padres a los componentes secundarios, por lo que es fácil de determinar qué partes de la interfaz de usuario deben ser actualizadas. Cada vez que cambia el estado de un componente, React dará lugar a una re-renderizado de ese componente y sus hijos. El flujo unidireccional de datos hace que sea posible aislar los cambios de interfaz de usuario a una sola rama de un árbol DOM.</p>
<p className="p">It is important to emphasize that React will not repaint the entire application. It will only call <code>{`render()`}</code> on the components that are affected by changed to a particular state change and then make the minimum number of DOM mutations to reach the next UI state. In React data always travels from parent component to child components, making it easy to determine which parts of the UI need to be updated. Whenever state changes in a component, React will trigger a re-render of that component and its children. Unidirectional data flow makes it possible to isolate UI changes to just one branch in a DOM tree.</p>
<p className="it">Al aislar los cambios en una sola rama del árbol DOM, podemos tomar ventaja de los algoritmos existentes para determinar la distancia mínima entre los árboles. La comparación de las estructuras de datos de árboles es uno de los problemas más estudiados y bien entendidos en la informática. Ahora React puede comparar el nuevo árbol DOM con el viejo árbol DOM en la memoria.</p>
<p className="p">By isolating changes to just one branch of the DOM tree, we can take advantage of existing algorithms for determining the minimum distance between trees. Comparing tree data structures is one of the most studied and well understood problems in computer science. Now React can compare the new DOM tree to the old DOM tree in memory.</p>
<p className="it">Dado el algoritmo¹⁵ más eficiente, la determinación del número mínimo de mutaciones entre dos árboles es un problema O(n3), donde n es el número de nodos. Con un pequeño número de nodos DOM, esto no sería un problema. Sin embargo, el número de operaciones se incrementará dramáticamente. Si tuviéramos que comparar dos árboles con 1.000 nodos cada uno, averiguar las operaciones mínimas para transformar una a la otra requeriría mil millones de operaciones. Esto no es sostenible.</p>
<p className="p">Given the most efficient algorithms¹⁵, determining the minimum number of mutations between two trees is a O(nˆ3) problem, where n is the number of nodes. With a small number of DOM nodes, this would not be a problem. However, the number of operations will increase dramatically. If we were to compare two trees with 1,000 nodes each, figuring out the minimum operations to transform one to the other would require one billion operations. This is not sustainable.</p>
<p className="p">¹⁵http://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf</p>
<p className="it">Podemos acelerar este algoritmo significativamente si hacemos algunas suposiciones acerca de los árboles DOM que estamos comparando. React se aplica a un conjunto de heurísticas que ayudan a mejorar drásticamente el rendimiento. El algoritmo DOM diff virtual supone lo siguiente:</p>
<p className="p">We can speed up this algorithm significantly if we make a few assumptions about the DOM trees we are comparing. React applies a set of heuristics helping to dramatically improve performance. The Virtual DOM diff algorithm makes the following assumptions:</p>
<ul>
<li className="it">Los componentes de la misma clase generarán árboles similares</li>
<li className="p">Components of the same class will generate similar trees</li>
<li className="it">Los componentes de una clase diferente generarán diferentes árboles</li>
<li className="p">Components of a different class will generate different trees</li>
<li className="it">Podes agregar keys únicas a los elementos que son estables a través de diferentes renders</li>
<li className="p">You can add unique keys to elements that are stable across different renders</li>
</ul>
<p className="it">Con estas heurísticas en su lugar, el algoritmo de React diff puede encontrar el número mínimo de mutaciones DOM en O(n). Esto es así porque en lugar de tratar de comparar todo el árbol, estas heurísticas ayudan al algoritmo de diferencias para reconciliar solo nivel por nivel de árboles.</p>
<p className="p">With these heuristics in place, React’s diff algorithm can find the minimum number of DOM mutations in O(n). That is because instead of trying to compare the whole tree, these heuristics help the diff algorithm to just reconcile trees level by level.</p>
<p className="it">El siguiente ejemplo se guía por como esto se vería en la práctica. Digamos que tenemos los siguientes componentes:</p>
<p className="p">The following example walks through what this would look like in practice. Say we have the following component:</p>
<div className="image"><a></a><img src="/static/cod008.jpg" width="100%" alt="Image"/></div>
<p className="it">Por encima, <code>{`PetOwner`}</code> o bien devuelve un <code>{`div`}</code> con un <code>{`span`}</code>, o devolverá un <code>{`div`}</code> con un <code>{`p`}</code>. Es importante reiterar que la función render no devuelve nodos DOM sino un objeto JavaScript que representa nodos DOM. Ese es el DOM virtual.</p>
<p className="p">Above, <code>{`PetOwner`}</code> will either return a <code>{`div`}</code> with a <code>{`span`}</code>, or it will return a <code>{`div`}</code> with a <code>{`p`}</code>. It is important to reiterate that the render function does not return DOM nodes but a JavaScript object that represents DOM nodes. That is the Virtual DOM.</p>
<p className="it">Vamos a suponer que en base a los cambios de estado, se producen las siguientes acciones:</p>
<p className="p">Let’s assume that based on state changes, the following actions will occur:</p>
<div className="ol">
<ol>
<p className="it">El componente <code>{`PetOwner`}</code> está montado, con <code>{`likesCats`}</code> igualando a <code>{`true`}</code>. En otras palabras, vamos a montar <code>{`<PetOwner likesCats="{true}/">.`}</code></p>
<p className="p">The <code>{`PetOwner`}</code> component is mounted, with <code>{`likesCats`}</code> equaling to <code>{`true`}</code>. In other words, we will  mount <code>{`<PetOwner likesCats="{true}/">.`}</code>.</p>
<p className="it">Luego, reemplazamos este componente con un componente similar, esta vez en lugar de <code>{`likesCats`}</code> será igual a <code>{`false`}</code>. En otras palabras, el nuevo componente será:<code>{`<PetOwner likesCats="{false}/">.`}</code></p>
<p className="p">Then, we replace this component with a similar component, instead this time <code>{`likesCats`}</code> will equal <code>{`false`}</code>. In other words, the new component will be: <code>{`<PetOwner likesCats="{false}/">.`}</code></p>
<p className="it">Por último, el componente se elimina por completo. Esto podría ser debido a un cambio en la ruta o algo por el estilo.</p>
<p className="p">Finally, the component will be completely removed. This could be due to a change in the route or something of that nature.</p>
</ol>
</div>
<p className="it">Sobre la base de las heurísticas descritas anteriormente, vamos a andar a través de las mutaciones del DOM que se producirán.</p>
<p className="p">Based on the heuristics described above, let’s walk through what DOM mutations will occur.</p>
<p className="it">En el paso 1, estamos añadiendo <code>{`PetOwner`}</code> por primera vez. Dado que no había nada allí antes, React sabrá simplemente agregar los nuevos nodos DOM. Así es lo que se verá ahora:</p>
<p className="p">On Step 1, we are adding <code>{`PetOwner`}</code> for the first time. Since there was nothing there before, React will know to simply add the new DOM nodes. Here is what is will look like now:</p>
<div className="image"><a></a><img src="/static/cod009.jpg" width="100%" alt="Image"/></div>
<p className="it">En el Paso 2, estamos reemplazando un componente de la clase <code>{`PetOwner`}</code> con otro componente de la misma clase exacta. Debido a que estos dos componentes son de la misma clase, es probable que sus árboles DOM van a ser muy similares. Por lo tanto, React mantendrá el árbol DOM anterior y comenzará a comparar estos árboles en un nivel cada vez. Así es como el siguiente árbol DOM debe verse:</p>
<p className="p">On Step 2, we are replacing a component of class <code>{`PetOwner`}</code> with another component of the exact same <code>{`class`}</code>. Because these two components are of the same class, chances are their DOM trees are going to be very similar. Therefore, React will keep the previous DOM tree and begin to compare these trees one level at a time. This is what the next DOM tree should look like:</p>
<div className="image"><a></a><img src="/static/cod010.jpg" width="100%" alt="Image"/></div>
<p className="it">Desde que React decidido mantener el árbol DOM anterior, comenzará a comparar el árbol DOM anterior con uno nuevo a partir de la parte superior. Ambos de estos árboles DOM comienzan con un <code>{`div`}</code>. Ya que ambos son un <code>{`div`}</code> de React que seguirá manteniendo este árbol DOM. Si los elementos DOM eran diferentes, React eliminará por completo el árbol DOM anterior y lo sustituirá por una nuevo. Es probable que si estamos reemplazando un tipo de elemento DOM sin un elemento DOM de un tipo diferente, el resto de la estructura va a parecer radicalmente diferente. Por lo tanto, sería ineficiente mutar el árbol DOM actual. Sería más eficiente eliminarlo por completo y empezar de cero.</p>
<p className="p">Since React decided to keep the prior DOM tree, it will begin to compare the previous DOM tree with the new one starting at the very top. Both of these DOM trees begin with a <code>{`div`}</code>. Since they are both a <code>{`div`}</code> React will continue to keep this DOM tree. If the DOM elements were different, React would completely remove the previous DOM tree and replace it with a new one. Chances are if we are replacing a type of DOM element without a DOM element of a different type, the rest of the structure is going to look radically different. Therefore, it would be inefficient to mutate the current DOM tree. It would be more efficient to completely remove it and start from scratch.</p>

<p className="it">Ya que ambos son un <code>{`div`}</code>, React mantendrá el <code>{`div`}</code> anterior, pero se actualizará su class de <code>{`likes-cats`}</code> a <code>{`likes-dogs`}</code>. A continuación, el algoritmo diff comparará los árboles DOM en un nivel inferior. En ese nivel, estamos reemplazando <code>{`Cats Rule!`}</code> con <code>{`Dogs Rule!`}</code>. Ya que la sustitución de un lapso con un tipo totalmente diferente de elemento DOM, <code>{`p`}</code>, React quitará por completo el lapso anterior y lo sustituirá por el nuevo <code>{`p`}</code>. No te molestes en tratar de actualizar el elemento DOM antes, se eliminará sólo por completo.</p>
<p className="p">Since they are both a div, React will keep the previous div, but will update its class from likes-cats to likes-dogs. Then, the diff algorithm will compare the DOM trees one level down. On that level, we are replacing Cats Rule! with Dogs Rule!. Since we a replacing span with a totally different kind of DOM element, a <code>{`p`}</code>, React will completely remove the previous span and replace it with the new <code>{`p`}</code>. It will not bother trying to update the prior DOM element, it will just remove it entirely.</p>
<p className="it">Finalmente, en el paso 3, el componente <code>{`PetOwner`}</code> ya no existe en la nueva representación DOM virtual yReact simplemente eliminará todo el árbol DOM <code>{`PetOwner`}</code>.</p>
<p className="p">Finally, on Step 3, since the <code>{`PetOwner`}</code> component no longer exists in the new Virtual DOM representation, React will simply remove the entire <code>{`PetOwner`}</code> DOM tree.</p>
<p className="it">Así es como las operaciones se verían a simple vista:</p>
<p className="p">Here is what the operations would look at a glance:</p>
<div>
<p className="p">Mount <code>{`<PetOwner likesCats={true} />`}</code></p>
<p className="p">Create node: <code>{`<div className="likes-cats"><span>Cats Rule!</span></div>`}</code></p>
<p className="p"><code>{`<PetOwner likesCats={true} />`}</code> to <code>{`<PetOwner likesCats={false} />`}</code></p>
<p className="p">Replace attribute <code>{`class="likes-cats"`}</code> to <code>{`class="likes-dogs"`}</code></p>
<p className="p">Replace node <code>{`<span>Cats Rule!</span>`}</code> to <code>{`<p>Dogs Rule!</p>`}</code></p>
<p className="p">Unmount <code>{`<PetOwner likesCats={false} />`}</code></p>
<p className="p">Remove node <code>{`<div className="likes-dogs"></div>`}</code></p>
</div>
<h2>Sibling Elements</h2>
<p className="it">Hasta ahora, hemos mencionado las dos primeras heurísticas. La heurística última entra en juego si estamos tratando de insertar un elemento en el medio de una lista de otros elementos.</p>
<p className="p">So far, we have mentioned the first two heuristics. The final heuristic comes into play if we are trying to insert an element in the middle of a list of other elements.</p>
<p className="it">Consideremos el siguiente ejemplo. Estamos renderizando una lista desordenada con un elemento de la lista.</p>
<p className="p">Consider the following example. We are rendering an unordered list with one list item.</p>
<div className="image"><a></a><img src="/static/cod011.jpg" width="100%" alt="Image"/></div>
<p className="it">Digamos que queremos añadir otro elemento de la lista hasta el final. Las operaciones se verían así:</p>
<p className="p">Let’s say we want to add another list item to the end. This is what the operations would look like:</p>
<p className="p"><code>{`<ul> <li>First</li> </ul>`}</code> to <code>{`<ul> <li>First</li> <li>Second</li> </ul>`}</code></p>
<p className="p">– Append node <code>{`<li>Second</li>`}</code></p>
<p className="it">La adición de un elemento al final de la lista es bastante sencillo. Sin embargo, es más difícil si queríamos añadir el <code>{`<li>`}</code> al frente de la lista:</p>
<p className="p">Adding an element to the end of the list is pretty straight forward. However, it is more difficult if we wanted to add the <code>{`<li>`}</code> to the front of the list:</p>
<p className="p"><code>{`<ul><li>First</li></ul>`}</code> to <code>{`<ul><li>Second</li><li>First</li></ul>`}</code></p>
<p className="p">– Take <code>{`<li>First</li>`}</code> and change it to <code>{`<li>Second</li>`}</code></p>
<p className="p">– Append node <code>{`<li>First</li>`}</code></p>
<p className="it">Sin un identificador único para cada elemento en una lista el número de operaciones necesarias para modificar esta lista aumenta de manera exponencial. De hecho, el algoritmo más rápido para la inserción, sustitución, o eliminación de un solo elemento (Levenshtein distance¹⁶) en el que mejor puede realizar esta operación en O(n2). Incluso con Levenshtein, esto no ayuda a encontrar cuando un nodo se ha movido.</p>
<p className="p">Without a unique identifier for each element in a list the number of operations necessary to modify this list increases exponentially. In fact, the fastest algorithm for inserting, substituting, or removing a single element (Levenshtein distance¹⁶) can at best perform this operation in O(nˆ2). Even with Levenshtein, this does not help us find when a node has moved.</p>
<p className="index">¹⁶https://en.wikipedia.org/wiki/Levenshtein_distance</p>
<p className="it">Los elementos relacionados son el área principal donde React fuga datos de abstracción vinculante. En este caso particular, React proporciona un atributo opcional para hacer de este problema un O(n). En los casos donde la identidad y el estado deben mantenerse cuando todo vuelve a renderizarse, React te permite añadir un atributo key para cada elemento. Estas keys, le dan a React la capacidad de reordenar o destruir rápidamente los elementos relacionados.</p>
<p className="p">Sibling elements are the main area where React’s data binding abstraction leaks. In this particular case, React provides an optional attribute to make this a O(n) problem. In cases where identity and state must be maintained across re-renders, React allows you to add a key attribute to each element. With these keys, it gives React the ability to quickly reorder or destroy sibling elements.</p>
<div className="image"><a></a><img src="/static/cod010.jpg" width="100%" alt="Image"/></div>
<p className="it">Estas keys no tienen que ser únicas en todo el sistema. Sólo tienen que ser únicas dentro del alcance de una lista en particular. Se podría volver a utilizar la key, siempre y cuando no se encuentra en la misma lista.</p>
<p className="p">These keys do not need to be unique across the whole system. They only need to be unique within the scope of a particular list. You could reuse the key as long as it is not in the same list.</p>
<p className="it">Además, la key siempre debe ser suministrada por el componente de los padres y no dentro de un mismo componente de hermanos. Aquí hay un ejemplo:</p>
<p className="p">Also, the key should always be supplied by the parent component and not within a sibling component itself. Here is an example:</p>
<div className="image"><a></a><img src="/static/cod013.jpg" width="100%" alt="Image"/></div>
<div className="image"><a></a><img src="/static/cod014.jpg" width="100%" alt="Image"/></div>

<p className="it">Junto con la actualización de una lista de elementos hermanos, la abstracción de enlace de datos de React se escapará de una manera algo no obvia. Dado que render es sólo una función JavaScript que devuelve una representación virtual del DOM, no puede devolver elementos de hermanos independientes sin un elemento parental que los envuelva. React devolverá un error si no devuelve un árbol DOM virtual con sólo un nodo padre.</p>
<p className="p">Along with updating a list of sibling elements, React’s data binding abstraction will leak in a somewhat non-obvious way. Since render is just a JavaScript function that returns a virtual representation of the DOM, it cannot return stand-alone sibling elements without a parent element wrapping them. React will return an error if you do not return a virtual DOM tree with only one parent node.</p>
<p className="it">Aquí hay un ejemplo:</p>
<p className="p">Here is an example:</p>
<div className="image"><a></a><img src="/static/cod015.jpg" width="100%" alt="Image"/></div>
<div className="image"><a></a><img src="/static/cod016.jpg" width="100%" alt="Image"/></div>
<p className="it">Hay dos razones por las cuales el primer ejemplo no funcionará. En primer lugar, ya que renderiza simplemente una función regular de JavaScript, sólo puede haber un valor de retorno. En segundo lugar, para que el algoritmo de diferencias para el trabajo, se requiere una estructura de árbol. Sin envolver los elementos <code>{`p`}</code> dentro de algunos padres, estaríamos tratando de devolver dos valores, así como el retorno de una estructura que no es un árbol.</p>
<p className="p">There are two reasons why the first example will not work. First, since render is just a regular JavaScript function, there can only be one return value. Second, in order for the diff algorithm to work, it requires a tree structure. Without wrapping the <code>{`p`}</code> elements within some parent, we would be trying to return two values, as well as returning a structure that is not a tree.</p>
<h2>Event Delegation and Autobinding</h2>
<p className="it">La adición de controladores de eventos a nodos DOM es notoriamente lenta. Cuando React desencadena un re-procesamiento de un componente y sus hijos cada vez que su estado interno ha cambiado, añadir y eliminar controladores de eventos puede tener un enorme efecto negativo en el rendimiento. React maneja esto mediante la implementación de una técnica llamada “delegación de eventos” que se llama su “Sistema de eventos sintético”.</p>
<p className="p">Adding event handlers to DOM nodes is notoriously slow. Since React triggers a re-render of a component and its children whenever its internal state has changed, adding and removing event handlers can have a huge negative effect on performance. React handles this by implementing a technique called “event delegation” which it calls its “Synthetic Event System”.</p>
<p className="it">En lugar de agregar manejadores de eventos directamente a un nodo DOM, React asigna sólo un detector de eventos a la raíz del documento. Cuando se desencadena un evento, el evento no controlado burbujea hasta el DOM hasta que alcanza el oyente de evento único de React. En lugar de agregar oyentes de eventos al DOM, React mantiene un mapa hash de todos los oyentes de eventos. Una vez que el evento llega al sistema de eventos de React, busca el nodo DOM al que se está invocando el evento y actúa en consecuencia.</p>
<p className="p">Instead of adding event handlers directly to a DOM node, React attaches only one event listener on the root of the document. When an event is fired, the unhandled event bubbles up the DOM until it reaches React’s sole event listener. Instead of adding event listeners to the DOM, React keeps a hash map off all the event listeners. Once the event reaches React’s event system, it looks up the DOM node, which the event is being called upon and acts accordingly.</p>
<p className="it">Lo mejor de todo es que el sistema de eventos de React es compatible con W3C, lo que significa que funcionará en Internet Explorer 8. También significa que tiene la misma interfaz que los eventos nativos del navegador, como <code>{`stopProgation()`}</code> y <code>{`preventDefault()`}</code>. Debes tener esto presente si envías un formulario:</p>
<p className="p">Best of all, React’s event system is W3C compliant, meaning that it will work on Internet Explorer 8. It also means you have the same interface as the browser’s native events, such as <code>{`stopProgation()`}</code> and <code>{`preventDefault()`}</code>. You should keep this in mind if you are submitting a form:</p>
<div className="image"><a></a><img src="/static/cod017.jpg" width="100%" alt="Image"/></div>
<p className="it">Estamos pasando un método callback llamado <code>{`handleSubmit`}</code> al formulario. Normalmente, cuando se crea un callback, es necesario vincular el método a su instancia para que el valor de esto sea correcto. React automaticamente lo une para vos almacenando en caché el método. Así es más eficiente la CPU y la memoria. </p>
<p className="p">We are passing a callback method called <code>{`handleSubmit`}</code> to the form. Usually when creating a callback, you need to bind the method to its instance so that the value of this is correct. React autobinds that for you by caching the method. So it’s more CPU and memory efficient.</p>
<h2>Rendering</h2>
<p className="it">Siempre que se llama <code>{`setState`}</code> en un componente, React considerará que el nodo del árbol estará sucio. React a continuación, desencadena un re-renderizado de todos los nodos sucios y sus hijos. Durante un bucle de eventos, React procesará por lotes todas estas modificaciones en el DOM de modo que sólo se toca una vez.</p>
<p className="p">Whenever <code>{`setState`}</code> is called in a component, React will consider that tree node to be dirty. React will then trigger a re-render off all the dirty nodes and their children. During an event loop, React will batch all these modifications to the DOM so that it’s only touched once.</p>
<p className="it">Aún así, el hecho de que React desencadena un re-renderizado de los niños de un componente, aunque no necesita ser actualizado, es una fuga en la abstracción del DOM virtual. En general, esto no es un problema de rendimiento ya que el mayor cuello de botella estará actualizando el DOM.</p>
<p className="p">Still, the fact that React triggers a re-render of a component’s children, even if it doesn’t need to be updated, is a leak in the Virtual DOM abstraction. Generally, this is not a performance problem since the biggest performance bottleneck will be updating the DOM.</p>
<p className="it">Si necesitas obtener aún más mejoras en el rendimiento, hay una forma de decirle a React que no desencadene una re-renderizado. React proporciona ganchos en el ciclo de vida de los componentes, y uno de esos métodos se llama <code>{`shouldComponentUpdate`}</code>.</p>
<p className="p">If you need to get even more performance improvements, there is a way to tell React not to trigger a re-render. React provides hooks into a components lifecycle, and one of those methods is called <code>{`shouldComponentUpdate`}</code>.</p>
<div className="image"><a></a><img src="/static/cod018.jpg" width="100%" alt="Image"/></div>
<p className="it">Con <code>{`shouldComponentUpdate`}</code> se puede decir a React si un componente particular necesita ser re-renderedizado o no. Por lo general esto no es necesario, pero si necesitas optimizar el rendimiento, indicar a React que los nodos no necesitan ser re-renderizados puede dar lugar a mejoras en el rendimiento.</p>
<p className="p">With <code>{`shouldComponentUpdate`}</code> you can tell React whether a particular component needs to be re-rendered or not. Generally this is not necessary, but if you need to optimize performance, telling React which nodes do not need to be re-rendered can result in performance improvements.</p>
</div>
</div>
  </Layout>
)
