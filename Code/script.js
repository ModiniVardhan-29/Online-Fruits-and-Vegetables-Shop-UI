/* ══════════════════════════════════════════
   FreshMart — script.js
   ══════════════════════════════════════════ */
console.log("JS WORKING");
/* ── PRODUCT DATA ── */
const P = [
  /* ════ FRUITS ════ */
  {id:1, name:'Red Apple', cat:'fruit', price:120, unit:'per kg', org:true,
   img:'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=480&q=80',
   desc:'Crisp, sweet Red Delicious apples from Himachal Pradesh. Rich in fiber, Vitamin C and antioxidants. Perfect for snacking, baking and juicing.',
   tags:['Vitamin C','Fiber','Antioxidants'], nut:{cal:'52kcal',carb:'14g',fib:'2.4g',sug:'10g'},
   rating:4.8, rev:312, freshness:'arrived', freshPct:95,
   healthTags:[{cls:'vitamin',icon:'🍊',lbl:'Rich in Vitamin C'},{cls:'fiber',icon:'🌾',lbl:'High Fiber'},{cls:'good-for',icon:'👴',lbl:'Good for Heart'}],
   storage:['Store in refrigerator for up to 4–6 weeks','Keep away from bananas (ethylene speeds ripening)','Wash just before eating, not before storing']},

  {id:2, name:'Banana', cat:'fruit', price:45, unit:'per dozen',
   img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=480&q=80',
   desc:'Fresh ripe bananas — the ultimate natural energy snack. High in potassium, natural sugars and Vitamin B6. Great for smoothies and baking.',
   tags:['Potassium','Energy','Vitamin B6'], nut:{cal:'89kcal',carb:'23g',fib:'2.6g',sug:'12g'},
   rating:4.7, rev:528, freshness:'arrived', freshPct:90,
   healthTags:[{cls:'vitamin',icon:'⚡',lbl:'Instant Energy'},{cls:'good-for',icon:'💪',lbl:'Good for Athletes'},{cls:'fiber',icon:'🌾',lbl:'High Potassium'}],
   storage:['Store at room temperature until ripe','Refrigerate once ripe — skin darkens but flesh stays good','Freeze peeled bananas for smoothies']},

  {id:3, name:'Alphonso Mango', cat:'fruit exotic', price:200, unit:'per kg', org:true, sale:true,
   img:'https://images.unsplash.com/photo-1553279768-865429fa0078?w=480&q=80',
   desc:'Premium Alphonso mangoes — the king of fruits from Ratnagiri. Unbelievably sweet, aromatic and packed with Vitamin A and C.',
   tags:['Vitamin A','Tropical','Seasonal'], nut:{cal:'60kcal',carb:'15g',fib:'1.6g',sug:'14g'},
   rating:4.9, rev:441, freshness:'expiring', freshPct:40,
   healthTags:[{cls:'vitamin',icon:'🌟',lbl:'Rich in Vitamin A'},{cls:'antioxidant',icon:'🛡️',lbl:'Antioxidant Rich'},{cls:'expiry',icon:'⏰',lbl:'Expiry: 2 Days'}],
   storage:['Ripen at room temperature','Once ripe, refrigerate and consume within 2–3 days','Do not freeze whole mangoes']},

  {id:4, name:'Strawberry', cat:'fruit', price:180, unit:'250g pack',
   img:'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=480&q=80',
   desc:'Juicy bright red strawberries from Mahabaleshwar. Perfect for desserts, smoothies and fresh eating. Very high in Vitamin C.',
   tags:['Vitamin C','Antioxidants','Low Calorie'], nut:{cal:'32kcal',carb:'7.7g',fib:'2g',sug:'4.9g'},
   rating:4.8, rev:219, freshness:'arrived', freshPct:98,
   healthTags:[{cls:'vitamin',icon:'🍊',lbl:'Rich in Vitamin C'},{cls:'antioxidant',icon:'🛡️',lbl:'Antioxidants'},{cls:'good-for',icon:'🫀',lbl:'Good for Skin'}],
   storage:['Refrigerate immediately, use within 2–3 days','Do not wash until ready to eat','Store in a single layer to avoid bruising']},

  {id:5, name:'Green Grapes', cat:'fruit', price:100, unit:'per kg', org:true,
   img:'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=480&q=80',
   desc:'Sweet seedless green grapes from Nashik vineyards. Bursting with freshness. Rich in resveratrol and vitamin K.',
   tags:['Resveratrol','Vitamin K','Hydrating'], nut:{cal:'67kcal',carb:'17g',fib:'0.9g',sug:'16g'},
   rating:4.6, rev:187, freshness:'fresh', freshPct:75,
   healthTags:[{cls:'antioxidant',icon:'🍇',lbl:'Rich in Resveratrol'},{cls:'vitamin',icon:'💊',lbl:'Vitamin K'},{cls:'good-for',icon:'🧬',lbl:'Good for Bones'}],
   storage:['Keep refrigerated in original packaging','Consume within 5–7 days of purchase','Wash just before eating']},

  {id:6, name:'Watermelon', cat:'fruit', price:35, unit:'per kg',
   img:'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=480&q=80',
   desc:'Refreshing summer watermelon — 92% water content. Rich in lycopene and perfect for beating the heat. Low calorie and ultra hydrating.',
   tags:['Hydrating','Lycopene','Low Calorie'], nut:{cal:'30kcal',carb:'7.6g',fib:'0.4g',sug:'6.2g'},
   rating:4.7, rev:364, freshness:'arrived', freshPct:88,
   healthTags:[{cls:'good-for',icon:'🌡️',lbl:'Beats the Heat'},{cls:'antioxidant',icon:'🔴',lbl:'Rich in Lycopene'},{cls:'good-for',icon:'💧',lbl:'Ultra Hydrating'}],
   storage:['Whole: keep at room temperature','Cut: wrap tightly and refrigerate, use within 3 days','Best served chilled']},

  {id:7, name:'Orange', cat:'fruit citrus', price:80, unit:'per kg',
   img:'https://images.unsplash.com/photo-1547514701-42782101795e?w=480&q=80',
   desc:'Juicy Nagpur oranges loaded with Vitamin C. Perfect for fresh juice, eating as a snack or in salads. Natural immunity booster.',
   tags:['Vitamin C','Citrus','Immunity'], nut:{cal:'47kcal',carb:'12g',fib:'2.4g',sug:'9.4g'},
   rating:4.8, rev:296, freshness:'arrived', freshPct:92,
   healthTags:[{cls:'vitamin',icon:'🛡️',lbl:'Immunity Booster'},{cls:'vitamin',icon:'🍊',lbl:'High Vitamin C'},{cls:'good-for',icon:'👴',lbl:'Good for Elderly'}],
   storage:['Store at room temperature for up to 2 weeks','Refrigerate for up to 6 weeks','Do not store near strong-smelling vegetables']},

  {id:8, name:'Lemon', cat:'fruit citrus', price:40, unit:'250g (5 pcs)', org:true,
   img:'https://images.unsplash.com/photo-1582087502765-65a5c5c35af7?w=480&q=80',
   desc:'Fresh tangy lemons for cooking, drinks and health. High in Vitamin C and citric acid. Natural detoxifier and flavor enhancer.',
   tags:['Vitamin C','Citrus','Detox'], nut:{cal:'29kcal',carb:'9.3g',fib:'2.8g',sug:'2.5g'},
   rating:4.6, rev:178, freshness:'fresh', freshPct:80,
   healthTags:[{cls:'vitamin',icon:'🍋',lbl:'High Vitamin C'},{cls:'good-for',icon:'🧴',lbl:'Good for Skin'},{cls:'antioxidant',icon:'🔬',lbl:'Detoxifying'}],
   storage:['Refrigerate for up to 3 weeks','Room temperature use within 1 week','Store cut lemons wrapped in plastic in fridge']},

  {id:9, name:'Pineapple', cat:'fruit exotic', price:90, unit:'per piece',
   img:'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=480&q=80',
   desc:'Sweet and tangy pineapples from Kerala. Rich in bromelain enzyme for digestion. Great fresh, juiced or in cooking.',
   tags:['Bromelain','Vitamin C','Tropical'], nut:{cal:'50kcal',carb:'13g',fib:'1.4g',sug:'10g'},
   rating:4.7, rev:234, freshness:'arrived', freshPct:85,
   healthTags:[{cls:'good-for',icon:'🤸',lbl:'Good for Digestion'},{cls:'antioxidant',icon:'🌿',lbl:'Bromelain Rich'},{cls:'vitamin',icon:'🍊',lbl:'Vitamin C'}],
   storage:['Ripen at room temperature for 1–2 days if needed','Once ripe, refrigerate and use within 3–5 days','Cut pineapple: airtight container in fridge, 5–7 days']},

  {id:10, name:'Pomegranate', cat:'fruit', price:160, unit:'per kg',
   img:'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=480&q=80',
   desc:'Jewel-red pomegranate arils packed with antioxidants, folate and fiber. Great fresh, in salads, juices or desserts.',
   tags:['Antioxidants','Folate','Iron'], nut:{cal:'83kcal',carb:'19g',fib:'4g',sug:'14g'},
   rating:4.8, rev:201, freshness:'arrived', freshPct:93,
   healthTags:[{cls:'iron',icon:'🔴',lbl:'Rich in Iron'},{cls:'antioxidant',icon:'🛡️',lbl:'Super Antioxidant'},{cls:'good-for',icon:'🫀',lbl:'Good for Heart'}],
   storage:['Whole: room temperature 1–2 weeks or refrigerate for 2 months','Seeds: airtight container for 5 days','Freeze seeds for up to 12 months']},

  {id:11, name:'Papaya', cat:'fruit exotic', price:75, unit:'per kg',
   img:'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=480&q=80',
   desc:'Ripe golden papaya packed with papain digestive enzymes, Vitamin C and beta-carotene. Sweet tropical flavor.',
   tags:['Papain','Vitamin C','Digestive'], nut:{cal:'43kcal',carb:'11g',fib:'1.7g',sug:'7.8g'},
   rating:4.7, rev:198, freshness:'arrived', freshPct:82,
   healthTags:[{cls:'good-for',icon:'🫃',lbl:'Good for Digestion'},{cls:'vitamin',icon:'🍊',lbl:'Vitamin C'},{cls:'good-for',icon:'🧴',lbl:'Good for Skin'}],
   storage:['Ripe papaya: refrigerate, use within 3–5 days','Unripe: room temperature until yellow','Cut papaya: wrap and refrigerate, 3 days']},

  {id:12, name:'Pear', cat:'fruit', price:130, unit:'per kg',
   img:'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=480&q=80',
   desc:'Soft, sweet pears with a delicate honey-like flavor. High in fiber and good for heart health and digestion.',
   tags:['Fiber','Vitamin C','Low GI'], nut:{cal:'57kcal',carb:'15g',fib:'3.1g',sug:'10g'},
   rating:4.6, rev:163, freshness:'fresh', freshPct:76,
   healthTags:[{cls:'fiber',icon:'🌾',lbl:'Very High Fiber'},{cls:'good-for',icon:'🫀',lbl:'Good for Heart'},{cls:'good-for',icon:'👴',lbl:'Good for Elderly'}],
   storage:['Ripen at room temperature','Refrigerate ripe pears for up to 5 days','Handle gently — bruises easily']},

  {id:13, name:'Avocado', cat:'fruit exotic', price:250, unit:'per piece', org:true,
   img:'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=480&q=80',
   desc:'Creamy Hass avocados loaded with healthy monounsaturated fats, Vitamin E and potassium. Perfect for guacamole, toast and salads.',
   tags:['Healthy Fats','Vitamin E','Potassium'], nut:{cal:'160kcal',carb:'9g',fib:'7g',sug:'0.7g'},
   rating:4.7, rev:178, freshness:'expiring', freshPct:35,
   healthTags:[{cls:'good-for',icon:'🧠',lbl:'Good for Brain'},{cls:'protein',icon:'💚',lbl:'Healthy Fats'},{cls:'expiry',icon:'⏰',lbl:'Expiry: 1–2 Days'}],
   storage:['Unripe: ripen at room temperature','Ripe: refrigerate for up to 3 days','Cut: rub with lemon, wrap tightly, refrigerate']},

  {id:14, name:'Blueberry', cat:'fruit', price:220, unit:'125g pack', org:true,
   img:'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=480&q=80',
   desc:'Plump, juicy blueberries bursting with antioxidants. One of the most nutrient-dense foods available. Great for breakfast bowls and smoothies.',
   tags:['Antioxidants','Vitamin C','Brain Health'], nut:{cal:'57kcal',carb:'14g',fib:'2.4g',sug:'10g'},
   rating:4.9, rev:289, freshness:'arrived', freshPct:97,
   healthTags:[{cls:'antioxidant',icon:'🫐',lbl:'Top Antioxidant'},{cls:'good-for',icon:'🧠',lbl:'Good for Brain'},{cls:'vitamin',icon:'💊',lbl:'Vitamin C & K'}],
   storage:['Refrigerate unwashed, use within 1–2 weeks','Do not wash until ready to eat','Freeze for up to 6 months — rinse and pat dry first']},

  {id:15, name:'Guava', cat:'fruit', price:60, unit:'per kg',
   img:'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=480&q=80',
   desc:'Fresh tropical guavas with sweet pink flesh. Extremely high in Vitamin C — more than oranges! Great eaten raw or as juice.',
   tags:['Vitamin C','Fiber','Tropical'], nut:{cal:'68kcal',carb:'14g',fib:'5.4g',sug:'9g'},
   rating:4.6, rev:142, freshness:'arrived', freshPct:86,
   healthTags:[{cls:'vitamin',icon:'🍊',lbl:'4× Vitamin C of Orange'},{cls:'fiber',icon:'🌾',lbl:'High Fiber'},{cls:'good-for',icon:'🫀',lbl:'Good for Heart'}],
   storage:['Ripen at room temperature','Once ripe refrigerate for 2–3 days','Eat within 2 days of purchase for best flavor']},

  {id:16, name:'Kiwi', cat:'fruit exotic', price:199, unit:'4 pcs pack',
   img:'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=480&q=80',
   desc:'Tangy-sweet kiwi fruit packed with Vitamin C, K and folate. Aids digestion with natural actinidin enzyme.',
   tags:['Vitamin C','Vitamin K','Folate'], nut:{cal:'61kcal',carb:'15g',fib:'3g',sug:'9g'},
   rating:4.7, rev:176, freshness:'fresh', freshPct:78,
   healthTags:[{cls:'vitamin',icon:'💊',lbl:'Vitamin C & K'},{cls:'good-for',icon:'🫁',lbl:'Good for Immunity'},{cls:'fiber',icon:'🌾',lbl:'Digestive Aid'}],
   storage:['Unripe: room temperature 3–5 days','Ripe: refrigerate up to 4 weeks','Cut: refrigerate in airtight container, 2 days']},

  {id:17, name:'Coconut', cat:'fruit exotic', price:55, unit:'per piece',
   img:'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=480&q=80',
   desc:'Fresh Kerala coconuts with sweet water and tender white flesh. Rich in MCT fats and electrolytes.',
   tags:['MCT Fats','Electrolytes','Fiber'], nut:{cal:'354kcal',carb:'15g',fib:'9g',sug:'6g'},
   rating:4.7, rev:253, freshness:'arrived', freshPct:90,
   healthTags:[{cls:'good-for',icon:'💧',lbl:'Natural Hydration'},{cls:'protein',icon:'🥥',lbl:'Healthy MCT Fats'},{cls:'good-for',icon:'🦴',lbl:'Good for Bones'}],
   storage:['Whole: room temperature up to 4 months','Opened: refrigerate water and flesh separately','Grated coconut: freeze up to 6 months']},

  {id:18, name:'Chikoo (Sapota)', cat:'fruit', price:70, unit:'per kg',
   img:'https://images.unsplash.com/photo-1628689469838-524a4a973b8e?w=480&q=80',
   desc:'Brown sugary sapota with a sweet caramel-like taste. High in natural sugars, tannins and Vitamin B complex. A beloved Indian fruit.',
   tags:['Natural Sugars','Vitamin B','Tannins'], nut:{cal:'83kcal',carb:'20g',fib:'5.3g',sug:'15g'},
   rating:4.5, rev:118, freshness:'arrived', freshPct:84,
   healthTags:[{cls:'vitamin',icon:'⚡',lbl:'Instant Energy'},{cls:'fiber',icon:'🌾',lbl:'Good for Gut'},{cls:'good-for',icon:'🧠',lbl:'Good for Brain'}],
   storage:['Ripen at room temperature','Refrigerate ripe for 2–3 days','Do not refrigerate unripe — prevents ripening']},

  {id:19, name:'Dragon Fruit', cat:'fruit exotic', price:280, unit:'per piece', org:true,
   img:'https://images.unsplash.com/photo-1527325678964-54921661f888?w=480&q=80',
   desc:'Vibrant pink dragon fruit with white speckled flesh. Rich in prebiotics, antioxidants and iron. A stunning superfood.',
   tags:['Prebiotics','Iron','Antioxidants'], nut:{cal:'60kcal',carb:'13g',fib:'3g',sug:'8g'},
   rating:4.8, rev:134, freshness:'arrived', freshPct:92,
   healthTags:[{cls:'iron',icon:'💪',lbl:'Rich in Iron'},{cls:'antioxidant',icon:'🛡️',lbl:'Antioxidant Rich'},{cls:'good-for',icon:'🦠',lbl:'Probiotic Boost'}],
   storage:['Room temperature if eating within 1 day','Refrigerate for up to 5 days','Cut fruit: refrigerate in airtight container 2 days']},

  {id:20, name:'Litchi', cat:'fruit exotic', price:160, unit:'250g pack', sale:true,
   img:'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=480&q=80',
   desc:'Sweet, juicy litchis from Bihar with floral aroma and tender white flesh. Packed with Vitamin C and copper.',
   tags:['Vitamin C','Copper','Antioxidants'], nut:{cal:'66kcal',carb:'17g',fib:'1.3g',sug:'15g'},
   rating:4.7, rev:167, freshness:'arrived', freshPct:88,
   healthTags:[{cls:'vitamin',icon:'🍊',lbl:'Rich in Vitamin C'},{cls:'antioxidant',icon:'🌸',lbl:'Antioxidant Rich'},{cls:'good-for',icon:'🫀',lbl:'Good for Heart'}],
   storage:['Refrigerate in a bag, use within 5–7 days','Do not store at room temperature for long','Freeze shelled litchis for up to 3 months']},

  /* ════ VEGETABLES ════ */
  {id:21, name:'Broccoli', cat:'vegetable', price:80, unit:'per head', org:true,
   img:'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=480&q=80',
   desc:'Premium green broccoli florets packed with cancer-fighting sulforaphane, Vitamin C and K. A true superfood vegetable.',
   tags:['Sulforaphane','Vitamin C','Vitamin K'], nut:{cal:'34kcal',carb:'7g',fib:'2.6g',sug:'1.7g'},
   rating:4.7, rev:189, freshness:'arrived', freshPct:96,
   healthTags:[{cls:'antioxidant',icon:'🥦',lbl:'Cancer-Fighting'},{cls:'vitamin',icon:'💊',lbl:'Vitamin K & C'},{cls:'good-for',icon:'👶',lbl:'Good for Kids'}],
   storage:['Refrigerate unwashed in a loose bag','Use within 3–5 days for best nutrition','Blanch and freeze for long-term storage']},

  {id:22, name:'Carrot', cat:'vegetable root', price:50, unit:'per kg',
   img:'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=480&q=80',
   desc:'Bright orange carrots bursting with beta-carotene, Vitamin A and fiber. Perfect for raw snacking, cooking and juicing.',
   tags:['Beta-carotene','Vitamin A','Fiber'], nut:{cal:'41kcal',carb:'10g',fib:'2.8g',sug:'4.7g'},
   rating:4.8, rev:324, freshness:'arrived', freshPct:94,
   healthTags:[{cls:'vitamin',icon:'👁️',lbl:'Good for Eyesight'},{cls:'vitamin',icon:'🧡',lbl:'Rich in Vitamin A'},{cls:'good-for',icon:'👴',lbl:'Good for Elderly'}],
   storage:['Remove green tops before storing','Refrigerate in a bag with holes for up to 4 weeks','Keep away from apples and pears']},

  {id:23, name:'Tomato', cat:'vegetable', price:60, unit:'per kg', org:true,
   img:'https://images.unsplash.com/photo-1546094096-0df4bcabd337?w=480&q=80',
   desc:'Farm-fresh juicy red tomatoes rich in lycopene and Vitamin C. Essential for Indian cooking, salads and sauces.',
   tags:['Lycopene','Vitamin C','Antioxidants'], nut:{cal:'18kcal',carb:'3.9g',fib:'1.2g',sug:'2.6g'},
   rating:4.7, rev:412, freshness:'arrived', freshPct:87,
   healthTags:[{cls:'antioxidant',icon:'🍅',lbl:'Rich in Lycopene'},{cls:'vitamin',icon:'🍊',lbl:'Vitamin C'},{cls:'good-for',icon:'☀️',lbl:'Good for Skin'}],
   storage:['Store at room temperature stem-side down','Never refrigerate unless cut — kills flavor','Use within 3–5 days of full ripeness']},

  {id:24, name:'Spinach', cat:'vegetable leafy', price:30, unit:'per bunch ~250g', org:true,
   img:'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=480&q=80',
   desc:'Fresh baby spinach leaves — iron-rich, tender and nutritious. Perfect for palak paneer, salads, smoothies and dals.',
   tags:['Iron','Vitamin K','Folate'], nut:{cal:'23kcal',carb:'3.6g',fib:'2.2g',sug:'0.4g'},
   rating:4.8, rev:256, freshness:'arrived', freshPct:97,
   healthTags:[{cls:'iron',icon:'💪',lbl:'Rich in Iron'},{cls:'vitamin',icon:'🌿',lbl:'Folate Rich'},{cls:'good-for',icon:'🤰',lbl:'Good for Pregnancy'}],
   storage:['Refrigerate in a sealed bag lined with paper towels','Use within 3–5 days','Do not wash until ready to use']},

  {id:25, name:'Bell Pepper', cat:'vegetable', price:90, unit:'per kg',
   img:'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=480&q=80',
   desc:'Colorful red, yellow and green bell peppers. Add crunch and sweetness to any dish. Extremely high in Vitamin C.',
   tags:['Vitamin C','Antioxidants','Colorful'], nut:{cal:'26kcal',carb:'6g',fib:'2.1g',sug:'4.2g'},
   rating:4.6, rev:173, freshness:'fresh', freshPct:72,
   healthTags:[{cls:'vitamin',icon:'🍊',lbl:'200% Vitamin C RDA'},{cls:'antioxidant',icon:'🌈',lbl:'Rich in Carotenoids'},{cls:'good-for',icon:'👁️',lbl:'Good for Eyes'}],
   storage:['Refrigerate in crisper drawer','Whole: up to 2 weeks. Cut: use within 3–4 days','Roast and freeze for extended storage']},

  {id:26, name:'Cucumber', cat:'vegetable', price:35, unit:'per kg',
   img:'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=480&q=80',
   desc:'Cool, crisp cucumbers — perfect for salads, raita and refreshing summer snacks. 95% water for ultimate hydration.',
   tags:['Hydrating','Low Calorie','Vitamin K'], nut:{cal:'15kcal',carb:'3.6g',fib:'0.5g',sug:'1.7g'},
   rating:4.7, rev:298, freshness:'arrived', freshPct:89,
   healthTags:[{cls:'good-for',icon:'💧',lbl:'Ultra Hydrating'},{cls:'good-for',icon:'🧴',lbl:'Good for Skin'},{cls:'vitamin',icon:'💊',lbl:'Vitamin K'}],
   storage:['Refrigerate, do not freeze','Use within 3–5 days','Keep away from tomatoes and melons']},

  {id:27, name:'Cauliflower', cat:'vegetable', price:55, unit:'per head', org:true,
   img:'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?w=480&q=80',
   desc:'Fresh white cauliflower heads. Extremely versatile in curries, gobi masala, roasts or as a low-carb rice substitute.',
   tags:['Vitamin C','Low Carb','Fiber'], nut:{cal:'25kcal',carb:'5g',fib:'2g',sug:'1.9g'},
   rating:4.6, rev:144, freshness:'fresh', freshPct:68,
   healthTags:[{cls:'vitamin',icon:'🌿',lbl:'High Vitamin C'},{cls:'fiber',icon:'🌾',lbl:'Low Carb'},{cls:'good-for',icon:'⚖️',lbl:'Good for Weight Loss'}],
   storage:['Refrigerate in a plastic bag, stem down','Use within 4–7 days','Blanch and freeze for up to 6 months']},

  {id:28, name:'Red Onion', cat:'vegetable', price:40, unit:'per kg',
   img:'https://images.unsplash.com/photo-1508747703725-719777637510?w=480&q=80',
   desc:'Essential cooking ingredient — sharp, pungent red onions for all Indian dishes. Rich in quercetin with prebiotic benefits.',
   tags:['Quercetin','Prebiotic','Flavor'], nut:{cal:'40kcal',carb:'9.3g',fib:'1.7g',sug:'4.2g'},
   rating:4.7, rev:389, freshness:'arrived', freshPct:91,
   healthTags:[{cls:'antioxidant',icon:'🧅',lbl:'Rich in Quercetin'},{cls:'good-for',icon:'🦠',lbl:'Prebiotic Benefits'},{cls:'good-for',icon:'🫀',lbl:'Good for Heart'}],
   storage:['Store in a cool, dry, dark place','Do NOT refrigerate whole onions — they go soft','Chopped onion: sealed container, 7–10 days']},

  {id:29, name:'Potato', cat:'vegetable root', price:35, unit:'per kg',
   img:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=480&q=80',
   desc:'Fresh farm potatoes — starchy, flavorful and the backbone of countless recipes worldwide. Aloo ki sabzi, fries, biryani and more.',
   tags:['Potassium','Vitamin B6','Energy'], nut:{cal:'77kcal',carb:'17g',fib:'2.2g',sug:'0.8g'},
   rating:4.8, rev:467, freshness:'arrived', freshPct:88,
   healthTags:[{cls:'vitamin',icon:'⚡',lbl:'Energy Rich'},{cls:'vitamin',icon:'💊',lbl:'Vitamin B6'},{cls:'good-for',icon:'🏃',lbl:'Good for Active People'}],
   storage:['Store in a cool, dark, dry place','Do NOT refrigerate — turns starchy','Keep away from onions (they speed spoilage)']},

  {id:30, name:'Sweet Corn', cat:'vegetable', price:25, unit:'per cob',
   img:'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=480&q=80',
   desc:'Golden sweet corn cobs — grilled, boiled, or roasted. A beloved street food and ingredient in soups, salads and salsa.',
   tags:['Fiber','Vitamins','Sweet'], nut:{cal:'86kcal',carb:'19g',fib:'2.7g',sug:'3.2g'},
   rating:4.8, rev:334, freshness:'arrived', freshPct:96,
   healthTags:[{cls:'fiber',icon:'🌽',lbl:'High Fiber'},{cls:'vitamin',icon:'💛',lbl:'B Vitamins'},{cls:'good-for',icon:'👁️',lbl:'Good for Eyes'}],
   storage:['Use within 1–2 days for maximum sweetness','Refrigerate in husk if not using immediately','Blanch and freeze for up to 3 months']},

  {id:31, name:'Kale', cat:'vegetable leafy', price:70, unit:'per bunch', org:true,
   img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=480&q=80',
   desc:'Nutrient-dense kale leaves — a true superfood packed with Vitamins A, K and C plus powerful antioxidants. Great for smoothies.',
   tags:['Vitamin K','Antioxidants','Superfood'], nut:{cal:'35kcal',carb:'4.4g',fib:'4.1g',sug:'0.9g'},
   rating:4.6, rev:127, freshness:'fresh', freshPct:70,
   healthTags:[{cls:'iron',icon:'💪',lbl:'Rich in Iron'},{cls:'vitamin',icon:'🌿',lbl:'Vitamin A, K, C'},{cls:'good-for',icon:'🦴',lbl:'Good for Bones'}],
   storage:['Wrap loosely in damp paper towel, store in fridge','Use within 5–7 days','Remove tough stems before storing']},

  {id:32, name:'Garlic', cat:'vegetable', price:80, unit:'per 250g', org:true,
   img:'https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?w=480&q=80',
   desc:'Fresh white garlic with intense pungent flavor. A natural antibiotic and immune booster used in every Indian kitchen.',
   tags:['Allicin','Immunity','Antibacterial'], nut:{cal:'149kcal',carb:'33g',fib:'2.1g',sug:'1g'},
   rating:4.8, rev:378, freshness:'arrived', freshPct:95,
   healthTags:[{cls:'antioxidant',icon:'🧄',lbl:'Natural Antibiotic'},{cls:'good-for',icon:'🫀',lbl:'Good for Heart'},{cls:'good-for',icon:'🛡️',lbl:'Immunity Boost'}],
   storage:['Store in a cool, dry, well-ventilated place','Do not refrigerate whole bulbs','Peeled/minced: refrigerate in oil, 2 weeks']},

  {id:33, name:'Ginger', cat:'vegetable root', price:90, unit:'per 250g',
   img:'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=480&q=80',
   desc:'Fresh aromatic ginger root with fiery flavor. Used in teas, curries and home remedies. Powerful anti-inflammatory and digestive aid.',
   tags:['Gingerol','Anti-inflammatory','Digestive'], nut:{cal:'80kcal',carb:'18g',fib:'2g',sug:'1.7g'},
   rating:4.7, rev:291, freshness:'arrived', freshPct:93,
   healthTags:[{cls:'good-for',icon:'🫁',lbl:'Good for Immunity'},{cls:'antioxidant',icon:'🔥',lbl:'Anti-inflammatory'},{cls:'good-for',icon:'🤢',lbl:'Relieves Nausea'}],
   storage:['Wrap in paper towel, refrigerate for 3 weeks','Freeze whole for up to 6 months','Peel and mince, freeze in ice cube trays']},

  {id:34, name:'Green Beans', cat:'vegetable', price:55, unit:'per 500g', org:true,
   img:'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=480&q=80',
   desc:'Tender crisp French beans with a satisfying snap. Rich in Vitamins C and K, folate and plant iron. Great stir-fried or steamed.',
   tags:['Vitamin K','Folate','Iron'], nut:{cal:'31kcal',carb:'7g',fib:'3.4g',sug:'3.3g'},
   rating:4.5, rev:132, freshness:'arrived', freshPct:92,
   healthTags:[{cls:'iron',icon:'💚',lbl:'Plant-Based Iron'},{cls:'vitamin',icon:'💊',lbl:'Vitamin K'},{cls:'good-for',icon:'🦴',lbl:'Good for Bones'}],
   storage:['Refrigerate in a bag, use within 5–7 days','Do not wash until ready to cook','Blanch and freeze for up to 8 months']},

  {id:35, name:'Beetroot', cat:'vegetable root', price:45, unit:'per kg',
   img:'https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=480&q=80',
   desc:'Deep crimson beetroot — a powerhouse of folate, manganese and nitrates for better blood flow. Great roasted, in salads or as juice.',
   tags:['Folate','Nitrates','Iron'], nut:{cal:'43kcal',carb:'10g',fib:'2.8g',sug:'7g'},
   rating:4.6, rev:147, freshness:'arrived', freshPct:89,
   healthTags:[{cls:'iron',icon:'🩸',lbl:'Improves Blood Flow'},{cls:'good-for',icon:'🏃',lbl:'Good for Athletes'},{cls:'vitamin',icon:'🌿',lbl:'Rich in Folate'}],
   storage:['Remove leaves, refrigerate roots for 2–3 weeks','Cooked beetroot: refrigerate 5 days','Pickled beetroot: refrigerate 3 months']},

  {id:36, name:'Mushroom', cat:'vegetable', price:120, unit:'per 250g', org:true,
   img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=480&q=80',
   desc:'Fresh button mushrooms with earthy umami flavor. Rich in B vitamins, selenium and unique antioxidants. Great in curries, pasta and rice.',
   tags:['Selenium','Vitamin D','Umami'], nut:{cal:'22kcal',carb:'3.3g',fib:'1g',sug:'2g'},
   rating:4.7, rev:213, freshness:'fresh', freshPct:71,
   healthTags:[{cls:'vitamin',icon:'☀️',lbl:'Vitamin D Source'},{cls:'antioxidant',icon:'🍄',lbl:'Selenium Rich'},{cls:'good-for',icon:'🛡️',lbl:'Boosts Immunity'}],
   storage:['Paper bag in fridge — never plastic (they sweat)','Use within 5–7 days','Do not wash until just before cooking']},

  {id:37, name:'Coriander', cat:'vegetable leafy', price:20, unit:'per bunch', org:true,
   img:'https://images.unsplash.com/photo-1573414405468-89c7b5b8b9a8?w=480&q=80',
   desc:'Fresh fragrant coriander (dhania) leaves — a staple garnish in Indian cooking. Rich in Vitamins A, C, K and antioxidants.',
   tags:['Vitamin A','Vitamin K','Fragrant'], nut:{cal:'23kcal',carb:'3.7g',fib:'2.8g',sug:'0.9g'},
   rating:4.8, rev:445, freshness:'arrived', freshPct:98,
   healthTags:[{cls:'vitamin',icon:'🌿',lbl:'Rich in Vitamin K'},{cls:'antioxidant',icon:'🍃',lbl:'Detoxifying'},{cls:'good-for',icon:'👁️',lbl:'Good for Eyes'}],
   storage:['Wrap in damp paper towel, refrigerate','Or place stems in glass of water, cover loosely','Use within 5–7 days for best flavor']},

  {id:38, name:'Lady Finger (Okra)', cat:'vegetable', price:50, unit:'per 500g',
   img:'https://images.unsplash.com/photo-1638882986250-c6ebf270db2b?w=480&q=80',
   desc:'Tender green okra — rich in folate, Vitamin C and the mucilage fiber that helps manage blood sugar. Bhindi masala perfection.',
   tags:['Folate','Vitamin C','Fiber'], nut:{cal:'33kcal',carb:'7.5g',fib:'3.2g',sug:'1.5g'},
   rating:4.5, rev:198, freshness:'arrived', freshPct:87,
   healthTags:[{cls:'fiber',icon:'🌿',lbl:'Blood Sugar Control'},{cls:'vitamin',icon:'💊',lbl:'Rich in Folate'},{cls:'good-for',icon:'🤰',lbl:'Good for Pregnancy'}],
   storage:['Refrigerate unwashed in paper bag','Use within 2–4 days — goes slimy quickly','Do not store near moisture']},

  {id:39, name:'Eggplant (Brinjal)', cat:'vegetable', price:40, unit:'per kg',
   img:'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=480&q=80',
   desc:'Glossy deep-purple brinjal with spongy flesh. Soaks up flavors beautifully. Rich in nasunin antioxidant. Baingan bharta staple.',
   tags:['Nasunin','Fiber','Low Calorie'], nut:{cal:'25kcal',carb:'6g',fib:'3g',sug:'3.5g'},
   rating:4.5, rev:163, freshness:'fresh', freshPct:74,
   healthTags:[{cls:'antioxidant',icon:'🍆',lbl:'Brain-Protecting Nasunin'},{cls:'good-for',icon:'🫀',lbl:'Good for Heart'},{cls:'fiber',icon:'🌾',lbl:'High Fiber'}],
   storage:['Refrigerate in crisper drawer, use within 5–7 days','Cold temperature can cause browning','Do not cut until ready to use']},

  {id:40, name:'Sweet Potato', cat:'vegetable root', price:60, unit:'per kg', org:true,
   img:'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=480&q=80',
   desc:'Naturally sweet orange-fleshed sweet potatoes from Karnataka. Loaded with beta-carotene, Vitamin A and complex carbs for sustained energy.',
   tags:['Beta-carotene','Vitamin A','Complex Carbs'], nut:{cal:'86kcal',carb:'20g',fib:'3g',sug:'4.2g'},
   rating:4.7, rev:224, freshness:'arrived', freshPct:91,
   healthTags:[{cls:'vitamin',icon:'🧡',lbl:'Rich in Vitamin A'},{cls:'good-for',icon:'⚡',lbl:'Sustained Energy'},{cls:'good-for',icon:'👁️',lbl:'Good for Eyes'}],
   storage:['Cool, dark, dry place — not fridge','Lasts 3–5 weeks at room temperature','Cooked: refrigerate, use within 5 days']},

  {id:41, name:'Pumpkin', cat:'vegetable', price:30, unit:'per kg',
   img:'https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=480&q=80',
   desc:'Fresh orange pumpkin (kaddu) — loaded with beta-carotene, Vitamin A and potassium. Great in curries, soups and halwa.',
   tags:['Beta-carotene','Vitamin A','Potassium'], nut:{cal:'26kcal',carb:'6.5g',fib:'0.5g',sug:'2.8g'},
   rating:4.6, rev:178, freshness:'arrived', freshPct:86,
   healthTags:[{cls:'vitamin',icon:'🎃',lbl:'Rich in Vitamin A'},{cls:'good-for',icon:'👁️',lbl:'Good for Eyesight'},{cls:'antioxidant',icon:'🛡️',lbl:'Antioxidant Rich'}],
   storage:['Whole: room temperature for months','Cut: wrap tightly, refrigerate, use in 5 days','Cooked: refrigerate, use within 3 days']},

  {id:42, name:'Methi (Fenugreek)', cat:'vegetable leafy', price:25, unit:'per bunch', org:true,
   img:'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=480&q=80',
   desc:'Fresh bitter-aromatic methi leaves — a nutritional powerhouse for diabetics. Rich in iron, fiber and compounds that help regulate blood sugar.',
   tags:['Iron','Blood Sugar','Fiber'], nut:{cal:'49kcal',carb:'6g',fib:'7g',sug:'0g'},
   rating:4.5, rev:189, freshness:'arrived', freshPct:95,
   healthTags:[{cls:'iron',icon:'💪',lbl:'Very Rich in Iron'},{cls:'fiber',icon:'🌿',lbl:'Controls Blood Sugar'},{cls:'good-for',icon:'🤱',lbl:'Good for Lactating Mothers'}],
   storage:['Wrap in damp cloth, refrigerate','Use within 2–4 days — wilts quickly','Dry methi lasts months in airtight container']},

  /* ════ NEW FRUITS ════ */
  {id:43, name:'Peach', cat:'fruit exotic', price:210, unit:'per kg', org:true,
   img:'https://images.unsplash.com/photo-1629828874514-51eb8b4e5dd2?w=480&q=80',
   desc:'Juicy, velvety peaches with a sweet floral aroma. Rich in Vitamins A and C, potassium and antioxidants. Perfect for fresh eating, jams and desserts.',
   tags:['Vitamin A','Vitamin C','Antioxidants'], nut:{cal:'39kcal',carb:'10g',fib:'1.5g',sug:'8.4g'},
   rating:4.7, rev:143, freshness:'arrived', freshPct:93,
   healthTags:[{cls:'vitamin',icon:'🍑',lbl:'Rich in Vitamin A'},{cls:'antioxidant',icon:'🛡️',lbl:'Antioxidant Rich'},{cls:'good-for',icon:'🧴',lbl:'Good for Skin'}],
   storage:['Ripen at room temperature','Refrigerate ripe peaches for up to 5 days','Handle gently — bruises easily']},

  {id:44, name:'Plum', cat:'fruit', price:180, unit:'per kg',
   img:'https://images.unsplash.com/photo-1590502593747-42a996133562?w=480&q=80',
   desc:'Deep purple plums bursting with sweet-tart juice. High in Vitamin C, K and sorbitol for natural digestive relief. Great fresh or in chutneys.',
   tags:['Vitamin C','Vitamin K','Fiber'], nut:{cal:'46kcal',carb:'11g',fib:'1.4g',sug:'9.9g'},
   rating:4.6, rev:118, freshness:'arrived', freshPct:88,
   healthTags:[{cls:'vitamin',icon:'💊',lbl:'Vitamin C & K'},{cls:'good-for',icon:'🫃',lbl:'Good for Digestion'},{cls:'antioxidant',icon:'🛡️',lbl:'Antioxidant Rich'}],
   storage:['Ripen at room temperature','Refrigerate ripe plums for 3–5 days','Freeze halved pitted plums for up to 6 months']},

  {id:45, name:'Fig', cat:'fruit exotic', price:240, unit:'per 250g', org:true,
   img:'https://images.unsplash.com/photo-1601379328938-2b4e9d28a8d2?w=480&q=80',
   desc:'Luscious fresh figs with honey-sweet flesh and earthy notes. Loaded with calcium, potassium and fiber. A rare seasonal treat.',
   tags:['Calcium','Potassium','Fiber'], nut:{cal:'74kcal',carb:'19g',fib:'2.9g',sug:'16g'},
   rating:4.8, rev:92, freshness:'fresh', freshPct:77,
   healthTags:[{cls:'good-for',icon:'🦴',lbl:'Good for Bones'},{cls:'fiber',icon:'🌾',lbl:'High Fiber'},{cls:'good-for',icon:'🫀',lbl:'Good for Heart'}],
   storage:['Very perishable — refrigerate immediately','Use within 2–3 days of purchase','Dry or freeze for longer storage']},

  {id:46, name:'Cherry', cat:'fruit', price:320, unit:'per 250g',
   img:'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=480&q=80',
   desc:'Glossy red cherries from Kashmir — sweet, juicy and bursting with anthocyanins and melatonin. A natural sleep aid and antioxidant powerhouse.',
   tags:['Anthocyanins','Melatonin','Antioxidants'], nut:{cal:'50kcal',carb:'12g',fib:'1.6g',sug:'8g'},
   rating:4.9, rev:207, freshness:'arrived', freshPct:96,
   healthTags:[{cls:'antioxidant',icon:'🍒',lbl:'Anthocyanin Rich'},{cls:'good-for',icon:'😴',lbl:'Promotes Sleep'},{cls:'good-for',icon:'🏃',lbl:'Good for Athletes'}],
   storage:['Refrigerate unwashed in original packaging','Use within 5–7 days','Freeze pitted cherries for up to 6 months']},

  {id:47, name:'Passion Fruit', cat:'fruit exotic', price:260, unit:'per 4 pcs', org:true,
   img:'https://images.unsplash.com/photo-1604495772376-9657f6b04571?w=480&q=80',
   desc:'Wrinkled purple passion fruits with intensely aromatic, tangy-sweet golden pulp. Packed with Vitamin C, fiber and calming alkaloids.',
   tags:['Vitamin C','Fiber','Calming'], nut:{cal:'97kcal',carb:'23g',fib:'10.4g',sug:'11g'},
   rating:4.7, rev:86, freshness:'arrived', freshPct:90,
   healthTags:[{cls:'vitamin',icon:'🍊',lbl:'Vitamin C Rich'},{cls:'fiber',icon:'🌾',lbl:'Very High Fiber'},{cls:'good-for',icon:'😌',lbl:'Calming Effect'}],
   storage:['Ripen wrinkled skin at room temperature — that is peak ripeness','Refrigerate ripe for up to 2 weeks','Scoop pulp and freeze in ice cube trays']},

  /* ════ NEW VEGETABLES ════ */
  {id:48, name:'Zucchini', cat:'vegetable', price:65, unit:'per 500g', org:true,
   img:'https://images.unsplash.com/photo-1566842600175-97dca489844f?w=480&q=80',
   desc:'Tender green zucchini with mild flavor and silky texture. Extremely low in calories yet rich in Vitamin C, potassium and antioxidants. Great grilled or in curries.',
   tags:['Vitamin C','Low Calorie','Potassium'], nut:{cal:'17kcal',carb:'3.1g',fib:'1g',sug:'2.5g'},
   rating:4.5, rev:112, freshness:'arrived', freshPct:91,
   healthTags:[{cls:'good-for',icon:'⚖️',lbl:'Good for Weight Loss'},{cls:'vitamin',icon:'💊',lbl:'Vitamin C'},{cls:'good-for',icon:'🫀',lbl:'Good for Heart'}],
   storage:['Refrigerate in crisper drawer, use within 5–7 days','Do not freeze raw — blanch first','Use young firm zucchini for best flavor']},

  {id:49, name:'Green Peas', cat:'vegetable', price:60, unit:'per 500g', org:true,
   img:'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=480&q=80',
   desc:'Sweet fresh green peas shelled and ready to cook. High in plant protein, fiber and Vitamins A, C and K. Perfect in pulao, curries and soups.',
   tags:['Plant Protein','Vitamin K','Fiber'], nut:{cal:'81kcal',carb:'14g',fib:'5.1g',sug:'6g'},
   rating:4.7, rev:234, freshness:'arrived', freshPct:95,
   healthTags:[{cls:'protein',icon:'💪',lbl:'Plant Protein'},{cls:'vitamin',icon:'🌿',lbl:'Vitamin A & K'},{cls:'good-for',icon:'🧬',lbl:'Good for Immunity'}],
   storage:['Refrigerate in pod for 3–5 days','Shelled peas: use within 2 days or freeze','Blanch and freeze for up to 12 months']},

  {id:50, name:'Ash Gourd (Petha)', cat:'vegetable', price:30, unit:'per kg',
   img:'https://images.unsplash.com/photo-1600807077994-00c4e5b6e0fa?w=480&q=80',
   desc:'Large pale green ash gourd — light, cooling and excellent for digestion. Low in calories and used widely in Ayurvedic remedies and traditional sweets.',
   tags:['Cooling','Fiber','Low Calorie'], nut:{cal:'13kcal',carb:'3g',fib:'0.5g',sug:'1.9g'},
   rating:4.4, rev:88, freshness:'arrived', freshPct:87,
   healthTags:[{cls:'good-for',icon:'🌿',lbl:'Ayurvedic Remedy'},{cls:'good-for',icon:'🌡️',lbl:'Cooling Effect'},{cls:'good-for',icon:'🫃',lbl:'Good for Digestion'}],
   storage:['Whole: room temperature for weeks','Cut: wrap tightly and refrigerate, use within 3 days','Cooked: refrigerate, use within 2 days']},

  {id:51, name:'Bottle Gourd (Lauki)', cat:'vegetable', price:25, unit:'per piece',
   img:'https://images.unsplash.com/photo-1618897996318-5a901fa18afe?w=480&q=80',
   desc:'Light green bottle gourd — one of the most digestive-friendly vegetables in Indian cooking. 96% water, low calorie and soothing for the gut.',
   tags:['Hydrating','Low Calorie','Digestive'], nut:{cal:'14kcal',carb:'3.4g',fib:'0.5g',sug:'2g'},
   rating:4.5, rev:176, freshness:'arrived', freshPct:89,
   healthTags:[{cls:'good-for',icon:'💧',lbl:'Ultra Hydrating'},{cls:'good-for',icon:'🫃',lbl:'Easy to Digest'},{cls:'good-for',icon:'⚖️',lbl:'Good for Weight Loss'}],
   storage:['Room temperature for up to 1 week','Refrigerate cut pieces wrapped tightly','Use within 3 days once cut']},

  {id:52, name:'Radish (Mooli)', cat:'vegetable root', price:30, unit:'per bunch',
   img:'https://images.unsplash.com/photo-1585670083152-64e3c91c4e63?w=480&q=80',
   desc:'Crisp white radishes with a peppery bite. A great source of Vitamin C, folate and digestive enzymes. Classic in parathas, salads and pickles.',
   tags:['Vitamin C','Folate','Digestive Enzymes'], nut:{cal:'16kcal',carb:'3.4g',fib:'1.6g',sug:'1.9g'},
   rating:4.5, rev:134, freshness:'arrived', freshPct:92,
   healthTags:[{cls:'vitamin',icon:'🍊',lbl:'Rich in Vitamin C'},{cls:'good-for',icon:'🫃',lbl:'Digestive Aid'},{cls:'good-for',icon:'🫀',lbl:'Good for Liver'}],
   storage:['Remove leaves before storing — leaves draw moisture','Refrigerate in a bag for up to 2 weeks','Use leaves within 2 days — highly nutritious']},
];

