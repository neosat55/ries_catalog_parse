import {Page} from 'playwright';

export const auth = async (page: Page) => {
  const {RIES_USERNAME, RIES_PASSWORD, PARSE_URL} = process.env;

  await page.goto(PARSE_URL);

  await page.fill('input[name="username"]', RIES_USERNAME);
  await page.fill('input[name="password"]', RIES_PASSWORD);
  await page.click('text=Войти');

  await page.waitForTimeout(1000);
};