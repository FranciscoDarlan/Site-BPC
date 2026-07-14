const matricula = "https://chat.whatsapp.com/HRbTvEkKlaa9KOBgVWlwAd"

const localizacoes = [
    {
        "nome": "Curicica",
        "local": "https://www.google.com/maps/place/Polo+Curicica/@-22.942932,-43.383122,15z/data=!4m6!3m5!1s0x9bd9299d78a69b:0xae2335df3c16f090!8m2!3d-22.9429316!4d-43.383122!16s%2Fg%2F11pzg4r7f_?entry=ttu"
    },
    {
        "nome": "Bangu",
        "local": "https://www.google.com/maps/place/Polo+Curicica+Bangu/@-22.8802895,-43.4648697,20z/data=!4m6!3m5!1s0x9bdf37aec154d9:0x236d29d3265a48d7!8m2!3d-22.880334!4d-43.4645246!16s%2Fg%2F11w1jvp075?entry=ttu"
    }
]

const perguntas = [
    {
        "pergunta": "Onde o Bombeiro Civil formado por este curso poderá trabalhar?",
        "resposta": "Você poderá atuar na gestão de riscos e planos de emergência em empresas privadas, indústrias, shoppings, condomínios, além de grandes shows, eventos e estádios."
    },
    {
        "pergunta": "O curso oferece treinamento prático para o dia a dia da profissão?",
        "resposta": "Sim. Você vai desenvolver na prática as principais atividades da rotina de um Bombeiro Civil, aprendendo a identificar riscos, combater princípios de incêndio e prestar primeiros socorros para salvar vidas."
    }
];


const rotas = [
    { name: "Início", to: "/", type: "internal" },
    { name: "Cursos", to: "/cursos", type: "internal" },
    { name: "Questões", to: "https://questoes-bpc.vercel.app/index.html", type: "external" },
]

const rede = [
    {
        nome: "Instagram",
        url: "https://www.instagram.com/polocuricica/",
        icon: "https://img.icons8.com/fluency/48/instagram-new.png"
    },
    {
        nome: "Facebook",
        url: "https://www.facebook.com/share/172z7UVXYd",
        icon: "https://img.icons8.com/fluency/48/facebook.png"
    }
];


export { perguntas, localizacoes, rotas, rede, matricula }