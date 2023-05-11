
export function writeString(element, text) {
    let index = 0;
    const timer = setInterval(() => {
      if (index >= text.length) {
        clearInterval(timer);
        return;
      }
      element.innerHTML += text.charAt(index);
      index++;
      element.scrollTop = element.scrollHeight;
    }, 50);
  }
