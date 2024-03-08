import { CategoryModel } from "../Models/Category.model";
import { DetailsModel } from "../Models/Details.model";
import { UsuarioModel } from "../Models/Usuario.model";
import { baseUrlImages } from "../Share/Constants";

export const usuarios: UsuarioModel[] = [
  {
    imgProfile: `${baseUrlImages}/userProfilePicture/juanPerez.jpg`,
    nombre: "Juan Pérez",
    user: "juanperez@gmail.com",
    password: "1234",
  },
  {
    imgProfile: `${baseUrlImages}/userProfilePicture/mariaRodriguez.jpg`,
    nombre: "María Rodríguez",
    user: "mariarodriguez@outlook.com",
    password: "password2",
  },
  {
    imgProfile: `${baseUrlImages}/userProfilePicture/pedroGonzalez.jpg`,
    nombre: "Pedro González",
    user: "pedrogonzalez@hotmail.com",
    password: "password3",
  },
  {
    imgProfile: `${baseUrlImages}/userProfilePicture/anaMartinez.jpg`,
    nombre: "Ana Martínez",
    user: "anamartinez@gmail.com",
    password: "password4",
  },
  {
    imgProfile: `${baseUrlImages}/userProfilePicture/luisLopez.jpg`,
    nombre: "Luis López",
    user: "luislopez@gmail.com",
    password: "password5",
  },
];

export const categorias: CategoryModel[] = [
  {
    id: 1,
    nombre: "Terror",
    bgImage: `${baseUrlImages}/Categories/bg/terror.jpg`,
    logo: "https://example.com/terror-logo.jpg",
  },
  {
    id: 2,
    nombre: "Romance",
    bgImage: `${baseUrlImages}/Categories/bg/romance.jpg`,
    logo: "https://example.com/romance-logo.jpg",
  },
  {
    id: 3,
    nombre: "Anime",
    bgImage: `${baseUrlImages}/Categories/bg/anime.jpg`,
    logo: "https://example.com/anime-logo.jpg",
  },
  {
    id: 4,
    nombre: "Comedia",
    bgImage: `${baseUrlImages}/Categories/bg/comedia.jpg`,
    logo: "https://example.com/comedia-logo.jpg",
  },
  {
    id: 5,
    nombre: "Acción",
    bgImage: `${baseUrlImages}/Categories/bg/accion.jpg`,
    logo: "https://example.com/accion-logo.jpg",
  },
];

