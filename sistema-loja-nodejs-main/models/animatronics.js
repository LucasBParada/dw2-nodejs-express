import sequelize from "sequelize";
import connection from "../config/sequelize.js";

const Animatronics = connection.define("animatronics", {
  nome: {
    type: sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: sequelize.DECIMAL,
    allowNull: false,
  },
  peso: {
    type: sequelize.DECIMAL,
    allowNull: false,
  },
  descricao: {
    type: sequelize.STRING,
    allowNull: false,
  },
  categoria: {
    type: sequelize.STRING,
    allowNull: false,
  },
});
Animatronics.sync({ force: false });
export default Animatronics;
