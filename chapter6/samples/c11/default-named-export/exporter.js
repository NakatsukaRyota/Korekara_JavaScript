function randomInt(max) {
  return Math.floor(Math.random() * max);
}
const lastNames = ['佐藤', '鈴木', '高橋', '田中', '伊藤'];
export {randomInt as default, lastNames}; // デフォルトと名前つきを一括エクスポート