/* ── CATEGORIES ── */
const CATS = [
  {key:'all',    icon:'🌿', lbl:'All Products'},
  {key:'fruit',  icon:'🍎', lbl:'Fruits'},
  {key:'vegetable', icon:'🥦', lbl:'Vegetables'},
  {key:'leafy',  icon:'🥬', lbl:'Leafy Greens'},
  {key:'root',   icon:'🥕', lbl:'Root Vegetables'},
  {key:'citrus', icon:'🍋', lbl:'Citrus'},
  {key:'exotic', icon:'🥭', lbl:'Exotic'},
  {key:'organic',icon:'✅', lbl:'Organic'},
];

/* ── EMOJI & COLOR MAPS (fallback if photo fails) ── */
const EMOJIS = {
  1:'🍎',2:'🍌',3:'🥭',4:'🍓',5:'🍇',6:'🍉',7:'🍊',8:'🍋',
  9:'🍍',10:'🍷',11:'🧡',12:'🍐',13:'🥑',14:'🫐',15:'💚',16:'🥝',
  17:'🥥',18:'🟤',19:'🐉',20:'🍈',21:'🥦',22:'🥕',23:'🍅',24:'🥬',
  25:'🫑',26:'🥒',27:'⬜',28:'🧅',29:'🥔',30:'🌽',31:'🥬',32:'🧄',
  33:'🫚',34:'💚',35:'🩸',36:'🍄',37:'🌿',38:'🟢',39:'🍆',40:'🟠',
  41:'🎃',42:'🌿',43:'🍑',44:'🟣',45:'🫐',46:'🍒',47:'🟡',
  48:'🥒',49:'💚',50:'🟢',51:'🪴',52:'⬜'
};
const COLORS = {
  1:'#c0392b',2:'#f39c12',3:'#d4a017',4:'#e74c3c',5:'#6c3483',6:'#27ae60',
  7:'#e67e22',8:'#f1c40f',9:'#d4a017',10:'#922b21',11:'#e67e22',12:'#a8d8a8',
  13:'#27ae60',14:'#3b5bdb',15:'#2f9e44',16:'#74c0fc',17:'#f9ca24',18:'#795548',
  19:'#e91e8c',20:'#f39c12',21:'#1a7a3c',22:'#e67e22',23:'#c0392b',24:'#1a7a3c',
  25:'#e74c3c',26:'#27ae60',27:'#ecf0f1',28:'#8e44ad',29:'#f39c12',30:'#f1c40f',
  31:'#1a7a3c',32:'#ecf0f1',33:'#795548',34:'#2e7d32',35:'#922b21',36:'#795548',
  37:'#2e7d32',38:'#2e7d32',39:'#4a148c',40:'#e65100',41:'#e65100',42:'#2e7d32',
  43:'#e8825a',44:'#6a1b9a',45:'#6d4c41',46:'#c62828',47:'#f9a825',
  48:'#2e7d32',49:'#388e3c',50:'#9e9d24',51:'#558b2f',52:'#e0e0e0'
};

