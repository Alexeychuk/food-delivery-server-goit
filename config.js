const dbUser = "adminUser";
const dbPassword = "adminUser";

const config = {
  port: 8000,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@goit-food-delivery-uktfu.mongodb.net/test?retryWrites=true&w=majority`

  //databaseUrl: `mongodb://${dbUser}:${dbPassword}@ds159020.mlab.com:59020/marketplace-test`
};

//mongodb+srv://test-user_1:<password>@goit-food-delivery-uktfu.mongodb.net/test?retryWrites=true&w=majority

module.exports = config;
