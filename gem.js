import 'dotenv/config'
import {GoogleGenerativeAI} from '@google/generative-ai'
import * as readLine from 'node:readLine/promises'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_KEY)
