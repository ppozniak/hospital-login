const MOCK_AUTH_METHODS = [
  { type: "landline", value: "+44 420133712345" },
  { type: "email", value: "ilikepotatoes@email.com" },
  { type: "phone", value: "+44666666" },
];

/**
 * Fake API call to get authorization methods (for example send email to user with 4 digit pin)
 * @param {Object} { lastName, dob, zip }
 * @return {Promise}
 */
export async function getAuthorizationMethods({ lastName, dob, zip }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_AUTH_METHODS);
    }, 1500);
  });
}

/**
 * Fake API call after user has selected auth method. Server should send an sms or email
 * @param {Object} { type, value }
 * @return {Promise}
 */
export async function selectAuthorizationMethod({ type, value }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
}

/**
 * Backend validation of entered pin
 * @param {String} pin - 4 digit pin
 * @return {Promise}
 */
export async function validatePin(pin) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pin === "0000") {
        resolve();
      } else {
        reject(new Error("Invalid pin"));
      }
    }, 1500);
  });
}
