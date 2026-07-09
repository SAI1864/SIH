const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });

/**
 * Returns the OpenAI API key from environment variables.
 * Throws if the key is not set, preventing silent failures.
 */
function getOpenAIKey() {
  const key = process.env.OPENAI_API_KEY;

  if (!key || key === "sk-your-key-here") {
    throw new Error(
      "OPENAI_API_KEY is not set. Please add your real key to the .env file."
    );
  }

  return key;
}

module.exports = { getOpenAIKey };
