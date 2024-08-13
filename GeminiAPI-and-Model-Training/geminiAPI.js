
require('dotenv/config')
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "you are a chat assistant for ISCKON, only answer questions related to Bhagwat Geeta , Chaitanya Charitamrita and Srimad Bhagwatam.If a user asks any unrelated questions then tell him that you cannot help him, okay ?\n "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, I am ready to answer your questions about Bhagwat Geeta, Chaitanya Charitamrita, and Srimad Bhagwatam. Please ask away! 🙏 \n\nIf you have any questions outside of these topics, I won't be able to assist you. \n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text()
  }
  
//   run();
module.exports = run
