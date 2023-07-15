import Card from "./Card.js"
const cardListItem = (imgData) => {
    return `
    <li>
    ${Card(imgData)}
    </li>
    `
}
const CardList =(data)=> {
    return `
    <link href="components/cardlist.css" rel="stylesheet" />
<div class="container">
<ul class="cardlist">
${data.map((imgData)=> cardListItem(imgData)).join("")}
</ul>
</div>
    `
}
export default CardList;