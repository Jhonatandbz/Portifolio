
export function writeString(element, text, timerRef) {
    let index = 0;
    clearInterval(timerRef);
    const timer = setInterval(() => {
      if (index >= text.length) {
        clearInterval(timer);
        return;
      }
      element.innerHTML += text.charAt(index);
      index++;
      element.scrollTop = element.scrollHeight;
    }, 20);

    return timer;

  }
