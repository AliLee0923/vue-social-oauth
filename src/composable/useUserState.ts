// src/composables/userState.ts
import { ref } from "vue";

interface User {
  id: string;
  email: string;
}

export function useUserState() {
  const user = ref<any | null>();

  const setUser = (newUser: User) => {
    user.value = newUser;
  };

  return { user, setUser };
}
