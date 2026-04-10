const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/');
  
  // Wait for the elements to load
  await page.waitForTimeout(3000);
  
  // Scroll down nicely
  await page.evaluate(() => {
    window.scrollBy(0, 1500);
  });
  
  await page.waitForTimeout(2000);

  // Check the DOM for the letters
  const data = await page.evaluate(() => {
    const cards = document.querySelectorAll('.bento-card');
    if (!cards || cards.length === 0) return { error: 'No cards found' };
    
    // Check Card 1
    const card1 = cards[0];
    const letters = card1.querySelectorAll('.kinetic-text-process .letters');
    
    // Check their opacity and transform
    const info = Array.from(letters).slice(0, 5).map(l => {
      const style = window.getComputedStyle(l);
      return {
        text: l.textContent,
        opacity: style.opacity,
        transform: style.transform,
        display: style.display,
        visibility: style.visibility
      };
    });
    
    return {
      lettersFound: letters.length,
      sample: info,
      cardHtml: card1.innerHTML.slice(0, 500)
    };
  });
  
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
