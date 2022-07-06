import React from 'react'
import './tabs.css';

function Tables({ name, buy, sell, name2, buy2, sell2, name3, buy3, sell3, name4, buy4, sell4, name5, buy5, sell5, name6, buy6, sell6, name7, buy7, sell7,
    currency , currency2, currency3, currency4, currency5, currency6, currency7, image, image2, image3, image4 , image5, image6, image7
}) {
  return (
<table class="customTable">
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Currency</th>
      <th>Buy Price</th>
      <th>Sell Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td class='symbols'>{name}<img class="flagimage" src={image} alt={name}/> </td>
      <td>{currency}</td>
      <td class='buy'>{buy.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
      <td class='sell'>{sell.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    </tr>
    <tr>
    <td class='symbols'>{name2}<img class="flagimage" src={image2} alt={name2}/></td>
    <td>{currency2}</td>
    <td class='buy'>{buy2.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    <td class='sell'>{sell2.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    </tr>
    <tr>
    <td class='symbols'>{name3}<img class="flagimage" src={image3} alt={name3}/></td>
    <td>{currency3}</td>
    <td class='buy'>{buy3.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    <td class='sell'>{sell3.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    </tr>
    <tr>
    <td class='symbols'>{name4}<img class="flagimage" src={image4} alt={name4}/></td>
    <td>{currency4}</td>
    <td class='buy'>{buy4.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    <td class='sell'>{sell4.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    </tr>
    <tr>
    <td class='symbols'>{name5}<img class="flagimage" src={image5} alt={name5}/></td>
    <td>{currency5}</td>
    <td class='buy'>{buy5.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    <td class='sell'>{sell5.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    </tr>
    <tr>
    <td class='symbols'>{name6}<img class="flagimage" src={image6} alt={name6}/></td>
    <td>{currency6}</td>
    <td class='buy'>{buy6.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    <td class='sell'>{sell6.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    </tr>
    <tr>
    <td class='symbols'>{name7}<img class="flagimage" src={image7} alt={name7}/></td>
    <td>{currency7}</td>
    <td class='buy'>{buy7.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    <td class='sell'>{sell7.toLocaleString()} <span style={{color: 'black'}}>IRT</span></td>
    </tr>
  </tbody>
</table>
  )
}

export default Tables