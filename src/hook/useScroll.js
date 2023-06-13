import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";
// export default function useScroll(reachBottom) {
//   const scrollListenerHandler = function () {
//     const scrollTop = document.documentElement.scrollTop;
//     const clientHeight = document.documentElement.clientHeight;
//     const scrollHeight = document.documentElement.scrollHeight;
//     if (scrollTop + clientHeight >= scrollHeight) {
//
//       reachBottom();
//     }
//   };
//   onMounted(() => {
//     window.addEventListener("scroll", scrollListenerHandler);
//   });

//   onUnmounted(() => {
//     window.removeEventListener("scroll", scrollListenerHandler);
//   });
// }

export default function useScroll() {
  const isReachBottom = ref(false);
  const scrollTop = ref(0);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const scrollListenerHandler = throttle(() => {
    scrollTop.value = document.documentElement.scrollTop;
    clientHeight.value = document.documentElement.clientHeight;
    scrollHeight.value = document.documentElement.scrollHeight;
    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      isReachBottom.value = true;
    }
    // console.log(document.documentElement.style.fontSize.slice(0, -2) );
  }, 300);
  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, scrollTop, clientHeight, scrollHeight };
}
