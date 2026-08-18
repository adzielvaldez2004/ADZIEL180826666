export const CONTENT = {
  // =========================
  // PORTADA
  // =========================
  recipient: "Dannia",

  cover: {
    smallTitle: "OPERACIÓN 18.08",
    title: "Para Dannia",
    text: "Entrégase únicamente a la destinataria.",
    button: "Abrir la carta",
  },

  // =========================
  // INTRODUCCIÓN
  // =========================
  intro: {
    smallTitle: "OPERACIÓN 18.08",
    title: "Una carta esperaba ser abierta…",

    lines: [
      "Tres pruebas te esperan.",
      "Tres palabras te abrirán el camino.",
      "Acierta cada preegunta para tener acceso al regalo.",
    ],

    button: "Comenzar",
  },

  // =========================
  // LAS 3 PRUEBAS
  //
  // AQUÍ PODRÁS CAMBIAR:
  // title = título
  // clue = pista
  // password = contraseña correcta
  // success = mensaje cuando acierte
  // =========================

  chapters: [
    {
      roman: "I",
      title: "Buenso dias Pumpkin!, este regalo quiero que lo tengas ya, pero no sin complicartelo un poquitin jeje",

      clue:
        "Ordena las primeras 5 canciones de la nube en el jardin.",

      password: "valor de mas nube gris culpa violento vuelve corazon",

      success:
        "A mira que pro.",
    },

    {
      roman: "II",
      title: "esta te dara una mausquerramienta misteriosa que te ayudara mas tarde, si no la sabes la pierdes",

      clue:
        "7X5.",

      password: "35",

      success:
        "Que inteligenche mami.",
    },

    {
      roman: "III",
      title: "Jijijiji",

      clue:
        "¿Cual es tu color favorito? jeje guiño guiño.",

      password: "rosa",

      success:
        "Has encontrado la llave.",
    },
  ],

  // =========================
  // PÁGINA FINAL
  // =========================
  final: {
    smallTitle: "LA ÚLTIMA PÁGINA",

    title: "Llegaste hasta aquí.",

    text:
      "Te mereces todo el mundo y más.",

    reveal:
      "TEAMO PUMPKIN",

    symbol: "♥",
  },

  // =========================
  // TEXTOS DE LOS BOTONES
  // =========================
  labels: {
    pathTitle: "EL CAMINO",

    pathText:
      "Cada capítulo es una puerta. Cada palabra, la llave.",

    placeholder:
      "Escribe tu respuesta…",

    send:
      "Enviar",

    correct:
      "¡Correctooooo!",

    incorrect:
      "Esa no es la palabra. Intenta otra vez wapa.",

    continue:
      "Continuar",

    back:
      "← Volver al camino",
  },
};