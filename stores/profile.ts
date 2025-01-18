// stores/profile.ts
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    user: null as { name: string; email: string } | null,
    isVerify: false
  }),
  actions: {
    setProfile(profile: { name: string; email: string }) {
      this.user = profile
    },
    clearProfile() {
      this.user = null
    },
    setVerifyStatus(isVerified: boolean) {
        this.isVerify = isVerified
      },
  },
  persist: true,
})
