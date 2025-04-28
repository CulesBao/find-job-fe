import axiosPublic from "./axiosPublic"
import safeApiCall from "./safeApiCall"

export const sendMessage = async (message) => {
  return safeApiCall(() => {
    return axiosPublic.post("/chat/", {message})
  })
}