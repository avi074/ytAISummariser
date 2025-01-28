import React, { useState } from "react"
import { getVideoSummary } from "../lib/api"
import { ExternalLinkIcon, Loader, Youtube } from "lucide-react"
import toast from "react-hot-toast"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ThemeToggle } from "./ui/theme-toggle"

export const VideoSummary: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState("")
  const [summary, setSummary] = useState({
    title:
      "I Made 700 Monetizable YouTube Shorts for Faceless Channel in 18 MINUTES using AI Automation",
    description:
      "🚀 In this video, I'm REVEALING a Game-Changing UNTAPPED strategy that'll let you effortlessly generate engaging Riddles using ChatGPT and a whopping 700 YouTube shorts with Canva's Bulk Create Feature – all in under 60 minutes! This smart method not only saves you time and effort but also has the potential to significantly boost your earnings. By following this strategy, you could be looking at over $35,000 in monthly income. Trust me, this video is a must-watch for anyone serious about leveling up their content creation game and increasing their income!\n\n🔗 Links 🔗\n\n👉 Canva: https://partner.canva.com/aigenesis\n\n🔥 Best AI Tool for Voiceovers and Videos: https://fliki.ai/?via=aigenesis\n\n💯 Ultimate ChatGPT Guide: https://aigenesis.gumroad.com/l/ChatGPTGuide/AIGENESIS\n\n🎯 Subscribe to my Newsletter: https://aigenesis.beehiiv.com/subscribe \n\n✅ Join my Exclusive \"Faceless Success\" Program Waitlist: facelessuccess.beehiiv.com/subscribe\n\n💪 Grow your YouTube Channel using this AI Tool: https://vidiq.com/aigenesis\n\n-------------------------------------------------------------\n\n🚀 Follow Me on Social Media:\n\n➡︎ Twitter: https://twitter.com/AIGenesis_\n➡︎ TikTok: https://tiktok.com/@aigenesis.official\n➡︎ Instagram: https://instagram.com/aigenesis.official\n\n📍 Business Inquiries: aigenesis.business@gmail.com \n\n-----------------------------------------------------------\n\nWelcome to AI Genesis, your gateway to the world of AI exploration and money-making strategies! Dive deep into the realms of AI as I explore its potential for profit, productivity, and efficiency. Discover AI tools, strategies, and resources that can transform your endeavors. From educational content to AI-powered money-making methods, we've got you covered!\n\n-------------------------------------------------------------\n\nTags: #youtubeautomation #facelessyoutubechannel #aiautomation  #aitools #makemoneyonline #youtubeshorttutorial #finance #chatgptprompt  #canva #canvatutorial  #ai #chatgpt #openai #aigenesis",
    availableLangs: ["en"],
    lengthInSeconds: "1082",
    thumbnails: [
      {
        url: "https://i.ytimg.com/vi_webp/lqXWVzWkkyc/default.webp",
        width: 120,
        height: 90,
      },
      {
        url: "https://i.ytimg.com/vi_webp/lqXWVzWkkyc/mqdefault.webp",
        width: 320,
        height: 180,
      },
      {
        url: "https://i.ytimg.com/vi_webp/lqXWVzWkkyc/hqdefault.webp",
        width: 480,
        height: 360,
      },
      {
        url: "https://i.ytimg.com/vi_webp/lqXWVzWkkyc/sddefault.webp",
        width: 640,
        height: 480,
      },
      {
        url: "https://i.ytimg.com/vi/lqXWVzWkkyc/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmCwmfzkHF7RAGCddXJYldr4cFlA",
        width: 686,
        height: 386,
      },
    ],
    transcription: [
      {
        subtitle: "are you ready to uncover the secrets to",
        start: 0.08,
        dur: 3.639,
      },
      {
        subtitle: "building a monetizable faceless YouTube",
        start: 1.719,
        dur: 4.401,
      },
      {
        subtitle: "channel with AI automation this YouTube",
        start: 3.719,
        dur: 4.721,
      },
      {
        subtitle: "channel is raking in over $9,000 per",
        start: 6.12,
        dur: 5.679,
      },
      {
        subtitle: "month by uploading simple YouTube wait",
        start: 8.44,
        dur: 5.239,
      },
      {
        subtitle: "doesn&#39;t this sound familiar you&#39;ve",
        start: 11.799,
        dur: 3.561,
      },
      {
        subtitle: "probably come across one of these videos",
        start: 13.679,
        dur: 3.68,
      },
      {
        subtitle: "on YouTube and if you haven&#39;t then",
        start: 15.36,
        dur: 4.8,
      },
      {
        subtitle: "here&#39;s a quick recap a few months ago a",
        start: 17.359,
        dur: 4.481,
      },
      {
        subtitle: "game-changing method for creating",
        start: 20.16,
        dur: 4.039,
      },
      {
        subtitle: "YouTube shorts emerged it spread like",
        start: 21.84,
        dur: 4.56,
      },
      {
        subtitle: "wildfire and many YouTubers started",
        start: 24.199,
        dur: 4.041,
      },
      {
        subtitle: "making videos about it but here&#39;s the",
        start: 26.4,
        dur: 4.199,
      },
      {
        subtitle: "catch they all showcase the same method",
        start: 28.24,
        dur: 4.159,
      },
      {
        subtitle: "using the exact same reference Channel",
        start: 30.599,
        dur: 4.161,
      },
      {
        subtitle: "as an example and to top it off they",
        start: 32.399,
        dur: 4.401,
      },
      {
        subtitle: "were all making shorts about psychology",
        start: 34.76,
        dur: 5.08,
      },
      {
        subtitle: "facts it can be just a coincidence right",
        start: 36.8,
        dur: 5.12,
      },
      {
        subtitle: "but to be honest with you the previous",
        start: 39.84,
        dur: 4.32,
      },
      {
        subtitle: "content idea was very popular for a Time",
        start: 41.92,
        dur: 4.04,
      },
      {
        subtitle: "bringing great success to early creators",
        start: 44.16,
        dur: 3.48,
      },
      {
        subtitle: "in that Niche the market became",
        start: 45.96,
        dur: 3.52,
      },
      {
        subtitle: "oversaturated as more and more began",
        start: 47.64,
        dur: 4.559,
      },
      {
        subtitle: "producing similar fact-based shorts this",
        start: 49.48,
        dur: 4.48,
      },
      {
        subtitle: "made it difficult for recent creators to",
        start: 52.199,
        dur: 4.441,
      },
      {
        subtitle: "stand out and see the same results but",
        start: 53.96,
        dur: 4.239,
      },
      {
        subtitle: "nobody had thought of using this",
        start: 56.64,
        dur: 3.52,
      },
      {
        subtitle: "powerful AI method in our hands in",
        start: 58.199,
        dur: 4.921,
      },
      {
        subtitle: "different creative ways in fact one of",
        start: 60.16,
        dur: 4.999,
      },
      {
        subtitle: "my past videos on this topic among the",
        start: 63.12,
        dur: 4.44,
      },
      {
        subtitle: "earliest proved to be my most successful",
        start: 65.159,
        dur: 4.761,
      },
      {
        subtitle: "so far therefore I took on the",
        start: 67.56,
        dur: 4.4,
      },
      {
        subtitle: "responsibility of developing an updated",
        start: 69.92,
        dur: 3.76,
      },
      {
        subtitle: "version that builds on what worked",
        start: 71.96,
        dur: 4,
      },
      {
        subtitle: "before but takes it to the next level",
        start: 73.68,
        dur: 4.52,
      },
      {
        subtitle: "I&#39;ll still be using chat GPT and canva",
        start: 75.96,
        dur: 4.36,
      },
      {
        subtitle: "for this but the content I&#39;m cooking up",
        start: 78.2,
        dur: 4,
      },
      {
        subtitle: "this time is going to take things to a",
        start: 80.32,
        dur: 3.88,
      },
      {
        subtitle: "whole new level by the time this video",
        start: 82.2,
        dur: 3.64,
      },
      {
        subtitle: "ends you&#39;ll not only have your own",
        start: 84.2,
        dur: 3.239,
      },
      {
        subtitle: "faceless YouTube channel that you can",
        start: 85.84,
        dur: 3.68,
      },
      {
        subtitle: "finally monetize but it will also be",
        start: 87.439,
        dur: 4.96,
      },
      {
        subtitle: "built on on automation using AI I&#39;m",
        start: 89.52,
        dur: 4.8,
      },
      {
        subtitle: "talking about creating 3 months worth of",
        start: 92.399,
        dur: 4.281,
      },
      {
        subtitle: "YouTube shorts all at once and that&#39;s",
        start: 94.32,
        dur: 4.759,
      },
      {
        subtitle: "not all I&#39;ll demonstrate how to get this",
        start: 96.68,
        dur: 4.479,
      },
      {
        subtitle: "AI to generate all your titles",
        start: 99.079,
        dur: 4.801,
      },
      {
        subtitle: "descriptions hashtags you name it get",
        start: 101.159,
        dur: 5.56,
      },
      {
        subtitle: "ready to show you the evidence here&#39;s a",
        start: 103.88,
        dur: 4.64,
      },
      {
        subtitle: "YouTube channel focused on quiz and",
        start: 106.719,
        dur: 4.321,
      },
      {
        subtitle: "riddle videos these videos are racking",
        start: 108.52,
        dur: 5.12,
      },
      {
        subtitle: "up millions of views the reason behind",
        start: 111.04,
        dur: 4.64,
      },
      {
        subtitle: "their viral success is simple they keep",
        start: 113.64,
        dur: 3.92,
      },
      {
        subtitle: "viewers engaged and their curiosity",
        start: 115.68,
        dur: 4.28,
      },
      {
        subtitle: "peaked with each quiz or riddle this",
        start: 117.56,
        dur: 4.76,
      },
      {
        subtitle: "this in turn increases the watch time of",
        start: 119.96,
        dur: 5.04,
      },
      {
        subtitle: "these videos the level of Engagement in",
        start: 122.32,
        dur: 4.56,
      },
      {
        subtitle: "these videos is off the charts compared",
        start: 125,
        dur: 4.239,
      },
      {
        subtitle: "to other types of content mainly because",
        start: 126.88,
        dur: 4.32,
      },
      {
        subtitle: "viewers have to fully focus on solving",
        start: 129.239,
        dur: 4.08,
      },
      {
        subtitle: "the riddles just take a look at the",
        start: 131.2,
        dur: 4.2,
      },
      {
        subtitle: "comments section and you&#39;ll get a better",
        start: 133.319,
        dur: 4.441,
      },
      {
        subtitle: "idea of how much people absolutely love",
        start: 135.4,
        dur: 5.16,
      },
      {
        subtitle: "these videos now let&#39;s address the",
        start: 137.76,
        dur: 4.88,
      },
      {
        subtitle: "elephant in the room is the channel",
        start: 140.56,
        dur: 4.84,
      },
      {
        subtitle: "really monetized here&#39;s a neat trick for",
        start: 142.64,
        dur: 5.08,
      },
      {
        subtitle: "you simply rightclick anywhere on an",
        start: 145.4,
        dur: 5.479,
      },
      {
        subtitle: "empty area and select view page source",
        start: 147.72,
        dur: 5.159,
      },
      {
        subtitle: "then if you&#39;re using Windows press",
        start: 150.879,
        dur: 4.64,
      },
      {
        subtitle: "control plus F if you&#39;re using a Mac",
        start: 152.879,
        dur: 5.761,
      },
      {
        subtitle: "press command plus F Type monetize in",
        start: 155.519,
        dur: 6.601,
      },
      {
        subtitle: "the search bar and hit",
        start: 158.64,
        dur: 3.48,
      },
      {
        subtitle: "enter if you see true here it means the",
        start: 164.319,
        dur: 6.121,
      },
      {
        subtitle: "channel is monetized while false",
        start: 167.8,
        dur: 4.92,
      },
      {
        subtitle: "indicates that it isn&#39;t this channel",
        start: 170.44,
        dur: 5.2,
      },
      {
        subtitle: "earns around $60,000 annually according",
        start: 172.72,
        dur: 5.4,
      },
      {
        subtitle: "to Social blade from owning channels",
        start: 175.64,
        dur: 4.519,
      },
      {
        subtitle: "myself I can confirm earning earnings",
        start: 178.12,
        dur: 3.68,
      },
      {
        subtitle: "often meet or exceed its higher",
        start: 180.159,
        dur: 4.521,
      },
      {
        subtitle: "estimates to motivate you see this new",
        start: 181.8,
        dur: 4.56,
      },
      {
        subtitle: "channel successfully adopting this",
        start: 184.68,
        dur: 4.26,
      },
      {
        subtitle: "approach gaining thousands of",
        start: 186.36,
        dur: 5,
      },
      {
        subtitle: "[Music]",
        start: 188.94,
        dur: 5.1,
      },
      {
        subtitle: "views as you can see it&#39;s already",
        start: 191.36,
        dur: 5.28,
      },
      {
        subtitle: "monetized if they can achieve it so can",
        start: 194.04,
        dur: 5.44,
      },
      {
        subtitle: "you I&#39;ve done the leg work researching",
        start: 196.64,
        dur: 4.76,
      },
      {
        subtitle: "and refining a strategy allowing",
        start: 199.48,
        dur: 4.679,
      },
      {
        subtitle: "effortless time-saving video creation",
        start: 201.4,
        dur: 5.88,
      },
      {
        subtitle: "here&#39;s the plan rather than long videos",
        start: 204.159,
        dur: 4.961,
      },
      {
        subtitle: "we&#39;ll produce shorts since YouTube now",
        start: 207.28,
        dur: 4.879,
      },
      {
        subtitle: "monetizes shorts according to Forbes",
        start: 209.12,
        dur: 5.199,
      },
      {
        subtitle: "YouTube is actively promoting shorts and",
        start: 212.159,
        dur: 4.481,
      },
      {
        subtitle: "they have a high chance of going viral",
        start: 214.319,
        dur: 4.321,
      },
      {
        subtitle: "plus people nowadays prefer short form",
        start: 216.64,
        dur: 4.4,
      },
      {
        subtitle: "content step one our first task is to",
        start: 218.64,
        dur: 4.679,
      },
      {
        subtitle: "create riddles to do that we&#39;ll open up",
        start: 221.04,
        dur: 4.96,
      },
      {
        subtitle: "chat GPT it&#39;s wise to express",
        start: 223.319,
        dur: 5.12,
      },
      {
        subtitle: "appreciation who knows someday AI might",
        start: 226,
        dur: 4.72,
      },
      {
        subtitle: "turn into Ultra and take over the world",
        start: 228.439,
        dur: 4.201,
      },
      {
        subtitle: "but with this you might secure a good",
        start: 230.72,
        dur: 4.599,
      },
      {
        subtitle: "job as an assistant to AI at that time",
        start: 232.64,
        dur: 5.04,
      },
      {
        subtitle: "if we simply ask chat GPT to give us",
        start: 235.319,
        dur: 4.12,
      },
      {
        subtitle: "riddles to solve the results might be",
        start: 237.68,
        dur: 4,
      },
      {
        subtitle: "something like this but that&#39;s where",
        start: 239.439,
        dur: 5.16,
      },
      {
        subtitle: "good prompting comes into play here&#39;s",
        start: 241.68,
        dur: 5.04,
      },
      {
        subtitle: "how I&#39;ll approach it as a renowned",
        start: 244.599,
        dur: 4.761,
      },
      {
        subtitle: "riddles expert your task is to create",
        start: 246.72,
        dur: 4.56,
      },
      {
        subtitle: "five quick and interesting riddles for",
        start: 249.36,
        dur: 4.079,
      },
      {
        subtitle: "your audience to solve The Riddles",
        start: 251.28,
        dur: 3.879,
      },
      {
        subtitle: "should be easy enough to engage and",
        start: 253.439,
        dur: 4.08,
      },
      {
        subtitle: "entertain the participants each riddle",
        start: 255.159,
        dur: 4.6,
      },
      {
        subtitle: "should have three options with only one",
        start: 257.519,
        dur: 4.601,
      },
      {
        subtitle: "correct answer please follow the table",
        start: 259.759,
        dur: 5.121,
      },
      {
        subtitle: "format provided below to present your",
        start: 262.12,
        dur: 5.359,
      },
      {
        subtitle: "riddles then I&#39;ll lay out the desired",
        start: 264.88,
        dur: 6.84,
      },
      {
        subtitle: "format and provide a suitable example",
        start: 267.479,
        dur: 4.241,
      },
      {
        subtitle: "[Music]",
        start: 272.13,
        dur: 7.309,
      },
      {
        subtitle: "let&#39;s see what chat GPT brings",
        start: 280.639,
        dur: 7.8,
      },
      {
        subtitle: "[Music]",
        start: 284.1,
        dur: 4.339,
      },
      {
        subtitle: "us it has done a good job sometimes chat",
        start: 291.8,
        dur: 6.08,
      },
      {
        subtitle: "GPT can have its quirks so if you prefer",
        start: 295.039,
        dur: 5.361,
      },
      {
        subtitle: "an alternative you can also use Google&#39;s",
        start: 297.88,
        dur: 5.599,
      },
      {
        subtitle: "barred AI for now though I&#39;ll stick with",
        start: 300.4,
        dur: 5.6,
      },
      {
        subtitle: "our chatty friend here&#39;s the plan I&#39;m",
        start: 303.479,
        dur: 6.841,
      },
      {
        subtitle: "going to ask it for 300 riddles for",
        start: 306,
        dur: 4.32,
      },
      {
        subtitle: "[Music]",
        start: 310.43,
        dur: 3.199,
      },
      {
        subtitle: "now whoops it said it can do 10 at a",
        start: 314.68,
        dur: 4.44,
      },
      {
        subtitle: "time so we&#39;ll just have to keep hitting",
        start: 317.68,
        dur: 4,
      },
      {
        subtitle: "it up until we get them all no use",
        start: 319.12,
        dur: 6.84,
      },
      {
        subtitle: "arguing with an AI right",
        start: 321.68,
        dur: 4.28,
      },
      {
        subtitle: "once we have our complete riddle",
        start: 344.039,
        dur: 3.121,
      },
      {
        subtitle: "collection I&#39;ll import it all into a",
        start: 345.36,
        dur: 4.959,
      },
      {
        subtitle: "Google sheet to organize it can be wacky",
        start: 347.16,
        dur: 5.759,
      },
      {
        subtitle: "sometimes with Fields like title hype",
        start: 350.319,
        dur: 5.201,
      },
      {
        subtitle: "and body ending up extra long for no",
        start: 352.919,
        dur: 4.84,
      },
      {
        subtitle: "reason so I&#39;ll give it a round to make",
        start: 355.52,
        dur: 4.84,
      },
      {
        subtitle: "things easier down the road step two is",
        start: 357.759,
        dur: 5.321,
      },
      {
        subtitle: "a simple task that only takes 2 seconds",
        start: 360.36,
        dur: 4.36,
      },
      {
        subtitle: "take a quick pause and click on this",
        start: 363.08,
        dur: 3.679,
      },
      {
        subtitle: "awesome button called subscribe so we",
        start: 364.72,
        dur: 3.64,
      },
      {
        subtitle: "can stay connected it will also",
        start: 366.759,
        dur: 3.481,
      },
      {
        subtitle: "encourage me to share many more AI",
        start: 368.36,
        dur: 3.52,
      },
      {
        subtitle: "Treasures like the one you&#39;re watching",
        start: 370.24,
        dur: 4.56,
      },
      {
        subtitle: "right now step three let&#39;s open up canva",
        start: 371.88,
        dur: 6.2,
      },
      {
        subtitle: "and click on create video firstly let&#39;s",
        start: 374.8,
        dur: 5.04,
      },
      {
        subtitle: "work on the background click on the",
        start: 378.08,
        dur: 3.72,
      },
      {
        subtitle: "elements Tab and search for the type of",
        start: 379.84,
        dur: 5.57,
      },
      {
        subtitle: "background video you desire",
        start: 381.8,
        dur: 7.929,
      },
      {
        subtitle: "[Music]",
        start: 385.41,
        dur: 4.319,
      },
      {
        subtitle: "[Music]",
        start: 393.05,
        dur: 3.869,
      },
      {
        subtitle: "now copy the text from the First Column",
        start: 394.919,
        dur: 4.291,
      },
      {
        subtitle: "and paste it onto the",
        start: 396.919,
        dur: 8.461,
      },
      {
        subtitle: "[Music]",
        start: 399.21,
        dur: 6.17,
      },
      {
        subtitle: "template you can adjust the text",
        start: 406.639,
        dur: 4.12,
      },
      {
        subtitle: "[Music]",
        start: 411.8,
        dur: 3.679,
      },
      {
        subtitle: "size if you want the text to be in all",
        start: 412.919,
        dur: 5.441,
      },
      {
        subtitle: "caps simply click here and choose the",
        start: 415.479,
        dur: 4.051,
      },
      {
        subtitle: "font style you prefer",
        start: 418.36,
        dur: 4.36,
      },
      {
        subtitle: "[Music]",
        start: 419.53,
        dur: 3.19,
      },
      {
        subtitle: "to enhance the visibility of the text",
        start: 425.199,
        dur: 4.56,
      },
      {
        subtitle: "let&#39;s add a text background select the",
        start: 427.28,
        dur: 3.88,
      },
      {
        subtitle: "square",
        start: 429.759,
        dur: 4.521,
      },
      {
        subtitle: "shape adjust its size and pick a color",
        start: 431.16,
        dur: 5.52,
      },
      {
        subtitle: "of your",
        start: 434.28,
        dur: 2.4,
      },
      {
        subtitle: "choice as the background might appear",
        start: 443.479,
        dur: 4.081,
      },
      {
        subtitle: "too bright for the text let&#39;s add a",
        start: 445.68,
        dur: 5.199,
      },
      {
        subtitle: "black overlay",
        start: 447.56,
        dur: 3.319,
      },
      {
        subtitle: "and adjust its opacity to your",
        start: 458.56,
        dur: 6.639,
      },
      {
        subtitle: "[Music]",
        start: 460.36,
        dur: 7.36,
      },
      {
        subtitle: "liking to ensure the text is positioned",
        start: 465.199,
        dur: 4.72,
      },
      {
        subtitle: "behind the background right click select",
        start: 467.72,
        dur: 5.26,
      },
      {
        subtitle: "layers and choose send to",
        start: 469.919,
        dur: 4.84,
      },
      {
        subtitle: "[Music]",
        start: 472.98,
        dur: 4.179,
      },
      {
        subtitle: "backward all right y&#39;all head back to",
        start: 474.759,
        dur: 4.88,
      },
      {
        subtitle: "the sheets and grab the next riddle text",
        start: 477.159,
        dur: 4.801,
      },
      {
        subtitle: "paste it in then select a font and size",
        start: 479.639,
        dur: 4.441,
      },
      {
        subtitle: "that",
        start: 481.96,
        dur: 2.12,
      },
      {
        subtitle: "suits now we need a little illustration",
        start: 494.199,
        dur: 4.921,
      },
      {
        subtitle: "how about a fella pointing up that could",
        start: 497.199,
        dur: 5.161,
      },
      {
        subtitle: "work nicely",
        start: 499.12,
        dur: 3.24,
      },
      {
        subtitle: "oh snap with Cana we can even cut out",
        start: 512.919,
        dur: 4.961,
      },
      {
        subtitle: "the background for a cleaner look much",
        start: 515.039,
        dur: 5.48,
      },
      {
        subtitle: "better let&#39;s also throw in some motion",
        start: 517.88,
        dur: 4.639,
      },
      {
        subtitle: "to really make it engaging click",
        start: 520.519,
        dur: 4.241,
      },
      {
        subtitle: "animations and browse the options see",
        start: 522.519,
        dur: 4.521,
      },
      {
        subtitle: "what fits your Vibe apply it to every",
        start: 524.76,
        dur: 4.88,
      },
      {
        subtitle: "element on",
        start: 527.04,
        dur: 2.6,
      },
      {
        subtitle: "screen and now for one of the key steps",
        start: 531.24,
        dur: 5.719,
      },
      {
        subtitle: "rightclick that text layer and hit show",
        start: 534.399,
        dur: 5.281,
      },
      {
        subtitle: "timing this bad boy lets us control when",
        start: 536.959,
        dur: 6.161,
      },
      {
        subtitle: "elements pop up or Fade",
        start: 539.68,
        dur: 3.44,
      },
      {
        subtitle: "Out now let&#39;s go back and copy the next",
        start: 545.36,
        dur: 5,
      },
      {
        subtitle: "part of the",
        start: 548.04,
        dur: 2.32,
      },
      {
        subtitle: "riddle place it here and ensure it&#39;s",
        start: 551.32,
        dur: 4.8,
      },
      {
        subtitle: "neither too big nor too small this",
        start: 553.64,
        dur: 4.6,
      },
      {
        subtitle: "section also requires a background so",
        start: 556.12,
        dur: 4.24,
      },
      {
        subtitle: "this time click on effects and choose",
        start: 558.24,
        dur: 6.039,
      },
      {
        subtitle: "this one because it adjusts based on the",
        start: 560.36,
        dur: 3.919,
      },
      {
        subtitle: "text and adjust its screen timing",
        start: 565.04,
        dur: 5.28,
      },
      {
        subtitle: "let&#39;s add animation to this part as",
        start: 575.36,
        dur: 3.76,
      },
      {
        subtitle: "well now let&#39;s repeat the same process",
        start: 584.839,
        dur: 5.56,
      },
      {
        subtitle: "for all three options of our riddle to",
        start: 587.76,
        dur: 5.16,
      },
      {
        subtitle: "copy an element on the screen simply",
        start: 590.399,
        dur: 5.12,
      },
      {
        subtitle: "click and drag while holding the ALT key",
        start: 592.92,
        dur: 5.96,
      },
      {
        subtitle: "on your keyboard",
        start: 595.519,
        dur: 3.361,
      },
      {
        subtitle: "make sure that new elements appear on",
        start: 626.32,
        dur: 3,
      },
      {
        subtitle: "the screen once the previous ele",
        start: 628,
        dur: 3.72,
      },
      {
        subtitle: "elements",
        start: 629.32,
        dur: 2.4,
      },
      {
        subtitle: "disappear here&#39;s how it all looks so",
        start: 636.8,
        dur: 4.08,
      },
      {
        subtitle: "far to keep the viewers engaged I&#39;m",
        start: 645.24,
        dur: 6.8,
      },
      {
        subtitle: "going to add one more animation to these",
        start: 648.12,
        dur: 3.92,
      },
      {
        subtitle: "elements now let&#39;s add a timer for added",
        start: 654.959,
        dur: 5.481,
      },
      {
        subtitle: "excitement",
        start: 657.44,
        dur: 3,
      },
      {
        subtitle: "you can choose any timer you prefer and",
        start: 660.76,
        dur: 6.079,
      },
      {
        subtitle: "adjust its timing accordingly",
        start: 662.88,
        dur: 3.959,
      },
      {
        subtitle: "it&#39;s time to add the final piece of the",
        start: 689.76,
        dur: 4.48,
      },
      {
        subtitle: "puzzle and repeat the same process for",
        start: 691.88,
        dur: 5.399,
      },
      {
        subtitle: "the answer section as",
        start: 694.24,
        dur: 3.039,
      },
      {
        subtitle: "well in just a few seconds you&#39;ll be",
        start: 710.56,
        dur: 4.56,
      },
      {
        subtitle: "able to see the Fantastic outcome of our",
        start: 713.12,
        dur: 5.32,
      },
      {
        subtitle: "awesome riddle",
        start: 715.12,
        dur: 3.32,
      },
      {
        subtitle: "and here it",
        start: 729.48,
        dur: 2.52,
      },
      {
        subtitle: "is seems like something is missing right",
        start: 732.04,
        dur: 5.76,
      },
      {
        subtitle: "music you&#39;re absolutely right you&#39;re",
        start: 735.24,
        dur: 4.56,
      },
      {
        subtitle: "getting smarter while watching my videos",
        start: 737.8,
        dur: 4.52,
      },
      {
        subtitle: "huh but there&#39;s a problem if you choose",
        start: 739.8,
        dur: 4.599,
      },
      {
        subtitle: "canvas music you might encounter",
        start: 742.32,
        dur: 4.759,
      },
      {
        subtitle: "copyright issues my suggestion is to",
        start: 744.399,
        dur: 4.521,
      },
      {
        subtitle: "spend some time finding free music from",
        start: 747.079,
        dur: 6.601,
      },
      {
        subtitle: "the YouTube music library and upload it",
        start: 748.92,
        dur: 4.76,
      },
      {
        subtitle: "here now let&#39;s add one extra element",
        start: 754.279,
        dur: 5.621,
      },
      {
        subtitle: "before I reveal the final",
        start: 757.72,
        dur: 5.3,
      },
      {
        subtitle: "[Music]",
        start: 759.9,
        dur: 3.12,
      },
      {
        subtitle: "[Music]",
        start: 771.22,
        dur: 3.629,
      },
      {
        subtitle: "result so here&#39;s what our short looks",
        start: 775.6,
        dur: 5.52,
      },
      {
        subtitle: "like now",
        start: 777.959,
        dur: 3.161,
      },
      {
        subtitle: "[Music]",
        start: 783.36,
        dur: 3.199,
      },
      {
        subtitle: "step four is where the real magic",
        start: 789.76,
        dur: 4.92,
      },
      {
        subtitle: "happens in this step I&#39;m going to show",
        start: 791.92,
        dur: 4.359,
      },
      {
        subtitle: "you how to automate the rest of the",
        start: 794.68,
        dur: 4.12,
      },
      {
        subtitle: "process scroll down a bit and click on",
        start: 796.279,
        dur: 5.92,
      },
      {
        subtitle: "apps then search for bulk create however",
        start: 798.8,
        dur: 5.8,
      },
      {
        subtitle: "please note that to access this tool you",
        start: 802.199,
        dur: 4.841,
      },
      {
        subtitle: "must have a paid canvas subscription but",
        start: 804.6,
        dur: 4.039,
      },
      {
        subtitle: "don&#39;t worry you can obtain a 30-day",
        start: 807.04,
        dur: 3.239,
      },
      {
        subtitle: "trial sub subscription completely free",
        start: 808.639,
        dur: 4.121,
      },
      {
        subtitle: "of cost once you sign up this is what",
        start: 810.279,
        dur: 4.441,
      },
      {
        subtitle: "the bulk create tool looks like click on",
        start: 812.76,
        dur: 5.6,
      },
      {
        subtitle: "enter data manually click on clear table",
        start: 814.72,
        dur: 5.28,
      },
      {
        subtitle: "go back to the Google Sheets document",
        start: 818.36,
        dur: 5.719,
      },
      {
        subtitle: "and copy 30 rows including the",
        start: 820,
        dur: 4.079,
      },
      {
        subtitle: "titles then click here and paste",
        start: 826.279,
        dur: 4.161,
      },
      {
        subtitle: "them now pay close attention to this",
        start: 831.12,
        dur: 4,
      },
      {
        subtitle: "crucial",
        start: 833.72,
        dur: 4.44,
      },
      {
        subtitle: "step right click on the title and select",
        start: 835.12,
        dur: 5.36,
      },
      {
        subtitle: "connect data we need to connect each",
        start: 838.16,
        dur: 4.039,
      },
      {
        subtitle: "data point to its respective text",
        start: 840.48,
        dur: 4.84,
      },
      {
        subtitle: "element on the screen soon enough you&#39;ll",
        start: 842.199,
        dur: 5.721,
      },
      {
        subtitle: "understand why for example if this is",
        start: 845.32,
        dur: 5.16,
      },
      {
        subtitle: "the body text you need to select body",
        start: 847.92,
        dur: 6.68,
      },
      {
        subtitle: "from the connect data list",
        start: 850.48,
        dur: 4.12,
      },
      {
        subtitle: "[Music]",
        start: 860.01,
        dur: 6.07,
      },
      {
        subtitle: "once you have connected all the data",
        start: 874.04,
        dur: 3.159,
      },
      {
        subtitle: "points to their corresponding text",
        start: 875.6,
        dur: 4.039,
      },
      {
        subtitle: "elements it will appear as ticked like",
        start: 877.199,
        dur: 4.601,
      },
      {
        subtitle: "this now click",
        start: 879.639,
        dur: 5.961,
      },
      {
        subtitle: "continue and then hit",
        start: 881.8,
        dur: 3.8,
      },
      {
        subtitle: "generate Abracadabra in just a matter of",
        start: 886.48,
        dur: 7,
      },
      {
        subtitle: "seconds you&#39;ll have 30 shorts ready for",
        start: 889.48,
        dur: 4,
      },
      {
        subtitle: "you but wait there&#39;s more the reason I",
        start: 893.759,
        dur: 5.481,
      },
      {
        subtitle: "only chose 30 shorts at this time is to",
        start: 896.959,
        dur: 3.761,
      },
      {
        subtitle: "ensure that we don&#39;t end up with all",
        start: 899.24,
        dur: 4,
      },
      {
        subtitle: "shorts having the same visuals let&#39;s go",
        start: 900.72,
        dur: 3.84,
      },
      {
        subtitle: "back to the template and make some",
        start: 903.24,
        dur: 3.039,
      },
      {
        subtitle: "changes to the background and colors for",
        start: 904.56,
        dur: 5.12,
      },
      {
        subtitle: "the next batch",
        start: 906.279,
        dur: 3.401,
      },
      {
        subtitle: "[Music]",
        start: 944.59,
        dur: 6.08,
      },
      {
        subtitle: "[Music]",
        start: 958.88,
        dur: 3.69,
      },
      {
        subtitle: "and voila here&#39;s our next batch of",
        start: 965.16,
        dur: 4.52,
      },
      {
        subtitle: "YouTube shorts all ready for a faceless",
        start: 967.6,
        dur: 3.84,
      },
      {
        subtitle: "YouTube channel with complete automation",
        start: 969.68,
        dur: 4.599,
      },
      {
        subtitle: "using AI to download the shorts simply",
        start: 971.44,
        dur: 4.839,
      },
      {
        subtitle: "click here and ensure that this option",
        start: 974.279,
        dur: 3.641,
      },
      {
        subtitle: "is ticked before hitting the download",
        start: 976.279,
        dur: 4.521,
      },
      {
        subtitle: "button Now we move on to step five which",
        start: 977.92,
        dur: 4.52,
      },
      {
        subtitle: "is creating your faceless YouTube",
        start: 980.8,
        dur: 4.36,
      },
      {
        subtitle: "channel and uploading these shorts using",
        start: 982.44,
        dur: 5.24,
      },
      {
        subtitle: "AI since this video has already gone on",
        start: 985.16,
        dur: 4.84,
      },
      {
        subtitle: "for quite some time I trust your ability",
        start: 987.68,
        dur: 4.88,
      },
      {
        subtitle: "to set up a YouTube channel yourself",
        start: 990,
        dur: 4,
      },
      {
        subtitle: "there are three crucial things you need",
        start: 992.56,
        dur: 4.839,
      },
      {
        subtitle: "to take care of the title description",
        start: 994,
        dur: 6.959,
      },
      {
        subtitle: "and tags yes they do matter to",
        start: 997.399,
        dur: 5.521,
      },
      {
        subtitle: "accomplish that once again I will go to",
        start: 1000.959,
        dur: 4.68,
      },
      {
        subtitle: "chat GPT and paste in this prompt",
        start: 1002.92,
        dur: 4.32,
      },
      {
        subtitle: "instructing it to create all three of",
        start: 1005.639,
        dur: 4.361,
      },
      {
        subtitle: "them in one go specific to the topic you",
        start: 1007.24,
        dur: 5.399,
      },
      {
        subtitle: "provide simply copy and paste all three",
        start: 1010,
        dur: 4.36,
      },
      {
        subtitle: "of them to YouTube to go along with your",
        start: 1012.639,
        dur: 4.721,
      },
      {
        subtitle: "shorts",
        start: 1014.36,
        dur: 3,
      },
      {
        subtitle: "[Music]",
        start: 1029.31,
        dur: 6.08,
      },
      {
        subtitle: "[Music]",
        start: 1043.589,
        dur: 5.33,
      },
      {
        subtitle: "once you&#39;ve completed all the necessary",
        start: 1047,
        dur: 4.76,
      },
      {
        subtitle: "steps hit the publish button if you&#39;re",
        start: 1048.919,
        dur: 4.961,
      },
      {
        subtitle: "interested in seeing the actual results",
        start: 1051.76,
        dur: 4,
      },
      {
        subtitle: "I get from uploading these shorts over a",
        start: 1053.88,
        dur: 3.72,
      },
      {
        subtitle: "period of 1 month then let me know in",
        start: 1055.76,
        dur: 4.64,
      },
      {
        subtitle: "the comments also make sure to follow me",
        start: 1057.6,
        dur: 5.16,
      },
      {
        subtitle: "on Twitter where I share AI content that",
        start: 1060.4,
        dur: 5.32,
      },
      {
        subtitle: "I don&#39;t cover on YouTube Remember",
        start: 1062.76,
        dur: 5.6,
      },
      {
        subtitle: "consistency is key and I highly",
        start: 1065.72,
        dur: 4.079,
      },
      {
        subtitle: "encourage you to conduct your own",
        start: 1068.36,
        dur: 3,
      },
      {
        subtitle: "research and experiment with more",
        start: 1069.799,
        dur: 4.041,
      },
      {
        subtitle: "creative ideas using this AI automation",
        start: 1071.36,
        dur: 4.799,
      },
      {
        subtitle: "technique thank you so much for watching",
        start: 1073.84,
        dur: 5.079,
      },
      {
        subtitle: "until the end with that being said it&#39;s",
        start: 1076.159,
        dur: 5.081,
      },
      {
        subtitle: "time for me to take my leave until we",
        start: 1078.919,
        dur: 5.361,
      },
      {
        subtitle: "meet again",
        start: 1081.24,
        dur: 3.04,
      },
    ],
    transcriptionAsText:
      "are you ready to uncover the secrets to building a monetizable faceless YouTube channel with AI automation this YouTube channel is raking in over $9,000 per month by uploading simple YouTube wait doesn't this sound familiar you've probably come across one of these videos on YouTube and if you haven't then here's a quick recap a few months ago a game-changing method for creating YouTube shorts emerged it spread like wildfire and many YouTubers started making videos about it but here's the catch they all showcase the same method using the exact same reference Channel as an example and to top it off they were all making shorts about psychology facts it can be just a coincidence right but to be honest with you the previous content idea was very popular for a Time bringing great success to early creators in that Niche the market became oversaturated as more and more began producing similar fact-based shorts this made it difficult for recent creators to stand out and see the same results but nobody had thought of using this powerful AI method in our hands in different creative ways in fact one of my past videos on this topic among the earliest proved to be my most successful so far therefore I took on the responsibility of developing an updated version that builds on what worked before but takes it to the next level I'll still be using chat GPT and canva for this but the content I'm cooking up this time is going to take things to a whole new level by the time this video ends you'll not only have your own faceless YouTube channel that you can finally monetize but it will also be built on on automation using AI I'm talking about creating 3 months worth of YouTube shorts all at once and that's not all I'll demonstrate how to get this AI to generate all your titles descriptions hashtags you name it get ready to show you the evidence here's a YouTube channel focused on quiz and riddle videos these videos are racking up millions of views the reason behind their viral success is simple they keep viewers engaged and their curiosity peaked with each quiz or riddle this this in turn increases the watch time of these videos the level of Engagement in these videos is off the charts compared to other types of content mainly because viewers have to fully focus on solving the riddles just take a look at the comments section and you'll get a better idea of how much people absolutely love these videos now let's address the elephant in the room is the channel really monetized here's a neat trick for you simply rightclick anywhere on an empty area and select view page source then if you're using Windows press control plus F if you're using a Mac press command plus F Type monetize in the search bar and hit enter if you see true here it means the channel is monetized while false indicates that it isn't this channel earns around $60,000 annually according to Social blade from owning channels myself I can confirm earning earnings often meet or exceed its higher estimates to motivate you see this new channel successfully adopting this approach gaining thousands of [Music] views as you can see it's already monetized if they can achieve it so can you I've done the leg work researching and refining a strategy allowing effortless time-saving video creation here's the plan rather than long videos we'll produce shorts since YouTube now monetizes shorts according to Forbes YouTube is actively promoting shorts and they have a high chance of going viral plus people nowadays prefer short form content step one our first task is to create riddles to do that we'll open up chat GPT it's wise to express appreciation who knows someday AI might turn into Ultra and take over the world but with this you might secure a good job as an assistant to AI at that time if we simply ask chat GPT to give us riddles to solve the results might be something like this but that's where good prompting comes into play here's how I'll approach it as a renowned riddles expert your task is to create five quick and interesting riddles for your audience to solve The Riddles should be easy enough to engage and entertain the participants each riddle should have three options with only one correct answer please follow the table format provided below to present your riddles then I'll lay out the desired format and provide a suitable example [Music] let's see what chat GPT brings [Music] us it has done a good job sometimes chat GPT can have its quirks so if you prefer an alternative you can also use Google's barred AI for now though I'll stick with our chatty friend here's the plan I'm going to ask it for 300 riddles for [Music] now whoops it said it can do 10 at a time so we'll just have to keep hitting it up until we get them all no use arguing with an AI right once we have our complete riddle collection I'll import it all into a Google sheet to organize it can be wacky sometimes with Fields like title hype and body ending up extra long for no reason so I'll give it a round to make things easier down the road step two is a simple task that only takes 2 seconds take a quick pause and click on this awesome button called subscribe so we can stay connected it will also encourage me to share many more AI Treasures like the one you're watching right now step three let's open up canva and click on create video firstly let's work on the background click on the elements Tab and search for the type of background video you desire [Music] [Music] now copy the text from the First Column and paste it onto the [Music] template you can adjust the text [Music] size if you want the text to be in all caps simply click here and choose the font style you prefer [Music] to enhance the visibility of the text let's add a text background select the square shape adjust its size and pick a color of your choice as the background might appear too bright for the text let's add a black overlay and adjust its opacity to your [Music] liking to ensure the text is positioned behind the background right click select layers and choose send to [Music] backward all right y'all head back to the sheets and grab the next riddle text paste it in then select a font and size that suits now we need a little illustration how about a fella pointing up that could work nicely oh snap with Cana we can even cut out the background for a cleaner look much better let's also throw in some motion to really make it engaging click animations and browse the options see what fits your Vibe apply it to every element on screen and now for one of the key steps rightclick that text layer and hit show timing this bad boy lets us control when elements pop up or Fade Out now let's go back and copy the next part of the riddle place it here and ensure it's neither too big nor too small this section also requires a background so this time click on effects and choose this one because it adjusts based on the text and adjust its screen timing let's add animation to this part as well now let's repeat the same process for all three options of our riddle to copy an element on the screen simply click and drag while holding the ALT key on your keyboard make sure that new elements appear on the screen once the previous ele elements disappear here's how it all looks so far to keep the viewers engaged I'm going to add one more animation to these elements now let's add a timer for added excitement you can choose any timer you prefer and adjust its timing accordingly it's time to add the final piece of the puzzle and repeat the same process for the answer section as well in just a few seconds you'll be able to see the Fantastic outcome of our awesome riddle and here it is seems like something is missing right music you're absolutely right you're getting smarter while watching my videos huh but there's a problem if you choose canvas music you might encounter copyright issues my suggestion is to spend some time finding free music from the YouTube music library and upload it here now let's add one extra element before I reveal the final [Music] [Music] result so here's what our short looks like now [Music] step four is where the real magic happens in this step I'm going to show you how to automate the rest of the process scroll down a bit and click on apps then search for bulk create however please note that to access this tool you must have a paid canvas subscription but don't worry you can obtain a 30-day trial sub subscription completely free of cost once you sign up this is what the bulk create tool looks like click on enter data manually click on clear table go back to the Google Sheets document and copy 30 rows including the titles then click here and paste them now pay close attention to this crucial step right click on the title and select connect data we need to connect each data point to its respective text element on the screen soon enough you'll understand why for example if this is the body text you need to select body from the connect data list [Music] once you have connected all the data points to their corresponding text elements it will appear as ticked like this now click continue and then hit generate Abracadabra in just a matter of seconds you'll have 30 shorts ready for you but wait there's more the reason I only chose 30 shorts at this time is to ensure that we don't end up with all shorts having the same visuals let's go back to the template and make some changes to the background and colors for the next batch [Music] [Music] and voila here's our next batch of YouTube shorts all ready for a faceless YouTube channel with complete automation using AI to download the shorts simply click here and ensure that this option is ticked before hitting the download button Now we move on to step five which is creating your faceless YouTube channel and uploading these shorts using AI since this video has already gone on for quite some time I trust your ability to set up a YouTube channel yourself there are three crucial things you need to take care of the title description and tags yes they do matter to accomplish that once again I will go to chat GPT and paste in this prompt instructing it to create all three of them in one go specific to the topic you provide simply copy and paste all three of them to YouTube to go along with your shorts [Music] [Music] once you've completed all the necessary steps hit the publish button if you're interested in seeing the actual results I get from uploading these shorts over a period of 1 month then let me know in the comments also make sure to follow me on Twitter where I share AI content that I don't cover on YouTube Remember consistency is key and I highly encourage you to conduct your own research and experiment with more creative ideas using this AI automation technique thank you so much for watching until the end with that being said it's time for me to take my leave until we meet again",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await getVideoSummary(videoUrl)
      setSummary(result)
      toast.success("Summary generated successfully!")
    } catch (error) {
      console.error(error)
      toast.error("Failed to get video summary")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen transition-all duration-500'>
      <ThemeToggle />
      <div className='max-w-4xl mx-auto p-6'>
        <div className='flex flex-col items-center justify-center pt-12 pb-8'>
          <div className='relative group'>
            <div
              className='absolute -inset-1 bg-gradient-to-r from-blueviolet to-blueviolet/60 
              dark:from-blue-500 dark:to-blue-600 rounded-full blur opacity-75 
              group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse'></div>
            <div
              className='relative bg-gradient-to-r from-blueviolet to-blueviolet/90 
              dark:from-blue-600 dark:to-blue-500 p-6 rounded-full'>
              <Youtube className='h-14 w-14 text-white transform group-hover:scale-110 transition-transform duration-200' />
            </div>
          </div>

          <h1
            className='mt-8 text-6xl font-black text-center mb-4 bg-gradient-to-r 
            from-blueviolet to-blueviolet/90 dark:from-blue-400 dark:to-blue-300 
            bg-clip-text text-transparent animate-in fade-in duration-1000 dark:neon-glow'>
            YouTube Summary
          </h1>
          <p
            className='text-blueviolet/90 dark:text-blue-300 text-center max-w-lg text-lg 
            font-medium animate-in fade-in duration-1000 delay-150'>
            Get instant summaries of your favorite YouTube videos. Just paste
            the URL below.
          </p>
        </div>

        <div
          className='bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl 
          shadow-lg border border-blueviolet/20 dark:border-blue-500/20 
          p-8 mb-8 animate-in fade-in duration-1000 delay-300'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
                <ExternalLinkIcon color='blue' />
              </div>
              <Input
                type='url'
                placeholder='Enter YouTube video URL'
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className='pl-10 h-12'
                required
              />
            </div>

            <Button
              type='submit'
              disabled={loading}
              className='w-full h-12 text-base font-semibold'>
              {loading ? (
                <>
                  <Loader className='animate-spin h-5 w-5 mr-2' />
                  Generating Summary...
                </>
              ) : (
                "Get Summary"
              )}
            </Button>
          </form>
        </div>

        {summary && (
          <div
            className='bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl 
            shadow-lg border border-blueviolet/20 dark:border-blue-500/20 
            p-8 animate-in fade-in duration-500'>
            <h2 className='text-2xl font-bold mb-6 text-blueviolet dark:text-blue-300 dark:neon-glow'>
              Video Summary
            </h2>
            <div className='prose max-w-none'>
              <div className='text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed'>
                {summary?.title && (
                  <>
                    <h1>{summary?.title}</h1>
                    <p>{summary?.summary}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
