import axios from "axios"

// API key will be provided through environment variables
const TRANSCRIPT_API_KEY = import.meta.env.VITE_TRANSCRIPT_API_KEY
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY // Replace with your actual OpenAI API key

// Video summary service using Rapid API's YouTube Transcript API
// This can be replaced with n8n implementation later
export const getVideoTranscript = async (videoUrl: string) => {
  try {
    const videoId = extractVideoId(videoUrl)
    if (!videoId) throw new Error("Invalid YouTube URL")

    const response = await axios.get(
      "https://youtube-transcriptor.p.rapidapi.com/transcript",
      {
        params: { video_id: videoId, lang: "en" },

        headers: {
          "X-RapidAPI-Key": TRANSCRIPT_API_KEY,
          "X-RapidAPI-Host": "youtube-transcriptor.p.rapidapi.com",
        },
      },
    )

    // Process transcript to get summary
    // This is a simplified version - you can enhance it based on needs
    const { title, thumbnails, transcriptionAsText } = response.data[0]
    return { title, thumbnails, transcriptionAsText }
  } catch (error) {
    console.error("Error fetching video transcript:", error)
    throw error
  }
}

// Helper function to extract video ID from YouTube URL
const extractVideoId = (url: string): string | null => {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regex)
  console.log(url.match(regex))
  return match ? match[1] : null
}

export const getVideoSummary = async (videoUrl: string) => {
  const { transcriptionAsText: transcript, ...summary } =
    await getVideoTranscript(videoUrl)
  try {
    // Send the transcript to OpenAI's API for summarization
    const response = await axios.get('https://google-bard-api-google-ai-bard.p.rapidapi.com/ask', {
      params: {
       q: `Summarise it :- ${transcript}`,
      },
      headers: {
        "x-rapidapi-key": "18f7597ca2mshfea9d9f24ff964cp123596jsn3a38e12a9f1b",
        "x-rapidapi-host": 'google-bard-api-google-ai-bard.p.rapidapi.com',
      },
    })

    // Return the summary response from OpenAI
    const summarised = response.data[0]
    console.log("Summary:", summarised)
    return { ...summary, summary: summarised }
  } catch (error) {
    console.error("Error summarizing transcript:", error)
    throw error
  }
}
