import React from "react";
import Card from "../components/Card";
export default function Food(){
  const items = [{title:"Street Bites", subtitle:"Local flavors", color:"#F13C20"}, {title:"Festive Sweets", subtitle:"Traditional desserts", color:"#EFE2BA"}];
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-merri mb-4">Food</h2>
      <div className="grid md:grid-cols-2 gap-6">{items.map((it,i)=> <Card key={i} {...it} />)}</div>
    </div>
  )
}
