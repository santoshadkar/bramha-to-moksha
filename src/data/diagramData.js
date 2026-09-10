export const TATTVAS_DESCENT = {
  title: "Cosmic Emergence of the 24 Tattvas (Srishti-Krama)",
  rootNode: {
    id: "nirguna-brahman",
    label: "Nirguna Brahman",
    sanskrit: "निर्गुणब्रह्म (सच्चिदानन्दम्)",
    desc: "Unmanifest Supreme Consciousness beyond time, space, and attributes (Sat-Chit-Ananda). The ultimate non-dual ground of existence.",
    scriptureRef: "Mandukya Upanishad Verse 7 (Nantah-Prajnam... Santam Shivam Advaitam)",
    color: "#ffc107"
  },
  level1: [
    {
      id: "maya-ishvara",
      label: "Maya & Ishvara",
      sanskrit: "माया ईश्वरश्च (त्रिगुणात्मिका)",
      desc: "Brahman reflected in pure Sattvic Maya manifests as Ishvara—the Supreme Cosmic Architect possessed of omniscience, omnipotence, and the 3 Gunas (Sattva, Rajas, Tamas).",
      scriptureRef: "Svetasvatara Upanishad 4.10 (Mayam tu Prakritim Viddhi)",
      color: "#ff6d00"
    }
  ],
  level2: [
    {
      id: "mahat",
      label: "Mahat (Cosmic Intellect)",
      sanskrit: "महत्तत्त्वम् (बुद्धिः)",
      desc: "First cosmic manifestation of intelligence. The seed matrix of cosmic discrimination and universal mind.",
      scriptureRef: "Sankhya Karika 22",
      color: "#00e5ff"
    },
    {
      id: "ahamkara",
      label: "Ahamkara (Cosmic Ego)",
      sanskrit: "अहङ्कारः (त्रिधाः)",
      desc: "Principle of individuation ('I-maker'). Divides into Sattvika (subtle senses), Rajasa (action organs), and Tamasa (gross matter).",
      scriptureRef: "Sankhya Karika 24",
      color: "#b388ff"
    }
  ],
  level3: [
    {
      category: "5 Tanmatras (Subtle Elements)",
      items: ["Shabda (Sound)", "Sparsha (Touch)", "Rupa (Form/Light)", "Rasa (Taste)", "Gandha (Odor)"],
      desc: "Subtle ungrossified essence of elements perceived by subtle senses."
    },
    {
      category: "5 Pancha Mahabhutas (Gross Elements)",
      items: ["Akasha (Space)", "Vayu (Air)", "Agni (Fire)", "Jala (Water)", "Prithvi (Earth)"],
      desc: "Gross physical building blocks produced via Panchikarana (elemental quintuplication)."
    },
    {
      category: "10 Indriyas & Mind Processor",
      items: ["5 Jnana Indriyas (Ears, Skin, Eyes, Tongue, Nose)", "5 Karma Indriyas (Speech, Hands, Feet, Excretion, Reproduction)", "Manas (Mind)"],
      desc: "Subtle faculties for sensory perception, physical action, and thought processing."
    }
  ]
};

export const PANCHA_KOSHA_LAYERS = [
  {
    id: "annamaya",
    name: "Annamaya Kosha",
    sanskrit: "अन्नमयकोशः",
    translation: "Food / Physical Sheath",
    element: "Earth (Prithvi)",
    color: "#e65100",
    desc: "The gross physical body composed of skin, bones, muscles, and blood. Born of food, sustained by food, and returning to food upon death. Governed by 6 modifications: birth, existence, growth, maturity, decay, and death.",
    subtleFunction: "Physical container & vehicle for karmic experience.",
    scriptureRef: "Taittiriya Upanishad 2.2"
  },
  {
    id: "pranamaya",
    name: "Pranamaya Kosha",
    sanskrit: "प्राणमयकोशः",
    translation: "Vital Energy Sheath",
    element: "Air & Water (Vayu & Jala)",
    color: "#ff9800",
    desc: "The subtle energetic sheath consisting of breath and 5 primary Vayus (Prana, Apana, Samana, Udana, Vyana). Governs circulation, respiration, digestion, excretion, and bodily vitality.",
    subtleFunction: "Enlivens physical tissue and connects mind to body.",
    scriptureRef: "Taittiriya Upanishad 2.3"
  },
  {
    id: "manomaya",
    name: "Manomaya Kosha",
    sanskrit: "मनोमयकोशः",
    translation: "Mental / Emotional Sheath",
    element: "Fire & Mind (Agni & Manas)",
    color: "#ffc107",
    desc: "The sheath of sensory processing, emotions, likes/dislikes (Raga/Dvesha), doubts, and reactive thoughts (Sankalpa-Vikalpa). Driven by past impressions (Samskaras).",
    subtleFunction: "Processes sensory input and emotional responses.",
    scriptureRef: "Taittiriya Upanishad 2.4"
  },
  {
    id: "vijnanamaya",
    name: "Vijnanamaya Kosha",
    sanskrit: "विज्ञानमयकोशः",
    translation: "Intellectual Sheath",
    element: "Subtle Intellect (Buddhi)",
    color: "#00e5ff",
    desc: "The sheath of higher reason, discrimination, decision-making, conviction, and the core 'I-agent' sense (Kartritva). Translates sensory data into knowledge.",
    subtleFunction: "Seat of free will, wisdom, and ego identity.",
    scriptureRef: "Taittiriya Upanishad 2.5"
  },
  {
    id: "anandamaya",
    name: "Anandamaya Kosha",
    sanskrit: "आनन्दमयकोशः",
    translation: "Bliss / Causal Sheath",
    element: "Causal Ignorance (Avidya / Joy)",
    color: "#b388ff",
    desc: "The innermost causal sheath experienced during deep dreamless sleep (Sushupti) or deep Samadhi. Characterized by unmanifest joy veiled by causal ignorance.",
    subtleFunction: "Reflection of Brahman's intrinsic bliss.",
    scriptureRef: "Taittiriya Upanishad 2.6"
  },
  {
    id: "atman-core",
    name: "Atman (The Pure Self)",
    sanskrit: "आत्मा (शुद्धचैतन्यम्)",
    translation: "Immortal Witness Consciousness",
    element: "Pure Self-Luminous Light (Swayam-Jyoti)",
    color: "#ffffff",
    desc: "The unattached, unchanging Witness (Sakshi) transcending all 5 sheaths. Immutable, immortal, infinite—That Thou Art (Tat Tvam Asi).",
    subtleFunction: "Non-dual Reality illuminates all sheaths without being affected.",
    scriptureRef: "Vivekachudamani Verses 125-136"
  }
];