export const movieDetails: DetailsModel[] = [
  {
    id: 1,
    name: "The Journey Beyond",
    bgImage: `${baseUrlImages}/Details/bg/the-journey-beyond-bg.jpg`,
    logo: `${baseUrlImages}/Details/logos/the-journey-beyond-logo.png`,
    synopsis:
      "A gripping tale of adventure and discovery as a group of explorers ventures into unknown lands.",
    detailedSypnosis:
      "In 'The Journey Beyond', a team of daring explorers sets out to uncover the secrets of an uncharted territory. Faced with the challenges of nature and unexpected obstacles, they find more than they bargained for. As they delve deeper into the unknown, they must confront their fears and work together to survive. This epic tale of adventure, bravery, and discovery explores the depths of the human spirit and the boundless wonders of our world.",
    duration: "2h 15min",
    directors: ["Alex Rivera", "Morgan Lee"],
    releaseDate: "2023-07-21",
    categories: [1, 3, 5],
    starring: ["Chris Evans", "Zoe Saldana", "Idris Elba", "Tessa Thompson"],
    rating: "PG-13",
  },
  {
    id: 2,
    name: "Mysteries of the Cosmos",
    bgImage: `${baseUrlImages}/Details/bg/mysteries-cosmos-bg.jpg`,
    logo: `${baseUrlImages}/Details/logos/mysteries-cosmos-logo.png`,
    synopsis:
      "Explore the vastness of the universe and the wonders it holds in this captivating documentary series.",
    detailedSypnosis:
      "‘Mysteries of the Cosmos’ takes viewers on a breathtaking journey through space and time, exploring galaxies, nebulae, and black holes. Each episode delves into the latest discoveries and theories in astrophysics, bringing the secrets of the universe closer to home. Featuring stunning visuals and interviews with leading scientists, this series is an awe-inspiring exploration of our universe and its infinite mysteries.",
    duration: "45min",
    directors: ["Samantha Lee", "Jonathan Hughes"],
    releaseDate: "2024-01-15",
    categories: [2, 4, 5],
    starring: ["Neil deGrasse Tyson", "Emily Calandrelli", "Bill Nye"],
    rating: "TV-G",
  },
  {
    id: 3,
    name: "Heartbeats in Tokyo",
    bgImage: `${baseUrlImages}/Details/bg/heartbeats-in-tokyo-bg.jpg`,
    logo: `${baseUrlImages}/Details/logos/heartbeats-in-tokyo-logo.png`,
    synopsis:
      "A romantic comedy that unfolds under the neon lights of Tokyo, where two strangers find laughter and love.",
    detailedSypnosis:
      "When Alex, an aspiring comedian from America, and Hana, a Japanese manga artist, bump into each other in the bustling streets of Tokyo, neither of them expects the whirlwind of comedy and romance that follows. 'Heartbeats in Tokyo' is a heartwarming tale that navigates the complexities of love, culture, and finding common ground in the most unexpected places. Through laughter and tears, Alex and Hana discover that love knows no boundaries.",
    duration: "1h 45min",
    directors: ["Samantha Cho", "Eiji Tanaka"],
    releaseDate: "2024-02-14",
    categories: [2, 4],
    starring: ["Emma Stone", "Ken Watanabe", "Rila Fukushima"],
    rating: "PG",
  },
  {
    id: 4,
    name: "Whispers in the Dark",
    bgImage: `${baseUrlImages}/Details/bg/whispers-in-the-dark-bg.jpg`,
    logo: `${baseUrlImages}/Details/logos/whispers-in-the-dark-logo.png`,
    synopsis:
      "An eerie tale of a haunted house that whispers secrets of the past, terrifying those who dare to uncover them.",
    detailedSypnosis:
      "In the heart of the countryside lies a house that whispers secrets of a tragic past. When a group of friends decides to spend the weekend there, they are quickly enveloped by the house's dark history. 'Whispers in the Dark' takes you on a terrifying journey through the unknown, where every corner hides a story, and every whisper could be your last.",
    duration: "1h 50min",
    directors: ["Elena Morales"],
    releaseDate: "2023-10-31",
    categories: [1], // Terror
    starring: ["Daniel Kaluuya", "Anya Taylor-Joy"],
    rating: "R",
  },
  {
    id: 5,
    name: "Skybound Dreams",
    bgImage: `${baseUrlImages}/Details/bg/skybound-dreams-bg.jpg`,
    logo: `${baseUrlImages}/Details/logos/skybound-dreams-logo.png`,
    synopsis:
      "An enchanting anime adventure that soars through the skies, exploring dreams and the bonds that tie us together.",
    detailedSypnosis:
      "'Skybound Dreams' tells the story of Kai and Aria, two young dreamers with the power to enter each other's dreams. As they navigate their way through fantastical skybound worlds, they uncover a deeper connection and a destiny that transcends the very fabric of dreams. This visually stunning anime explores themes of friendship, destiny, and the power of dreams.",
    duration: "2h",
    directors: ["Miyu Takahashi"],
    releaseDate: "2024-04-15",
    categories: [3], // Anime
    starring: ["Voices: Haruka Tomatsu, Yuki Kaji"],
    rating: "PG",
  },
  {
    id: 6,
    name: "Operation Thunderbolt",
    bgImage: `${baseUrlImages}/Details/bg/operation-thunderbolt-bg.jpg`,
    logo: `${baseUrlImages}/Details/logos/operation-thunderbolt-logo.png`,
    synopsis:
      "An action-packed thriller following an elite squad on a mission to stop a global threat.",
    detailedSypnosis:
      "When a dangerous weapon falls into the wrong hands, an elite squad led by Captain Mia Stone is tasked with a critical mission: retrieve the weapon and neutralize the threat. 'Operation Thunderbolt' is a high-octane action film that takes you on a thrilling ride across the globe, showcasing breathtaking stunts, strategic battles, and the unbreakable spirit of heroes fighting for peace.",
    duration: "2h 10min",
    directors: ["Liam Wright"],
    releaseDate: "2023-08-05",
    categories: [5], // Acción
    starring: ["Scarlett Johansson", "Idris Elba", "Chris Hemsworth"],
    rating: "PG-13",
  },
  {
    id: 7,
    name: "Love at Second Sight",
    bgImage: `${baseUrlImages}/Details/bg/love-at-second-sight-bg.jpg`,
    logo: `${baseUrlImages}/Details/logos/love-at-second-sight-logo.png`,
    synopsis:
      "A charming tale of unexpected love, second chances, and the magic of fate.",
    detailedSypnosis:
      "Julia, a successful but cynical businesswoman, unexpectedly crosses paths with Tom, a free-spirited artist, reigniting a spark from their past. 'Love at Second Sight' explores the unpredictable nature of love, the importance of second chances, and the belief that sometimes, fate has its own way of bringing people together.",
    duration: "1h 40min",
    directors: ["Carlos Mendez"],
    releaseDate: "2024-02-14",
    categories: [2], // Romance
    starring: ["Rachel McAdams", "Ryan Gosling"],
    rating: "PG-13",
  },
  {
    id: 8,
    name: "Eternal Shadows",
    bgImage: "https://example.com/images/eternal-shadows-bg.jpg",
    logo: "https://example.com/images/eternal-shadows-logo.png",
    synopsis:
      "A tale of timeless love and mystery in the heart of Victorian England.",
    detailedSypnosis:
      "In 'Eternal Shadows', Elizabeth finds herself entangled in a web of love, betrayal, and supernatural mysteries as she uncovers her true destiny in the gloomy streets of Victorian England. With the help of an enigmatic stranger, she embarks on a journey that could change the course of history.",
    duration: "2h 20min",
    directors: ["Sophia Lorraine"],
    releaseDate: "2024-12-15",
    categories: [2, 5], // Assuming 2: Romance, 5: Mystery
    starring: ["Emily Blunt", "Tom Hardy"],
    rating: "PG-13",
  },
  {
    id: 9,
    name: "Galactic Warriors",
    bgImage: "https://example.com/images/galactic-warriors-bg.jpg",
    logo: "https://example.com/images/galactic-warriors-logo.png",
    synopsis:
      "An epic space opera that chronicles the battle for freedom across the galaxy.",
    detailedSypnosis:
      "The Galactic Warriors saga begins as the rebel alliance forms to challenge the tyranny of the Galactic Empire. Through battles across star systems, the fate of the galaxy hangs in balance. Experience the adventure, the camaraderie, and the ultimate sacrifice for freedom.",
    duration: "2h 45min",
    directors: ["John Rivera", "Mark Lewis"],
    releaseDate: "2025-05-04",
    categories: [1, 5], // 1: Sci-Fi, 5: Action
    starring: ["Chris Evans", "Zoe Saldana"],
    rating: "PG-13",
  },
  {
    id: 10,
    name: "The Last Manuscript",
    bgImage: "https://example.com/images/the-last-manuscript-bg.jpg",
    logo: "https://example.com/images/the-last-manuscript-logo.png",
    synopsis:
      "A thrilling quest for a legendary manuscript believed to hold the secrets to eternal life.",
    detailedSypnosis:
      "An ambitious historian and a cunning thief team up to uncover the 'The Last Manuscript', a legendary book lost for centuries. Their journey takes them around the world, where they must solve ancient puzzles, evade dangerous adversaries, and confront moral dilemmas.",
    duration: "2h",
    directors: ["Alice Wong"],
    releaseDate: "2024-08-21",
    categories: [4, 5], // 4: Adventure, 5: Thriller
    starring: ["Idris Elba", "Natalie Portman"],
    rating: "PG-13",
  },
  {
    id: 11,
    name: "Whispering Pines",
    bgImage: "https://example.com/images/whispering-pines-bg.jpg",
    logo: "https://example.com/images/whispering-pines-logo.png",
    synopsis:
      "A family's serene woodland retreat becomes a nightmare of survival against nature's wrath.",
    detailedSypnosis:
      "The 'Whispering Pines' tells the story of the Harper family, who retreat to a remote cabin in the woods seeking a peaceful escape. However, when a mysterious force begins to terrorize them, their bond and survival instincts are put to the ultimate test.",
    duration: "1h 50min",
    directors: ["Michael Benson"],
    releaseDate: "2023-11-17",
    categories: [1, 3], // 1: Horror, 3: Drama
    starring: ["Hugh Jackman", "Sandra Bullock"],
    rating: "R",
  },
  {
    id: 12,
    name: "Beyond the Horizon",
    bgImage: "https://example.com/images/beyond-the-horizon-bg.jpg",
    logo: "https://example.com/images/beyond-the-horizon-logo.png",
    synopsis:
      "A gripping story of survival and discovery at the edge of the universe.",
    detailedSypnosis:
      "When humanity's last hope, the starship Horizon, is sent on a daring mission to explore beyond the known universe, its crew must confront the unknown and themselves. 'Beyond the Horizon' is a tale of courage, discovery, and the enduring spirit of adventure.",
    duration: "2h 15min",
    directors: ["Marcus Vinicius"],
    releaseDate: "2025-03-27",
    categories: [1, 5], // 1: Sci-Fi, 5: Adventure
    starring: ["Matt Damon", "Jessica Chastain"],
    rating: "PG-13",
  },
  {
    id: 13,
    name: "The Heart's Labyrinth",
    bgImage: "https://example.com/images/the-hearts-labyrinth-bg.jpg",
    logo: "https://example.com/images/the-hearts-labyrinth-logo.png",
    synopsis:
      "A romantic journey through the complexities of love and forgiveness.",
    detailedSypnosis:
      "Elena, a young artist, finds herself trapped in a maze of her own making, haunted by past choices. 'The Heart's Labyrinth' explores Elena's journey towards self-discovery, love, and the power of forgiveness in the scenic backdrop of southern France.",
    duration: "1h 40min",
    directors: ["Isabel Coixet"],
    releaseDate: "2024-02-14",
    categories: [2], // 2: Romance
    starring: ["Penélope Cruz", "Antonio Banderas"],
    rating: "PG",
  },
  {
    id: 14,
    name: "Shadows of Tomorrow",
    bgImage: "https://example.com/images/shadows-of-tomorrow-bg.jpg",
    logo: "https://example.com/images/shadows-of-tomorrow-logo.png",
    synopsis:
      "In a world on the brink, a group of rebels fights to reclaim the future.",
    detailedSypnosis:
      "Set in a dystopian future where society is on the verge of collapse, 'Shadows of Tomorrow' follows a band of rebels as they undertake a dangerous mission to overthrow a tyrannical regime and restore hope to a broken world.",
    duration: "2h",
    directors: ["Lena Dunham"],
    releaseDate: "2025-07-04",
    categories: [5, 1], // 5: Action, 1: Sci-Fi
    starring: ["John Boyega", "Daisy Ridley"],
    rating: "PG-13",
  },
  {
    id: 15,
    name: "Whispers of the Past",
    bgImage: "https://example.com/images/whispers-of-the-past-bg.jpg",
    logo: "https://example.com/images/whispers-of-the-past-logo.png",
    synopsis:
      "A haunting tale of a family's secret history and the spirits that guard it.",
    detailedSypnosis:
      "When Sarah inherits her grandmother's old mansion, she discovers that it's haunted by spirits with unfinished business. 'Whispers of the Past' is a chilling story of family secrets, hauntings, and the quest for closure.",
    duration: "1h 55min",
    directors: ["Guillermo Del Toro"],
    releaseDate: "2023-10-13",
    categories: [1, 3], // 1: Horror, 3: Drama
    starring: ["Nicole Kidman", "Ewan McGregor"],
    rating: "R",
  },
  {
    id: 16,
    name: "Rise of the Phoenix",
    bgImage: "https://example.com/images/rise-of-the-phoenix-bg.jpg",
    logo: "https://example.com/images/rise-of-the-phoenix-logo.png",
    synopsis:
      "A mythical warrior's quest to save their kingdom from eternal darkness.",
    detailedSypnosis:
      "In a land where darkness threatens to engulf all, a warrior blessed by the phoenix embarks on a perilous journey to find the lost artifacts that can save their kingdom. 'Rise of the Phoenix' combines mythology, action, and adventure in a tale of courage, loyalty, and the fight against overwhelming odds.",
    duration: "2h 10min",
    directors: ["Ava DuVernay"],
    releaseDate: "2025-08-18",
    categories: [5, 2], // 5: Action, 2: Fantasy
    starring: ["Michael B. Jordan", "Lupita Nyong'o"],
    rating: "PG-13",
  },
  {
    id: 17,
    name: "Echoes of Silence",
    bgImage: "https://example.com/images/echoes-of-silence-bg.jpg",
    logo: "https://example.com/images/echoes-of-silence-logo.png",
    synopsis:
      "A deep space mission uncovers an ancient mystery that could change humanity's understanding of the universe.",
    detailedSypnosis:
      "'Echoes of Silence' follows the crew of the spacecraft Artemis as they explore a distant and seemingly barren planet, only to discover signals that suggest they are not alone. What starts as a scientific mission quickly turns into a fight for survival and a quest for knowledge that could either be mankind's greatest discovery or its ultimate undoing.",
    duration: "2h",
    directors: ["Denis Villeneuve"],
    releaseDate: "2024-05-22",
    categories: [1, 4], // 1: Sci-Fi, 4: Mystery
    starring: ["Amy Adams", "Jeremy Renner"],
    rating: "PG-13",
  },
  {
    id: 18,
    name: "The Forgotten Kingdom",
    bgImage: "https://example.com/images/the-forgotten-kingdom-bg.jpg",
    logo: "https://example.com/images/the-forgotten-kingdom-logo.png",
    synopsis:
      "An epic journey to uncover the truth behind a lost kingdom and its last ruler.",
    detailedSypnosis:
      "When a young archaeologist discovers a clue to the location of a legendary lost kingdom, she embarks on an adventure that will take her across the world. Along the way, she faces challenges and discovers secrets that could rewrite history. 'The Forgotten Kingdom' is a thrilling tale of discovery, adventure, and the eternal quest for knowledge.",
    duration: "1h 55min",
    directors: ["Kathryn Bigelow"],
    releaseDate: "2023-12-10",
    categories: [4, 5], // 4: Adventure, 5: Historical
    starring: ["Natalie Portman", "Dev Patel"],
    rating: "PG",
  },
  {
    id: 19,
    name: "Labyrinth of Dreams",
    bgImage: "https://example.com/images/labyrinth-of-dreams-bg.jpg",
    logo: "https://example.com/images/labyrinth-of-dreams-logo.png",
    synopsis:
      "A mesmerizing journey through dreams that blurs the lines between reality and imagination.",
    detailedSypnosis:
      "In 'Labyrinth of Dreams', a young woman with the ability to navigate through dreams must use her powers to save her brother, who is trapped in a maze of nightmares. Her journey reveals secrets about her family and the mysterious power they possess. This visually stunning film explores themes of dreams, reality, and the power of the human mind.",
    duration: "2h 5min",
    directors: ["Guillermo del Toro"],
    releaseDate: "2024-07-07",
    categories: [3, 4], // 3: Fantasy, 4: Drama
    starring: ["Zoe Kravitz", "Tom Holland"],
    rating: "PG-13",
  },
  {
    id: 20,
    name: "Winds of Change",
    bgImage: "https://example.com/images/winds-of-change-bg.jpg",
    logo: "https://example.com/images/winds-of-change-logo.png",
    synopsis:
      "In a world ravaged by climate change, a group of survivors seeks to rebuild society.",
    detailedSypnosis:
      "Set in the near future, 'Winds of Change' follows a group of survivors after a series of devastating climate events have changed the face of the planet. Together, they embark on a journey to find a new home, facing challenges and discovering new alliances in their quest to rebuild what was lost.",
    duration: "2h 10min",
    directors: ["Chloe Zhao"],
    releaseDate: "2024-04-22",
    categories: [5, 2], // 5: Action, 2: Drama
    starring: ["Frances McDormand", "David Oyelowo"],
    rating: "PG-13",
  },
  {
    id: 21,
    name: "The Veil Between Worlds",
    bgImage: "https://example.com/images/the-veil-between-worlds-bg.jpg",
    logo: "https://example.com/images/the-veil-between-worlds-logo.png",
    synopsis:
      "A fantasy epic about the battle for power in a realm where magic and reality collide.",
    detailedSypnosis:
      "In a world where the veil between the magical and the mundane is thinning, two unlikely heroes must unite to stop a dark power from tearing their world apart. 'The Veil Between Worlds' is a tale of adventure, magic, and the power of unity in the face of darkness.",
    duration: "2h 30min",
    directors: ["Peter Jackson"],
    releaseDate: "2025-12-15",
    categories: [3, 4], // 3: Fantasy, 4: Adventure
    starring: ["Ian McKellen", "Cate Blanchett"],
    rating: "PG-13",
  },
  {
    id: 22,
    name: "Code of Silence",
    bgImage: "https://example.com/images/code-of-silence-bg.jpg",
    logo: "https://example.com/images/code-of-silence-logo.png",
    synopsis:
      "A gripping thriller about a whistleblower caught in a dangerous web of espionage.",
    detailedSypnosis:
      "When a government analyst uncovers a deadly secret, she becomes a target in a high-stakes game of espionage. 'Code of Silence' is a suspenseful journey into the world of intelligence and the price of truth.",
    duration: "1h 58min",
    directors: ["Kathryn Bigelow"],
    releaseDate: "2023-08-09",
    categories: [5, 1], // 5: Thriller, 1: Drama
    starring: ["Jessica Chastain", "Tom Hardy"],
    rating: "R",
  },
  {
    id: 23,
    name: "Lost in Time",
    bgImage: "https://example.com/images/lost-in-time-bg.jpg",
    logo: "https://example.com/images/lost-in-time-logo.png",
    synopsis:
      "A time-traveler's quest to prevent a catastrophic future and find his way back home.",
    detailedSypnosis:
      "An accidental time-traveler from 2050 finds himself stranded in the 21st century. To return home, he must navigate the complexities of the past while preventing a future disaster. 'Lost in Time' is a thrilling adventure across time, exploring the impact of our choices on the future.",
    duration: "2h 20min",
    directors: ["Christopher Nolan"],
    releaseDate: "2024-11-05",
    categories: [1, 4], // 1: Sci-Fi, 4: Adventure
    starring: ["Matthew McConaughey", "Anne Hathaway"],
    rating: "PG-13",
  },
  {
    id: 24,
    name: "The Silent Guardian",
    bgImage: "https://example.com/images/the-silent-guardian-bg.jpg",
    logo: "https://example.com/images/the-silent-guardian-logo.png",
    synopsis:
      "A solitary protector of an ancient forest battles against dark forces threatening the natural world.",
    detailedSypnosis:
      "In the heart of an untouched forest, a mysterious guardian with the power to communicate with nature fights to protect it from the encroaching darkness of industrial expansion. 'The Silent Guardian' is a visually stunning tale that explores the deep connection between humans and the natural world, and the lengths one will go to preserve it.",
    duration: "1h 45min",
    directors: ["Hayao Miyazaki"],
    releaseDate: "2025-06-15",
    categories: [3, 4], // 3: Anime, 4: Fantasy
    starring: ["Voice of: Ken Watanabe", "Voice of: Rinko Kikuchi"],
    rating: "PG",
  },
  {
    id: 25,
    name: "Under the Neon Lights",
    bgImage: "https://example.com/images/under-the-neon-lights-bg.jpg",
    logo: "https://example.com/images/under-the-neon-lights-logo.png",
    synopsis:
      "A gritty tale of ambition and survival on the neon-lit streets of a futuristic metropolis.",
    detailedSypnosis:
      "Set in a dazzling yet dangerous future city, 'Under the Neon Lights' follows the intertwined lives of three individuals striving to achieve their dreams amidst the chaos of the urban landscape. This neon-noir saga delves into themes of ambition, identity, and survival in a world where everything has a price.",
    duration: "2h 5min",
    directors: ["Denis Villeneuve"],
    releaseDate: "2024-10-27",
    categories: [1, 5], // 1: Sci-Fi, 5: Drama
    starring: ["Mahershala Ali", "Zoe Kravitz"],
    rating: "R",
  },
  {
    id: 26,
    name: "The Last Symphony",
    bgImage: "https://example.com/images/the-last-symphony-bg.jpg",
    logo: "https://example.com/images/the-last-symphony-logo.png",
    synopsis:
      "A renowned composer's final masterpiece becomes the key to unraveling a historical mystery.",
    detailedSypnosis:
      "In 'The Last Symphony', a young musicologist discovers an unpublished score by a famous composer that hints at a centuries-old secret. Her quest to perform this last symphony takes her on a journey through history, art, and the power of music to connect the past with the present.",
    duration: "2h 20min",
    directors: ["Joe Wright"],
    releaseDate: "2023-12-25",
    categories: [2, 4], // 2: Historical, 4: Drama
    starring: ["Keira Knightley", "Jude Law"],
    rating: "PG-13",
  },
  {
    id: 27,
    name: "Shadows Over Eden",
    bgImage: "https://example.com/images/shadows-over-eden-bg.jpg",
    logo: "https://example.com/images/shadows-over-eden-logo.png",
    synopsis:
      "An interstellar expedition to Eden, humanity’s hopeful new home, uncovers a dark secret.",
    detailedSypnosis:
      "'Shadows Over Eden' explores the journey of the first human mission to Eden, a planet that promises a new beginning for humanity. However, as the crew unravels the planet’s mysteries, they encounter a threat that challenges their understanding of life itself, leading to a dramatic fight for survival.",
    duration: "2h 30min",
    directors: ["Ridley Scott"],
    releaseDate: "2025-03-30",
    categories: [1, 5], // 1: Sci-Fi, 5: Thriller
    starring: ["Sigourney Weaver", "Tom Hardy"],
    rating: "PG-13",
  },
  {
    id: 28,
    name: "The Clockmaker's Dream",
    bgImage: "https://example.com/images/the-clockmakers-dream-bg.jpg",
    logo: "https://example.com/images/the-clockmakers-dream-logo.png",
    synopsis:
      "In a world governed by time, a clockmaker discovers the secret to eternal life.",
    detailedSypnosis:
      "A reclusive clockmaker in a steampunk universe embarks on a quest to build a machine that manipulates time, only to find himself pursued by forces that seek to control his invention. 'The Clockmaker's Dream' is a tale of invention, obsession, and the timeless quest for immortality, blending elements of fantasy, adventure, and science fiction.",
    duration: "1h 55min",
    directors: ["Guillermo del Toro"],
    releaseDate: "2025-02-28",
    categories: [3, 1], // 3: Fantasy, 1: Sci-Fi
    starring: ["Ben Kingsley", "Cate Blanchett"],
    rating: "PG",
  },
  {
    id: 29,
    name: "Beyond the Abyss",
    bgImage: "https://example.com/images/beyond-the-abyss-bg.jpg",
    logo: "https://example.com/images/beyond-the-abyss-logo.png",
    synopsis:
      "A deep-sea adventure into the unknown to uncover the secrets lying beneath the ocean's depths.",
    detailedSypnosis:
      "An intrepid team of researchers and submariners venture into the Mariana Trench, the deepest part of the world's oceans, in search of an ancient civilization believed to lie dormant in the abyss. 'Beyond the Abyss' combines the thrill of discovery with the terror of the unknown, as the team faces not just the dangers of the deep, but also the possibility that they are not alone.",
    duration: "2h 15min",
    directors: ["James Cameron"],
    releaseDate: "2025-07-17",
    categories: [4, 5], // 4: Adventure, 5: Mystery
    starring: ["Kate Winslet", "Sam Worthington"],
    rating: "PG-13",
  },
  {
    id: 30,
    name: "The Last Painter",
    bgImage: "https://example.com/images/the-last-painter-bg.jpg",
    logo: "https://example.com/images/the-last-painter-logo.png",
    synopsis:
      "In a future where art is banned, the last remaining painter must use his creations to inspire a revolution.",
    detailedSypnosis:
      "Set in a dystopian future where all forms of art have been outlawed, 'The Last Painter' tells the story of an elderly painter who defies the authoritarian regime by creating revolutionary works in secret. His art becomes a beacon of hope and resistance, inspiring a movement that seeks to restore beauty and freedom to a world stripped of color and imagination.",
    duration: "2h",
    directors: ["Alfonso Cuarón"],
    releaseDate: "2026-01-05",
    categories: [2, 5], // 2: Drama, 5: Sci-Fi
    starring: ["Gael García Bernal", "Alicia Vikander"],
    rating: "PG-13",
  },
  {
    id: 31,
    name: "The Gardener's Secret",
    bgImage: "https://example.com/images/the-gardeners-secret-bg.jpg",
    logo: "https://example.com/images/the-gardeners-secret-logo.png",
    synopsis:
      "A heartwarming story of a mysterious gardener whose magical touch brings a dying garden back to life, revealing the power of kindness and the beauty of nature.",
    detailedSypnosis:
      "In a quaint little town on the brink of losing hope, a mysterious gardener arrives and begins to work on the town's neglected garden. As the garden blooms like never before, the townsfolk start to witness miraculous changes in their lives. 'The Gardener's Secret' is a touching tale that celebrates the unsung heroes among us and the profound impact of small acts of kindness.",
    duration: "1h 45min",
    directors: ["Greta Gerwig"],
    releaseDate: "2024-04-22",
    categories: [2, 3], // 2: Drama, 3: Fantasy
    starring: ["Tom Hanks", "Meryl Streep"],
    rating: "PG",
  },
  {
    id: 32,
    name: "Dance of the Fireflies",
    bgImage: "https://example.com/images/dance-of-the-fireflies-bg.jpg",
    logo: "https://example.com/images/dance-of-the-fireflies-logo.png",
    synopsis:
      "In a world where fireflies symbolize lost souls, a young girl embarks on a journey to bring light back to a land engulfed in darkness.",
    detailedSypnosis:
      "After the land of Lumina falls into eternal night, a young girl named Elara discovers she can communicate with fireflies – the lost souls of the forest. With the help of an ancient spirit, she embarks on a quest to restore the light and uncover the mysteries of her past. 'Dance of the Fireflies' is a captivating tale of hope, bravery, and the unbreakable bond between the light and darkness.",
    duration: "2 hours",
    directors: ["Makoto Shinkai"],
    releaseDate: "2025-07-07",
    categories: [3, 4], // 3: Anime, 4: Fantasy
    starring: ["Voice of: Aoi Miyazaki", "Voice of: Haruma Miura"],
    rating: "PG",
  },
];
