import React from 'react'
import './tabs.css';


function TableC({ name, buy, name2, buy2, name3, buy3, name4, buy4, name5, buy5, name6, buy6, name7, buy7,
    currency , currency2, currency3, currency4, currency5, currency6, currency7, image, image2, image3, image4 , image5, image6, image7
}) {
  return (
<table class="customTable">
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Price IRT</th>
      <th>Price $</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class='symbols'>{name}<img class="flagimage" src={image} alt={name}/></td>
      <td><span>{currency * buy}</span> Toman</td>
      <td class='buy'>{buy.toLocaleString()} $</td>
    </tr>
    <tr>
    <td class='symbols'>{name2}<img class="flagimage" src={image2} alt={name2}/></td>
    <td><span>{currency * buy2}</span> Toman</td>
    <td class='buy'>{buy2.toLocaleString()} $</td>
    </tr>
    <tr>
    <td class='symbols'>{name3}<img class="flagimage" src={image3} alt={name3}/></td>
    <td><span>{currency * buy3}</span> Toman</td>
    <td class='buy'>{buy3.toLocaleString()} $</td>
    </tr>
    <tr>
    <td class='symbols'>{name4}<img class="flagimage" src={image4} alt={name4}/></td>
    <td><span>{currency * buy4}</span> Toman</td>
    <td class='buy'>{buy4} $</td>
    </tr>
    <tr>
    <td class='symbols'>{name5}<img class="flagimage" src={image5} alt={name5}/></td>
    <td><span>{currency * buy5}</span> Toman</td>
    <td class='buy'>{buy5.toLocaleString()} $</td>
    </tr>
    <tr>
    <td class='symbols'>{name6}<img class="flagimage" src={image6} alt={name6}/></td>
    <td><span>{currency * buy6}</span> Toman</td>
    <td class='buy'>{buy6.toLocaleString()} $</td>
    </tr>
    <tr>
    <td class='symbols'>{name7}<img class="flagimage" src={image7} alt={name7}/></td>
    <td> <span>{currency * buy7}</span> Toman</td>
    <td class='buy'>{buy7.toLocaleString()} $</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableC