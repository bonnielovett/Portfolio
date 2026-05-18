const portfolioItems = [
  // Drawings
  {
    id: 'drawings-IMG_0071',
    section: 'Drawings',
    file: 'drawings/IMG_0071.png',
    thumbnail: 'drawings/IMG_0071_thumb.png',
    title: 'Drawing #1',
    date: '2025',
    dimensions: 'Unspecified',
    media: 'Charcoal on drawing paper',
    description: 'A study in line.'
  },
  {
    id: 'drawings-Camp Orkila',
    section: 'Drawings',
    file: 'drawings/Camp Orkila.png',
    thumbnail: 'drawings/Camp Orkila_thumb.png',
    title: 'Camp Orkila',
    date: '2025',
    dimensions: 'Unspecified',
    media: 'Charcoal on drawing paper',
    description: 'A drawing that captures atmosphere and memory from camp life.'
  },
  {
    id: 'drawings-IMG_0985',
    section: 'Drawings',
    file: 'drawings/IMG_0985.png',
    thumbnail: 'drawings/IMG_0985_thumb.png',
    title: 'Boxes',
    date: '2025',
    dimensions: 'Unspecified',
    media: 'Charcoal on drawing paper',
    description: 'A composition of shapes and shadows in hand-drawn charcoal.'
  },
  {
    id: 'drawings-IMG_1267',
    section: 'Drawings',
    file: 'drawings/IMG_1267.png',
    thumbnail: 'drawings/IMG_1267_thumb.png',
    title: 'Bike',
    date: '2024',
    dimensions: 'Unspecified',
    media: 'Charcoal on drawing paper',
    description: 'A study of movement and structure in everyday form.'
  },
  {
    id: 'drawings-IMG_1284',
    section: 'Drawings',
    file: 'drawings/IMG_1284.png',
    thumbnail: 'drawings/IMG_1284_thumb.png',
    title: 'Still Life',
    date: '2024',
    dimensions: 'Unspecified',
    media: 'Charcoal on drawing paper',
    description: 'A quiet still life that explores texture and light.'
  },
  {
    id: 'drawings-IMG_1295',
    section: 'Drawings',
    file: 'drawings/IMG_1295.png',
    thumbnail: 'drawings/IMG_1295_thumb.png',
    title: 'Face and Hands',
    date: '2024',
    dimensions: 'Unspecified',
    media: 'Charcoal on drawing paper',
    description: 'A figurative drawing emphasizing gesture and expression.'
  },
  // Foundation
  {
    id: 'foundation-IMG_0379',
    section: 'Foundation - 2D',
    file: 'foundation/IMG_0379.png',
    thumbnail: 'foundation/IMG_0379_thumb.png',
    title: '40 Squares of Freedom',
    date: '2023',
    dimensions: 'Unspecified',
    media: 'Sharpie on drawing paper',
    description: 'A bold foundational study in pattern and rhythm.'
  },
  {
    id: 'foundation-IMG_0694',
    section: 'Foundation - 2D',
    file: 'foundation/IMG_0694.png',
    thumbnail: 'foundation/IMG_0694_thumb.png',
    title: 'Values of Audrey',
    date: '2023',
    dimensions: 'Unspecified',
    media: 'Paint swatches on drawing paper',
    description: 'A layered exploration of color, value, and composition.'
  },
  {
    id: 'foundation-Textured Fun',
    section: 'Foundation - 3D',
    file: 'foundation/Textured Fun.png',
    thumbnail: 'foundation/Textured Fun_thumb.png',
    title: 'Textured Fun',
    date: '2024',
    dimensions: 'Unspecified',
    media: 'Cardboard, hot glue',
    description: 'An experimental surface study built with cardboard and glue.'
  },
  {
    id: 'foundation-cascade',
    section: 'Foundation - 3D',
    file: 'foundation/cascade.png',
    thumbnail: 'foundation/cascade_thumb.png',
    title: 'Cascade',
    date: '2024',
    dimensions: '6" x 1',
    media: 'Aluminum foil, hot glue',
    description: 'A tall, playful structure built from reflective foil and texture.'
  },
  // Concentration
  {
    id: 'concentration-Adrift',
    section: 'Concentration: Sculpture',
    file: 'concentration/Adrift.png',
    thumbnail: 'concentration/Adrift_thumb.png',
    title: 'Adrift',
    date: '2025',
    dimensions: 'Unspecified',
    media: 'Unspecified',
    description: 'A piece that evokes floating motion and open possibility.'
  },
  {
    id: 'concentration-Little Bonnie',
    section: 'Concentration: Sculpture',
    file: 'concentration/Little Bonnie.png',
    thumbnail: 'concentration/Little Bonnie_thumb.png',
    title: 'Little Bonnie',
    date: '2025',
    dimensions: 'Unspecified',
    media: 'Unspecified',
    description: 'A found-object sculpture that celebrates personal memory.'
  },
  {
    id: 'concentration-IMG_0242',
    section: 'Concentration: Fiber Art',
    file: 'concentration/IMG_0242.png',
    thumbnail: 'concentration/IMG_0242_thumb.png',
    title: 'Collar of Color',
    date: '2025',
    dimensions: '15.5" x 17.5"',
    media: 'Aluminum wire, linen fabric',
    description: 'A vibrant textile piece built around color and movement.'
  },
  {
    id: 'concentration-IMG_0256',
    section: 'Concentration: Fiber Art',
    file: 'concentration/IMG_0256.png',
    thumbnail: 'concentration/IMG_0256_thumb.png',
    title: 'Threads of Friendship',
    date: '2025',
    dimensions: '30" x 20.25"',
    media: 'Yarn, embroidery thread, linen, chairs',
    description: 'A narrative installation linking craft and relationship.'
  },
  {
    id: 'concentration-IMG_0356',
    section: 'Concentration: Sculpture',
    file: 'concentration/IMG_0356.png',
    thumbnail: 'concentration/IMG_0356_thumb.png',
    title: 'Quarrel',
    date: '2026',
    dimensions: 'Unspecified',
    media: 'Plaster bandage, plaster of paris',
    description: 'A sculptural study in tension, form, and surface.'
  },
  {
    id: 'concentration-trees 1,2,3',
    section: 'Concentration: Sculpture',
    file: 'concentration/trees 1,2,3.png',
    thumbnail: 'concentration/trees 1,2,3_thumb.png',
    title: 'Tree #1, #2, #3',
    date: '2026',
    dimensions: 'Unspecified',
    media: 'Unspecified',
    description: 'A trio of organic forms that suggest growth and structure.'
  },
  {
    id: 'concentration-Red figures 1,2,3',
    section: 'Concentration: Sculpture',
    file: 'concentration/Red figures 1,2,3.png',
    thumbnail: 'concentration/Red figures 1,2,3_thumb.png',
    title: 'Red Figure #1, #2, #3',
    date: '2026',
    dimensions: 'Unspecified',
    media: 'Aluminum wire, aluminum foil, yarn',
    description: 'A playful set of figures built with line and textile.'
  },
  {
    id: 'concentration-IMG_3529',
    section: 'Concentration: Fiber Art',
    file: 'concentration/IMG_3529.png',
    thumbnail: 'concentration/IMG_3529_thumb.png',
    title: 'Trying Something New',
    date: '2025',
    dimensions: '8" x 10"',
    media: 'Yarn, embroidery thread, cotton, polyester',
    description: 'A tactile composition using stitch and soft materials.'
  },
  {
    id: 'concentration-A lovely snuggly bendy',
    section: 'Concentration: Fiber Art',
    file: 'concentration/A lovely snuggly bendy.png',
    thumbnail: 'concentration/A lovely snuggly bendy_thumb.png',
    title: 'A Lovely Snuggly Bendy Friendy',
    date: '2025',
    dimensions: '16" x 30"',
    media: 'Felt squares, stuffing, embroidery thread',
    description: 'A joyful soft sculpture inspired by comfort and play.'
  },
  {
    id: 'concentration-IMG_3544',
    section: 'Concentration: Fiber Art',
    file: 'concentration/IMG_3544.png',
    thumbnail: 'concentration/IMG_3544_thumb.png',
    title: 'FISHES!!',
    date: '2025',
    dimensions: '15" x 17.5"',
    media: 'Embroidery thread, ink, polyester',
    description: 'A vibrant textile composition with aquatic energy.'
  }
];
