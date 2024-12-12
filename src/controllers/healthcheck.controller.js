import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const healthcheck = asyncHandler(async (req, res) => {
    // build a healthcheck response that simply returns the OK status as json with a message
    console.log("hi its server cheking");
    
    return res.status(200).json( new ApiResponse(200, {}, "OK Server is Fit and Fine"));
})

export {
    healthcheck
}
