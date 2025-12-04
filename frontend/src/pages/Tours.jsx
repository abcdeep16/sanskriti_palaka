import React, { useState } from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import DetailModal from "../components/DetailModal";

export default function Tours() {
  const [active, setActive] = useState(null);

  const tours = [
    {
      title: "Village Trails",
      subtitle: "Walks & local stories",
      color: "#D79922",
      img: null,
      description:
`Village Trails invite you to wander lanes where time moves gently. Local guides—artisans, farmers, elders—share stories of festivals, old crafts, and daily life. These walks reveal traditional houses, courtyard kitchens, and small temples; they are intimate lessons in living heritage. A traveler returns with memories of warm smiles, shared meals, and a deep sense of place.`
    },
    {
      title: "Temple Tours",
      subtitle: "Architectural & spiritual gems",
      color: "#EFE2BA",
      img: null,
      description:
`Temple Tours explore architectural masterpieces from different eras: carved stone sanctuaries, frescoed chambers, and sunlit courtyards. More than monuments, temples are living spaces where ritual, music, and devotion continue. A guided temple tour opens doors to legend, iconography and the devotional life of a community.`
    },
    {
      title: "Nature Walks",
      subtitle: "Forest paths & birding",
      color: "#7FB069",
      img: null,
      description:
`Nature Walks take you away from bustle into shaded trails, wetlands and bird-rich landscapes. Local naturalists point out medicinal plants, migratory birds, and seasonal blossoms. These tours are slow, observant, and deeply restorative.`
    },
    {
      title: "Crafts Village Visits",
      subtitle: "Meet artisans & workshops",
      color: "#A66CFF",
      img: null,
      description:
`Visit workshops where weaving, pottery, metalwork and painting are practiced daily. You meet the hands that shape tradition, watch step-by-step processes, and sometimes try the craft yourself. These visits build empathy and directly support local livelihoods.`
    },
    {
      title: "Culinary Trails",
      subtitle: "Food walks & cooking classes",
      color: "#E76F51",
      img: null,
      description:
`Culinary Trails pair street bites with home-cooked meals. Learn how regional spices create distinct flavors, join a cooking class in a local house, and taste the cultural stories simmering in every pot.`
    },
    {
      title: "Heritage Rides",
      subtitle: "Cycle or bullock cart routes",
      color: "#2E8B57",
      img: null,
      description:
`Heritage Rides are slow, sensory journeys — on bicycle lanes or in bullock carts — through paddy fields, small shrines and roadside temples. They are immersive, tactile and deeply local.`
    },
    {
      title: "Festival Experiences",
      subtitle: "Join local celebrations",
      color: "#F4A261",
      img: null,
      description:
`Festival Experiences let you witness seasonal rituals, processions and communal feasts. With local hosts, you can watch, participate and understand the deeper cultural meanings behind each celebration.`
    },
    {
      title: "River Journeys",
      subtitle: "Boat-based cultural travel",
      color: "#1E90FF",
      img: null,
      description:
`River Journeys drift along waterways where villages, rituals and livelihoods cluster. From sunrise prayers on ghats to boatmen songs at dusk, river travel offers a slow and poetic way to see daily life unfold.`
    },
    {
      title: "Tribal Trails",
      subtitle: "Meet indigenous communities",
      color: "#8E6E53",
      img: null,
      description:
`Tribal Trails introduce travelers to indigenous cultures, their music, dance, and craft traditions. These respectful visits emphasize cultural exchange, not voyeurism — always arranged with community consent.`
    },
    {
      title: "Historical Walks",
      subtitle: "Colonial & pre-colonial sites",
      color: "#9A6324",
      img: null,
      description:
`Historical Walks reveal layers of time — fort walls, trading posts, colonial offices and archaeological ruins. Guides weave political, social and human stories into the stones, making the past vividly present.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf4e6] py-16">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold font-merri mb-6 text-gray-900"
        >
          Cultural Tours & Trails
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-gray-700 max-w-3xl text-lg mb-10"
        >
          Discover slow, meaningful travel experiences — learn from artisans, participate in rituals, taste regional cuisines, and walk the landscapes that shaped traditions.
        </motion.p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tours.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="transition-transform hover:-translate-y-2 hover:scale-[1.01] cursor-pointer"
              onClick={() => setActive(t)}
            >
              <Card {...t} />
            </motion.div>
          ))}
        </div>

        {active && <DetailModal item={active} onClose={() => setActive(null)} />}

      </div>
    </div>
  );
}
