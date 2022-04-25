// Based upon: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs with some slight modification of event debouncing.
import { useState, useEffect } from 'react';

const get_window_dimensions = () => {
  const { innerWidth: window_width, innerHeight: window_height } = window;
  return {
    window_width,
    window_height
  };
}

const debounce_event = callback => {

    var timer;

    return (event) => {

      if (timer) { 
          clearTimeout(timer) 
      }

      timer = setTimeout(callback, 100, event);
    };
}

const WindowDimensions = () => {
  const [window_dimensions, set_window_dimensions] = useState(get_window_dimensions());

  useEffect(() => {

    const window_resize = () => set_window_dimensions(get_window_dimensions());

    window.addEventListener('resize',  debounce_event(window_resize))

    return () => {
        window.removeEventListener('resize', debounce_event(window_resize))
    }
  }, []);

  return window_dimensions;
}

export default WindowDimensions