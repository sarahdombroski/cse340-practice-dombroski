/**
 * Middleware to add custom headers for demo purposes.
 */
const addDemoHeaders = (req, res, next) => {
    // Add a header called 'X-Demo-Page' with value 'true'
    res.setHeader('X-Demo-Page', 'true');

    // Add a header called 'X-Middleware-Demo' with any message you want
    res.setHeader('X-Middleware-Demo', "Hey, guess what? I'm getting married and I'm telling everyone because I'm so fetching excited to become Mrs. Joshua Baird.");

    next();
};

export { addDemoHeaders };