import __dirname from "../utils.js";

export default {
  welcome: {
    subject: "¡Bienvenido!",
    attachments: [
      {
        filename: "id2.jpg",
        path: `${__dirname}/public/img/id2.jpg`,
        cid: "id2",
      },
    ],
  },

  restorePwd: {
    subject: "Restablecimiento de contraseña",
    attachments: [
      {
        filename: "id2.jpg",
        path: `${__dirname}/public/img/id2.jpg`,
        cid: "id2",
      },
    ],
  },

  purchase: {
    subject: "Tu pedido ha sido procesado",
    attachments: [
      {
        filename: "id2.jpg",
        path: `${__dirname}/public/img/id2.jpg`,
        cid: "id2",
      },
    ],
  },
};
