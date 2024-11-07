import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");



  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-slate-100 px-3 py-2 rounded-2xl gap-3 flex flex-wrap shadow-lg">
          <button onClick={()=> setColor("red")} className="outline-none px-4 py-2 rounded-2xl
           text-white" style={{backgroundColor:"red"}}>Red</button>

          <button onClick={()=> setColor("Green")} className="outline-none px-4 py-2 rounded-2xl
           text-white" style={{backgroundColor:"Green"}}>Green</button>

          <button onClick={()=> setColor("Blue")} className="outline-none px-4 py-2 rounded-2xl
           text-white" style={{backgroundColor:"blue"}}>Blue</button>

          <button onClick={()=> setColor("Purple")} className="outline-none px-4 py-2 rounded-2xl
           text-white" style={{backgroundColor:"purple"}}>Purple</button>


            <button onClick={()=> setColor("grey")} className="outline-none px-4 py-2 rounded-2xl
           text-white" style={{backgroundColor:"grey"}}>Grey</button>

            <button  onClick={()=> setColor("Pink")}className="outline-none px-4 py-2 rounded-2xl
           text-white" style={{backgroundColor:"pink"}}>Pink</button>

            <button  onClick={()=> setColor("yellow")}className="outline-none px-4 py-2 rounded-2xl
           text-white" style={{backgroundColor:"yellow"}}>Yellow</button>


        </div>
        
      </div>
    </div>
  );
}

export default App;
