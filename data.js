const portfolioItems = [
  // Drawings
  {
    id: 'drawings-IMG_0071',
    section: 'Drawings',
    file: 'drawings/IMG_0071.png',
    title: 'Drawing #1',
    date: '2025',
    dimensions: 'Unspecified',
    media: 'Charcoal on drawing paper',
    description: 'A study in line.'
  },
  {
    id: 'drawings-IMG_0491',
    section: 'Drawings',
    file: 'drawings/IMG_0491.png',
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
    title: 'Face and Hands',
    date: '2024',
    dimensions: 'Unspecified',
    media: 'Charcoal on drawing paper',
    description: 'A figurative drawing emphasizing gesture and expression.'
  },
  // Foundation
  {
    id: 'foundation-IMG_0379',
    section: 'Foundation',
    file: 'foundation/IMG_0379.png',
    title: '40 Squares of Freedom',
    date: '2023',
    dimensions: 'Unspecified',
    media: 'Sharpie on drawing paper',
    description: 'A bold foundational study in pattern and rhythm.'
  },
  {
    id: 'foundation-IMG_0694',
    section: 'Foundation',
    file: 'foundation/IMG_0694.png',
    title: 'Values of Audrey',
    date: '2023',
    dimensions: 'Unspecified',
    media: 'Paint swatches on drawing paper',
    description: 'A layered exploration of color, value, and composition.'
  },
  {
    id: 'foundation-IMG_2512',
    section: 'Foundation',
    file: 'foundation/IMG_2512.png',
    title: 'Textured Fun',
    date: '2024',
    dimensions: 'Unspecified',
    media: 'Cardboard, hot glue',
    description: 'An experimental surface study built with cardboard and glue.'
  },
  {
    id: 'foundation-IMG_2533',
    section: 'Foundation',
    file: 'foundation/IMG_2533.png',
    title: 'My Eyes Are Way Up Here',
    date: '2024',
    dimensions: 'Unspecified',
    media: 'Cardboard, paper mache, plaster gauze',
    description: 'A sculptural study that plays with scale and viewer perspective.'
  },
  {
    id: 'foundation-IMG_2563',
    section: 'Foundation',
    file: 'foundation/IMG_2563.png',
    title: 'Cascade',
    date: '2024',
    dimensions: '6" x 1\'',
    media: 'Aluminum foil, hot glue',
    description: 'A tall, playful structure built from reflective foil and texture.'
  },
  // Concentration
  {
    id: 'concentration-IMG_0127',
    section: 'Concentration',
    file: 'concentration/IMG_0127.png',
    title: 'Adrift',
    date: '2025',
    dimensions: 'Unspecified',
    media: 'Unspecified',
    description: 'A piece that evokes floating motion and open possibility.'
  },
  {
    id: 'concentration-IMG_0238',
    section: 'Concentration',
    file: 'concentration/IMG_0238.png',
    title: 'Little Bonnie',
    date: '2025',
    dimensions: 'Unspecified',
    media: 'Unspecified',
    description: 'A found-object sculpture that celebrates personal memory.'
  },
  {
    id: 'concentration-IMG_0242',
    section: 'Concentration',
    file: 'concentration/IMG_0242.png',
    title: 'Collar of Color',
    date: '2025',
    dimensions: '15.5" x 17.5"',
    media: 'Aluminum wire, linen fabric',
    description: 'A vibrant textile piece built around color and movement.'
  },
  {
    id: 'concentration-IMG_0256',
    section: 'Concentration',
    file: 'concentration/IMG_0256.png',
    title: 'Threads of Friendship',
    date: '2025',
    dimensions: '30" x 20.25"',
    media: 'Yarn, embroidery thread, linen, chairs',
    description: 'A narrative installation linking craft and relationship.'
  },
  {
    id: 'concentration-IMG_0356',
    section: 'Concentration',
    file: 'concentration/IMG_0356.png',
    title: 'Quarrel',
    date: '2026',
    dimensions: 'Unspecified',
    media: 'Plaster gauze, plaster mold',
    description: 'A sculptural study in tension, form, and surface.'
  },
  {
    id: 'concentration-IMG_0358',
    section: 'Concentration',
    file: 'concentration/IMG_0358.png',
    title: 'Tree #1, #2, #3',
    date: '2026',
    dimensions: 'Unspecified',
    media: 'Unspecified',
    description: 'A trio of organic forms that suggest growth and structure.'
  },
  {
    id: 'concentration-IMG_0478',
    section: 'Concentration',
    file: 'concentration/IMG_0478.png',
    title: 'Red Figure #1, #2, #3',
    date: '2026',
    dimensions: 'Unspecified',
    media: 'Aluminum wire, aluminum foil, yarn',
    description: 'A playful set of figures built with line and textile.'
  },
  {
    id: 'concentration-IMG_3529',
    section: 'Concentration',
    file: 'concentration/IMG_3529.png',
    title: 'Trying Something New',
    date: '2025',
    dimensions: '8" x 10"',
    media: 'Yarn, embroidery thread, cotton, polyester',
    description: 'A tactile composition using stitch and soft materials.'
  },
  {
    id: 'concentration-IMG_3535',
    section: 'Concentration',
    file: 'concentration/IMG_3535.png',
    title: 'A Lovely Snuggly Bendy Friendy',
    date: '2025',
    dimensions: '16" x 30"',
    media: 'Felt squares, stuffing, embroidery thread',
    description: 'A joyful soft sculpture inspired by comfort and play.'
  },
  {
    id: 'concentration-IMG_3544',
    section: 'Concentration',
    file: 'concentration/IMG_3544.png',
    title: 'FISHES!!',
    date: '2025',
    dimensions: '15" x 17.5"',
    media: 'Embroidery thread, ink, polyester',
    description: 'A vibrant textile composition with aquatic energy.'
  }
];
