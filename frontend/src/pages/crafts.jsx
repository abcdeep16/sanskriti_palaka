import React from "react";
import Card from "../components/Card";
export default function Crafts(){
  const items = [{title:"Handloom", subtitle:"Textile arts", color:"#4056A1"}, {title:"Pottery", subtitle:"Clay works", color:"#D79922"}];
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-merri mb-4">Crafts</h2>
      <div className="grid md:grid-cols-2 gap-6">{items.map((it,i)=> <Card key={i} {...it} />)}</div>
    </div>
  )
}
