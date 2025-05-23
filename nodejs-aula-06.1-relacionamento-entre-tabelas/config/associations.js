import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";

// Definindo as relações entre os Models
const defineAssociations = () => {
  Cliente.hasMany(Pedido, { foreignKey: "cliente_id" });
  Pedido.belongsTo(Cliente, { foreignKey: "cliente_id" });
};
export default defineAssociations;