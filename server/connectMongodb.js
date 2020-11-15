"use strict";

import config from "./config/config.js";
import mongoose from "mongoose";

/* Connect to your database using mongoose */
const connectToDatabase = () => {
  const link = config.db.uri;

  mongoose
    .connect(link, { useNewUrlParser: true, useUnifiedTopology: true})
    .catch((error) => console.error(error));
  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);
  return mongoose.connection;
};

export { connectToDatabase };
