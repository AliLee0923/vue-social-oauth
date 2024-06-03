<template>
  <div>
    <!-- Add your template code here -->
    <button @click="postTwitterComment" class="text-black">Comment on Twitter Post</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useUserState } from "../../composable/useUserState";

const { user, setUser } = useUserState();
const twitterAccessToken = ref("");
const twitterAccessTokenSecret = ref("");
const tweetId = ref(""); // The ID of the tweet you want to comment on
const commentText = ref(""); // The text of your comment

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  twitterAccessToken.value = urlParams.get("accessToken");
  twitterAccessTokenSecret.value = urlParams.get("accessTokenSecret");
  tweetId.value = "123456789"; // Example tweet ID, replace with actual tweet ID
  commentText.value = "This is a comment"; // Example comment text
});

const postTwitterComment = async () => {
  try {
    const response = await axios.post(
      "https://express-supabase-social-oauth.vercel.app/api/twitter/comment",
      {
        status: commentText.value,
        in_reply_to_status_id: tweetId.value,
        accessToken: twitterAccessToken.value,
        accessTokenSecret: twitterAccessTokenSecret.value,
      }
    );

    console.log("Comment posted:", response.data);
  } catch (error) {
    console.error("Error posting comment:", error);
  }
};
</script>
