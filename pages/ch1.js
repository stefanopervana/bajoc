import Layout from '../components/layout'

export default () => (
  <Layout title='Chapter 1'>
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

    <h1>Chapter 1: Introduction</h1>
<p className="it">React está ganando mucha atención en la comunidad JavaScript. Hoy en día existen potentes aplicaciones con React como Netflix y Facebook. En conjunto, estas dos empresas ocupan más del 30% de todo el tráfico de Internet de Estados Unidos. El nivel de adopción de React es increíble, especialmente considerando cuánto tiempo hace que está disponible en código abierto. Algunos consideran a React la biblioteca JavaScript preferida para la construcción de aplicaciones web dinámicas del lado del cliente. Su popularidad influyó en la dirección de otros proyectos de JavaScript, que ahora están comenzando a incorporar algunas de las ideas y decisiones de diseño de React.</p>

<p className="p">React is gaining a lot of attention in the JavaScript community. Today, React powers applications such as Netflix and Facebook. Combined, these two companies take up over 30% of all US internet traffic. The level of React’s adoption is amazing, especially how recently is has been open sourced. Some consider React the prefered JavaScript library for building dynamic client-side web applications. Its popularity influenced the direction of other JavaScript projects, which are now starting to incorporate some of React’s ideas and design decisions.</p>

<p className="it">Su éxito se debe en parte a su API simple, que hace que sea fácil de poner en marcha. Es simple, fácil de usar, y tiene la velocidad del rayo. React como una biblioteca también es eficaz en otros entornos fuera del DOM. Las implementaciones de React ahora existen en el desarrollo de aplicaciones nativas con React Native² para Canvas HTML a través de React Canvas³, e incluso en la terminal a través React Blessed⁴. También podes procesar React en el servidor con React DOM Server⁵.</p>

<p className="p">Its success is partly due to its simple API, which made it easy to get up and running. It is simple, easy to use, and lightning fast. React as a library is also effective in other environments outside of the DOM. Implementations of React now exist in native application development with React Native², for HTML canvas via React Canvas³, and even in the terminal via React Blessed⁴. You can also render React on the server with React DOM Server⁵.</p>
<p className="index">²https://facebook.github.io/react-native/</p>

<p className="index">³https://github.com/Flipboard/react-canvas</p>

<p className="index">⁴https://github.com/Yomguithereal/react-blessed</p>

<p className="index">⁵https://facebook.github.io/react/docs/top-level-api.html#reactdomserver</p>

<p className="it">Los desarrolladores con conocimiento íntimo de React son altamente demandados. A partir de la redacción de este libro, el salario promedio de un desarrollador React de San Francisco es de $ 153,000⁶. Muchas empresas están haciendo grandes apuestas en React. Por lo tanto, pasar el tiempo para aprender React ahora pagará dividendos en el futuro. Al leer este libro, habrán tenido un muy buen comienzo!</p>

<p className="p">Developers with intimate knowledge of React are in very high demand. As of the writing of this book, the average salary for a React developer in San Francisco is $153,000⁶. Many companies are making huge bets on React. Therefore, spending the time to learn React now will pay dividends in the future. By reading this book, you are off to a very good start!</p>

<p className="index">⁶http://www.indeed.com/salary?q1=React+Js+Front+End+Engineeryyyl1=San+Francisco%2C+CA</p>

<h2>Why This Book Was Written</h2>

<p className="it">Los desarrolladores que utilizan React rara vez entienden exactamente cómo funciona bajo el capó. En cierto modo, esto se debe a lo bien diseñado que esta React cuando se compara con otros proyectos. No es necesario entender cómo trabaja React con el fin de conseguir una aplicación web no trivial en funcionamiento. Podes construir aplicaciones web grandes con eficacia sin tener que saber cómo trabaja React bajo el capó. Con React, la falta de comprensión de su funcionamiento interno no es un tapón de la demostración.</p>

<p className="p">Developers using React rarely understand exactly how it works under the hood. In some ways, this is due to how well designed React is when compared to other projects. You do not need to understand how React works in order to get a non-trivial web application up and running. You can build large web applications effectively without ever having to know how React works under the hood. With React, lack of understanding of its internals is not a show stopper.</p>

<p className="it">Sin embargo, internamente React es fascinante y merece aprenderse. La manera de pensar de React es diferente de lo que estamos acostumbrados en otros frameworks de JavaScript. React introdujo ideas de juegos y versiones tempranas de Windows a los DOM, junto con algunas de sus propias ideas. Estos conceptos cambiaron la forma en que pensamos acerca de cómo construir aplicaciones web escalables y eficientes.</p>

<p className="p">Still, the internals of React are fascinating and worth learning. React’s way of thinking is different from what we are used to in other JavaScript frameworks. React introduced ideas from gaming and early versions of Windows to the DOM, along with some of their own ideas. These concepts changed the way we think about how to build scalable and performant web applications.</p>

<h2>What This Book Is About</h2>

<p className="it">Este libro es una introducción a React y también se sumerge más profundamente en las ideas detrás de React. Hay muchas excelentes introducciones a React que vale la pena analizar, pero por lo general, son de carácter profesional. No hay nada malo en ello, pero lo que se necesita es un recurso que ponga a React en contexto con otros frameworks / bibliotecas de JavaScript. En lugar de carga-culting en lo que es popular, el objetivo es mostrar al lector cómo React los trabajos bajo el capó, así como ir sobre cómo usarlo. La idea es explicar cómo React los trabajos y cómo se integra en el desarrollo web moderno, en lugar de asumir que el lector sabe por qué es grande. Este libro va a explicar lo que React hace bien, así como señalar donde está la falla de la biblioteca y cómo solucionarlo. Además, vamos a ir sobre qué React es ideal para trabajar con bibliotecas de código de legado y de terceros existentes, tales como los plugins jQuery. Al final de este libro, el lector debe entender completamente de React de arquitectura y filosofía de diseño de decisiones. Al final de este libro, el lector estará bien en su manera de ser capaz de construir aplicaciones del mundo real con React.</p>

<p className="p">This book is an introduction to React, but also dives much deeper into the ideas behind React. There are many excellent introductions to React which are worth looking into, but by and large, they are vocational in nature. There is nothing wrong with that, but what is needed is a resource that puts React in context with other JavaScript frameworks/libraries. Rather than cargo-culting on what is popular, the goal is to show the reader how React works under the hood, as well as go over how to use it. The idea is to explain how React works and how it fits into modern web development, instead of assuming the reader knows why it’s great. This book will explain what React does well, as well as point out where the library fails and how to fix it. In addition, we will be going over why React is great for working with existing legacy code and third-party libraries such as jQuery plugins. By the end of this book, the reader should fully understand React’s architectural philosophy and design decisions. At the end of this book, the reader will be well on their way to being able to build real world applications with react.</p>

<p className="it">Para lograr esto, el libro será una mezcla de explicaciones y un ejercicio práctico. En lugar de construir una aplicación típica de Todo, el libro le guiará al lector a través de cómo construir un simple videojuego de Star Trek.</p>

<p className="p">To achieve this, the book will be a mixture of explanations and a practical exercise. Instead of building a typical Todo app, the book will walk the reader through how to build a simple Star Trek video game.</p>

<h2>What This Book Is Not About</h2>

<p className="it">Si bien pensado para principiantes, este libro no es una introducción a JavaScript. No es necesario ser un experto, pero el lector debe ser un poco familiarizado con el idioma. ES2015 está ganando cada adopción y funciona muy bien con React pero no vamos a cubrirlo tampoco en este libro. Vamos a utilizar ECMAScript 5 para la mayor parte del libro, pero después de leer este libro, el lector debe aprender más sobre ES2015 con React. Este libro no es acerca de las bibliotecas relacionada, Flux, Relay, o Falcor. Esas bibliotecas merecen su propio libro. Flux en particular, está cambiando constantemente de manera que cuando un libro está escrito sobre el tema, lo más probable es que ya obsoleto.</p>

<p className="p">While intended for beginners, this book is not an introduction to JavaScript. You do not need to be an expert, but the reader should be somewhat familiar with the language. ES2015 is gaining more adoption and works really well with React but we will not cover that in this book either. We are going to use ECMAScript 5 for the majority of the book, but after reading this book the reader should learn more about ES2015 with React. Also, this book is not about related libraries such as Flux, Relay, or Falcor. Those libraries deserve their own book. Flux in particular is constantly changing so by the time a book is written on the topic, it will most likely already be obsolete.</p>

<h2>Who Should Read This Book</h2>

<p className="it">Se debe leer este libro si usted está interesado en aprender cómo escribir aplicaciones web en React y quieren una profunda comprensión de cómo funciona la biblioteca. Este libro está pensado para principiantes absolutos. Dicho esto, este libro repasará la parte interna de React, lo cual es beneficioso para los que ya están familiarizados con React. Cualquier persona interesada en la creación de aplicaciones web ricas en el navegador puede beneficiarse de este libro.</p>

<p className="p">You should read this book if you are interested in learning how to write web applications in React and want a deep understanding of how the library works. This book is intended for absolute beginners to React. That said, this book will go over the internals of React, which is beneficial for those already familiar with React. Anyone interested in building rich web applications in the browser can benefit from this book.</p>
</div>
</div>
  </Layout>
)