export const JNANA_BHUMIKAS_STAGES = [
  { step: 1, name: "Subheccha", sanskrit: "शुभेच्छा", meaning: "Good Desire for Truth", state: "Aspirant (Mumukshu)", desc: "Deep awakening to the vanity of worldly pursuits; intense desire for spiritual wisdom, Satsang, and dispassion." },
  { step: 2, name: "Vicharana", sanskrit: "विचारणा", meaning: "Philosophical Inquiry", state: "Inquirer (Jijnasu)", desc: "Systematic inquiry into Vedantic scripture, living a life of virtue, and reflecting deeply on Self vs Non-Self." },
  { step: 3, name: "Tanumanasa", sanskrit: "तनुमानसा", meaning: "Attenuation of Mind", state: "Practitioner (Sadhaka)", desc: "The mind becomes thin, subtle, and quiet like thread; sensory attractions drop away naturally." },
  { step: 4, name: "Sattvapatti", sanskrit: "सत्त्वापत्ति", meaning: "Attainment of Purity / First Awakening", state: "Knower of Brahman (Brahmavit)", desc: "Mind settles in pure Sattva; first direct realization of non-dual Brahman. World appears like a dream." },
  { step: 5, name: "Asamsakti", sanskrit: "असंसक्ति", meaning: "Complete Detachment", state: "Superior Knower (Brahmavit-vara)", desc: "Established in effortless non-attachment; unaffected by external worldly events or dualities." },
  { step: 6, name: "Padarthabhavani", sanskrit: "पदार्थभावना", meaning: "Absence of Material Concepts", state: "Exalted Knower (Brahmavit-variyan)", desc: "Material objects lose separate existence; absorbed in unbroken Samadhi, acting only when prompted." },
  { step: 7, name: "Turyaga", sanskrit: "तुर्यगा", meaning: "Transcendental Absorption (Turiya)", state: "Supreme Sage (Brahmavit-varishta)", desc: "Perpetual abidance in Turiya beyond words; absolute non-dual merger into Brahman." }
];

export const CHAKRAS_DATA = [
  { id: "root", name: "Muladhara", sanskrit: "मूलाधार", location: "Base of Spine / Perineum", color: "#f44336", petallCount: 4, element: "Earth (Prithvi)", mantra: "LAM", desc: "Foundation chakra storing dormant Kundalini Shakti coiled 3.5 times. Governs physical survival, grounding, and earth element." },
  { id: "sacral", name: "Svadhisthana", sanskrit: "स्वाधिष्ठान", location: "Sacrum / Lower Abdomen", color: "#ff9800", petallCount: 6, element: "Water (Jala)", mantra: "VAM", desc: "Sacral center governing fluid dynamics, emotional subconscious, desire, and procreation." },
  { id: "solar", name: "Manipura", sanskrit: "मणिपूर", location: "Solar Plexus / Navel", color: "#ffeb3b", petallCount: 10, element: "Fire (Agni)", mantra: "RAM", desc: "Center of metabolic fire, willpower, transformation, and dynamic action energy." },
  { id: "heart", name: "Anahata", sanskrit: "अनाहत", location: "Heart Center", color: "#4caf50", petallCount: 12, element: "Air (Vayu)", mantra: "YAM", desc: "Heart center of compassion, unconditional love, devotion, and the uncreated sound (Anahata Dhvani)." },
  { id: "throat", name: "Vishuddha", sanskrit: "विशुद्ध", location: "Throat / Larynx", color: "#00bcd4", petallCount: 16, element: "Ether (Akasha)", mantra: "HAM", desc: "Center of purification, divine expression, truth, and space element." },
  { id: "third-eye", name: "Ajna", sanskrit: "आज्ञा", location: "Eyebrow Center", color: "#3f51b5", petallCount: 2, element: "Mind / Light", mantra: "OM", desc: "Third eye command center of intuition, direct vision, and non-dual meditative focus." },
  { id: "crown", name: "Sahasrara", sanskrit: "सहस्रार", location: "Crown of Head", color: "#9c27b0", petallCount: 1000, element: "Pure Consciousness", mantra: "SO HAM", desc: "1000-petaled lotus of Shiva-Shakti union and supreme absorption into Brahman." }
];
