// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "assets/img/pokemon/ultrararas/1-CHARIZARD.png",
    nameCard: "Charizard",
    description:
      "Charizard (#136-135)",
    value: 1599.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 2,
    img: "assets/img/pokemon/ultrararas/2-Groudon-EX.png",
    nameCard: "Groundon EX",
    description:
      "Groundon-EX (#106-108)",
    value: 303.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 3,
    img: "assets/img/pokemon/ultrararas/3-Lugia-EX.png",
    nameCard: "Lugya EX",
    description:
      "Lugya-EX (#94-98)",
    value: 239.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 4,
    img: "assets/img/pokemon/ultrararas/4-Charizard-VMAX.jpg",
    nameCard: "Charizard VMAX",
    description:
      "Charizard-VMAX (#20-189)",
    value: 223.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 5,
    img: "assets/img/pokemon/ultrararas/5-Greninja-GX.jpg",
    nameCard: "Grenija GX",
    description:
      "Grenija-GX (#133-131)",
    value: 223.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 6,
    img: "assets/img/pokemon/ultrararas/6-Rayquaza-EX.png",
    nameCard: "Rayquaza EX",
    description:
      "Rayquaza-EX (#123-124)",
    value: 199.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 7,
    img: "assets/img/pokemon/ultrararas/7-CALYREX_CAVALEIRO_ESPECTRAL.jpg",
    nameCard: "Calyrrex Cavaleiro Espectral",
    description:
      "Calyrrex-Cavaleiro Espectral (#172-198)",
    value: 159.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 8,
    img: "assets/img/pokemon/ultrararas/8-Raikou-EX.png",
    nameCard: "Raikou EX",
    description:
      "Raikou-EX (#105-108)",
    value: 159.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 9,
    img: "assets/img/pokemon/ultrararas/9-Noivern-V.jpg",
    nameCard: "Noivern V",
    description:
      "Noivern-V (#196-203)",
    value: 159.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 10,
    img: "assets/img/pokemon/ultrararas/10-Mewtwo-EX.png",
    nameCard: "Mewtwo EX",
    description:
      "Mewtwo-EX (#158-162)",
    value: 79.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 11,
    img: "assets/img/yugioh/ultrarare/1-PEQUENAMAGANEGRA.jpg",
    nameCard: "Pequena Maga Negra",
    description:
      "Dark Magician Girl(#MFC-000)",
    value: 2099.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 12,
    img: "assets/img/yugioh/ultrarare/2-MAGONEGRO.jpg",
    nameCard: "Mago Negro",
    description:
      "Dark Magician (#25TH-EN001)",
    value: 1099.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 13,
    img: "assets/img/yugioh/ultrarare/3-RAVIEL.jpg",
    nameCard: "Raviel",
    description:
      "Raviel, Lord of Phantasms (#SOI-EN003)",
    value: 849.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 14,
    img: "assets/img/yugioh/ultrarare/4-GUERREIRO-SHIBA-TARO.jpg",
    nameCard: "Guerreiro Shiba Taro",
    description:
      "Shiba-Warrior Taro (#YAP1-EN008)",
    value: 699.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 15,
    img: "assets/img/yugioh/ultrarare/5-ELEMENTAL-HERO-AIR-NEOS.png",
    nameCard: "Elemental Hero Air Neos",
    description:
      "Elemental Hero Air Neos (#STON-EN034)",
    value: 79.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 16,
    img: "assets/img/yugioh/ultrarare/6-DRAGÃO-CAVEIRA-NEGRO.png",
    nameCard: "Dragão Cavaleiro Negro",
    description:
      "B.Skull Dragon(#MRD-018)",
    value: 499.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 17,
    img: "assets/img/yugioh/ultrarare/7-DRAGAO-NEGRO-DE-OLHOS-VERMELHOS.jpg",
    nameCard: "Dragão Negro de Olhos Vermelhos",
    description:
      "Red-Eyes B.Dragon(#LOB-070)",
    value: 449.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 18,
    img: "assets/img/yugioh/ultrarare/8-POTE-DA-EXTRAVAGANCIA.jpg",
    nameCard: "Pote da Extravagância",
    description:
      "Pot of Extravagance(#TOCH-EN059)",
    value: 449.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 19,
    img: "assets/img/yugioh/ultrarare/9-EXODIA.jpg",
    nameCard: "Exodia",
    description:
      "Exodia The Forbidden One(#LOB-124)",
    value: 299.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 20,
    img: "assets/img/yugioh/ultrarare/10-DRAGAO-TOON-DE-OLHOS-AZUIS.png",
    nameCard: "Dragão Toon de Olhos Azuis",
    description:
      "Blue-Eyes Toon Dragon(#SRL-000)",
    value: 249.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 21,
    img: "assets/img/magic/mitic/1-oDeusEscaravelhoTheScarabGod.jpg",
    nameCard: "O Deus Escaravelho",
    description:
      "The Scarab God",
    value: 1350.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },
  {
    id: 22,
    img: "assets/img/magic/mitic/2-aImperatrizErrante.jpg",
    nameCard: "A Imperatriz Errante",
    description:
      "The Wandering Emperor(#303)",
    value: 358.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },
  {
    id: 23,
    img: "assets/img/magic/mitic/3-dragãodeCobreAnciao.jpg",
    nameCard: "Dragão de Cobre Ancião",
    description:
      "Ancient Copper Dragon",
    value: 292.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },
  {
    id: 24,
    img: "assets/img/magic/mitic/4-bosqueAlagado.jpg",
    nameCard: "Bosque Alagado",
    description:
      "Flooded Grove",
    value: 269.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },
  {
    id: 25,
    img: "assets/img/magic/mitic/5-karnLiberto.jpg",
    nameCard: "Karn Liberto",
    description:
      "Karn Liberated",
    value: 245.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },
  {
    id: 26,
    img: "assets/img/magic/mitic/6-regenteMarturvo.jpg",
    nameCard: "Regente Martuvo",
    description:
      "Murktide Regent",
    value: 229.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },
  {
    id: 27,
    img: "assets/img/magic/mitic/7-vorinclexMonstrousRaider.jpg",
    nameCard: "Vorinclex, Salteador Monstruoso",
    description:
      "Vorinclex, Monstrous Raider",
    value: 199.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },
  {
    id: 28,
    img: "assets/img/magic/mitic/8-colossoCultivador.jpg",
    nameCard: "Colosso Cultivador",
    description:
      "Cultivador colossus",
    value: 122.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },
  {
    id: 29,
    img: "assets/img/magic/mitic/9-dackFayden.jpg",
    nameCard: "Dack Fayden",
    description:
      "Dack Fayden",
    value: 109.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },
  {
    id: 30,
    img: "assets/img/magic/mitic/10-kairi.jpg",
    nameCard: "Kairi, o Céu Turbilhonante (#408)",
    description:
      "Kairi, the Swirling Sky (#408)",
    value: 99.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },
  //novos Cards
  {
    id: 31,
    img: "assets/img/pokemon/ultrararas/11-PIKACHU.jpg",
    nameCard: "Pikachu",
    description:
      "Pikachu (#RC29/83)",
    value: 95.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 32,
    img: "assets/img/pokemon/ultrararas/12-ZOROARK-GX.jpg",
    nameCard: "Zoroark-GX",
    description:
      "Zoroark-GX (#77/73)",
    value: 79.80,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokémon"],
  },
  {
    id: 33,
    img: "assets/img/yugioh/ultrarare/11-VIRA-PÁGINAS-TOON.jpg",
    nameCard: "Vira-Páginas Toon",
    description:
      "Toon Page-Flip(#TOCH-EN004)",
    value: 220.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 34,
    img: "assets/img/yugioh/ultrarare/12-DRAGÃO-Azul.png",
    nameCard: "Dragão Branco de Olhos Azuis",
    description:
      "Blue-Eyes White Dragon(#JMP-001)",
    value: 219.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Yu-Gi-Oh"],
  },
  {
    id: 35,
    img: "assets/img/magic/mitic/11-kaito.jpg",
    nameCard: "Keito Shizuki",
    description:
      "Kaito Shizuki",
    value: 89.95,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },
  {
    id: 36,
    img: "assets/img/magic/mitic/12-tarmogoyf.jpg",
    nameCard: "Tarmogoyf",
    description:
      "Tarmogoyf",
    value: 89.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Magic"],
  },


];