/* ── STATE ── */
let cart   = JSON.parse(ls('fm_cart')   || '[]');
let user   = JSON.parse(ls('fm_user')   || 'null');
let addrs  = JSON.parse(ls('fm_addrs')  || '[]');
let orders = JSON.parse(ls('fm_orders') || '[]');
let delType = 'std';
let pdQty   = 1;

/* ── STORAGE HELPERS ── */
function ls(k)     { return localStorage.getItem(k); }
function lss(k, v) { localStorage.setItem(k, v); }
function save() {
  lss('fm_cart',   JSON.stringify(cart));
  lss('fm_user',   JSON.stringify(user));
  lss('fm_addrs',  JSON.stringify(addrs));
  lss('fm_orders', JSON.stringify(orders));
}

/* ── PAGE ROUTING ── */
function showPage(n) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('p-' + n).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function goHome()    { showPage('home'); }
function goCart()    { renderCart(); showPage('cart'); }
function goAcc()     { renderAcc(); showPage('account'); }

/* ── PRODUCT IMAGE — use real photo, fallback to SVG emoji ── */
function prodImg(p, size = 200) {
  if (p.img) return p.img;
  const bg = COLORS[p.id] || '#27ae60';
  const em = EMOJIS[p.id] || '🌿';
  const fs = size > 150 ? 80 : 56;
  return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><rect width='${size}' height='${size}' fill='${encodeURIComponent(bg)}'/><text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' font-size='${fs}'>${em}</text></svg>`;
}

