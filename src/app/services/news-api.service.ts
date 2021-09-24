import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey: string = "75e20b21ea8f499190960a2dfbc5f410";
  categories = ['business','entertainment','general','health','science','sports','technology'];

  constructor() { }

  topHeadlinesEndpoint(category: any) {
    let link = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${this.apiKey}`;
    return link;
  }

  everythingEndpoint(query: string, category: any) {
    if (category === "general") {
      let link = `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${this.apiKey}`;
      return link;
    }
    else if (this.categories.includes(category)) {
      let link = `https://newsapi.org/v2/top-headlines?category=${category}&q=${query}&apiKey=${this.apiKey}`;
      return link;
    }
    else {
      let link = `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.apiKey}`;
      return link;
    }
  }

  dumby = {
    "status": "ok",
    "totalResults": 1000,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Smartmania.cz"
            },
            "author": "Michael Chrobok",
            "title": "Jak v Safari na iPhone vrátit adresní řádek zpět nahoru? - SMARTmania.cz",
            "description": "V pondělí Apple vydal finální verzi operačního systému iOS 15, kterou si mohou nainstalovat všichni uživatelé iPhone 6s a novější. Velkou změnou prošel",
            "url": "https://smartmania.cz/jak-v-safari-na-iphone-vratit-adresni-radek-zpet-nahoru/",
            "urlToImage": "https://smartmania.cz/wp-content/uploads/2021/09/iphone_iOS15_Safari.jpg",
            "publishedAt": "2021-09-23T14:26:15Z",
            "content": "V pondlí Apple vydal finální verzi operaního systému iOS 15, kterou si mohou nainstalovat vichni uivatelé iPhone 6s a novjí. Velkou zmnou proel také prohlíe Safari, který své uivatele pekvapil jednou… [+815 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Disney Classic Games Collection - Official Announcement Trailer - IGN",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VVoyTkVzZTVQX3fSAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-09-23T14:21:19Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "AnandTech"
            },
            "author": "Ganesh T S",
            "title": "Plugable TBT4-HUB3C Thunderbolt 4 Hub Capsule Review - AnandTech",
            "description": "Plugable is introducing its Thunderbolt 4 product lineup today, with the TBT4-HUB3C Thunderbolt 4 Hub leading the pack. Joining it are two Thunderbolt 4...",
            "url": "https://www.anandtech.com/show/16964/plugable-tbt4hub3c-thunderbolt-4-hub-capsule-review",
            "urlToImage": "https://images.anandtech.com/doci/16964/carousel_678x452.jpg",
            "publishedAt": "2021-09-23T14:00:00Z",
            "content": "Plugable is introducing its Thunderbolt 4 product lineup today, with the TBT4-HUB3C Thunderbolt 4 Hub leading the pack. Joining it are two Thunderbolt 4 cables - the 2m. long TBT4-40G2M, and the 1m. … [+8517 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motor1 "
            },
            "author": "Chris Bruce",
            "title": "Alfa Romeo Giulia, Stelvio Arrive In 6C Villa d'Este Special Editions - Motor1 ",
            "description": "Alfa Romeo is launching 6C Villa d'Este editions of the Giulia and Stelvio inspired by the 1949 6C 2500 SS.",
            "url": "https://www.motor1.com/news/535143/alfa-romeo-6c-villa-deste/",
            "urlToImage": "https://cdn.motor1.com/images/mgl/O6E6L/s1/alfa-romeo-stelvio-and-giulia-6c-villa-d-este-edition.jpg",
            "publishedAt": "2021-09-23T13:54:00Z",
            "content": "The Concorso d'Eleganza Villa d'Este is one of the premier classic car events in Europe, and automakers often use the gathering of ritzy machines to debut new concepts and special editions. Case in p… [+1663 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Orf.at"
            },
            "author": "ORF.at",
            "title": "Einheitliche Ladebuchsen: EU-Vorschlag bringt Ende für Steckerchaos - ORF.at",
            "description": "Rund zwölf Jahre hat es gedauert, nun erhält der Wunsch nach einheitlichen Ladekabeln Hand und Fuß. Die EU-Kommission stellte am Donnerstag ihren Gesetzesvorschlag dazu vor, der ein Ladegerät für Handys, Tablets, Kopfhörer, Lautsprecher, tragbare Konsolen und…",
            "url": "https://orf.at/stories/3229632/",
            "urlToImage": "https://ibs.orf.at/news?image=https%3A%2F%2Fassets.orf.at%2Fmims%2F2021%2F39%2F10%2Fcrops%2Fw%3D1200%2Ch%3D630%2Cq%3D75%2F1089692_master_386510_eu_einheitliche_ladekabel_ppf.jpg%3Fs%3Dbc4e59c44b46b4580d9972509f21cb7109b1def3",
            "publishedAt": "2021-09-23T13:47:55Z",
            "content": "Rund 50.000 Tonnen Elektroschrott kommen jährlich weltweit wegen weggeworfener Ladegeräte zusammen. Das ist ein Grund für den Gesetzesvorschlag, den Industriekommissar Thierry Breton nun vorstellte. … [+3967 chars]"
        },
        {
            "source": {
                "id": "infobae",
                "name": "Infobae"
            },
            "author": "anónimo",
            "title": "Ni Bitcoin ni Ethereum: qué criptomonedas subieron más tras el temblor generado por Evergrande en China - infobae",
            "description": "Las criptodivisas estables exhibieron un fuerte repunte en las últimas horas después del temor generado por el gigante inmobiliario chino; cuáles son y qué potencial tienen",
            "url": "https://www.infobae.com/economia/2021/09/23/ni-bitcoin-ni-ethereum-que-criptomonedas-subiero-mas-tras-el-temblor-generado-por-evergrande-en-china/",
            "urlToImage": "https://www.infobae.com/new-resizer/BkRrh2XyEc_2Og9tOOrniGXAkoE=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/OLMVLEXPJBBDRLFQMBKAYOSV2M.jpg",
            "publishedAt": "2021-09-23T13:42:05Z",
            "content": "Algunas criptomonedas tuvieron una fuerte recuperación gracias a que China Evergrande Group ha dicho que ha resuelto uno de los pagos de intereses adeudado sobre uno de sus bonos nacionales.\r\nLas cri… [+3049 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lefigaro.fr"
            },
            "author": "Tom Kerkour",
            "title": "Vol de données de l'AP-HP : que faire si vous êtes concerné ? - Le Figaro",
            "description": "La préfecture de police a mis en ligne un formulaire numérique pour les 1,4 million de personnes touchées.",
            "url": "https://www.lefigaro.fr/secteur/high-tech/vol-de-donnees-de-l-ap-hp-que-faire-si-vous-etes-concerne-20210923",
            "urlToImage": "https://i.f1g.fr/media/cms/704x396_cropupscale/2021/09/23/c21103d69cc9b817f9ae65b9afcbdc76b41fefb1b969ebfcdfd51f61962530ab.jpg",
            "publishedAt": "2021-09-23T13:39:54Z",
            "content": "La préfecture de police a mis en ligne un formulaire numérique pour les 1,4 million de personnes touchées.La semaine dernière, 1,4 million de Français ont eu la malchance d'apprendre par un email de … [+2888 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "La Voz del Interior"
            },
            "author": "Eduardo Aguirre",
            "title": "Cómo ingresar al plan canje de Samsung - La Voz del Interior",
            "description": "La firma surcoreana tiene vigente su iniciativa que permite entregar un dispositivo usado en parte de pago de uno nuevo, ya sea celular, tablet o TV. Un ejecutivo de la empresa nos contó los detalles que se deben tener en cuenta.",
            "url": "https://www.lavoz.com.ar/tendencias/como-ingresar-al-plan-canje-de-samsung/",
            "urlToImage": "https://www.lavoz.com.ar/resizer/MDVWdzSSYWGBh4uKd7iplLTMd1g=/1200x630/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/QBPDY6GW3JC3DDGTE37G3K5I4Q.jpg",
            "publishedAt": "2021-09-23T13:36:39Z",
            "content": "El plan canje de Samsung comenzó hace algunos años bajo el nombre Galaxy para Siempre y sólo incluía su línea de teléfonos de alta gama. Hoy está vigente para smartphones, tablets y televisores. Tend… [+1827 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": null,
            "title": "EU sends jolt to Apple's Lightning port with new law mandating USB charging for all phones - CBC.ca",
            "description": "The European Union is hoping to say goodbye to junk drawers full of different charging cords by forcing all smartphones sold in the continent to use one standard: USB.",
            "url": "https://www.cbc.ca/news/business/apple-usb-charging-1.6186548",
            "urlToImage": "https://i.cbc.ca/1.6186564.1632402477!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/apple-products.jpg",
            "publishedAt": "2021-09-23T13:36:01Z",
            "content": "The European Union unveiled plans Thursday that would require smartphone makers to adopt a single charging method for mobile devices.\r\nThe EU Commission proposed legislation Thursday that would manda… [+1748 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "God of War Ragnarok - 10 BIGGEST Questions It NEEDS To Answer - GamingBolt",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9N0thSEJra1JUbmfSAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-09-23T13:30:01Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "7sur7.be"
            },
            "author": "Rédaction",
            "title": "L'Europe veut imposer le chargeur universel, Apple s'y oppose - 7sur7",
            "description": "La Commission européenne a dévoilé ce jeudi sa proposition législative pour imposer au secteur technologique un chargeur universel pour les smartphones ainsi qu'une série d’appareils électroniques portatifs (tablettes, appareils photo, casques, haut-parleurs …",
            "url": "https://www.7sur7.be/tech/l-europe-veut-imposer-le-chargeur-universel-apple-s-y-oppose~aaf0531d/",
            "urlToImage": "https://images0.persgroep.net/rcs/l_mc-kOrosIRkiJrH-YLWFxU1yc/diocontent/207996648/_focus/0.5/0.6/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
            "publishedAt": "2021-09-23T13:30:00Z",
            "content": "Apple, qui utilise actuellement sa propre technologie Lightning, devra aussi s'y plier. Ses appareils devraient ainsi, dans quelques années, comporter un autre port de recharge (éventuellement en plu… [+2797 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Uol.com.br"
            },
            "author": null,
            "title": "Energia solar em casa ganha impulso com alta na conta de luz e home office - Folha de S.Paulo",
            "description": "Consumidores e empresas instalaram 264 mil sistemas de geração distribuída em um ano",
            "url": "https://www1.folha.uol.com.br/mercado/2021/09/energia-solar-em-casa-ganha-impulso-com-alta-na-conta-de-luz-e-home-office.shtml",
            "urlToImage": "https://f.i.uol.com.br/fotografia/2021/08/30/1630338125612cfc4db0bd8_1630338125_3x2_rt.jpg",
            "publishedAt": "2021-09-23T13:16:00Z",
            "content": "O mercado de painéis solares para geração de energia por consumidores segue em expansão, impulsionado pelo aumento na conta de luz, preocupações com a crise hídrica e maior disseminação do home offic… [+4100 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "El novio le pegó y la chica le tiró el celular en la cabeza: él terminó muerto por el golpe y ella imputada por homicidio - Página 12",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiX2h0dHBzOi8vd3d3LnBhZ2luYTEyLmNvbS5hci8zNzAyNjUtZWwtbm92aW8tbGUtcGVnby15LWxhLWNoaWNhLWxlLXRpcm8tZWwtY2VsdWxhci1lbi1sYS1jYWJlemEt0gFfaHR0cHM6Ly93d3cucGFnaW5hMTIuY29tLmFyLzM3MDI2NS1lbC1ub3Zpby1sZS1wZWdvLXktbGEtY2hpY2EtbGUtdGlyby1lbC1jZWx1bGFyLWVuLWxhLWNhYmV6YS0?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-09-23T13:12:04Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Svethardware.cz"
            },
            "author": "oXy Online s.r.o.",
            "title": "Ryzen 5 3600 mizí z trhu a zbývají jen staré, nebo drahé modely - Svět hardware",
            "description": "Od společnosti AMD jsme se už nejednou dozvěděli o tom, že kvůli omezeným výrobním kapacitám se snaží preferovat výrobu spíše dražších produktů. Nyní se to zřejmě ukazuje na dalším příkladu a sice na Ryzenu 5 3600.",
            "url": "https://www.svethardware.cz/ryzen-5-3600-mizi-z-trhu-a-zbyvaji-jen-stare-nebo-drahe-modely/56004",
            "urlToImage": "http://www.svethardware.cz/ryzen-5-3600-mizi-z-trhu-a-zbyvaji-jen-stare-nebo-drahe-modely/56004/img/ryzen-5-170.jpg",
            "publishedAt": "2021-09-23T13:02:23Z",
            "content": "Pehled GPU  |  Pehled CPU  |  Doporuené PC sestavy  |  FAQ  |  Pro mít u nás profil?  |  Napite nám\r\nISSN 1213-0818 © 1998-2020 oXy Online s.r.o., vechna práva vyhrazena. Tento web vyuívá cookies a d… [+77 chars]"
        },
        {
            "source": {
                "id": "le-monde",
                "name": "Le Monde"
            },
            "author": "Adrien Sénécat",
            "title": "Pourquoi certains opérateurs télécoms comme Free et Altice se retirent de la Bourse - Le Monde",
            "description": "Iliad, la maison mère de Free, s’apprête à sortir de la Bourse à l’issue d’une OPA de Xavier Niel, son actionnaire majoritaire, vendredi 24 septembre. D’autres groupes, dont Altice ou TalkTalk, ont récemment fait de même.",
            "url": "https://www.lemonde.fr/economie/article/2021/09/23/pourquoi-certains-operateurs-telecoms-se-retirent-de-la-bourse_6095751_3234.html",
            "urlToImage": "https://img.lemde.fr/2021/09/22/432/0/5188/2594/1440/720/60/0/61da345_630585743-free.jpg",
            "publishedAt": "2021-09-23T13:00:17Z",
            "content": "Lheure des adieux à la Bourse se rapproche pour Free. Loffre publique dachat simplifiée (OPA) lancée par son fondateur Xavier Niel (actionnaire à titre personnel du Monde) sur le groupe Iliad, maison… [+3289 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Barbara Krasnoff",
            "title": "How to get Teams to go away in Windows 11 - The Verge",
            "description": "When you first install Windows 11, you will probably see a new icon on your Taskbar called “Chat, which starts the chat service from Microsoft Teams. If you’re not interested in using Teams, here’s how you remove it from your Taskbar and your computer.",
            "url": "https://www.theverge.com/22686302/windows-11-microsoft-teams-chat-how-to-uninstall",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/oqU0N_LyFBuqf4xSy2z2cLIsxc0=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22869996/Screenshot__24___1_.png",
            "publishedAt": "2021-09-23T13:00:00Z",
            "content": "Microsoft really wants you to use Teams. Heres what to do if you dont\r\nWhen you first install Windows 11, you will probably see a new icon on your Taskbar or, at least, it will be new if you havent b… [+3426 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Trust My Science"
            },
            "author": null,
            "title": "Des chercheurs de la NASA, du MIT et de la DARPA se réunissent pour discuter de technologies \"antigravité\" - Trust My Science",
            "description": "Depuis novembre 2020, un certain nombre de scientifiques se réunissent régulièrement sur Zoom pour discuter des technologies de propulsion du futur, dont l'hypothétique \"antigravité\".",
            "url": "https://trustmyscience.com/chercheurs-nasa-mit-darpa-reunis-pour-discuter-technologies-antigravite/",
            "urlToImage": "https://trustmyscience.com/wp-content/uploads/2021/09/chercheurs-nasa-mit-darpa-reunis-pour-discuter-technologies-anti-gravite-couv.jpg",
            "publishedAt": "2021-09-23T12:51:37Z",
            "content": "L’antigravité est l’idée d’une technologie, appliquée à un objet ou à un espace, permettant « d’annuler » la gravité et non de la compenser comme cela est le cas pour un avion par exemple. Depuis nov… [+8541 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ámbito.com"
            },
            "author": "ámbito.com",
            "title": "Multinacional busca empleados en el interior del país: cómo postularse para trabajar en este gigante tecnológico - ámbito.com",
            "description": "La unidad de negocios del Grupo BGH, lanzó Cloud Academy, una oportunidad federal para los talentos nacionales vinculados las carreras tecnológicas.",
            "url": "https://www.ambito.com/informacion-general/empleo/multinacional-busca-empleados-el-interior-del-pais-como-postularse-trabajar-este-gigante-tecnologico-n5285455",
            "urlToImage": "https://media.ambito.com/p/4dc048f0438fbc75c258ec0e7732688f/adjuntos/239/imagenes/039/349/0039349378/1200x675/smart/bghjpg.jpg",
            "publishedAt": "2021-09-23T12:44:46Z",
            "content": "Además, desde las empresas destacan la escasa cantidad de egresados en carreras STEM (ciencias, tecnología, ingenierías y matemáticas, por sus siglas en inglés).\r\nEn este caso, el gigante tecnológico… [+2199 chars]"
        },
        {
            "source": {
                "id": "infobae",
                "name": "Infobae"
            },
            "author": "anónimo",
            "title": "Impulsan que todos los teléfonos celulares tengan el mismo tipo de cargador: ¿se podrá lograr? - infobae",
            "description": "El proyecto tomó vigor en los últimos tiempos pero enfrenta la resistencia de algunas empresas; costos y beneficios",
            "url": "https://www.infobae.com/economia/2021/09/23/impulsan-que-todos-los-telefonos-celulares-tengan-el-mismo-tipo-de-cargador-se-podra-lograr/",
            "urlToImage": "https://www.infobae.com/new-resizer/4rXa8G1QGu1KwrMZFSQb5PzD1H0=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/AYPYNMOH4RYCV2DLFW3M6ECZWU.jpg",
            "publishedAt": "2021-09-23T12:44:38Z",
            "content": "La Unión Europea presentó hoy una estrategia para que los fabricantes de smartphones tengan que adoptar un método único de carga para los dispositivos móviles. ¿Se podrá lograr y extenderse a otras r… [+3566 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bluradio.com"
            },
            "author": "Redacción BLU Radio",
            "title": "Tapia ofrece “encender el ventilador” y promete nombres de congresistas implicados en caso MinTIC - Blu Radio",
            "description": "Emilio Tapia pidió garantías para contar la verdad sobre los políticos implicados en este caso, cuyos nombres, no se revelan.",
            "url": "https://www.bluradio.com/judicial/tapia-ofrece-encender-el-ventilador-y-promete-nombres-de-congresistas-implicados-en-caso-mintic",
            "urlToImage": "https://caracoltv.brightspotcdn.com/dims4/default/e70a32e/2147483647/strip/true/crop/1000x525+0+149/resize/1200x630!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F91%2F3a%2Fde197cad444b85b7779eb730d9bf%2Femilio-tapia.jpg",
            "publishedAt": "2021-09-23T12:36:10Z",
            "content": "El empresario Emilio Tapia, preso por el escándalo de\r\n Centros Poblados y MinTIC\r\n, ofreció a la Fiscalía colaboración y prometió revelar los nombres de los congresistas implicados en el caso.\r\nDe a… [+2377 chars]"
        }
    ]
  }

}
