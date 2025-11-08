export async function getMenuData() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    categories: [
      { id: '1', name: 'Pizza', slug: 'pizza', count: 12 },
      { id: '2', name: 'Burger', slug: 'burger', count: 12 },
      { id: '3', name: 'Chowmein', slug: 'chowmein', count: 12 },
      { id: '4', name: 'Starters', slug: 'starters', count: 8 },
      { id: '5', name: 'South Indian', slug: 'south-indian', count: 15 },
      { id: '6', name: 'North Indian', slug: 'north-indian', count: 10 },
      { id: '7', name: 'Biryani & Rice', slug: 'biryani-rice', count: 12 },
      { id: '8', name: 'Indian Curries', slug: 'indian-curries', count: 12 },
      { id: '9', name: 'Chinese', slug: 'chinese', count: 9 },
      { id: '10', name: 'Wraps & Rolls', slug: 'wraps-rolls', count: 12 },
      { id: '11', name: 'Snacks & Chaats', slug: 'snacks-chaats', count: 12 },
      { id: '12', name: 'Healthy & Detox', slug: 'healthy-detox', count: 12 },
      { id: '13', name: 'Desserts', slug: 'desserts', count: 7 },
      { id: '14', name: 'Beverages', slug: 'beverages', count: 6 },
    ],
    menuItems: [

      // Pizza
      {
        id: '1',
        name: 'Margherita Pizza',
        category: 'pizza',
        price: 299,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
        description: 'Classic cheese pizza with tomato sauce',
        isVeg: true
      },
      { id: '2', name: 'Pepperoni Pizza', category: 'pizza', price: 399, rating: 4.7, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop', description: 'Loaded with spicy pepperoni', isVeg: false },
      { id: '3', name: 'Veggie Supreme', category: 'pizza', price: 349, rating: 4.3, image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400&h=300&fit=crop', description: 'Fresh vegetables with cheese', isVeg: true },
      {
        id: 5,
        name: 'Farmhouse Pizza',
        category: 'pizza',
        price: 299,
        rating: 3.2,
        image: 'https://images.unsplash.com/photo-1601924579440-c2dc6dcb3ef0?w=800',
        description: 'Loaded with onions, capsicum, tomato & mushrooms.',
        isVeg: true
      },
      {
        id: 6,
        name: 'Paneer Tikka Pizza',
        category: 'pizza',
        price: 279,
        rating: 3.2,
        image: 'https://images.unsplash.com/photo-1628840042765-356f44d35c7e?w=800',
        description: 'Smoky paneer tikka chunks with Indian spices.',
        isVeg: true
      },

      // Burgers
      { id: '101', name: 'Veggie Burger', category: 'burger', price: 159, rating: 4.4, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', description: 'Crispy vegetable patty with lettuce, tomato, and cheese', isVeg: true },
      { id: '102', name: 'Paneer Tikka Burger', category: 'burger', price: 189, rating: 4.7, image: 'https://images.unsplash.com/photo-1618213837799-3376f1e2a8f4?w=400&h=300&fit=crop', description: 'Grilled paneer tikka in soft buns with mint mayo', isVeg: true },
      { id: '103', name: 'Aloo Tikki Burger', category: 'burger', price: 139, rating: 4.3, image: 'https://images.unsplash.com/photo-1618213957993-3a9f7a9a7e1a?w=400&h=300&fit=crop', description: 'Classic Indian burger with spiced potato patty', isVeg: true },
      { id: '104', name: 'Cheese Burst Burger', category: 'burger', price: 179, rating: 4.6, image: 'https://images.unsplash.com/photo-1618213932768-8f2f8d6c7f84?w=400&h=300&fit=crop', description: 'Juicy burger with molten cheese filling and crispy edges', isVeg: true },

      // Chowmein
      { id: '105', name: 'Veg Hakka Chowmein', category: 'chowmein', price: 160, rating: 4.5, image: 'https://images.unsplash.com/photo-1601050690597-8c9021d3f2a2?w=400&h=300&fit=crop', description: 'Wok-tossed noodles with veggies and soy sauce', isVeg: true },
      { id: '106', name: 'Schezwan Chowmein', category: 'chowmein', price: 170, rating: 4.6, image: 'https://images.unsplash.com/photo-1601050692840-3793f8cb1992?w=400&h=300&fit=crop', description: 'Spicy noodles tossed in Schezwan sauce and vegetables', isVeg: true },
      { id: '107', name: 'Chilli Garlic Noodles', category: 'chowmein', price: 165, rating: 4.4, image: 'https://images.unsplash.com/photo-1604909053194-89f0f056d8c3?w=400&h=300&fit=crop', description: 'Garlicky noodles with bell peppers and spring onions', isVeg: true },
      { id: '108', name: 'Paneer Chowmein', category: 'chowmein', price: 180, rating: 4.7, image: 'https://images.unsplash.com/photo-1604147706283-d8d6e98c5031?w=400&h=300&fit=crop', description: 'Soft paneer cubes stir-fried with noodles and veggies', isVeg: true },


      // Starters
      { id: '4', name: 'Paneer Tikka', category: 'starters', price: 249, rating: 4.6, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop', description: 'Grilled cottage cheese with spices', isVeg: true },
      {
        id: 9,
        name: 'Veg Manchurian',
        category: 'starters',
        price: 210,
        rating: 2.3,
        image: 'https://images.unsplash.com/photo-1617196036554-d3cd203b02f8?w=800',
        description: 'Crispy fried veggie balls tossed in tangy sauce.',
        isVeg: true
      },
      {
        id: 10,
        name: 'Crispy Corn',
        category: 'starters',
        price: 160,
        rating: 2.3,
        image: 'https://images.unsplash.com/photo-1625944230948-cf05cc3c70b5?w=800',
        description: 'Golden fried sweet corn tossed with pepper and herbs.',
        isVeg: true
      },
      {
        id: 19,
        name: "Hara Bhara Kebab",
        price: 189,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1667733937071-62d2779bcd41?w=400",
        description: "Healthy spinach and green pea patties shallow fried to perfection",
        isVeg: true
      },
      {
        id: 20,
        name: "Cheese Balls",
        price: 199,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1625944525935-d8c5d7e2c035?w=400",
        description: "Crispy cheese-stuffed balls served with tangy dip — a cheesy delight",
        isVeg: true
      },
      {
        id: 21,
        name: "Tandoori Mushroom",
        price: 229,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1641746972245-bb22e970742f?w=400",
        description: "Button mushrooms marinated in spiced yogurt and grilled in a clay oven",
        isVeg: true
      },

      // South Indian
      { id: '7', name: 'Masala Dosa', category: 'south-indian', price: 149, rating: 4.7, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop', description: 'Crispy dosa with potato filling', isVeg: true },
      { id: '8', name: 'Idli Sambar', category: 'south-indian', price: 99, rating: 4.5, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop', description: 'Steamed rice cakes with sambar', isVeg: true },
      { id: '9', name: 'Uttapam', category: 'south-indian', price: 129, rating: 4.4, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop', description: 'Thick rice pancake with toppings', isVeg: true },
      { id: '9', name: 'Medu Vada', category: 'south-indian', price: 119, rating: 4.4, image: 'https://images.unsplash.com/photo-1617026061346-8a5b3bdfcff9?w=400', description: 'Crispy lentil doughnuts served with coconut chutney & sambar', isVeg: true },
      { id: '9', name: 'Ven Pongal', category: 'south-indian', price: 129, rating: 4.6, image: 'https://images.unsplash.com/photo-1626082927389-9a476f56b6a9?w=400', description: 'Comforting South Indian dish made of rice & moong dal, tempered with ghee & pepper', isVeg: true },
      { id: '9', name: 'Rava Kesari', category: 'south-indian', price: 99, rating: 4.3, image: 'https://images.unsplash.com/photo-1617191519105-41e64778a639?w=400', description: 'Sweet semolina pudding flavored with saffron & cardamom', isVeg: true },

      // North Indian
      { id: '11', name: 'Paneer Butter Masala', category: 'north-indian', price: 299, rating: 4.6, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop', description: 'Rich cottage cheese curry', isVeg: true },
      { id: '12', name: 'Dal Makhani', category: 'north-indian', price: 249, rating: 4.5, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop', description: 'Creamy black lentil curry', isVeg: true },
      { id: '109', name: 'Dal Tadka', category: 'north-indian', price: 180, rating: 4.5, image: 'https://images.unsplash.com/photo-1603899139861-8b8c6e8d6b6a?w=400&h=300&fit=crop', description: 'Yellow lentils tempered with ghee, garlic, and cumin', isVeg: true },
      { id: '110', name: 'Chole Bhature', category: 'north-indian', price: 190, rating: 4.6, image: 'https://images.unsplash.com/photo-1636107961754-1d91c3e8b4c2?w=400&h=300&fit=crop', description: 'Chickpeas cooked in spicy onion-tomato gravy', isVeg: true },
      { id: '111', name: 'Rajma Chawal', category: 'north-indian', price: 210, rating: 4.7, image: 'https://images.unsplash.com/photo-1636107961961-8a9f0a8575bb?w=400&h=300&fit=crop', description: 'Red kidney beans curry served with steamed rice', isVeg: true },
      { id: '112', name: 'Kadai Paneer', category: 'north-indian', price: 240, rating: 4.8, image: 'https://images.unsplash.com/photo-1626773722334-b0c993c3efb8?w=400&h=300&fit=crop', description: 'Paneer cooked with capsicum, onions & special masala', isVeg: true },

      //  Biryani & Rice
      {
        id: 1,
        name: 'Hyderabadi Biryani',
        category: 'biryani-rice',
        price: 220,
        rating: 4.3,
        image: 'https://images.unsplash.com/photo-1598514982924-9c3f40b6e153?w=800',
        description: 'Fragrant basmati rice cooked with mixed vegetables and spices.',
        isVeg: true
      },
      {
        id: 2,
        name: 'Paneer Biryani',
        category: 'biryani-rice',
        price: 250,
        rating: 4.3,
        image: 'https://images.unsplash.com/photo-1589307000291-dc1b0bbf1bbd?w=800',
        description: 'Soft paneer cubes layered with aromatic rice and herbs.',
        isVeg: true
      },
      {
        id: 3,
        name: 'Fried Rice',
        category: 'biryani-rice',
        price: 180,
        rating: 4.3,
        image: 'https://images.unsplash.com/photo-1625944230948-cf05cc3c70b5?w=800',
        description: 'Classic Indo-Chinese style fried rice with fresh veggies.',
        isVeg: true
      },
      {
        id: 4,
        name: 'Jeera Rice',
        category: 'biryani-rice',
        price: 150,
        rating: 4.3,
        image: 'https://images.unsplash.com/photo-1617196036554-d3cd203b02f8?w=800',
        description: 'Simple and aromatic cumin-flavored basmati rice.',
        isVeg: true
      },
      {
        id: 4,
        name: 'Veg Pulao',
        category: 'biryani-rice',
        price: 179,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
        description: "Fragrant basmati rice cooked with seasonal veggies and mild spices",
        isVeg: true
      },
      {
        id: 4,
        name: 'Curd Rice',
        category: 'biryani-rice',
        price: 159,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1626132647523-66f2f97b275d?w=400',
        description: 'South Indian-style rice mixed with creamy curd and tempered with mustard seeds',
        isVeg: true
      },

      // Indian Curries
      {
        id: 14,
        name: 'Paneer Butter Masala',
        category: 'indian-curries',
        price: 240,
        rating: 2.2,
        image: 'https://images.unsplash.com/photo-1636107961961-8a9f0a8575bb?w=800',
        description: 'Creamy tomato-based curry with tender paneer cubes.',
        isVeg: true
      },
      {
        id: 14,
        name: 'Shahi Paneer',
        category: 'indian-curries',
        price: 249,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1603899122778-e0a6efb73a3e?w=400",
        description: 'Royal Mughlai curry with paneer cubes cooked in creamy cashew gravy',
        isVeg: true
      },
      {
        id: 14,
        name: 'Shahi Paneer',
        category: 'indian-curries',
        price: 249,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1603899122778-e0a6efb73a3e?w=400",
        description: 'Royal Mughlai curry with paneer cubes cooked in creamy cashew gravy',
        isVeg: true
      },
      {
        id: 14,
        name: "Palak Vegetable",
        category: 'indian-curries',
        price: 249,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1603899122778-e0a6efb73a3e?w=400",
        description: "Royal Mughlai curry with paneer cubes cooked in creamy cashew gravy",
        isVeg: true
      },
      {
        id: 14,
        name: "Malai Kofta",
        category: 'indian-curries',
        price: 259,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1668236543095-cd2d4ef4ab2c?w=400",
        description: "Soft paneer and potato dumplings served in a rich creamy cashew gravy",
        isVeg: true
      },


      // Chinese
      { id: '13', name: 'Hakka Noodles', category: 'chinese', price: 199, rating: 4.4, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop', description: 'Stir-fried noodles with vegetables', isVeg: true },
      {
        name: "Schezwan Fried Rice",
        category: 'chinese',
        price: 179,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1607114588685-8c2e4e647d2d?w=400",
        description: "Spicy rice tossed with Schezwan sauce & fresh vegetables.",
        isVeg: true
      },
      {
        name: "Chilli Paneer Dry",
        category: 'chinese',
        price: 209,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1601050690597-4d5b2c748a6c?w=400",
        description: "Paneer cubes tossed with onions, capsicum, and spicy soy sauce.",
        isVeg: true
      },
      {
        name: "Spring Rolls",
        category: 'chinese',
        price: 159,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1608039755401-4a4f04e2e3a7?w=400",
        description: "Crispy golden rolls filled with spiced vegetables.",
        isVeg: true
      },
      {
        name: "Veg Momos (Steamed)",
        category: 'chinese',
        price: 149,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1606755962773-0a0a1e3b81ad?w=400",
        description: "Soft dumplings stuffed with spiced veggies, served with chilli sauce.",
        isVeg: true
      },

      // Wraps & Rolls
      {
        id: 29,
        name: 'Paneer Kathi Roll',
        category: 'wraps-rolls',
        price: 160,
        rating: 1.2,
        image: 'https://images.unsplash.com/photo-1627653522330-4f8dd544dc76?w=800',
        description: 'Grilled paneer with veggies wrapped in paratha.',
        isVeg: true
      },
      {
        id: 30,
        name: 'Veg Frankie',
        category: 'wraps-rolls',
        price: 140,
        rating: 1.2,
        image: 'https://images.unsplash.com/photo-1625944230948-cf05cc3c70b5?w=800',
        description: 'Tasty street-style wrap with spiced veg filling.',
        isVeg: true
      },
      {
        id: 31,
        name: 'Paneer Tikka Roll',
        category: 'wraps-rolls',
        price: 180,
        rating: 1.2,
        image: 'https://images.unsplash.com/photo-1636107961754-1d91c3e8b4c2?w=800',
        description: 'Paneer tikka rolled in buttered paratha.',
        isVeg: true
      },
      {
        id: 31,
        name: "Aloo Tikki Roll",
        category: 'wraps-rolls',
        price: 109,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1622445275644-d2064b07a79a?w=400",
        description: "Crispy spiced potato tikki wrapped with lettuce and chutneys.",
        isVeg: true
      },
      {
        id: 31,
        name: "Paneer Schezwan Roll",
        category: 'wraps-rolls',
        price: 159,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400",
        description: "Paneer tossed in spicy Schezwan sauce wrapped with veggies in paratha.",
        isVeg: true
      },
      {
        id: 31,
        name: "Mushroom Masala Roll",
        category: 'wraps-rolls',
        price: 139,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1603030922281-1c62e3f4b24b?w=400",
        description: "Juicy mushrooms in spicy masala wrapped with onions and mint sauce.",
        isVeg: true
      },

      // 🍴 Snacks & Chaats
      {
        id: 20,
        name: 'Pani Puri',
        category: 'snacks-chaats',
        price: 70,
        image: 'https://images.unsplash.com/photo-1627653522330-4f8dd544dc76?w=800',
        description: 'Crispy puris filled with spicy tangy water.',
        isVeg: true
      },
      {
        id: 21,
        name: 'Bhel Puri',
        category: 'snacks-chaats',
        price: 80,
        image: 'https://images.unsplash.com/photo-1617196036554-d3cd203b02f8?w=800',
        description: 'Puffed rice tossed with chutneys and sev.',
        isVeg: true
      },
      {
        id: 22,
        name: 'Aloo Tikki Chaat',
        category: 'snacks-chaats',
        price: 110,
        image: 'https://images.unsplash.com/photo-1625944230948-cf05cc3c70b5?w=800',
        description: 'Crispy potato patties served with chutneys and curd.',
        isVeg: true
      },
      {
        id: 22,
        name: "Sev Puri",
        category: 'snacks-chaats',
        price: 89,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1634728388885-0b37761e33a4?w=400",
        description: "Crispy puris layered with potatoes, chutneys & topped with sev.",
        isVeg: true
      },
      {
        id: 22,
        name: "Dahi Puri",
        category: 'snacks-chaats',
        price: 99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1593629714320-d4df9b91c4a5?w=400",
        description: "Crispy puris filled with potatoes, curd, and sweet chutneys — a cooling delight!",
        isVeg: true
      },
      {
        id: 22,
        name: "Samosa Chaat",
        category: 'snacks-chaats',
        price: 109,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1652906703484-b47e1cc39863?w=400",
        description: "Crumbled samosas topped with curd, chutneys & tangy spices — the perfect snack-time dish.",
        isVeg: true
      },

      // 🥗 Healthy & Detox
      {
        id: 26,
        name: 'Quinoa Salad',
        category: 'healthy-detox',
        price: 220,
        image: 'https://images.unsplash.com/photo-1572441710534-680b5c4b9a08?w=800',
        description: 'Protein-rich quinoa salad with fresh greens.',
        isVeg: true
      },
      {
        id: 27,
        name: 'Detox Green Smoothie',
        category: 'healthy-detox',
        price: 180,
        image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800',
        description: 'Blend of spinach, apple, and chia seeds.',
        isVeg: true
      },
      {
        id: 28,
        name: 'Fruit Bowl',
        category: 'healthy-detox',
        price: 150,
        image: 'https://images.unsplash.com/photo-1627653522330-4f8dd544dc76?w=800',
        description: 'Assorted seasonal fruits served fresh.',
        isVeg: true
      },
      {
        id: 28,
        name: "Avocado Toast",
        category: 'healthy-detox',
        price: 189,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1e0c2?w=400",
        description: "Whole-grain toast topped with smashed avocado, lemon juice & chili flakes.",
        isVeg: true
      },
      {
        id: 28,
        name: "Sprout Salad",
        category: 'healthy-detox',
        price: 149,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1627308595189-ff0e5c74a3e3?w=400",
        description: "A crunchy mix of moong sprouts, cucumber, tomato, and tangy lemon dressing.",
        isVeg: true
      },
      {
        id: 28,
        name: "Protein Smoothie Bowl",
        category: 'healthy-detox',
        price: 229,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1604908177074-4d8d59a7f4e0?w=400",
        description: "Banana, oats, peanut butter & almond milk blended to perfection — rich in protein.",
        isVeg: true
      },

      // Desserts
      { id: '15', name: 'Gulab Jamun', category: 'desserts', price: 99, rating: 4.7, image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop', description: 'Sweet milk solid balls in syrup', isVeg: true },
      { id: '16', name: 'Chocolate Brownie', category: 'desserts', price: 149, rating: 4.6, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop', description: 'Rich chocolate brownie with ice cream', isVeg: true },
      { id: '122', name: 'Rasgulla', category: 'desserts', price: 110, rating: 4.7, image: 'https://images.unsplash.com/photo-1617196036554-d3cd203b02f8?w=400&h=300&fit=crop', description: 'Spongy cheese balls dipped in light syrup', isVeg: true },
      { id: '124', name: 'Ice Cream Sundae', category: 'desserts', price: 160, rating: 4.6, image: 'https://images.unsplash.com/photo-1589712239890-26f9ef1e36aa?w=400&h=300&fit=crop', description: 'Vanilla and chocolate scoops topped with nuts', isVeg: true },
      {
        id: 28,
        name: "Rasmalai",
        category: 'desserts',
        price: 129,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&fit=crop",
        description: "Soft paneer discs soaked in creamy saffron milk.",
        isVeg: true
      }, {
        id: 28,
        name: "Kesar Pista Kulfi",
        category: 'desserts',
        price: 99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1604335399105-74bcae6f6a7f?w=400",
        description: "Rich Indian frozen dessert flavored with saffron and pistachio.",
        isVeg: true
      }, {
        id: 28,
        name: "Mango Mousse",
        category: 'desserts',
        price: 149,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1589307004394-8d1d8d11aa25?w=400",
        description: "Creamy and refreshing mango-flavored dessert mousse.",
        isVeg: true
      },

      // Beverages
      { id: '17', name: 'Mango Lassi', category: 'beverages', price: 79, rating: 4.5, image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop', description: 'Sweet mango yogurt drink', isVeg: true },
      { id: '127', name: 'Fresh Lime Soda', category: 'beverages', price: 80, rating: 4.6, image: 'https://images.unsplash.com/photo-1626266062286-5d26bdb7d8eb?w=400&h=300&fit=crop', description: 'Tangy and fizzy lime soda', isVeg: true },
      {
        id: 28,
        name: "Cold Coffee",
        category: 'beverages',
        description: "Chilled coffee with milk and ice cream on top.",
        image: "https://images.unsplash.com/photo-1590080875831-21d74b6ebdf8?w=400",
        basePrice: 129,
        rating: 4.9,
        isVeg: true
      },
      {
        id: 28,
        name: "Masala Chai",
        category: 'beverages',
        description: "Aromatic spiced Indian tea brewed with milk and cardamom.",
        image: "https://images.unsplash.com/photo-1615485290394-3da43c1f3f33?w=400",
        basePrice: 49,
        rating: 4.6,
        isVeg: true
      },
      {
        id: 28,
        name: "Iced Tea",
        category: 'beverages',
        description: "Chilled tea with lemon and mint, perfect for summer.",
        image: "https://images.unsplash.com/photo-1623066498264-f5c3b8a42e69?w=400",
        basePrice: 99,
        rating: 4.5,
        isVeg: true
      },
      {
        id: 28,
        category: 'beverages',
        name: "Buttermilk (Chaas)",
        description: "Refreshing yogurt-based drink with cumin and mint.",
        image: "https://images.unsplash.com/photo-1621768216002-5d842edc9c93?w=400",
        basePrice: 69,
        rating: 4.7,
        isVeg: true
      },
      {
        id: 28,
        category: 'beverages',
        name: "Tender Coconut Water",
        description: "Natural, hydrating coconut water served chilled.",
        image: "https://images.unsplash.com/photo-1615485290338-3da43c1f3f33?w=400",
        basePrice: 79,
        rating: 4.9,
        isVeg: true
      },
    ]
  };
}