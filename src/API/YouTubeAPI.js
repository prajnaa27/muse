// YouTubeAPI.js
const apiKey = 'AIzaSyDxkrrU6nhgCXmpv6jIbcLaO8TGv7td29M';

export const fetchVideoData = async (videoId) => {
  try {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log('API Response:', data); // Log the response for debugging

    if (data.items && data.items.length > 0) {
      return data.items[0].snippet;
    } else {
      throw new Error('Video not found');
    }
  } catch (error) {
    console.error('Error fetching video data:', error);
    throw error;
  }
};
