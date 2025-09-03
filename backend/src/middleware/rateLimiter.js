import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    //we put userid as an argument, but as we do not have authentication here, we have put "my-limit-key". Rate limit should be per user as if I have been rate limited, the other shouldnt
    const { success } = await rateLimit.limit("my-limit-key");

    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests,please try again later" });
    }

    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
