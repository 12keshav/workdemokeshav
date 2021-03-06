import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AppRoutes from '../Routes/index'
import "../App/style.scss"
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
       <AppRoutes />
       <AnimatedCursor
      innerSize={12}
      outerSize={20}
      color='173, 249, 26'
      outerAlpha={0.2}
      innerScale={0.5}
      outerScale={4}
      />
    </>
  );
}

export default App;
