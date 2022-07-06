/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import * as s from "./styles/styles";
import Tables from "./components/Tables";
import TableC from "./components/TableC";
import Boxes from "./components/Boxes";
const axios = require("axios").default;

function App() {
  const [data, setdata] = useState({
    usd: {
      sell: 31900,
      buy: 31950,
    },
    eur: {
      sell: 33370,
      buy: 33220,
    },
    gbp: {
      sell: 38735,
      buy: 38535,
    },
    chf: {
      sell: 33365,
      buy: 33215,
    },
    cad: {
      sell: 24820,
      buy: 24720,
    },
    aud: {
      sell: 21805,
      buy: 21705,
    },
    sek: {
      sell: 3095,
      buy: 3080,
    },
  });

  const [data2, setdata2] = useState({
    nok: {
      sell: 3205,
      buy: 3190,
    },
    rub: {
      sell: 560,
      buy: 560,
    },
    thb: {
      sell: 900,
      buy: 895,
    },
    sgd: {
      sell: 22920,
      buy: 22820,
    },
    hkd: {
      sell: 4080,
      buy: 4050,
    },
    azn: {
      sell: 18780,
      buy: 18680,
    },
    amd: {
      sell: 785,
      buy: 780,
    },
  });

  const [data3, setdata3] = useState({
    BTC: {
      price: 19851.3,
    },
    ETH: {
      price: 1122.59,
    },
    LTC: {
      price: 51.35,
    },
    USDT: {
      price: 1,
    },
    XRP: {
      price: 0.3241,
    },
    BCH: {
      price: 107.23,
    },
    BNB: {
      price: 227.47,
    },
  });

  const [data4, setdata4] = useState({
    DOGE: {
      price: 0.06815,
    },
    XLM: {
      price: 0.10937,
    },
    TRX: {
      price: 0.0674,
    },
    ADA: {
      price: 0.459,
    },
    XMR: { price: 120.61 },
    ETC: { price: 15.085 },
    DASH: { price: 43.23 },
  });

  const [fulldata, setfulldata] = useState({
    AED: 3.673497,
    AFN: 87.855784,
    ALL: 114.16937,
    AMD: 406.200775,
    ANG: 1.804831,
    AOA: 426.747069,
    ARS: 125.950769,
    AUD: 1.455461,
    AWG: 1.797774,
    AZN: 1.699951,
    BAM: 1.874434,
    BBD: 1.999623,
    BDT: 93.589531,
    BGN: 1.876443,
    BHD: 0.377402,
    BIF: 2061.2556,
    BMD: 1.000036,
    BND: 1.397745,
    BOB: 6.895513,
    BRL: 5.329388,
    BSD: 1.000402,
    BTC: 0.00005,
    BTN: 79.062415,
    BWP: 12.37971,
    BYN: 3.382899,
    BZD: 2.018818,
    CAD: 1.285641,
    CDF: 2003.047335,
    CHF: 0.961149,
    CLF: 0.03395,
    CLP: 928.543965,
    CNH: 6.690186,
    CNY: 6.691842,
    COP: 4207.654572,
    CRC: 688.112803,
    CUC: 0.999731,
    CUP: 25.743974,
    CVE: 105.701063,
    CZK: 23.68674,
    DJF: 178.289159,
    DKK: 7.123717,
    DOP: 54.880965,
    DZD: 146.268017,
    EGP: 18.855851,
    ERN: 14.997516,
    ETB: 52.237189,
    EUR: 0.958286,
    FJD: 2.204564,
    FKP: 0.826152,
    GBP: 0.826143,
    GEL: 2.939746,
    GGP: 0.826226,
    GHS: 8.052637,
    GIP: 0.826115,
    GMD: 54.078637,
    GNF: 8698.282809,
    GTQ: 7.763991,
    GYD: 209.52836,
    HKD: 7.845883,
    HNL: 24.617466,
    HRK: 7.211143,
    HTG: 115.119008,
    HUF: 384.888893,
    IDR: 14986.087063,
    ILS: 3.504275,
    IMP: 0.825837,
    INR: 79.039803,
    IQD: 1461.665504,
    IRR: 42340.5933,
    ISK: 133.550936,
    JEP: 0.825419,
    JMD: 150.772938,
    JOD: 0.709009,
    JPY: 136.270804,
    KES: 118.124445,
    KGS: 79.485974,
    KHR: 4080.569735,
    KMF: 468.262512,
    KPW: 899.800725,
    KRW: 1299.261698,
    KWD: 0.307199,
    KYD: 0.83535,
    KZT: 467.946498,
    LAK: 15040.541306,
    LBP: 1514.432029,
    LKR: 359.03141,
    LRD: 152.402974,
    LSL: 16.271561,
    LYD: 4.845247,
    MAD: 10.030988,
    MDL: 19.16923,
    MGA: 4088.90038,
    MKD: 59.040626,
    MMK: 1854.238745,
    MNT: 3133.67805,
    MOP: 8.094144,
    MRU: 36.483703,
    MUR: 45.740212,
    MVR: 15.377701,
    MWK: 1027.930085,
    MXN: 20.257257,
    MYR: 4.415924,
    MZN: 63.840735,
    NAD: 16.084727,
    NGN: 420.37343,
    NIO: 35.908199,
    NOK: 9.821465,
    NPR: 126.495739,
    NZD: 1.6083,
    OMR: 0.385625,
    PAB: 0.999949,
    PEN: 3.852575,
    PGK: 3.529473,
    PHP: 55.080166,
    PKR: 204.927561,
    PLN: 4.514491,
    PYG: 6856.059576,
    QAR: 3.659921,
    RON: 4.734905,
    RSD: 112.376708,
    RUB: 55.013644,
    RWF: 1024.983505,
    SAR: 3.75261,
    SBD: 8.143486,
    SCR: 12.832563,
    SDG: 456.39751,
    SEK: 10.314456,
    SGD: 1.395147,
    SHP: 0.825989,
    SLL: 13154.778019,
    SOS: 579.30386,
    SRD: 22.312379,
    SSP: 130.231292,
    STD: 21975.608631,
    STN: 23.479793,
    SVC: 8.763527,
    SYP: 2511.972114,
    SZL: 16.270133,
    THB: 35.671937,
    TJS: 9.890681,
    TMT: 3.502133,
    TND: 3.082145,
    TOP: 2.343982,
    TRY: 16.816673,
    TTD: 6.800249,
    TWD: 29.783451,
    TZS: 2332.48242,
    UAH: 29.592579,
    UGX: 3755.534532,
    USD: 1,
    UYU: 39.476476,
    UZS: 10852.665205,
    VES: 5.468509,
    VND: 23364.756773,
    VUV: 117.202097,
    WST: 2.679001,
    XAF: 628.022019,
    XAG: 0.050185,
    XAU: 0.00188,
    XCD: 2.702174,
    XDR: 0.733183,
    XOF: 628.021477,
    XPD: 0.001259,
    XPF: 114.250203,
    XPT: 0.001846,
    YER: 250.215828,
    ZAR: 16.31319,
    ZMW: 16.600187,
    ZWL: 321.928277,
  });

  const [golddata, setgolddata] = useState(null);

  const [NewDate, setNewDate] = useState("2022-07-05");
  const [usdt, setusdt] = useState(32500);
  const [stateofc, setstateofc] = useState("Crypto");
  let sellusdt = usdt - 100;

  const TodayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    console.log("Today is:", today);
    setNewDate(today);
  };

  const getgoldprices = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-ndjtl5879rxr-io");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("gold", result);
        setgolddata(result);
      })
      .catch((error) => console.log("error", error));
  };

  const getcryptos = () => {
    axios
      .get("https://api.nobitex.ir/v2/crypto-prices")
      .then(function (crp) {
        // handle success
        console.log("crypto", crp.data.prices);
        setdata3(crp.data.prices);
        setdata4(crp.data.prices);
        setusdt(crp.data.params.USDTIRT.toString().substring(0, 5));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const getprice = () => {
    fetch(`http://bonbast-api.herokuapp.com/archive/?date=${NewDate}`)
      .then((response) => response.json())
      .then((res) => {
        let prices = res;
        console.log("Currencies", prices);
        setdata(prices);
        setdata2(prices);
      });

    axios
      .get("https://api.nobitex.ir/v2/crypto-prices")
      .then(function (crp) {
        // handle success
        console.log("crypto", crp.data.prices);
        setdata3(crp.data.prices);
        setdata4(crp.data.prices);
        setusdt(crp.data.params.USDTIRT.toString().substring(0, 5));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const getfullprices = () => {
    axios
      .get("https://api.exchangerate.host/latest?base=usd")
      .then(function (crp) {
        // handle success
        console.log("Full USD Prices", crp.data.rates);
        setfulldata(crp.data.rates);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    TodayDate();
    getcryptos();
    getfullprices();
   // getgoldprices();
    setTimeout(() => {
      getprice();
      setNewDate(TodayDate());
    }, 1000);
  }, []);

  

  return (
    <s.Screen>
      <Header value={stateofc} click={setstateofc} />

      {golddata != null ? (
        
        <>
              <s.Main>
        <Boxes
          oz={golddata.price}
          eight={golddata.price_gram_18k}
          twenty={golddata.price_gram_24k}
        />
      </s.Main>
        </>
      ) : (
       <>
       </> 
      )}


      <s.Main>
        {stateofc === "Crypto" ? (
          <>
            <s.Tablediv>
              <TableC
                name={"Bitcoin (BTC)"}
                buy={data3.BTC.price}
                name2={"Ethereum (ETH)"}
                buy2={data3.ETH.price}
                name3={"Litecoin (LTC)"}
                buy3={data3.LTC.price}
                name4={"USDT"}
                buy4={data3.USDT.price}
                name5={"Ripple (XRP)"}
                buy5={data3.XRP.price}
                name6={"BCH"}
                buy6={data3.BCH.price}
                name7={"BNB"}
                buy7={data3.BNB.price}
                currency={usdt}
                image={
                  "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022"
                }
                image2={
                  "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022"
                }
                image3={
                  "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=022"
                }
                image4={
                  "https://cryptologos.cc/logos/tether-usdt-logo.png?v=022"
                }
                image5={"https://cryptologos.cc/logos/xrp-xrp-logo.png?v=022"}
                image6={
                  "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=022"
                }
                image7={"https://cryptologos.cc/logos/bnb-bnb-logo.png?v=022"}
              />

              <TableC
                name={"Dogecoin (DOGE)"}
                buy={data4.DOGE.price}
                name2={"XLM"}
                buy2={data4.XLM.price}
                name3={"TRON (TRX"}
                buy3={data4.TRX.price}
                name4={"Cardano (ADA)"}
                buy4={data4.ADA.price}
                name5={"Monero (XMR)"}
                buy5={data4.XMR.price}
                name6={"ETC"}
                buy6={data4.ETC.price}
                name7={"DASH"}
                buy7={data4.DASH.price}
                currency={usdt}
                image={
                  "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022"
                }
                image2={
                  "https://cryptologos.cc/logos/stellar-xlm-logo.png?v=022"
                }
                image3={"https://cryptologos.cc/logos/tron-trx-logo.png?v=022"}
                image4={
                  "https://cryptologos.cc/logos/cardano-ada-logo.png?v=022"
                }
                image5={
                  "https://cryptologos.cc/logos/monero-xmr-logo.png?v=022"
                }
                image6={
                  "https://cryptologos.cc/logos/ethereum-classic-etc-logo.png?v=022"
                }
                image7={"https://cryptologos.cc/logos/dash-dash-logo.png?v=022"}
              />
            </s.Tablediv>
          </>
        ) : (
          <>
            <s.Tablediv>
              <Tables
                name={"USD"}
                buy={data.usd.sell}
                sell={data.usd.buy}
                name2={"EURO"}
                buy2={data.eur.sell}
                sell2={data.eur.buy}
                name3={"GPB"}
                buy3={data.gbp.sell}
                sell3={data.gbp.buy}
                name4={"CHF"}
                buy4={data.chf.sell}
                sell4={data.chf.buy}
                name5={"CAD"}
                buy5={data.cad.sell}
                sell5={data.cad.buy}
                name6={"AUD"}
                buy6={data.aud.sell}
                sell6={data.aud.buy}
                name7={"SEK"}
                buy7={data.sek.sell}
                sell7={data.sek.buy}
                currency={"US Dollar"}
                currency2={"EURO"}
                currency3={"British Pound"}
                currency4={"Swiss Franc"}
                currency5={"Canadian Dollar"}
                currency6={"Australian Dollar"}
                currency7={"Swedish Krona"}
                image={"https://www.worldometers.info/img/flags/us-flag.gif"}
                image2={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png?20081021155534"
                }
                image3={"https://www.worldometers.info/img/flags/uk-flag.gif"}
                image4={"https://www.worldometers.info/img/flags/sz-flag.gif"}
                image5={"https://www.worldometers.info/img/flags/ca-flag.gif"}
                image6={"https://www.worldometers.info/img/flags/as-flag.gif"}
                image7={"https://www.worldometers.info/img/flags/sw-flag.gif"}
              />
              <Tables
                name={"NOK"}
                buy={data2.nok.sell}
                sell={data2.nok.buy}
                name2={"RUB"}
                buy2={data2.rub.sell}
                sell2={data2.rub.buy}
                name3={"THB"}
                buy3={data2.thb.sell}
                sell3={data2.thb.buy}
                name4={"SGD"}
                buy4={data2.sgd.sell}
                sell4={data2.sgd.buy}
                name5={"HKD"}
                buy5={data2.hkd.sell}
                sell5={data2.hkd.buy}
                name6={"AZN"}
                buy6={data2.azn.sell}
                sell6={data2.azn.buy}
                name7={"AMD"}
                buy7={data2.amd.sell}
                sell7={data2.amd.buy}
                currency={"Norwegian Krone"}
                currency2={"Russian Ruble"}
                currency3={"Thai Baht"}
                currency4={"Singapore Dollar"}
                currency5={"Hong Kong Dollar"}
                currency6={"Azerbaijani Manat"}
                currency7={"10Armenian Dram"}
                image={"https://www.worldometers.info/img/flags/no-flag.gif"}
                image2={"https://www.worldometers.info/img/flags/rs-flag.gif"}
                image3={"https://www.worldometers.info/img/flags/th-flag.gif"}
                image4={"https://www.worldometers.info/img/flags/sn-flag.gif"}
                image5={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Hong_Kong_%281990%29.svg/200px-Flag_of_Hong_Kong_%281990%29.svg.png"
                }
                image6={"https://www.worldometers.info/img/flags/aj-flag.gif"}
                image7={"https://www.worldometers.info/img/flags/am-flag.gif"}
              />
            </s.Tablediv>

            <s.Tablediv>
              <Tables
                name={"DKK"}
                buy={usdt / fulldata.DKK}
                sell={sellusdt / fulldata.DKK}
                name2={"TRY"}
                buy2={usdt / fulldata.TRY}
                sell2={sellusdt / fulldata.TRY}
                name3={"CNY"}
                buy3={usdt / fulldata.CNY}
                sell3={sellusdt / fulldata.CNY}
                name4={"JPY"}
                buy4={(usdt / fulldata.JPY) * 10}
                sell4={(sellusdt / fulldata.JPY) * 10}
                name5={"SAR"}
                buy5={usdt / fulldata.SAR}
                sell5={sellusdt / fulldata.SAR}
                name6={"INR"}
                buy6={(usdt / fulldata.INR) * 10}
                sell6={(sellusdt / fulldata.INR) * 10}
                name7={"MYR"}
                buy7={usdt / fulldata.MYR}
                sell7={sellusdt / fulldata.MYR}
                currency={"Danish Krone"}
                currency2={"Turkish Lira"}
                currency3={"Chinese Yuan"}
                currency4={"10 Japanese Yen"}
                currency5={"KSA Riyal"}
                currency6={"10 Indian Rupee"}
                currency7={"Ringgit"}
                image={"https://www.worldometers.info/img/flags/da-flag.gif"}
                image2={"https://www.worldometers.info/img/flags/tu-flag.gif"}
                image3={"https://www.worldometers.info/img/flags/ch-flag.gif"}
                image4={"https://www.worldometers.info/img/flags/ja-flag.gif"}
                image5={"https://www.worldometers.info/img/flags/sa-flag.gif"}
                image6={"https://www.worldometers.info/img/flags/in-flag.gif"}
                image7={"https://www.worldometers.info/img/flags/my-flag.gif"}
              />
              <Tables
                name={"AED"}
                buy={usdt / fulldata.AED}
                sell={sellusdt / fulldata.AED}
                name2={"AFN"}
                buy2={usdt / fulldata.AFN}
                sell2={sellusdt / fulldata.AFN}
                name3={"KWD"}
                buy3={usdt / fulldata.KWD}
                sell3={sellusdt / fulldata.KWD}
                name4={"IQD"}
                buy4={(usdt / fulldata.IQD) * 100}
                sell4={(sellusdt / fulldata.IQD) * 100}
                name5={"BHD"}
                buy5={usdt / fulldata.BHD}
                sell5={sellusdt / fulldata.BHD}
                name6={"OMR"}
                buy6={usdt / fulldata.OMR}
                sell6={sellusdt / fulldata.OMR}
                name7={"QAR"}
                buy7={usdt / fulldata.QAR}
                sell7={sellusdt / fulldata.QAR}
                currency={"UAE Dirham"}
                currency2={"Afghan Afghani"}
                currency3={"Kuwaiti Dinar"}
                currency4={"100 Iraqi Dinar"}
                currency5={"Bahraini Dinar"}
                currency6={"Omani Rial"}
                currency7={"Qatari Riyal"}
                image={"https://www.worldometers.info/img/flags/ae-flag.gif"}
                image2={"https://www.worldometers.info/img/flags/af-flag.gif"}
                image3={"https://www.worldometers.info/img/flags/ku-flag.gif"}
                image4={"https://www.worldometers.info/img/flags/iz-flag.gif"}
                image5={"https://www.worldometers.info/img/flags/ba-flag.gif"}
                image6={"https://www.worldometers.info/img/flags/mu-flag.gif"}
                image7={"https://www.worldometers.info/img/flags/qa-flag.gif"}
              />
            </s.Tablediv>
          </>
        )}
      </s.Main>
    </s.Screen>
  );
}

export default App;
