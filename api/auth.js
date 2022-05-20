const jwt = require("jsonwebtoken");
const jwkToPem = require("jwk-to-pem");
const mykey = require("../aws.json");
let pem = jwkToPem(mykey.keys[1]);
exports.validate = (token) => {
  try {
    token = token.split(" ")[1];
    let userInfo;
    jwt.verify(token, pem, { algorithms: ["RS256"] }, function (err, decoded) {
      userInfo = decoded;
    });
    if (userInfo == null) {
      throw { msg: "Expired Token", status: 401 };
    }
    // Validate the token provided, return user info if validated
    let result = validateCreds(userInfo.exp, userInfo.iss, userInfo.auth_time);
    let response = {
      valid: result,
      userDetail: userInfo,
    };
    return response;
  } catch (error) {
    return error;
  }
};

function validateCreds(exp, usrPool, authtime) {
  //ap-southeast-2_VFeT6iLkq is the userpool ID of Cognito
  if (!usrPool.toString().includes("ap-southeast-2_VFeT6iLkq")) {
    console.log("Invalid: ISS");
    return false;
  }

  // Check expiry time of token
  if (authtime > exp) {
    console.log("Invalid: Expiry");
    return false;
  } else {
    console.log("Token Valid");
    return true;
  }
}
