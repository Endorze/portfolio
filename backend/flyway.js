import { Flyway } from "node-flyway";

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
}

const flyway = new Flyway(
    {
        url: `jdbc:postgresql://${config.host}:${config.port}/${config.database}`,
        user: config.user,
        password: config.password,
        migrationLocations: ["flyway/migrations"]
    }
);

const migrate = () => flyway.migrate().then(response => {
    if(!response.success) {
      // Handle failure case
      throw new Error(`Unable to execute migrate command. Error: ${response.error.errorCode}`);
    }
    else {
      // Handle response
      console.log("FLYWAY MIGRATION SUCCESS!!!!!!!!!!!!")
      console.log(response)
    }
});

export default {
    migrate
}