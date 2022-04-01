// Custom middleware that logs out the type and path of each request to the server
const auth = (req, res, next) => {
  switch (req.method) {
    case 'GET': {
      req.authUser = {
        name: "gary"
      }
      break;
    }
    default:
      console.log('No auth needed');
  }

  next();
};

exports.auth = auth;
