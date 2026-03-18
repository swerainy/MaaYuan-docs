<script setup lang="ts">
import { inject } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  content: string
  screenMenu?: boolean
}>(), {
  screenMenu: false,
})

const closeScreen = inject<(() => void) | undefined>('close-screen', undefined)

function openAnnouncement() {
  window.dispatchEvent(new CustomEvent('maayuan:open-announcement', {
    detail: {
      title: props.title,
      content: props.content,
    },
  }))

  closeScreen?.()
}
</script>

<template>
  <button
    type="button"
    :class="props.screenMenu ? 'announcement-nav-action--screen' : 'announcement-nav-action'"
    @click="openAnnouncement"
  >
    <span>{{ props.title }}</span>
  </button>
</template>

<style scoped>
.announcement-nav-action,
.announcement-nav-action--screen {
  width: 100%;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: var(--vp-c-text-1);
  font-weight: 500;
  transition:
    background-color 0.25s,
    color 0.25s;
}

.announcement-nav-action {
  display: block;
  border-radius: 6px;
  padding: 0 12px;
  line-height: 32px;
  font-size: 14px;
  white-space: nowrap;
}

.announcement-nav-action:hover,
.announcement-nav-action:focus-visible {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-default-soft);
  outline: none;
}

.announcement-nav-action--screen {
  display: block;
  padding: 12px 0 11px;
  line-height: 24px;
  font-size: 14px;
}

.announcement-nav-action--screen:hover,
.announcement-nav-action--screen:focus-visible {
  color: var(--vp-c-brand-1);
  outline: none;
}
</style>
