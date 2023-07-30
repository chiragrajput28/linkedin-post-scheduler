// const { Configuration, OpenAIApi } = require("openai");

// const config = new Configuration({
// 	apiKey: "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",
// });

// const openai = new OpenAIApi(config);

// const runPrompt = async () => {
// 	const prompt = `write me a joke about`;
//     // strategy, number of days, post target audience, 
// 	const response = await openai.createCompletion({
// 		model: "gpt-3.5-turbo",
// 		prompt: prompt,
// 		max_tokens: 2048,
// 		temperature: 1,
// 	});
//     //console.log(response.data);
// 	const parsableJSONresponse = response.data.choices[0].text;
// 	const parsedResponse = JSON.parse(parsableJSONresponse);

// 	console.log("Question: ", parsedResponse.Q);
// 	console.log("Answer: ", parsedResponse.A);
// };

// runPrompt();

//image generation 

//automation on linkedin posts

//free AI model 

/*

day 1: {

}

day 2: {

}

*/

//bug to feature 

const axios = require("axios");

require("dotenv").config();

//const apiKey = "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";
const apiKey = "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";
const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

const params = {
  prompt: "you are a business expert. help me in establishing my business in supply chain",
  model: "text-davinci-003",
  max_tokens: 1000,
  temperature: 1,
};

client
  .post("https://api.openai.com/v1/completions", params)
  .then((result) => {
    console.log(result.data.choices[0].text);
    //console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });