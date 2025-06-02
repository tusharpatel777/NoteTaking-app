import ratelimit from "../config/upstash.js"

const rateLimiter=async(req,res,next)=>{
    try {
        const {success}=await ratelimit.limit("my-limit-key")
        if(!success){
            res.status(429).json({
                message:"too many request , please try again later "
            })
        }
        next();  //it is mainly useful inordered to complete the middle and pass to the next function
        
    } catch (error) {
        console.log("ratelimit error ", error );
        next(error);
    }
}
export default rateLimiter;


// // import ratelimit from "../config/upstash.js";
// // const rateLimiter = async (req, res, next) => {
// //   try {
// //     const ip = req.ip || req.headers['x-forwarded-for'] || "unknown";
// //     const { success } = await ratelimit.limit(ip);

// //     if (!success) {
// //       return res.status(429).json({
// //         message: "Too many requests, please try again later."
// //       });
// //     }
// //     next(); // only allow if rate limit is OK

// //   } catch (error) {
// //     console.log("Rate limit error:", error);
// //     next(error);
// //   }
// // };

// // export default rateLimiter;

// import ratelimit from "../config/upstash.js";

// const rateLimiter = async (req, res, next) => {
//   const ip = req.ip || req.headers["x-forwarded-for"] || "anon";

//   try {
//     const { success, remaining, reset } = await ratelimit.limit(ip);
//     console.log("IP:", ip, "-> Success:", success, "Remaining:", remaining);

//     res.setHeader("X-RateLimit-Remaining", remaining);
//     res.setHeader("X-RateLimit-Reset", reset);

//     if (!success) {
//       return res.status(429).json({
//         message: "Rate limit exceeded. Try again later.",
//       });
//     }

//     next();
//   } catch (err) {
//     console.error("Rate limiter error:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export default rateLimiter;

