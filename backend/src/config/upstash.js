import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import dotenv from "dotenv"

dotenv.config();

//created the ratelimiter that allow the 10 req per 20 sec 
const ratelimit=new Ratelimit({
    redis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(100,"60 s"),
    analytics: true,
})

export default ratelimit;