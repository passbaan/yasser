
const state = {
    selectOptions: {
        "maitreDouvrage": [
            {
                "value": "01_Monsieur",
                "text": "01_Monsieur"
            },
            {
                "value": "02_Madame",
                "text": "02_Madame"
            },
            {
                "value": "05_Société Commerciale",
                "text": "05_Société Commerciale"
            },
            {
                "value": "06_Etat",
                "text": "06_Etat"
            },
            {
                "value": "07_Collectivité Locale",
                "text": "07_Collectivité Locale"
            },
            {
                "value": "08_Etablissement Public",
                "text": "08_Etablissement Public"
            },
            {
                "value": "09_Syndic des copropriétaires",
                "text": "09_Syndic des copropriétaires"
            },
            {
                "value": "10_Association",
                "text": "10_Association"
            },
            {
                "value": "11_Ordre Professionne",
                "text": "11_Ordre Professionne"
            },
            {
                "value": "13_Coopérative",
                "text": "13_Coopérative"
            },
            {
                "value": "14_Syndicat Professionnel",
                "text": "14_Syndicat Professionnel"
            },
            {
                "value": "15_Habous",
                "text": "15_Habous"
            },
            {
                "value": "17_Groupements d'Intérêt Economique",
                "text": "17_Groupements d'Intérêt Economique"
            }
        ],

        "prefectureOuProvince": [
            {
                "value": "16",
                "text": "AGADIR-IDA-OU-TANANE"
            },
            {
                "value": "49",
                "text": "AL HAOUZ"
            },
            {
                "value": "25",
                "text": "AL HOCEIMA"
            },
            {
                "value": "60",
                "text": "AOUSSERD"
            },
            {
                "value": "38",
                "text": "ASSA-ZAG"
            },
            {
                "value": "30",
                "text": "AZILAL"
            },
            {
                "value": "29",
                "text": "BENI MELLAL"
            },
            {
                "value": "73",
                "text": "BENSLIMANE"
            },
            {
                "value": "82",
                "text": "BERKANE"
            },
            {
                "value": "74",
                "text": "BERRECHID"
            },
            {
                "value": "45",
                "text": "BOUJDOUR"
            },
            {
                "value": "35",
                "text": "BOULEMANE"
            },
            {
                "value": "5",
                "text": "CASABLANCA"
            },
            {
                "value": "80",
                "text": "CHEFCHAOUEN"
            },
            {
                "value": "48",
                "text": "CHICHAOUA"
            },
            {
                "value": "18",
                "text": "CHTOUKA AIT BAHA"
            },
            {
                "value": "66",
                "text": "DRIOUCH"
            },
            {
                "value": "54",
                "text": "EL HAJEB"
            },
            {
                "value": "68",
                "text": "EL JADIDA"
            },
            {
                "value": "50",
                "text": "EL KELAA DES SERAGHN"
            },
            {
                "value": "57",
                "text": "ERRACHIDIA"
            },
            {
                "value": "39",
                "text": "ES-SEMARA"
            },
            {
                "value": "51",
                "text": "ESSAOUIRA"
            },
            {
                "value": "76",
                "text": "FAHS-ANJRA"
            },
            {
                "value": "32",
                "text": "FES"
            },
            {
                "value": "64",
                "text": "FIGUIG"
            },
            {
                "value": "31",
                "text": "FQUIH BEN SALAH"
            },
            {
                "value": "36",
                "text": "GUELMIM"
            },
            {
                "value": "28",
                "text": "GUERCIF"
            },
            {
                "value": "55",
                "text": "IFRANE"
            },
            {
                "value": "17",
                "text": "INEZGANE-AÏT MELLOUL"
            },
            {
                "value": "62",
                "text": "JERADA"
            },
            {
                "value": "41",
                "text": "KENITRA"
            },
            {
                "value": "4",
                "text": "KHEMISSET"
            },
            {
                "value": "56",
                "text": "KHENIFRA"
            },
            {
                "value": "72",
                "text": "KHOURIBGA"
            },
            {
                "value": "44",
                "text": "LAAYOUNE"
            },
            {
                "value": "79",
                "text": "LARACHE"
            },
            {
                "value": "78",
                "text": "M'DIQ-FNIDEQ"
            },
            {
                "value": "47",
                "text": "MARRAKECH"
            },
            {
                "value": "15",
                "text": "MEDIOUNA"
            },
            {
                "value": "53",
                "text": "MEKNES"
            },
            {
                "value": "58",
                "text": "MIDELT"
            },
            {
                "value": "13",
                "text": "MOHAMMADIA"
            },
            {
                "value": "33",
                "text": "MOULAY YACOUB"
            },
            {
                "value": "65",
                "text": "NADOR"
            },
            {
                "value": "14",
                "text": "NOUACEUR"
            },
            {
                "value": "21",
                "text": "OUARZAZATE"
            },
            {
                "value": "59",
                "text": "OUED ED-DAHAB"
            },
            {
                "value": "81",
                "text": "OUEZZANE"
            },
            {
                "value": "61",
                "text": "OUJDA-ANGAD"
            },
            {
                "value": "1",
                "text": "RABAT"
            },
            {
                "value": "52",
                "text": "REHAMNA"
            },
            {
                "value": "67",
                "text": "SAFI"
            },
            {
                "value": "2",
                "text": "SALE"
            },
            {
                "value": "34",
                "text": "SEFROU"
            },
            {
                "value": "71",
                "text": "SETTAT"
            },
            {
                "value": "69",
                "text": "SIDI BENNOUR"
            },
            {
                "value": "24",
                "text": "SIDI IFNI"
            },
            {
                "value": "42",
                "text": "SIDI KACEM"
            },
            {
                "value": "43",
                "text": "SIDI SLIMANE"
            },
            {
                "value": "3",
                "text": "SKHIRATE-TEMARA"
            },
            {
                "value": "40",
                "text": "TAN-TAN"
            },
            {
                "value": "75",
                "text": "TANGER-ASSILAH"
            },
            {
                "value": "27",
                "text": "TAOUNATE"
            },
            {
                "value": "63",
                "text": "TAOURIRT"
            },
            {
                "value": "46",
                "text": "TARFAYA"
            },
            {
                "value": "19",
                "text": "TAROUDANNT"
            },
            {
                "value": "37",
                "text": "TATA"
            },
            {
                "value": "26",
                "text": "TAZA"
            },
            {
                "value": "77",
                "text": "TETOUAN"
            },
            {
                "value": "23",
                "text": "TINGHIR"
            },
            {
                "value": "20",
                "text": "TIZNIT"
            },
            {
                "value": "70",
                "text": "YOUSSOUFIA"
            },
            {
                "value": "22",
                "text": "ZAGORA"
            }
        ],

        "countries": [
            {
                "value": "Zimbabwe",
                "text": "Zimbabwe"
            },
            {
                "value": "Zambie",
                "text": "Zambie"
            },
            {
                "value": "Yémen",
                "text": "Yémen"
            },
            {
                "value": "Wallis-et-Futuna",
                "text": "Wallis-et-Futuna"
            },
            {
                "value": "Viet Nam",
                "text": "Viet Nam"
            },
            {
                "value": "Vanuatu",
                "text": "Vanuatu"
            },
            {
                "value": "Uruguay",
                "text": "Uruguay"
            },
            {
                "value": "Ukraine",
                "text": "Ukraine"
            },
            {
                "value": "Tuvalu",
                "text": "Tuvalu"
            },
            {
                "value": "Turquie",
                "text": "Turquie"
            },
            {
                "value": "Turkménistan",
                "text": "Turkménistan"
            },
            {
                "value": "Tunisie",
                "text": "Tunisie"
            },
            {
                "value": "Trinité-et-Tobago",
                "text": "Trinité-et-Tobago"
            },
            {
                "value": "Tonga",
                "text": "Tonga"
            },
            {
                "value": "Tokelau",
                "text": "Tokelau"
            },
            {
                "value": "Togo",
                "text": "Togo"
            },
            {
                "value": "Timor-Leste",
                "text": "Timor-Leste"
            },
            {
                "value": "Thaïlande",
                "text": "Thaïlande"
            },
            {
                "value": "Territoire britannique de locéan Indien",
                "text": "Territoire britannique de locéan Indien"
            },
            {
                "value": "Terres australes françaises",
                "text": "Terres australes françaises"
            },
            {
                "value": "Tchad",
                "text": "Tchad"
            },
            {
                "value": "Taïwan, Province de Chine",
                "text": "Taïwan, Province de Chine"
            },
            {
                "value": "Tadjikistan",
                "text": "Tadjikistan"
            },
            {
                "value": "Swaziland",
                "text": "Swaziland"
            },
            {
                "value": "Svalbard et Île Jan Mayen",
                "text": "Svalbard et Île Jan Mayen"
            },
            {
                "value": "Suriname",
                "text": "Suriname"
            },
            {
                "value": "Suisse",
                "text": "Suisse"
            },
            {
                "value": "Suède",
                "text": "Suède"
            },
            {
                "value": "Sri Lanka",
                "text": "Sri Lanka"
            },
            {
                "value": "Soudan du Sud",
                "text": "Soudan du Sud"
            },
            {
                "value": "Soudan",
                "text": "Soudan"
            },
            {
                "value": "Somalie",
                "text": "Somalie"
            },
            {
                "value": "Slovénie",
                "text": "Slovénie"
            },
            {
                "value": "Slovaquie",
                "text": "Slovaquie"
            },
            {
                "value": "Singapour",
                "text": "Singapour"
            },
            {
                "value": "Sierra Leone",
                "text": "Sierra Leone"
            },
            {
                "value": "Seychelles",
                "text": "Seychelles"
            },
            {
                "value": "Serbie",
                "text": "Serbie"
            },
            {
                "value": "Sénégal",
                "text": "Sénégal"
            },
            {
                "value": "Sao Tomé-et-Principe",
                "text": "Sao Tomé-et-Principe"
            },
            {
                "value": "Samoa américaines",
                "text": "Samoa américaines"
            },
            {
                "value": "Samoa",
                "text": "Samoa"
            },
            {
                "value": "Sainte-Lucie",
                "text": "Sainte-Lucie"
            },
            {
                "value": "Sainte-Hélène, Ascension et Tristan da Cunha",
                "text": "Sainte-Hélène, Ascension et Tristan da Cunha"
            },
            {
                "value": "Saint-Vincent-et-les Grenadines",
                "text": "Saint-Vincent-et-les Grenadines"
            },
            {
                "value": "Saint-Siège (État de la Cité du Vatican)",
                "text": "Saint-Siège (État de la Cité du Vatican)"
            },
            {
                "value": "Saint-Pierre-et-Miquelon",
                "text": "Saint-Pierre-et-Miquelon"
            },
            {
                "value": "Saint-Martin (partie néerlandaise)",
                "text": "Saint-Martin (partie néerlandaise)"
            },
            {
                "value": "Saint-Martin (partie française)",
                "text": "Saint-Martin (partie française)"
            },
            {
                "value": "Saint-Marin",
                "text": "Saint-Marin"
            },
            {
                "value": "Saint-Kitts-et-Nevis",
                "text": "Saint-Kitts-et-Nevis"
            },
            {
                "value": "Saint-Barthélemy",
                "text": "Saint-Barthélemy"
            },
            {
                "value": "Rwanda",
                "text": "Rwanda"
            },
            {
                "value": "Royaume-Uni",
                "text": "Royaume-Uni"
            },
            {
                "value": "Roumanie",
                "text": "Roumanie"
            },
            {
                "value": "Réunion",
                "text": "Réunion"
            },
            {
                "value": "République-Unie de Tanzanie",
                "text": "République-Unie de Tanzanie"
            },
            {
                "value": "République tchèque",
                "text": "République tchèque"
            },
            {
                "value": "République populaire démocratique de Corée",
                "text": "République populaire démocratique de Corée"
            },
            {
                "value": "République dominicaine",
                "text": "République dominicaine"
            },
            {
                "value": "République démocratique populaire lao",
                "text": "République démocratique populaire lao"
            },
            {
                "value": "République démocratique du Congo",
                "text": "République démocratique du Congo"
            },
            {
                "value": "République de Moldova",
                "text": "République de Moldova"
            },
            {
                "value": "République de Corée",
                "text": "République de Corée"
            },
            {
                "value": "République centrafricaine",
                "text": "République centrafricaine"
            },
            {
                "value": "République bolivarienne du Venezuela",
                "text": "République bolivarienne du Venezuela"
            },
            {
                "value": "République arabe syrienne",
                "text": "République arabe syrienne"
            },
            {
                "value": "Qatar",
                "text": "Qatar"
            },
            {
                "value": "Portugal",
                "text": "Portugal"
            },
            {
                "value": "Porto Rico",
                "text": "Porto Rico"
            },
            {
                "value": "Polynésie française",
                "text": "Polynésie française"
            },
            {
                "value": "Pologne",
                "text": "Pologne"
            },
            {
                "value": "Pitcairn",
                "text": "Pitcairn"
            },
            {
                "value": "Philippines",
                "text": "Philippines"
            },
            {
                "value": "Pérou",
                "text": "Pérou"
            },
            {
                "value": "Pays-Bas",
                "text": "Pays-Bas"
            },
            {
                "value": "Paraguay",
                "text": "Paraguay"
            },
            {
                "value": "Papouasie-Nouvelle-Guinée",
                "text": "Papouasie-Nouvelle-Guinée"
            },
            {
                "value": "Panama",
                "text": "Panama"
            },
            {
                "value": "Palaos",
                "text": "Palaos"
            },
            {
                "value": "Pakistan",
                "text": "Pakistan"
            },
            {
                "value": "Ouzbékistan",
                "text": "Ouzbékistan"
            },
            {
                "value": "Ouganda",
                "text": "Ouganda"
            },
            {
                "value": "Oman",
                "text": "Oman"
            },
            {
                "value": "Nouvelle-Zélande",
                "text": "Nouvelle-Zélande"
            },
            {
                "value": "Nouvelle-Calédonie",
                "text": "Nouvelle-Calédonie"
            },
            {
                "value": "Norvège",
                "text": "Norvège"
            },
            {
                "value": "Niue",
                "text": "Niue"
            },
            {
                "value": "Nigéria",
                "text": "Nigéria"
            },
            {
                "value": "Niger",
                "text": "Niger"
            },
            {
                "value": "Nicaragua",
                "text": "Nicaragua"
            },
            {
                "value": "Népal",
                "text": "Népal"
            },
            {
                "value": "Nauru",
                "text": "Nauru"
            },
            {
                "value": "Namibie",
                "text": "Namibie"
            },
            {
                "value": "Myanmar",
                "text": "Myanmar"
            },
            {
                "value": "Mozambique",
                "text": "Mozambique"
            },
            {
                "value": "Montserrat",
                "text": "Montserrat"
            },
            {
                "value": "Monténégro",
                "text": "Monténégro"
            },
            {
                "value": "Mongolie",
                "text": "Mongolie"
            },
            {
                "value": "Monaco",
                "text": "Monaco"
            },
            {
                "value": "Mexique",
                "text": "Mexique"
            },
            {
                "value": "Mayotte",
                "text": "Mayotte"
            },
            {
                "value": "Mauritanie",
                "text": "Mauritanie"
            },
            {
                "value": "Maurice",
                "text": "Maurice"
            },
            {
                "value": "Martinique",
                "text": "Martinique"
            },
            {
                "value": "Maroc",
                "text": "Maroc"
            },
            {
                "value": "Malte",
                "text": "Malte"
            },
            {
                "value": "Mali",
                "text": "Mali"
            },
            {
                "value": "Maldives",
                "text": "Maldives"
            },
            {
                "value": "Malawi",
                "text": "Malawi"
            },
            {
                "value": "Malaisie",
                "text": "Malaisie"
            },
            {
                "value": "Madagascar",
                "text": "Madagascar"
            },
            {
                "value": "Macao",
                "text": "Macao"
            },
            {
                "value": "Lex-République yougoslave de Macédoine",
                "text": "Lex-République yougoslave de Macédoine"
            },
            {
                "value": "Luxembourg",
                "text": "Luxembourg"
            },
            {
                "value": "Lituanie",
                "text": "Lituanie"
            },
            {
                "value": "Liechtenstein",
                "text": "Liechtenstein"
            },
            {
                "value": "Libye",
                "text": "Libye"
            },
            {
                "value": "Libéria",
                "text": "Libéria"
            },
            {
                "value": "Liban",
                "text": "Liban"
            },
            {
                "value": "Lettonie",
                "text": "Lettonie"
            },
            {
                "value": "Lesotho",
                "text": "Lesotho"
            },
            {
                "value": "Koweït",
                "text": "Koweït"
            },
            {
                "value": "Kiribati",
                "text": "Kiribati"
            },
            {
                "value": "Kirghizistan",
                "text": "Kirghizistan"
            },
            {
                "value": "Kenya",
                "text": "Kenya"
            },
            {
                "value": "Kazakhstan",
                "text": "Kazakhstan"
            },
            {
                "value": "Jordanie",
                "text": "Jordanie"
            },
            {
                "value": "Jersey",
                "text": "Jersey"
            },
            {
                "value": "Japon",
                "text": "Japon"
            },
            {
                "value": "Jamaïque",
                "text": "Jamaïque"
            },
            {
                "value": "Italie",
                "text": "Italie"
            },
            {
                "value": "Israël",
                "text": "Israël"
            },
            {
                "value": "Islande",
                "text": "Islande"
            },
            {
                "value": "Irlande",
                "text": "Irlande"
            },
            {
                "value": "Iraq",
                "text": "Iraq"
            },
            {
                "value": "Iran (République islamique d)",
                "text": "Iran (République islamique d)"
            },
            {
                "value": "Indonésie",
                "text": "Indonésie"
            },
            {
                "value": "Inde",
                "text": "Inde"
            },
            {
                "value": "Îles Vierges des États-Unis",
                "text": "Îles Vierges des États-Unis"
            },
            {
                "value": "Îles Vierges britanniques",
                "text": "Îles Vierges britanniques"
            },
            {
                "value": "Îles Turks-et-Caïcos",
                "text": "Îles Turks-et-Caïcos"
            },
            {
                "value": "Îles Salomon",
                "text": "Îles Salomon"
            },
            {
                "value": "Îles mineures éloignées des États-Unis",
                "text": "Îles mineures éloignées des États-Unis"
            },
            {
                "value": "Îles Marshall",
                "text": "Îles Marshall"
            },
            {
                "value": "Îles Mariannes du Nord",
                "text": "Îles Mariannes du Nord"
            },
            {
                "value": "Îles Féroé",
                "text": "Îles Féroé"
            },
            {
                "value": "Îles Falkland (Malvinas)",
                "text": "Îles Falkland (Malvinas)"
            },
            {
                "value": "Îles Cook",
                "text": "Îles Cook"
            },
            {
                "value": "Îles Cocos (Keeling)",
                "text": "Îles Cocos (Keeling)"
            },
            {
                "value": "Îles Caïmans",
                "text": "Îles Caïmans"
            },
            {
                "value": "Îles Åland",
                "text": "Îles Åland"
            },
            {
                "value": "Île Norfolk",
                "text": "Île Norfolk"
            },
            {
                "value": "Île Heard-et-Îles MacDonald",
                "text": "Île Heard-et-Îles MacDonald"
            },
            {
                "value": "Île de Man",
                "text": "Île de Man"
            },
            {
                "value": "Île Christmas",
                "text": "Île Christmas"
            },
            {
                "value": "Île Bouvet",
                "text": "Île Bouvet"
            },
            {
                "value": "Hongrie",
                "text": "Hongrie"
            },
            {
                "value": "Hong Kong",
                "text": "Hong Kong"
            },
            {
                "value": "Honduras",
                "text": "Honduras"
            },
            {
                "value": "Haïti",
                "text": "Haïti"
            },
            {
                "value": "Guyane française",
                "text": "Guyane française"
            },
            {
                "value": "Guyana",
                "text": "Guyana"
            },
            {
                "value": "Guinée-Bissau",
                "text": "Guinée-Bissau"
            },
            {
                "value": "Guinée équatoriale",
                "text": "Guinée équatoriale"
            },
            {
                "value": "Guinée",
                "text": "Guinée"
            },
            {
                "value": "Guernesey",
                "text": "Guernesey"
            },
            {
                "value": "Guatemala",
                "text": "Guatemala"
            },
            {
                "value": "Guam",
                "text": "Guam"
            },
            {
                "value": "Guadeloupe",
                "text": "Guadeloupe"
            },
            {
                "value": "Groenland",
                "text": "Groenland"
            },
            {
                "value": "Grenade",
                "text": "Grenade"
            },
            {
                "value": "Grèce",
                "text": "Grèce"
            },
            {
                "value": "Gibraltar",
                "text": "Gibraltar"
            },
            {
                "value": "Ghana",
                "text": "Ghana"
            },
            {
                "value": "Géorgie du Sud-et-les Îles Sandwich du Sud",
                "text": "Géorgie du Sud-et-les Îles Sandwich du Sud"
            },
            {
                "value": "Géorgie",
                "text": "Géorgie"
            },
            {
                "value": "Gambie",
                "text": "Gambie"
            },
            {
                "value": "Gabon",
                "text": "Gabon"
            },
            {
                "value": "France",
                "text": "France"
            },
            {
                "value": "Finlande",
                "text": "Finlande"
            },
            {
                "value": "Fidji",
                "text": "Fidji"
            },
            {
                "value": "Fédération de Russie",
                "text": "Fédération de Russie"
            },
            {
                "value": "Éthiopie",
                "text": "Éthiopie"
            },
            {
                "value": "États-Unis",
                "text": "États-Unis"
            },
            {
                "value": "États fédérés de Micronésie",
                "text": "États fédérés de Micronésie"
            },
            {
                "value": "État plurinational de Bolivie",
                "text": "État plurinational de Bolivie"
            },
            {
                "value": "État de Palestine",
                "text": "État de Palestine"
            },
            {
                "value": "Estonie",
                "text": "Estonie"
            },
            {
                "value": "Espagne",
                "text": "Espagne"
            },
            {
                "value": "Érythrée",
                "text": "Érythrée"
            },
            {
                "value": "Équateur",
                "text": "Équateur"
            },
            {
                "value": "Émirats arabes unis",
                "text": "Émirats arabes unis"
            },
            {
                "value": "El Salvador",
                "text": "El Salvador"
            },
            {
                "value": "Égypte",
                "text": "Égypte"
            },
            {
                "value": "Dominique",
                "text": "Dominique"
            },
            {
                "value": "Djibouti",
                "text": "Djibouti"
            },
            {
                "value": "Danemark",
                "text": "Danemark"
            },
            {
                "value": "Curaçao",
                "text": "Curaçao"
            },
            {
                "value": "Cuba",
                "text": "Cuba"
            },
            {
                "value": "Croatie",
                "text": "Croatie"
            },
            {
                "value": "Côte dIvoire",
                "text": "Côte dIvoire"
            },
            {
                "value": "Costa Rica",
                "text": "Costa Rica"
            },
            {
                "value": "Congo",
                "text": "Congo"
            },
            {
                "value": "Comores",
                "text": "Comores"
            },
            {
                "value": "Colombie",
                "text": "Colombie"
            },
            {
                "value": "Chypre",
                "text": "Chypre"
            },
            {
                "value": "Chine",
                "text": "Chine"
            },
            {
                "value": "Chili",
                "text": "Chili"
            },
            {
                "value": "Cap-Vert",
                "text": "Cap-Vert"
            },
            {
                "value": "Canada",
                "text": "Canada"
            },
            {
                "value": "Cameroun",
                "text": "Cameroun"
            },
            {
                "value": "Cambodge",
                "text": "Cambodge"
            },
            {
                "value": "Burundi",
                "text": "Burundi"
            },
            {
                "value": "Burkina Faso",
                "text": "Burkina Faso"
            },
            {
                "value": "Bulgarie",
                "text": "Bulgarie"
            },
            {
                "value": "Brunei Darussalam",
                "text": "Brunei Darussalam"
            },
            {
                "value": "Brésil",
                "text": "Brésil"
            },
            {
                "value": "Botswana",
                "text": "Botswana"
            },
            {
                "value": "Bosnie-Herzégovine",
                "text": "Bosnie-Herzégovine"
            },
            {
                "value": "Bonaire, Saint-Eustache et Saba",
                "text": "Bonaire, Saint-Eustache et Saba"
            },
            {
                "value": "Bhoutan",
                "text": "Bhoutan"
            },
            {
                "value": "Bermudes",
                "text": "Bermudes"
            },
            {
                "value": "Bénin",
                "text": "Bénin"
            },
            {
                "value": "Belize",
                "text": "Belize"
            },
            {
                "value": "Belgique",
                "text": "Belgique"
            },
            {
                "value": "Bélarus",
                "text": "Bélarus"
            },
            {
                "value": "Barbade",
                "text": "Barbade"
            },
            {
                "value": "Bangladesh",
                "text": "Bangladesh"
            },
            {
                "value": "Bahreïn",
                "text": "Bahreïn"
            },
            {
                "value": "Bahamas",
                "text": "Bahamas"
            },
            {
                "value": "Azerbaïdjan",
                "text": "Azerbaïdjan"
            },
            {
                "value": "Autriche",
                "text": "Autriche"
            },
            {
                "value": "Australie",
                "text": "Australie"
            },
            {
                "value": "Aruba",
                "text": "Aruba"
            },
            {
                "value": "Arménie",
                "text": "Arménie"
            },
            {
                "value": "Argentine",
                "text": "Argentine"
            },
            {
                "value": "Arabie saoudite",
                "text": "Arabie saoudite"
            },
            {
                "value": "Antigua-et-Barbuda",
                "text": "Antigua-et-Barbuda"
            },
            {
                "value": "Antarctique",
                "text": "Antarctique"
            },
            {
                "value": "Anguilla",
                "text": "Anguilla"
            },
            {
                "value": "Angola",
                "text": "Angola"
            },
            {
                "value": "Andorre",
                "text": "Andorre"
            },
            {
                "value": "Allemagne",
                "text": "Allemagne"
            },
            {
                "value": "Algérie",
                "text": "Algérie"
            },
            {
                "value": "Albanie",
                "text": "Albanie"
            },
            {
                "value": "Afrique du Sud",
                "text": "Afrique du Sud"
            },
            {
                "value": "Afghanistan",
                "text": "Afghanistan"
            }
        ]
    },
    secondStepOptions: {
        "categorieDeProjet": [
            {
                "value": "0",
                "text": "Veuillez sélectionnez la catégorie du projet"
            },
            {
                "value": "1",
                "text": "Construction (Résidentiel, Bureaux)"
            },
            {
                "value": "2",
                "text": "Groupe d'habitation"
            },
            {
                "value": "3",
                "text": "Création de lotissement"
            },
            {
                "value": "4",
                "text": "Urbanisme"
            },
            {
                "value": "5",
                "text": "Equipement, Bâtiments Industriel, logistique et Touristique: (ERP-ERT)"
            },
            {
                "value": "6",
                "text": "Aménagements (Surface et Structure inchangées)"
            },
            {
                "value": "7",
                "text": "Projets de surélévation d'étages"
            },
            {
                "value": "8",
                "text": "Projets de modification (Hors Aménagements)"
            },
            {
                "value": "9",
                "text": "Divers"
            }
        ],
        "prefectureOuProvince": [
            {
                "value": "0",
                "text": "Veuillez selectionnez une préfecture"
            },
            {
                "value": "80",
                "text": "CHEFCHAOUEN"
            },
            {
                "value": "76",
                "text": "FAHS-ANJRA"
            },
            {
                "value": "79",
                "text": "LARACHE"
            },
            {
                "value": "75",
                "text": "TANGER-ASSILAH"
            }
        ]
    },
    thirdStepOptions: {
        "regimeFoncier": [
            {
                "value": "IF",
                "text": "Immatriculation foncière"
            },
            {
                "value": "TI",
                "text": "Terrain non immatriculé"
            }
        ],
        "statutFoncier": [
            {
                "value": "Propriété (Melk)",
                "text": "Propriété (Melk)"
            },
            {
                "value": "Immeuble domanial",
                "text": "Immeuble domanial"
            },
            {
                "value": "Terre collective",
                "text": "Terre collective"
            },
            {
                "value": "Habous",
                "text": "Habous"
            }
        ]
    }
};
const actions = {}
const getters = {}
const mutations = {}

export default {
    state,
    actions,
    mutations,
    getters
}