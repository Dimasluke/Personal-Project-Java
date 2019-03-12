const championPool = [
    { id: 'Aatrox',
    info: {
        damage: 10,
        toughness: 10,
        crowdControl: 6,
        mobility: 6,
        utility: 6
    }},
    { id: 'Ahri',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 10,
        utility: 2
    }},
    { id: 'Akali',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 10,
        utility: 2
    }},
    { id: 'Alistar',
    info: {
        damage: 2,
        toughness: 10,
        crowdControl: 10,
        mobility: 2,
        utility: 6
    }},
    { id: 'Amumu',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'Anivia',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 6
    }},
    { id: 'Annie',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 6
    }},
    { id: 'Ashe',
    info: {
        damage: 6,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 6
    }},
    { id: 'AurelionSol',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Azir',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Bard',
    info: {
        damage: 2,
        toughness: 2,
        crowdControl: 10,
        mobility: 6,
        utility: 10
    }},
    { id: 'Blitzcrank',
    info: {
        damage: 2,
        toughness: 6,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'Brand',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Braum',
    info: {
        damage: 2,
        toughness: 6,
        crowdControl: 10,
        mobility: 2,
        utility: 6
    }},
    { id: 'Caitlyn',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Camille',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 6,
        mobility: 10,
        utility: 2
    }},
    { id: 'Cassiopeia',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'Chogath',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Corki',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 6,
        utility: 2
    }},
    { id: 'Darius',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Diana',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'DrMundo',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 2,
        mobility: 2,
        utility: 2
    }},
    { id: 'Draven',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 6,
        utility: 2
    }},
    { id: 'Ekko',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 6,
        mobility: 10,
        utility: 2
    }},
    { id: 'Elise',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Evelynn',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 2,
        mobility: 6,
        utility: 6
    }},
    { id: 'Ezreal',
    info: {
        damage: 8,
        toughness: 2,
        crowdControl: 2,
        mobility: 10,
        utility: 2
    }},
    { id: 'FiddleSticks',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'Fiora',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 6,
        mobility: 6,
        utility: 6
    }},
    { id: 'Fizz',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 10,
        utility: 2
    }},
    { id: 'Galio',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 10,
        mobility: 6,
        utility: 2
    }},
    { id: 'Gangplank',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 2,
        utility: 6
    }},
    { id: 'Garen',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 2,
        mobility: 2,
        utility: 2
    }},
    { id: 'Gnar',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 6,
        mobility: 2,
        utility: 6
    }},
    { id: 'Gragas',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 10,
        mobility: 6,
        utility: 2
    }},
    { id: 'Graves',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 2,
        mobility: 6,
        utility: 6
    }},
    { id: 'Hecarim',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Heimerdinger',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 6
    }},
    { id: 'Illaoi',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 2,
        mobility: 2,
        utility: 2
    }},
    { id: 'Irelia',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 10,
        utility: 6
    }},
    { id: 'Ivern',
    info: {
        damage: 2,
        toughness: 2,
        crowdControl: 10,
        mobility: 6,
        utility: 10
    }},
    { id: 'Janna',
    info: {
        damage: 2,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 10
    }},
    { id: 'JarvanIV',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 6,
        utility: 6
    }},
    { id: 'Jax',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Jayce',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 6,
        utility: 6
    }},
    { id: 'Jhin',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Jinx',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Kaisa',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 0,
        mobility: 10,
        utility: 2
    }},
    { id: 'Kalista',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl:2,
        mobility: 10,
        utility: 6
    }},
    { id: 'Karma',
    info: {
        damage: 6,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 6
    }},
    { id: 'Karthus',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 2,
        utility: 6
    }},
    { id: 'Kassadin',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 2,
        mobility: 10,
        utility: 2
    }},
    { id: 'Katarina',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 10,
        utility: 2
    }},
    { id: 'Kayle',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 2,
        utility: 10
    }},
    { id: 'Kayn',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 10,
        utility: 2
    }},
    { id: 'Kennen',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'KhaZix',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 6,
        utility: 2
    }},
    { id: 'Kindred',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 10,
        utility: 6
    }},
    { id: 'Kled',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 2,
        mobility: 10,
        utility: 2
    }},
    { id: 'KogMaw',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 2,
        utility: 2
    }},
    { id: 'Leblanc',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 10,
        utility: 2
    }},
    { id: 'LeeSin',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 6,
        mobility: 10,
        utility: 2
    }},
    { id: 'Leona',
    info: {
        damage: 2,
        toughness: 10,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'Lissandra',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 10,
        mobility: 6,
        utility: 2
    }},
    { id: 'Lucian',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 10,
        utility: 2
    }},
    { id: 'Lulu',
    info: {
        damage: 6,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 10
    }},
    { id: 'Lux',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 6
    }},
    { id: 'Malphite',
    info: {
        damage: 2,
        toughness: 10,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'Malzahar',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 6
    }},
    { id: 'Maokai',
    info: {
        damage: 2,
        toughness: 10,
        crowdControl: 10,
        mobility: 2,
        utility: 6
    }},
    { id: 'MasterYi',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 6,
        utility: 2
    }},
    { id: 'MissFortune',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 2,
        utility: 2
    }},
    { id: 'Mordekaiser',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 2,
        mobility: 2,
        utility: 6
    }},
    { id: 'Morgana',
    info: {
        damage: 6,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 6
    }},
    { id: 'Nami',
    info: {
        damage: 2,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 6
    }},
    { id: 'Nasus',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Nautilus',
    info: {
        damage: 2,
        toughness: 10,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'Neeko',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'Nidalee',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 10,
        utility: 6
    }},
    { id: 'Nocturne',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 6
    }},
    { id: 'Nunu',
    info: {
        damage: 2,
        toughness: 10,
        crowdControl: 6,
        mobility: 2,
        utility: 6
    }},
    { id: 'Olaf',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Orianna',
    info: {
        damage: 6,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 6
    }},
    { id: 'Ornn',
    info: {
        damage: 2,
        toughness: 10,
        crowdControl: 10,
        mobility: 2,
        utility: 6
    }},
    { id: 'Pantheon',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Poppy',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 10,
        mobility: 6,
        utility: 2
    }},
    { id: 'Pyke',
    info: {
        damage: 6,
        toughness: 2,
        crowdControl: 10,
        mobility: 10,
        utility: 2
    }},
    { id: 'Quinn',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 10,
        utility: 2
    }},
    { id: 'Rakan',
    info: {
        damage: 2,
        toughness: 6,
        crowdControl: 10,
        mobility: 10,
        utility: 10
    }},
    { id: 'Rammus',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 10,
        mobility: 6,
        utility: 2
    }},
    { id: 'RekSai',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 6,
        utility: 6
    }},
    { id: 'Renekton',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Rengar',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Riven',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 6,
        mobility: 10,
        utility: 2
    }},
    { id: 'Rumble',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Ryze',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 6
    }},
    { id: 'Sejuani',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 10,
        mobility: 6,
        utility: 2
    }},
    { id: 'Shaco',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 6
    }},
    { id: 'Shen',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 6,
        mobility: 6,
        utility: 10
    }},
    { id: 'Shyvana',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 2,
        mobility: 6,
        utility: 2
    }},
    { id: 'Singed',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Sion',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'Sivir',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 2,
        utility: 6
    }},
    { id: 'Skarner',
    info: {
        damage: 2,
        toughness: 10,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'Sona',
    info: {
        damage: 6,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 6
    }},
    { id: 'Soraka',
    info: {
        damage: 2,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 10
    }},
    { id: 'Swain',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Sylas',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 2,
        mobility: 10,
        utility: 2
    }},
    { id: 'Syndra',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'TahmKench',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 6,
        mobility: 2,
        utility: 10
    }},
    { id: 'Taliyah',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 10
    }},
    { id: 'Talon',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 6,
        utility: 2
    }},
    { id: 'Taric',
    info: {
        damage: 2,
        toughness: 6,
        crowdControl: 6,
        mobility: 2,
        utility: 10
    }},
    { id: 'Teemo',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 6
    }},
    { id: 'Thresh',
    info: {
        damage: 2,
        toughness: 6,
        crowdControl: 10,
        mobility: 2,
        utility: 10
    }},
    { id: 'Tristana',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Trundle',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl:2,
        mobility: 2,
        utility: 6
    }},
    { id: 'Tryndamere',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 2,
        mobility: 6,
        utility: 2
    }},
    { id: 'TwistedFate',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 6
    }},
    { id: 'Twitch',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 6,
        utility: 2
    }},
    { id: 'Udyr',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Urgot',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Varus',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Vayne',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Veigar',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'VelKoz',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Vi',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 10,
        mobility: 6,
        utility: 2
    }},
    { id: 'Viktor',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Vladimir',
    info: {
        damage: 10,
        toughness: 10,
        crowdControl: 6,
        mobility: 6,
        utility: 6
    }},
    { id: 'Volibear',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Warwick',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'Wukong',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Xayah',
    info: {
        damage: 10,
        toughness: 6,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
    { id: 'Xerath',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 2,
        utility: 2
    }},
    { id: 'XinZhao',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Yasuo',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 10,
        utility: 6
    }},
    { id: 'Yorick',
    info: {
        damage: 6,
        toughness: 6,
        crowdControl: 6,
        mobility: 2,
        utility: 6
    }},
    { id: 'Zac',
    info: {
        damage: 6,
        toughness: 10,
        crowdControl: 10,
        mobility: 6,
        utility: 2
    }},
    { id: 'Zed',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 2,
        mobility: 10,
        utility: 2
    }},
    { id: 'Ziggs',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Zilean',
    info: {
        damage: 6,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 10
    }},
    { id: 'Zoe',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 6,
        mobility: 6,
        utility: 2
    }},
    { id: 'Zyra',
    info: {
        damage: 10,
        toughness: 2,
        crowdControl: 10,
        mobility: 2,
        utility: 2
    }},
]

module.exports = {
    championStats: (req, res) => {
        let result = championPool.filter(champ => {
            return champ.id === req.params.id
        })
        res.status(200).json(result)
    }
}