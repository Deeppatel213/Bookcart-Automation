// Install Dependencies

// npm i dotenv -D
// npm i cross-env -D

import * as dotenv from 'dotenv'

export const getEnv = ()=>{
dotenv.config({
    override: true,
    path: `src/helper/env/.env.${process.env.ENV}`
})
}