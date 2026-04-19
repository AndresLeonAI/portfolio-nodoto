import { lenis } from '@/lib/lenis';

const textSplitterIntoChar = (
  text: string,
  isFancyFont: boolean = false,
  isNewLine: boolean = false,
): string => {
  const words = text.split(' ');
  const char = words.map((word) => word.split(''));

  let result = '';
  char.forEach((word) => {
    result += '<span class="text-nowrap!  overflow-clip ';
    if (isNewLine) {
      result += ' leading-none block  ';
    } else {
      result += ' inline-block ';
    }
    result += '">';

    word.forEach((char) => {
      let classes =
        'letters translate-y-[120%] inline-block will-change-auto will-change-transform ';
      if (isFancyFont) {
        classes += ' font-fancy ';
      }

      result += `<span class="${classes}">${char}</span>`;
    });

    result += '</span> ';
  });

  return result;
};

const getAvailableForWorkDate = () => {
  const date = new Date();

  const year = date.getFullYear().toString().slice(-2);
  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  let index = date.getMonth();

  // Uncomment this if you want to include the next month
  // if (date.getMonth() < 12) {
  //   index += 1;
  // }
  const month = monthNames[index];

  return `${month} '${year}`;
};

const gotoSection = (url: string) => {
  lenis.start();
  if (url === '#testimonials-section') {
    lenis.scrollTo('#slider', { duration: 3 });
    return;
  }
  lenis.scrollTo(url, { duration: 3 });
};

/**
 * preloadImage — resolve when image is fully decoded (or fail-soft).
 * Used by LoadingScreen to gate the curtain reveal on the hero LCP asset
 * so we never lift the preloader before the page is visually ready.
 */
const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const decoded = img.decode?.();
      if (decoded && typeof decoded.then === 'function') {
        decoded.then(() => resolve()).catch(() => resolve());
      } else {
        resolve();
      }
    };
    img.onerror = () => resolve(); // Never block on a missing/broken asset
    img.src = src;
  });

export {
  textSplitterIntoChar,
  getAvailableForWorkDate,
  gotoSection,
  preloadImage,
};
