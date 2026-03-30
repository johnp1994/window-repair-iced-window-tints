<template>
  <div class="chat-widget" id="chat-widget">
    <div class="chat-popup" :class="{ active: isOpen }" id="chat-popup">
      <div class="chat-popup-header">
        <img src="~/assets/images/logo.png" alt="The Glassperts" />
        <button class="chat-close" id="chat-close" @click="isOpen = false">&times;</button>
      </div>
      <div class="chat-popup-body">
        <p>Shoot me any questions and I will get back to you as soon as I have a minute</p>
        <div class="chat-input-wrapper">
          <input type="text" placeholder="Type a message..." class="chat-input" v-model="message" @keyup.enter="sendMessage" />
          <button class="chat-send" @click="sendMessage"><i class="fas fa-paper-plane"></i></button>
        </div>
      </div>
    </div>
    <button class="chat-toggle" id="chat-toggle" aria-label="Chat" @click="isOpen = !isOpen">
      <i class="fas fa-headset"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const message = ref('')

const sendMessage = () => {
  if (message.value.trim()) {
    console.log('Chat message:', message.value)
    message.value = ''
  }
}
</script>

<style scoped>
.chat-widget {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 950;
}

.chat-toggle {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-circle);
  background: var(--chat-blue);
  color: var(--white);
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 30px rgba(0, 164, 189, 0.4);
  transition: all var(--transition-fast);
}

.chat-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 40px rgba(0, 164, 189, 0.5);
}

.chat-popup {
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 340px;
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px) scale(0.95);
  transition: all var(--transition-fast);
}

.chat-popup.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.chat-popup-header {
  background: var(--navy);
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-popup-header img {
  height: 36px;
}

.chat-close {
  background: none;
  border: none;
  color: var(--white);
  font-size: 1.4rem;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
}

.chat-popup-body {
  padding: 20px;
}

.chat-popup-body p {
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.5;
  margin-bottom: 16px;
}

.chat-input-wrapper {
  display: flex;
  gap: 8px;
}

.chat-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.85rem;
  font-family: var(--font-body);
  transition: border-color var(--transition-fast);
}

.chat-input:focus {
  outline: none;
  border-color: var(--chat-blue);
}

.chat-send {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--chat-blue);
  color: var(--white);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-fast);
}

.chat-send:hover {
  background: var(--chat-blue-dark);
}
</style>
