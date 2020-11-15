"use strict";
/*
  Import modules/files you may need to correctly run the script.
 */
import { readJsonFile } from "./readFile/readFile.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import Subscription from "./models/subscriptionModel.js";
import {connectToDatabase} from './connectMongodb.js'
import mongoose from 'mongoose';

const connectToDB = () => {
  return connectToDatabase().on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
}

const count = async () => {
  const docCount = await User.countDocuments({})
    .then((num) => {
      return num;
    })
    .catch((err) => {
      throw err;
    });
  return docCount;
};

const countOrders = async () => {
  const docCount = await Order.countDocuments({})
    .then((num) => {
      return num;
    })
    .catch((err) => {
      throw err;
    });
  return docCount;
};

const countSubs = async () => {
  const docCount = await Subscription.countDocuments({})
    .then((num) => {
      return num;
    })
    .catch((err) => {
      throw err;
    });
  return docCount;
};

const report = async (err, str) => {
  if (err) {
    throw err;
  }
  const c = await count();
  console.log(str, c);
};

const saveDataInDB = async (user) => {
  //save all users into the database
  return await new Promise(async (res, rej) => {
    User.insertMany(user, async (err, docs) => {
      if (err) rej(err);
      res(docs);
    });
  });
};

const saveDataInDBOrder = async (order) => {
  //save all users into the database
  return await new Promise(async (res, rej) => {
    Order.insertMany(order, async (err, docs) => {
      if (err) rej(err);
      res(docs);
    });
  });
};

const saveDataInDBSub = async (order) => {
  //save all users into the database
  return await new Promise(async (res, rej) => {
    Subscription.insertMany(order, async (err, docs) => {
      if (err) rej(err);
      res(docs);
    });
  });
};

const deleteDataInDB = async () => {
  //delete all clubs from the database
  return await User.deleteMany((err) => {
    if (err) throw err;
  });
};

const deleteDataInDBOrder = async () => {
  //delete all clubs from the database
  return await Order.deleteMany((err) => {
    if (err) throw err;
  });
};

const deleteDataInDBSub = async () => {
  //delete all clubs from the database
  return await Subscription.deleteMany((err) => {
    if (err) throw err;
  });
};

const main = async () => {
  connectToDB()
  /*
    Instantiate a mongoose model for each football club object in the JSON file,
    and then save it to your Mongo database
    //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

    Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
   */
    //delete the existing entries to start fresh
    await deleteDataInDB();
    //checking if the documents have been deleted successfully
    await report(null, "Documents deleted, there are now %d documents.");
    //read file and return the data
    await readJsonFile("User_Data")
      .then(async (userData) => {
        //save the data into the database
        await saveDataInDB(userData)
          .then(async (data) => {
            //check if the footballClub data has been saved successfully
            await report(null, "All %d documents have been added.");
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });



    await deleteDataInDBOrder();
    //checking if the documents have been deleted successfully
    await report(null, "Documents deleted, there are now %d documents.");
    //read file and return the data
    await readJsonFile("Order_Data")
      .then(async (orderData) => {
        //save the data into the database
        await saveDataInDBOrder(orderData)
          .then(async (data) => {
            //check if the footballClub data has been saved successfully
            await report(null, "All %d documents have been added.");
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });



      await deleteDataInDBSub();
    //checking if the documents have been deleted successfully
    await report(null, "Documents deleted, there are now %d documents.");
    //read file and return the data
    await readJsonFile("Subscription_Data")
      .then(async (subscriptionData) => {
        //save the data into the database
        await saveDataInDBSub(subscriptionData)
          .then(async (data) => {
            //check if the footballClub data has been saved successfully
            await report(null, "All %d documents have been added.");
            mongoose.disconnect() 
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
};


main()
