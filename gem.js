import 'dotenv/config'
import {GoogleGenerativeAI} from '@google/generative-ai'
import * as readLine from 'node:readline/promises'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_KEY)
const model = genAI.getGenerativeModel({
    model:"gemini-3-flash-preview",
    systemInstruction:"You are a friendly medicine assistant. Talk to clients in a soft, helpful tone. Make them feel comfortable."
})

//interface to read your keyboard (stdin) and write to terminal (stdout)

const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

async function startChat(){

    // const chat = model.startChat({
    //     history: [], 
    //     generationConfig: {
    //         maxOutputTokens: 1000,
    //     },
    // })
    console.log("____ 🩺 Medicine Assistant Started! (Type 'exit' to quit) _____")

    while(true){
        const userInput = await rl.question("Ask Gemini 3 : \n")

        if(userInput.toLowerCase() === "exit"){
            console.log("goodbye!!")
            rl.close()
            break
        }

        try{
            const result = await model.generateContent(userInput)
            console.log("Gemini's response: ")
            const response = result.response.text()
            console.log(response)
        }
        catch(err){
            console.log(err.message)
        }
    }
}
startChat()