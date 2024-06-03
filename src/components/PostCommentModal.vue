<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2 class="mb-10">Post Comment to {{ accountType }}</h2>
      <form @submit.prevent="submitComment">
        <div class="form-group">
          <label for="postId">Post/Media ID</label>
          <input type="text" v-model="postId" id="postId" required />
        </div>
        <div class="form-group">
          <label for="content">Comment</label>
          <textarea v-model="content" id="content" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="success" class="success">{{ success }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      postId: "",
      content: "",
      error: "",
      success: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
      this.clearForm();
    },
    clearForm() {
      this.postId = "";
      this.content = "";
      this.error = "";
      this.success = "";
    },
    async submitComment() {
      try {
        const urlMap = {
          Twitter: "http://localhost:5000/api/twitter/comment",
          YouTube: "http://localhost:5000/api/youtube/comment",
          LinkedIn: "http://localhost:5000/api/linkedin/comment",
          Instagram: "http://localhost:5000/api/instagram/comment",
        };
        const url = urlMap[this.accountType];

        if (!url) {
          throw new Error("Unsupported platform");
        }

        const token = this.getToken();
        const response = await axios.post(
          url,
          {
            postId: this.postId,
            comment: this.content,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.success = "Comment posted successfully!";
        this.error = "";
      } catch (error) {
        this.error = `Error posting comment: ${
          error.response?.data || error.message
        }`;
        this.success = "";
      }
    },
    getToken() {
      const tokenData = localStorage.getItem("access_token");
      return tokenData || null;
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 8px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
}
</style>
