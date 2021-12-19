export const headerC= 64;
export const eventsC= 71;

export const culture= 24;
export const awCulture = [culture,
/*art*/	73,
/*geographic*/	74,
/*historic*/	26
];
export const awCultureLitteral = ["Culture:",
  "art",
  "geographic",
  "historic"
  ];
export const lifestyle= 28;
export const awLifestyle = [lifestyle,
/*  language*/	79,
/*  sport	*/80,
/* taste of france*/	78,
/* typical local product*/	77
];
export const awLifestyleLitteral = ["Lifestyle:",
  "language",
  "sport",
  "taste of france",
  "typical local product"
  ];
export const initiative= 37;
export const awInitiative = [initiative,
  /*  community	*/86,
  /*  ecology	*/84,
  /*  health	*/87,
  /*  society */	85
  ];

  export const awInitiativeLitteral = ["Initiative:",
  "community",
  "ecology",
  "health",
  "society"
  ];

export const science= 33;
export const awScience = [science];
export const awScienceLitteral= ["Science:"];


export const awSpAny = awCulture.concat(awLifestyle,awInitiative,awScience);
 
export const categoriesWidgetsHome = {
  "header" : headerC,
  "events": eventsC,
  "culture": culture,
  "lifestyle": lifestyle,
  "science": science,
  "initiative": initiative
}
  