/* ── FRESHNESS BADGE HTML ── */
function freshnessBadgeHtml(p) {
  const map = {
    arrived:  { cls:'arrived',  icon:'🌱', lbl:'Arrived Today' },
    expiring: { cls:'expiring', icon:'⚠️', lbl:'Use Soon'      },
    fresh:    { cls:'fresh',    icon:'✅', lbl:'1 Day Old'     },
  };
  const f = map[p.freshness] || map['fresh'];
  return `<div class="freshness-badge ${f.cls}">${f.icon} ${f.lbl}</div>`;
}

/* ── BUILD CATEGORY CHIPS ── */
function buildCats() {
  document.getElementById('catRow').innerHTML = CATS.map(c =>
    `<button class="cat-chip ${c.key === 'all' ? 'on' : ''}" onclick="filterCat('${c.key}',this)">${c.icon} ${c.lbl}</button>`
  ).join('');
}

/* ── FILTER BY CATEGORY ── */
function filterCat(key, el) {
  document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('on'));
  if (el) el.classList.add('on');
  const list = key === 'all'     ? P
             : key === 'organic' ? P.filter(p => p.org)
             : P.filter(p => p.cat.includes(key));
  renderGrid(list, 'homeGrid');
  const titles = {
    all:'Fresh <span>Picks</span>', fruit:'🍎 <span>Fruits</span>',
    vegetable:'🥦 <span>Vegetables</span>', citrus:'🍋 <span>Citrus</span>',
    leafy:'🥬 <span>Leafy Greens</span>', root:'🥕 <span>Root Vegetables</span>',
    exotic:'🥭 <span>Exotic</span>', organic:'✅ <span>Organic</span>'
  };
  document.getElementById('prodTitle').innerHTML = titles[key] || 'Fresh <span>Picks</span>';
  showPage('home');
  setTimeout(() => document.getElementById('prods').scrollIntoView({ behavior: 'smooth' }), 100);
}

