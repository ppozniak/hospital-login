const MOCK_AUTH_METHODS = [
  { type: "landline", value: "+44 420133712345" },
  { type: "email", value: "ilikepotatoes@email.com" },
  { type: "phone", value: "+44666666" },
];

/**
 * Fake API call to get authorisation methods (for example send email to user with a code, or SMS)
 * @param {Object} { lastName, dob, zip }
 * @return {Promise}
 */
export async function getAuthorisationMethods({ lastName, dob, zip }) {
  console.info(`Making fake call to search for ${lastName} ${dob} ${zip}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_AUTH_METHODS);
    }, 1500);
  });
}
