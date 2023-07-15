/**
 * Add date to output.
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 */

import data from "./data.js";
import CardList from "./components/CardList.js";

const mainContent = document.querySelector(".main-content");

mainContent.innerHTML = CardList(data);

