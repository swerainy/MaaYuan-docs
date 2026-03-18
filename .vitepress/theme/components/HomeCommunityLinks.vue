<script setup lang="ts">
const communityLinks = [
  {
    icon: '💬',
    text: '反馈与帮助',
    href: '/Manual/SystemAndFeedback',
    external: false,
  },
  {
    icon: '📤',
    text: '作业站',
    href: 'https://share.maayuan.top/',
    external: true,
  },
  {
    icon: '🐱',
    text: '咪教模拟器助手',
    href: 'https://meow.maayuan.top/',
    external: true,
  },
  {
    icon: '🍄',
    text: '躬耕南阳助手',
    href: 'https://fungi2025.maayuan.top/',
    external: true,
  },
  {
    icon: '⚔️',
    text: '朝歌之战助手',
    href: 'https://zhaoge.maayuan.top/',
    external: true,
  },
]

defineOptions({ name: 'HomeCommunityLinks' })
</script>

<template>
  <section class="home-community-links" aria-labelledby="home-community-links-title">
    <div class="home-community-links__header">
      <h2 id="home-community-links-title" class="home-community-links__title">
        工具与社区链接
      </h2>
      <p class="home-community-links__description">
        都是我们做的哦~
      </p>
    </div>

    <div class="home-community-links__grid">
      <a
        v-for="{ icon, text, href, external } in communityLinks"
        :key="text"
        class="home-community-links__item"
        :href="href"
        :target="external ? '_blank' : undefined"
        :rel="external ? 'noopener noreferrer' : undefined"
      >
        <span class="home-community-links__icon" aria-hidden="true">{{ icon }}</span>
        <span>{{ text }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.home-community-links {
  margin: 64px auto 24px;
  max-width: 960px;
  padding: 0 24px;
  text-align: center;
}

.home-community-links__header {
  margin-bottom: 28px;
}

.home-community-links__title {
  margin: 0;
  font-size: clamp(1.65rem, 2.4vw, 2rem);
  font-weight: 700;
  line-height: 1.35;
  color: var(--vp-c-text-1);
}

.home-community-links__description {
  margin: 12px 0 0;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}

.home-community-links__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.home-community-links__item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 12px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 72%, transparent);
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  box-shadow: 0 8px 24px rgb(15 23 42 / 8%);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.home-community-links__item:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 14px 32px rgb(79 70 229 / 16%);
}

.home-community-links__icon {
  font-size: 1.35rem;
  line-height: 1;
}

.dark .home-community-links__item {
  box-shadow: 0 10px 26px rgb(2 6 23 / 28%);
}

.dark .home-community-links__item:hover {
  box-shadow: 0 16px 34px rgb(99 102 241 / 22%);
}

@media (max-width: 640px) {
  .home-community-links {
    margin-top: 56px;
    padding-inline: 16px;
  }

  .home-community-links__grid {
    gap: 12px;
  }

  .home-community-links__item {
    width: 100%;
    justify-content: center;
  }
}
</style>
