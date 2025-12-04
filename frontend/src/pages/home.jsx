import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const sample = [
  {title:"Classical Music", subtitle:"Live & recorded", color:"#EFE2BA"},
  {title:"Village Tours", subtitle:"Local guides & stories", color:"#D79922"},
  {title:"Street Food", subtitle:"Taste the traditions", color:"#F13C20"},
  {title:"Handicrafts", subtitle:"Buy handmade", color:"#4056A1"}
];

export default function Home(){
  const isAuthenticated = localStorage.getItem('user') !== null;
  const getTarget = (title) => `/${title.split(" ")[0].toLowerCase()}`;
  const handleClick = (e, path) => {
    if (!isAuthenticated) {
      e.preventDefault();
      window.location.href = "/login";
    }
  };
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <div className="mb-4 inline-block rounded-lg px-3 py-1 bg-softPurple/60 text-sm font-medium">14</div>
        <h1 className="text-4xl md:text-5xl font-merri text-gray-900">Artsy and Creative</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Discover music, tours, food & craft inspired by our living traditions.</p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sample.map((s,i) => {
          const path = getTarget(s.title);
          return (
            <Link
              key={i}
              to={path}
              onClick={e => handleClick(e, path)}
            >
              <Card title={s.title} subtitle={s.subtitle} color={s.color} />
            </Link>
          );
        })}
      </section>
    </div>
  );
}
