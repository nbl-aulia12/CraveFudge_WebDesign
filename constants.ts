
import { Cookie, PastTheme } from './types';

export const COOKIES: Cookie[] = [
  // ===== Batch #1 =====
  {
    id: 'cf-b1-1',
    name: 'Mummy',
    description: 'Cookies cokelat lembut dengan drizzle putih menyerupai balutan mumi.',
    price: 20000,
    category: 'Batch #1',
    tags: ['Best Seller'],
    image: "picture/Cookie1 (1).jpeg"
  },
  {
    id: 'cf-b1-2',
    name: 'Monster Party',
    description: 'Cookies cokelat dengan taburan cokelat warna-warni dan mata monster yang playful.',
    price: 18000,
    category: 'Batch #1',
    tags: ['Crunchy'],
    image: "picture/Cookie1 (2).jpeg"
  },
  {
    id: 'cf-b1-3',
    name: 'Wicked Trio',
    description: 'Cookies tiga warna dengan karakter wajah unik dan rasa yang bold.',
    price: 14000,
    category: 'Batch #1',
    tags: ['Crunchy'],
    image: "picture/Cookie1 (3).jpeg"
  },
  {
    id: 'cf-b1-4',
    name: 'Haunted',
    description: 'Cookies dengan topping marshmallow lembut di atas base cookies cokelat.',
    price: 18000,
    category: 'Batch #1',
    tags: ['Marshmallow'],
    image: "picture/Cookie1 (4).jpeg"
  },

  // ===== Batch #2 =====
  {
    id: 'cf-b2-1',
    name: 'Spooky Love',
    description: 'Cookies cokelat klasik dengan swirl cream cheese dan sentuhan Oreo cream cheese frosting.',
    price: 23000,
    category: 'Batch #2',
    tags: ['Creamy'],
    image: "picture/Cookie2 (1).jpeg"
  },
  {
    id: 'cf-b2-2',
    name: 'Oopsie Snowman',
    description: 'Cookies OG lembut dengan isian karamel dan chocolate fudge yang rich.',
    price: 23000,
    category: 'Batch #2',
    tags: ['Caramel'],
    image: "picture/Cookie2 (2).jpeg"
  },
  {
    id: 'cf-b2-3',
    name: 'Marsh Buddy',
    description: 'Cookies cokelat dengan topping cream cheese halus dan marshmallow fluffy.',
    price: 20500,
    category: 'Batch #2',
    tags: ['Marshmallow'],
    image: "picture/Cookie2 (3).jpeg"
  },
  {
    id: 'cf-b2-4',
    name: 'Winter Potion',
    description: 'Adonan cookies Oreo dengan white chocolate chips di setiap gigitan.',
    price: 18000,
    category: 'Batch #2',
    tags: ['Oreo'],
    image: "picture/Cookie2 (4).jpeg"
  },
];

export const PAST_THEMES: PastTheme[] = [
  {
    id: 'batch-1',
    title: "Chapter 1: The Witch's Kitchen",
    year: "Batch #1",
    icon: "🔮",
    description: "Tema perdana yang membawa suasana dapur penyihir ke tengah kota.",
    fullStory: "Di Chapter 1, CraveFudge bertransformasi menjadi laboratorium alkimia. Kami menceritakan kisah koki penyihir yang meracik ramuan cokelat rahasia yang hanya bisa ditemukan saat bulan purnama.",
    attraction: "Atraksi meracik ramuan: Pembeli diajak menuangkan 'liquid magic' (topping saus cokelat khusus) ke atas cookie mereka sendiri untuk melengkapi ritual kelezatan.",
    images: [
      "picture/Batch1 (1).jpeg", // Mocking based on provided images
      "picture/Batch1 (2).jpeg",
      "picture/Batch1 (3).jpeg",
      "picture/Batch1 (4).jpeg",
      "picture/Batch1 (5).jpeg"
    ],
    cookies: [
      { id: 'b1-1', name: 'Mummy', description: 'Cookies cokelat lembut dengan drizzle putih menyerupai balutan mumi.', price: 20000, category: 'Chapter 1', tags: ['Magic'] },
      { id: 'b1-2', name: 'Monster Party', description: 'Cookies cokelat dengan taburan cokelat warna-warni dan mata monster yang playful.', price: 18000, category: 'Chapter 1', tags: ['Crunchy'] },
      { id: 'b1-3', name: 'Wicked Trio', description: 'Cookies tiga warna dengan karakter wajah unik dan rasa yang bold.', price: 14000, category: 'Chapter 1', tags: ['Crunchy'] },
      { id: 'b1-4', name: 'Haunted', description: 'Cookies dengan topping marshmallow lembut di atas base cookies cokelat.', price: 18000, category: 'Chapter 1', tags: ['Crunchy'] },
    ]
  },
  {
    id: 'batch-2',
    title: "Chapter 2: The Deep Dungeon",
    year: "Batch #2",
    icon: "🏰",
    description: "Petualangan mengumpulkan cookies di tengah kemeriahan event kampus.",
    fullStory: "Chapter 2 membawa petualangan ke dalam labirin event yang dinamis. Bertempat di Atrium kampus (Binus University), kami menyulap booth nomor 22 menjadi pintu masuk 'Deep Dungeon' di mana setiap pengunjung adalah penjelajah.",
    attraction: "Atraksi 'Cookies Pairing Challenge': Pengunjung ditantang untuk menemukan pasangan rasa yang tepat melalui mini-game di booth. Selain itu, kami memperkenalkan 'Mystery Box' bertingkat yang menambah keseruan saat unboxing.",
    images: [
      "picture/Batch2 (1).jpeg", // Mocking based on provided images
      "picture/Batch2 (2).jpeg",
      "picture/Batch2 (3).jpeg",
      "picture/Batch2 (4).jpeg",
      "picture/Batch2 (5).jpeg"
    ],
    cookies: [
      { id: 'b2-1', name: 'Spooky Love', description: 'Cookies cokelat klasik dengan swirl cream cheese dan sentuhan Oreo cream cheese frosting.', price: 23000, category: 'Chapter 2', tags: ['Adventurer'] },
      { id: 'b2-2', name: 'Oopsie Snowman', description: 'Cookies OG yang lembut dengan isian karamel dan chocolate fudge yang rich.', price: 23000, category: 'Chapter 2', tags: ['Spiced'] },
      { id: 'b2-3', name: 'Marsh Buddy', description: 'Cookies cokelat dengan topping cream cheese yang halus dan lingkaran marshmallow fluffy.', price: 20500, category: 'Chapter 2', tags: ['Package'] },
      { id: 'b2-4', name: 'Winter Potion', description: 'Adonan cookies Oreo dengan white chocolate chips di setiap gigitan.', price: 18000, category: 'Chapter 2', tags: ['Package'] },
    ]
  }
];
