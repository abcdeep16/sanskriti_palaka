import React, { useState } from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import DetailModal from "../components/DetailModal";

export default function Music() {
  const [activeMusic, setActiveMusic] = useState(null);

  const musicStyles = [
    {
      title: "Maithili Folk",
      subtitle: "Songs of Mithila",
      img: null,
      description:
        "Maithili folk music is the poetic heartbeat of the Mithila region in Bihar and Nepal. Deeply rooted in centuries-old cultural traditions, it reflects themes of love, devotion, festivals, and family bonds. The melodies feel gentle and comforting, often composed for weddings, childbirth celebrations, festive rituals, and storytelling. Maithili songs are rich in symbolism—flowers, rivers, seasons, and mythology are woven into every verse. For a foreign listener, Maithili folk opens a window into India’s rural charm, where music is not entertainment but an emotional companion to everyday life."
    },
    {
      title: "Bhatiali",
      subtitle: "Boatmen’s songs of Bengal",
      img: null,
      description:
        "Bhatiali is the soul of Bengal’s rivers—sung by boatmen as they travel across vast waters. These songs echo themes of separation, longing, devotion, and destiny. The melodies flow slowly like the river itself, carrying raw human emotion. Bhatiali gives listeners—especially foreigners—an intimate glimpse into the life of Bengal’s river communities, where water is both a home and a spiritual metaphor."
    },
    {
      title: "Sohar",
      subtitle: "Childbirth celebration songs",
      img: null,
      description:
        "Sohar songs are performed during childbirth rituals in Bihar and Uttar Pradesh. They celebrate the arrival of new life with warmth, humor, and blessings. Women gather to sing in unison, creating an atmosphere of joy and protection. Sohar music reflects the purity of motherhood, family unity, and the shared happiness of the community. For travelers, it demonstrates how music in India connects generations through sacred traditions."
    },
    {
      title: "Kalbelia",
      subtitle: "Rajasthani serpent dance music",
      img: null,
      description:
        "Kalbelia music belongs to the Kalbelia tribe—traditional snake charmers of Rajasthan. The rhythms are fast-paced and hypnotic, paired with swirling female dancers whose movements resemble a serpent. UNESCO recognizes Kalbelia as an Intangible Cultural Heritage of Humanity. Its music captures the desert’s energy, the tribe’s free spirit, and Rajasthan’s vibrant artistic legacy."
    },
    {
      title: "Lavani",
      subtitle: "Maharashtrian folk dance",
      img: null,
      description:
        "Lavani is bold, expressive, and filled with emotional storytelling. Originating in Maharashtra, Lavani blends rhythm, satire, romance, and social commentary. The powerful beat of the dholki and the graceful movements of the dancers create a captivating performance. Lavani shows how Indian folk art blends entertainment and cultural reflection."
    },
    {
      title: "Baul",
      subtitle: "Mystic songs of Bengal",
      img: null,
      description:
        "Baul music is the voice of wandering mystics who seek spiritual truth beyond religious boundaries. With their ektaras and soulful voices, Bauls sing about humanism, inner peace, and unity. Their melodies are simple yet profound—inviting listeners to reflect on life’s deeper meaning. Baul culture fascinates foreigners because it blends music, poetry, philosophy, and nomadic lifestyle."
    },
    {
      title: "Tamasha",
      subtitle: "Folk theatre music",
      img: null,
      description:
        "Tamasha is a lively folk theatre tradition from Maharashtra. It features energetic dance, humorous storytelling, and expressive singing. The music uses traditional drums and vibrant melodies to entertain audiences late into the night. Tamasha showcases India’s rich performing arts heritage, where music and drama merge beautifully."
    },
    {
      title: "Qawwali",
      subtitle: "Sufi devotional music",
      img: null,
      description:
        "Qawwali is a powerful devotional form performed at Sufi shrines. It represents a deep yearning for divine love and spiritual awakening. Harmonium, tabla, and clapping accompany the passionate vocals of the Qawwals. Foreigners find Qawwali mesmerizing because of its emotional intensity—it feels like a musical prayer rising into the air."
    },
    {
      title: "Bhajan",
      subtitle: "Hindu devotional songs",
      img: null,
      description:
        "Bhajans are devotional songs expressing love and praise for Hindu deities. Sung in temples and homes, they create a peaceful and uplifting atmosphere. Bhajans rely on simple melodies and heartfelt lyrics, making them easy for everyone to join. They symbolize India’s spiritual traditions and communal harmony."
    },
    {
      title: "Ghazal",
      subtitle: "Poetic semi-classical songs",
      img: null,
      description:
        "Ghazals blend poetic Urdu verses with soft, emotional melodies. They explore themes of love, longing, beauty, separation, and philosophical reflection. Ghazals are cherished for their poetic depth and soothing musical style. For foreign audiences, they offer a graceful introduction to India’s literary and musical refinement."
    },
    {
      title: "Dadra",
      subtitle: "Light semi-classical",
      img: null,
      description:
        "Dadra is a semi-classical form sung in a romantic and expressive manner. Its light emotional quality makes it popular in classical concerts and dance performances. Dadra highlights India’s ability to blend classical discipline with accessible, heartfelt expression."
    },
    {
      title: "Thumri",
      subtitle: "Expressive classical form",
      img: null,
      description:
        "Thumri is an emotive classical style focusing on love, devotion, and subtle expression rather than strict rules. It often portrays Radha-Krishna themes. Thumri is gentle, graceful, and deeply moving—inviting listeners to feel the emotion behind each word."
    },
    {
      title: "Rouf",
      subtitle: "Kashmiri women’s dance music",
      img: null,
      description:
        "Rouf is a traditional Kashmiri dance form performed by women during festivals like Eid. The music is soft, repetitive, and calming—matching the rhythmic footwork of the dancers. Rouf reflects the serene beauty and peaceful culture of Kashmir’s valley."
    },
    {
      title: "Garba",
      subtitle: "Gujarati Navratri music",
      img: null,
      description:
        "Garba music is the heartbeat of Gujarat’s Navratri festival. Performed in large circles with rhythmic claps and devotional singing, Garba celebrates the divine feminine energy. Its cheerful beats and colorful atmosphere make it instantly loved by foreigners visiting India."
    },
    {
      title: "Bihu",
      subtitle: "Assamese harvest festival songs",
      img: null,
      description:
        "Bihu music celebrates spring, fertility, harvest, and youthful love in Assam. It uses instruments like dhol, pepa, taal, and gogona. Bihu is vibrant and energetic—showcasing Assam’s rich cultural identity and festive spirit."
    },
    {
      title: "Gidda",
      subtitle: "Punjabi women’s folk",
      img: null,
      description:
        "Gidda is a joyful, high-energy folk form where Punjabi women sing witty verses called boliyan. The dance is expressive, cheerful, and full of cultural pride. Gidda highlights friendship, humor, and celebration in everyday village life."
    },
    {
      title: "Sambalpuri",
      subtitle: "Odia folk music",
      img: null,
      description:
        "Sambalpuri music from Odisha is vibrant and electrifying. It incorporates tribal rhythms, traditional drums, and expressive vocals. Sambalpuri songs accompany folk dances and festive gatherings, showcasing Odisha’s lively cultural traditions."
    },
    {
      title: "Ballad Songs",
      subtitle: "Village storytelling",
      img: null,
      description:
        "Indian ballads are narrative songs telling stories of local heroes, historical events, myths, and village folklore. They are sung with passion and minimal instruments. Ballads help preserve oral history and cultural memory across generations."
    },
    {
      title: "Regional Folk",
      subtitle: "Mixed folk traditions",
      img: null,
      description:
        "India’s regional folk songs are incredibly diverse—each state offering unique dialects, rhythms, traditions, and stories. From mountain melodies to coastal chants, these songs reflect the heart of India’s cultural landscape."
    },
    {
      title: "Rural Ensemble",
      subtitle: "Village instrument groups",
      img: null,
      description:
        "Rural ensembles include instruments like dholak, sarangi, bamboo flutes, manjira, and tribal drums. These groups perform during harvest, festivals, weddings, and community gatherings. Their music captures the raw beauty and unity of village life."
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf4e6] py-16">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold font-merri mb-6 text-gray-900"
        >
          Indian Regional Music
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-700 max-w-3xl text-lg mb-10"
        >
          Discover the diverse musical heritage of India — from devotional harmonies 
          to tribal rhythms and poetic folk traditions. Each style carries generations 
          of culture, emotion, and storytelling.
        </motion.p>

        {/* MUSIC GRID */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {musicStyles.map((music, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="hover:scale-[1.03] transition-transform cursor-pointer"
              onClick={() => setActiveMusic(music)}
            >
              <Card {...music} />
            </motion.div>
          ))}
        </div>

        {activeMusic && (
          <DetailModal 
            item={activeMusic} 
            onClose={() => setActiveMusic(null)} 
          />
        )}

      </div>
    </div>
  );
}
