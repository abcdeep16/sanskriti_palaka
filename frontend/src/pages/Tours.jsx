import React from "react";
import Card from "../components/Card";
export default function Tours(){
  const items = [{title:"Village Trails", subtitle:"Walk & stories", color:"#D79922"}, {title:"Temple Tours", subtitle:"Architectural gems", color:"#EFE2BA"}];
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-merri mb-4">Tours</h2>
      <div className="grid md:grid-cols-2 gap-6">{items.map((it,i)=> <Card key={i} {...it} />)}</div>
    </div>
  )
}
