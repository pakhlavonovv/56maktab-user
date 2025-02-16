import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Официальный сайт школы 56</title>
        <meta
          name="description"
          content="Андижанская городская школа №56 — общеобразовательное учреждение, расположенное в городе Андижан Андижанской области, и является школой государственной собственности. В этой школе учатся ученики начальной, средней и старшей школы. Опытные педагоги работают для того, чтобы организовать учебный процесс на высоком уровне."
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Geist&family=Geist+Mono&family=Merriweather:wght@300;400;700&family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />

      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
