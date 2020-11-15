import Order from "./models/orderModel.js";

const findOrdersByName = (_Name_) => {
    return new Promise((res, rej) => {
      /*
        Find the document that contains data corresponding to the school name,
        then pass the returned data into the res function.
       */
      FootballClub.find({ customerName: _Name_ }, (err, data) => {
        if (err) rej(err);
        res(data);
      });
    });
  };

  const findOrdersByDriverName = (_driverName_) => {
    return new Promise((res, rej) => {
      /*
        Find the document that contains data corresponding to the school name,
        then pass the returned data into the res function.
       */
      FootballClub.find({ driverName: _driverName_ }, (err, data) => {
        if (err) rej(err);
        res(data);
      });
    });
  };

  const findOrdersByNumber = (_Number_) => {
    return new Promise((res, rej) => {
      /*
        Find the document that contains data corresponding to the school name,
        then pass the returned data into the res function.
       */
      FootballClub.find({ orderNumber: _Number_ }, (err, data) => {
        if (err) rej(err);
        res(data);
      });
    });
  };

  const findOrdersByPickUpTime = (_Time_) => {
    return new Promise((res, rej) => {
      /*
        Find the document that contains data corresponding to the school name,
        then pass the returned data into the res function.
       */
      FootballClub.find({ pickupTime: _Time_ }, (err, data) => {
        if (err) rej(err);
        res(data);
      });
    });
  };
  
  export {
    findOrdersByName,
    findOrdersByDriverName,
    findOrdersByPickUpTime,
    findOrdersByNumber,
  };