/* ── RENDER PRODUCT GRID — with quantity selector on card ── */
function renderGrid(list, gridId) {
  const g = document.getElementById(gridId);
  if (!list.length) {
    g.innerHTML = '<div class="no-res"><div style="font-size:4rem">😕</div><p style="margin-top:.5rem">No products found. Try another search.</p></div>';
    return;
  }
  g.innerHTML = list.map(p => {
    return `<div class="pcard" onclick="showProd(${p.id})">
      ${p.org  ? '<div class="org-badge">🌿 Organic</div>' : ''}
      ${p.sale ? '<div class="sale-badge">🔥 Sale</div>'   : ''}
      <div class="pcard-img">
        <img src="${prodImg(p, 400)}" alt="${p.name}" loading="lazy"
          onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\'  width=\\'400\\' height=\\'400\\'><rect width=\\'400\\' height=\\'400\\' fill=\\'${encodeURIComponent(COLORS[p.id]||'#27ae60')}\\'/><text x=\\'50%\\' y=\\'52%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' font-size=\\'100\\'>${EMOJIS[p.id]||'🌿'}</text></svg>'">
      </div>
      <div class="pcard-body">
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-unit">${p.unit}</div>
        ${freshnessBadgeHtml(p)}
        <div class="pcard-foot">
          <div class="pcard-price">₹${p.price}</div>
          <div class="pcard-qty-ctrl" onclick="event.stopPropagation()">
            <button class="cqb" onclick="cardQtyChange(${p.id},-1)">−</button>
            <span class="cqv" id="cqv-${p.id}">1</span>
            <button class="cqb" onclick="cardQtyChange(${p.id},1)">+</button>
            <button class="add-circle" onclick="cardAddToCart(${p.id})">+</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ── QUANTITY CONTROL ON PRODUCT CARD ── */
function cardQtyChange(id, delta) {
  const el = document.getElementById('cqv-' + id);
  if (!el) return;
  let current = parseInt(el.textContent) || 1;
  current = Math.max(1, current + delta);
  el.textContent = current;
}
function cardAddToCart(id) {
  const el = document.getElementById('cqv-' + id);
  const qty = el ? parseInt(el.textContent) || 1 : 1;
  addCart(id, qty);
  if (el) el.textContent = 1; // reset after add
}

/* ── SEARCH ── */
function runSearch() {
  const q = document.getElementById('q').value.trim().toLowerCase();
  if (!q) { showPage('home'); return; }
 const r = P.filter(p =>
  p.name.toLowerCase().startsWith(q)
);
  const qraw = document.getElementById('q').value.trim();
  document.getElementById('srTitle').innerHTML = `Results for "<span style="color:var(--g1)">${qraw}</span>" <span style="color:var(--gray);font-weight:400;font-size:1rem">(${r.length} items)</span>`;
  renderGrid(r, 'srGrid');
  showPage('search');
}
let lqT;
function liveQ(v) {
  clearTimeout(lqT);
  if (v.length >= 2) lqT = setTimeout(runSearch, 320);
  else if (!v) showPage('home');
}

/* ── PRODUCT DETAIL with Freshness, Health Tags, Storage Panel ── */
function showProd(id) {
  const p = P.find(x => x.id === id);
  if (!p) return;
  pdQty = 1;
  const stars = '★'.repeat(Math.floor(p.rating)) + '☆'.repeat(5 - Math.floor(p.rating));
  const imgSrc = prodImg(p, 600);

  // Freshness Indicator
  const freshMap = {
    arrived:  { icon:'🌱', label:'Arrived Today!', date:'Packed this morning', barCls:'high', pct: p.freshPct },
    fresh:    { icon:'✅', label:'1 Day Old – Still Fresh', date:'Best by tomorrow', barCls:'mid', pct: p.freshPct },
    expiring: { icon:'⚠️', label:'Use Soon', date:'Please consume quickly', barCls:'low', pct: p.freshPct },
  };
  const fi = freshMap[p.freshness] || freshMap['fresh'];
  const freshnessHtml = `
    <div class="pd-freshness">
      <div class="fresh-icon">${fi.icon}</div>
      <div class="fresh-info">
        <div class="fresh-label">${fi.label}</div>
        <div class="fresh-date">${fi.date}</div>
        <div class="fresh-bar-wrap">
          <div class="fresh-bar"><div class="fresh-bar-fill ${fi.barCls}" style="width:${fi.pct}%"></div></div>
        </div>
      </div>
      <div style="font-weight:900;color:var(--g1);font-size:1.1rem">${fi.pct}%</div>
    </div>`;

  // Health Benefit Tags
  const healthTagsHtml = (p.healthTags || []).map(ht =>
    `<span class="health-tag ${ht.cls}">${ht.icon} ${ht.lbl}</span>`
  ).join('');

  // Storage Recommendation Panel
  const storageHtml = (p.storage || []).map(tip =>
    `<div class="storage-tip"><span class="st-icon">🧊</span><span>${tip}</span></div>`
  ).join('');

  document.getElementById('pdContent').innerHTML = `
    <div class="pd-layout">
      <div class="pd-img-wrap">
        <img src="${imgSrc}" alt="${p.name}" style="background:${COLORS[p.id] || '#27ae60'}" loading="lazy"
          onerror="this.parentNode.innerHTML='<div style=\\'width:100%;aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:8rem;background:${COLORS[p.id]||'#27ae60'};border-radius:24px\\'>${EMOJIS[p.id]||'🌿'}</div>'">
      </div>
      <div>
        <div class="pd-badges">
          ${p.org  ? '<span class="pd-badge org">🌿 Organic</span>' : ''}
          ${p.sale ? '<span class="pd-badge sale">🔥 On Sale</span>' : ''}
          <span class="pd-badge new">✨ Farm Fresh</span>
        </div>
        <h1 class="pd-name">${p.name}</h1>
        <div class="pd-unit">📦 ${p.unit}</div>
        <div class="pd-rating"><span class="stars">${stars}</span><span class="pd-rc">${p.rating} (${p.rev} reviews)</span></div>
        <div class="pd-price">₹${p.price}</div>
        <div class="pd-price-total" id="pdPriceTotal">Total: ₹${p.price} × 1 = <strong>₹${p.price}</strong></div>
        ${freshnessHtml}
        <div class="pd-health-tags">${healthTagsHtml}</div>
        <p class="pd-desc">${p.desc}</p>
        <div class="pd-tags">${(p.tags || []).map(t => `<span class="pd-tag">${t}</span>`).join('')}</div>
        <div class="pd-qty-row">
          <label>Quantity:</label>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="chgPdQ(-1,${p.price})">−</button>
            <span class="qty-num" id="pdQN">1</span>
            <button class="qty-btn" onclick="chgPdQ(1,${p.price})">+</button>
          </div>
        </div>
        <div class="pd-actions">
          <button class="pd-add-btn" onclick="addCart(${p.id}, +document.getElementById('pdQN').textContent)">🛒 Add to Cart</button>
          <button class="pd-buy-btn" onclick="addCart(${p.id}, +document.getElementById('pdQN').textContent);goCart()">⚡ Buy Now</button>
        </div>
        <div class="pd-nutr">
          <h4>📊 Nutrition per 100g</h4>
          <div class="nutr-grid">
            <div class="nutr-item"><div class="nutr-val">${p.nut.cal}</div><div class="nutr-lbl">Calories</div></div>
            <div class="nutr-item"><div class="nutr-val">${p.nut.carb}</div><div class="nutr-lbl">Carbs</div></div>
            <div class="nutr-item"><div class="nutr-val">${p.nut.fib}</div><div class="nutr-lbl">Fiber</div></div>
            <div class="nutr-item"><div class="nutr-val">${p.nut.sug}</div><div class="nutr-lbl">Sugar</div></div>
          </div>
        </div>
        <div class="storage-panel">
          <h4>🧊 Storage Recommendations</h4>
          <div class="storage-tips">${storageHtml}</div>
        </div>
      </div>
    </div>
    <div class="review-section" id="reviewSection">
      ${buildReviewSection(p.id, p.rating, p.rev)}
    </div>`;
  showPage('product');
}

/* ── REVIEWS ── */
function getReviews(pid) {
  return JSON.parse(ls('fm_rev_' + pid) || '[]');
}
function saveReviews(pid, arr) {
  lss('fm_rev_' + pid, JSON.stringify(arr));
}

function buildReviewSection(pid, baseRating, baseCount) {
  const revs = getReviews(pid);
  const allRatings = revs.map(r => r.stars);
  const totalCount = baseCount + revs.length;
  // weighted avg
  const totalScore = (baseRating * baseCount) + allRatings.reduce((a,b)=>a+b,0);
  const avgRating  = totalCount > 0 ? (totalScore / totalCount) : baseRating;
  const displayAvg = avgRating.toFixed(1);
  const displayStars = '★'.repeat(Math.round(avgRating)) + '☆'.repeat(5 - Math.round(avgRating));

  // bar breakdown
  const barHtml = [5,4,3,2,1].map(s => {
    const cnt = revs.filter(r=>r.stars===s).length + (s===Math.round(baseRating) ? Math.round(baseCount/5) : 0);
    const pct = totalCount > 0 ? Math.round((cnt / totalCount) * 100) : 0;
    return `<div class="rev-bar-row">
      <span>${s}★</span>
      <div class="rev-bar-track"><div class="rev-bar-fill" style="width:${pct}%"></div></div>
      <span class="rev-bar-cnt">${cnt}</span>
    </div>`;
  }).join('');

  // write review form
  const loginNote = !user
    ? `<div class="rev-login-note">Please <button onclick="openM('authM')">login</button> to write a review</div>`
    : '';

  const formHtml = `
    <div class="write-review">
      <h4>✍️ Write a Review</h4>
      ${loginNote}
      <div style="margin-bottom:.5rem;font-size:.85rem;font-weight:700;color:var(--mid)">Your Rating *</div>
      <div class="star-picker" id="starPicker">
        <input type="radio" id="s5" name="revStars" value="5"><label for="s5">★</label>
        <input type="radio" id="s4" name="revStars" value="4"><label for="s4">★</label>
        <input type="radio" id="s3" name="revStars" value="3"><label for="s3">★</label>
        <input type="radio" id="s2" name="revStars" value="2"><label for="s2">★</label>
        <input type="radio" id="s1" name="revStars" value="1"><label for="s1">★</label>
      </div>
      <div class="rev-name-row">
        <div class="fg" style="margin:0"><label>Review Title</label><input type="text" id="revTitle" placeholder="e.g. Excellent quality!" ${!user?'disabled':''}></div>
        <div class="fg" style="margin:0"><label>Your Name</label><input type="text" id="revName" placeholder="Display name" value="${user ? user.fn+' '+user.ln : ''}" ${!user?'disabled':''}></div>
      </div>
      <textarea class="rev-textarea" id="revBody" placeholder="Share your experience with this product…" ${!user?'disabled':''}></textarea>
      <button class="rev-submit-btn" onclick="submitReview(${pid})" ${!user?'disabled style="opacity:.5;cursor:not-allowed"':''}>Submit Review ★</button>
    </div>`;

  // review list
  const listHtml = revs.length === 0
    ? `<div class="rev-no-reviews">🌿 Be the first to review this product!</div>`
    : revs.slice().reverse().map((r,i) => `
      <div class="rev-card">
        <div class="rev-card-top">
          <div>
            <div class="rev-author">👤 ${r.name}</div>
            <div class="rev-date">${r.date}</div>
          </div>
          ${r.uid === (user&&user.em) ? `<button onclick="deleteReview(${pid},${revs.length-1-i})" style="background:none;border:none;color:var(--lgray);cursor:pointer;font-size:.8rem;font-family:inherit" title="Delete your review">🗑 Delete</button>` : ''}
        </div>
        <div class="rev-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
        ${r.title ? `<div class="rev-title">${r.title}</div>` : ''}
        <div class="rev-body">${r.body}</div>
        <div class="rev-helpful">
          Helpful?
          <button onclick="markHelpful(${pid},${revs.length-1-i},this)">👍 ${r.helpful||0}</button>
        </div>
      </div>`).join('');

  return `
    <h3>⭐ Customer Reviews</h3>
    <div class="review-summary">
      <div style="text-align:center">
        <div class="rev-big-num">${displayAvg}</div>
        <div class="rev-big-stars">${displayStars}</div>
        <div class="rev-big-count">${totalCount} reviews</div>
      </div>
      <div class="rev-bars">${barHtml}</div>
    </div>
    ${formHtml}
    <div class="review-list" id="revList">${listHtml}</div>`;
}

function submitReview(pid) {
  if (!user) { openM('authM'); toast('Please login to review', 'warn'); return; }
  const starsEl = document.querySelector('input[name="revStars"]:checked');
  if (!starsEl) { toast('Please select a star rating', 'err'); return; }
  const stars = parseInt(starsEl.value);
  const title = document.getElementById('revTitle').value.trim();
  const name  = document.getElementById('revName').value.trim() || user.fn;
  const body  = document.getElementById('revBody').value.trim();
  if (!body) { toast('Please write your review', 'err'); return; }
  const revs = getReviews(pid);
  revs.push({
    stars, title, name, body,
    uid: user.em,
    date: new Date().toLocaleDateString('en-IN'),
    helpful: 0
  });
  saveReviews(pid, revs);
  toast('✅ Review submitted! Thank you!', 'ok');
  // re-render review section
  const p = P.find(x => x.id === pid);
  document.getElementById('reviewSection').innerHTML = buildReviewSection(pid, p.rating, p.rev);
}

function deleteReview(pid, idx) {
  const revs = getReviews(pid);
  if (revs[idx] && revs[idx].uid === (user && user.em)) {
    revs.splice(idx, 1);
    saveReviews(pid, revs);
    const p = P.find(x => x.id === pid);
    document.getElementById('reviewSection').innerHTML = buildReviewSection(pid, p.rating, p.rev);
    toast('Review deleted', 'ok');
  }
}

function markHelpful(pid, idx, btn) {
  const revs = getReviews(pid);
  if (!revs[idx]) return;
  revs[idx].helpful = (revs[idx].helpful || 0) + 1;
  saveReviews(pid, revs);
  btn.textContent = '👍 ' + revs[idx].helpful;
  btn.disabled = true;
  toast('Thanks for your feedback!', 'ok');
}

/* ── PRODUCT DETAIL QTY — updates real-time price ── */
function chgPdQ(d, unitPrice) {
  pdQty = Math.max(1, pdQty + d);
  document.getElementById('pdQN').textContent = pdQty;
  const totalEl = document.getElementById('pdPriceTotal');
  if (totalEl) {
    totalEl.innerHTML = `Total: ₹${unitPrice} × ${pdQty} = <strong>₹${unitPrice * pdQty}</strong>`;
  }
}

/* ── CART OPERATIONS ── */
function addCart(id, qty) {
  qty = +qty || 1;
  const ex = cart.find(c => c.id === id);
  if (ex) ex.qty += qty; else cart.push({ id, qty });
  save(); updB();
  const p = P.find(x => x.id === id);
  toast(`${EMOJIS[id] || '🛒'} ${p.name} ×${qty} added to cart!`, 'ok');
}
function updB() {
  document.getElementById('cb').textContent = cart.reduce((s, c) => s + c.qty, 0);
}
function getSub() {
  return cart.reduce((s, c) => {
    const p = P.find(x => x.id === c.id);
    return s + (p ? p.price * c.qty : 0);
  }, 0);
}

/* ── RENDER CART — real-time price updates ── */
function renderCart() {
  const w = document.getElementById('cartContent');
  if (!cart.length) {
    w.innerHTML = `<div class="cart-empty"><div class="ei">🛒</div><h3 style="margin-bottom:.5rem">Your cart is empty</h3><p style="color:var(--gray);margin-bottom:1.5rem">Add some fresh items to get started!</p><button class="btn-shop" onclick="goHome()">Shop Now</button></div>`;
    return;
  }
  const sub = getSub();
  const del = delType === 'exp' ? 49 : (sub >= 500 ? 0 : 40);
  const tot = sub + del;
  w.innerHTML = `<div class="cart-layout">
    <div class="cart-box">
      <h3>Cart Items (${cart.reduce((s, c) => s + c.qty, 0)} items)</h3>
      ${cart.map(c => {
        const p = P.find(x => x.id === c.id);
        if (!p) return '';
        return `<div class="citem">
          <img class="citem-img" src="${prodImg(p, 150)}" alt="${p.name}" style="background:${COLORS[p.id] || '#27ae60'}" loading="lazy"
            onerror="this.style.display='flex';this.style.alignItems='center';this.style.justifyContent='center';this.style.fontSize='2rem';this.src='';this.alt='${EMOJIS[p.id]||'🌿'}'">
          <div class="citem-info">
            <div class="citem-name">${p.name}</div>
            <div class="citem-unit">${p.unit} · ₹${p.price} each</div>
            <div class="cqrow">
              <button class="cqb" onclick="chgCQ(${p.id},-1)">−</button>
              <span class="cqv">${c.qty}</span>
              <button class="cqb" onclick="chgCQ(${p.id},1)">+</button>
            </div>
          </div>
          <div class="citem-right">
            <span class="citem-price">₹${p.price * c.qty}</span>
            <button class="crem" onclick="remC(${p.id})">🗑</button>
          </div>
        </div>`;
      }).join('')}
    </div>
    <div class="ord-sum">
      <h3>Order Summary</h3>
      <div class="os-row"><span>Subtotal (${cart.reduce((s, c) => s + c.qty, 0)} items)</span><span>₹${sub}</span></div>
      <div class="os-row"><span>Delivery</span><span>${del === 0 ? '<span class="os-free">Free 🎉</span>' : '₹' + del}</span></div>
      ${sub < 500 && del > 0 ? `<div class="os-note">🛒 Add ₹${500 - sub} more for free delivery!</div>` : ''}
      <div class="os-row tot"><span>Total</span><span>₹${tot}</span></div>
      <div class="coupon-row">
        <input type="text" placeholder="Coupon code…" id="couponI">
        <button onclick="applyCoupon()">Apply</button>
      </div>
      <button class="co-btn" onclick="goCheckout()">Proceed to Checkout →</button>
    </div>
  </div>`;
}
function chgCQ(id, d) {
  const i = cart.find(c => c.id === id);
  if (!i) return;
  i.qty = Math.max(0, i.qty + d);
  if (i.qty === 0) cart = cart.filter(c => c.id !== id);
  save(); updB(); renderCart();
}
function remC(id) {
  cart = cart.filter(c => c.id !== id);
  save(); updB(); renderCart(); toast('Item removed');
}
function applyCoupon() {
  const v = document.getElementById('couponI').value.trim().toUpperCase();
  if (v === 'FRESH10') toast('✅ 10% discount applied!', 'ok');
  else toast('Invalid coupon code', 'err');
}

/* ── CHECKOUT ── */
function goCheckout() {
  if (!user) { openM('authM'); toast('Please login to checkout', 'warn'); return; }
  renderCheckout();
  showPage('checkout');
}
function renderCheckout() {
  const ad = document.getElementById('coAddr');
  if (!addrs.length) {
    ad.innerHTML = `<p style="color:var(--gray)">No address saved. <button style="color:var(--g1);background:none;border:none;cursor:pointer;font-weight:800;font-family:inherit" onclick="openM('addrM')">+ Add Address</button></p>`;
  } else {
    ad.innerHTML = `<div class="addr-grid" style="grid-template-columns:1fr 1fr">${
      addrs.map((a, i) => `<div class="addr-card ${i === 0 ? 'sel' : ''}" onclick="this.closest('.addr-grid').querySelectorAll('.addr-card').forEach(x=>x.classList.remove('sel'));this.classList.add('sel')">
        <h4>${a.lbl} ${i === 0 ? '<span class="def-badge">Default</span>' : ''}</h4>
        <p>${a.nm}<br>${a.l1}${a.l2 ? ', ' + a.l2 : ''}<br>${a.ct}, ${a.st} – ${a.pn}${a.ph ? '<br>📞 ' + a.ph : ''}</p>
      </div>`).join('')
    }</div><button class="add-addr-btn" style="margin-top:.5rem" onclick="openM('addrM')">+ Add New Address</button>`;
  }
  const sub = getSub();
  const del = delType === 'exp' ? 49 : (sub >= 500 ? 0 : 40);
  document.getElementById('coSum').innerHTML = `<div class="ord-sum">
    <h3>Order Summary</h3>
    ${cart.map(c => {
      const p = P.find(x => x.id === c.id);
      return p ? `<div class="os-row"><span>${p.name} ×${c.qty}</span><span>₹${p.price * c.qty}</span></div>` : '';
    }).join('')}
    <div class="os-row"><span>Subtotal</span><span>₹${sub}</span></div>
    <div class="os-row"><span>Delivery</span><span>${del === 0 ? '<span class="os-free">Free</span>' : '₹' + del}</span></div>
    <div class="os-row tot"><span>Total</span><span>₹${sub + del}</span></div>
  </div>`;
}
function selDel(el, t) {
  document.querySelectorAll('.del-opt').forEach(x => x.classList.remove('on'));
  el.classList.add('on');
  delType = t;
  renderCheckout();
}
function selPay(el, t) {
  document.querySelectorAll('.pay-opt').forEach(x => x.classList.remove('on'));
  el.classList.add('on');
  document.getElementById('cardForm').style.display = t === 'card' ? 'block' : 'none';
}
function placeOrder() {
  if (!addrs.length) { toast('Please add a delivery address!', 'err'); return; }
  const sub = getSub();
  const del = delType === 'exp' ? 49 : (sub >= 500 ? 0 : 40);
  const oid = 'FM' + Date.now().toString().slice(-7);
  orders.unshift({
    id: oid,
    items: cart.map(c => {
      const p = P.find(x => x.id === c.id);
      return { name: p.name, qty: c.qty, price: p.price };
    }),
    total: sub + del,
    date: new Date().toLocaleDateString('en-IN'),
    status: 'Processing',
    addr: addrs[0]
  });
  cart = []; save(); updB();
  document.getElementById('succMsg').innerHTML = `Order <strong>#${oid}</strong> confirmed! Your fresh produce is being packed. 🥦🍎`;
  document.getElementById('succEta').textContent = delType === 'exp' ? '⚡ Estimated arrival: 45 minutes' : '🚚 Estimated arrival: 2–3 hours';
  showPage('success');
}

/* ── ACCOUNT ── */
function renderAcc() {
  if (!user) {
    document.getElementById('accLogin').style.display  = 'block';
    document.getElementById('accContent').style.display = 'none';
  } else {
    document.getElementById('accLogin').style.display  = 'none';
    document.getElementById('accContent').style.display = 'block';
    const init = ((user.fn || '')[0] || '').toUpperCase() + ((user.ln || '')[0] || '').toUpperCase();
    document.getElementById('accAv').textContent = init || '👤';
    document.getElementById('accNm').textContent = `${user.fn} ${user.ln}`;
    document.getElementById('accEm').textContent = user.em;
    document.getElementById('pFN').value = user.fn || '';
    document.getElementById('pLN').value = user.ln || '';
    document.getElementById('pEm').value = user.em || '';
    document.getElementById('pPh').value = user.ph || '';
    renderAddrGrid();
    renderOrdList();
  }
}
function swAccTab(tab, el) {
  document.querySelectorAll('.acc-sec').forEach(s => s.classList.remove('on'));
  document.getElementById('as-' + tab).classList.add('on');
  if (el) { document.querySelectorAll('.acc-link').forEach(l => l.classList.remove('on')); el.classList.add('on'); }
}
function saveProf() {
  user.fn = document.getElementById('pFN').value;
  user.ln = document.getElementById('pLN').value;
  user.em = document.getElementById('pEm').value;
  user.ph = document.getElementById('pPh').value;
  save(); renderAcc(); toast('✅ Profile updated!', 'ok');
}
function renderAddrGrid() {
  document.getElementById('addrGrid').innerHTML = addrs.map((a, i) => `
    <div class="addr-card">
      <h4>${a.lbl} ${i === 0 ? '<span class="def-badge">Default</span>' : ''}</h4>
      <p>${a.nm}<br>${a.l1}${a.l2 ? ', ' + a.l2 : ''}<br>${a.ct}, ${a.st} – ${a.pn}${a.ph ? '<br>📞 ' + a.ph : ''}</p>
      <div class="addr-actions">
        <button class="addr-del" onclick="delAddr(${i})">✕ Remove</button>
        ${i > 0 ? `<button class="addr-def-btn" onclick="setDef(${i})">⭐ Default</button>` : ''}
      </div>
    </div>`).join('');
}
function delAddr(i) { addrs.splice(i, 1); save(); renderAddrGrid(); toast('Address removed'); }
function setDef(i)  { const a = addrs.splice(i, 1)[0]; addrs.unshift(a); save(); renderAddrGrid(); toast('Default address updated', 'ok'); }
function renderOrdList() {
  const d = document.getElementById('ordList');
  if (!orders.length) {
    d.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--gray)">📦 No orders yet. Start shopping!</div>';
    return;
  }
  d.innerHTML = orders.map(o => `<div class="ord-card">
    <div class="ord-top">
      <div><div class="ord-id">Order #${o.id}</div><div class="ord-date">📅 ${o.date}</div></div>
      <span class="ord-stat s-${o.status.toLowerCase()}">${o.status}</span>
    </div>
    <div class="ord-items">${o.items.map(i => `${i.name} ×${i.qty}`).join(' · ')}</div>
    <div class="ord-bot">
      <span class="ord-total">Total: ₹${o.total}</span>
      <button class="ord-track" onclick="toast('📍 Your order is on the way!','ok')">Track Order</button>
    </div>
  </div>`).join('');
}

/* ── AUTH ── */
function doLogin() {
  const em = document.getElementById('lEmail').value.trim();
  const pw = document.getElementById('lPass').value;
  if (!em || !pw) { toast('Please fill all fields', 'err'); return; }
  const saved = JSON.parse(ls('fmreg_' + em) || 'null');
  if (!saved) { toast('Account not found. Please register.', 'err'); return; }
  if (saved.pw !== pw) { toast('Incorrect password', 'err'); return; }
  user = { fn: saved.fn, ln: saved.ln, em: saved.em, ph: saved.ph };
  save(); closeM('authM');
  toast(`👋 Welcome back, ${user.fn}!`, 'ok');
  renderAcc();
}
function doReg() {
  const fn  = document.getElementById('rFN').value.trim();
  const ln  = document.getElementById('rLN').value.trim();
  const em  = document.getElementById('rEm').value.trim();
  const ph  = document.getElementById('rPh').value.trim();
  const pw  = document.getElementById('rPw').value;
  const pw2 = document.getElementById('rPw2').value;
  if (!fn || !ln || !em || !pw) { toast('Please fill all required fields', 'err'); return; }
  if (pw.length < 6) { toast('Password must be at least 6 characters', 'err'); return; }
  if (pw !== pw2) { toast('Passwords do not match', 'err'); return; }
  lss('fmreg_' + em, JSON.stringify({ fn, ln, em, ph, pw }));
  user = { fn, ln, em, ph };
  save(); closeM('authM');
  toast(`🎉 Welcome to FreshMart, ${fn}!`, 'ok');
  renderAcc();
}
function doLogout() { user = null; save(); renderAcc(); toast('Logged out successfully'); }

/* ── ADDRESS ── */
function saveAddr() {
  const lbl = document.getElementById('aLbl').value.trim() || 'Home';
  const nm  = document.getElementById('aNm').value.trim();
  const ph  = document.getElementById('aPh').value.trim();
  const l1  = document.getElementById('aL1').value.trim();
  const l2  = document.getElementById('aL2').value.trim();
  const ct  = document.getElementById('aCt').value.trim();
  const st  = document.getElementById('aSt').value.trim();
  const pn  = document.getElementById('aPn').value.trim();
  if (!l1 || !ct || !st || !pn) { toast('Please fill required fields (*)', 'err'); return; }
  addrs.push({ lbl, nm, ph, l1, l2, ct, st, pn });
  save(); closeM('addrM'); toast('📍 Address saved!', 'ok');
  renderAddrGrid();
  ['aLbl','aNm','aPh','aL1','aL2','aCt','aSt','aPn'].forEach(id => document.getElementById(id).value = '');
}

/* ── MODALS ── */
function openM(id)  { document.getElementById(id).classList.add('on'); }
function closeM(id) { document.getElementById(id).classList.remove('on'); }
function swTab(t) {
  ['ln','rg'].forEach(x => {
    document.getElementById('tab-' + x).classList.toggle('on', x === t);
    document.getElementById('tc-'  + x).classList.toggle('on', x === t);
  });
}

/* ── TOAST ── */
let _tt;
function toast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(_tt);
  _tt = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  buildCats();
  renderGrid(P, 'homeGrid');
  updB();
});