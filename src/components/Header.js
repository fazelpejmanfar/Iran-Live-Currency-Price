import React from 'react'
import * as s from './styles';
import Persiandate from "persian-date";

function Header({ value , click, miladi, hejri }) {

  const TodayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
   return today;
  };

  const PerisaDate = () => {
    let today = new Persiandate();
    let dd = today.toLocale("en").format("DD");
    let mm = today.toLocale("en").format("MM");
    let yyyy = today.toLocale("en").format("YYYY");
    today = yyyy + "-" + mm + "-" + dd;
   return today;
  };


  return (

<s.Head>
<p style={{color: "white"}}>
{PerisaDate()} || {TodayDate()}
</p>

<s.H1>
  Live Prices For IRT (Iranian Toman)
</s.H1>


<s.BTN class="button" onClick={ (e) => {
    e.preventDefault();
    if(value === "Crypto") {
      click("Currencies")
    } else {
      click("Crypto")
    }
  }
  }>
    {value}
  </s.BTN>
</s.Head>
  )
}

export default Header