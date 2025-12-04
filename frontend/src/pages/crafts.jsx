import React, { useState } from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import DetailModal from "../components/DetailModal";

// OPTIONAL — import images here
// import handloom from "../assets/crafts/handloom.jpg";
// import pottery from "../assets/crafts/pottery.jpg";

export default function Crafts() {
  const [active, setActive] = useState(null);

  const crafts = [
    {
      title: "Handloom Weaving",
      subtitle: "Traditional textile arts",
      img: null,
      color: "#4056A1",
      description: `Handloom weaving is one of India's oldest living crafts. Each strand carries a story — of heritage, patience, and the rhythm of hands that have mastered this art over centuries. From cotton to silk to intricate brocades, weaving reflects community identity and regional beauty.`
    },
    {
      title: "Pottery",
      subtitle: "Clay craft & ceramics",
      img: null,
      color: "#D79922",
      description: `Pottery is the art of shaping earth, water, and fire into everyday beauty. From terracotta vessels to glazed decor pieces, this craft reflects ancient techniques and cultural symbolism rooted in village life.`
    },
    {
      title: "Stone Craft",
      subtitle: "Carving & masonry",
      img: null,
      color: "#8E6E53",
      description: `Stone carving transforms hard rock into delicate sculpture. Temples, idols, pillars, and ornaments are shaped using techniques passed down across generations. This craft showcases India's unparalleled mastery over stone.`
    },
    {
      title: "Wood Carving",
      subtitle: "Sculpting in wood",
      img: null,
      color: "#A0522D",
      description: `Wood carving blends utility with intricate art. Doors, toys, temple carvings, furniture, and decor pieces showcase delicate floral patterns, mythological stories, and tribal motifs.`
    },
    {
      title: "Metalwork",
      subtitle: "Brass, copper & iron art",
      img: null,
      color: "#B08D57",
      description: `Metalwork includes brass idols, copper utensils, iron sculptures, and tribal metal crafts. Each piece is hammered, cast, and polished by skilled artisans with deep cultural knowledge.`
    },
    {
      title: "Terracotta Art",
      subtitle: "Earthen sculptures",
      img: null,
      color: "#D77A61",
      description: `Terracotta art is one of India’s oldest craft forms — shaping earth into figurines, horses, tiles, lamps, and ritual vessels. Sun-dried and kiln-fired, terracotta carries warm rustic beauty.`
    },
    {
      title: "Folk Paintings",
      subtitle: "Warli, Madhubani, Pattachitra",
      img: null,
      color: "#6A4C93",
      description: `Folk paintings mirror village life, mythology, and nature. Warli’s simple human forms, Madhubani’s intricate borders, and Pattachitra’s divine stories make this craft globally admired.`
    },
    {
      title: "Jewelry Making",
      subtitle: "Beads, silver & enameling",
      img: null,
      color: "#C73E1D",
      description: `Traditional jewelry uses silver, beads, lacquer, enamel, and tribal motifs. Handcrafted pieces celebrate beauty, femininity, and ritual significance.`
    },
    {
      title: "Bamboo Craft",
      subtitle: "Eco-friendly weaving",
      img: null,
      color: "#4CAF50",
      description: `Bamboo craft produces baskets, mats, furniture, instruments, and decorative art. It is sustainable, lightweight, and deeply rooted in tribal culture.`
    },
    {
      title: "Carpet Weaving",
      subtitle: "Hand-knotted carpets & rugs",
      img: null,
      color: "#8A2BE2",
      description: `Carpet weaving blends geometry, storytelling, and color harmony. Each thread is tied by hand — producing masterpieces that take months or even years to finish.`
    },
    {
      title: "Lacquer Work",
      subtitle: "Colorful lacquerware",
      img: null,
      color: "#D81159",
      description: `Lacquer craft uses tree-resin to create bright, glossy finishes on toys, bangles, boxes, and home decor. It is vibrant, festive, and instantly eye-catching.`
    },
    {
      title: "Shell Craft",
      subtitle: "Decoratives from sea shells",
      img: null,
      color: "#009FB7",
      description: `Shell craft transforms conch and sea shells into jewelry, lamp shades, figurines, and decorative items. It reflects coastal life and marine beauty.`
    },
    {
      title: "Leather Craft",
      subtitle: "Traditional leatherwork",
      img: null,
      color: "#704214",
      description: `Leather craft includes hand-stitched footwear, bags, puppets, and embroidered leather art. It is rustic, durable, and uniquely Indian.`
    },
    {
      title: "Embroidery",
      subtitle: "Zari, Kantha, Chikankari",
      img: null,
      color: "#F4A261",
      description: `Embroidery stitches stories into fabric — delicate Chikankari, shimmering Zari, narrative Kantha, and tribal mirrorwork. India’s embroidery heritage is world-renowned.`
    },
    {
      title: "Block Printing",
      subtitle: "Hand-block textile art",
      img: null,
      color: "#2A9D8F",
      description: `Block printing uses carved wooden blocks dipped in natural dyes to create repeating floral, geometric, and traditional patterns. It is rhythmic, elegant, and eco-friendly.`
    },
    {
      title: "Puppet Making",
      subtitle: "Kathputli & wooden puppets",
      img: null,
      color: "#E76F51",
      description: `Puppet-making combines sculpture, painting, and storytelling. Rajasthan’s kathputlis are iconic — used in vibrant folk theatre.`
    },
    {
      title: "Glass Art",
      subtitle: "Fused & blown glass designs",
      img: null,
      color: "#0077B6",
      description: `Glass art includes blown glass lamps, ornaments, beads, and stained panels. It reflects precision, creativity, and vibrant color.`
    },
    {
      title: "Paper Craft",
      subtitle: "Handmade paper products",
      img: null,
      color: "#6E44FF",
      description: `Paper craft features recycled handmade paper, journals, lampshades, flowers, and papier-mâché sculptures. It’s eco-friendly and artistic.`
    },
    {
      title: "Carving in Marble",
      subtitle: "Marble decor & sculptures",
      img: null,
      color: "#A8A8A8",
      description: `Marble carving requires incredible skill — creating idols, home decor, jaali work, vases, and architectural elements. Agra and Rajasthan are famous for it.`
    },
    {
      title: "Meenakari Art",
      subtitle: "Enameling on metal",
      img: null,
      color: "#D62828",
      description: `Meenakari is intricate enamel decoration on gold, silver, and copper. Traditionally from Rajasthan, its bright colors and detailed motifs are breathtaking.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf4e6] py-16">
      <div className="container mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold font-merri mb-6"
        >
          Indian Crafts & Artisans
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-700 max-w-3xl text-lg mb-10"
        >
          Explore India's living heritage — craftsmanship preserved by generations of artisans.
        </motion.p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {crafts.map((craft, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="transition-transform hover:-translate-y-2 hover:scale-[1.01] cursor-pointer"
              onClick={() => setActive(craft)}
            >
              <Card {...craft} />
            </motion.div>
          ))}
        </div>

        {active && <DetailModal item={active} onClose={() => setActive(null)} />}
      </div>
    </div>
  );
}
