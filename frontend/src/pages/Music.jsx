import React from "react";
import Card from "../components/Card";

const items = [
  {title:"Madhubani Melodies", subtitle:"Traditional songs", color:"#EFE2BA"},
  {title:"Folk Beats", subtitle:"Percussion & rhythms", color:"#C5CBE3"},
  {title:"Classical", subtitle:"Raga sessions", color:"#4056A1"}
];

export default function Music(){
  return (
    <div className="container mx-auto px-6 py-12">
      <header className="mb-8">
        <h2 className="text-4xl font-merri">Music</h2>
        <p className="text-gray-600 mt-2">Curated performances and recordings from local artists.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it,i) => <Card key={i} title={it.title} subtitle={it.subtitle} color={it.color} />)}
      </div>
    </div>
  )
}
