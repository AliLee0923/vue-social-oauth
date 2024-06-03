<template>
  <div
    v-if="accessToken"
    class="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900"
  >
    <div class="px-4 py-5 sm:px-6">
      <div class="flex justify-between items-center">
        <div><p class="font-semibold">Add a social account</p></div>
      </div>
    </div>
    <div class="text-sm px-4 py-5 sm:p-6 bg-white">
      <ul class="space-y-4 w-1/3">
        <li v-for="(profile, index) in profiles" :key="index" class="flex justify-between items-center gap-4">
          <div class="flex gap-4 items-center relative">
            <div class="relative flex-shrink-0">
              <img
                :src="profile.blankImage"
                class="w-8 h-8 rounded-full border"
              />
              <div class="flex-shrink-0 flex justify-center items-center rounded-md w-4 h-4 absolute bottom-0 -right-1">
                <img
                  :src="profile.icon"
                  class="grayscale w-full h-full object-fit"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <p class="text-sm font-medium break-words text-gray-400">
                {{ profile.name }}
              </p>
            </div>
          </div>
          <div class="relative flex items-center gap-10">
            <button
              @click="openModal(profile.type)"
              class="text-white bg-black w-6 h-6 rounded-full flex justify-center items-center"
            >
              +
            </button>
            <button
              @click="openCommentModal(profile.type)"
              class="px-2 py-1 border-black border-[1px] rounded-full hover:bg-gray-400 hover:text-white"
            >
              comment
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div v-else>Please sign in...</div>
  <ConnectModal
    v-if="isModalOpen"
    :show="isModalOpen"
    :accountType="selectedProfile"
    :saveFunction="connectSocial"
    @close="closeModal"
  />
  <PostCommentModal
    v-if="isCommentModalOpen"
    :show="isCommentModalOpen"
    :accountType="selectedProfile"
    @close="closeCommentModal"
  />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useUserState } from "../../composable/useUserState";
import axios from "axios";
import ConnectModal from "../../components/ConnectModal.vue";
import PostCommentModal from "../../components/PostCommentModal.vue";

const { user, setUser } = useUserState();

const profiles = [
  {
    name: "Twitter Profile",
    type: "Twitter",
    blankImage: "/src/assets/blank.jpg",
    icon: "/src/assets/twitter.svg",
  },
  {
    name: "Youtube Profile",
    type: "YouTube",
    blankImage: "/src/assets/blank.jpg",
    icon: "/src/assets/youtube.png",
  },
  {
    name: "LinkedIn Profile",
    type: "LinkedIn",
    blankImage: "/src/assets/blank.jpg",
    icon: "/src/assets/linkedin.png",
  },
  {
    name: "Instagram Profile",
    type: "Instagram",
    blankImage: "/src/assets/blank.jpg",
    icon: "/src/assets/instagram.png",
  },
];

const isModalOpen = ref(false);
const selectedProfile = ref("");
const isCommentModalOpen = ref(false);
const accessToken = ref("");

onMounted(async () => {
  const hash = window.location.hash.substring(1);
  const authUrlParams = new URLSearchParams(hash);
  accessToken.value = authUrlParams.get("access_token") || "";
  const refreshToken = authUrlParams.get("refresh_token");

  if (accessToken.value) {
    window.localStorage.setItem("access_token", accessToken.value);
    window.localStorage.setItem("refresh_token", refreshToken);
    try {
      const response = await axios.get("https://express-supabase-social-oauth.vercel.app/api/auth/getuser", {
        params: { access_token: accessToken.value },
      });
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  } else {
    const storedToken = window.localStorage.getItem("access_token");
    if (!storedToken) {
      console.error("Access token is missing");
    } else {
      accessToken.value = storedToken;
    }
  }
});

const connectSocial = (profileType) => {
  switch (profileType) {
    case "Twitter":
      connectTwitter();
      break;
    case "YouTube":
      connectYoutube();
      break;
    case "LinkedIn":
      connectLinkedIn();
      break;
    case "Instagram":
      connectInstagram();
      break;
    default:
      console.error("Unknown profile type");
  }
};

const connectTwitter = async () => {
  try {
    const response = await axios.get("https://express-supabase-social-oauth.vercel.app/api/twitter/request-token", {
      params: { access_token: accessToken.value },
    });
    const { oauth_token } = response.data;
    window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${oauth_token}`;
  } catch (error) {
    console.error("Error getting request token:", error);
  }
};

const connectYoutube = async () => {
  try {
    const requestUrl = `http://127.0.0.1:5000/api/youtube/request-token?access_token=${encodeURIComponent(accessToken.value)}`;
    window.location.href = requestUrl;
  } catch (error) {
    console.error("Error getting request token:", error);
  }
};

const connectLinkedIn = async () => {
  try {
    const requestUrl = `https://express-supabase-social-oauth.vercel.app/api/linkedin/request-token?access_token=${encodeURIComponent(accessToken.value)}`;
    window.location.href = requestUrl;
  } catch (error) {
    console.error("Error starting LinkedIn OAuth flow:", error);
  }
};

const connectInstagram = async () => {
  try {
    const requestUrl = `https://express-supabase-social-oauth.vercel.app/api/instagram/request-token?access_token=${encodeURIComponent(accessToken.value)}`;
    window.location.href = requestUrl;
  } catch (error) {
    console.error("Error starting Instagram OAuth flow:", error);
  }
};

const openModal = (profile) => {
  selectedProfile.value = profile;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProfile.value = "";
};

const openCommentModal = (profile) => {
  selectedProfile.value = profile;
  isCommentModalOpen.value = true;
};

const closeCommentModal = () => {
  isCommentModalOpen.value = false;
  selectedProfile.value = "";
};
</script>
