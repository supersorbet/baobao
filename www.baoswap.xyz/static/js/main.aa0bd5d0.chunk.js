(this["webpackJsonpbaoswap-ui"] = this["webpackJsonpbaoswap-ui"] || []).push([
  [2],
  {
    117: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
      );
    },
    118: function (e, t, n) {
      e.exports = n.p + "static/media/coinbaseWalletIcon.62578f59.svg";
    },
    119: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    120: function (e, t, n) {
      e.exports = n.p + "static/media/portisIcon.b234b2bf.png";
    },
    121: function (e, t, n) {
      e.exports = n.p + "static/media/walletConnectIcon.8215855c.svg";
    },
    155: function (e, t, n) {
      var a = {
        "./arrow-down-blue.svg": 342,
        "./arrow-down-grey.svg": 343,
        "./arrow-right-white.png": 344,
        "./arrow-right.svg": 345,
        "./bao-logo.png": 170,
        "./blue-loader.svg": 171,
        "./circle-grey.svg": 346,
        "./circle.svg": 347,
        "./coinbaseWalletIcon.svg": 118,
        "./dropdown-blue.svg": 348,
        "./dropdown.svg": 349,
        "./dropup-blue.svg": 350,
        "./ethereum-logo.png": 351,
        "./fortmaticIcon.png": 119,
        "./immunefi.png": 172,
        "./link.svg": 352,
        "./magnifying-glass.svg": 353,
        "./menu.svg": 354,
        "./metamask.png": 173,
        "./plus-blue.svg": 355,
        "./plus-grey.svg": 356,
        "./plus-white.svg": 357,
        "./portisIcon.png": 120,
        "./question-mark.svg": 358,
        "./question.svg": 359,
        "./spinner.svg": 360,
        "./token-list/lists-dark.png": 174,
        "./token-list/lists-light.png": 175,
        "./trustWallet.png": 361,
        "./walletConnectIcon.svg": 121,
        "./x.svg": 362,
        "./xdai-logo.png": 176,
      };
      function r(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (r.keys = function () {
        return Object.keys(a);
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 155);
    },
    167: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    168: function (e) {
      e.exports = JSON.parse(
        '[{"name":"TokenPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"eth_sold","indexed":true},{"type":"uint256","name":"tokens_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"EthPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"tokens_sold","indexed":true},{"type":"uint256","name":"eth_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"AddLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"RemoveLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_spender","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"setup","outputs":[],"inputs":[{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"addLiquidity","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_liquidity"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"removeLiquidity","outputs":[{"type":"uint256","name":"outA"},{"type":"uint256","name":"outB"}],"inputs":[{"type":"uint256","name":"amount"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"__default__","outputs":[],"inputs":[],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"tokenToEthSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"getEthToTokenInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getEthToTokenOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"tokenAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"factoryAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"}],"constant":true,"payable":false,"type":"function"},{"name":"transfer","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"transferFrom","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"allowance","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"constant":true,"payable":false,"type":"function"},{"name":"name","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"symbol","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"decimals","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]'
      );
    },
    169: function (e) {
      e.exports = JSON.parse(
        '[{"name":"NewExchange","inputs":[{"type":"address","name":"token","indexed":true},{"type":"address","name":"exchange","indexed":true}],"anonymous":false,"type":"event"},{"name":"initializeFactory","outputs":[],"inputs":[{"type":"address","name":"template"}],"constant":false,"payable":false,"type":"function"},{"name":"createExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":false,"payable":false,"type":"function"},{"name":"getExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":true,"payable":false,"type":"function"},{"name":"getToken","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"exchange"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenWithId","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"token_id"}],"constant":true,"payable":false,"type":"function"},{"name":"exchangeTemplate","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"tokenCount","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]'
      );
    },
    170: function (e, t, n) {
      e.exports = n.p + "static/media/bao-logo.a4ad9ffb.png";
    },
    171: function (e, t, n) {
      e.exports = n.p + "static/media/blue-loader.904b44c2.svg";
    },
    172: function (e, t, n) {
      e.exports = n.p + "static/media/immunefi.15fa2b71.png";
    },
    173: function (e, t, n) {
      e.exports = n.p + "static/media/metamask.023762b6.png";
    },
    174: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    175: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    176: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAjBUlEQVR42ux9CZRcVbX2t8+91V1VPc9D0hk6SWckYQgk8NBfQAGHx+/0Ago/MikCCiiDD0nADCSgwAMRmVREQMHnxBBBQQEZwpiQhJChk3SSTro7PY/V3VV1z/5X3Xuruzo0EpJb1beqznbViitk3bp1zvnO/r6999lHQJkyZR9qCiDKlCmAKFOmAKJMmQKIMmUKIMqUKYAoizWur/dxc3M2v/22R42Ge4zUEIwRIJqbsw3Puyehd/3x1L/zGBhtUyCDPmg5LeypXEv+We+Hs457MjN35jY1WgogaWOD3e9P83T99TzufvnrHGyeBA4B5AFI2NMhATbMD2lZQfin/wP5X/i16Jz5BE2bNqhGUAEkNYHRs3WG1v7YldT50tkse7JBmQBpHzEFEpDBiL8BZVavRdFX7xD1Ex+j+fNDakQVQFLCenpqS3wdf7yaOv/2bQ735kLzHZr04yAgwyBfzVtcfM5SveT01Wp0FUCSV2PU1Xml77VvofWxqznYVAXhs2nU4T44AhQJkbfwyXDR+Usz8uetVaOtAJJUFm5+5jRqe3QFB7bOh4hQKd35L5EBEHkDVHTG3VR4zq2UXd6sRl4BxNU20FU7JaP1V0tl14tnm0MrMuL8jRGN0g/yVOxB6Vkrl/186wNLly6VaiYUQNxFp5qasqR8+nK0/Pb7bPQWm3QqkUPLYVPMk3/OS7L84iWeggUvq1lRAHEHnWr7+6m0/8FVPLD9aAgvAG0MkToIIi3MeSc/ECq/eJXPN65ezZACyNisxf66Sdx431LZ+dK55l9EtIYrXowtfeIpbULpopvE3tn3qbCwAkji1l99vU/qz12Glj9cy8GWEmh+dw6jSbsGIbLnvGKUXXK9p+C4f6nZUwCJq4U61nxKNN63igMbF1phW939Ly0HQIIk5X36V1Rx/gryVe9WM6kA4jCd2jmRG3+5VHa88A0zcmRqjWQyCRj9oIySRpSetUpsrrqHTjoprGZWAeSwrK6uzjvB++KlaPnDNRxsLnctnTpopIcs2pU151VZ8a0b9fwT/qFmWQHkkCzc/s/PUcMDN/DA9gVxS/aNIe0CNIj8k35JlZcuI1/lHjXjCiAHZQNd703JaHl4mex85esghllUmJIWoV0DEJlFjVx01k3iVe+9tGiRoVaAAsjo7KO2NlP6X7oCLY9fw6HuYquoMA2GZyjaNfc1WXrej/SiE59Tq0EBZCSd6vjnGbTv/hu5f6eV7CMt/QYhQrtIsMg/+ZdUcfFS8o/fq1ZGmgNkoGvT1Iz9Dy2T3a98DUQAZaS7H7WjXUWNKD5zpeicfz/Nnh1UAEkza2ho8JfJpy5H6x+v4VBXYdrQqY9FuwYgsua8LssuWKIXfeJ5BZB0oVOtz3+RGu5fygN1c61kn6YA8W9oFxEZVPCZB6nim2lJu9IGIIPdm2s8jb9YJrtfO9M8uJT2dOrj0K4AyFPYjLIzV4qO4+5JJ9qV8gBpa2vLzQ88fiVa/vQ9NnryIfxqzR8STgzLo2TNfp3Lzl+sF3/yHwogSU+nnvu/1PDAch7YdUTaRqfiQrtgUMFpDwbHnbfS651UpwCSbHSqp3aWp/HnN8qu1xeZDRKGStFZLXAnlgxLq6Q+o7AVxYtWiq4Fd6cq7UopgLS378jL7119NVqfupJD3dlW7ZSy+AHFSjJSzuw1svK8JXp+6tGulAFIuO3vXxL7HljO/XWzVXQq8bQrspSo+NSHqOj/raC8qdsVQNyiHXu3HMF771nG3Wu+COgJaJSg7ENmwo52FbRy6VkrRe3ku1KhpD5pAcIddfnc/cQ1aH3qCjZ6shLeKEHZh0yMTbuyZ78uy8+7QS/61HMKIAk2o+XZRdT4qx9xYMdMU2coOuU6ZwIeADhCu077TbD47GXevGk7FEDiTqe2zuU9P1vJ3W9+3gSFolPJQruauexrq0T/ifckWwPupAAIt7fncfdD16DtqSs43JdtHXlVdCr5aNfMd2TlN5bohac8owDiFJ3a//TZ1PSbxdy/c4aZBSd150/Smhy0ol1Fn3mIis9eRvk1OxVADotO3bWKu9/6HISmaqdSkXaVn32LoM/cS5WVAQWQgx2+zs4C7vjFtWhb/V02+rOSr4OIsoOb6Ght14x1svz8xXrJyX9VAPkoOtX4xLnU/OgNHNg5xcqCKzqVHrRLgIpOeYiKz/8RFUzepQBygAU73zpK2/fgCu5+53MQuqJT6Uq79NxWVJ57s9BOvZfKy/vSHiDd3fuKstsevY5bV1/GxqDXSvYpS2/a1Q/Kmv42j7vger3o5L+nLUDCzX/7KtXfvYqDjVMVnVJ2IO0igqTiM35K+d+8kYqKutMKIEbd3f/NTY+sMkO2KtmnbFRvIgGjD5Q7b01o/A/O8Y5RSDjhAJHbb75FNv/xWpXTUHZwu2kA5C3bKmb87GTyT2hI9NcndIUaO++8zgSHlqXAoezgTMsCDzZP5+03PM29TaUpC5Bw89++wk2/W5n0DaCVJZprAcIH2bvpKK6/+YGUBEgE+bTnp3eaIVwlxpUdkifJhux47Qyj4U8XJfJrE9KynBsfuIEHW8ZBz1LHwpUduloWmcC++2/ivt2rKWtiY0p4EB7YXc3tL1xkdi9U4FB2GEwrsp9zsK2U9//5ipShWNz45EUc7s1U1EqZMyvWB257/lzu3F2Q9ADhpqYsbn9hkcp1KHOOamngUEuFDLz92aQHSDij7kgebJmSUrczKXOFIKHuN85IepGuda8/XRqDAGWrOVXmID4ywb1bTuSu+kLKq2pPXg3St2OaaqigLB7LloNd4yACpUnrQbihwc+Nlx9lngaEVHOqzOEFFoTR+/5sAFuSk2Llajm8t6vSXdErjhsnduEKSu3fyhIU7piS1BoE7KKCK5PqkXXmwFGTVtcO1wQi2H6fOEQOhQ7IkEt+pwEKdlYlN0Ais+WG5CCHQZ5c0PRloMxyZ0Fi9MLYthwI1GLsD3yxdXVa1bdApac76zTIA9nwOHjf79xxREGaXkRPdoC4xHvo4GALsPdR0MxbYF7Y6eTGOm0xeNOVYKPHXEhjt6kGQKVngCZc4Pyzu9aBm56Eu0L2zPEPB6RN4CMT3P4ieOftzuMvezpoyrVmq03zoM+YgKMflHsURPWVzj87sBty64/MA0zpdkwhvX6t5ods/F9wwx+cB0nxSRATLrKvAkgwr5SDJnUUNUsA3eGcU7gHsnY5ONiUlqc/06xAigDhgdz9M3DH684/vepciNLPAeFAQvUVhBdi2vWAd7zjDEbuuBXcswHpehlRXAklmZSD3BUGjWgEOQiuvRl0xF2Ar8pRAFL1VaD+RqDnXWtRxTPaal6FFgZNuQrIP9Z57NX/Gmh+FqRl2fPoJvlhritSHsTxgbVKFTDYBLltORDudXjLyYaoWQzKrASMYHx/R7gfVHEWqOKLzj++5Tlw/a+Q7veupG8NemR3714P3nGb88/2jQdNvc7i7I7nXaKivA9U+AnQ5Eucf3bPZvB2e1zSvHdAev96zQ9ufga850Hnn11wLGjydwAZdF60ywHAPxVUc53zwjnYanlWo3tsQ9YKIC4R7VqmSSW45Xnnn17xZdC4RWZ+wjnuEwL0XCtilVHkMPCCkNtWAYEdUE3DEyDSrau4XO9GTLEboRTkHQ/kzHAWJJO+Aw7sBdpfdSASJM3IElVf7fh7mtNV93Og/WWzQYLr542VB0mgI/EA4S6LWgy2OjzCHohp1wH+ajtHchgrwhgAVV0IKv208+ut4U/ght+bfaiUKYCMMhJeoG87uHal3ZLfQcssNiNb0HIPvdgvQtNKPwuaeL7zv73jbXDdz+wyEtWzTAHkQ9lWFrj9FXDdPc4/O3cWaOrV9nZtfHxw5M6FmPp959+rfw/ktpusYII6Gq0A8tEg8YP3/d6kHI4zudJPgyac//HKUTgIZJZDTL8B0HOcfaFwH3jrSmCwUTURVyL9Y+wZpIN3/gzkrQIKnc1QmxQpsMcML38k37fPdYhpP3Q4429NDm+/Hdy1znqPZJsn831JVfOOjWjXh0Oe/Xudfjho2tUmZYLR/+9XgAyBJl8GFB7n/Pra8zB4/+q0rbFyBUA4mT8iEzzYCLllGRBy+P4WPRti+mIgswwsg6N/vxEwcyg07ivOT0zLi5C7fgHWvGBQ0s6R0iBj7cM1H7hrPWTtbc5PiX8ixPQf2uUo4Q+Icir4D1D1pc7/rN5tkNt/YrMTNf0KIIe92/vBzX8D7/61888uOA6i+jtmRa51OI6sXIe/GmLG9VazZict2A5jy3JwsEOVkYy9SGeGAYakRFQlx1OQAOSDrHsQwjcBVHqKs0+v/DJE3x7I+sfMshdoeRb9crqMhEOQW28BemotUZ7snZgi60oqD+ISjAgTJ3LbbeBu59sw0ZRLQUUnmOXrouYqM2fi+Ha18wFw60sqU+4eD0IEMvvsICXuPSAdCHdAblkObd6dZnbcuW0qA6Lm++CST8anjKTxScj6RwDNi9S5g4IT0pBQxP9HpNDHLkeRW1fZZewOmm88qDIOB5861kFu/+lwX7CUmhNFsdxnmh/c+jLkznvc/679DZBbVlilKqqMxG0UCynDrj4IEh94z2Ng30TQuC+68x3DAcjNK6xEZzzPxo8lw1IexK0mzDacEerCHWtduXpk7R3gzrdUplwBZAxFuxwAm7v0PnfBY/ej4MYnVMRKAWSsRy8T3L8P8v0Vie2F9e/A0fIyZN19dpJRne1QABlzFecHd74NWXv72L9L3w7IrTdb/bLUxUXJINJd2DguLqI9G9zwFNg3CTTpnLF5h1AX5KblwGA70uLKbVaZ9GQSJGaORNbdDzS/lPivl2Hw5lvA3ZstcChTAHEfRqzuKHLrT8C9OxK7mdb9ArL5H4CuRLkCiKtHMwMcbAe/vxwIdiQGHA1/hdz9sPIcCiDJoke8JtWRW2+N+10h3LnRzHeY3ovUVCahSEfqi8VRQeIH7/8HpHccxJRvWXf7OW19uyxRHu6zQrrpNs6cmP1dbTvxEu2RXb3pGbMhXVzWR9sas3DS8UNVyhRA4r+7GWamnaZf5fzBpygEx30JVHaa5UGUKYAkle+XgxDVF4FKPxVXrSNmXgvKnWEe01WmAJIcFg6AKv4zMQnDjALQrMXmn+65v1yJ9IOnATLNRLoRAAqOgZj+vYRVD1DONIgZPwBvXAJImT7RrAQFgJQHccrkIOCthJj1Q7M+K6EhgdJPgqovtKkWq7lQAHHbbhY2o0k063rAP35MXoEmnwsa959KtCuAuM51WC1Cay4HFR0zpm9CM74HFMx39kYrBRBlh2WhflDVmaDxLjh6q/khZl9vUj3rhl11HsTVIj3ly93DfaCST4JqLnPPO/nHQcxeDLn2GqtjY6o2a0jQve3KgxyqRQRx9hTQ7P82r1lzlRUeDZr+XSv0y1LNlWs9CDGlZEEWhwBPDsScxUBmkStfkaq+CATqwbseNrvJp6ALSYgb0RPwI1ILIGyYuzLNuArIm+nqV6Vp3wb6doNb/pWCZ0VU4zh3TooxAJp8HqjiM+5/XeExKSBlT1XlKK4ESIp1HkUoACo/DTTlAufHquU1yHevt4S1k5ZZDJqzBNBzASOkOo8qDxIvUd4Pyj8CNOta5zuGBPZCbr4VaFgN3na38++eN9N+byjRrgASB5NB87o0cyf2OH3TbADyvRVmH11k5IN3Pw6u/4vzeqT8lJhyFGWuEOnM1r1JSS/KhQdi9nVA9iTHOajcfDu4fe2wiBY6eOtd0LImmOFaR0FSfR64bw+4YXVKiHZKwPJSHuSjNJQMQUy9BFSy0PnH73wYvO+pkYvVbmlqbFxhhmmdXVEEMfP7oPy5tidRmfYxFumU3J9wADT+K6BJZzo/NE0vQdb+EhC+A743sm4zgf5GyI0rP+Kq6EMwM3+zxKSMZjlKMs+Pahw3lqI8ACo+AWLmd51/dnct5KZbrELHDzu/ofnA7e9Avn87HGcS2RMh5lxn37BrqLlWAPm44BgAsibZi8jpm2Y7IDcuB0KdH12iomeZFIzrHnGevxcvgKi51D6JqM6QKIAcNPcJWRf9H7EE8JU6HA0LQb53s3URqHlf4EfL0AhA5fb7wftfdB4kE78KmvAVdYZEAeRgwSHNY6uWkJ3t/OO33Q9ueuHjRZDMlqYMfu/HQPc25xfA9MtAxce75voGty1flUkf+rC5SMTkb4DGne78UOxdDVn3qH0dGn28d6MM8/J/ueEmINjp7ItpXogjrgf5JwLhAZVJVx7kQyzcB6o4FVRzofPPblsHufl/Dq9FaES0d2+BfO8W64ivk+YthZi72Kr6Vd1RFEBGjVjlzYGYE48ykgYYG28Cwv2Hf24kItqb/gm59T7nx6DgCGizrrJopipHUQAZFs6DoIwSawf15DoMvH7ICDgCewHNoWhYxJPUPQre+7TzYzHuNIgp31Bn2mP3pIRoENeKcsMcAjriOiCn2nnsvX8nuPUti7qwg3sa6ZDv3wHNPx4oPNLZyNa0C0F9u8ENz7u7HEVpkASMsBGEqLkYVHqC80/f+Vtw/RPxWWSkW94pItoDjQ4/W4OYfS0ob5bzWXxFsZJMlE/4Mqj6686DY/8rkNvuszLV8ap3EpngQD3khjiUo2TkQcxbDGSWWJXMCiBpKMqLFsSpjGQH5MYE3TSr+cFtb0JuusN5zpEzBWLODyxvlcblKCIdRTn8EyDm/hDQvc4+O9gJuWE5EGxPXKcT3Q+ufxK88zHnmVzZf5gUFMZg2pajxFGkM8P8n4v6YpktQrOgzb0e8Fc4DLww5MYfgzu3WLojYevJLkfZeh9E9kTH9RRVfw3Uuwe858/uEu1mNW/8u5qI+M+eWwbULiOZdQVQOM/5x2/7Bbjxn2OziKI37G642aR4ji+SWZeDiuZbuRxXGRnJC5BQZpA0X6d7XLOEmHExqOrzzoNj7zOQOx4B9DG8aTZC6QZbIdevAEI9DvMMH8T8VaD8GS7KtAuwJ68peSnWc8/1oLJoBwZbx8VdrH7kCjZAGYXWDbR7nnCWT4cCFjjM3zjGkk7zgbu2Qq5bCio/0eHN2mMKd/TscInz0MAZJVuRzBRIrlt6v9z79DfdwV2tYkTnyyjIug/EBIgbvCVZ51niEZ7VMu3zMTz2c8kS2sK75lDhkZuSVKQDnD/3Vez96zddsuXEWR+4hUqytZC1zNT9nTIM8ldsRrB8V/JSLADh7Emv6bpfsjSEuuhemXMAMUDZ1e9SeXlf8op0ABl6eQjZ04UqoVbmLBnQgYJ5GYkJBcTTMo0wFc/vVN5DmXPeIwTyV4GyZjyd9AAh//i9lDfjCWRNSvuaHmWOIQRUdCyQ4X0zEd8W/+uHNJ8U5Z8G73jQ1neqWZmyQ40PBIGsqVbHSY0yk59imT8qpFPedKDwOKsOSpmyQ1pHEiAvqOJ0kJYBsE+mBkAg6sAGRMXJgK9KUS1lh4IOs46Oyk8CZU8EpNEGcrpcYKwA4it82ES/7geNPwPw5Fu9p5QpO1hwGEGg6Hiz2Z3Vt0x/kfJrdqYGQEjTmMi6tsxfAZrwXxZIlCdRdhCC3FwnBceAKk6x5KsZERUZiXqD+ANkf3gXaRn/gwhIzBBdBCSLLLplDFr9qBjqoz4jP+YNvQQqPQk07jRz+VgrVnSAfCsTBZCEhJS4uXYKgvu2mz/asD1HqB9y/7+AzvUADKsYTpkys+1QCPCWg8pOAuVUAySt5KDmBbTMn1DlCdemjgeJWEuwHrrndvNH2mcXoHkgKk8BVX0F8FZaES7Vjym9tUaETgkPUHwixMQzQTmTLLBE1oyIrB3RDm/OXYl8q4QlJbhhazG4eSOMYLkJBhm2PhFOaQyC29aBO9YB4V77uKrKl6QPNsLmfJu38ZYcD/KV2ufgBaDpluTQMiJ/JtR7INGrkPe/vphDg8spQrMiu0UEIENtNDXwQBu4dQ24xy7zJ10tnlSnU9KmU8ULIXKnwBIb9r0pEdod2SxFBljXeyizfCYV1exLXYA01pYALXfCCH7NAkho2JNEu4AwQ3ZvB7e+Dgw0WyBRtVwpSKdCZlcWKjgKVHQkSPfZm6WICHGLUomo98jcBS1zCZUd+0ii3zThPIbrNxVCtL8GNqYPeRHzE3GpYbubuW7d/mrSrnetvk+KdqWGSZtO5U41vQb5SixgMCxgROZe2JrD9B46oGd9icrm/2UsXndMVhw3rp0I7vs7pFFjeZHQsBeJcE8p7Zh3hHa1glveAPfUWiFhoWhXskenRAQYOdVWiMgMzAibUmkWOCLUSouAQ+sFZdxBlccvGavXHrMtmds3TcBA901sDJ5DJiiCNjiMYaBADgXaZM8uEygYaLCvEdDUokum6JSWBSo8GqJwntWPLBqgiWiOIXDotgfxRP5uLzJyvkClR68fy7cfU87C+3eWgTo+i1DfEpbhaoqK9ghITFcs7USitAbPGITs2ARuewcId8W3tacyx6JTyJ4KYUanimOCMhTjMaLUygaIpr0NkXMelcf3vLnrATI0jk3vLIIM3AUpS4fplhHjUYzhs9Ckgwc7IVvfArret/6bSjK6TWjY0akyUMnxELnRzvnGSDplAkQMeQ0W2n7SfFei/NjHySWH/F2z/XLLuzUI9t0FhI+ClCVWqUHY0iM8Cu0iAe6ph2xZAwT2Hd7tTcocxEbQik4VRejUXJtOGTaVIjOcf6DXYKGBhPYGPL5LqWT+Wjf9HNfxE1ObDHZdzUbwuyTtncgESIyIH6JdGmAYNu16Cwh1q2jXGNMpypkGKllwEHRKs+mU/hagvZjoBGDSAmRovBteWQbmkyDDJw7RLA7F0C62vYkd7RrsBre8Be7aNKxZlCUoOhWOoVOTAeIPRqcif0ZBYYpwEzS/wrhPXEQu7ozt+q2WG179OWT4kqGsKxsjQ8LmRLC9Swlw9y7IlteA/gYM1X6pi/LjR6f0LFDBMRBF8wA9c1iYW2XptvAeDt+adIq0R+ApuA13/34DLV3q6gK8pOAi3LZ2JoKBq9gwLiRpe5KokJe2gI8KeTPJOAjZth7c/o51Sb6iXfGJTuVOhyhdAPKOQqeGQKHFgER/GUJ7Bff+bbHbgZFUABmal8Y1N0CGPwFpfNoS8OEDhPwB0a7+Vsjm160L+IlVbZdjdKocovQEUJROyWjt1OjRKQgRBok/ofITZ1GSufOk3Fa54dXfgMP/BWl4rZxJKIZyRSNebE1SxLl07bSiXQNNqrbr0Ebcrp3KAhUfAyqcBxqVTtngiEanSAMJ/S/w5F+Nu/+3Llm8RtIDxIp2bazCQOetLOUiGgJJeLhUBTKGdnnMuy1k+wY7yaho18HrjJAJAMqdDipZCPIVxdCpaCbc3nSEPgwSzfMStMzn0V3wE5o2LWnb2ST1CuEXXtAxw3cFZPhUlqFTaUjIhz8k2uUB97dAtrwJdG+xo10qyfihdEqGQL5KUOnxw3SKhwMiQ3QqSqnMsdTaWfPcSwatoKrjk/6a3JTYQrm2NhNZjY9C8klgo3DUTHw02mU2kBDg7jrI5teAQMOwiFR2AJ2aD1E094DolDasN6JhW/Pchvl3z8KbexEVHbkvVUYjpTgG799YhnDHQ2A+bUjAR2u7TF0iPxDt4raNkK1vA4Y6yThEp/Jm2Mm+GDpl6gwaXWeQ9ioysldQ6dHPptqQpNxq4OZN2ZC9Z0IGz2HD+JRVKXwA7UKUKlhA4YF2cPObYLO2Kw1p11B0qgKi7ARQ7qSY9iKx1bZiBDggtGYg4x6Es+6kiXM7UnFoUna75LbaXAzsfwiQx0KGxyGaPzG5dbR0JWYRgIZpV3+jRRtSPtpl0yk9C6JoPihKp8xSdBoZuh3yHBk2vRLPIqPkAiqZ2ZjKI5TyfMJqFrH/z2CcOOxJRqFd9mEsNgbBrevBrTHRLkrBYbJP9iFvJkTpcTadCtlLwo5OiVgR7rHplL4Onuxrqeyo59PBuaYF4eb2t/MwMPgAYMxnQ04mEyBW2QqzAbMokmVMtEsH+ttgtK4DOjYPt6NJmehUGMiK0KnjY+iUHBm2HQEOM4ixF1rGvUDx/VQxrSVd2GdaKVLet7kI1Po0pFw4HOEKDedOhmhXTEl9bwNk0xqgd1eSn2SM0qlsUMkxEEVHjEKntANO93mi2uMZ+PIvpsIj6tMtbpF2IRtu35EHo/soBPtuAxtHD5erhEeeOxnKxmsmkGT7FnDzG0CwM/miXdFGCQUzQGULQN7CUZJ92ihhW20rvP5LqHj+C0hTS9uYJu/eUAC/MRehnrth8OyR+iS2UjiGdg12Q+5/A9yxyfrvbqdd0eiUvxKidCEob7LVxnNEsk8MVz2LmHMaumcFZOGdVDm9FWlsaV9rYZasDHYthTT+D6SsHu7TZYys7YomGSHA3Xsgm14D+vYNc3VX/SibTnmyIYqPAZXMtToTmjkgGvYYH2iWEPmIp6Hn3kKl816BMgWQoTXVtH4yG12riXnmMEgOOHcyBBQNMELg1o2QLe8Awe5o71gX0KmQCeIInRJlCwB/oU2xMEp0Sh9u0EaiDiLjbqpYeJtaDQogo4OkdUsOwoOzYHT9Diwnf8CbyNgDWrEnGd8Ft78HGIGx0yfRd4zQqbLjQfmThrvCHEinRpzT0BlCvwPesqVUOKVLrQIFkI9eay3v1iAcuAhG6CywrLJ2ZcM8/z6ygQQPNSLgvmZwRJ901dp5Rz1x0SkjQqdyrehUyRybTsWWosdkwWN7TwnxB2i5t1HZ3NfVrCuAfPyl17Z2Jg/0PgvmCVauJHRANj4WKJpVwdJRawGlvzn+tMusndLt6NRxIG/ByDaeEB84C24deaWd0Lx3UPmCu9QsK4AcJkjemwkjeAaM/rkIB78+FBmKbXAXzZ1EW6OGBiBbN4Bb1wKhPquNppNDbX8n5VSByhaaf34gOiViolPD/W5DIO1B6PlXUensXjW7CiDOgqVxzbdhBL8HljXWuXjjgCSjHHHkF/1tkPvfsbLxkX9/uPok2rDCWwIqnQ8qqrEAORSdij2jIYboFAsdJLQ/IDPnViqa94aaSQWQ+IGk4W0/ELiNpTyPpPSOrO06MNplFUGiuwGy+R2gZ2dM/oQ+PjAy8kHF80DFc4AMn12ZjJiGbLHVth5whH4J7ITmvx33PH1PMh55VQBJXiF/FIK914JDZ5keZCjaFR49LMxs5k/Qsh7cs9vSD/8uhxJbRJlZABTMhiieBWTm2B4DMTkN/YOh24gH0Ty/h5Z3oaJTCiBjA5IbbxS45PMXwBi8A9LIGtGOKCrkIUc2kYj8374mcPsWoLceCHYMt+aMBYeeDfhKQfnTgPxqUEbWAcAQMSf7YrSG5gFDPEGenIexJ/QkzZ+vLqVXABljoOzfcARk9xVsGF8nZp91lUP4gOsc5PBBLbPbCgHhAXCgGQj2WW1TI+DSs4CMbMCbD/IW2cCJAuOA6wJiS9EjOoNoK0hfg76SbydzowQFkFQFSvObpyM8+AOwsRCG4R0JklGAEj36e2CrKPPcfPTf0jAocMDJvqGGbJ4tIHoDIucyKp/Xp2ZCAcTdQGl65wsc7nucwH4rGx8apVI4JuI1dLIxZkqiAv8DR16jl1ua0SmDSD4KvfgypTMUQJJNxNcgFPgepLEQHD5y5ClGW5sM9e8abVZivUZMUzYr6ccQ+moI/bdUvuB3arQVQJIXKGZYePB2yNC5YOkb3ZNEvUgMOGLPaYwAiNgAzftjKjvuUTW6CiCpA5TWDdMR6rkKRvhsMPtHnDeJgsScDh6lJF0HBL0H4bsDobLfUlVVvxpRBZDUBEpb7XiEOj8DOXA5pJwJ5szhFjsY1h0RlyK0IIT+R5BoAWfeRBVHtagRVABJE+rV4EdGdz6Mvs+Dw9MhQ58DYwKEWA3S66H7Hwdy91HxhAY1WsoUYJrWZ3HvjlI1EsqUKUsaUxdlKFOmAKJMmQKIMmUKIMqUKYAoU6YAokyZ++3/BwAA//+rdGfaL2HVfgAAAABJRU5ErkJggg==";
    },
    207: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_factoryV1","type":"address"},{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
      );
    },
    208: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    241: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    242: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    243: function (e) {
      e.exports = JSON.parse(
        '[{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_approved","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"ApprovalForAll","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_operator","indexed":true},{"type":"bool","name":"_approved","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[],"constant":false,"payable":false,"type":"constructor"},{"name":"tokenURI","outputs":[{"type":"string","name":"out"}],"inputs":[{"type":"uint256","name":"_tokenId"}],"constant":true,"payable":false,"type":"function","gas":22405},{"name":"tokenByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":631},{"name":"tokenOfOwnerByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":1248},{"name":"transferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":259486},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function"},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"},{"type":"bytes","name":"_data"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[],"inputs":[{"type":"address","name":"_approved"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":38422},{"name":"setApprovalForAll","outputs":[],"inputs":[{"type":"address","name":"_operator"},{"type":"bool","name":"_approved"}],"constant":false,"payable":false,"type":"function","gas":38016},{"name":"mint","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"}],"constant":false,"payable":false,"type":"function","gas":182636},{"name":"changeMinter","outputs":[],"inputs":[{"type":"address","name":"_minter"}],"constant":false,"payable":false,"type":"function","gas":35897},{"name":"changeURI","outputs":[],"inputs":[{"type":"address","name":"_newURI"}],"constant":false,"payable":false,"type":"function","gas":35927},{"name":"name","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6612},{"name":"symbol","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6642},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":873},{"name":"minter","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":903},{"name":"socks","outputs":[{"type":"address","name":"out","unit":"Socks"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":933},{"name":"newURI","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":963},{"name":"ownerOf","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1126},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1195},{"name":"getApproved","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1186},{"name":"isApprovedForAll","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"arg0"},{"type":"address","name":"arg1"}],"constant":true,"payable":false,"type":"function","gas":1415},{"name":"supportsInterface","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"bytes32","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1246}]'
      );
    },
    244: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'
      );
    },
    269: function (e, t, n) {
      e.exports = n(435);
    },
    281: function (e, t) {},
    342: function (e, t, n) {
      e.exports = n.p + "static/media/arrow-down-blue.cd061363.svg";
    },
    343: function (e, t, n) {
      e.exports = n.p + "static/media/arrow-down-grey.c0dedd2f.svg";
    },
    344: function (e, t, n) {
      e.exports = n.p + "static/media/arrow-right-white.337ad716.png";
    },
    345: function (e, t, n) {
      e.exports = n.p + "static/media/arrow-right.d285b6cf.svg";
    },
    346: function (e, t, n) {
      e.exports = n.p + "static/media/circle-grey.ed2a1dad.svg";
    },
    347: function (e, t, n) {
      e.exports = n.p + "static/media/circle.2d975615.svg";
    },
    348: function (e, t, n) {
      e.exports = n.p + "static/media/dropdown-blue.b20914ec.svg";
    },
    349: function (e, t, n) {
      e.exports = n.p + "static/media/dropdown.7d32d2fa.svg";
    },
    350: function (e, t, n) {
      e.exports = n.p + "static/media/dropup-blue.b96d70e1.svg";
    },
    351: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    352: function (e, t, n) {
      e.exports = n.p + "static/media/link.50c67f3c.svg";
    },
    353: function (e, t, n) {
      e.exports = n.p + "static/media/magnifying-glass.67440097.svg";
    },
    354: function (e, t, n) {
      e.exports = n.p + "static/media/menu.4f2c4440.svg";
    },
    355: function (e, t, n) {
      e.exports = n.p + "static/media/plus-blue.e8021e51.svg";
    },
    356: function (e, t, n) {
      e.exports = n.p + "static/media/plus-grey.d8e0be7d.svg";
    },
    357: function (e, t, n) {
      e.exports = n.p + "static/media/plus-white.37bc59a1.svg";
    },
    358: function (e, t, n) {
      e.exports = n.p + "static/media/question-mark.1ae4d9f4.svg";
    },
    359: function (e, t, n) {
      e.exports = n.p + "static/media/question.a46e8bc1.svg";
    },
    360: function (e, t, n) {
      e.exports = n.p + "static/media/spinner.be00fc4a.svg";
    },
    361: function (e, t, n) {
      e.exports = n.p + "static/media/trustWallet.edcc1ab5.png";
    },
    362: function (e, t, n) {
      e.exports = n.p + "static/media/x.5b8e2186.svg";
    },
    435: function (e, t, n) {
      "use strict";
      n.r(t);
      var a,
        r = n(40),
        o = (n(271), n(0)),
        i = n.n(o),
        c = n(100),
        l = n.n(c),
        u = n(18),
        s = n(26),
        d = n(17),
        m = n(13),
        p = n(1),
        f = n(166),
        b = n(231),
        y = n(140),
        v = n(232),
        h = n(233),
        g = n(6),
        E = n.n(g),
        O = n(9),
        A = n(28),
        x = n(8),
        j = n(11),
        w = n(14),
        k = n(15),
        T = n(234),
        C =
          ((a = {}),
          Object(m.a)(a, p.ChainId.MAINNET, void 0),
          Object(m.a)(a, p.ChainId.ROPSTEN, "ropsten"),
          Object(m.a)(a, p.ChainId.RINKEBY, "rinkeby"),
          Object(m.a)(a, p.ChainId.KOVAN, "kovan"),
          Object(m.a)(a, p.ChainId.XDAI, "xdai"),
          a),
        I = (function (e) {
          Object(w.a)(a, e);
          var t = Object(k.a)(a);
          function a() {
            return Object(x.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(j.a)(a, [
              {
                key: "activate",
                value: (function () {
                  var e = Object(A.a)(
                    E.a.mark(function e() {
                      var t,
                        a,
                        r,
                        o,
                        i,
                        c,
                        l,
                        u,
                        s,
                        d,
                        m = this;
                      return E.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.fortmatic) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (e.next = 3),
                                  n.e(1).then(n.t.bind(null, 443, 7))
                                );
                              case 3:
                                if (
                                  ((t = e.sent),
                                  (a = t.default),
                                  (o = (r = this).apiKey),
                                  !((i = r.chainId) in C))
                                ) {
                                  e.next = 10;
                                  break;
                                }
                                (this.fortmatic = new a(o, C[i])),
                                  (e.next = 11);
                                break;
                              case 10:
                                throw new Error(
                                  "Unsupported network ID: ".concat(i)
                                );
                              case 11:
                                return (
                                  (c = this.fortmatic.getProvider()),
                                  (l = new Promise(function (e) {
                                    var t = setInterval(function () {
                                      c.overlayReady &&
                                        (clearInterval(t),
                                        m.emit("OVERLAY_READY"),
                                        e());
                                    }, 200);
                                  })),
                                  (e.next = 15),
                                  Promise.all([
                                    c.enable().then(function (e) {
                                      return e[0];
                                    }),
                                    l,
                                  ])
                                );
                              case 15:
                                return (
                                  (u = e.sent),
                                  (s = Object(O.a)(u, 1)),
                                  (d = s[0]),
                                  e.abrupt("return", {
                                    provider: this.fortmatic.getProvider(),
                                    chainId: this.chainId,
                                    account: d,
                                  })
                                );
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            a
          );
        })(T.a),
        S = n(124),
        R = n(125),
        N = n(59),
        U = n(29),
        B = (function (e) {
          Object(w.a)(n, e);
          var t = Object(k.a)(n);
          function n(e, a, r) {
            var o;
            return (
              Object(x.a)(this, n),
              ((o = t.call(this, e)).code = a),
              (o.data = r),
              o
            );
          }
          return n;
        })(Object(R.a)(Error)),
        P = function e(t, n, a) {
          var r = this;
          Object(x.a)(this, e),
            (this.isMetaMask = !1),
            (this.chainId = void 0),
            (this.url = void 0),
            (this.host = void 0),
            (this.path = void 0),
            (this.batchWaitTimeMs = void 0),
            (this.nextId = 1),
            (this.batchTimeoutId = null),
            (this.batch = []),
            (this.clearBatch = Object(A.a)(
              E.a.mark(function e() {
                var t, n, a, o, i, c, l, u, s, d, m, p, f, b;
                return E.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.debug("Clearing batch", r.batch),
                            (t = r.batch),
                            (r.batch = []),
                            (r.batchTimeoutId = null),
                            (e.prev = 4),
                            (e.next = 7),
                            fetch(r.url, {
                              method: "POST",
                              headers: {
                                "content-type": "application/json",
                                accept: "application/json",
                              },
                              body: JSON.stringify(
                                t.map(function (e) {
                                  return e.request;
                                })
                              ),
                            })
                          );
                        case 7:
                          (n = e.sent), (e.next = 14);
                          break;
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(4)),
                            t.forEach(function (e) {
                              return (0,
                              e.reject)(new Error("Failed to send batch call"));
                            }),
                            e.abrupt("return")
                          );
                        case 14:
                          if (n.ok) {
                            e.next = 17;
                            break;
                          }
                          return (
                            t.forEach(function (e) {
                              return (0,
                              e.reject)(new B("".concat(n.status, ": ").concat(n.statusText), -32e3));
                            }),
                            e.abrupt("return")
                          );
                        case 17:
                          return (e.prev = 17), (e.next = 20), n.json();
                        case 20:
                          (a = e.sent), (e.next = 27);
                          break;
                        case 23:
                          return (
                            (e.prev = 23),
                            (e.t1 = e.catch(17)),
                            t.forEach(function (e) {
                              return (0,
                              e.reject)(new Error("Failed to parse JSON response"));
                            }),
                            e.abrupt("return")
                          );
                        case 27:
                          (o = t.reduce(function (e, t) {
                            return (e[t.request.id] = t), e;
                          }, {})),
                            (i = Object(S.a)(a));
                          try {
                            for (i.s(); !(c = i.n()).done; )
                              (l = c.value),
                                (u = o[l.id]),
                                (s = u.resolve),
                                (d = u.reject),
                                (m = u.request.method),
                                s &&
                                  d &&
                                  ("error" in l
                                    ? d(
                                        new B(
                                          null === l ||
                                          void 0 === l ||
                                          null === (p = l.error) ||
                                          void 0 === p
                                            ? void 0
                                            : p.message,
                                          null === l ||
                                          void 0 === l ||
                                          null === (f = l.error) ||
                                          void 0 === f
                                            ? void 0
                                            : f.code,
                                          null === l ||
                                          void 0 === l ||
                                          null === (b = l.error) ||
                                          void 0 === b
                                            ? void 0
                                            : b.data
                                        )
                                      )
                                    : "result" in l
                                    ? s(l.result)
                                    : d(
                                        new B(
                                          "Received unexpected JSON-RPC response to ".concat(
                                            m,
                                            " request."
                                          ),
                                          -32e3,
                                          l
                                        )
                                      ));
                          } catch (y) {
                            i.e(y);
                          } finally {
                            i.f();
                          }
                        case 30:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [4, 10],
                    [17, 23],
                  ]
                );
              })
            )),
            (this.sendAsync = function (e, t) {
              r.request(e.method, e.params)
                .then(function (n) {
                  return t(null, { jsonrpc: "2.0", id: e.id, result: n });
                })
                .catch(function (e) {
                  return t(e, null);
                });
            }),
            (this.request = (function () {
              var e = Object(A.a)(
                E.a.mark(function e(t, n) {
                  var a, o;
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("string" === typeof t) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            r.request(t.method, t.params)
                          );
                        case 2:
                          if ("eth_chainId" !== t) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            "0x".concat(r.chainId.toString(16))
                          );
                        case 4:
                          return (
                            (o = new Promise(function (e, a) {
                              r.batch.push({
                                request: {
                                  jsonrpc: "2.0",
                                  id: r.nextId++,
                                  method: t,
                                  params: n,
                                },
                                resolve: e,
                                reject: a,
                              });
                            })),
                            (r.batchTimeoutId =
                              null !== (a = r.batchTimeoutId) && void 0 !== a
                                ? a
                                : setTimeout(r.clearBatch, r.batchWaitTimeMs)),
                            e.abrupt("return", o)
                          );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })()),
            (this.chainId = t),
            (this.url = n);
          var o = new URL(n);
          (this.host = o.host),
            (this.path = o.pathname),
            (this.batchWaitTimeMs = null !== a && void 0 !== a ? a : 50);
        },
        M = (function (e) {
          Object(w.a)(n, e);
          var t = Object(k.a)(n);
          function n(e) {
            var a,
              r = e.urls,
              o = e.defaultChainId;
            return (
              Object(x.a)(this, n),
              Object(U.default)(
                o || 1 === Object.keys(r).length,
                "defaultChainId is a required argument with >1 url"
              ),
              ((a = t.call(this, {
                supportedChainIds: Object.keys(r).map(function (e) {
                  return Number(e);
                }),
              })).providers = void 0),
              (a.currentChainId = void 0),
              (a.currentChainId = o || Number(Object.keys(r)[0])),
              (a.providers = Object.keys(r).reduce(function (e, t) {
                return (e[Number(t)] = new P(Number(t), r[Number(t)])), e;
              }, {})),
              a
            );
          }
          return (
            Object(j.a)(n, [
              {
                key: "provider",
                get: function () {
                  return this.providers[this.currentChainId];
                },
              },
              {
                key: "activate",
                value: (function () {
                  var e = Object(A.a)(
                    E.a.mark(function e() {
                      return E.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt("return", {
                                  provider: this.providers[this.currentChainId],
                                  chainId: this.currentChainId,
                                  account: null,
                                });
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getProvider",
                value: (function () {
                  var e = Object(A.a)(
                    E.a.mark(function e() {
                      return E.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  this.providers[this.currentChainId]
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getChainId",
                value: (function () {
                  var e = Object(A.a)(
                    E.a.mark(function e() {
                      return E.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt("return", this.currentChainId);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getAccount",
                value: (function () {
                  var e = Object(A.a)(
                    E.a.mark(function e() {
                      return E.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt("return", null);
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              { key: "deactivate", value: function () {} },
            ]),
            n
          );
        })(N.a),
        D = "https://dao.poa.network",
        z = Object({
          NODE_ENV: "production",
          PUBLIC_URL: ".",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          REACT_APP_NETWORK_URL: "https://dao.poa.network",
          REACT_APP_CHAIN_ID: "100",
        }).REACT_APP_FORTMATIC_KEY,
        W = Object({
          NODE_ENV: "production",
          PUBLIC_URL: ".",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          REACT_APP_NETWORK_URL: "https://dao.poa.network",
          REACT_APP_CHAIN_ID: "100",
        }).REACT_APP_PORTIS_ID,
        L = parseInt(null !== "100" ? "100" : "1");
      var F,
        q = new M({ urls: Object(m.a)({}, L, D) });
      var H,
        V = new b.a({ supportedChainIds: [100] }),
        Y = new y.a({
          rpc: { 100: "https://dai.poa.network" },
          bridge: "https://bridge.walletconnect.org",
          qrcode: !0,
          pollingInterval: 15e3,
        }),
        K = new I({ apiKey: null !== z && void 0 !== z ? z : "", chainId: 1 }),
        J = new h.a({
          dAppId: null !== W && void 0 !== W ? W : "",
          networks: [100],
        }),
        Q = new v.a({
          url: D,
          appName: "BaoBaoBaoswap",
          appLogoUrl: "https://i.imgur.com/QdfaOR1.png",
        }),
        X = "0x6093AeBAC87d62b1A5a4cEec91204e35020E38bE",
        G =
          (new p.Token(
            p.ChainId.XDAI,
            "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
            6,
            "USDC",
            "USDC on xDai"
          ),
          new p.Token(
            p.ChainId.XDAI,
            "0x82dFe19164729949fD66Da1a37BC70dD6c4746ce",
            18,
            "Bao",
            "Bao"
          )),
        Z = new p.Token(
          p.ChainId.XDAI,
          "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
          18,
          "WETH",
          "Wrapped Ether on xDai"
        ),
        _ = new p.Token(
          p.ChainId.XDAI,
          "0xb7D311E2Eb55F2f68a9440da38e7989210b9A05e",
          18,
          "STAKE",
          "Stake Token on xDai"
        ),
        $ =
          ((H = {}),
          Object(m.a)(H, p.ChainId.MAINNET, [p.WETH[p.ChainId.MAINNET]]),
          Object(m.a)(H, p.ChainId.ROPSTEN, [p.WETH[p.ChainId.ROPSTEN]]),
          Object(m.a)(H, p.ChainId.RINKEBY, [p.WETH[p.ChainId.RINKEBY]]),
          Object(m.a)(H, p.ChainId.GÖRLI, [p.WETH[p.ChainId.GÖRLI]]),
          Object(m.a)(H, p.ChainId.KOVAN, [p.WETH[p.ChainId.KOVAN]]),
          Object(m.a)(H, p.ChainId.XDAI, [p.WETH[p.ChainId.XDAI]]),
          H),
        ee = Object(d.a)(
          Object(d.a)({}, $),
          {},
          Object(m.a)(
            {},
            p.ChainId.XDAI,
            [].concat(Object(s.a)($[p.ChainId.XDAI]), [Z, G, _])
          )
        ),
        te = {},
        ne = Object(d.a)(
          Object(d.a)({}, $),
          {},
          Object(m.a)(
            {},
            p.ChainId.XDAI,
            [].concat(Object(s.a)($[p.ChainId.XDAI]), [Z, G, _])
          )
        ),
        ae = Object(d.a)(
          Object(d.a)({}, $),
          {},
          Object(m.a)(
            {},
            p.ChainId.XDAI,
            [].concat(Object(s.a)($[p.ChainId.XDAI]), [Z, G, _])
          )
        ),
        re = {},
        oe = {
          INJECTED: {
            connector: V,
            name: "Injected",
            iconName: "arrow-right.svg",
            description: "Injected web3 provider.",
            href: null,
            color: "#010101",
            primary: !0,
          },
          METAMASK: {
            connector: V,
            name: "MetaMask",
            iconName: "metamask.png",
            description: "Easy-to-use browser extension.",
            href: null,
            color: "#E8831D",
          },
          WALLET_CONNECT: {
            connector: Y,
            name: "WalletConnect",
            iconName: "walletConnectIcon.svg",
            description: "Connect to Trust Wallet, Rainbow Wallet and more...",
            href: null,
            color: "#4196FC",
            mobile: !0,
          },
        },
        ie = new p.Percent(p.JSBI.BigInt(1), p.JSBI.BigInt(1e4)),
        ce = p.JSBI.BigInt(1e4),
        le = new p.Percent(p.JSBI.BigInt(100), ce),
        ue = new p.Percent(p.JSBI.BigInt(300), ce),
        se = new p.Percent(p.JSBI.BigInt(500), ce),
        de = new p.Percent(p.JSBI.BigInt(1e3), ce),
        me = new p.Percent(p.JSBI.BigInt(1500), ce),
        pe = p.JSBI.exponentiate(p.JSBI.BigInt(10), p.JSBI.BigInt(16)),
        fe = new p.Percent(p.JSBI.BigInt(75), p.JSBI.BigInt(1e4)),
        be = n(186),
        ye = n(60),
        ve = n(238),
        he = n.n(ve),
        ge = n(239),
        Ee = n.n(ge);
      be.a
        .use(he.a)
        .use(Ee.a)
        .use(ye.a)
        .init({
          backend: { loadPath: "./locales/{{lng}}.json" },
          react: { useSuspense: !0 },
          fallbackLng: "en",
          preload: ["en"],
          keySeparator: !1,
          interpolation: { escapeValue: !1 },
        });
      be.a;
      var Oe = n(4),
        Ae = n(39),
        xe = n(33),
        je = n(52),
        we = n(3),
        ke = n(10);
      function Te() {
        var e = Object(r.d)(),
          t = Object(r.d)("NETWORK");
        return e.active ? e : t;
      }
      var Ce,
        Ie = n(113),
        Se = n(117),
        Re = n(167),
        Ne = new Ie.b(Se),
        Ue = (new Ie.b(Re), Ne),
        Be = n(153),
        Pe = (function (e) {
          Object(w.a)(n, e);
          var t = Object(k.a)(n);
          function n(e, a) {
            var r;
            return (
              Object(x.a)(this, n),
              ((r = t.call(
                this,
                e.chainId,
                e.address,
                e.decimals,
                e.symbol,
                e.name
              )).tokenInfo = void 0),
              (r.tags = void 0),
              (r.tokenInfo = e),
              (r.tags = a),
              r
            );
          }
          return (
            Object(j.a)(n, [
              {
                key: "logoURI",
                get: function () {
                  return this.tokenInfo.logoURI;
                },
              },
            ]),
            n
          );
        })(p.Token),
        Me =
          ((Ce = {}),
          Object(m.a)(Ce, p.ChainId.KOVAN, {}),
          Object(m.a)(Ce, p.ChainId.RINKEBY, {}),
          Object(m.a)(Ce, p.ChainId.ROPSTEN, {}),
          Object(m.a)(Ce, p.ChainId.GÖRLI, {}),
          Object(m.a)(Ce, p.ChainId.MAINNET, {}),
          Object(m.a)(Ce, p.ChainId.XDAI, {}),
          Ce),
        De = "undefined" !== typeof WeakMap ? new WeakMap() : null;
      function ze(e) {
        var t = Object(u.d)(function (e) {
          return e.lists.byUrl;
        });
        return Object(o.useMemo)(
          function () {
            var n;
            if (!e) return Me;
            var a = null === (n = t[e]) || void 0 === n ? void 0 : n.current;
            if (!a) return Me;
            try {
              return (function (e) {
                var t = null === De || void 0 === De ? void 0 : De.get(e);
                if (t) return t;
                var n = e.tokens.reduce(function (t, n) {
                  var a,
                    r,
                    o,
                    i =
                      null !==
                        (a =
                          null === (r = n.tags) ||
                          void 0 === r ||
                          null ===
                            (o = r.map(function (t) {
                              var n;
                              if (
                                null === (n = e.tags) || void 0 === n
                                  ? void 0
                                  : n[t]
                              )
                                return Object(d.a)(
                                  Object(d.a)({}, e.tags[t]),
                                  {},
                                  { id: t }
                                );
                            })) ||
                          void 0 === o
                            ? void 0
                            : o.filter(function (e) {
                                return Boolean(e);
                              })) && void 0 !== a
                        ? a
                        : [],
                    c = new Pe(n, i);
                  if (void 0 !== t[c.chainId][c.address])
                    throw Error("Duplicate tokens.");
                  return Object(d.a)(
                    Object(d.a)({}, t),
                    {},
                    Object(m.a)(
                      {},
                      c.chainId,
                      Object(d.a)(
                        Object(d.a)({}, t[c.chainId]),
                        {},
                        Object(m.a)({}, c.address, c)
                      )
                    )
                  );
                }, Object(d.a)({}, Me));
                return null === De || void 0 === De || De.set(e, n), n;
              })(a);
            } catch (r) {
              return (
                console.error("Could not show token list due to error", r), Me
              );
            }
          },
          [t, e]
        );
      }
      function We() {
        return Object(u.d)(function (e) {
          return e.lists.selectedListUrl;
        });
      }
      function Le() {
        return ze(We());
      }
      var Fe = n(19),
        qe = Object(Fe.b)("app/updateBlockNumber"),
        He = Object(Fe.b)("app/toggleWalletModal"),
        Ve = Object(Fe.b)("app/toggleSettingsMenu"),
        Ye = Object(Fe.b)("app/addPopup"),
        Ke = Object(Fe.b)("app/removePopup");
      function Je() {
        var e = Te().chainId;
        return Object(u.d)(function (t) {
          return t.application.blockNumber[null !== e && void 0 !== e ? e : -1];
        });
      }
      function Qe() {
        var e = Object(u.c)();
        return Object(o.useCallback)(
          function () {
            return e(He());
          },
          [e]
        );
      }
      function Xe() {
        var e = Object(u.c)();
        return Object(o.useCallback)(
          function () {
            return e(Ve());
          },
          [e]
        );
      }
      function Ge() {
        var e = Object(u.c)();
        return Object(o.useCallback)(
          function (t) {
            e(Ke({ key: t }));
          },
          [e]
        );
      }
      var Ze = /^0x[a-fA-F0-9]{40}$/,
        _e = /^0x[a-f0-9]*$/;
      function $e(e) {
        if (!Ze.test(e.address))
          throw new Error("Invalid address: ".concat(e.address));
        if (!_e.test(e.callData))
          throw new Error("Invalid hex: ".concat(e.callData));
        return "".concat(e.address, "-").concat(e.callData);
      }
      function et(e) {
        var t = e.split("-");
        if (2 !== t.length) throw new Error("Invalid call key: ".concat(e));
        return { address: t[0], callData: t[1] };
      }
      var tt = Object(Fe.b)("multicall/addMulticallListeners"),
        nt = Object(Fe.b)("multicall/removeMulticallListeners"),
        at = Object(Fe.b)("multicall/fetchingMulticallResults"),
        rt = Object(Fe.b)("multicall/errorFetchingMulticallResults"),
        ot = Object(Fe.b)("multicall/updateMulticallResults");
      function it(e) {
        return -1 !== ["string", "number"].indexOf(typeof e);
      }
      function ct(e) {
        return (
          void 0 === e ||
          (Array.isArray(e) &&
            e.every(function (e) {
              return it(e) || (Array.isArray(e) && e.every(it));
            }))
        );
      }
      var lt = { valid: !1, blockNumber: void 0, data: void 0 },
        ut = { blocksPerFetch: 1 / 0 };
      function st(e, t) {
        var n = Te().chainId,
          a = Object(u.d)(function (e) {
            return e.multicall.callResults;
          }),
          r = Object(u.c)(),
          i = Object(o.useMemo)(
            function () {
              var t, n, a;
              return JSON.stringify(
                null !==
                  (t =
                    null === e ||
                    void 0 === e ||
                    null ===
                      (n = e.filter(function (e) {
                        return Boolean(e);
                      })) ||
                    void 0 === n ||
                    null === (a = n.map($e)) ||
                    void 0 === a
                      ? void 0
                      : a.sort()) && void 0 !== t
                  ? t
                  : []
              );
            },
            [e]
          );
        return (
          Object(o.useEffect)(
            function () {
              var e = JSON.parse(i);
              if (n && 0 !== e.length) {
                var a = e.map(function (e) {
                  return et(e);
                });
                return (
                  r(tt({ chainId: n, calls: a, options: t })),
                  function () {
                    r(nt({ chainId: n, calls: a, options: t }));
                  }
                );
              }
            },
            [n, r, t, i]
          ),
          Object(o.useMemo)(
            function () {
              return e.map(function (e) {
                var t;
                if (!n || !e) return lt;
                var r,
                  o = null === (t = a[n]) || void 0 === t ? void 0 : t[$e(e)];
                return (
                  (null === o || void 0 === o ? void 0 : o.data) &&
                    "0x" !== (null === o || void 0 === o ? void 0 : o.data) &&
                    (r = o.data),
                  {
                    valid: !0,
                    data: r,
                    blockNumber:
                      null === o || void 0 === o ? void 0 : o.blockNumber,
                  }
                );
              });
            },
            [a, e, n]
          )
        );
      }
      var dt = {
          valid: !1,
          result: void 0,
          loading: !1,
          syncing: !1,
          error: !1,
        },
        mt = { valid: !0, result: void 0, loading: !0, syncing: !0, error: !1 };
      function pt(e, t, n, a) {
        if (!e) return dt;
        var r = e.valid,
          o = e.data,
          i = e.blockNumber;
        if (!r) return dt;
        if (r && !i) return mt;
        if (!t || !n || !a) return mt;
        var c = o && o.length > 2,
          l = (null !== i && void 0 !== i ? i : 0) < a,
          u = void 0;
        if (c && o)
          try {
            u = t.decodeFunctionResult(n, o);
          } catch (s) {
            return (
              console.debug("Result data parsing failed", n, o),
              { valid: !0, loading: !1, error: !0, syncing: l, result: u }
            );
          }
        return { valid: !0, loading: !1, syncing: l, result: u, error: !c };
      }
      function ft(e, t, n, a) {
        var r = Object(o.useMemo)(
            function () {
              var n;
              return null === e ||
                void 0 === e ||
                null === (n = e.interface) ||
                void 0 === n
                ? void 0
                : n.getFunction(t);
            },
            [e, t]
          ),
          i = st(
            Object(o.useMemo)(
              function () {
                return e && r && n && n.length > 0
                  ? n.map(function (t) {
                      return {
                        address: e.address,
                        callData: e.interface.encodeFunctionData(r, t),
                      };
                    })
                  : [];
              },
              [n, e, r]
            ),
            a
          ),
          c = Je();
        return Object(o.useMemo)(
          function () {
            return i.map(function (t) {
              return pt(
                t,
                null === e || void 0 === e ? void 0 : e.interface,
                r,
                c
              );
            });
          },
          [r, e, i, c]
        );
      }
      function bt(e, t, n, a, r) {
        var i = Object(o.useMemo)(
            function () {
              return t.getFunction(n);
            },
            [t, n]
          ),
          c = Object(o.useMemo)(
            function () {
              return i && ct(a) ? t.encodeFunctionData(i, a) : void 0;
            },
            [a, t, i]
          ),
          l = st(
            Object(o.useMemo)(
              function () {
                return i && e && e.length > 0 && c
                  ? e.map(function (e) {
                      return e && c ? { address: e, callData: c } : void 0;
                    })
                  : [];
              },
              [e, c, i]
            ),
            r
          ),
          u = Je();
        return Object(o.useMemo)(
          function () {
            return l.map(function (e) {
              return pt(e, t, i, u);
            });
          },
          [i, l, t, u]
        );
      }
      function yt(e, t, n, a) {
        var r = Object(o.useMemo)(
            function () {
              var n;
              return null === e ||
                void 0 === e ||
                null === (n = e.interface) ||
                void 0 === n
                ? void 0
                : n.getFunction(t);
            },
            [e, t]
          ),
          i = st(
            Object(o.useMemo)(
              function () {
                return e && r && ct(n)
                  ? [
                      {
                        address: e.address,
                        callData: e.interface.encodeFunctionData(r, n),
                      },
                    ]
                  : [];
              },
              [e, r, n]
            ),
            a
          )[0],
          c = Je();
        return Object(o.useMemo)(
          function () {
            return pt(
              i,
              null === e || void 0 === e ? void 0 : e.interface,
              r,
              c
            );
          },
          [i, e, r, c]
        );
      }
      var vt = n(143),
        ht = n.n(vt),
        gt = Object(Fe.b)("user/updateMatchesDarkMode"),
        Et = Object(Fe.b)("user/updateUserDarkMode"),
        Ot = Object(Fe.b)("user/updateUserExpertMode"),
        At = Object(Fe.b)("user/updateUserSlippageTolerance"),
        xt = Object(Fe.b)("user/updateUserDeadline"),
        jt = Object(Fe.b)("user/addSerializedToken"),
        wt = Object(Fe.b)("user/removeSerializedToken"),
        kt = Object(Fe.b)("user/addSerializedPair"),
        Tt = Object(Fe.b)("user/removeSerializedPair");
      function Ct(e) {
        return {
          chainId: e.chainId,
          address: e.address,
          decimals: e.decimals,
          symbol: e.symbol,
          name: e.name,
        };
      }
      function It(e) {
        return new p.Token(e.chainId, e.address, e.decimals, e.symbol, e.name);
      }
      function St() {
        var e = Object(u.d)(function (e) {
            var t = e.user,
              n = t.matchesDarkMode;
            return { userDarkMode: t.userDarkMode, matchesDarkMode: n };
          }, u.b),
          t = e.userDarkMode,
          n = e.matchesDarkMode;
        return null === t ? n : t;
      }
      function Rt() {
        var e = Object(u.c)(),
          t = St(),
          n = Object(o.useCallback)(
            function () {
              e(Et({ userDarkMode: !t }));
            },
            [t, e]
          );
        return [t, n];
      }
      function Nt() {
        return Object(u.d)(function (e) {
          return e.user.userExpertMode;
        });
      }
      function Ut() {
        var e = Object(u.c)(),
          t = Nt(),
          n = Object(o.useCallback)(
            function () {
              e(Ot({ userExpertMode: !t }));
            },
            [t, e]
          );
        return [t, n];
      }
      function Bt() {
        var e = Object(u.c)();
        return [
          Object(u.d)(function (e) {
            return e.user.userSlippageTolerance;
          }),
          Object(o.useCallback)(
            function (t) {
              e(At({ userSlippageTolerance: t }));
            },
            [e]
          ),
        ];
      }
      function Pt() {
        var e = Object(u.c)();
        return [
          Object(u.d)(function (e) {
            return e.user.userDeadline;
          }),
          Object(o.useCallback)(
            function (t) {
              e(xt({ userDeadline: t }));
            },
            [e]
          ),
        ];
      }
      function Mt() {
        var e = Object(u.c)();
        return Object(o.useCallback)(
          function (t) {
            e(jt({ serializedToken: Ct(t) }));
          },
          [e]
        );
      }
      function Dt(e) {
        return { token0: Ct(e.token0), token1: Ct(e.token1) };
      }
      function zt(e) {
        var t = Object(O.a)(e, 2),
          n = t[0],
          a = t[1];
        return new p.Token(
          n.chainId,
          p.Pair.getAddress(n, a),
          18,
          "BAO-V2",
          "BaoSwap V2"
        );
      }
      var Wt = n(109),
        Lt = n(27),
        Ft = n(438),
        qt = n(22),
        Ht = n(240);
      function Vt(e) {
        try {
          return Object(Lt.getAddress)(e);
        } catch (t) {
          return !1;
        }
      }
      var Yt = {
        1: "",
        3: "ropsten.",
        4: "rinkeby.",
        5: "goerli.",
        42: "kovan.",
        100: "xdai.",
      };
      function Kt(e, t, n) {
        var a;
        switch (
          ((a =
            100 === e
              ? "https://blockscout.com/poa/xdai"
              : "https://".concat(Yt[e] || Yt[1], "etherscan.io")),
          n)
        ) {
          case "transaction":
            return "".concat(a, "/tx/").concat(t);
          case "token":
            return "".concat(a, "/tokens/").concat(t);
          case "address":
          default:
            return "".concat(a, "/address/").concat(t);
        }
      }
      function Jt(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          n = Vt(e);
        if (!n) throw Error("Invalid 'address' parameter '".concat(e, "'."));
        return ""
          .concat(n.substring(0, t + 2), "...")
          .concat(n.substring(42 - t));
      }
      function Qt(e) {
        return e.mul(qt.a.from(1e4).add(qt.a.from(1e3))).div(qt.a.from(1e4));
      }
      function Xt(e, t) {
        if (t < 0 || t > 1e4)
          throw Error("Unexpected slippage value: ".concat(t));
        return [
          p.JSBI.divide(
            p.JSBI.multiply(e.raw, p.JSBI.BigInt(1e4 - t)),
            p.JSBI.BigInt(1e4)
          ),
          p.JSBI.divide(
            p.JSBI.multiply(e.raw, p.JSBI.BigInt(1e4 + t)),
            p.JSBI.BigInt(1e4)
          ),
        ];
      }
      function Gt(e, t, n, a) {
        if (!Vt(e) || e === Ft.a)
          throw Error("Invalid 'address' parameter '".concat(e, "'."));
        return new Wt.Contract(
          e,
          t,
          (function (e, t) {
            return t
              ? (function (e, t) {
                  return e.getSigner(t).connectUnchecked();
                })(e, t)
              : e;
          })(n, a)
        );
      }
      function Zt(e, t, n) {
        return Gt(X, Ht.a, t, n);
      }
      function _t(e, t) {
        var n;
        return (
          t === p.ETHER ||
          Boolean(
            t instanceof p.Token &&
              (null === (n = e[t.chainId]) || void 0 === n
                ? void 0
                : n[t.address])
          )
        );
      }
      var $t,
        en,
        tn = n(144),
        nn = n(241),
        an = n(242),
        rn = n(207),
        on = "0x6801F280Ef5d238C5A76e0D9B5569097eD35b0D6",
        cn = n(243),
        ln = n(244),
        un = n(208),
        sn =
          (($t = {}),
          Object(m.a)(
            $t,
            p.ChainId.MAINNET,
            "0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441"
          ),
          Object(m.a)(
            $t,
            p.ChainId.ROPSTEN,
            "0x53C43764255c17BD724F74c4eF150724AC50a3ed"
          ),
          Object(m.a)(
            $t,
            p.ChainId.KOVAN,
            "0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A"
          ),
          Object(m.a)(
            $t,
            p.ChainId.RINKEBY,
            "0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821"
          ),
          Object(m.a)(
            $t,
            p.ChainId.GÖRLI,
            "0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e"
          ),
          Object(m.a)(
            $t,
            p.ChainId.XDAI,
            "0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a"
          ),
          $t),
        dn = n(168),
        mn = n(169),
        pn =
          ((en = {}),
          Object(m.a)(
            en,
            p.ChainId.MAINNET,
            "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95"
          ),
          Object(m.a)(
            en,
            p.ChainId.ROPSTEN,
            "0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351"
          ),
          Object(m.a)(
            en,
            p.ChainId.RINKEBY,
            "0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36"
          ),
          Object(m.a)(
            en,
            p.ChainId.GÖRLI,
            "0x6Ce570d02D73d4c384b46135E87f8C592A8c86dA"
          ),
          Object(m.a)(
            en,
            p.ChainId.KOVAN,
            "0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30"
          ),
          Object(m.a)(
            en,
            p.ChainId.XDAI,
            "0x70E969444603980c94f9fCF612F00767744F92E7"
          ),
          en);
      new Ie.b(mn), new Ie.b(dn);
      function fn(e, t) {
        var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          a = Te(),
          r = a.library,
          i = a.account;
        return Object(o.useMemo)(
          function () {
            if (!e || !t || !r) return null;
            try {
              return Gt(e, t, r, n && i ? i : void 0);
            } catch (a) {
              return console.error("Failed to get contract", a), null;
            }
          },
          [e, t, r, n, i]
        );
      }
      function bn() {
        var e = Te().chainId;
        return fn(e && pn[e], mn, !1);
      }
      function yn(e, t) {
        return fn(e, dn, t);
      }
      function vn(e, t) {
        return fn(e, Se, t);
      }
      function hn(e) {
        var t,
          n = Te().chainId;
        if (n)
          switch (n) {
            case p.ChainId.XDAI:
              t = "0x25D2252Ec30de7830b6825D6b4A08E70a581cD6a";
              break;
            case p.ChainId.MAINNET:
            case p.ChainId.GÖRLI:
            case p.ChainId.ROPSTEN:
            case p.ChainId.RINKEBY:
              t = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
          }
        return fn(t, nn, e);
      }
      function gn(e, t) {
        return fn(e, an, t);
      }
      function En() {
        var e = Te().chainId;
        return fn(e && sn[e], un, !1);
      }
      function On() {
        var e = Te().chainId,
          t = (function () {
            var e = Te().chainId,
              t = Object(u.d)(function (e) {
                return e.user.tokens;
              });
            return Object(o.useMemo)(
              function () {
                var n;
                return e
                  ? Object.values(
                      null !== (n = t[e]) && void 0 !== n ? n : {}
                    ).map(It)
                  : [];
              },
              [t, e]
            );
          })(),
          n = Le();
        return Object(o.useMemo)(
          function () {
            return e
              ? t.reduce(function (e, t) {
                  return (e[t.address] = t), e;
                }, Object(d.a)({}, n[e]))
              : {};
          },
          [e, t, n]
        );
      }
      var An = /^0x[a-fA-F0-9]{64}$/;
      function xn(e, t, n) {
        return e && e.length > 0 ? e : t && An.test(t) ? Object(Be.b)(t) : n;
      }
      function jn(e) {
        var t = Te().chainId,
          n = On(),
          a = Vt(e),
          r = vn(a || void 0, !1),
          i = (function (e, t) {
            return fn(e, Re, t);
          })(a || void 0, !1),
          c = a ? n[a] : void 0,
          l = yt(c ? void 0 : r, "name", void 0, ut),
          u = yt(c ? void 0 : i, "name", void 0, ut),
          s = yt(c ? void 0 : r, "symbol", void 0, ut),
          d = yt(c ? void 0 : i, "symbol", void 0, ut),
          m = yt(c ? void 0 : r, "decimals", void 0, ut);
        return Object(o.useMemo)(
          function () {
            if (c) return c;
            if (t && a) {
              if (m.loading || s.loading || l.loading) return null;
              var e, n, r, o;
              if (m.result)
                return new p.Token(
                  t,
                  a,
                  m.result[0],
                  xn(
                    null === (e = s.result) || void 0 === e ? void 0 : e[0],
                    null === (n = d.result) || void 0 === n ? void 0 : n[0],
                    "UNKNOWN"
                  ),
                  xn(
                    null === (r = l.result) || void 0 === r ? void 0 : r[0],
                    null === (o = u.result) || void 0 === o ? void 0 : o[0],
                    "Unknown Token"
                  )
                );
            }
          },
          [
            a,
            t,
            m.loading,
            m.result,
            s.loading,
            s.result,
            d.result,
            c,
            l.loading,
            l.result,
            u.result,
          ]
        );
      }
      function wn(e) {
        var t =
            "ETH" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
          n = jn(t ? void 0 : e);
        return t ? p.ETHER : n;
      }
      function kn(e) {
        var t = En(),
          n = Object(o.useMemo)(
            function () {
              return e
                ? e
                    .map(Vt)
                    .filter(function (e) {
                      return !1 !== e;
                    })
                    .sort()
                : [];
            },
            [e]
          ),
          a = ft(
            t,
            "getEthBalance",
            n.map(function (e) {
              return [e];
            })
          );
        return Object(o.useMemo)(
          function () {
            return n.reduce(function (e, t, n) {
              var r,
                o,
                i =
                  null === a ||
                  void 0 === a ||
                  null === (r = a[n]) ||
                  void 0 === r ||
                  null === (o = r.result) ||
                  void 0 === o
                    ? void 0
                    : o[0];
              return (
                i &&
                  (e[t] = p.CurrencyAmount.ether(p.JSBI.BigInt(i.toString()))),
                e
              );
            }, {});
          },
          [n, a]
        );
      }
      function Tn(e, t) {
        var n = Object(o.useMemo)(
            function () {
              var e;
              return null !==
                (e =
                  null === t || void 0 === t
                    ? void 0
                    : t.filter(function (e) {
                        return (
                          !1 !==
                          Vt(null === e || void 0 === e ? void 0 : e.address)
                        );
                      })) && void 0 !== e
                ? e
                : [];
            },
            [t]
          ),
          a = bt(
            Object(o.useMemo)(
              function () {
                return n.map(function (e) {
                  return e.address;
                });
              },
              [n]
            ),
            Ue,
            "balanceOf",
            [e]
          ),
          r = Object(o.useMemo)(
            function () {
              return a.some(function (e) {
                return e.loading;
              });
            },
            [a]
          );
        return [
          Object(o.useMemo)(
            function () {
              return e && n.length > 0
                ? n.reduce(function (e, t, n) {
                    var r,
                      o,
                      i =
                        null === a ||
                        void 0 === a ||
                        null === (r = a[n]) ||
                        void 0 === r ||
                        null === (o = r.result) ||
                        void 0 === o
                          ? void 0
                          : o[0],
                      c = i ? p.JSBI.BigInt(i.toString()) : void 0;
                    return c && (e[t.address] = new p.TokenAmount(t, c)), e;
                  }, {})
                : {};
            },
            [e, n, a]
          ),
          r,
        ];
      }
      function Cn(e, t) {
        return Tn(e, t)[0];
      }
      function In(e, t) {
        var n = Cn(e, [t]);
        if (t) return n[t.address];
      }
      function Sn(e, t) {
        var n = Object(o.useMemo)(
            function () {
              var e;
              return null !==
                (e =
                  null === t || void 0 === t
                    ? void 0
                    : t.filter(function (e) {
                        return e instanceof p.Token;
                      })) && void 0 !== e
                ? e
                : [];
            },
            [t]
          ),
          a = Cn(e, n),
          r = kn(
            Object(o.useMemo)(
              function () {
                var e;
                return (
                  null !==
                    (e =
                      null === t || void 0 === t
                        ? void 0
                        : t.some(function (e) {
                            return e === p.ETHER;
                          })) &&
                  void 0 !== e &&
                  e
                );
              },
              [t]
            )
              ? [e]
              : []
          );
        return Object(o.useMemo)(
          function () {
            var n;
            return null !==
              (n =
                null === t || void 0 === t
                  ? void 0
                  : t.map(function (t) {
                      if (e && t)
                        return t instanceof p.Token
                          ? a[t.address]
                          : t === p.ETHER
                          ? r[e]
                          : void 0;
                    })) && void 0 !== n
              ? n
              : [];
          },
          [e, t, r, a]
        );
      }
      function Rn(e, t) {
        return Sn(e, [t])[0];
      }
      var Nn,
        Un,
        Bn,
        Pn,
        Mn,
        Dn,
        zn,
        Wn = n(36),
        Ln = n(107),
        Fn = Object(we.default)(Ln.Box)(
          Nn ||
            (Nn = Object(Oe.a)([
              "\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ",
              ";\n  border: ",
              ";\n  border-radius: ",
              ";\n",
            ])),
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.border;
          },
          function (e) {
            return e.borderRadius;
          }
        ),
        qn = Fn,
        Hn = Object(we.default)(Fn)(
          Un ||
            (Un = Object(Oe.a)([
              "\n  border: 1px solid ",
              ";\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.bg2;
          },
          function (e) {
            return e.theme.bg1;
          }
        ),
        Vn = Object(we.default)(Fn)(
          Bn || (Bn = Object(Oe.a)(["\n  background-color: ", ";\n"])),
          function (e) {
            return e.theme.bg3;
          }
        ),
        Yn = Object(we.default)(Fn)(
          Pn || (Pn = Object(Oe.a)(["\n  border: 1px solid ", ";\n"])),
          function (e) {
            return e.theme.bg3;
          }
        ),
        Kn = Object(we.default)(Fn)(
          Mn ||
            (Mn = Object(Oe.a)([
              "\n  background-color: rgba(299, 299, 299, 0.05);\n  color: ",
              ";\n  font-weight: 500;\n",
            ])),
          function (e) {
            return e.theme.yellow2;
          }
        ),
        Jn = Object(we.default)(Fn)(
          Dn ||
            (Dn = Object(Oe.a)([
              "\n  background-color: rgba(255, 0, 122, 0.03);\n  color: ",
              ";\n  font-weight: 500;\n",
            ])),
          function (e) {
            return e.theme.primary1;
          }
        ),
        Qn = Object(we.default)(Fn)(
          zn ||
            (zn = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  color: ",
              ";\n  border-radius: 12px;\n  width: fit-content;\n",
            ])),
          function (e) {
            return e.theme.primary5;
          },
          function (e) {
            return e.theme.primary1;
          }
        ),
        Xn = function (e) {
          var t = e.children,
            n = Object(Wn.a)(e, ["children"]);
          return i.a.createElement(
            Qn,
            n,
            i.a.createElement(ke.b, { fontWeight: 500, color: "#2172E5" }, t)
          );
        },
        Gn = n(454),
        Zn = n(451);
      function _n(e, t) {
        var n = Object(o.useRef)(t);
        Object(o.useEffect)(
          function () {
            n.current = t;
          },
          [t]
        ),
          Object(o.useEffect)(
            function () {
              var t = function (t) {
                var a, r;
                (null !==
                  (a =
                    null === (r = e.current) || void 0 === r
                      ? void 0
                      : r.contains(t.target)) &&
                  void 0 !== a &&
                  a) ||
                  (n.current && n.current());
              };
              return (
                document.addEventListener("mousedown", t),
                function () {
                  document.removeEventListener("mousedown", t);
                }
              );
            },
            [e]
          );
      }
      var $n = n(450),
        ea = n(20),
        ta = n(473);
      function na(e, t) {
        var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          a = Object(o.useRef)();
        Object(o.useEffect)(
          function () {
            a.current = e;
          },
          [e]
        ),
          Object(o.useEffect)(
            function () {
              function e() {
                var e = a.current;
                e && e();
              }
              if (null !== t) {
                n && e();
                var r = setInterval(e, t);
                return function () {
                  return clearInterval(r);
                };
              }
            },
            [t, n]
          );
      }
      var aa,
        ra,
        oa,
        ia,
        ca = n(145),
        la = we.default.div(
          aa ||
            (aa = Object(Oe.a)([
              "\n  z-index: 9999;\n\n  visibility: ",
              ";\n  opacity: ",
              ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ",
              ";\n  border: 1px solid ",
              ";\n  box-shadow: 0 4px 8px 0 ",
              ";\n  color: ",
              ";\n  border-radius: 8px;\n",
            ])),
          function (e) {
            return e.show ? "visible" : "hidden";
          },
          function (e) {
            return e.show ? 1 : 0;
          },
          function (e) {
            return e.theme.bg2;
          },
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            var t = e.theme;
            return Object(ea.c)(0.9, t.shadow1);
          },
          function (e) {
            return e.theme.text2;
          }
        ),
        ua = we.default.div(
          ra || (ra = Object(Oe.a)(["\n  display: inline-block;\n"]))
        ),
        sa = we.default.div(
          oa ||
            (oa = Object(Oe.a)([
              "\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ",
              ";\n    transform: rotate(45deg);\n    background: ",
              ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n",
            ])),
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.bg2;
          }
        );
      function da(e) {
        var t,
          n,
          a = e.content,
          r = e.show,
          c = e.children,
          l = e.placement,
          u = void 0 === l ? "auto" : l,
          s = Object(o.useState)(null),
          d = Object(O.a)(s, 2),
          m = d[0],
          p = d[1],
          f = Object(o.useState)(null),
          b = Object(O.a)(f, 2),
          y = b[0],
          v = b[1],
          h = Object(o.useState)(null),
          g = Object(O.a)(h, 2),
          E = g[0],
          A = g[1],
          x = Object(ta.a)(m, y, {
            placement: u,
            strategy: "fixed",
            modifiers: [
              { name: "offset", options: { offset: [8, 8] } },
              { name: "arrow", options: { element: E } },
            ],
          }),
          j = x.styles,
          w = x.update,
          k = x.attributes;
        return (
          na(
            Object(o.useCallback)(
              function () {
                w && w();
              },
              [w]
            ),
            r ? 100 : null
          ),
          i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(ua, { ref: p }, c),
            i.a.createElement(
              ca.a,
              null,
              i.a.createElement(
                la,
                Object.assign({ show: r, ref: v, style: j.popper }, k.popper),
                a,
                i.a.createElement(
                  sa,
                  Object.assign(
                    {
                      className: "arrow-".concat(
                        null !==
                          (t =
                            null === (n = k.popper) || void 0 === n
                              ? void 0
                              : n["data-popper-placement"]) && void 0 !== t
                          ? t
                          : ""
                      ),
                      ref: A,
                      style: j.arrow,
                    },
                    k.arrow
                  )
                )
              )
            )
          )
        );
      }
      var ma,
        pa = we.default.div(
          ia ||
            (ia = Object(Oe.a)([
              "\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n",
            ]))
        );
      function fa(e) {
        var t = e.text,
          n = Object(Wn.a)(e, ["text"]);
        return i.a.createElement(
          da,
          Object.assign({ content: i.a.createElement(pa, null, t) }, n)
        );
      }
      function ba(e) {
        var t = e.children,
          n = Object(Wn.a)(e, ["children"]),
          a = Object(o.useState)(!1),
          r = Object(O.a)(a, 2),
          c = r[0],
          l = r[1],
          u = Object(o.useCallback)(
            function () {
              return l(!0);
            },
            [l]
          ),
          s = Object(o.useCallback)(
            function () {
              return l(!1);
            },
            [l]
          );
        return i.a.createElement(
          fa,
          Object.assign({}, n, { show: c }),
          i.a.createElement("div", { onMouseEnter: u, onMouseLeave: s }, t)
        );
      }
      var ya = we.default.div(
        ma ||
          (ma = Object(Oe.a)([
            "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ",
            ";\n  color: ",
            ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n",
          ])),
        function (e) {
          return e.theme.bg2;
        },
        function (e) {
          return e.theme.text2;
        }
      );
      function va(e) {
        var t = e.text,
          n = Object(o.useState)(!1),
          a = Object(O.a)(n, 2),
          r = a[0],
          c = a[1],
          l = Object(o.useCallback)(
            function () {
              return c(!0);
            },
            [c]
          ),
          u = Object(o.useCallback)(
            function () {
              return c(!1);
            },
            [c]
          );
        return i.a.createElement(
          "span",
          { style: { marginLeft: 4 } },
          i.a.createElement(
            fa,
            { text: t, show: r },
            i.a.createElement(
              ya,
              { onClick: l, onMouseEnter: l, onMouseLeave: u },
              i.a.createElement($n.a, { size: 16 })
            )
          )
        );
      }
      var ha,
        ga,
        Ea,
        Oa,
        Aa,
        xa,
        ja,
        wa,
        ka = n(452),
        Ta =
          (we.default.button.attrs(function (e) {
            var t = e.warning,
              n = e.theme;
            return { backgroundColor: t ? n.red1 : n.primary1 };
          })(
            ha ||
              (ha = Object(Oe.a)([
                "\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  background-color: ",
                ";\n  color: ",
                ";\n  width: 100%;\n\n  :hover,\n  :focus {\n    background-color: ",
                ";\n  }\n\n  :active {\n    background-color: ",
                ";\n  }\n\n  :disabled {\n    background-color: ",
                ";\n    color: ",
                ";\n    cursor: auto;\n  }\n",
              ])),
            function (e) {
              return e.backgroundColor;
            },
            function (e) {
              return e.theme.white;
            },
            function (e) {
              var t = e.backgroundColor;
              return Object(ea.a)(0.05, t);
            },
            function (e) {
              var t = e.backgroundColor;
              return Object(ea.a)(0.1, t);
            },
            function (e) {
              return e.theme.bg1;
            },
            function (e) {
              return e.theme.text4;
            }
          ),
          Object(we.default)(Zn.a)(
            ga || (ga = Object(Oe.a)(["\n  cursor: pointer;\n"]))
          )),
        Ca = we.default.button(
          Ea ||
            (Ea = Object(Oe.a)([
              "\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ",
              ";\n  color: ",
              ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ",
              ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ",
              ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
            ])),
          function (e) {
            return e.disabled ? "default" : "pointer";
          },
          function (e) {
            var t = e.theme;
            return e.disabled ? t.text2 : t.primary1;
          },
          function (e) {
            return e.disabled ? null : "underline";
          },
          function (e) {
            return e.disabled ? null : "underline";
          }
        ),
        Ia = Object(we.default)(Ae.b)(
          Oa ||
            (Oa = Object(Oe.a)([
              "\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
              ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.primary1;
          }
        ),
        Sa = we.default.a(
          Aa ||
            (Aa = Object(Oe.a)([
              "\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
              ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.primary1;
          }
        );
      function Ra(e) {
        var t = e.target,
          n = void 0 === t ? "_blank" : t,
          a = e.href,
          r = e.rel,
          o = void 0 === r ? "noopener noreferrer" : r,
          c = Object(Wn.a)(e, ["target", "href", "rel"]);
        return i.a.createElement(
          Sa,
          Object.assign({ target: n, rel: o, href: a }, c)
        );
      }
      var Na,
        Ua,
        Ba,
        Pa,
        Ma,
        Da,
        za = Object(we.keyframes)(
          xa ||
            (xa = Object(Oe.a)([
              "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
            ]))
        ),
        Wa = we.default.img(
          ja ||
            (ja = Object(Oe.a)([
              "\n  animation: 2s ",
              " linear infinite;\n  width: 16px;\n  height: 16px;\n",
            ])),
          za
        ),
        La = Object(we.default)(Ia)(
          wa || (wa = Object(Oe.a)(["\n  color: ", ";\n"])),
          function (e) {
            return e.theme.text1;
          }
        );
      function Fa(e) {
        var t = e.to;
        return i.a.createElement(La, { to: t }, i.a.createElement(ka.a, null));
      }
      var qa = {
          upToExtraSmall: 500,
          upToSmall: 600,
          upToMedium: 960,
          upToLarge: 1280,
        },
        Ha = Object.keys(qa).reduce(function (e, t) {
          return (
            (e[t] = function (e, n, a) {
              return Object(we.css)(
                Na ||
                  (Na = Object(Oe.a)([
                    "\n      @media (max-width: ",
                    "px) {\n        ",
                    "\n      }\n    ",
                  ])),
                qa[t],
                Object(we.css)(e, n, a)
              );
            }),
            e
          );
        }, {});
      function Va(e) {
        var t = e.children,
          n = St(),
          a = Object(o.useMemo)(
            function () {
              return (function (e) {
                return Object(d.a)(
                  Object(d.a)(
                    {},
                    (function (e) {
                      return {
                        white: "#FFFFFF",
                        black: "#000000",
                        grd1: e ? "#FFC3AB" : "#FED8B1",
                        grd2: "#FFC3AB",
                        grd3: e ? "#FFC3AB" : "#FDD9B5",
                        text1: e ? "#FFFFFF" : "#000000",
                        text2: e ? "#C3C5CB" : "#565A69",
                        text3: e ? "#6C7284" : "#888D9B",
                        text4: e ? "#565A69" : "#C3C5CB",
                        text5: e ? "#2C2F36" : "#EDEEF2",
                        bg1: e ? "#212429" : "#FFFFFF",
                        bg2: e ? "#2C2F36" : "#F7F8FA",
                        bg3: e ? "#40444F" : "#EDEEF2",
                        bg4: e ? "#565A69" : "#CED0D9",
                        bg5: e ? "#6C7284" : "#888D9B",
                        modalBG: e ? "rgba(0,0,0,.425)" : "rgba(0,0,0,0.3)",
                        advancedBG: e
                          ? "rgba(0,0,0,0.65)"
                          : "rgba(255,255,255,0.6)",
                        primary1: e ? "#26a697" : "#1974D2",
                        primary2: e ? "#45d3c5" : "#1974D2",
                        primary3: e ? "#97e7de" : "#1974D2",
                        primary4: e ? "#CBF3EF" : "#1974D2",
                        primary5: e ? "#CBF3EF" : "#1974D2",
                        primaryText1: e ? "rgba(44, 52, 55, 0.8)" : "#ffff",
                        secondary1: e ? "#30cfbf" : "#1974D2",
                        secondary2: e ? "#17000b26" : "#1974D2",
                        secondary3: e ? "#17000b26" : "#1974D2",
                        red1: "#FF6871",
                        red2: "#F82D3A",
                        green1: "#27AE60",
                        yellow1: "#FFE270",
                        yellow2: "#1974D2",
                      };
                    })(e)
                  ),
                  {},
                  {
                    grids: { sm: 8, md: 12, lg: 24 },
                    shadow1: e ? "#000" : "#2F80ED",
                    mediaWidth: Ha,
                    flexColumnNoWrap: Object(we.css)(
                      Ua ||
                        (Ua = Object(Oe.a)([
                          "\n      display: flex;\n      flex-flow: column nowrap;\n    ",
                        ]))
                    ),
                    flexRowNoWrap: Object(we.css)(
                      Ba ||
                        (Ba = Object(Oe.a)([
                          "\n      display: flex;\n      flex-flow: row nowrap;\n    ",
                        ]))
                    ),
                  }
                );
              })(n);
            },
            [n]
          );
        return i.a.createElement(we.ThemeProvider, { theme: a }, t);
      }
      var Ya,
        Ka,
        Ja,
        Qa,
        Xa,
        Ga,
        Za,
        _a,
        $a,
        er,
        tr,
        nr,
        ar,
        rr,
        or,
        ir,
        cr = Object(we.default)(ke.b)(
          Pa || (Pa = Object(Oe.a)(["\n  color: ", ";\n"])),
          function (e) {
            var t = e.color;
            return e.theme[t];
          }
        ),
        lr = function (e) {
          return i.a.createElement(
            cr,
            Object.assign({ fontWeight: 500, color: "text2" }, e)
          );
        },
        ur = function (e) {
          return i.a.createElement(
            cr,
            Object.assign({ fontWeight: 500, color: "primary1" }, e)
          );
        },
        sr = function (e) {
          return i.a.createElement(
            cr,
            Object.assign({ fontWeight: 500, color: "text1" }, e)
          );
        },
        dr = function (e) {
          return i.a.createElement(
            cr,
            Object.assign({ fontWeight: 400, fontSize: 16, color: "text1" }, e)
          );
        },
        mr = function (e) {
          return i.a.createElement(
            cr,
            Object.assign({ fontWeight: 600, fontSize: 24 }, e)
          );
        },
        pr = function (e) {
          return i.a.createElement(
            cr,
            Object.assign({ fontWeight: 500, fontSize: 20 }, e)
          );
        },
        fr = function (e) {
          return i.a.createElement(
            cr,
            Object.assign({ fontWeight: 400, fontSize: 14 }, e)
          );
        },
        br = function (e) {
          return i.a.createElement(
            cr,
            Object.assign({ fontWeight: 500, color: "primary1" }, e)
          );
        },
        yr = function (e) {
          return i.a.createElement(
            cr,
            Object.assign({ fontWeight: 500, color: "text3" }, e)
          );
        },
        vr = function (e) {
          return i.a.createElement(
            cr,
            Object.assign(
              {
                fontWeight: 500,
                fontSize: 12,
                fontStyle: "italic",
                color: "text2",
              },
              e
            )
          );
        },
        hr = function (e) {
          var t = e.error,
            n = Object(Wn.a)(e, ["error"]);
          return i.a.createElement(
            cr,
            Object.assign({ fontWeight: 500, color: t ? "red1" : "text2" }, n)
          );
        },
        gr = Object(we.createGlobalStyle)(
          Ma ||
            (Ma = Object(Oe.a)([
              "\nhtml, input, textarea, button {\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.018em;\n  font-display: fallback;\n}\n@supports (font-variation-settings: normal) {\n  html, input, textarea, button {\n    font-family: 'Inter var', sans-serif;\n  }\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  user-select: none;\n}\n\nhtml {\n  font-size: 16px;\n  font-variant: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n",
            ]))
        ),
        Er = Object(we.createGlobalStyle)(
          Da ||
            (Da = Object(Oe.a)([
              "\nhtml {\n  color: ",
              ";\n  background-color: ",
              ";\n  background: linear-gradient(111.63deg, ",
              " 0%, ",
              " 49.48%, ",
              " 100%);\n}\n\nbody {\n  min-height: 100vh;\n  background-position: 0 -30vh;\n  background-repeat: no-repeat;\n  background-image: ",
              ";\n}\n",
            ])),
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            return e.theme.grd1;
          },
          function (e) {
            return e.theme.grd1;
          },
          function (e) {
            return e.theme.grd2;
          },
          function (e) {
            return e.theme.grd3;
          },
          function (e) {
            var t = e.theme;
            return "radial-gradient(50% 50% at 50% 50%, "
              .concat(Object(ea.c)(0.9, t.primary1), " 0%, ")
              .concat(Object(ea.c)(1, t.bg1), " 100%)");
          }
        ),
        Or = we.default.div(
          Ya ||
            (Ya = Object(Oe.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n",
            ]))
        ),
        Ar = Object(we.default)(Or)(
          Ka ||
            (Ka = Object(Oe.a)(["\n  width: 100%;\n  align-items: center;\n"]))
        ),
        xr = we.default.div(
          Ja ||
            (Ja = Object(Oe.a)([
              "\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",
              ";\n  justify-items: ",
              ";\n",
            ])),
          function (e) {
            var t = e.gap;
            return (
              ("sm" === t ? "8px" : "md" === t && "12px") ||
              ("lg" === t && "24px") ||
              t
            );
          },
          function (e) {
            var t = e.justify;
            return t && t;
          }
        ),
        jr = Or,
        wr = Object(we.default)(Ln.Box)(
          Qa ||
            (Qa = Object(Oe.a)([
              "\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ",
              ";\n  padding: ",
              ";\n  border: ",
              ";\n  border-radius: ",
              ";\n",
            ])),
          function (e) {
            var t = e.align;
            return t || "center";
          },
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.border;
          },
          function (e) {
            return e.borderRadius;
          }
        ),
        kr = Object(we.default)(wr)(
          Xa || (Xa = Object(Oe.a)(["\n  justify-content: space-between;\n"]))
        ),
        Tr = we.default.div(
          Ga ||
            (Ga = Object(Oe.a)([
              "\n  display: flex;\n  align-items: flex-end;\n",
            ]))
        ),
        Cr = Object(we.default)(wr)(
          Za ||
            (Za = Object(Oe.a)([
              "\n  flex-wrap: wrap;\n  margin: ",
              ";\n  justify-content: ",
              ";\n\n  & > * {\n    margin: ",
              " !important;\n  }\n",
            ])),
          function (e) {
            var t = e.gap;
            return t && "-".concat(t);
          },
          function (e) {
            var t = e.justify;
            return t && t;
          },
          function (e) {
            return e.gap;
          }
        ),
        Ir = Object(we.default)(wr)(
          _a ||
            (_a = Object(Oe.a)(["\n  width: fit-content;\n  margin: ", ";\n"])),
          function (e) {
            var t = e.gap;
            return t && "-".concat(t);
          }
        ),
        Sr = wr;
      !(function (e) {
        (e.InvalidInput = "InvalidInput"),
          (e.RiskyLow = "RiskyLow"),
          (e.RiskyHigh = "RiskyHigh");
      })(or || (or = {})),
        (function (e) {
          e.InvalidInput = "InvalidInput";
        })(ir || (ir = {}));
      var Rr,
        Nr,
        Ur = we.default.button(
          $a ||
            ($a = Object(Oe.a)([
              "\n  color: ",
              ";\n  align-items: center;\n  height: 2rem;\n  border-radius: 36px;\n  font-size: 12px;\n  width: auto;\n  min-width: 3rem;\n  border: 1px solid ",
              ";\n  outline: none;\n  background: ",
              ";\n  :hover {\n    border: 1px solid ",
              ";\n  }\n  :focus {\n    border: 1px solid ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.theme.bg4;
          },
          function (e) {
            return e.theme.primary1;
          }
        ),
        Br = Object(we.default)(Ur)(
          er ||
            (er = Object(Oe.a)([
              "\n  margin-right: 8px;\n  :hover {\n    cursor: pointer;\n  }\n  background-color: ",
              ";\n  color: ",
              ";\n",
            ])),
          function (e) {
            var t = e.active,
              n = e.theme;
            return t && n.primary1;
          },
          function (e) {
            var t = e.active,
              n = e.theme;
            return t ? n.white : n.text1;
          }
        ),
        Pr = we.default.input(
          tr ||
            (tr = Object(Oe.a)([
              "\n  background: ",
              ";\n  font-size: 16px;\n  width: auto;\n  outline: none;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  color: ",
              ";\n  text-align: right;\n",
            ])),
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            var t = e.theme;
            return "red" === e.color ? t.red1 : t.text1;
          }
        ),
        Mr = Object(we.default)(Ur)(
          nr ||
            (nr = Object(Oe.a)([
              "\n  height: 2rem;\n  position: relative;\n  padding: 0 0.75rem;\n  flex: 1;\n  border: ",
              ";\n  :hover {\n    border: ",
              ";\n  }\n\n  input {\n    width: 100%;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n  }\n",
            ])),
          function (e) {
            var t = e.theme,
              n = e.active,
              a = e.warning;
            return n && "1px solid ".concat(a ? t.red1 : t.primary1);
          },
          function (e) {
            var t = e.theme,
              n = e.active,
              a = e.warning;
            return (
              n &&
              "1px solid ".concat(
                a ? Object(ea.a)(0.1, t.red1) : Object(ea.a)(0.1, t.primary1)
              )
            );
          }
        ),
        Dr = we.default.span(
          ar || (ar = Object(Oe.a)(["\n  color: #f3841e;\n  ", "\n"])),
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              rr || (rr = Object(Oe.a)(["\n    display: none;  \n  "]))
            );
          }
        );
      function zr(e) {
        var t,
          n,
          a = e.rawSlippage,
          r = e.setRawSlippage,
          c = e.deadline,
          l = e.setDeadline,
          u = Object(o.useContext)(we.ThemeContext),
          s = Object(o.useRef)(),
          d = Object(o.useState)(""),
          m = Object(O.a)(d, 2),
          p = m[0],
          f = m[1],
          b = Object(o.useState)(""),
          y = Object(O.a)(b, 2),
          v = y[0],
          h = y[1],
          g =
            "" === p ||
            (a / 100).toFixed(2) === Number.parseFloat(p).toFixed(2),
          E = "" === v || (c / 60).toString() === v;
        function A(e) {
          f(e);
          try {
            var t = Number.parseInt((100 * Number.parseFloat(e)).toString());
            !Number.isNaN(t) && t < 5e3 && r(t);
          } catch (n) {}
        }
        function x(e) {
          h(e);
          try {
            var t = 60 * Number.parseInt(e);
            !Number.isNaN(t) && t > 0 && l(t);
          } catch (n) {}
        }
        return (
          (t =
            "" === p || g
              ? g && a < 50
                ? or.RiskyLow
                : g && a > 500
                ? or.RiskyHigh
                : void 0
              : or.InvalidInput),
          (n = "" === v || E ? void 0 : ir.InvalidInput),
          i.a.createElement(
            xr,
            { gap: "md" },
            i.a.createElement(
              xr,
              { gap: "sm" },
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(
                  sr,
                  { fontWeight: 400, fontSize: 14, color: u.text2 },
                  "Slippage tolerance"
                ),
                i.a.createElement(va, {
                  text: "Your transaction will revert if the price changes unfavorably by more than this percentage.",
                })
              ),
              i.a.createElement(
                kr,
                null,
                i.a.createElement(
                  Br,
                  {
                    onClick: function () {
                      f(""), r(10);
                    },
                    active: 10 === a,
                  },
                  "0.1%"
                ),
                i.a.createElement(
                  Br,
                  {
                    onClick: function () {
                      f(""), r(50);
                    },
                    active: 50 === a,
                  },
                  "0.5%"
                ),
                i.a.createElement(
                  Br,
                  {
                    onClick: function () {
                      f(""), r(100);
                    },
                    active: 100 === a,
                  },
                  "1%"
                ),
                i.a.createElement(
                  Mr,
                  {
                    active: ![10, 50, 100].includes(a),
                    warning: !g,
                    tabIndex: -1,
                  },
                  i.a.createElement(
                    kr,
                    null,
                    !p || (t !== or.RiskyLow && t !== or.RiskyHigh)
                      ? null
                      : i.a.createElement(
                          Dr,
                          null,
                          i.a.createElement(
                            "span",
                            { role: "img", "aria-label": "warning" },
                            "\u26a0\ufe0f"
                          )
                        ),
                    i.a.createElement(Pr, {
                      ref: s,
                      placeholder: (a / 100).toFixed(2),
                      value: p,
                      onBlur: function () {
                        A((a / 100).toFixed(2));
                      },
                      onChange: function (e) {
                        return A(e.target.value);
                      },
                      color: g ? "" : "red",
                    }),
                    "%"
                  )
                )
              ),
              !!t &&
                i.a.createElement(
                  kr,
                  {
                    style: {
                      fontSize: "14px",
                      paddingTop: "7px",
                      color: t === or.InvalidInput ? "red" : "#F3841E",
                    },
                  },
                  t === or.InvalidInput
                    ? "Enter a valid slippage percentage"
                    : t === or.RiskyLow
                    ? "Your transaction may fail"
                    : "Your transaction may be frontrun"
                )
            ),
            i.a.createElement(
              xr,
              { gap: "sm" },
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(
                  sr,
                  { fontSize: 14, fontWeight: 400, color: u.text2 },
                  "Transaction deadline"
                ),
                i.a.createElement(va, {
                  text: "Your transaction will revert if it is pending for more than this long.",
                })
              ),
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(
                  Mr,
                  { style: { width: "80px" }, tabIndex: -1 },
                  i.a.createElement(Pr, {
                    color: n ? "red" : void 0,
                    onBlur: function () {
                      x((c / 60).toString());
                    },
                    placeholder: (c / 60).toString(),
                    value: v,
                    onChange: function (e) {
                      return x(e.target.value);
                    },
                  })
                ),
                i.a.createElement(
                  dr,
                  { style: { paddingLeft: "8px" }, fontSize: 14 },
                  "minutes"
                )
              )
            )
          )
        );
      }
      var Wr = we.default.span(
          Rr ||
            (Rr = Object(Oe.a)([
              "\n  padding: 0.25rem 0.5rem;\n  border-radius: 14px;\n  background: ",
              ";\n  color: ",
              ";\n  font-size: 0.825rem;\n  font-weight: 400;\n",
            ])),
          function (e) {
            var t = e.theme,
              n = e.isActive,
              a = e.isOnSwitch;
            return n ? (a ? t.primary1 : t.text4) : "none";
          },
          function (e) {
            var t = e.theme,
              n = e.isActive,
              a = e.isOnSwitch;
            return n ? (a ? t.white : t.text2) : t.text3;
          }
        ),
        Lr = we.default.button(
          Nr ||
            (Nr = Object(Oe.a)([
              "\n  border-radius: 16px;\n  border: 1px solid ",
              ";\n  display: flex;\n  width: fit-content;\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  background-color: transparent;\n",
            ])),
          function (e) {
            var t = e.theme;
            return e.isActive ? t.primary5 : t.text4;
          }
        );
      function Fr(e) {
        var t = e.id,
          n = e.isActive,
          a = e.toggle;
        return i.a.createElement(
          Lr,
          { id: t, isActive: n, onClick: a },
          i.a.createElement(Wr, { isActive: n, isOnSwitch: !0 }, "On"),
          i.a.createElement(Wr, { isActive: !n, isOnSwitch: !1 }, "Off")
        );
      }
      var qr = n(453);
      function Hr() {
        return (Hr =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Vr(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              o = Object.keys(e);
            for (a = 0; a < o.length; a++)
              (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (n = o[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var Yr,
        Kr,
        Jr,
        Qr,
        Xr,
        Gr,
        Zr,
        _r,
        $r,
        eo,
        to,
        no,
        ao,
        ro = i.a.createElement("path", {
          d: "M9.47823 4.28625H6.27177V1.46391C6.27177 1.04331 5.89797 0.75 5.5 0.75C5.10207 0.75 4.72823 1.04327 4.72823 1.4638V4.28625H1.52177C1.124 4.28625 0.75 4.57949 0.75 5.00005C0.75 5.42178 1.12432 5.71386 1.52177 5.71386H4.72823V8.5362C4.72823 8.95818 5.10247 9.25 5.5 9.25C5.89765 9.25 6.27177 8.95774 6.27177 8.5362V5.71386H9.47823C9.87604 5.71386 10.25 5.42156 10.25 5.00005C10.25 4.57952 9.87616 4.28625 9.47823 4.28625Z",
          fill: "white",
          stroke: "white",
          strokeWidth: 0.5,
        }),
        oo = function (e) {
          var t = e.svgRef,
            n = e.title,
            a = Vr(e, ["svgRef", "title"]);
          return i.a.createElement(
            "svg",
            Hr(
              {
                width: 11,
                height: 10,
                viewBox: "0 0 11 10",
                fill: "none",
                ref: t,
              },
              a
            ),
            n ? i.a.createElement("title", null, n) : null,
            ro
          );
        },
        io = i.a.forwardRef(function (e, t) {
          return i.a.createElement(oo, Hr({ svgRef: t }, e));
        }),
        co =
          (n.p,
          Object(we.default)(Ln.Button)(
            Yr ||
              (Yr = Object(Oe.a)([
                "\n  padding: ",
                ";\n  width: ",
                ";\n  font-weight: 500;\n  text-align: center;\n  border-radius: 20px;\n  border-radius: ",
                ";\n  outline: none;\n  border: 1px solid transparent;\n  color: white;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  &:disabled {\n    cursor: auto;\n  }\n\n  > * {\n    user-select: none;\n  }\n",
              ])),
            function (e) {
              var t = e.padding;
              return t || "18px";
            },
            function (e) {
              var t = e.width;
              return t || "100%";
            },
            function (e) {
              var t = e.borderRadius;
              return t && t;
            }
          )),
        lo = Object(we.default)(co)(
          Kr ||
            (Kr = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  color: white;\n  &:focus {\n    box-shadow: 0 0 0 1pt ",
              ";\n    background-color: ",
              ";\n  }\n  &:hover {\n    background-color: ",
              ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ",
              ";\n    background-color: ",
              ";\n  }\n  &:disabled {\n    background-color: ",
              ";\n    color: ",
              ";\n    cursor: auto;\n    box-shadow: none;\n    border: 1px solid transparent;\n    outline: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.primary1;
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.05, t.primary1);
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.05, t.primary1);
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.05, t.primary1);
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.1, t.primary1);
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.1, t.primary1);
          },
          function (e) {
            var t = e.theme;
            return e.altDisbaledStyle ? t.primary1 : t.bg3;
          },
          function (e) {
            var t = e.theme;
            return e.altDisbaledStyle ? "white" : t.text3;
          }
        ),
        uo = Object(we.default)(co)(
          Jr ||
            (Jr = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  background: linear-gradient(268.53deg, #aaf5d4 0%, #7ce0d6 100%);\n  color: ",
              ";\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    box-shadow: 0 0 0 1pt ",
              ";\n    background-color: ",
              ";\n  }\n  &:hover {\n    background-color: ",
              ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ",
              ";\n    background-color: ",
              ";\n  }\n  :disabled {\n    opacity: 0.4;\n    :hover {\n      cursor: auto;\n      background-color: ",
              ";\n      box-shadow: none;\n      border: 1px solid transparent;\n      outline: none;\n    }\n  }\n",
            ])),
          function (e) {
            return e.theme.primary5;
          },
          function (e) {
            return e.theme.primaryText1;
          },
          function (e) {
            var t = e.theme;
            return !e.disabled && Object(ea.a)(0.03, t.primary5);
          },
          function (e) {
            var t = e.theme;
            return !e.disabled && Object(ea.a)(0.03, t.primary5);
          },
          function (e) {
            var t = e.theme;
            return !e.disabled && Object(ea.a)(0.03, t.primary5);
          },
          function (e) {
            var t = e.theme;
            return !e.disabled && Object(ea.a)(0.05, t.primary5);
          },
          function (e) {
            var t = e.theme;
            return !e.disabled && Object(ea.a)(0.05, t.primary5);
          },
          function (e) {
            return e.theme.primary5;
          }
        ),
        so =
          (Object(we.default)(co)(
            Qr ||
              (Qr = Object(Oe.a)([
                "\n  background-color: ",
                ";\n  color: ",
                ";\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    box-shadow: 0 0 0 1pt ",
                ";\n    background-color: ",
                ";\n  }\n  &:hover {\n    background-color: ",
                ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ",
                ";\n    background-color: ",
                ";\n  }\n",
              ])),
            function (e) {
              return e.theme.bg3;
            },
            function (e) {
              return e.theme.text2;
            },
            function (e) {
              var t = e.theme;
              return !e.disabled && Object(ea.a)(0.05, t.bg2);
            },
            function (e) {
              var t = e.theme;
              return !e.disabled && Object(ea.a)(0.05, t.bg2);
            },
            function (e) {
              var t = e.theme;
              return !e.disabled && Object(ea.a)(0.05, t.bg2);
            },
            function (e) {
              var t = e.theme;
              return !e.disabled && Object(ea.a)(0.1, t.bg2);
            },
            function (e) {
              var t = e.theme;
              return !e.disabled && Object(ea.a)(0.1, t.bg2);
            }
          ),
          Object(we.default)(co)(
            Xr ||
              (Xr = Object(Oe.a)([
                "\n  background-color: ",
                ";\n  color: ",
                ";\n  font-size: 16px;\n  border-radius: 8px;\n  padding: ",
                ";\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ",
                ";\n    background-color: ",
                ";\n  }\n  &:hover {\n    background-color: ",
                ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ",
                ";\n    background-color: ",
                ";\n  }\n  &:disabled {\n    background-color: ",
                ";\n    opacity: 50%;\n    cursor: auto;\n  }\n",
              ])),
            function (e) {
              return e.theme.primary5;
            },
            function (e) {
              return e.theme.primaryText1;
            },
            function (e) {
              var t = e.padding;
              return t || "10px";
            },
            function (e) {
              return e.theme.primary4;
            },
            function (e) {
              return e.theme.primary4;
            },
            function (e) {
              return e.theme.primary4;
            },
            function (e) {
              return e.theme.primary4;
            },
            function (e) {
              return e.theme.primary4;
            },
            function (e) {
              return e.theme.primary5;
            }
          )),
        mo =
          (Object(we.default)(co)(
            Gr ||
              (Gr = Object(Oe.a)([
                "\n  background-color: ",
                ";\n  color: white;\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ",
                ";\n    background-color: ",
                ";\n  }\n  &:hover {\n    background-color: ",
                ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ",
                ";\n    background-color: ",
                ";\n  }\n  &:disabled {\n    background-color: ",
                ";\n    opacity: 50%;\n    cursor: auto;\n  }\n",
              ])),
            function (e) {
              return e.theme.primary1;
            },
            function (e) {
              var t = e.theme;
              return Object(ea.a)(0.05, t.primary1);
            },
            function (e) {
              var t = e.theme;
              return Object(ea.a)(0.05, t.primary1);
            },
            function (e) {
              var t = e.theme;
              return Object(ea.a)(0.05, t.primary1);
            },
            function (e) {
              var t = e.theme;
              return Object(ea.a)(0.1, t.primary1);
            },
            function (e) {
              var t = e.theme;
              return Object(ea.a)(0.1, t.primary1);
            },
            function (e) {
              return e.theme.primary1;
            }
          ),
          Object(we.default)(co)(
            Zr ||
              (Zr = Object(Oe.a)([
                "\n  border: 1px solid ",
                ";\n  background-color: transparent;\n  color: ",
                ";\n\n  &:focus {\n    box-shadow: 0 0 0 1px ",
                ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1px ",
                ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1px ",
                ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n",
              ])),
            function (e) {
              return e.theme.bg2;
            },
            function (e) {
              return e.theme.text1;
            },
            function (e) {
              return e.theme.bg4;
            },
            function (e) {
              return e.theme.bg4;
            },
            function (e) {
              return e.theme.bg4;
            }
          )),
        po =
          (Object(we.default)(co)(
            _r ||
              (_r = Object(Oe.a)([
                "\n  background-color: transparent;\n  color: ",
                ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:focus {\n    background-color: ",
                ";\n  }\n  &:hover {\n    background-color: ",
                ";\n  }\n  &:active {\n    background-color: ",
                ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n",
              ])),
            function (e) {
              return e.theme.primary1;
            },
            function (e) {
              return e.theme.advancedBG;
            },
            function (e) {
              return e.theme.advancedBG;
            },
            function (e) {
              return e.theme.advancedBG;
            }
          ),
          Object(we.default)(co)(
            $r ||
              ($r = Object(Oe.a)([
                "\n  border: 1px solid #edeef2;\n  background-color: ",
                ";\n  color: black;\n\n  &:focus {\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    box-shadow: 0 0 0 1pt ",
                ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1pt ",
                ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ",
                ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n",
              ])),
            function (e) {
              return e.theme.bg1;
            },
            Object(ea.a)(0.05, "#edeef2"),
            Object(ea.a)(0.1, "#edeef2"),
            Object(ea.a)(0.1, "#edeef2")
          ),
          Object(we.default)(co)(
            eo ||
              (eo = Object(Oe.a)([
                "\n  background-color: ",
                ";\n  color: ",
                ";\n  border: 1px solid ",
                ";\n\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n",
              ])),
            function (e) {
              var t = e.theme;
              return Object(ea.b)(0.5, t.green1);
            },
            function (e) {
              return e.theme.green1;
            },
            function (e) {
              return e.theme.green1;
            }
          )),
        fo = Object(we.default)(co)(
          to ||
            (to = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  border: 1px solid ",
              ";\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ",
              ";\n    background-color: ",
              ";\n  }\n  &:hover {\n    background-color: ",
              ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ",
              ";\n    background-color: ",
              ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n    box-shadow: none;\n    background-color: ",
              ";\n    border: 1px solid ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.red1;
          },
          function (e) {
            return e.theme.red1;
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.05, t.red1);
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.05, t.red1);
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.05, t.red1);
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.1, t.red1);
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.1, t.red1);
          },
          function (e) {
            return e.theme.red1;
          },
          function (e) {
            return e.theme.red1;
          }
        ),
        bo = Object(we.default)(co)(
          no ||
            (no = Object(Oe.a)([
              "\n  background-color: #808080;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);\n  border-radius: 6px;\n  height: 37px;\n\n  &:hover {\n    background: #7ce0d6;\n  }\n",
            ]))
        ),
        yo = Object(we.default)(io)(
          ao ||
            (ao = Object(Oe.a)([
              "\n  path {\n    stroke: ",
              ";\n  }\n  margin-right: 5px;\n",
            ])),
          function (e) {
            return e.theme.text1;
          }
        );
      function vo(e) {
        var t = e.children,
          n = Object(Wn.a)(e, ["children"]);
        return i.a.createElement(bo, n, i.a.createElement(yo, null), t);
      }
      function ho(e) {
        var t = e.confirmed,
          n = Object(Wn.a)(e, ["confirmed"]);
        return t ? i.a.createElement(po, n) : i.a.createElement(lo, n);
      }
      function go(e) {
        var t = e.error,
          n = Object(Wn.a)(e, ["error"]);
        return t ? i.a.createElement(fo, n) : i.a.createElement(lo, n);
      }
      function Eo(e) {
        var t = e.disabled,
          n = void 0 !== t && t,
          a = e.children,
          r = Object(Wn.a)(e, ["disabled", "children"]);
        return i.a.createElement(
          mo,
          Object.assign({}, r, { disabled: n }),
          i.a.createElement(
            kr,
            null,
            i.a.createElement(
              "div",
              { style: { display: "flex", alignItems: "center" } },
              a
            ),
            i.a.createElement(qr.a, { size: 24 })
          )
        );
      }
      var Oo,
        Ao,
        xo,
        jo,
        wo,
        ko,
        To,
        Co,
        Io,
        So,
        Ro,
        No,
        Uo,
        Bo,
        Po,
        Mo,
        Do = n(84),
        zo = n(185),
        Wo = (n(326), n(247)),
        Lo = Object(Do.a)(zo.b),
        Fo = Object(we.default)(Lo)(
          Oo ||
            (Oo = Object(Oe.a)([
              "\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.modalBG;
          }
        ),
        qo = Object(Do.a)(zo.a),
        Ho = Object(we.default)(function (e) {
          e.minHeight, e.maxHeight, e.mobile, e.isOpen;
          var t = Object(Wn.a)(e, [
            "minHeight",
            "maxHeight",
            "mobile",
            "isOpen",
          ]);
          return i.a.createElement(qo, t);
        }).attrs({ "aria-label": "dialog" })(
          Ao ||
            (Ao = Object(Oe.a)([
              "\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    border: 1px solid ",
              ";\n    background-color: ",
              ";\n    box-shadow: 0 4px 8px 0 ",
              ";\n    padding: 0px;\n    width: 50vw;\n    overflow: hidden;\n\n    align-self: ",
              ";\n\n    max-width: 420px;\n    ",
              "\n    ",
              "\n    display: flex;\n    border-radius: 20px;\n    ",
              "\n    ",
              "\n  }\n",
            ])),
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            var t = e.theme;
            return Object(ea.c)(0.95, t.shadow1);
          },
          function (e) {
            return e.mobile ? "flex-end" : "center";
          },
          function (e) {
            var t = e.maxHeight;
            return (
              t &&
              Object(we.css)(
                xo ||
                  (xo = Object(Oe.a)([
                    "\n        max-height: ",
                    "vh;\n      ",
                  ])),
                t
              )
            );
          },
          function (e) {
            var t = e.minHeight;
            return (
              t &&
              Object(we.css)(
                jo ||
                  (jo = Object(Oe.a)([
                    "\n        min-height: ",
                    "vh;\n      ",
                  ])),
                t
              )
            );
          },
          function (e) {
            return e.theme.mediaWidth.upToMedium(
              wo ||
                (wo = Object(Oe.a)([
                  "\n      width: 65vw;\n      margin: 0;\n    ",
                ]))
            );
          },
          function (e) {
            var t = e.theme,
              n = e.mobile;
            return t.mediaWidth.upToSmall(
              ko ||
                (ko = Object(Oe.a)([
                  "\n      width:  85vw;\n      ",
                  "\n    ",
                ])),
              n &&
                Object(we.css)(
                  To ||
                    (To = Object(Oe.a)([
                      "\n          width: 100vw;\n          border-radius: 20px;\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        ",
                    ]))
                )
            );
          }
        );
      function Vo(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.minHeight,
          r = void 0 !== a && a,
          o = e.maxHeight,
          c = void 0 === o ? 50 : o,
          l = e.initialFocusRef,
          u = e.children,
          s = Object(Do.c)(t, null, {
            config: { duration: 200 },
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
          }),
          m = Object(Do.b)(function () {
            return { y: 0, config: { mass: 1, tension: 210, friction: 20 } };
          }),
          p = Object(O.a)(m, 2),
          f = p[0].y,
          b = p[1],
          y = Object(Wo.a)({
            onDrag: function (e) {
              b({ y: e.down ? e.movement[1] : 0 }),
                (e.movement[1] > 300 ||
                  (e.velocity > 3 && e.direction[1] > 0)) &&
                  n();
            },
          });
        return i.a.createElement(
          i.a.Fragment,
          null,
          s.map(function (e) {
            var t = e.item,
              a = e.key,
              o = e.props;
            return (
              t &&
              i.a.createElement(
                Fo,
                { key: a, style: o, onDismiss: n, initialFocusRef: l },
                i.a.createElement(
                  Ho,
                  Object.assign(
                    {},
                    je.isMobile
                      ? Object(d.a)(
                          Object(d.a)({}, y()),
                          {},
                          {
                            style: {
                              transform: f.interpolate(function (e) {
                                return "translateY(".concat(
                                  e > 0 ? e : 0,
                                  "px)"
                                );
                              }),
                            },
                          }
                        )
                      : {},
                    {
                      "aria-label": "dialog content",
                      minHeight: r,
                      maxHeight: c,
                      mobile: je.isMobile,
                    }
                  ),
                  !l && je.isMobile
                    ? i.a.createElement("div", { tabIndex: 1 })
                    : null,
                  u
                )
              )
            );
          })
        );
      }
      var Yo = Object(we.default)(Gn.a)(
          Co ||
            (Co = Object(Oe.a)([
              "\n  height: 20px;\n  width: 20px;\n\n  > * {\n    stroke: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.text1;
          }
        ),
        Ko = Object(we.default)(Zn.a)(
          Io ||
            (Io = Object(Oe.a)([
              "\n  height: 20px;\n  width: 20px;\n  :hover {\n    cursor: pointer;\n  }\n\n  > * {\n    stroke: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.text1;
          }
        ),
        Jo = we.default.button(
          So ||
            (So = Object(Oe.a)([
              "\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  height: 35px;\n  background-color: ",
              ";\n\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.5rem;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n    background-color: ",
              ";\n  }\n\n  svg {\n    margin-top: 2px;\n  }\n",
            ])),
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.bg4;
          }
        ),
        Qo = we.default.div(
          Ro ||
            (Ro = Object(Oe.a)([
              "\n  position: absolute;\n  bottom: -6px;\n  right: 0px;\n  font-size: 14px;\n",
            ]))
        ),
        Xo = we.default.div(
          No ||
            (No = Object(Oe.a)([
              "\n  margin-left: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  text-align: left;\n",
            ]))
        ),
        Go = we.default.span(
          Uo ||
            (Uo = Object(Oe.a)([
              "\n  min-width: 20.125rem;\n  background-color: ",
              ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n\n  border: 1px solid ",
              ";\n\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  position: absolute;\n  top: 3rem;\n  right: 0rem;\n  z-index: 100;\n\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              Bo ||
                (Bo = Object(Oe.a)([
                  "\n    min-width: 18.125rem;\n    right: -46px;\n  ",
                ]))
            );
          }
        ),
        Zo = we.default.div(
          Po ||
            (Po = Object(Oe.a)([
              "\n  width: 100%;\n  height: 1px;\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.bg3;
          }
        ),
        _o = we.default.div(
          Mo ||
            (Mo = Object(Oe.a)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n  background-color: ",
              ";\n  border-radius: 20px;\n",
            ])),
          function (e) {
            return e.theme.bg2;
          }
        );
      function $o() {
        var e = Object(o.useRef)(),
          t = Object(u.d)(function (e) {
            return e.application.settingsMenuOpen;
          }),
          n = Xe(),
          a = Object(o.useContext)(we.ThemeContext),
          r = Bt(),
          c = Object(O.a)(r, 2),
          l = c[0],
          s = c[1],
          d = Pt(),
          m = Object(O.a)(d, 2),
          p = m[0],
          f = m[1],
          b = Ut(),
          y = Object(O.a)(b, 2),
          v = y[0],
          h = y[1],
          g = Rt(),
          E = Object(O.a)(g, 2),
          A = E[0],
          x = E[1],
          j = Object(o.useState)(!1),
          w = Object(O.a)(j, 2),
          k = w[0],
          T = w[1];
        return (
          _n(e, t ? n : void 0),
          i.a.createElement(
            Xo,
            { ref: e },
            i.a.createElement(
              Vo,
              {
                isOpen: k,
                onDismiss: function () {
                  return T(!1);
                },
                maxHeight: 100,
              },
              i.a.createElement(
                _o,
                null,
                i.a.createElement(
                  xr,
                  { gap: "lg" },
                  i.a.createElement(
                    kr,
                    { style: { padding: "0 2rem" } },
                    i.a.createElement("div", null),
                    i.a.createElement(
                      ke.b,
                      { fontWeight: 500, fontSize: 20 },
                      "Are you sure?"
                    ),
                    i.a.createElement(Ko, {
                      onClick: function () {
                        return T(!1);
                      },
                    })
                  ),
                  i.a.createElement(Zo, null),
                  i.a.createElement(
                    xr,
                    { gap: "lg", style: { padding: "0 2rem" } },
                    i.a.createElement(
                      ke.b,
                      { fontWeight: 500, fontSize: 20 },
                      "Expert mode turns off the confirm transaction prompt and allows high slippage trades that often result in bad rates and lost funds."
                    ),
                    i.a.createElement(
                      ke.b,
                      { fontWeight: 600, fontSize: 20 },
                      "ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING."
                    ),
                    i.a.createElement(
                      go,
                      {
                        error: !0,
                        padding: "12px",
                        onClick: function () {
                          "confirm" ===
                            window.prompt(
                              'Please type the word "confirm" to enable expert mode.'
                            ) && (h(), T(!1));
                        },
                      },
                      i.a.createElement(
                        ke.b,
                        {
                          fontSize: 20,
                          fontWeight: 500,
                          id: "confirm-expert-mode",
                        },
                        "Turn On Expert Mode"
                      )
                    )
                  )
                )
              )
            ),
            i.a.createElement(
              Jo,
              { onClick: n, id: "open-settings-dialog-button" },
              i.a.createElement(Yo, null),
              v &&
                i.a.createElement(
                  Qo,
                  null,
                  i.a.createElement(
                    "span",
                    { role: "img", "aria-label": "wizard-icon" },
                    "\ud83e\uddd9"
                  )
                )
            ),
            t &&
              i.a.createElement(
                Go,
                null,
                i.a.createElement(
                  xr,
                  { gap: "md", style: { padding: "1rem" } },
                  i.a.createElement(
                    ke.b,
                    { fontWeight: 600, fontSize: 14 },
                    "Transaction Settings"
                  ),
                  i.a.createElement(zr, {
                    rawSlippage: l,
                    setRawSlippage: s,
                    deadline: p,
                    setDeadline: f,
                  }),
                  i.a.createElement(
                    ke.b,
                    { fontWeight: 600, fontSize: 14 },
                    "Interface Settings"
                  ),
                  i.a.createElement(
                    kr,
                    null,
                    i.a.createElement(
                      Ir,
                      null,
                      i.a.createElement(
                        sr,
                        { fontWeight: 400, fontSize: 14, color: a.text2 },
                        "Toggle Expert Mode"
                      ),
                      i.a.createElement(va, {
                        text: "Bypasses confirmation modals and allows high slippage trades. Use at your own risk.",
                      })
                    ),
                    i.a.createElement(Fr, {
                      id: "toggle-expert-mode-button",
                      isActive: v,
                      toggle: v
                        ? function () {
                            h(), T(!1);
                          }
                        : function () {
                            n(), T(!0);
                          },
                    })
                  ),
                  i.a.createElement(
                    kr,
                    null,
                    i.a.createElement(
                      Ir,
                      null,
                      i.a.createElement(
                        sr,
                        { fontWeight: 400, fontSize: 14, color: a.text2 },
                        "Toggle Dark Mode"
                      )
                    ),
                    i.a.createElement(Fr, { isActive: A, toggle: x })
                  )
                )
              )
          )
        );
      }
      var ei = n(455),
        ti = n(456),
        ni = n(457),
        ai = n(458),
        ri = n(459);
      function oi() {
        return (oi =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ii(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              o = Object.keys(e);
            for (a = 0; a < o.length; a++)
              (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (n = o[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var ci,
        li,
        ui,
        si,
        di,
        mi = i.a.createElement("path", {
          d: "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",
          stroke: "black",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        pi = i.a.createElement("path", {
          d: "M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",
          stroke: "black",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        fi = i.a.createElement("path", {
          d: "M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",
          stroke: "black",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        bi = function (e) {
          var t = e.svgRef,
            n = e.title,
            a = ii(e, ["svgRef", "title"]);
          return i.a.createElement(
            "svg",
            oi(
              {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                ref: t,
              },
              a
            ),
            n ? i.a.createElement("title", null, n) : null,
            mi,
            pi,
            fi
          );
        },
        yi = i.a.forwardRef(function (e, t) {
          return i.a.createElement(bi, oi({ svgRef: t }, e));
        });
      n.p;
      function vi() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = Object(o.useState)(e),
          n = Object(O.a)(t, 2),
          a = n[0],
          r = n[1],
          i = Object(o.useCallback)(function () {
            return r(function (e) {
              return !e;
            });
          }, []);
        return [a, i];
      }
      var hi = Object(we.default)(yi)(
          ci || (ci = Object(Oe.a)(["\n  path {\n    stroke: ", ";\n  }\n"])),
          function (e) {
            return e.theme.text1;
          }
        ),
        gi = we.default.button(
          li ||
            (li = Object(Oe.a)([
              "\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  height: 35px;\n  background-color: ",
              ";\n\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.5rem;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n    background-color: ",
              ";\n  }\n\n  svg {\n    margin-top: 2px;\n  }\n",
            ])),
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.bg4;
          }
        ),
        Ei = we.default.div(
          ui ||
            (ui = Object(Oe.a)([
              "\n  margin-left: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  text-align: left;\n",
            ]))
        ),
        Oi = we.default.span(
          si ||
            (si = Object(Oe.a)([
              "\n  min-width: 8.125rem;\n  background-color: ",
              ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  position: absolute;\n  top: 3rem;\n  right: 0rem;\n  z-index: 100;\n",
            ])),
          function (e) {
            return e.theme.bg3;
          }
        ),
        Ai = Object(we.default)(Ra)(
          di ||
            (di = Object(Oe.a)([
              "\n  flex: 1;\n  padding: 0.5rem 0.5rem;\n  color: ",
              ";\n  :hover {\n    color: ",
              ";\n    cursor: pointer;\n    text-decoration: none;\n  }\n  > svg {\n    margin-right: 8px;\n  }\n",
            ])),
          function (e) {
            return e.theme.text2;
          },
          function (e) {
            return e.theme.text1;
          }
        );
      function xi() {
        var e = Object(o.useRef)(),
          t = vi(!1),
          n = Object(O.a)(t, 2),
          a = n[0],
          r = n[1];
        return (
          _n(e, a ? r : void 0),
          i.a.createElement(
            Ei,
            { ref: e },
            i.a.createElement(gi, { onClick: r }, i.a.createElement(hi, null)),
            a &&
              i.a.createElement(
                Oi,
                null,
                i.a.createElement(
                  Ai,
                  { id: "link", href: "" },
                  i.a.createElement(ei.a, { size: 14 }),
                  "About"
                ),
                i.a.createElement(
                  Ai,
                  { id: "link", href: "https://xdai.bao.finance/" },
                  i.a.createElement(ei.a, { size: 14 }),
                  "Farm"
                ),
                i.a.createElement(
                  Ai,
                  { id: "link", href: "https://docs.bao.finance" },
                  i.a.createElement(ti.a, { size: 14 }),
                  "Docs"
                ),
                i.a.createElement(
                  Ai,
                  {
                    id: "link",
                    href: "https://etherscan.io/address/0xBD530a1c060DC600b951f16dc656E4EA451d1A2D",
                  },
                  i.a.createElement(ni.a, { size: 14 }),
                  "Code"
                ),
                i.a.createElement(
                  Ai,
                  { id: "link", href: "https://discord.gg/BW3P62vJXT" },
                  i.a.createElement(ai.a, { size: 14 }),
                  "Discord"
                ),
                i.a.createElement(
                  Ai,
                  { id: "link", href: "#" },
                  i.a.createElement(ri.a, { size: 14 }),
                  "Analytics (Coming Soon)"
                )
              )
          )
        );
      }
      var ji = n(464),
        wi = n(118),
        ki = n.n(wi),
        Ti = n(119),
        Ci = n.n(Ti),
        Ii = n(120),
        Si = n.n(Ii),
        Ri = n(121),
        Ni = n.n(Ri),
        Ui = n(89);
      function Bi(e) {
        return /^0x0*$/.test(e);
      }
      function Pi(e, t) {
        var n = Object(o.useState)(e),
          a = Object(O.a)(n, 2),
          r = a[0],
          i = a[1];
        return (
          Object(o.useEffect)(
            function () {
              var n = setTimeout(function () {
                i(e);
              }, t);
              return function () {
                clearTimeout(n);
              };
            },
            [e, t]
          ),
          r
        );
      }
      function Mi(e) {
        var t,
          n,
          a,
          r = Pi(e, 200),
          i = Object(o.useMemo)(
            function () {
              if (!r || !Vt(r)) return [void 0];
              try {
                return r
                  ? [
                      Object(Ui.namehash)(
                        "".concat(r.toLowerCase().substr(2), ".addr.reverse")
                      ),
                    ]
                  : [void 0];
              } catch (e) {
                return [void 0];
              }
            },
            [r]
          ),
          c = yt(hn(!1), "resolver", i),
          l = null === (t = c.result) || void 0 === t ? void 0 : t[0],
          u = yt(gn(l && !Bi(l) ? l : void 0, !1), "name", i),
          s = r !== e;
        return {
          ENSName: s
            ? null
            : null !==
                (n = null === (a = u.result) || void 0 === a ? void 0 : a[0]) &&
              void 0 !== n
            ? n
            : null,
          loading: s || c.loading || u.loading,
        };
      }
      function Di() {
        var e = Te().account,
          t = yt(
            fn(
              Te().chainId === p.ChainId.MAINNET
                ? "0x65770b5283117639760beA3F867b69b3697a91dd"
                : void 0,
              cn,
              !1
            ),
            "balanceOf",
            [null !== e && void 0 !== e ? e : void 0],
            ut
          ).result,
          n = null === t || void 0 === t ? void 0 : t[0];
        return n ? p.JSBI.BigInt(n.toString()) : void 0;
      }
      var zi = Object(Fe.b)("transactions/addTransaction"),
        Wi = Object(Fe.b)("transactions/clearAllTransactions"),
        Li = Object(Fe.b)("transactions/finalizeTransaction"),
        Fi = Object(Fe.b)("transactions/checkedTransaction");
      function qi() {
        var e = Te(),
          t = e.chainId,
          n = e.account,
          a = Object(u.c)();
        return Object(o.useCallback)(
          function (e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              o = r.summary,
              i = r.approval;
            if (n && t) {
              var c = e.hash;
              if (!c) throw Error("No transaction hash found.");
              a(zi({ hash: c, from: n, chainId: t, approval: i, summary: o }));
            }
          },
          [a, t, n]
        );
      }
      function Hi() {
        var e,
          t = Te().chainId,
          n = Object(u.d)(function (e) {
            return e.transactions;
          });
        return t && null !== (e = n[t]) && void 0 !== e ? e : {};
      }
      function Vi(e) {
        var t = Hi();
        return !(!e || !t[e]) && !t[e].receipt;
      }
      function Yi(e) {
        return new Date().getTime() - e.addedTime < 864e5;
      }
      var Ki,
        Ji,
        Qi,
        Xi = n(249),
        Gi = n.n(Xi),
        Zi = we.default.div(
          Ki ||
            (Ki = Object(Oe.a)([
              "\n  height: 1rem;\n  width: 1rem;\n  border-radius: 1.125rem;\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.bg4;
          }
        );
      function _i() {
        var e = Object(o.useRef)(),
          t = Te().account;
        return (
          Object(o.useEffect)(
            function () {
              t &&
                e.current &&
                ((e.current.innerHTML = ""),
                e.current.appendChild(Gi()(16, parseInt(t.slice(2, 10), 16))));
            },
            [t]
          ),
          i.a.createElement(Zi, { ref: e })
        );
      }
      var $i = Object(we.keyframes)(
          Ji ||
            (Ji = Object(Oe.a)([
              "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
            ]))
        ),
        ec = we.default.svg(
          Qi ||
            (Qi = Object(Oe.a)([
              "\n  animation: 2s ",
              " linear infinite;\n  height: ",
              ";\n  width: ",
              ";\n  path {\n    stroke: ",
              ";\n  }\n",
            ])),
          $i,
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            var t = e.stroke,
              n = e.theme;
            return null !== t && void 0 !== t ? t : n.primary1;
          }
        );
      function tc(e) {
        var t = e.size,
          n = void 0 === t ? "16px" : t,
          a = e.stroke,
          r = Object(Wn.a)(e, ["size", "stroke"]);
        return i.a.createElement(
          ec,
          Object.assign(
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              size: n,
              stroke: a,
            },
            r
          ),
          i.a.createElement("path", {
            d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        );
      }
      function nc(e) {
        var t = Object(o.useRef)();
        return (
          Object(o.useEffect)(
            function () {
              t.current = e;
            },
            [e]
          ),
          t.current
        );
      }
      var ac = n(250),
        rc = n.n(ac);
      var oc,
        ic,
        cc = n(460),
        lc = n(461),
        uc = Object(we.default)(Ca)(
          oc ||
            (oc = Object(Oe.a)([
              "\n  color: ",
              ";\n  flex-shrink: 0;\n  display: flex;\n  text-decoration: none;\n  font-size: 0.825rem;\n  :hover,\n  :active,\n  :focus {\n    text-decoration: none;\n    color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.text3;
          },
          function (e) {
            return e.theme.text2;
          }
        ),
        sc = we.default.span(
          ic ||
            (ic = Object(Oe.a)([
              "\n  margin-left: 0.25rem;\n  font-size: 0.825rem;\n  ",
              ";\n  align-items: center;\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          }
        );
      function dc(e) {
        var t = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 500,
              t = Object(o.useState)(!1),
              n = Object(O.a)(t, 2),
              a = n[0],
              r = n[1],
              i = Object(o.useCallback)(function (e) {
                var t = rc()(e);
                r(t);
              }, []);
            return (
              Object(o.useEffect)(
                function () {
                  if (a) {
                    var t = setTimeout(function () {
                      r(!1);
                    }, e);
                    return function () {
                      clearTimeout(t);
                    };
                  }
                },
                [a, r, e]
              ),
              [a, i]
            );
          })(),
          n = Object(O.a)(t, 2),
          a = n[0],
          r = n[1];
        return i.a.createElement(
          uc,
          {
            onClick: function () {
              return r(e.toCopy);
            },
          },
          a
            ? i.a.createElement(
                sc,
                null,
                i.a.createElement(cc.a, { size: "16" }),
                i.a.createElement(sc, null, "Copied")
              )
            : i.a.createElement(
                sc,
                null,
                i.a.createElement(lc.a, { size: "16" })
              ),
          a ? "" : e.children
        );
      }
      var mc,
        pc,
        fc,
        bc,
        yc = n(462),
        vc = we.default.div(mc || (mc = Object(Oe.a)([""]))),
        hc = we.default.div(
          pc ||
            (pc = Object(Oe.a)([
              "\n  margin-right: 0.5rem;\n  display: flex;\n  align-items: center;\n  :hover {\n    text-decoration: underline;\n  }\n",
            ]))
        ),
        gc = Object(we.default)(Ra)(
          fc ||
            (fc = Object(Oe.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.primary1;
          }
        ),
        Ec = we.default.div(
          bc || (bc = Object(Oe.a)(["\n  color: ", ";\n"])),
          function (e) {
            var t = e.pending,
              n = e.success,
              a = e.theme;
            return t ? a.primary1 : n ? a.green1 : a.red1;
          }
        );
      function Oc(e) {
        var t,
          n,
          a = e.hash,
          r = Te().chainId,
          o = Hi(),
          c = null === o || void 0 === o ? void 0 : o[a],
          l = null === c || void 0 === c ? void 0 : c.summary,
          u = !(null === c || void 0 === c ? void 0 : c.receipt),
          s =
            !u &&
            c &&
            (1 ===
              (null === (t = c.receipt) || void 0 === t ? void 0 : t.status) ||
              "undefined" ===
                typeof (null === (n = c.receipt) || void 0 === n
                  ? void 0
                  : n.status));
        return r
          ? i.a.createElement(
              vc,
              null,
              i.a.createElement(
                gc,
                { href: Kt(r, a, "transaction"), pending: u, success: s },
                i.a.createElement(
                  Ir,
                  null,
                  i.a.createElement(
                    hc,
                    null,
                    null !== l && void 0 !== l ? l : a,
                    " \u2197"
                  )
                ),
                i.a.createElement(
                  Ec,
                  { pending: u, success: s },
                  u
                    ? i.a.createElement(tc, null)
                    : s
                    ? i.a.createElement(cc.a, { size: "16" })
                    : i.a.createElement(yc.a, { size: "16" })
                )
              )
            )
          : null;
      }
      function Ac() {
        return (Ac =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function xc(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              o = Object.keys(e);
            for (a = 0; a < o.length; a++)
              (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (n = o[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var jc,
        wc,
        kc,
        Tc,
        Cc,
        Ic,
        Sc,
        Rc,
        Nc,
        Uc,
        Bc,
        Pc,
        Mc,
        Dc,
        zc,
        Wc,
        Lc,
        Fc,
        qc,
        Hc,
        Vc,
        Yc,
        Kc,
        Jc,
        Qc,
        Xc,
        Gc,
        Zc,
        _c,
        $c = i.a.createElement("line", { x1: 18, y1: 6, x2: 6, y2: 18 }),
        el = i.a.createElement("line", { x1: 6, y1: 6, x2: 18, y2: 18 }),
        tl = function (e) {
          var t = e.svgRef,
            n = e.title,
            a = xc(e, ["svgRef", "title"]);
          return i.a.createElement(
            "svg",
            Ac(
              {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "feather feather-x",
                ref: t,
              },
              a
            ),
            n ? i.a.createElement("title", null, n) : null,
            $c,
            el
          );
        },
        nl = i.a.forwardRef(function (e, t) {
          return i.a.createElement(tl, Ac({ svgRef: t }, e));
        }),
        al = (n.p, n(463)),
        rl = we.default.div(
          jc ||
            (jc = Object(Oe.a)([
              "\n  ",
              ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ",
              ";\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          },
          function (e) {
            return "blue" === e.color
              ? function (e) {
                  return e.theme.primary1;
                }
              : "inherit";
          },
          function (e) {
            return e.theme.mediaWidth.upToMedium(
              wc || (wc = Object(Oe.a)(["\n    padding: 1rem;\n  "]))
            );
          }
        ),
        ol = we.default.div(
          kc ||
            (kc = Object(Oe.a)([
              "\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n",
            ]))
        ),
        il = we.default.div(
          Tc ||
            (Tc = Object(Oe.a)([
              "\n  padding: 1rem;\n  border: 1px solid ",
              ";\n  border-radius: 20px;\n  position: relative;\n  display: grid;\n  grid-row-gap: 12px;\n  margin-bottom: 20px;\n",
            ])),
          function (e) {
            return e.theme.bg3;
          }
        ),
        cl = we.default.div(
          Cc ||
            (Cc = Object(Oe.a)([
              "\n  ",
              ";\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 400;\n  color: ",
              ";\n\n  div {\n    ",
              "\n    align-items: center;\n  }\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          },
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            return e.theme.flexRowNoWrap;
          }
        ),
        ll = we.default.div(
          Ic ||
            (Ic = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  padding: 0rem 1rem;\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.theme.mediaWidth.upToMedium(
              Sc || (Sc = Object(Oe.a)(["padding: 0rem 1rem 1.5rem 1rem;"]))
            );
          }
        ),
        ul = we.default.div(
          Rc ||
            (Rc = Object(Oe.a)([
              "\n  h5 {\n    margin: 0 0 1rem 0;\n    font-weight: 400;\n  }\n\n  h4 {\n    margin: 0;\n    font-weight: 500;\n  }\n",
            ]))
        ),
        sl = we.default.div(
          Nc ||
            (Nc = Object(Oe.a)([
              "\n  ",
              "\n  padding: 1.5rem;\n  flex-grow: 1;\n  overflow: auto;\n  background-color: ",
              ";\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 20px;\n\n  h5 {\n    margin: 0;\n    font-weight: 400;\n    color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.flexColumnNoWrap;
          },
          function (e) {
            return e.theme.bg2;
          },
          function (e) {
            return e.theme.text3;
          }
        ),
        dl = we.default.div(
          Uc ||
            (Uc = Object(Oe.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  min-width: 0;\n  width: 100%;\n\n  font-weight: 500;\n  font-size: 1.25rem;\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  p {\n    min-width: 0;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n",
            ]))
        ),
        ml = Object(we.default)(Ra)(
          Bc ||
            (Bc = Object(Oe.a)([
              "\n  font-size: 0.825rem;\n  color: ",
              ";\n  margin-left: 1rem;\n  font-size: 0.825rem;\n  display: flex;\n  :hover {\n    color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.text3;
          },
          function (e) {
            return e.theme.text2;
          }
        ),
        pl = we.default.div(
          Pc ||
            (Pc = Object(Oe.a)([
              "\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n",
            ]))
        ),
        fl = Object(we.default)(nl)(
          Mc || (Mc = Object(Oe.a)(["\n  path {\n    stroke: ", ";\n  }\n"])),
          function (e) {
            return e.theme.text4;
          }
        ),
        bl = we.default.div(
          Dc ||
            (Dc = Object(Oe.a)([
              "\n  width: initial;\n  font-size: 0.825rem;\n  font-weight: 500;\n  color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.text3;
          }
        ),
        yl = we.default.div(
          zc ||
            (zc = Object(Oe.a)([
              "\n  ",
              ";\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  & > img,\n  span {\n    height: ",
              ";\n    width: ",
              ";\n  }\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.flexColumnNoWrap;
          },
          function (e) {
            var t = e.size;
            return t ? t + "px" : "32px";
          },
          function (e) {
            var t = e.size;
            return t ? t + "px" : "32px";
          },
          function (e) {
            return e.theme.mediaWidth.upToMedium(
              Wc || (Wc = Object(Oe.a)(["\n    align-items: flex-end;\n  "]))
            );
          }
        ),
        vl = we.default.div(
          Lc || (Lc = Object(Oe.a)(["\n  ", ";\n"])),
          function (e) {
            return e.theme.flexColumnNoWrap;
          }
        ),
        hl = Object(we.default)(so)(
          Fc ||
            (Fc = Object(Oe.a)([
              "\n  width: fit-content;\n  font-weight: 400;\n  margin-left: 8px;\n  font-size: 0.825rem;\n  padding: 4px 6px;\n  :hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n",
            ]))
        ),
        gl = Object(we.default)(hl)(
          qc || (qc = Object(Oe.a)(["\n  color: ", ";\n"])),
          function (e) {
            return e.theme.primary1;
          }
        );
      function El(e) {
        return i.a.createElement(
          vl,
          null,
          e.map(function (e, t) {
            return i.a.createElement(Oc, { key: t, hash: e });
          })
        );
      }
      function Ol(e) {
        var t = e.toggleWalletModal,
          n = e.pendingTransactions,
          a = e.confirmedTransactions,
          r = e.ENSName,
          c = e.openOptions,
          l = Te(),
          s = l.chainId,
          d = l.account,
          m = l.connector,
          p = Object(o.useContext)(we.ThemeContext),
          f = Object(u.c)();
        function b() {
          return m === V
            ? i.a.createElement(yl, { size: 16 }, i.a.createElement(_i, null))
            : m === Y
            ? i.a.createElement(
                yl,
                { size: 16 },
                i.a.createElement("img", {
                  src: Ni.a,
                  alt: "wallet connect logo",
                })
              )
            : m === Q
            ? i.a.createElement(
                yl,
                { size: 16 },
                i.a.createElement("img", {
                  src: ki.a,
                  alt: "coinbase wallet logo",
                })
              )
            : m === K
            ? i.a.createElement(
                yl,
                { size: 16 },
                i.a.createElement("img", { src: Ci.a, alt: "fortmatic logo" })
              )
            : m === J
            ? i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  yl,
                  { size: 16 },
                  i.a.createElement("img", { src: Si.a, alt: "portis logo" }),
                  i.a.createElement(
                    gl,
                    {
                      onClick: function () {
                        J.portis.showPortis();
                      },
                    },
                    "Show Portis"
                  )
                )
              )
            : null;
        }
        var y = Object(o.useCallback)(
          function () {
            s && f(Wi({ chainId: s }));
          },
          [f, s]
        );
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            ol,
            null,
            i.a.createElement(pl, { onClick: t }, i.a.createElement(fl, null)),
            i.a.createElement(rl, null, "Account"),
            i.a.createElement(
              ll,
              null,
              i.a.createElement(
                ul,
                null,
                i.a.createElement(
                  il,
                  null,
                  i.a.createElement(
                    cl,
                    null,
                    (function () {
                      var e = window.ethereum,
                        t = !(!e || !e.isMetaMask),
                        n = Object.keys(oe)
                          .filter(function (e) {
                            return (
                              oe[e].connector === m &&
                              (m !== V || t === ("METAMASK" === e))
                            );
                          })
                          .map(function (e) {
                            return oe[e].name;
                          })[0];
                      return i.a.createElement(bl, null, "Connected with ", n);
                    })(),
                    i.a.createElement(
                      "div",
                      null,
                      m !== V &&
                        m !== Q &&
                        i.a.createElement(
                          hl,
                          {
                            style: {
                              fontSize: ".825rem",
                              fontWeight: 400,
                              marginRight: "8px",
                            },
                            onClick: function () {
                              m.close();
                            },
                          },
                          "Disconnect"
                        ),
                      i.a.createElement(
                        hl,
                        {
                          style: { fontSize: ".825rem", fontWeight: 400 },
                          onClick: function () {
                            c();
                          },
                        },
                        "Change"
                      )
                    )
                  ),
                  i.a.createElement(
                    cl,
                    { id: "web3-account-identifier-row" },
                    i.a.createElement(
                      dl,
                      null,
                      r
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(
                              "div",
                              null,
                              b(),
                              i.a.createElement("p", null, " ", r)
                            )
                          )
                        : i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(
                              "div",
                              null,
                              b(),
                              i.a.createElement("p", null, " ", d && Jt(d))
                            )
                          )
                    )
                  ),
                  i.a.createElement(
                    cl,
                    null,
                    r
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            dl,
                            null,
                            i.a.createElement(
                              "div",
                              null,
                              d &&
                                i.a.createElement(
                                  dc,
                                  { toCopy: d },
                                  i.a.createElement(
                                    "span",
                                    { style: { marginLeft: "4px" } },
                                    "Copy Address"
                                  )
                                ),
                              s &&
                                d &&
                                i.a.createElement(
                                  ml,
                                  {
                                    hasENS: !!r,
                                    isENS: !0,
                                    href: s && Kt(s, r, "address"),
                                  },
                                  i.a.createElement(al.a, { size: 16 }),
                                  i.a.createElement(
                                    "span",
                                    { style: { marginLeft: "4px" } },
                                    "View on blockscout"
                                  )
                                )
                            )
                          )
                        )
                      : i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            dl,
                            null,
                            i.a.createElement(
                              "div",
                              null,
                              d &&
                                i.a.createElement(
                                  dc,
                                  { toCopy: d },
                                  i.a.createElement(
                                    "span",
                                    { style: { marginLeft: "4px" } },
                                    "Copy Address"
                                  )
                                ),
                              s &&
                                d &&
                                i.a.createElement(
                                  ml,
                                  {
                                    hasENS: !!r,
                                    isENS: !1,
                                    href: Kt(s, d, "address"),
                                  },
                                  i.a.createElement(al.a, { size: 16 }),
                                  i.a.createElement(
                                    "span",
                                    { style: { marginLeft: "4px" } },
                                    "View on Blockscout"
                                  )
                                )
                            )
                          )
                        )
                  )
                )
              )
            )
          ),
          n.length || a.length
            ? i.a.createElement(
                sl,
                null,
                i.a.createElement(
                  Cr,
                  { mb: "1rem", style: { justifyContent: "space-between" } },
                  i.a.createElement(dr, null, "Recent Transactions"),
                  i.a.createElement(Ca, { onClick: y }, "(clear all)")
                ),
                El(n),
                El(a)
              )
            : i.a.createElement(
                sl,
                null,
                i.a.createElement(
                  dr,
                  { color: p.text1 },
                  "Your transactions will appear here..."
                )
              )
        );
      }
      var Al,
        xl,
        jl,
        wl,
        kl,
        Tl,
        Cl = we.default.button(
          Hc ||
            (Hc = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  padding: 1rem;\n  outline: none;\n  border: 1px solid;\n  border-radius: 12px;\n  width: 100% !important;\n  &:focus {\n    box-shadow: 0 0 0 1px ",
              ";\n  }\n  border-color: ",
              ";\n",
            ])),
          function (e) {
            var t = e.theme;
            return e.active ? t.bg3 : t.bg2;
          },
          function (e) {
            return e.theme.primary1;
          },
          function (e) {
            var t = e.theme;
            return e.active ? "transparent" : t.bg3;
          }
        ),
        Il = Object(we.default)(Cl)(
          Vc ||
            (Vc = Object(Oe.a)([
              "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 2rem;\n  padding: 1rem;\n",
            ]))
        ),
        Sl = we.default.div(
          Yc ||
            (Yc = Object(Oe.a)([
              "\n  ",
              ";\n  justify-content: center;\n  height: 100%;\n",
            ])),
          function (e) {
            return e.theme.flexColumnNoWrap;
          }
        ),
        Rl = Object(we.default)(Il)(
          Kc ||
            (Kc = Object(Oe.a)([
              "\n  margin-top: 0;\n  &:hover {\n    cursor: ",
              ";\n    border: ",
              ";\n  }\n  opacity: ",
              ";\n",
            ])),
          function (e) {
            return e.clickable ? "pointer" : "";
          },
          function (e) {
            var t = e.clickable,
              n = e.theme;
            return t ? "1px solid ".concat(n.primary1) : "";
          },
          function (e) {
            return e.disabled ? "0.5" : "1";
          }
        ),
        Nl = we.default.div(
          Jc ||
            (Jc = Object(Oe.a)([
              "\n  ",
              "\n  justify-content: center;\n  align-items: center;\n\n  &:first-child {\n    height: 8px;\n    width: 8px;\n    margin-right: 8px;\n    background-color: ",
              ";\n    border-radius: 50%;\n  }\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          },
          function (e) {
            return e.theme.green1;
          }
        ),
        Ul = we.default.div(
          Qc ||
            (Qc = Object(Oe.a)([
              "\n  color: ",
              ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ])),
          function (e) {
            return e.theme.green1;
          }
        ),
        Bl = we.default.div(
          Xc ||
            (Xc = Object(Oe.a)([
              "\n  ",
              ";\n  color: ",
              ";\n  font-size: 1rem;\n  font-weight: 500;\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          },
          function (e) {
            return "blue" === e.color
              ? function (e) {
                  return e.theme.primary1;
                }
              : function (e) {
                  return e.theme.text1;
                };
          }
        ),
        Pl = we.default.div(
          Gc ||
            (Gc = Object(Oe.a)([
              "\n  color: ",
              ";\n  margin-top: 10px;\n  font-size: 12px;\n",
            ])),
          function (e) {
            return e.theme.text1;
          }
        ),
        Ml = we.default.div(
          Zc ||
            (Zc = Object(Oe.a)([
              "\n  ",
              ";\n  align-items: center;\n  justify-content: center;\n  & > img,\n  span {\n    height: ",
              ";\n    width: ",
              ";\n  }\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.flexColumnNoWrap;
          },
          function (e) {
            var t = e.size;
            return t ? t + "px" : "24px";
          },
          function (e) {
            var t = e.size;
            return t ? t + "px" : "24px";
          },
          function (e) {
            return e.theme.mediaWidth.upToMedium(
              _c || (_c = Object(Oe.a)(["\n    align-items: flex-end;\n  "]))
            );
          }
        );
      function Dl(e) {
        var t = e.link,
          n = void 0 === t ? null : t,
          a = e.clickable,
          r = void 0 === a || a,
          o = e.size,
          c = e.onClick,
          l = void 0 === c ? null : c,
          u = e.color,
          s = e.header,
          d = e.subheader,
          m = void 0 === d ? null : d,
          p = e.icon,
          f = e.active,
          b = void 0 !== f && f,
          y = e.id,
          v = i.a.createElement(
            Rl,
            { id: y, onClick: l, clickable: r && !b, active: b },
            i.a.createElement(
              Sl,
              null,
              i.a.createElement(
                Bl,
                { color: u },
                b
                  ? i.a.createElement(
                      Ul,
                      null,
                      i.a.createElement(
                        Nl,
                        null,
                        i.a.createElement("div", null)
                      )
                    )
                  : "",
                s
              ),
              m && i.a.createElement(Pl, null, m)
            ),
            i.a.createElement(
              Ml,
              { size: o },
              i.a.createElement("img", { src: p, alt: "Icon" })
            )
          );
        return n ? i.a.createElement(Ra, { href: n }, v) : v;
      }
      var zl = we.default.div(
          Al ||
            (Al = Object(Oe.a)([
              "\n  ",
              ";\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  & > * {\n    width: 100%;\n  }\n",
            ])),
          function (e) {
            return e.theme.flexColumnNoWrap;
          }
        ),
        Wl = Object(we.default)(tc)(
          xl || (xl = Object(Oe.a)(["\n  margin-right: 1rem;\n"]))
        ),
        Ll = we.default.div(
          jl ||
            (jl = Object(Oe.a)([
              "\n  ",
              ";\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  color: ",
              ";\n  border: 1px solid ",
              ";\n\n  & > * {\n    padding: 1rem;\n  }\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          },
          function (e) {
            var t = e.theme;
            return e.error ? t.red1 : "inherit";
          },
          function (e) {
            var t = e.theme;
            return e.error ? t.red1 : t.text4;
          }
        ),
        Fl = we.default.div(
          wl ||
            (wl = Object(Oe.a)([
              "\n  ",
              ";\n  align-items: center;\n  justify-content: flex-start;\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          }
        ),
        ql = we.default.div(
          kl ||
            (kl = Object(Oe.a)([
              "\n  border-radius: 8px;\n  font-size: 12px;\n  color: ",
              ";\n  background-color: ",
              ";\n  margin-left: 1rem;\n  padding: 0.5rem;\n  font-weight: 600;\n  user-select: none;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            return e.theme.bg4;
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.1, t.text4);
          }
        ),
        Hl = we.default.div(
          Tl ||
            (Tl = Object(Oe.a)([
              "\n  ",
              ";\n  align-items: center;\n  justify-content: center;\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          }
        );
      function Vl(e) {
        var t,
          a,
          r = e.connector,
          o = e.error,
          c = void 0 !== o && o,
          l = e.setPendingError,
          u = e.tryActivation,
          s =
            null === (t = window) ||
            void 0 === t ||
            null === (a = t.ethereum) ||
            void 0 === a
              ? void 0
              : a.isMetaMask;
        return i.a.createElement(
          zl,
          null,
          i.a.createElement(
            Ll,
            { error: c },
            i.a.createElement(
              Hl,
              null,
              c
                ? i.a.createElement(
                    Fl,
                    null,
                    i.a.createElement("div", null, "Error connecting."),
                    i.a.createElement(
                      ql,
                      {
                        onClick: function () {
                          l(!1), r && u(r);
                        },
                      },
                      "Try Again"
                    )
                  )
                : i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(Wl, null),
                    "Initializing..."
                  )
            )
          ),
          Object.keys(oe).map(function (e) {
            var t = oe[e];
            if (t.connector === r) {
              if (t.connector === V) {
                if (s && "MetaMask" !== t.name) return null;
                if (!s && "MetaMask" === t.name) return null;
              }
              return i.a.createElement(Dl, {
                id: "connect-".concat(e),
                key: e,
                clickable: !1,
                color: t.color,
                header: t.name,
                subheader: t.description,
                icon: n(155)("./" + t.iconName),
              });
            }
            return null;
          })
        );
      }
      var Yl,
        Kl,
        Jl,
        Ql,
        Xl,
        Gl,
        Zl,
        _l,
        $l,
        eu,
        tu,
        nu,
        au,
        ru,
        ou,
        iu,
        cu,
        lu,
        uu,
        su,
        du,
        mu = n(173),
        pu = n.n(mu),
        fu = we.default.div(
          Yl ||
            (Yl = Object(Oe.a)([
              "\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n",
            ]))
        ),
        bu = Object(we.default)(nl)(
          Kl || (Kl = Object(Oe.a)(["\n  path {\n    stroke: ", ";\n  }\n"])),
          function (e) {
            return e.theme.text4;
          }
        ),
        yu = we.default.div(
          Jl ||
            (Jl = Object(Oe.a)([
              "\n  ",
              "\n  margin: 0;\n  padding: 0;\n  width: 100%;\n",
            ])),
          function (e) {
            return e.theme.flexColumnNoWrap;
          }
        ),
        vu = we.default.div(
          Ql ||
            (Ql = Object(Oe.a)([
              "\n  ",
              ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ",
              ";\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          },
          function (e) {
            return "blue" === e.color
              ? function (e) {
                  return e.theme.primary1;
                }
              : "inherit";
          },
          function (e) {
            return e.theme.mediaWidth.upToMedium(
              Xl || (Xl = Object(Oe.a)(["\n    padding: 1rem;\n  "]))
            );
          }
        ),
        hu = we.default.div(
          Gl ||
            (Gl = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  padding: 2rem;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.bg2;
          },
          function (e) {
            return e.theme.mediaWidth.upToMedium(
              Zl || (Zl = Object(Oe.a)(["padding: 1rem"]))
            );
          }
        ),
        gu = we.default.div(
          _l ||
            (_l = Object(Oe.a)([
              "\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n",
            ]))
        ),
        Eu = we.default.div(
          $l ||
            ($l = Object(Oe.a)([
              "\n  ",
              "\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          },
          function (e) {
            return e.theme.mediaWidth.upToMedium(
              eu ||
                (eu = Object(Oe.a)([
                  "\n    margin: 1rem;\n    font-size: 12px;\n  ",
                ]))
            );
          }
        ),
        Ou = we.default.div(
          tu ||
            (tu = Object(Oe.a)([
              "\n  display: grid;\n  grid-gap: 10px;\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.mediaWidth.upToMedium(
              nu ||
                (nu = Object(Oe.a)([
                  "\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  ",
                ]))
            );
          }
        ),
        Au = we.default.div(
          au ||
            (au = Object(Oe.a)(["\n  :hover {\n    cursor: pointer;\n  }\n"]))
        ),
        xu = "options",
        ju = "account",
        wu = "pending";
      function ku(e) {
        var t = e.pendingTransactions,
          a = e.confirmedTransactions,
          c = e.ENSName,
          l = Object(r.d)(),
          s = l.active,
          d = l.account,
          m = l.connector,
          p = l.activate,
          f = l.error,
          b = Object(o.useState)(ju),
          v = Object(O.a)(b, 2),
          h = v[0],
          g = v[1],
          x = Object(o.useState)(),
          j = Object(O.a)(x, 2),
          w = j[0],
          k = j[1],
          T = Object(o.useState)(),
          C = Object(O.a)(T, 2),
          I = C[0],
          S = C[1],
          R = Object(u.d)(function (e) {
            return e.application.walletModalOpen;
          }),
          N = Qe(),
          U = nc(d);
        Object(o.useEffect)(
          function () {
            d && !U && R && N();
          },
          [d, U, N, R]
        ),
          Object(o.useEffect)(
            function () {
              R && (S(!1), g(ju));
            },
            [R]
          );
        var B = nc(s),
          P = nc(m);
        Object(o.useEffect)(
          function () {
            R && ((s && !B) || (m && m !== P && !f)) && g(ju);
          },
          [g, s, f, m, R, B, P]
        );
        var M = (function () {
          var e = Object(A.a)(
            E.a.mark(function e(t) {
              var n, a;
              return E.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      Object.keys(oe).map(function (e) {
                        return t !== oe[e].connector || oe[e].name;
                      }),
                        k(t),
                        g(wu),
                        t instanceof y.a &&
                          (null === (n = t.walletConnectProvider) ||
                          void 0 === n ||
                          null === (a = n.wc) ||
                          void 0 === a
                            ? void 0
                            : a.uri) &&
                          (t.walletConnectProvider = void 0),
                        t &&
                          p(t, void 0, !0).catch(function (e) {
                            e instanceof r.a ? p(t) : S(!0);
                          });
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return (
          Object(o.useEffect)(
            function () {
              K.on("OVERLAY_READY", function () {
                N();
              });
            },
            [N]
          ),
          i.a.createElement(
            Vo,
            { isOpen: R, onDismiss: N, minHeight: !1, maxHeight: 90 },
            i.a.createElement(
              yu,
              null,
              f
                ? i.a.createElement(
                    gu,
                    null,
                    i.a.createElement(
                      fu,
                      { onClick: N },
                      i.a.createElement(bu, null)
                    ),
                    i.a.createElement(
                      vu,
                      null,
                      f instanceof r.a ? "Wrong Network" : "Error connecting"
                    ),
                    i.a.createElement(
                      hu,
                      null,
                      f instanceof r.a
                        ? i.a.createElement(
                            "div",
                            null,
                            i.a.createElement(
                              "h4",
                              null,
                              "Please connect to the xDai network."
                            ),
                            i.a.createElement(
                              "p",
                              null,
                              "Use the following Custom RPC network settings:"
                            ),
                            i.a.createElement(
                              "ul",
                              null,
                              i.a.createElement(
                                "li",
                                null,
                                "Network Name: ",
                                i.a.createElement("b", null, "xDai")
                              ),
                              i.a.createElement(
                                "li",
                                null,
                                "New RPC URL: ",
                                i.a.createElement(
                                  "a",
                                  { href: "https://rpc.xdaichain.com/" },
                                  "https://rpc.xdaichain.com/"
                                )
                              ),
                              i.a.createElement(
                                "li",
                                null,
                                "Chain ID: ",
                                i.a.createElement("b", null, "0x64"),
                                " (100)"
                              ),
                              i.a.createElement(
                                "li",
                                null,
                                "Symbol: ",
                                i.a.createElement("b", null, "xDai")
                              ),
                              i.a.createElement(
                                "li",
                                null,
                                "Block Explorer URL: ",
                                i.a.createElement(
                                  "a",
                                  { href: "https://blockscout.com/poa/xdai" },
                                  "https://blockscout.com/poa/xdai"
                                )
                              )
                            ),
                            i.a.createElement(
                              "p",
                              null,
                              "For more info visit",
                              " ",
                              i.a.createElement(
                                "a",
                                {
                                  href: "https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup",
                                },
                                "https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup"
                              )
                            )
                          )
                        : "Error connecting. Try refreshing the page."
                    )
                  )
                : d && h === ju
                ? i.a.createElement(Ol, {
                    toggleWalletModal: N,
                    pendingTransactions: t,
                    confirmedTransactions: a,
                    ENSName: c,
                    openOptions: function () {
                      return g(xu);
                    },
                  })
                : i.a.createElement(
                    gu,
                    null,
                    i.a.createElement(
                      fu,
                      { onClick: N },
                      i.a.createElement(bu, null)
                    ),
                    h !== ju
                      ? i.a.createElement(
                          vu,
                          { color: "blue" },
                          i.a.createElement(
                            Au,
                            {
                              onClick: function () {
                                S(!1), g(ju);
                              },
                            },
                            "Back"
                          )
                        )
                      : i.a.createElement(
                          vu,
                          null,
                          i.a.createElement(Au, null, "Connect to a wallet")
                        ),
                    i.a.createElement(
                      hu,
                      null,
                      h === wu
                        ? i.a.createElement(Vl, {
                            connector: w,
                            error: I,
                            setPendingError: S,
                            tryActivation: M,
                          })
                        : i.a.createElement(
                            Ou,
                            null,
                            (function () {
                              var e =
                                window.ethereum && window.ethereum.isMetaMask;
                              return Object.keys(oe).map(function (t) {
                                var a = oe[t];
                                if (je.isMobile)
                                  return a.connector === J ||
                                    window.web3 ||
                                    window.ethereum ||
                                    !a.mobile
                                    ? null
                                    : i.a.createElement(Dl, {
                                        onClick: function () {
                                          a.connector !== m &&
                                            !a.href &&
                                            M(a.connector);
                                        },
                                        id: "connect-".concat(t),
                                        key: t,
                                        active:
                                          a.connector && a.connector === m,
                                        color: a.color,
                                        link: a.href,
                                        header: a.name,
                                        subheader: null,
                                        icon: n(155)("./" + a.iconName),
                                      });
                                if (a.connector === V) {
                                  if (!window.web3 && !window.ethereum)
                                    return "MetaMask" === a.name
                                      ? i.a.createElement(Dl, {
                                          id: "connect-".concat(t),
                                          key: t,
                                          color: "#E8831D",
                                          header: "Install Metamask",
                                          subheader: null,
                                          link: "https://metamask.io/",
                                          icon: pu.a,
                                        })
                                      : null;
                                  if ("MetaMask" === a.name && !e) return null;
                                  if ("Injected" === a.name && e) return null;
                                }
                                return (
                                  !je.isMobile &&
                                  !a.mobileOnly &&
                                  i.a.createElement(Dl, {
                                    id: "connect-".concat(t),
                                    onClick: function () {
                                      a.connector === m
                                        ? g(ju)
                                        : !a.href && M(a.connector);
                                    },
                                    key: t,
                                    active: a.connector === m,
                                    color: a.color,
                                    link: a.href,
                                    header: a.name,
                                    subheader: null,
                                    icon: n(155)("./" + a.iconName),
                                  })
                                );
                              });
                            })()
                          ),
                      h !== wu &&
                        i.a.createElement(
                          Eu,
                          null,
                          i.a.createElement(
                            "span",
                            null,
                            "New to Ethereum? \xa0"
                          ),
                          " ",
                          i.a.createElement(
                            Ra,
                            { href: "https://ethereum.org/wallets/" },
                            "Learn more about wallets"
                          )
                        )
                    )
                  )
            )
          )
        );
      }
      var Tu = we.default.div(
          ru ||
            (ru = Object(Oe.a)([
              "\n  ",
              ";\n  align-items: center;\n  justify-content: center;\n  & > * {\n    height: ",
              ";\n    width: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.flexColumnNoWrap;
          },
          function (e) {
            var t = e.size;
            return t ? t + "px" : "32px";
          },
          function (e) {
            var t = e.size;
            return t ? t + "px" : "32px";
          }
        ),
        Cu = Object(we.default)(so)(
          ou ||
            (ou = Object(Oe.a)([
              "\n  ",
              "\n  width: 100%;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 12px;\n  cursor: pointer;\n  user-select: none;\n  :focus {\n    outline: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          }
        ),
        Iu = Object(we.default)(Cu)(
          iu ||
            (iu = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  border: 1px solid ",
              ";\n  color: ",
              ";\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.red1;
          },
          function (e) {
            return e.theme.red1;
          },
          function (e) {
            return e.theme.white;
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.1, t.red1);
          }
        ),
        Su = Object(we.default)(Cu)(
          cu ||
            (cu = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  border: none;\n  color: ",
              ";\n  font-weight: 500;\n\n  :hover,\n  :focus {\n    border: 1px solid ",
              ";\n    color: ",
              ";\n  }\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.theme.primary4;
          },
          function (e) {
            return e.theme.primaryText1;
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.05, t.primary4);
          },
          function (e) {
            return e.theme.primaryText1;
          },
          function (e) {
            return (
              e.faded &&
              Object(we.css)(
                lu ||
                  (lu = Object(Oe.a)([
                    "\n      background-color: ",
                    ";\n      border: 1px solid ",
                    ";\n      color: ",
                    ";\n\n      :hover,\n      :focus {\n        border: 1px solid ",
                    ";\n        color: ",
                    ";\n      }\n    ",
                  ])),
                function (e) {
                  return e.theme.primary5;
                },
                function (e) {
                  return e.theme.primary5;
                },
                function (e) {
                  return e.theme.primaryText1;
                },
                function (e) {
                  var t = e.theme;
                  return Object(ea.a)(0.05, t.primary4);
                },
                function (e) {
                  var t = e.theme;
                  return Object(ea.a)(0.05, t.primaryText1);
                }
              )
            );
          }
        ),
        Ru = Object(we.default)(Cu)(
          uu ||
            (uu = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  border: 1px solid ",
              ";\n  color: ",
              ";\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ",
              ";\n\n    :focus {\n      border: 1px solid ",
              ";\n    }\n  }\n",
            ])),
          function (e) {
            var t = e.pending,
              n = e.theme;
            return t ? n.primary1 : n.bg2;
          },
          function (e) {
            var t = e.pending,
              n = e.theme;
            return t ? n.primary1 : n.bg3;
          },
          function (e) {
            var t = e.pending,
              n = e.theme;
            return t ? n.white : n.text1;
          },
          function (e) {
            var t = e.pending,
              n = e.theme;
            return t
              ? Object(ea.a)(0.05, n.primary1)
              : Object(ea.b)(0.05, n.bg2);
          },
          function (e) {
            var t = e.pending,
              n = e.theme;
            return t ? Object(ea.a)(0.1, n.primary1) : Object(ea.a)(0.1, n.bg3);
          }
        ),
        Nu = we.default.p(
          su ||
            (su = Object(Oe.a)([
              "\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0 0.5rem 0 0.25rem;\n  font-size: 1rem;\n  width: fit-content;\n  font-weight: 500;\n",
            ]))
        ),
        Uu = Object(we.default)(ji.a)(
          du ||
            (du = Object(Oe.a)([
              "\n  margin-left: 0.25rem;\n  margin-right: 0.5rem;\n  width: 16px;\n  height: 16px;\n",
            ]))
        );
      function Bu(e, t) {
        return t.addedTime - e.addedTime;
      }
      var Pu = i.a.createElement(
        "span",
        {
          role: "img",
          "aria-label": "has socks emoji",
          style: { marginTop: -4, marginBottom: -4 },
        },
        "\ud83e\udde6"
      );
      function Mu(e) {
        var t = e.connector;
        return t === V
          ? i.a.createElement(_i, null)
          : t === Y
          ? i.a.createElement(
              Tu,
              { size: 16 },
              i.a.createElement("img", { src: Ni.a, alt: "" })
            )
          : t === Q
          ? i.a.createElement(
              Tu,
              { size: 16 },
              i.a.createElement("img", { src: ki.a, alt: "" })
            )
          : t === K
          ? i.a.createElement(
              Tu,
              { size: 16 },
              i.a.createElement("img", { src: Ci.a, alt: "" })
            )
          : t === J
          ? i.a.createElement(
              Tu,
              { size: 16 },
              i.a.createElement("img", { src: Si.a, alt: "" })
            )
          : null;
      }
      function Du() {
        var e = Object(ye.b)().t,
          t = Object(r.d)(),
          n = t.account,
          a = t.connector,
          c = t.error,
          l = Mi(null !== n && void 0 !== n ? n : void 0).ENSName,
          u = Hi(),
          s = Object(o.useMemo)(
            function () {
              return Object.values(u).filter(Yi).sort(Bu);
            },
            [u]
          )
            .filter(function (e) {
              return !e.receipt;
            })
            .map(function (e) {
              return e.hash;
            }),
          d = !!s.length,
          m = (function () {
            var e = Di();
            return Object(o.useMemo)(
              function () {
                return e && p.JSBI.greaterThan(e, p.JSBI.BigInt(0));
              },
              [e]
            );
          })(),
          f = Qe();
        return n
          ? i.a.createElement(
              Ru,
              { id: "web3-status-connected", onClick: f, pending: d },
              d
                ? i.a.createElement(
                    kr,
                    null,
                    i.a.createElement(
                      Nu,
                      null,
                      null === s || void 0 === s ? void 0 : s.length,
                      " Pending"
                    ),
                    " ",
                    i.a.createElement(tc, { stroke: "white" })
                  )
                : i.a.createElement(
                    i.a.Fragment,
                    null,
                    m ? Pu : null,
                    i.a.createElement(Nu, null, l || Jt(n))
                  ),
              !d && a && i.a.createElement(Mu, { connector: a })
            )
          : c
          ? i.a.createElement(
              Iu,
              { onClick: f },
              i.a.createElement(Uu, null),
              i.a.createElement(
                Nu,
                null,
                c instanceof r.a ? "Wrong Network" : "Error"
              )
            )
          : i.a.createElement(
              Su,
              { id: "connect-wallet", onClick: f, faded: !n },
              i.a.createElement(Nu, null, e("Connect to a wallet"))
            );
      }
      function zu() {
        var e = Object(r.d)(),
          t = e.active,
          n = e.account,
          a = Object(r.d)("NETWORK"),
          c = Mi(null !== n && void 0 !== n ? n : void 0).ENSName,
          l = Hi(),
          u = Object(o.useMemo)(
            function () {
              return Object.values(l).filter(Yi).sort(Bu);
            },
            [l]
          ),
          s = u
            .filter(function (e) {
              return !e.receipt;
            })
            .map(function (e) {
              return e.hash;
            }),
          d = u
            .filter(function (e) {
              return e.receipt;
            })
            .map(function (e) {
              return e.hash;
            });
        return a.active || t
          ? i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(Du, null),
              i.a.createElement(ku, {
                ENSName: null !== c && void 0 !== c ? c : void 0,
                pendingTransactions: s,
                confirmedTransactions: d,
              })
            )
          : null;
      }
      var Wu,
        Lu,
        Fu,
        qu,
        Hu,
        Vu,
        Yu,
        Ku,
        Ju,
        Qu,
        Xu,
        Gu,
        Zu,
        _u,
        $u,
        es,
        ts,
        ns,
        as = n(170),
        rs = n.n(as),
        os = we.default.div(
          Wu ||
            (Wu = Object(Oe.a)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  z-index: 2;\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              Lu ||
                (Lu = Object(Oe.a)([
                  "\n    padding: 12px 0 0 0;\n    width: calc(100%);\n    position: relative;\n  ",
                ]))
            );
          }
        ),
        is = we.default.div(
          Fu ||
            (Fu = Object(Oe.a)([
              "\n  display: flex;\n  align-items: center;\n",
            ]))
        ),
        cs = we.default.div(
          qu ||
            (qu = Object(Oe.a)([
              "\n  display: flex;\n  align-items: center;\n\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              Hu || (Hu = Object(Oe.a)(["\n    margin-top: 0.5rem;\n"]))
            );
          }
        ),
        ls = we.default.a(
          Vu ||
            (Vu = Object(Oe.a)([
              "\n  display: flex;\n  align-items: center;\n  pointer-events: auto;\n\n  :hover {\n    cursor: pointer;\n  }\n",
            ]))
        ),
        us = Object(we.default)(Sr)(
          Yu ||
            (Yu = Object(Oe.a)([
              "\n  width: fit-content;\n  white-space: nowrap;\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              Ku || (Ku = Object(Oe.a)(["\n    display: none;\n  "]))
            );
          }
        ),
        ss = we.default.div(
          Ju ||
            (Ju = Object(Oe.a)([
              "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: ",
              ";\n  border-radius: 12px;\n  white-space: nowrap;\n  width: 100%;\n\n  :focus {\n    border: 1px solid blue;\n  }\n",
            ])),
          function (e) {
            var t = e.theme;
            return e.active ? t.bg3 : t.bg1;
          }
        ),
        ds = we.default.div(
          Qu ||
            (Qu = Object(Oe.a)([
              "\n  white-space: nowrap;\n  width: fit-content;\n  margin-left: 10px;\n  pointer-events: auto;\n",
            ]))
        ),
        ms = Object(we.default)(Kn)(
          Xu ||
            (Xu = Object(Oe.a)([
              "\n  width: fit-content;\n  margin-right: 10px;\n  border-radius: 12px;\n  padding: 8px 12px;\n",
            ]))
        ),
        ps = we.default.div(
          Gu ||
            (Gu = Object(Oe.a)([
              "\n  transition: transform 0.3s ease;\n  :hover {\n    transform: rotate(-5deg);\n  }\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              Zu ||
                (Zu = Object(Oe.a)([
                  "\n    img { \n      width: 0.25rem;\n    }\n  ",
                ]))
            );
          }
        ),
        fs = we.default.div(
          _u ||
            (_u = Object(Oe.a)([
              "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              $u ||
                ($u = Object(Oe.a)([
                  "\n    flex-direction: column;\n    align-items: flex-end;\n  ",
                ]))
            );
          }
        ),
        bs = Object(we.default)(ke.b)(
          es || (es = Object(Oe.a)(["\n  ", ";\n"])),
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              ts || (ts = Object(Oe.a)(["\n    display: none;\n  "]))
            );
          }
        ),
        ys =
          ((ns = {}),
          Object(m.a)(ns, p.ChainId.MAINNET, null),
          Object(m.a)(ns, p.ChainId.RINKEBY, "Rinkeby"),
          Object(m.a)(ns, p.ChainId.ROPSTEN, "Ropsten"),
          Object(m.a)(ns, p.ChainId.GÖRLI, "G\xf6rli"),
          Object(m.a)(ns, p.ChainId.KOVAN, "Kovan"),
          Object(m.a)(ns, p.ChainId.XDAI, "xDai"),
          ns);
      function vs() {
        var e,
          t = Te(),
          n = t.account,
          a = t.chainId,
          r =
            null === (e = kn(n ? [n] : [])) || void 0 === e
              ? void 0
              : e[null !== n && void 0 !== n ? n : ""];
        return i.a.createElement(
          os,
          null,
          i.a.createElement(
            kr,
            {
              style: { alignItems: "flex-start" },
              padding: "1rem 1rem 0 1rem",
            },
            i.a.createElement(
              is,
              null,
              i.a.createElement(
                ls,
                { href: "." },
                i.a.createElement(
                  ps,
                  null,
                  i.a.createElement("img", {
                    src: rs.a,
                    alt: "logo",
                    height: "50px",
                    width: "50px",
                  })
                ),
                i.a.createElement(us, null)
              )
            ),
            i.a.createElement(
              fs,
              null,
              i.a.createElement(
                is,
                null,
                i.a.createElement(
                  ds,
                  null,
                  !je.isMobile &&
                    a &&
                    ys[a] &&
                    i.a.createElement(ms, null, ys[a])
                ),
                i.a.createElement(
                  ss,
                  { active: !!n, style: { pointerEvents: "auto" } },
                  n && r
                    ? i.a.createElement(
                        bs,
                        {
                          style: { flexShrink: 0 },
                          pl: "0.75rem",
                          pr: "0.5rem",
                          fontWeight: 500,
                        },
                        null === r || void 0 === r
                          ? void 0
                          : r.toSignificant(4),
                        " ",
                        100 === a ? "DAI" : "ETH"
                      )
                    : null,
                  i.a.createElement(zu, null)
                )
              ),
              i.a.createElement(
                cs,
                null,
                i.a.createElement($o, null),
                i.a.createElement(xi, null)
              )
            )
          )
        );
      }
      var hs = n(62),
        gs = {
          pending: Object(Fe.b)("lists/fetchTokenList/pending"),
          fulfilled: Object(Fe.b)("lists/fetchTokenList/fulfilled"),
          rejected: Object(Fe.b)("lists/fetchTokenList/rejected"),
        },
        Es = Object(Fe.b)("lists/acceptListUpdate"),
        Os = Object(Fe.b)("lists/addList"),
        As = Object(Fe.b)("lists/removeList"),
        xs = Object(Fe.b)("lists/selectList");
      Object(Fe.b)("lists/rejectVersionUpdate");
      function js(e) {
        return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch);
      }
      function ws(e) {
        var t = e.popKey,
          n = e.listUrl,
          a = e.oldList,
          r = e.newList,
          c = e.auto,
          l = Ge(),
          s = Object(o.useCallback)(
            function () {
              return l(t);
            },
            [t, l]
          ),
          d = Object(u.c)(),
          m = function (e) {
            var t = "";
            return (
              e.map(function (n, a) {
                (t += n.symbol), (t += a !== e.length - 1 ? ", " : "");
              }),
              i.a.createElement("span", { style: { fontWeight: 800 } }, t)
            );
          },
          p = Object(o.useCallback)(
            function () {
              c || (d(Es(n)), s());
            },
            [c, d, n, s]
          ),
          f = Object(o.useMemo)(
            function () {
              return Object(hs.b)(a.tokens, r.tokens);
            },
            [r.tokens, a.tokens]
          ),
          b = f.added,
          y = f.changed,
          v = f.removed,
          h = Object(o.useMemo)(
            function () {
              return Object.keys(y).reduce(function (e, t) {
                return e + Object.keys(y[t]).length;
              }, 0);
            },
            [y]
          );
        return i.a.createElement(
          Cr,
          null,
          i.a.createElement(
            xr,
            { style: { flex: "1" }, gap: "8px" },
            c
              ? i.a.createElement(
                  dr,
                  { fontWeight: 500 },
                  'The token list "',
                  a.name,
                  '" has been updated to',
                  " ",
                  i.a.createElement("strong", null, js(r.version)),
                  "."
                )
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      ke.b,
                      null,
                      'An update is available for the token list "',
                      a.name,
                      '" (',
                      js(a.version),
                      " to ",
                      js(r.version),
                      ")."
                    ),
                    i.a.createElement(
                      "ul",
                      null,
                      b.length > 0
                        ? i.a.createElement("li", null, m(b), " added")
                        : null,
                      v.length > 0
                        ? i.a.createElement("li", null, m(v), " removed")
                        : null,
                      h > 0
                        ? i.a.createElement("li", null, h, " tokens updated")
                        : null
                    )
                  ),
                  i.a.createElement(
                    Cr,
                    null,
                    i.a.createElement(
                      "div",
                      { style: { flexGrow: 1, marginRight: 12 } },
                      i.a.createElement(so, { onClick: p }, "Accept update")
                    ),
                    i.a.createElement(
                      "div",
                      { style: { flexGrow: 1 } },
                      i.a.createElement(so, { onClick: s }, "Dismiss")
                    )
                  )
                )
          )
        );
      }
      var ks,
        Ts,
        Cs,
        Is,
        Ss,
        Rs = n(465),
        Ns = Object(we.default)(Cr)(
          ks || (ks = Object(Oe.a)(["\n  flex-wrap: nowrap;\n"]))
        );
      function Us(e) {
        var t = e.hash,
          n = e.success,
          a = e.summary,
          r = Te().chainId,
          c = Object(o.useContext)(we.ThemeContext);
        return i.a.createElement(
          Ns,
          null,
          i.a.createElement(
            "div",
            { style: { paddingRight: 16 } },
            n
              ? i.a.createElement(cc.a, { color: c.green1, size: 24 })
              : i.a.createElement(Rs.a, { color: c.red1, size: 24 })
          ),
          i.a.createElement(
            xr,
            { gap: "8px" },
            i.a.createElement(
              dr,
              { fontWeight: 500 },
              null !== a && void 0 !== a
                ? a
                : "Hash: " + t.slice(0, 8) + "..." + t.slice(58, 65)
            ),
            r &&
              i.a.createElement(
                Ra,
                { href: Kt(r, t, "transaction") },
                "View on Blockscout"
              )
          )
        );
      }
      var Bs,
        Ps,
        Ms,
        Ds,
        zs,
        Ws = Object(we.default)(Zn.a)(
          Ts ||
            (Ts = Object(Oe.a)([
              "\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n",
            ]))
        ),
        Ls = we.default.div(
          Cs ||
            (Cs = Object(Oe.a)([
              "\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ",
              ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              Is || (Is = Object(Oe.a)(["\n    min-width: 290px;\n  "]))
            );
          }
        ),
        Fs = we.default.div(
          Ss ||
            (Ss = Object(Oe.a)([
              "\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.bg3;
          }
        ),
        qs = Object(Do.a)(Fs);
      function Hs(e) {
        var t = e.removeAfterMs,
          n = e.content,
          a = e.popKey,
          r = Ge(),
          c = Object(o.useCallback)(
            function () {
              return r(a);
            },
            [a, r]
          );
        Object(o.useEffect)(
          function () {
            if (null !== t) {
              var e = setTimeout(function () {
                c();
              }, t);
              return function () {
                clearTimeout(e);
              };
            }
          },
          [t, c]
        );
        var l,
          u = Object(o.useContext)(we.ThemeContext);
        if ("txn" in n) {
          var s = n.txn,
            d = s.hash,
            m = s.success,
            p = s.summary;
          l = i.a.createElement(Us, { hash: d, success: m, summary: p });
        } else if ("listUpdate" in n) {
          var f = n.listUpdate,
            b = f.listUrl,
            y = f.oldList,
            v = f.newList,
            h = f.auto;
          l = i.a.createElement(ws, {
            popKey: a,
            listUrl: b,
            oldList: y,
            newList: v,
            auto: h,
          });
        }
        var g = Object(Do.b)({
          from: { width: "100%" },
          to: { width: "0%" },
          config: { duration: null !== t && void 0 !== t ? t : void 0 },
        });
        return i.a.createElement(
          Ls,
          null,
          i.a.createElement(Ws, { color: u.text2, onClick: c }),
          l,
          null !== t ? i.a.createElement(qs, { style: g }) : null
        );
      }
      var Vs,
        Ys,
        Ks = we.default.div(
          Bs ||
            (Bs = Object(Oe.a)([
              "\n  position: relative;\n  max-width: 100%;\n  height: ",
              ";\n  margin: ",
              ";\n  margin-bottom: ",
              "};\n\n  display: none;\n  ",
              ";\n",
            ])),
          function (e) {
            return e.height;
          },
          function (e) {
            return e.height ? "0 auto;" : 0;
          },
          function (e) {
            return e.height ? "20px" : 0;
          },
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              Ps || (Ps = Object(Oe.a)(["\n    display: block;\n  "]))
            );
          }
        ),
        Js = we.default.div(
          Ms ||
            (Ms = Object(Oe.a)([
              "\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n",
            ]))
        ),
        Qs = Object(we.default)(xr)(
          Ds ||
            (Ds = Object(Oe.a)([
              "\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              zs || (zs = Object(Oe.a)(["\n    display: none;\n  "]))
            );
          }
        );
      function Xs() {
        var e = (function () {
          var e = Object(u.d)(function (e) {
            return e.application.popupList;
          });
          return Object(o.useMemo)(
            function () {
              return e.filter(function (e) {
                return e.show;
              });
            },
            [e]
          );
        })();
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            Qs,
            { gap: "20px" },
            e.map(function (e) {
              return i.a.createElement(Hs, {
                key: e.key,
                content: e.content,
                popKey: e.key,
                removeAfterMs: e.removeAfterMs,
              });
            })
          ),
          i.a.createElement(
            Ks,
            {
              height:
                (null === e || void 0 === e ? void 0 : e.length) > 0
                  ? "fit-content"
                  : 0,
            },
            i.a.createElement(
              Js,
              null,
              e
                .slice(0)
                .reverse()
                .map(function (e) {
                  return i.a.createElement(Hs, {
                    key: e.key,
                    content: e.content,
                    popKey: e.key,
                    removeAfterMs: e.removeAfterMs,
                  });
                })
            )
          )
        );
      }
      var Gs = we.default.div(
          Vs ||
            (Vs = Object(Oe.a)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n",
            ]))
        ),
        Zs = we.default.h2(
          Ys || (Ys = Object(Oe.a)(["\n  color: ", ";\n"])),
          function (e) {
            return e.theme.secondary1;
          }
        );
      function _s(e) {
        var t = e.children,
          n = Object(ye.b)().t,
          a = Object(r.d)().active,
          c = Object(r.d)("NETWORK"),
          l = c.active,
          u = c.error,
          s = c.activate,
          d = (function () {
            var e = Object(r.d)(),
              t = e.activate,
              n = e.active,
              a = Object(o.useState)(!1),
              i = Object(O.a)(a, 2),
              c = i[0],
              l = i[1];
            return (
              Object(o.useEffect)(
                function () {
                  V.isAuthorized().then(function (e) {
                    e || (je.isMobile && window.ethereum)
                      ? t(V, void 0, !0).catch(function () {
                          l(!0);
                        })
                      : l(!0);
                  });
                },
                [t]
              ),
              Object(o.useEffect)(
                function () {
                  n && l(!0);
                },
                [n]
              ),
              c
            );
          })();
        Object(o.useEffect)(
          function () {
            !d || l || u || a || s(q);
          },
          [d, l, u, s, a]
        ),
          (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = Object(r.d)(),
              n = t.active,
              a = t.error,
              i = t.activate;
            Object(o.useEffect)(
              function () {
                var t = window.ethereum;
                if (t && t.on && !n && !a && !e) {
                  var r = function () {
                      i(V, void 0, !0).catch(function (e) {
                        console.error(
                          "Failed to activate after chain changed",
                          e
                        );
                      });
                    },
                    o = function (e) {
                      e.length > 0 &&
                        i(V, void 0, !0).catch(function (e) {
                          console.error(
                            "Failed to activate after accounts changed",
                            e
                          );
                        });
                    };
                  return (
                    t.on("chainChanged", r),
                    t.on("accountsChanged", o),
                    function () {
                      t.removeListener &&
                        (t.removeListener("chainChanged", r),
                        t.removeListener("accountsChanged", o));
                    }
                  );
                }
              },
              [n, a, e, i]
            );
          })(!d);
        var m = Object(o.useState)(!1),
          p = Object(O.a)(m, 2),
          f = p[0],
          b = p[1];
        return (
          Object(o.useEffect)(function () {
            var e = setTimeout(function () {
              b(!0);
            }, 600);
            return function () {
              clearTimeout(e);
            };
          }, []),
          d
            ? !a && u
              ? i.a.createElement(
                  Gs,
                  null,
                  i.a.createElement(Zs, null, n("unknownError"))
                )
              : a || l
              ? t
              : f
              ? i.a.createElement(Gs, null, i.a.createElement(tc, null))
              : null
            : null
        );
      }
      var $s = n(108);
      function ed(e) {
        var t = e.location.search,
          n = Object(u.c)();
        return (
          Object(o.useEffect)(
            function () {
              if (t && !(t.length < 2)) {
                var e = Object($s.parse)(t, {
                  parseArrays: !1,
                  ignoreQueryPrefix: !0,
                }).theme;
                "string" === typeof e &&
                  ("light" === e.toLowerCase()
                    ? n(Et({ userDarkMode: !1 }))
                    : "dark" === e.toLowerCase() &&
                      n(Et({ userDarkMode: !0 })));
              }
            },
            [n, t]
          ),
          null
        );
      }
      var td,
        nd,
        ad,
        rd,
        od,
        id = n(469),
        cd = n(466),
        ld = n(467),
        ud = n(171),
        sd = n.n(ud),
        dd = we.default.div(td || (td = Object(Oe.a)(["\n  width: 100%;\n"]))),
        md = Object(we.default)(xr)(
          nd || (nd = Object(Oe.a)(["\n  padding: 24px;\n"]))
        ),
        pd = Object(we.default)(md)(
          ad ||
            (ad = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n",
            ])),
          function (e) {
            return e.theme.bg2;
          }
        ),
        fd = Object(we.default)(Ar)(
          rd || (rd = Object(Oe.a)(["\n  padding: 60px 0;\n"]))
        ),
        bd = Object(we.default)(Wa)(
          od || (od = Object(Oe.a)(["\n  height: ", ";\n  width: ", ";\n"])),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        );
      function yd(e) {
        var t = e.onDismiss,
          n = e.pendingText;
        return i.a.createElement(
          dd,
          null,
          i.a.createElement(
            md,
            null,
            i.a.createElement(
              kr,
              null,
              i.a.createElement("div", null),
              i.a.createElement(Ta, { onClick: t })
            ),
            i.a.createElement(
              fd,
              null,
              i.a.createElement(bd, { src: sd.a, alt: "loader", size: "90px" })
            ),
            i.a.createElement(
              xr,
              { gap: "12px", justify: "center" },
              i.a.createElement(
                ke.b,
                { fontWeight: 500, fontSize: 20 },
                "Waiting For Confirmation"
              ),
              i.a.createElement(
                xr,
                { gap: "12px", justify: "center" },
                i.a.createElement(
                  ke.b,
                  {
                    fontWeight: 600,
                    fontSize: 14,
                    color: "",
                    textAlign: "center",
                  },
                  n
                )
              ),
              i.a.createElement(
                ke.b,
                { fontSize: 12, color: "#565A69", textAlign: "center" },
                "Confirm this transaction in your wallet"
              )
            )
          )
        );
      }
      function vd(e) {
        var t = e.onDismiss,
          n = e.chainId,
          a = e.hash,
          r = Object(o.useContext)(we.ThemeContext);
        return i.a.createElement(
          dd,
          null,
          i.a.createElement(
            md,
            null,
            i.a.createElement(
              kr,
              null,
              i.a.createElement("div", null),
              i.a.createElement(Ta, { onClick: t })
            ),
            i.a.createElement(
              fd,
              null,
              i.a.createElement(cd.a, {
                strokeWidth: 0.5,
                size: 90,
                color: r.primary1,
              })
            ),
            i.a.createElement(
              xr,
              { gap: "12px", justify: "center" },
              i.a.createElement(
                ke.b,
                { fontWeight: 500, fontSize: 20 },
                "Transaction Submitted"
              ),
              n &&
                a &&
                i.a.createElement(
                  Ra,
                  { href: Kt(n, a, "transaction") },
                  i.a.createElement(
                    ke.b,
                    { fontWeight: 500, fontSize: 14, color: r.primary1 },
                    "View on Blockscout"
                  )
                ),
              i.a.createElement(
                lo,
                { onClick: t, style: { margin: "20px 0 0 0" } },
                i.a.createElement(
                  ke.b,
                  { fontWeight: 500, fontSize: 20 },
                  "Close"
                )
              )
            )
          )
        );
      }
      function hd(e) {
        var t = e.title,
          n = e.bottomContent,
          a = e.onDismiss,
          r = e.topContent;
        return i.a.createElement(
          dd,
          null,
          i.a.createElement(
            md,
            null,
            i.a.createElement(
              kr,
              null,
              i.a.createElement(ke.b, { fontWeight: 500, fontSize: 20 }, t),
              i.a.createElement(Ta, { onClick: a })
            ),
            r()
          ),
          i.a.createElement(pd, { gap: "12px" }, n())
        );
      }
      function gd(e) {
        var t = e.message,
          n = e.onDismiss,
          a = Object(o.useContext)(we.ThemeContext);
        return i.a.createElement(
          dd,
          null,
          i.a.createElement(
            md,
            null,
            i.a.createElement(
              kr,
              null,
              i.a.createElement(
                ke.b,
                { fontWeight: 500, fontSize: 20 },
                "Error"
              ),
              i.a.createElement(Ta, { onClick: n })
            ),
            i.a.createElement(
              xr,
              {
                style: { marginTop: 20, padding: "2rem 0" },
                gap: "24px",
                justify: "center",
              },
              i.a.createElement(ld.a, {
                color: a.red1,
                style: { strokeWidth: 1.5 },
                size: 64,
              }),
              i.a.createElement(
                ke.b,
                {
                  fontWeight: 500,
                  fontSize: 16,
                  color: a.red1,
                  style: { textAlign: "center", width: "85%" },
                },
                t
              )
            )
          ),
          i.a.createElement(
            pd,
            { gap: "12px" },
            i.a.createElement(lo, { onClick: n }, "Dismiss")
          )
        );
      }
      function Ed(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.attemptingTxn,
          r = e.hash,
          o = e.pendingText,
          c = e.content,
          l = Te().chainId;
        return l
          ? i.a.createElement(
              Vo,
              { isOpen: t, onDismiss: n, maxHeight: 90 },
              a
                ? i.a.createElement(yd, { onDismiss: n, pendingText: o })
                : r
                ? i.a.createElement(vd, { chainId: l, hash: r, onDismiss: n })
                : c()
            )
          : null;
      }
      function Od(e, t) {
        var n = Object(o.useState)(t && t(e) ? e : void 0),
          a = Object(O.a)(n, 2),
          r = a[0],
          i = a[1];
        return (
          Object(o.useEffect)(
            function () {
              i(function (n) {
                return !t || t(e) ? e : n;
              });
            },
            [t, e]
          ),
          r
        );
      }
      function Ad(e) {
        return null !== e && void 0 !== e;
      }
      var xd = n(183),
        jd = n.n(xd),
        wd = n(149),
        kd = n(150);
      var Td = new TextDecoder();
      function Cd(e) {
        var t = (function (e) {
            if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0)
              throw new Error("hex must have length that is multiple of 2");
            for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++)
              t[n] = parseInt(e.substr(2 * n, 2), 16);
            return t;
          })(e),
          n = Object(wd.getCodec)(t);
        switch (n) {
          case "ipfs-ns":
            var a = Object(wd.rmPrefix)(t),
              r = new jd.a(a);
            return "ipfs://".concat(Object(kd.toB58String)(r.multihash));
          case "ipns-ns":
            var o = Object(wd.rmPrefix)(t),
              i = new jd.a(o),
              c = Object(kd.decode)(i.multihash);
            return "identity" === c.name
              ? "ipns://".concat(Td.decode(c.digest).trim())
              : "ipns://".concat(Object(kd.toB58String)(i.multihash));
          default:
            throw new Error("Unrecognized codec: ".concat(n));
        }
      }
      var Id = /^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;
      function Sd(e) {
        var t = e.match(Id);
        if (t)
          return {
            ensName: "".concat(t[1].toLowerCase(), "eth"),
            ensPath: t[3],
          };
      }
      function Rd(e) {
        var t, n;
        switch (e.split(":")[0].toLowerCase()) {
          case "https":
            return [e];
          case "http":
            return ["https" + e.substr(4), e];
          case "ipfs":
            var a =
              null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t
                ? void 0
                : t[2];
            return [
              "https://cloudflare-ipfs.com/ipfs/".concat(a, "/"),
              "https://ipfs.io/ipfs/".concat(a, "/"),
            ];
          case "ipns":
            var r =
              null === (n = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === n
                ? void 0
                : n[2];
            return [
              "https://cloudflare-ipfs.com/ipns/".concat(r, "/"),
              "https://ipfs.io/ipns/".concat(r, "/"),
            ];
          default:
            return [];
        }
      }
      function Nd(e) {
        var t = Object(o.useMemo)(
            function () {
              return e ? Sd(e) : void 0;
            },
            [e]
          ),
          n = (function (e) {
            var t,
              n,
              a,
              r = Object(o.useMemo)(
                function () {
                  if (!e) return [void 0];
                  try {
                    return e ? [Object(Ui.namehash)(e)] : [void 0];
                  } catch (t) {
                    return [void 0];
                  }
                },
                [e]
              ),
              i = yt(hn(!1), "resolver", r),
              c = null === (t = i.result) || void 0 === t ? void 0 : t[0],
              l = yt(gn(c && Bi(c) ? void 0 : c, !1), "contenthash", r);
            return {
              contenthash:
                null !==
                  (n =
                    null === (a = l.result) || void 0 === a ? void 0 : a[0]) &&
                void 0 !== n
                  ? n
                  : null,
              loading: i.loading || l.loading,
            };
          })(null === t || void 0 === t ? void 0 : t.ensName);
        return Object(o.useMemo)(
          function () {
            return t
              ? n.contenthash
                ? Rd(Cd(n.contenthash))
                : []
              : e
              ? Rd(e)
              : [];
          },
          [t, n.contenthash, e]
        );
      }
      var Ud,
        Bd = {};
      function Pd(e) {
        var t = e.srcs,
          n = e.alt,
          a = Object(Wn.a)(e, ["srcs", "alt"]),
          r = Object(o.useState)(0),
          c = Object(O.a)(r, 2)[1],
          l = t.find(function (e) {
            return !Bd[e];
          });
        return l
          ? i.a.createElement(
              "img",
              Object.assign({}, a, {
                alt: n,
                src: l,
                onError: function () {
                  l && (Bd[l] = !0),
                    c(function (e) {
                      return e + 1;
                    });
                },
              })
            )
          : i.a.createElement($n.a, a);
      }
      var Md = Object(we.default)(Pd)(
        Ud || (Ud = Object(Oe.a)(["\n  width: ", ";\n  height: ", ";\n"])),
        function (e) {
          return e.size;
        },
        function (e) {
          return e.size;
        }
      );
      function Dd(e) {
        var t = e.logoURI,
          n = e.style,
          a = e.size,
          r = void 0 === a ? "24px" : a,
          o = e.alt,
          c = Nd(t);
        return i.a.createElement(Md, { alt: o, size: r, srcs: c, style: n });
      }
      var zd,
        Wd,
        Ld,
        Fd = n(176),
        qd = n.n(Fd),
        Hd = function (e) {
          return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/xdai/assets/".concat(
            e,
            "/logo.png"
          );
        },
        Vd = we.default.img(
          zd ||
            (zd = Object(Oe.a)([
              "\n  width: ",
              ";\n  height: ",
              ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n",
            ])),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        ),
        Yd = Object(we.default)(Pd)(
          Wd || (Wd = Object(Oe.a)(["\n  width: ", ";\n  height: ", ";\n"])),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        );
      function Kd(e) {
        var t,
          n = e.currency,
          a = e.size,
          r = void 0 === a ? "24px" : a,
          c = e.style,
          l = Nd(n instanceof Pe ? n.logoURI : void 0),
          u = Object(o.useMemo)(
            function () {
              return n === p.ETHER || n === p.WETH[p.ChainId.XDAI]
                ? []
                : n instanceof p.Token
                ? n instanceof Pe
                  ? [].concat(Object(s.a)(l), [Hd(n.address)])
                  : [Hd(n.address)]
                : [];
            },
            [n, l]
          );
        return n === p.ETHER || n === p.WETH[p.ChainId.XDAI]
          ? i.a.createElement(Vd, { src: qd.a, size: r, style: c })
          : i.a.createElement(Yd, {
              size: r,
              srcs: u,
              alt: "".concat(
                null !== (t = null === n || void 0 === n ? void 0 : n.symbol) &&
                  void 0 !== t
                  ? t
                  : "token",
                " logo"
              ),
              style: c,
            });
      }
      var Jd = we.default.div(
        Ld ||
          (Ld = Object(Oe.a)([
            "\n  border: 1px solid ",
            ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ",
            ";\n    background-color: ",
            ";\n  }\n\n  background-color: ",
            ";\n  opacity: ",
            ";\n",
          ])),
        function (e) {
          var t = e.theme;
          return e.disable ? "transparent" : t.bg3;
        },
        function (e) {
          return !e.disable && "pointer";
        },
        function (e) {
          var t = e.theme;
          return !e.disable && t.bg2;
        },
        function (e) {
          var t = e.theme;
          return e.disable && t.bg3;
        },
        function (e) {
          return e.disable && "0.4";
        }
      );
      function Qd(e) {
        var t = e.chainId,
          n = e.onSelect,
          a = e.selectedCurrency;
        return i.a.createElement(
          xr,
          { gap: "md" },
          i.a.createElement(
            Cr,
            null,
            i.a.createElement(
              ke.b,
              { fontWeight: 500, fontSize: 14 },
              "Common bases"
            ),
            i.a.createElement(va, {
              text: "These tokens are commonly paired with other tokens.",
            })
          ),
          i.a.createElement(
            Cr,
            { gap: "4px" },
            i.a.createElement(
              Jd,
              {
                onClick: function () {
                  (a && Object(p.currencyEquals)(a, p.ETHER)) || n(p.ETHER);
                },
                disable: a === p.ETHER,
              },
              i.a.createElement(Kd, {
                currency: p.ETHER,
                style: { marginRight: 8 },
              }),
              i.a.createElement(ke.b, { fontWeight: 500, fontSize: 16 }, "XDAI")
            ),
            (t ? ne[t] : []).map(function (e) {
              var t = a instanceof p.Token && a.address === e.address;
              return i.a.createElement(
                Jd,
                {
                  onClick: function () {
                    return !t && n(e);
                  },
                  disable: t,
                  key: e.address,
                },
                i.a.createElement(Kd, {
                  currency: e,
                  style: { marginRight: 8 },
                }),
                i.a.createElement(
                  ke.b,
                  { fontWeight: 500, fontSize: 16 },
                  e.symbol
                )
              );
            })
          )
        );
      }
      var Xd,
        Gd,
        Zd,
        _d,
        $d,
        em,
        tm,
        nm,
        am,
        rm,
        om = n(251),
        im =
          (we.default.div(
            Xd ||
              (Xd = Object(Oe.a)([
                "\n  ",
                "\n  align-items: center;\n  padding: 1rem 1rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  flex: 1;\n  user-select: none;\n",
              ])),
            function (e) {
              return e.theme.flexRowNoWrap;
            }
          ),
          Object(we.default)(Ir)(
            Gd ||
              (Gd = Object(Oe.a)(["\n  color: ", ";\n  font-size: 14px;\n"])),
            function (e) {
              return e.theme.primary1;
            }
          )),
        cm = Object(we.default)(xr)(
          Zd ||
            (Zd = Object(Oe.a)([
              "\n  padding: 20px;\n  padding-bottom: 12px;\n",
            ]))
        ),
        lm = Object(we.default)(kr)(
          _d ||
            (_d = Object(Oe.a)([
              "\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ",
              ";\n  pointer-events: ",
              ";\n  :hover {\n    background-color: ",
              ";\n  }\n  opacity: ",
              ";\n",
            ])),
          function (e) {
            return !e.disabled && "pointer";
          },
          function (e) {
            return e.disabled && "none";
          },
          function (e) {
            var t = e.theme;
            return !e.disabled && t.bg2;
          },
          function (e) {
            var t = e.disabled,
              n = e.selected;
            return t || n ? 0.5 : 1;
          }
        ),
        um = we.default.input(
          $d ||
            ($d = Object(Oe.a)([
              "\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ",
              ";\n  border-style: solid;\n  border: 1px solid ",
              ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ",
              ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ",
              ";\n    outline: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.text3;
          },
          function (e) {
            return e.theme.primary1;
          }
        ),
        sm = we.default.div(
          em ||
            (em = Object(Oe.a)([
              "\n  width: 100%;\n  height: 1px;\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.bg2;
          }
        ),
        dm = we.default.div(
          tm ||
            (tm = Object(Oe.a)([
              "\n  width: 100%;\n  height: 1px;\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.bg3;
          }
        );
      function mm(e) {
        return e instanceof p.Token ? e.address : e === p.ETHER ? "ETHER" : "";
      }
      var pm = Object(we.default)(ke.b)(
          nm ||
            (nm = Object(Oe.a)([
              "\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n",
            ]))
        ),
        fm = we.default.div(
          am ||
            (am = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  color: ",
              ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n",
            ])),
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.text2;
          }
        );
      function bm(e) {
        var t = e.balance;
        return i.a.createElement(
          pm,
          { title: t.toExact() },
          t.toSignificant(4)
        );
      }
      var ym,
        vm = we.default.div(
          rm ||
            (rm = Object(Oe.a)([
              "\n  display: flex;\n  justify-content: flex-end;\n",
            ]))
        );
      function hm(e) {
        var t = e.currency;
        if (!(t instanceof Pe)) return i.a.createElement("span", null);
        var n = t.tags;
        if (!n || 0 === n.length) return i.a.createElement("span", null);
        var a = n[0];
        return i.a.createElement(
          vm,
          null,
          i.a.createElement(
            ba,
            { text: a.description },
            i.a.createElement(fm, { key: a.id }, a.name)
          ),
          n.length > 1
            ? i.a.createElement(
                ba,
                {
                  text: n
                    .slice(1)
                    .map(function (e) {
                      var t = e.name,
                        n = e.description;
                      return "".concat(t, ": ").concat(n);
                    })
                    .join("; \n"),
                },
                i.a.createElement(fm, null, "...")
              )
            : null
        );
      }
      function gm(e) {
        var t = e.currency,
          n = e.onSelect,
          a = e.isSelected,
          r = e.otherSelected,
          c = e.style,
          l = Te(),
          s = l.account,
          d = l.chainId,
          m = mm(t),
          f = _t(Le(), t),
          b = Boolean(!f && t instanceof p.Token),
          y = Rn(null !== s && void 0 !== s ? s : void 0, t),
          v = (function () {
            var e = Object(u.c)();
            return Object(o.useCallback)(
              function (t, n) {
                e(wt({ chainId: t, address: n }));
              },
              [e]
            );
          })(),
          h = Mt();
        return i.a.createElement(
          lm,
          {
            style: c,
            className: "token-item-".concat(m),
            onClick: function () {
              return a ? null : n();
            },
            disabled: a,
            selected: r,
          },
          i.a.createElement(Kd, { currency: t, size: "24px" }),
          i.a.createElement(
            jr,
            null,
            i.a.createElement(
              ke.b,
              { title: t.name, fontWeight: 500 },
              t.symbol
            ),
            i.a.createElement(
              im,
              null,
              b
                ? i.a.createElement(
                    lr,
                    { fontWeight: 500 },
                    "Added by user",
                    i.a.createElement(
                      Ca,
                      {
                        onClick: function (e) {
                          e.stopPropagation(),
                            d && t instanceof p.Token && v(d, t.address);
                        },
                      },
                      "(Remove)"
                    )
                  )
                : null,
              f || b
                ? null
                : i.a.createElement(
                    lr,
                    { fontWeight: 500 },
                    "Found by address",
                    i.a.createElement(
                      Ca,
                      {
                        onClick: function (e) {
                          e.stopPropagation(), t instanceof p.Token && h(t);
                        },
                      },
                      "(Add)"
                    )
                  )
            )
          ),
          i.a.createElement(hm, { currency: t }),
          i.a.createElement(
            Ir,
            { style: { justifySelf: "flex-end" } },
            y
              ? i.a.createElement(bm, { balance: y })
              : s
              ? i.a.createElement(tc, null)
              : null
          )
        );
      }
      function Em(e) {
        var t = e.height,
          n = e.currencies,
          a = e.selectedCurrency,
          r = e.onCurrencySelect,
          c = e.otherCurrency,
          l = e.fixedListRef,
          u = e.showETH,
          d = Object(o.useMemo)(
            function () {
              return u ? [p.Currency.ETHER].concat(Object(s.a)(n)) : n;
            },
            [n, u]
          ),
          m = Object(o.useCallback)(
            function (e) {
              var t = e.data,
                n = e.index,
                o = e.style,
                l = t[n],
                u = Boolean(a && Object(p.currencyEquals)(a, l)),
                s = Boolean(c && Object(p.currencyEquals)(c, l));
              return i.a.createElement(gm, {
                style: o,
                currency: l,
                isSelected: u,
                onSelect: function () {
                  return r(l);
                },
                otherSelected: s,
              });
            },
            [r, c, a]
          ),
          f = Object(o.useCallback)(function (e, t) {
            return mm(t[e]);
          }, []);
        return i.a.createElement(
          om.a,
          {
            height: t,
            ref: l,
            width: "100%",
            itemData: d,
            itemCount: d.length,
            itemSize: 56,
            itemKey: f,
          },
          m
        );
      }
      var Om = Object(we.default)(Ir)(
        ym ||
          (ym = Object(Oe.a)([
            "\n  padding: 8px;\n  background-color: ",
            ";\n  color: ",
            ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n",
          ])),
        function (e) {
          return e.theme.bg2;
        },
        function (e) {
          return e.theme.text1;
        }
      );
      function Am(e) {
        var t = e.toggleSortOrder,
          n = e.ascending;
        return i.a.createElement(
          Om,
          { onClick: t },
          i.a.createElement(
            ke.b,
            { fontSize: 14, fontWeight: 500 },
            n ? "\u2191" : "\u2193"
          )
        );
      }
      function xm(e) {
        var t = (function () {
            var e = Te().account,
              t = On(),
              n = Cn(
                null !== e && void 0 !== e ? e : void 0,
                Object(o.useMemo)(
                  function () {
                    return Object.values(null !== t && void 0 !== t ? t : {});
                  },
                  [t]
                )
              );
            return null !== n && void 0 !== n ? n : {};
          })(),
          n = Object(o.useMemo)(
            function () {
              return (function (e) {
                return function (t, n) {
                  var a = (function (e, t) {
                    return e && t
                      ? e.greaterThan(t)
                        ? -1
                        : e.equalTo(t)
                        ? 0
                        : 1
                      : e && e.greaterThan("0")
                      ? -1
                      : t && t.greaterThan("0")
                      ? 1
                      : 0;
                  })(e[t.address], e[n.address]);
                  return 0 !== a
                    ? a
                    : t.symbol && n.symbol
                    ? t.symbol.toLowerCase() < n.symbol.toLowerCase()
                      ? -1
                      : 1
                    : t.symbol || n.symbol
                    ? -1
                    : 0;
                };
              })(null !== t && void 0 !== t ? t : {});
            },
            [t]
          );
        return Object(o.useMemo)(
          function () {
            return e
              ? function (e, t) {
                  return -1 * n(e, t);
                }
              : n;
          },
          [e, n]
        );
      }
      var jm = n(252);
      function wm(e) {
        var t = e.selectedCurrency,
          n = e.onCurrencySelect,
          a = e.otherSelectedCurrency,
          r = e.showCommonBases,
          c = e.onDismiss,
          l = e.isOpen,
          d = e.onChangeList,
          m = Object(ye.b)().t,
          f = Te().chainId,
          b = Object(o.useContext)(we.ThemeContext),
          y = Object(o.useRef)(),
          v = Object(o.useState)(""),
          h = Object(O.a)(v, 2),
          g = h[0],
          E = h[1],
          A = Object(o.useState)(!1),
          x = Object(O.a)(A, 2),
          j = x[0],
          w = x[1],
          k = On(),
          T = Vt(g),
          C = jn(g),
          I = Object(o.useMemo)(
            function () {
              var e = g.toLowerCase().trim();
              return "" === e || "e" === e || "et" === e || "eth" === e;
            },
            [g]
          ),
          S = xm(j),
          R = Object(o.useMemo)(
            function () {
              return T
                ? C
                  ? [C]
                  : []
                : (function (e, t) {
                    if (0 === t.length) return e;
                    var n = Vt(t);
                    if (n)
                      return e.filter(function (e) {
                        return e.address === n;
                      });
                    var a = t
                      .toLowerCase()
                      .split(/\s+/)
                      .filter(function (e) {
                        return e.length > 0;
                      });
                    if (0 === a.length) return e;
                    var r = function (e) {
                      var t = e
                        .toLowerCase()
                        .split(/\s+/)
                        .filter(function (e) {
                          return e.length > 0;
                        });
                      return a.every(function (e) {
                        return (
                          0 === e.length ||
                          t.some(function (t) {
                            return t.startsWith(e) || t.endsWith(e);
                          })
                        );
                      });
                    };
                    return e.filter(function (e) {
                      var t = e.symbol,
                        n = e.name;
                      return (t && r(t)) || (n && r(n));
                    });
                  })(Object.values(k), g);
            },
            [T, C, k, g]
          ),
          N = Object(o.useMemo)(
            function () {
              if (C) return [C];
              var e = R.sort(S),
                t = g
                  .toLowerCase()
                  .split(/\s+/)
                  .filter(function (e) {
                    return e.length > 0;
                  });
              return t.length > 1
                ? e
                : [].concat(
                    Object(s.a)(C ? [C] : []),
                    Object(s.a)(
                      e.filter(function (e) {
                        var n;
                        return (
                          (null === (n = e.symbol) || void 0 === n
                            ? void 0
                            : n.toLowerCase()) === t[0]
                        );
                      })
                    ),
                    Object(s.a)(
                      e.filter(function (e) {
                        var n;
                        return (
                          (null === (n = e.symbol) || void 0 === n
                            ? void 0
                            : n.toLowerCase()) !== t[0]
                        );
                      })
                    )
                  );
            },
            [R, g, C, S]
          ),
          U = Object(o.useCallback)(
            function (e) {
              n(e), c();
            },
            [c, n]
          );
        Object(o.useEffect)(
          function () {
            l && E("");
          },
          [l]
        );
        var B = Object(o.useRef)(),
          P = Object(o.useCallback)(function (e) {
            var t,
              n = e.target.value,
              a = Vt(n);
            E(a || n),
              null === (t = y.current) || void 0 === t || t.scrollTo(0);
          }, []),
          M = Object(o.useCallback)(
            function (e) {
              if ("Enter" === e.key)
                if ("eth" === g.toLowerCase().trim()) U(p.ETHER);
                else if (N.length > 0) {
                  var t;
                  ((null === (t = N[0].symbol) || void 0 === t
                    ? void 0
                    : t.toLowerCase()) !== g.trim().toLowerCase() &&
                    1 !== N.length) ||
                    U(N[0]);
                }
            },
            [N, U, g]
          ),
          D = (function () {
            var e,
              t,
              n = We(),
              a = Object(u.d)(function (e) {
                return e.lists.byUrl;
              }),
              r = n ? a[n] : void 0;
            return {
              current:
                null !==
                  (e = null === r || void 0 === r ? void 0 : r.current) &&
                void 0 !== e
                  ? e
                  : null,
              pending:
                null !==
                  (t = null === r || void 0 === r ? void 0 : r.pendingUpdate) &&
                void 0 !== t
                  ? t
                  : null,
              loading:
                null !==
                (null === r || void 0 === r ? void 0 : r.loadingRequestId),
            };
          })();
        return i.a.createElement(
          jr,
          { style: { width: "100%", flex: "1 1" } },
          i.a.createElement(
            cm,
            { gap: "14px" },
            i.a.createElement(
              kr,
              null,
              i.a.createElement(
                ke.b,
                { fontWeight: 500, fontSize: 16 },
                "Select a token",
                i.a.createElement(va, {
                  text: "Find a token by searching for its name or symbol or by pasting its address below.",
                })
              ),
              i.a.createElement(Ta, { onClick: c })
            ),
            i.a.createElement(um, {
              type: "text",
              id: "token-search-input",
              placeholder: m("tokenSearchPlaceholder"),
              value: g,
              ref: B,
              onChange: P,
              onKeyDown: M,
            }),
            r &&
              i.a.createElement(Qd, {
                chainId: f,
                onSelect: U,
                selectedCurrency: t,
              }),
            i.a.createElement(
              kr,
              null,
              i.a.createElement(
                ke.b,
                { fontSize: 14, fontWeight: 500 },
                "Token Name"
              ),
              i.a.createElement(Am, {
                ascending: j,
                toggleSortOrder: function () {
                  return w(function (e) {
                    return !e;
                  });
                },
              })
            )
          ),
          i.a.createElement(sm, null),
          i.a.createElement(
            "div",
            { style: { flex: "1" } },
            i.a.createElement(jm.a, { disableWidth: !0 }, function (e) {
              var n = e.height;
              return i.a.createElement(Em, {
                height: n,
                showETH: I,
                currencies: N,
                onCurrencySelect: U,
                otherCurrency: a,
                selectedCurrency: t,
                fixedListRef: y,
              });
            })
          ),
          i.a.createElement(sm, null),
          i.a.createElement(
            qn,
            null,
            i.a.createElement(
              kr,
              null,
              D.current
                ? i.a.createElement(
                    Sr,
                    null,
                    D.current.logoURI
                      ? i.a.createElement(Dd, {
                          style: { marginRight: 12 },
                          logoURI: D.current.logoURI,
                          alt: "".concat(D.current.name, " list logo"),
                        })
                      : null,
                    i.a.createElement(
                      lr,
                      { id: "currency-search-selected-list-name" },
                      D.current.name
                    )
                  )
                : null,
              i.a.createElement(
                Ca,
                {
                  style: { fontWeight: 500, color: b.text2, fontSize: 16 },
                  onClick: d,
                  id: "currency-search-change-list-button",
                },
                D.current ? "Change" : "Select a list"
              )
            )
          )
        );
      }
      var km = n(175),
        Tm = n.n(km),
        Cm = n(174),
        Im = n.n(Cm);
      function Sm(e) {
        var t = e.onSelectList,
          n = Rt(),
          a = Object(O.a)(n, 1)[0];
        return i.a.createElement(
          jr,
          { style: { width: "100%", flex: "1 1" } },
          i.a.createElement(
            cm,
            null,
            i.a.createElement(
              xr,
              { gap: "14px" },
              i.a.createElement("img", {
                style: { width: "120px", margin: "0 auto" },
                src: a ? Im.a : Tm.a,
                alt: "token-list-preview",
              }),
              i.a.createElement("img", {
                style: { width: "100%", borderRadius: "12px" },
                src: "https://cloudflare-ipfs.com/ipfs/QmRf1rAJcZjV3pwKTHfPdJh4RxR8yvRHkdLjZCsmp7T6hA",
                alt: "token-list-preview",
              }),
              i.a.createElement(
                ke.b,
                { style: { marginBottom: "8px", textAlign: "center" } },
                "Baoswap now supports token lists. You can add your own custom lists via IPFS, HTTPS and ENS.",
                " "
              ),
              i.a.createElement(
                lo,
                { onClick: t, id: "list-introduction-choose-a-list" },
                "Choose a list"
              ),
              i.a.createElement(
                Yn,
                { style: { marginBottom: "8px", padding: "1rem" } },
                i.a.createElement(
                  ke.b,
                  {
                    fontWeight: 400,
                    fontSize: 14,
                    style: { textAlign: "center" },
                  },
                  "Token lists are an",
                  " ",
                  i.a.createElement(
                    Ra,
                    { href: "https://github.com/uniswap/token-lists" },
                    "open specification"
                  ),
                  ". Check out",
                  " ",
                  i.a.createElement(
                    Ra,
                    { href: "https://tokenlists.org" },
                    "tokenlists.org"
                  ),
                  " to learn more."
                )
              )
            )
          )
        );
      }
      function Rm() {
        return (Rm =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Nm(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              o = Object.keys(e);
            for (a = 0; a < o.length; a++)
              (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (n = o[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var Um = i.a.createElement("path", {
          d: "M0.97168 1L6.20532 6L11.439 1",
          stroke: "#AEAEAE",
        }),
        Bm = function (e) {
          var t = e.svgRef,
            n = e.title,
            a = Nm(e, ["svgRef", "title"]);
          return i.a.createElement(
            "svg",
            Rm(
              {
                width: 12,
                height: 7,
                viewBox: "0 0 12 7",
                fill: "none",
                ref: t,
              },
              a
            ),
            n ? i.a.createElement("title", null, n) : null,
            Um
          );
        },
        Pm = i.a.forwardRef(function (e, t) {
          return i.a.createElement(Bm, Rm({ svgRef: t }, e));
        }),
        Mm = (n.p, n(253)),
        Dm = n(254),
        zm = new (n.n(Dm).a)({ allErrors: !0 }).compile(Mm);
      function Wm(e, t) {
        return Lm.apply(this, arguments);
      }
      function Lm() {
        return (Lm = Object(A.a)(
          E.a.mark(function e(t, n) {
            var a, r, o, i, c, l, u, s, d, m, p, f, b;
            return E.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(a = Sd(t))) {
                        e.next = 23;
                        break;
                      }
                      return (e.prev = 2), (e.next = 5), n(a.ensName);
                    case 5:
                      (i = e.sent), (e.next = 12);
                      break;
                    case 8:
                      throw (
                        ((e.prev = 8),
                        (e.t0 = e.catch(2)),
                        console.debug(
                          "Failed to resolve ENS name: ".concat(a.ensName),
                          e.t0
                        ),
                        new Error(
                          "Failed to resolve ENS name: ".concat(a.ensName)
                        ))
                      );
                    case 12:
                      (e.prev = 12), (c = Cd(i)), (e.next = 20);
                      break;
                    case 16:
                      throw (
                        ((e.prev = 16),
                        (e.t1 = e.catch(12)),
                        console.debug(
                          "Failed to translate contenthash to URI",
                          i
                        ),
                        new Error(
                          "Failed to translate contenthash to URI: ".concat(i)
                        ))
                      );
                    case 20:
                      (r = Rd(
                        ""
                          .concat(c)
                          .concat(
                            null !== (o = a.ensPath) && void 0 !== o ? o : ""
                          )
                      )),
                        (e.next = 24);
                      break;
                    case 23:
                      r = Rd(t);
                    case 24:
                      l = 0;
                    case 25:
                      if (!(l < r.length)) {
                        e.next = 55;
                        break;
                      }
                      return (
                        (u = r[l]),
                        (s = l === r.length - 1),
                        (d = void 0),
                        (e.prev = 29),
                        (e.next = 32),
                        fetch(u)
                      );
                    case 32:
                      (d = e.sent), (e.next = 41);
                      break;
                    case 35:
                      if (
                        ((e.prev = 35),
                        (e.t2 = e.catch(29)),
                        console.debug("Failed to fetch list", t, e.t2),
                        !s)
                      ) {
                        e.next = 40;
                        break;
                      }
                      throw new Error("Failed to download list ".concat(t));
                    case 40:
                      return e.abrupt("continue", 52);
                    case 41:
                      if (d.ok) {
                        e.next = 45;
                        break;
                      }
                      if (!s) {
                        e.next = 44;
                        break;
                      }
                      throw new Error("Failed to download list ".concat(t));
                    case 44:
                      return e.abrupt("continue", 52);
                    case 45:
                      return (e.next = 47), d.json();
                    case 47:
                      if (((m = e.sent), zm(m))) {
                        e.next = 51;
                        break;
                      }
                      throw (
                        ((b =
                          null !==
                            (p =
                              null === (f = zm.errors) || void 0 === f
                                ? void 0
                                : f.reduce(function (e, t) {
                                    var n,
                                      a = ""
                                        .concat(t.dataPath, " ")
                                        .concat(
                                          null !== (n = t.message) &&
                                            void 0 !== n
                                            ? n
                                            : ""
                                        );
                                    return e.length > 0
                                      ? "".concat(e, "; ").concat(a)
                                      : "".concat(a);
                                  }, "")) && void 0 !== p
                            ? p
                            : "unknown error"),
                        new Error("Token list failed validation: ".concat(b)))
                      );
                    case 51:
                      return e.abrupt("return", m);
                    case 52:
                      l++, (e.next = 25);
                      break;
                    case 55:
                      throw new Error("Unrecognized list URL protocol.");
                    case 56:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [2, 8],
                [12, 16],
                [29, 35],
              ]
            );
          })
        )).apply(this, arguments);
      }
      var Fm,
        qm,
        Hm,
        Vm,
        Ym,
        Km,
        Jm = [
          {
            constant: !0,
            inputs: [{ name: "node", type: "bytes32" }],
            name: "resolver",
            outputs: [{ name: "resolverAddress", type: "address" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
        ],
        Qm = [
          {
            constant: !0,
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "contenthash",
            outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
        ];
      function Xm(e, t) {
        return new Wt.Contract(e, Qm, t);
      }
      function Gm(e, t) {
        return Zm.apply(this, arguments);
      }
      function Zm() {
        return (Zm = Object(A.a)(
          E.a.mark(function e(t, n) {
            var a, r, o;
            return E.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = new Wt.Contract(
                        "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        Jm,
                        n
                      )),
                      (r = Object(Ui.namehash)(t)),
                      (e.next = 4),
                      a.resolver(r)
                    );
                  case 4:
                    return (
                      (o = e.sent), e.abrupt("return", Xm(o, n).contenthash(r))
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function _m() {
        var e = Te(),
          t = e.chainId,
          n = e.library,
          a = Object(u.c)(),
          r = Object(o.useCallback)(
            function (e) {
              if (!n || t !== p.ChainId.MAINNET) {
                if (L === p.ChainId.MAINNET) {
                  var a = (function () {
                    var e;
                    return (F =
                      null !== (e = F) && void 0 !== e
                        ? e
                        : new f.a(q.provider));
                  })();
                  if (a) return Gm(e, a);
                }
                throw new Error("Could not construct mainnet ENS resolver");
              }
              return Gm(e, n);
            },
            [t, n]
          );
        return Object(o.useCallback)(
          (function () {
            var e = Object(A.a)(
              E.a.mark(function e(t) {
                var n;
                return E.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = Object(Fe.e)()),
                          a(gs.pending({ requestId: n, url: t })),
                          e.abrupt(
                            "return",
                            Wm(t, r)
                              .then(function (e) {
                                return (
                                  a(
                                    gs.fulfilled({
                                      url: t,
                                      tokenList: e,
                                      requestId: n,
                                    })
                                  ),
                                  e
                                );
                              })
                              .catch(function (e) {
                                throw (
                                  (console.debug(
                                    "Failed to get list at url ".concat(t),
                                    e
                                  ),
                                  a(
                                    gs.rejected({
                                      url: t,
                                      requestId: n,
                                      errorMessage: e.message,
                                    })
                                  ),
                                  e)
                                );
                              })
                          )
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [a, r]
        );
      }
      var $m = Object(we.default)(Ca)(
          Fm ||
            (Fm = Object(Oe.a)([
              "\n  padding: 0;\n  font-size: 1rem;\n  opacity: ",
              ";\n",
            ])),
          function (e) {
            return e.disabled ? "0.4" : "1";
          }
        ),
        ep = we.default.div(
          qm ||
            (qm = Object(Oe.a)([
              "\n  z-index: 100;\n  visibility: ",
              ";\n  opacity: ",
              ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ",
              ";\n  border: 1px solid ",
              ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ",
              ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n",
            ])),
          function (e) {
            return e.show ? "visible" : "hidden";
          },
          function (e) {
            return e.show ? 1 : 0;
          },
          function (e) {
            return e.theme.bg2;
          },
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.text2;
          }
        ),
        tp = we.default.div(
          Hm ||
            (Hm = Object(Oe.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n",
            ]))
        ),
        np = we.default.div(
          Vm ||
            (Vm = Object(Oe.a)([
              "\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n",
            ]))
        );
      function ap(e) {
        var t = e.listUrl,
          n = Object(o.useMemo)(
            function () {
              var e;
              return null === (e = Sd(t)) || void 0 === e ? void 0 : e.ensName;
            },
            [t]
          ),
          a = Object(o.useMemo)(
            function () {
              if (!n) {
                var e = t.toLowerCase();
                if (e.startsWith("ipfs://") || e.startsWith("ipns://"))
                  return t;
                try {
                  return new URL(t).host;
                } catch (a) {
                  return;
                }
              }
            },
            [t, n]
          );
        return i.a.createElement(
          i.a.Fragment,
          null,
          null !== n && void 0 !== n ? n : a
        );
      }
      function rp(e) {
        return "list-row-".concat(e.replace(/\./g, "-"));
      }
      var op,
        ip,
        cp,
        lp = Object(o.memo)(function (e) {
          var t = e.listUrl,
            n = e.onBack,
            a = Object(u.d)(function (e) {
              return e.lists.byUrl;
            }),
            r = We(),
            c = Object(u.c)(),
            l = a[t],
            s = l.current,
            d = l.pendingUpdate,
            m = t === r,
            p = vi(!1),
            f = Object(O.a)(p, 2),
            b = f[0],
            y = f[1],
            v = Object(o.useRef)(),
            h = Object(o.useState)(),
            g = Object(O.a)(h, 2),
            E = g[0],
            A = g[1],
            x = Object(o.useState)(),
            j = Object(O.a)(x, 2),
            w = j[0],
            k = j[1],
            T = Object(ta.a)(E, w, {
              placement: "auto",
              strategy: "fixed",
              modifiers: [{ name: "offset", options: { offset: [8, 8] } }],
            }),
            C = T.styles,
            I = T.attributes;
          _n(v, b ? y : void 0);
          var S = Object(o.useCallback)(
              function () {
                m || (c(xs(t)), n());
              },
              [c, m, t, n]
            ),
            R = Object(o.useCallback)(
              function () {
                d && c(Es(t));
              },
              [c, t, d]
            ),
            N = Object(o.useCallback)(
              function () {
                "REMOVE" ===
                  window.prompt(
                    "Please confirm you would like to remove this list by typing REMOVE"
                  ) && c(As(t));
              },
              [c, t]
            );
          return s
            ? i.a.createElement(
                Sr,
                { key: t, align: "center", padding: "16px", id: rp(t) },
                s.logoURI
                  ? i.a.createElement(Dd, {
                      style: { marginRight: "1rem" },
                      logoURI: s.logoURI,
                      alt: "".concat(s.name, " list logo"),
                    })
                  : i.a.createElement("div", {
                      style: {
                        width: "24px",
                        height: "24px",
                        marginRight: "1rem",
                      },
                    }),
                i.a.createElement(
                  jr,
                  { style: { flex: "1" } },
                  i.a.createElement(
                    Sr,
                    null,
                    i.a.createElement(
                      ke.b,
                      {
                        fontWeight: m ? 500 : 400,
                        fontSize: 16,
                        style: { overflow: "hidden", textOverflow: "ellipsis" },
                      },
                      s.name
                    )
                  ),
                  i.a.createElement(
                    Sr,
                    { style: { marginTop: "4px" } },
                    i.a.createElement(
                      np,
                      { title: t },
                      i.a.createElement(ap, { listUrl: t })
                    )
                  )
                ),
                i.a.createElement(
                  tp,
                  { ref: v },
                  i.a.createElement(
                    mo,
                    {
                      style: {
                        width: "2rem",
                        padding: ".8rem .35rem",
                        borderRadius: "12px",
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      },
                      onClick: y,
                      ref: A,
                    },
                    i.a.createElement(Pm, null)
                  ),
                  b &&
                    i.a.createElement(
                      ep,
                      Object.assign(
                        { show: !0, ref: k, style: C.popper },
                        I.popper
                      ),
                      i.a.createElement("div", null, s && js(s.version)),
                      i.a.createElement(dm, null),
                      i.a.createElement(
                        Ra,
                        {
                          href: "https://tokenlists.1hive.org/token-list?url=".concat(
                            t
                          ),
                        },
                        "View list"
                      ),
                      i.a.createElement(
                        $m,
                        { onClick: N, disabled: 1 === Object.keys(a).length },
                        "Remove list"
                      ),
                      d && i.a.createElement($m, { onClick: R }, "Update list")
                    )
                ),
                m
                  ? i.a.createElement(
                      lo,
                      {
                        disabled: !0,
                        className: "select-button",
                        style: {
                          width: "5rem",
                          minWidth: "5rem",
                          padding: "0.5rem .35rem",
                          borderRadius: "12px",
                          fontSize: "14px",
                        },
                      },
                      "Selected"
                    )
                  : i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        lo,
                        {
                          className: "select-button",
                          style: {
                            width: "5rem",
                            minWidth: "4.5rem",
                            padding: "0.5rem .35rem",
                            borderRadius: "12px",
                            fontSize: "14px",
                          },
                          onClick: S,
                        },
                        "Select"
                      )
                    )
              )
            : null;
        }),
        up = Object(we.default)(so)(
          Ym ||
            (Ym = Object(Oe.a)([
              "\n  /* height: 1.8rem; */\n  max-width: 4rem;\n  margin-left: 1rem;\n  border-radius: 12px;\n  padding: 10px 18px;\n",
            ]))
        ),
        sp = we.default.div(
          Km || (Km = Object(Oe.a)(["\n  flex: 1;\n  overflow: auto;\n"]))
        );
      function dp(e) {
        var t,
          n = e.onDismiss,
          a = e.onBack,
          r = Object(o.useState)(""),
          c = Object(O.a)(r, 2),
          l = c[0],
          s = c[1],
          d = Object(u.c)(),
          m = Object(u.d)(function (e) {
            return e.lists.byUrl;
          }),
          p = Boolean(
            null === (t = m[l]) || void 0 === t ? void 0 : t.loadingRequestId
          ),
          f = Object(o.useState)(null),
          b = Object(O.a)(f, 2),
          y = b[0],
          v = b[1],
          h = Object(o.useCallback)(function (e) {
            s(e.target.value), v(null);
          }, []),
          g = _m(),
          E = Object(o.useCallback)(
            function () {
              p ||
                (v(null),
                g(l)
                  .then(function () {
                    s("");
                  })
                  .catch(function (e) {
                    v(e.message), d(As(l));
                  }));
            },
            [p, d, g, l]
          ),
          A = Object(o.useMemo)(
            function () {
              return Rd(l).length > 0 || Boolean(Sd(l));
            },
            [l]
          ),
          x = Object(o.useCallback)(
            function (e) {
              A && "Enter" === e.key && E();
            },
            [E, A]
          ),
          j = Object(o.useMemo)(
            function () {
              return Object.keys(m)
                .filter(function (e) {
                  return Boolean(m[e].current);
                })
                .sort(function (e, t) {
                  var n = m[e].current,
                    a = m[t].current;
                  return n && a
                    ? n.name.toLowerCase() < a.name.toLowerCase()
                      ? -1
                      : n.name.toLowerCase() === a.name.toLowerCase()
                      ? 0
                      : 1
                    : n
                    ? -1
                    : a
                    ? 1
                    : 0;
                });
            },
            [m]
          );
        return i.a.createElement(
          jr,
          { style: { width: "100%", flex: "1 1" } },
          i.a.createElement(
            cm,
            null,
            i.a.createElement(
              kr,
              null,
              i.a.createElement(
                "div",
                null,
                i.a.createElement(ka.a, {
                  style: { cursor: "pointer" },
                  onClick: a,
                })
              ),
              i.a.createElement(
                ke.b,
                { fontWeight: 500, fontSize: 20 },
                "Manage Lists"
              ),
              i.a.createElement(Ta, { onClick: n })
            )
          ),
          i.a.createElement(sm, null),
          i.a.createElement(
            cm,
            { gap: "14px" },
            i.a.createElement(
              ke.b,
              { fontWeight: 600 },
              "Add a list",
              " ",
              i.a.createElement(va, {
                text: "Token lists are an open specification for lists of ERC20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious ERC20 tokens.",
              })
            ),
            i.a.createElement(
              Sr,
              null,
              i.a.createElement(um, {
                type: "text",
                id: "list-add-input",
                placeholder: "https:// or ipfs:// or ENS name",
                value: l,
                onChange: h,
                onKeyDown: x,
                style: { height: "2.75rem", borderRadius: 12, padding: "12px" },
              }),
              i.a.createElement(up, { onClick: E, disabled: !A }, "Add")
            ),
            y
              ? i.a.createElement(
                  hr,
                  {
                    title: y,
                    style: { textOverflow: "ellipsis", overflow: "hidden" },
                    error: !0,
                  },
                  y
                )
              : null
          ),
          i.a.createElement(sm, null),
          i.a.createElement(
            sp,
            null,
            j.map(function (e) {
              return i.a.createElement(lp, { key: e, listUrl: e, onBack: a });
            })
          ),
          i.a.createElement(sm, null),
          i.a.createElement(
            "div",
            { style: { padding: "16px", textAlign: "center" } },
            i.a.createElement(
              Ra,
              { href: "https://tokenlists.1hive.org" },
              "Browse lists"
            )
          )
        );
      }
      function mp(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.onCurrencySelect,
          r = e.selectedCurrency,
          c = e.otherSelectedCurrency,
          l = e.showCommonBases,
          u = void 0 !== l && l,
          s = Object(o.useState)(!1),
          d = Object(O.a)(s, 2),
          m = d[0],
          p = d[1],
          f = Od(t);
        Object(o.useEffect)(
          function () {
            t && !f && p(!1);
          },
          [t, f]
        );
        var b = Object(o.useCallback)(
            function (e) {
              a(e), n();
            },
            [n, a]
          ),
          y = Object(o.useCallback)(function () {
            p(!0);
          }, []),
          v = Object(o.useCallback)(function () {
            p(!1);
          }, []),
          h = Object(o.useCallback)(function () {
            p(!0);
          }, []),
          g = !We();
        return i.a.createElement(
          Vo,
          {
            isOpen: t,
            onDismiss: n,
            maxHeight: 90,
            minHeight: m ? 40 : g ? 0 : 80,
          },
          m
            ? i.a.createElement(dp, { onDismiss: n, onBack: v })
            : g
            ? i.a.createElement(Sm, { onSelectList: h })
            : i.a.createElement(wm, {
                isOpen: t,
                onDismiss: n,
                onCurrencySelect: b,
                onChangeList: y,
                selectedCurrency: r,
                otherSelectedCurrency: c,
                showCommonBases: u,
              })
        );
      }
      var pp,
        fp = we.default.div(
          op ||
            (op = Object(Oe.a)([
              "\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ",
              ";\n",
            ])),
          function (e) {
            var t = e.sizeraw;
            return e.margin && (t / 3 + 8).toString() + "px";
          }
        ),
        bp = Object(we.default)(Kd)(
          ip || (ip = Object(Oe.a)(["\n  z-index: 2;\n"]))
        ),
        yp = Object(we.default)(Kd)(
          cp ||
            (cp = Object(Oe.a)(["\n  position: absolute;\n  left: ", ";\n"])),
          function (e) {
            return (e.sizeraw / 2).toString() + "px";
          }
        );
      function vp(e) {
        var t = e.currency0,
          n = e.currency1,
          a = e.size,
          r = void 0 === a ? 16 : a,
          o = e.margin,
          c = void 0 !== o && o;
        return i.a.createElement(
          fp,
          { sizeraw: r, margin: c },
          t &&
            i.a.createElement(bp, { currency: t, size: r.toString() + "px" }),
          n &&
            i.a.createElement(yp, {
              currency: n,
              size: r.toString() + "px",
              sizeraw: r,
            })
        );
      }
      var hp,
        gp,
        Ep,
        Op,
        Ap,
        xp,
        jp,
        wp,
        kp,
        Tp,
        Cp,
        Ip,
        Sp,
        Rp,
        Np = we.default.input(
          pp ||
            (pp = Object(Oe.a)([
              "\n  color: ",
              ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ",
              ";\n  font-size: ",
              ";\n  text-align: ",
              ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
              ";\n  }\n",
            ])),
          function (e) {
            var t = e.error,
              n = e.theme;
            return t ? n.red1 : n.text1;
          },
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            var t = e.fontSize;
            return null !== t && void 0 !== t ? t : "24px";
          },
          function (e) {
            var t = e.align;
            return t && t;
          },
          function (e) {
            return e.theme.text4;
          }
        ),
        Up = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
        Bp = i.a.memo(function (e) {
          var t = e.value,
            n = e.onUserInput,
            a = e.placeholder,
            r = Object(Wn.a)(e, ["value", "onUserInput", "placeholder"]);
          return i.a.createElement(
            Np,
            Object.assign({}, r, {
              value: t,
              onChange: function (e) {
                var t;
                ("" === (t = e.target.value.replace(/,/g, ".")) ||
                  Up.test(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) &&
                  n(t);
              },
              inputMode: "decimal",
              title: "Token Amount",
              autoComplete: "off",
              autoCorrect: "off",
              type: "text",
              pattern: "^[0-9]*[.,]?[0-9]*$",
              placeholder: a || "0.0",
              minLength: 1,
              maxLength: 79,
              spellCheck: "false",
            })
          );
        }),
        Pp = we.default.div(
          hp ||
            (hp = Object(Oe.a)([
              "\n  ",
              "\n  align-items: center;\n  padding: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          },
          function (e) {
            return e.selected
              ? "0.75rem 0.5rem 0.75rem 1rem"
              : "0.75rem 0.75rem 0.75rem 1rem";
          }
        ),
        Mp = we.default.button(
          gp ||
            (gp = Object(Oe.a)([
              "\n  align-items: center;\n  height: 2.2rem;\n  font-size: 20px;\n  font-weight: 500;\n  background-color: ",
              ";\n  color: ",
              ";\n  border-radius: 12px;\n  box-shadow: ",
              ";\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n\n  :focus,\n  :hover {\n    background-color: ",
              ";\n  }\n",
            ])),
          function (e) {
            var t = e.selected,
              n = e.theme;
            return t ? n.bg1 : n.primary1;
          },
          function (e) {
            var t = e.selected,
              n = e.theme;
            return t ? n.text1 : n.white;
          },
          function (e) {
            return e.selected ? "none" : "0px 6px 10px rgba(0, 0, 0, 0.075)";
          },
          function (e) {
            var t = e.selected,
              n = e.theme;
            return t ? n.bg2 : Object(ea.a)(0.05, n.primary1);
          }
        ),
        Dp = we.default.div(
          Ep ||
            (Ep = Object(Oe.a)([
              "\n  ",
              "\n  align-items: center;\n  color: ",
              ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          },
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.2, t.text2);
          }
        ),
        zp = we.default.span(
          Op ||
            (Op = Object(Oe.a)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n",
            ]))
        ),
        Wp = Object(we.default)(Pm)(
          Ap ||
            (Ap = Object(Oe.a)([
              "\n  margin: 0 0.25rem 0 0.5rem;\n  height: 35%;\n\n  path {\n    stroke: ",
              ";\n    stroke-width: 1.5px;\n  }\n",
            ])),
          function (e) {
            var t = e.selected,
              n = e.theme;
            return t ? n.text1 : n.white;
          }
        ),
        Lp = we.default.div(
          xp ||
            (xp = Object(Oe.a)([
              "\n  ",
              "\n  position: relative;\n  border-radius: ",
              ";\n  background-color: ",
              ";\n  z-index: 1;\n",
            ])),
          function (e) {
            return e.theme.flexColumnNoWrap;
          },
          function (e) {
            return e.hideInput ? "8px" : "20px";
          },
          function (e) {
            return e.theme.bg2;
          }
        ),
        Fp = we.default.div(
          jp ||
            (jp = Object(Oe.a)([
              "\n  border-radius: ",
              ";\n  border: 1px solid ",
              ";\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            return e.hideInput ? "8px" : "20px";
          },
          function (e) {
            return e.theme.bg2;
          },
          function (e) {
            return e.theme.bg1;
          }
        ),
        qp = we.default.span(
          wp || (wp = Object(Oe.a)(["\n  ", "\n  font-size:  ", ";\n\n"])),
          function (e) {
            return e.active
              ? "  margin: 0 0.25rem 0 0.75rem;"
              : "  margin: 0 0.25rem 0 0.25rem;";
          },
          function (e) {
            return e.active ? "20px" : "16px";
          }
        ),
        Hp = we.default.button(
          kp ||
            (kp = Object(Oe.a)([
              "\n  height: 28px;\n  background-color: ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n\n  font-weight: 500;\n  cursor: pointer;\n  margin-right: 0.5rem;\n  color: ",
              ";\n  :hover {\n    border: 1px solid ",
              ";\n  }\n  :focus {\n    border: 1px solid ",
              ";\n    outline: none;\n  }\n\n  ",
              ";\n",
            ])),
          function (e) {
            return e.theme.primary5;
          },
          function (e) {
            return e.theme.primary5;
          },
          function (e) {
            return e.theme.primaryText1;
          },
          function (e) {
            return e.theme.primary1;
          },
          function (e) {
            return e.theme.primary1;
          },
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              Tp || (Tp = Object(Oe.a)(["\n    margin-right: 0.5rem;\n  "]))
            );
          }
        );
      function Vp(e) {
        var t = e.value,
          n = e.onUserInput,
          a = e.onMax,
          r = e.showMaxButton,
          c = e.label,
          l = void 0 === c ? "Input" : c,
          u = e.onCurrencySelect,
          s = e.currency,
          d = e.disableCurrencySelect,
          m = void 0 !== d && d,
          p = e.hideBalance,
          f = void 0 !== p && p,
          b = e.pair,
          y = void 0 === b ? null : b,
          v = e.hideInput,
          h = void 0 !== v && v,
          g = e.otherCurrency,
          E = e.id,
          A = e.showCommonBases,
          x = Object(ye.b)().t,
          j = Object(o.useState)(!1),
          w = Object(O.a)(j, 2),
          k = w[0],
          T = w[1],
          C = Te().account,
          I = Rn(
            null !== C && void 0 !== C ? C : void 0,
            null !== s && void 0 !== s ? s : void 0
          ),
          S = Object(o.useContext)(we.ThemeContext),
          R = Object(o.useCallback)(
            function () {
              T(!1);
            },
            [T]
          );
        return i.a.createElement(
          Lp,
          { id: E },
          i.a.createElement(
            Fp,
            { hideInput: h },
            !h &&
              i.a.createElement(
                Dp,
                null,
                i.a.createElement(
                  kr,
                  null,
                  i.a.createElement(
                    dr,
                    { color: S.text2, fontWeight: 500, fontSize: 14 },
                    l
                  ),
                  C &&
                    i.a.createElement(
                      dr,
                      {
                        onClick: a,
                        color: S.text2,
                        fontWeight: 500,
                        fontSize: 14,
                        style: { display: "inline", cursor: "pointer" },
                      },
                      !f && s && I
                        ? "Balance: " +
                            (null === I || void 0 === I
                              ? void 0
                              : I.toSignificant(6))
                        : " -"
                    )
                )
              ),
            i.a.createElement(
              Pp,
              {
                style: h ? { padding: "0", borderRadius: "8px" } : {},
                selected: m,
              },
              !h &&
                i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(Bp, {
                    className: "token-amount-input",
                    value: t,
                    onUserInput: function (e) {
                      n(e);
                    },
                  }),
                  C &&
                    s &&
                    r &&
                    "To" !== l &&
                    i.a.createElement(Hp, { onClick: a }, "MAX")
                ),
              i.a.createElement(
                Mp,
                {
                  selected: !!s,
                  className: "open-currency-select-button",
                  onClick: function () {
                    m || T(!0);
                  },
                },
                i.a.createElement(
                  zp,
                  null,
                  y
                    ? i.a.createElement(vp, {
                        currency0: y.token0,
                        currency1: y.token1,
                        size: 24,
                        margin: !0,
                      })
                    : s
                    ? i.a.createElement(Kd, { currency: s, size: "24px" })
                    : null,
                  y
                    ? i.a.createElement(
                        qp,
                        { className: "pair-name-container" },
                        null === y || void 0 === y ? void 0 : y.token0.symbol,
                        ":",
                        null === y || void 0 === y ? void 0 : y.token1.symbol
                      )
                    : i.a.createElement(
                        qp,
                        {
                          className: "token-symbol-container",
                          active: Boolean(s && s.symbol),
                        },
                        (s && s.symbol && s.symbol.length > 20
                          ? s.symbol.slice(0, 4) +
                            "..." +
                            s.symbol.slice(s.symbol.length - 5, s.symbol.length)
                          : null === s || void 0 === s
                          ? void 0
                          : s.symbol) || x("selectToken")
                      ),
                  !m && i.a.createElement(Wp, { selected: !!s })
                )
              )
            )
          ),
          !m &&
            u &&
            i.a.createElement(mp, {
              isOpen: k,
              onDismiss: R,
              onCurrencySelect: u,
              selectedCurrency: s,
              otherSelectedCurrency: g,
              showCommonBases: A,
            })
        );
      }
      var Yp = we.default.div(
          Cp ||
            (Cp = Object(Oe.a)([
              "\n  ",
              "\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          }
        ),
        Kp = Object(we.default)(Ae.c).attrs({ activeClassName: "ACTIVE" })(
          Ip ||
            (Ip = Object(Oe.a)([
              "\n  ",
              "\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ",
              ";\n  font-size: 20px;\n\n  &.",
              " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ",
              ";\n  }\n\n  :hover,\n  :focus {\n    color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          },
          function (e) {
            return e.theme.text3;
          },
          "ACTIVE",
          function (e) {
            return e.theme.text1;
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.1, t.text1);
          }
        ),
        Jp = we.default.div(
          Sp ||
            (Sp = Object(Oe.a)(["\n  font-weight: 500;\n  font-size: 20px;\n"]))
        ),
        Qp = Object(we.default)(ka.a)(
          Rp || (Rp = Object(Oe.a)(["\n  color: ", ";\n"])),
          function (e) {
            return e.theme.text1;
          }
        );
      function Xp(e) {
        var t = e.active,
          n = Object(ye.b)().t;
        return i.a.createElement(
          Yp,
          { style: { marginBottom: "20px" } },
          i.a.createElement(
            Kp,
            {
              id: "swap-nav-link",
              to: "/swap",
              isActive: function () {
                return "swap" === t;
              },
            },
            n("swap")
          ),
          i.a.createElement(
            Kp,
            {
              id: "pool-nav-link",
              to: "/pool",
              isActive: function () {
                return "pool" === t;
              },
            },
            n("pool")
          )
        );
      }
      function Gp() {
        return i.a.createElement(
          Yp,
          null,
          i.a.createElement(
            kr,
            { style: { padding: "1rem" } },
            i.a.createElement(
              Ae.b,
              { to: "/pool" },
              i.a.createElement(Qp, null)
            ),
            i.a.createElement(Jp, null, "Import Pool"),
            i.a.createElement(va, {
              text: "Use this tool to find pairs that don't automatically appear in the interface.",
            })
          )
        );
      }
      function Zp(e) {
        var t = e.adding;
        return i.a.createElement(
          Yp,
          null,
          i.a.createElement(
            kr,
            { style: { padding: "1rem" } },
            i.a.createElement(
              Ae.b,
              { to: "/pool" },
              i.a.createElement(Qp, null)
            ),
            i.a.createElement(Jp, null, t ? "Add" : "Remove", " Liquidity"),
            i.a.createElement(va, {
              text: t
                ? "When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time."
                : "Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.",
            })
          )
        );
      }
      var _p,
        $p,
        ef,
        tf,
        nf,
        af,
        rf,
        of,
        cf,
        lf,
        uf,
        sf,
        df = n(468);
      function mf(e) {
        var t,
          n,
          a =
            null ===
              (t = yt(
                vn(null === e || void 0 === e ? void 0 : e.address, !1),
                "totalSupply"
              )) ||
            void 0 === t ||
            null === (n = t.result) ||
            void 0 === n
              ? void 0
              : n[0];
        return e && a ? new p.TokenAmount(e, a.toString()) : void 0;
      }
      function pf(e) {
        if (e === p.ETHER) return "ETH";
        if (e instanceof p.Token) return e.address;
        throw new Error("invalid currency");
      }
      function ff(e, t) {
        return t && e === p.ETHER
          ? p.WETH[t]
          : e instanceof p.Token
          ? e
          : void 0;
      }
      function bf(e, t) {
        var n = e && t ? ff(e.currency, t) : void 0;
        return n && e ? new p.TokenAmount(n, e.raw) : void 0;
      }
      function yf(e) {
        return e.equals(p.WETH[e.chainId]) ? p.ETHER : e;
      }
      var vf = we.default.div(
          _p || (_p = Object(Oe.a)(["\n  position: relative;\n"]))
        ),
        hf = we.default.div(
          $p || ($p = Object(Oe.a)(["\n  padding: 2px;\n\n  ", "\n"])),
          function (e) {
            return e.clickable
              ? Object(we.css)(
                  ef ||
                    (ef = Object(Oe.a)([
                      "\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        ",
                    ]))
                )
              : null;
          }
        ),
        gf = we.default.div(
          tf ||
            (tf = Object(Oe.a)([
              "\n  height: 1px;\n  width: 100%;\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.bg3;
          }
        ),
        Ef = we.default.div(
          nf || (nf = Object(Oe.a)(["\n  margin-top: 1rem;\n"]))
        ),
        Of = Object(we.default)(ke.b)(
          af || (af = Object(Oe.a)(["\n  color: ", ";\n"])),
          function (e) {
            var t = e.theme,
              n = e.severity;
            return 3 === n || 4 === n
              ? t.red1
              : 2 === n
              ? t.yellow2
              : 1 === n
              ? t.text1
              : t.green1;
          }
        ),
        Af = we.default.button(
          rf ||
            (rf = Object(Oe.a)([
              "\n  height: 22px;\n  width: 22px;\n  background-color: ",
              ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ",
              ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ",
              ";\n  }\n  :focus {\n    background-color: ",
              ";\n    outline: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.bg2;
          },
          function (e) {
            return e.theme.text2;
          },
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.bg3;
          }
        ),
        xf = Object(we.default)(ke.b)(
          of ||
            (of = Object(Oe.a)([
              "\n  text-overflow: ellipsis;\n  width: 220px;\n  overflow: hidden;\n",
            ]))
        ),
        jf = we.default.span(
          cf ||
            (cf = Object(Oe.a)([
              "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n",
            ]))
        ),
        wf = we.default.div(
          lf ||
            (lf = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ",
              ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n",
            ])),
          function (e) {
            var t = e.theme;
            return Object(ea.c)(0.9, t.red1);
          },
          function (e) {
            return e.theme.red1;
          }
        ),
        kf = we.default.div(
          uf ||
            (uf = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n",
            ])),
          function (e) {
            var t = e.theme;
            return Object(ea.c)(0.9, t.red1);
          }
        );
      function Tf(e) {
        var t = e.error;
        return i.a.createElement(
          wf,
          null,
          i.a.createElement(kf, null, i.a.createElement(ld.a, { size: 24 })),
          i.a.createElement("p", null, t)
        );
      }
      var Cf,
        If,
        Sf = Object(we.default)(xr)(
          sf ||
            (sf = Object(Oe.a)([
              "\n  background-color: ",
              ";\n  color: ",
              ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n",
            ])),
          function (e) {
            var t = e.theme;
            return Object(ea.c)(0.9, t.primary1);
          },
          function (e) {
            return e.theme.primary1;
          }
        ),
        Rf = Object(we.default)(kr)(
          Cf || (Cf = Object(Oe.a)(["\n  height: 24px;\n"]))
        ),
        Nf = Object(we.default)(qn)(
          If ||
            (If = Object(Oe.a)([
              "\n  border: 1px solid ",
              ";\n  :hover {\n    border: 1px solid ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.bg2;
          },
          function (e) {
            var t = e.theme;
            return Object(ea.a)(0.06, t.bg2);
          }
        );
      function Uf(e) {
        var t = e.pair,
          n = e.showUnwrapped,
          a = void 0 !== n && n,
          r = e.border,
          c = Te().account,
          l = a ? t.token0 : yf(t.token0),
          u = a ? t.token1 : yf(t.token1),
          s = Object(o.useState)(!1),
          d = Object(O.a)(s, 2),
          m = d[0],
          f = d[1],
          b = In(null !== c && void 0 !== c ? c : void 0, t.liquidityToken),
          y = mf(t.liquidityToken),
          v =
            t && y && b && p.JSBI.greaterThanOrEqual(y.raw, b.raw)
              ? [
                  t.getLiquidityValue(t.token0, y, b, !1),
                  t.getLiquidityValue(t.token1, y, b, !1),
                ]
              : [void 0, void 0],
          h = Object(O.a)(v, 2),
          g = h[0],
          E = h[1];
        return i.a.createElement(
          i.a.Fragment,
          null,
          b &&
            i.a.createElement(
              Vn,
              { border: r },
              i.a.createElement(
                xr,
                { gap: "12px" },
                i.a.createElement(
                  Rf,
                  null,
                  i.a.createElement(
                    Ir,
                    null,
                    i.a.createElement(
                      ke.b,
                      { fontWeight: 500, fontSize: 16 },
                      "Your position"
                    )
                  )
                ),
                i.a.createElement(
                  Rf,
                  {
                    onClick: function () {
                      return f(!m);
                    },
                  },
                  i.a.createElement(
                    Ir,
                    null,
                    i.a.createElement(vp, {
                      currency0: l,
                      currency1: u,
                      margin: !0,
                      size: 20,
                    }),
                    i.a.createElement(
                      ke.b,
                      { fontWeight: 500, fontSize: 20 },
                      l.symbol,
                      "/",
                      u.symbol
                    )
                  ),
                  i.a.createElement(
                    Ir,
                    null,
                    i.a.createElement(
                      ke.b,
                      { fontWeight: 500, fontSize: 20 },
                      b ? b.toSignificant(4) : "-"
                    )
                  )
                ),
                i.a.createElement(
                  xr,
                  { gap: "4px" },
                  i.a.createElement(
                    Rf,
                    null,
                    i.a.createElement(
                      ke.b,
                      { color: "#888D9B", fontSize: 16, fontWeight: 500 },
                      l.symbol,
                      ":"
                    ),
                    g
                      ? i.a.createElement(
                          Ir,
                          null,
                          i.a.createElement(
                            ke.b,
                            {
                              color: "#888D9B",
                              fontSize: 16,
                              fontWeight: 500,
                              marginLeft: "6px",
                            },
                            null === g || void 0 === g
                              ? void 0
                              : g.toSignificant(6)
                          )
                        )
                      : "-"
                  ),
                  i.a.createElement(
                    Rf,
                    null,
                    i.a.createElement(
                      ke.b,
                      { color: "#888D9B", fontSize: 16, fontWeight: 500 },
                      u.symbol,
                      ":"
                    ),
                    E
                      ? i.a.createElement(
                          Ir,
                          null,
                          i.a.createElement(
                            ke.b,
                            {
                              color: "#888D9B",
                              fontSize: 16,
                              fontWeight: 500,
                              marginLeft: "6px",
                            },
                            null === E || void 0 === E
                              ? void 0
                              : E.toSignificant(6)
                          )
                        )
                      : "-"
                  )
                )
              )
            )
        );
      }
      function Bf(e) {
        var t = e.pair,
          n = e.border,
          a = Te().account,
          r = yf(t.token0),
          c = yf(t.token1),
          l = Object(o.useState)(!1),
          u = Object(O.a)(l, 2),
          s = u[0],
          d = u[1],
          m = In(null !== a && void 0 !== a ? a : void 0, t.liquidityToken),
          f = mf(t.liquidityToken),
          b =
            m && f && p.JSBI.greaterThanOrEqual(f.raw, m.raw)
              ? new p.Percent(m.raw, f.raw)
              : void 0,
          y =
            t && f && m && p.JSBI.greaterThanOrEqual(f.raw, m.raw)
              ? [
                  t.getLiquidityValue(t.token0, f, m, !1),
                  t.getLiquidityValue(t.token1, f, m, !1),
                ]
              : [void 0, void 0],
          v = Object(O.a)(y, 2),
          h = v[0],
          g = v[1];
        return i.a.createElement(
          Nf,
          { border: n },
          i.a.createElement(
            xr,
            { gap: "12px" },
            i.a.createElement(
              Rf,
              {
                onClick: function () {
                  return d(!s);
                },
                style: { cursor: "pointer" },
              },
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(vp, {
                  currency0: r,
                  currency1: c,
                  margin: !0,
                  size: 20,
                }),
                i.a.createElement(
                  ke.b,
                  { fontWeight: 500, fontSize: 20 },
                  r && c
                    ? "".concat(r.symbol, "/").concat(c.symbol)
                    : i.a.createElement(jf, null, "Loading")
                )
              ),
              i.a.createElement(
                Ir,
                null,
                s
                  ? i.a.createElement(df.a, {
                      size: "20",
                      style: { marginLeft: "10px" },
                    })
                  : i.a.createElement(qr.a, {
                      size: "20",
                      style: { marginLeft: "10px" },
                    })
              )
            ),
            s &&
              i.a.createElement(
                xr,
                { gap: "8px" },
                i.a.createElement(
                  Rf,
                  null,
                  i.a.createElement(
                    Ir,
                    null,
                    i.a.createElement(
                      ke.b,
                      { fontSize: 16, fontWeight: 500 },
                      "Pooled ",
                      r.symbol,
                      ":"
                    )
                  ),
                  h
                    ? i.a.createElement(
                        Ir,
                        null,
                        i.a.createElement(
                          ke.b,
                          { fontSize: 16, fontWeight: 500, marginLeft: "6px" },
                          null === h || void 0 === h
                            ? void 0
                            : h.toSignificant(6)
                        ),
                        i.a.createElement(Kd, {
                          size: "20px",
                          style: { marginLeft: "8px" },
                          currency: r,
                        })
                      )
                    : "-"
                ),
                i.a.createElement(
                  Rf,
                  null,
                  i.a.createElement(
                    Ir,
                    null,
                    i.a.createElement(
                      ke.b,
                      { fontSize: 16, fontWeight: 500 },
                      "Pooled ",
                      c.symbol,
                      ":"
                    )
                  ),
                  g
                    ? i.a.createElement(
                        Ir,
                        null,
                        i.a.createElement(
                          ke.b,
                          { fontSize: 16, fontWeight: 500, marginLeft: "6px" },
                          null === g || void 0 === g
                            ? void 0
                            : g.toSignificant(6)
                        ),
                        i.a.createElement(Kd, {
                          size: "20px",
                          style: { marginLeft: "8px" },
                          currency: c,
                        })
                      )
                    : "-"
                ),
                i.a.createElement(
                  Rf,
                  null,
                  i.a.createElement(
                    ke.b,
                    { fontSize: 16, fontWeight: 500 },
                    "Your pool tokens:"
                  ),
                  i.a.createElement(
                    ke.b,
                    { fontSize: 16, fontWeight: 500 },
                    m ? m.toSignificant(4) : "-"
                  )
                ),
                i.a.createElement(
                  Rf,
                  null,
                  i.a.createElement(
                    ke.b,
                    { fontSize: 16, fontWeight: 500 },
                    "Your pool share:"
                  ),
                  i.a.createElement(
                    ke.b,
                    { fontSize: 16, fontWeight: 500 },
                    b ? b.toFixed(2) + "%" : "-"
                  )
                ),
                i.a.createElement(
                  Cr,
                  { justify: "center", marginTop: "10px" },
                  i.a.createElement(
                    Ra,
                    {
                      href: "https://info.baoswap.xyz/pair/".concat(
                        t.liquidityToken.address
                      ),
                    },
                    "View pool information \u2197"
                  )
                ),
                i.a.createElement(
                  kr,
                  { marginTop: "10px" },
                  i.a.createElement(
                    so,
                    {
                      as: Ae.b,
                      to: "/add/".concat(pf(r), "/").concat(pf(c)),
                      width: "48%",
                    },
                    "Add"
                  ),
                  i.a.createElement(
                    so,
                    {
                      as: Ae.b,
                      width: "48%",
                      to: "/remove/".concat(pf(r), "/").concat(pf(c)),
                    },
                    "Remove"
                  )
                )
              )
          )
        );
      }
      var Pf,
        Mf = new Ie.b(tn.a);
      function Df(e) {
        var t = Te().chainId,
          n = Object(o.useMemo)(
            function () {
              return e.map(function (e) {
                var n = Object(O.a)(e, 2),
                  a = n[0],
                  r = n[1];
                return [ff(a, t), ff(r, t)];
              });
            },
            [t, e]
          ),
          a = bt(
            Object(o.useMemo)(
              function () {
                return n.map(function (e) {
                  var t = Object(O.a)(e, 2),
                    n = t[0],
                    a = t[1];
                  return n && a && !n.equals(a)
                    ? p.Pair.getAddress(n, a)
                    : void 0;
                });
              },
              [n]
            ),
            Mf,
            "getReserves"
          );
        return Object(o.useMemo)(
          function () {
            return a.map(function (e, t) {
              var a = e.result,
                r = e.loading,
                o = n[t][0],
                i = n[t][1];
              if (r) return [Pf.LOADING, null];
              if (!o || !i || o.equals(i)) return [Pf.INVALID, null];
              if (!a) return [Pf.NOT_EXISTS, null];
              var c = a.reserve0,
                l = a.reserve1,
                u = o.sortsBefore(i) ? [o, i] : [i, o],
                s = Object(O.a)(u, 2),
                d = s[0],
                m = s[1];
              return [
                Pf.EXISTS,
                new p.Pair(
                  new p.TokenAmount(d, c.toString()),
                  new p.TokenAmount(m, l.toString())
                ),
              ];
            });
          },
          [a, n]
        );
      }
      function zf(e, t) {
        return Df([[e, t]])[0];
      }
      !(function (e) {
        (e[(e.LOADING = 0)] = "LOADING"),
          (e[(e.NOT_EXISTS = 1)] = "NOT_EXISTS"),
          (e[(e.EXISTS = 2)] = "EXISTS"),
          (e[(e.INVALID = 3)] = "INVALID");
      })(Pf || (Pf = {}));
      var Wf,
        Lf = n(449);
      function Ff() {
        var e = Object(xe.g)().search;
        return Object(o.useMemo)(
          function () {
            return e && e.length > 1
              ? Object($s.parse)(e, { parseArrays: !1, ignoreQueryPrefix: !0 })
              : {};
          },
          [e]
        );
      }
      !(function (e) {
        (e.v1 = "v1"), (e.v2 = "v2");
      })(Wf || (Wf = {}));
      var qf = Wf.v2;
      function Hf() {
        var e = Ff().use;
        return e && "string" === typeof e
          ? "v1" === e.toLowerCase()
            ? Wf.v1
            : qf
          : Wf.v2;
      }
      function Vf(e) {
        var t, n;
        return null ===
          (t = yt(
            bn(),
            "getExchange",
            Object(o.useMemo)(
              function () {
                return [e];
              },
              [e]
            )
          )) ||
          void 0 === t ||
          null === (n = t.result) ||
          void 0 === n
          ? void 0
          : n[0];
      }
      var Yf = (function (e) {
        Object(w.a)(n, e);
        var t = Object(k.a)(n);
        function n(e, a) {
          return (
            Object(x.a)(this, n),
            t.call(this, a, new p.TokenAmount(p.WETH[a.token.chainId], e))
          );
        }
        return n;
      })(p.Pair);
      function Kf(e) {
        var t = e instanceof p.Token ? e : void 0,
          n = Vf(
            Boolean(t && t.equals(p.WETH[t.chainId])) ||
              null === t ||
              void 0 === t
              ? void 0
              : t.address
          ),
          a = In(n, t),
          r = kn([n])[null !== n && void 0 !== n ? n : ""];
        return Object(o.useMemo)(
          function () {
            return t && a && r && e ? new Yf(r.raw, a) : void 0;
          },
          [r, e, t, a]
        );
      }
      function Jf() {
        var e = On(),
          t = bn(),
          n = Object(o.useMemo)(
            function () {
              return Object.keys(e).map(function (e) {
                return [e];
              });
            },
            [e]
          ),
          a = ft(t, "getExchange", n, ut);
        return Object(o.useMemo)(
          function () {
            var t;
            return null !==
              (t =
                null === a || void 0 === a
                  ? void 0
                  : a.reduce(function (t, a, r) {
                      var o = a.result;
                      return (
                        (null === o || void 0 === o ? void 0 : o[0]) &&
                          o[0] !== Ft.a &&
                          (t[o[0]] = e[n[r][0]]),
                        t
                      );
                    }, {})) && void 0 !== t
              ? t
              : {};
          },
          [e, n, a]
        );
      }
      function Qf(e) {
        var t,
          n,
          a =
            null === e ||
            void 0 === e ||
            null === (t = e.route) ||
            void 0 === t ||
            null === (n = t.pairs) ||
            void 0 === n
              ? void 0
              : n.some(function (e) {
                  return e instanceof Yf;
                });
        return a ? Wf.v1 : !1 === a ? Wf.v2 : void 0;
      }
      function Xf(e) {
        return Vf(
          Object(o.useMemo)(
            function () {
              if (e && Qf(e) === Wf.v1)
                return e.inputAmount instanceof p.TokenAmount
                  ? e.inputAmount.token.address
                  : e.outputAmount instanceof p.TokenAmount
                  ? e.outputAmount.token.address
                  : void 0;
            },
            [e]
          )
        );
      }
      var Gf,
        Zf = new p.Percent("0"),
        _f = new p.Percent("1");
      function $f(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zf;
        if (e && !t) return !1;
        if (t && !e) return !0;
        if (e && t) {
          if (
            e.tradeType !== t.tradeType ||
            !Object(p.currencyEquals)(
              e.inputAmount.currency,
              t.inputAmount.currency
            ) ||
            !Object(p.currencyEquals)(
              t.outputAmount.currency,
              t.outputAmount.currency
            )
          )
            throw new Error("Trades are not comparable");
          return n.equalTo(Zf)
            ? e.executionPrice.lessThan(t.executionPrice)
            : e.executionPrice.raw
                .multiply(n.add(_f))
                .lessThan(t.executionPrice);
        }
      }
      !(function (e) {
        (e.INPUT = "INPUT"), (e.OUTPUT = "OUTPUT");
      })(Gf || (Gf = {}));
      var eb,
        tb,
        nb = Object(Fe.b)("swap/selectCurrency"),
        ab = Object(Fe.b)("swap/switchCurrencies"),
        rb = Object(Fe.b)("swap/typeInput"),
        ob = Object(Fe.b)("swap/replaceSwapState"),
        ib = Object(Fe.b)("swap/setRecipient"),
        cb = new p.Percent(p.JSBI.BigInt(30), p.JSBI.BigInt(1e4)),
        lb = new p.Percent(p.JSBI.BigInt(1e4), p.JSBI.BigInt(1e4)),
        ub = lb.subtract(cb);
      function sb(e) {
        var t = e
            ? lb.subtract(
                e.route.pairs.reduce(function (e) {
                  return e.multiply(ub);
                }, lb)
              )
            : void 0,
          n = e && t ? e.priceImpact.subtract(t) : void 0;
        return {
          priceImpactWithoutFee: n
            ? new p.Percent(
                null === n || void 0 === n ? void 0 : n.numerator,
                null === n || void 0 === n ? void 0 : n.denominator
              )
            : void 0,
          realizedLPFee:
            t &&
            e &&
            (e.inputAmount instanceof p.TokenAmount
              ? new p.TokenAmount(
                  e.inputAmount.token,
                  t.multiply(e.inputAmount.raw).quotient
                )
              : p.CurrencyAmount.ether(t.multiply(e.inputAmount.raw).quotient)),
        };
      }
      function db(e, t) {
        var n,
          a,
          r = ((a = t), new p.Percent(p.JSBI.BigInt(a), p.JSBI.BigInt(1e4)));
        return (
          (n = {}),
          Object(m.a)(
            n,
            Gf.INPUT,
            null === e || void 0 === e ? void 0 : e.maximumAmountIn(r)
          ),
          Object(m.a)(
            n,
            Gf.OUTPUT,
            null === e || void 0 === e ? void 0 : e.minimumAmountOut(r)
          ),
          n
        );
      }
      function mb(e) {
        return (null === e || void 0 === e ? void 0 : e.lessThan(me))
          ? (null === e || void 0 === e ? void 0 : e.lessThan(se))
            ? (null === e || void 0 === e ? void 0 : e.lessThan(ue))
              ? (null === e || void 0 === e ? void 0 : e.lessThan(le))
                ? 0
                : 1
              : 2
            : 3
          : 4;
      }
      function pb(e, t) {
        var n = Te().account,
          a = e instanceof p.TokenAmount ? e.token : void 0,
          r = (function (e, t, n) {
            var a = yt(
              vn(null === e || void 0 === e ? void 0 : e.address, !1),
              "allowance",
              Object(o.useMemo)(
                function () {
                  return [t, n];
                },
                [t, n]
              )
            ).result;
            return Object(o.useMemo)(
              function () {
                return e && a ? new p.TokenAmount(e, a.toString()) : void 0;
              },
              [e, a]
            );
          })(a, null !== n && void 0 !== n ? n : void 0, t),
          i = (function (e, t) {
            var n = Hi();
            return Object(o.useMemo)(
              function () {
                return (
                  "string" === typeof e &&
                  "string" === typeof t &&
                  Object.keys(n).some(function (a) {
                    var r = n[a];
                    if (!r) return !1;
                    if (r.receipt) return !1;
                    var o = r.approval;
                    return (
                      !!o && o.spender === t && o.tokenAddress === e && Yi(r)
                    );
                  })
                );
              },
              [n, t, e]
            );
          })(null === a || void 0 === a ? void 0 : a.address, t),
          c = Object(o.useMemo)(
            function () {
              return e && t
                ? e.currency === p.ETHER
                  ? eb.APPROVED
                  : r
                  ? r.lessThan(e)
                    ? i
                      ? eb.PENDING
                      : eb.NOT_APPROVED
                    : eb.APPROVED
                  : eb.UNKNOWN
                : eb.UNKNOWN;
            },
            [e, r, i, t]
          ),
          l = vn(null === a || void 0 === a ? void 0 : a.address),
          u = qi(),
          s = Object(o.useCallback)(
            Object(A.a)(
              E.a.mark(function n() {
                var r, o;
                return E.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (c === eb.NOT_APPROVED) {
                          n.next = 3;
                          break;
                        }
                        return (
                          console.error("approve was called unnecessarily"),
                          n.abrupt("return")
                        );
                      case 3:
                        if (a) {
                          n.next = 6;
                          break;
                        }
                        return console.error("no token"), n.abrupt("return");
                      case 6:
                        if (l) {
                          n.next = 9;
                          break;
                        }
                        return (
                          console.error("tokenContract is null"),
                          n.abrupt("return")
                        );
                      case 9:
                        if (e) {
                          n.next = 12;
                          break;
                        }
                        return (
                          console.error("missing amount to approve"),
                          n.abrupt("return")
                        );
                      case 12:
                        if (t) {
                          n.next = 15;
                          break;
                        }
                        return console.error("no spender"), n.abrupt("return");
                      case 15:
                        return (
                          (r = !1),
                          (n.next = 18),
                          l.estimateGas.approve(t, Lf.a).catch(function () {
                            return (
                              (r = !0),
                              l.estimateGas.approve(t, e.raw.toString())
                            );
                          })
                        );
                      case 18:
                        return (
                          (o = n.sent),
                          n.abrupt(
                            "return",
                            l
                              .approve(t, r ? e.raw.toString() : Lf.a, {
                                gasLimit: Qt(o),
                              })
                              .then(function (n) {
                                u(n, {
                                  summary: "Approve " + e.currency.symbol,
                                  approval: {
                                    tokenAddress: a.address,
                                    spender: t,
                                  },
                                });
                              })
                              .catch(function (e) {
                                throw (
                                  (console.debug("Failed to approve token", e),
                                  e)
                                );
                              })
                          )
                        );
                      case 20:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [c, a, l, e, t, u]
          );
        return [c, s];
      }
      !(function (e) {
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.NOT_APPROVED = 1)] = "NOT_APPROVED"),
          (e[(e.PENDING = 2)] = "PENDING"),
          (e[(e.APPROVED = 3)] = "APPROVED");
      })(eb || (eb = {})),
        (function (e) {
          (e.CURRENCY_A = "CURRENCY_A"), (e.CURRENCY_B = "CURRENCY_B");
        })(tb || (tb = {}));
      var fb = Object(Fe.b)("mint/typeInputMint"),
        bb = Object(Fe.b)("mint/resetMintState");
      function yb(e) {
        var t = Vt(e),
          n = Mi(t || void 0),
          a = (function (e) {
            var t,
              n,
              a,
              r = Pi(e, 200),
              i = Object(o.useMemo)(
                function () {
                  if (!r) return [void 0];
                  try {
                    return r ? [Object(Ui.namehash)(r)] : [void 0];
                  } catch (e) {
                    return [void 0];
                  }
                },
                [r]
              ),
              c = yt(hn(!1), "resolver", i),
              l = null === (t = c.result) || void 0 === t ? void 0 : t[0],
              u = yt(gn(l && !Bi(l) ? l : void 0, !1), "addr", i),
              s = r !== e;
            return {
              address: s
                ? null
                : null !==
                    (n =
                      null === (a = u.result) || void 0 === a
                        ? void 0
                        : a[0]) && void 0 !== n
                ? n
                : null,
              loading: s || c.loading || u.loading,
            };
          })(e);
        return {
          loading: n.loading || a.loading,
          address: t || a.address,
          name: n.ENSName ? n.ENSName : (!t && a.address && e) || null,
        };
      }
      var vb = n(177);
      function hb(e, t) {
        var n = Te().chainId,
          a = n ? ee[n] : [],
          r = n ? [ff(e, n), ff(t, n)] : [void 0, void 0],
          i = Object(O.a)(r, 2),
          c = i[0],
          l = i[1],
          u = Object(o.useMemo)(
            function () {
              return ht()(a, function (e) {
                return a.map(function (t) {
                  return [e, t];
                });
              }).filter(function (e) {
                var t = Object(O.a)(e, 2),
                  n = t[0],
                  a = t[1];
                return n.address !== a.address;
              });
            },
            [a]
          ),
          d = Df(
            Object(o.useMemo)(
              function () {
                return c && l
                  ? [[c, l]]
                      .concat(
                        Object(s.a)(
                          a.map(function (e) {
                            return [c, e];
                          })
                        ),
                        Object(s.a)(
                          a.map(function (e) {
                            return [l, e];
                          })
                        ),
                        Object(s.a)(u)
                      )
                      .filter(function (e) {
                        return Boolean(e[0] && e[1]);
                      })
                      .filter(function (e) {
                        var t = Object(O.a)(e, 2),
                          n = t[0],
                          a = t[1];
                        return n.address !== a.address;
                      })
                      .filter(function (e) {
                        var t = Object(O.a)(e, 2),
                          a = t[0],
                          r = t[1];
                        if (!n) return !0;
                        var o = te[n];
                        if (!o) return !0;
                        var i = o[a.address],
                          c = o[r.address];
                        return (
                          (!i && !c) ||
                          (!(
                            i &&
                            !i.find(function (e) {
                              return r.equals(e);
                            })
                          ) &&
                            !(
                              c &&
                              !c.find(function (e) {
                                return a.equals(e);
                              })
                            ))
                        );
                      })
                  : [];
              },
              [c, l, a, u, n]
            )
          );
        return Object(o.useMemo)(
          function () {
            return Object.values(
              d
                .filter(function (e) {
                  return Boolean(e[0] === Pf.EXISTS && e[1]);
                })
                .reduce(function (e, t) {
                  var n,
                    a = Object(O.a)(t, 2)[1];
                  return (
                    (e[a.liquidityToken.address] =
                      null !== (n = e[a.liquidityToken.address]) && void 0 !== n
                        ? n
                        : a),
                    e
                  );
                }, {})
            );
          },
          [d]
        );
      }
      function gb() {
        return Object(u.d)(function (e) {
          return e.swap;
        });
      }
      function Eb(e, t) {
        if (e && t)
          try {
            var n = Object(vb.parseUnits)(e, t.decimals).toString();
            if ("0" !== n)
              return t instanceof p.Token
                ? new p.TokenAmount(t, p.JSBI.BigInt(n))
                : p.CurrencyAmount.ether(p.JSBI.BigInt(n));
          } catch (a) {
            console.debug('Failed to parse input amount: "'.concat(e, '"'), a);
          }
      }
      var Ob = [
        "0x763076D2A5F698409d9344FcFB72cA0bd39b39d7",
        "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
        "0xCb8E5897d9adf66443690F5c0d506f60aE5A6cD9",
      ];
      function Ab(e, t) {
        return (
          e.route.path.some(function (e) {
            return e.address === t;
          }) ||
          e.route.pairs.some(function (e) {
            return e.liquidityToken.address === t;
          })
        );
      }
      function xb() {
        var e,
          t,
          n,
          a,
          r,
          i,
          c,
          l = Te().account,
          u = Hf(),
          s = gb(),
          d = s.independentField,
          f = s.typedValue,
          b = s[Gf.INPUT].currencyId,
          y = s[Gf.OUTPUT].currencyId,
          v = s.recipient,
          h = wn(b),
          g = wn(y),
          E = yb(null !== v && void 0 !== v ? v : void 0),
          A =
            null !== (e = null === v ? l : E.address) && void 0 !== e
              ? e
              : null,
          x = Sn(null !== l && void 0 !== l ? l : void 0, [
            null !== h && void 0 !== h ? h : void 0,
            null !== g && void 0 !== g ? g : void 0,
          ]),
          j = d === Gf.INPUT,
          w = Eb(f, null !== (t = j ? h : g) && void 0 !== t ? t : void 0),
          k = (function (e, t) {
            var n = hb(null === e || void 0 === e ? void 0 : e.currency, t);
            return Object(o.useMemo)(
              function () {
                var a;
                return e &&
                  t &&
                  n.length > 0 &&
                  null !==
                    (a = p.Trade.bestTradeExactIn(n, e, t, {
                      maxHops: 3,
                      maxNumResults: 1,
                    })[0]) &&
                  void 0 !== a
                  ? a
                  : null;
              },
              [n, e, t]
            );
          })(j ? w : void 0, null !== g && void 0 !== g ? g : void 0),
          T = (function (e, t) {
            var n = hb(e, null === t || void 0 === t ? void 0 : t.currency);
            return Object(o.useMemo)(
              function () {
                var a;
                return e &&
                  t &&
                  n.length > 0 &&
                  null !==
                    (a = p.Trade.bestTradeExactOut(n, e, t, {
                      maxHops: 3,
                      maxNumResults: 1,
                    })[0]) &&
                  void 0 !== a
                  ? a
                  : null;
              },
              [n, e, t]
            );
          })(null !== h && void 0 !== h ? h : void 0, j ? void 0 : w),
          C = j ? k : T,
          I =
            ((n = {}),
            Object(m.a)(n, Gf.INPUT, x[0]),
            Object(m.a)(n, Gf.OUTPUT, x[1]),
            n),
          S =
            ((a = {}),
            Object(m.a)(a, Gf.INPUT, null !== h && void 0 !== h ? h : void 0),
            Object(m.a)(a, Gf.OUTPUT, null !== g && void 0 !== g ? g : void 0),
            a),
          R = (function (e, t, n, a) {
            var r = Kf(t),
              o = Kf(n),
              i = t === p.ETHER,
              c = n === p.ETHER,
              l = [];
            i && o ? (l = [o]) : c && r ? (l = [r]) : r && o && (l = [r, o]);
            var u,
              s = t && l && l.length > 0 && new p.Route(l, t, n);
            try {
              u =
                s && a
                  ? new p.Trade(
                      s,
                      a,
                      e ? p.TradeType.EXACT_INPUT : p.TradeType.EXACT_OUTPUT
                    )
                  : void 0;
            } catch (d) {
              console.debug("Failed to create V1 trade", d);
            }
            return u;
          })(j, S[Gf.INPUT], S[Gf.OUTPUT], w);
        (l || (r = "Connect Wallet"), w) ||
          (r = null !== (i = r) && void 0 !== i ? i : "Enter an amount");
        (S[Gf.INPUT] && S[Gf.OUTPUT]) ||
          (r = null !== (c = r) && void 0 !== c ? c : "Select a token");
        var N,
          U,
          B = Vt(A);
        A && B
          ? (-1 !== Ob.indexOf(B) || (k && Ab(k, B)) || (T && Ab(T, B))) &&
            (r = null !== (N = r) && void 0 !== N ? N : "Invalid recipient")
          : (r = null !== (U = r) && void 0 !== U ? U : "Enter a recipient");
        var P = Bt(),
          M = Object(O.a)(P, 1)[0],
          D = C && M && db(C, M),
          z = R && M && db(R, M),
          W = [
            I[Gf.INPUT],
            u === Wf.v1 ? (z ? z[Gf.INPUT] : null) : D ? D[Gf.INPUT] : null,
          ],
          L = W[0],
          F = W[1];
        return (
          L &&
            F &&
            L.lessThan(F) &&
            (r = "Insufficient " + F.currency.symbol + " balance"),
          {
            currencies: S,
            currencyBalances: I,
            parsedAmount: w,
            v2Trade: null !== C && void 0 !== C ? C : void 0,
            inputError: r,
            v1Trade: R,
          }
        );
      }
      function jb(e) {
        if ("string" === typeof e) {
          var t = Vt(e);
          if (t) return t;
          if ("ETH" === e.toUpperCase()) return "ETH";
          if (!1 === t) return "ETH";
        }
        return null !== "ETH" ? "ETH" : "";
      }
      var wb =
          /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
        kb = /^0x[a-fA-F0-9]{40}$/;
      function Tb(e) {
        var t,
          n = jb(e.inputCurrency),
          a = jb(e.outputCurrency);
        n === a && ("string" === typeof e.outputCurrency ? (n = "") : (a = ""));
        var r,
          o = (function (e) {
            if ("string" !== typeof e) return null;
            var t = Vt(e);
            return t || (wb.test(e) || kb.test(e) ? e : null);
          })(e.recipient);
        return (
          (t = {}),
          Object(m.a)(t, Gf.INPUT, { currencyId: n }),
          Object(m.a)(t, Gf.OUTPUT, { currencyId: a }),
          Object(m.a)(
            t,
            "typedValue",
            "string" !== typeof (r = e.exactAmount) || isNaN(parseFloat(r))
              ? ""
              : r
          ),
          Object(m.a)(
            t,
            "independentField",
            (function (e) {
              return "string" === typeof e && "output" === e.toLowerCase()
                ? Gf.OUTPUT
                : Gf.INPUT;
            })(e.exactField)
          ),
          Object(m.a)(t, "recipient", o),
          t
        );
      }
      var Cb,
        Ib = p.JSBI.BigInt(0);
      function Sb() {
        return Object(u.d)(function (e) {
          return e.mint;
        });
      }
      function Rb(e) {
        if (e)
          return e.currency === p.ETHER
            ? p.JSBI.greaterThan(e.raw, pe)
              ? p.CurrencyAmount.ether(p.JSBI.subtract(e.raw, pe))
              : p.CurrencyAmount.ether(p.JSBI.BigInt(0))
            : e;
      }
      var Nb,
        Ub,
        Bb,
        Pb,
        Mb,
        Db = we.default.div(
          Cb ||
            (Cb = Object(Oe.a)([
              "\n  position: relative;\n  max-width: 420px;\n  width: 100%;\n  background: ",
              ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 30px;\n  padding: 1rem;\n",
            ])),
          function (e) {
            return e.theme.bg1;
          }
        );
      function zb(e) {
        var t = e.children;
        return i.a.createElement(Db, null, t);
      }
      var Wb = we.default.div(
          Nb || (Nb = Object(Oe.a)(["\n  position: relative;\n"]))
        ),
        Lb = Object(we.default)(ke.b)(
          Ub ||
            (Ub = Object(Oe.a)([
              "\n  :hover {\n    cursor: pointer;\n  }\n  color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.primary1;
          }
        ),
        Fb = we.default.button(
          Bb ||
            (Bb = Object(Oe.a)([
              "\n  padding: 0.5rem 1rem;\n  background-color: ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  ",
              ";\n  font-weight: 500;\n  cursor: pointer;\n  margin: 0.25rem;\n  overflow: hidden;\n  color: ",
              ";\n  :hover {\n    border: 1px solid ",
              ";\n  }\n  :focus {\n    border: 1px solid ",
              ";\n    outline: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.primary5;
          },
          function (e) {
            return e.theme.primary5;
          },
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              Pb || (Pb = Object(Oe.a)(["\n    padding: 0.25rem 0.5rem;\n  "]))
            );
          },
          function (e) {
            return e.theme.primaryText1;
          },
          function (e) {
            return e.theme.primary1;
          },
          function (e) {
            return e.theme.primary1;
          }
        ),
        qb = we.default.span(
          Mb ||
            (Mb = Object(Oe.a)([
              "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n",
            ]))
        );
      function Hb(e) {
        var t,
          n,
          a,
          r,
          o,
          c,
          l,
          u,
          s = e.noLiquidity,
          d = e.price,
          m = e.currencies,
          p = e.parsedAmounts,
          f = e.poolTokenPercentage,
          b = e.onAdd;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            kr,
            null,
            i.a.createElement(
              dr,
              null,
              null === (t = m[tb.CURRENCY_A]) || void 0 === t
                ? void 0
                : t.symbol,
              " Deposited"
            ),
            i.a.createElement(
              Ir,
              null,
              i.a.createElement(Kd, {
                currency: m[tb.CURRENCY_A],
                style: { marginRight: "8px" },
              }),
              i.a.createElement(
                dr,
                null,
                null === (n = p[tb.CURRENCY_A]) || void 0 === n
                  ? void 0
                  : n.toSignificant(6)
              )
            )
          ),
          i.a.createElement(
            kr,
            null,
            i.a.createElement(
              dr,
              null,
              null === (a = m[tb.CURRENCY_B]) || void 0 === a
                ? void 0
                : a.symbol,
              " Deposited"
            ),
            i.a.createElement(
              Ir,
              null,
              i.a.createElement(Kd, {
                currency: m[tb.CURRENCY_B],
                style: { marginRight: "8px" },
              }),
              i.a.createElement(
                dr,
                null,
                null === (r = p[tb.CURRENCY_B]) || void 0 === r
                  ? void 0
                  : r.toSignificant(6)
              )
            )
          ),
          i.a.createElement(
            kr,
            null,
            i.a.createElement(dr, null, "Rates"),
            i.a.createElement(
              dr,
              null,
              "1 "
                .concat(
                  null === (o = m[tb.CURRENCY_A]) || void 0 === o
                    ? void 0
                    : o.symbol,
                  " = "
                )
                .concat(
                  null === d || void 0 === d ? void 0 : d.toSignificant(4),
                  " "
                )
                .concat(
                  null === (c = m[tb.CURRENCY_B]) || void 0 === c
                    ? void 0
                    : c.symbol
                )
            )
          ),
          i.a.createElement(
            kr,
            { style: { justifyContent: "flex-end" } },
            i.a.createElement(
              dr,
              null,
              "1 "
                .concat(
                  null === (l = m[tb.CURRENCY_B]) || void 0 === l
                    ? void 0
                    : l.symbol,
                  " = "
                )
                .concat(
                  null === d || void 0 === d
                    ? void 0
                    : d.invert().toSignificant(4),
                  " "
                )
                .concat(
                  null === (u = m[tb.CURRENCY_A]) || void 0 === u
                    ? void 0
                    : u.symbol
                )
            )
          ),
          i.a.createElement(
            kr,
            null,
            i.a.createElement(dr, null, "Share of Pool:"),
            i.a.createElement(
              dr,
              null,
              s
                ? "100"
                : null === f || void 0 === f
                ? void 0
                : f.toSignificant(4),
              "%"
            )
          ),
          i.a.createElement(
            lo,
            { style: { margin: "20px 0 0 0" }, onClick: b },
            i.a.createElement(
              ke.b,
              { fontWeight: 500, fontSize: 20 },
              s ? "Create Pool & Supply" : "Confirm Supply"
            )
          )
        );
      }
      function Vb(e) {
        var t,
          n,
          a,
          r,
          c,
          l,
          u,
          s,
          d = e.currencies,
          m = e.noLiquidity,
          p = e.poolTokenPercentage,
          f = e.price,
          b = Object(o.useContext)(we.ThemeContext);
        return i.a.createElement(
          xr,
          { gap: "md" },
          i.a.createElement(
            Cr,
            { justify: "space-around", gap: "4px" },
            i.a.createElement(
              xr,
              { justify: "center" },
              i.a.createElement(
                sr,
                null,
                null !==
                  (t =
                    null === f || void 0 === f ? void 0 : f.toSignificant(6)) &&
                  void 0 !== t
                  ? t
                  : "-"
              ),
              i.a.createElement(
                ke.b,
                { fontWeight: 500, fontSize: 14, color: b.text2, pt: 1 },
                null === (n = d[tb.CURRENCY_B]) || void 0 === n
                  ? void 0
                  : n.symbol,
                " per ",
                null === (a = d[tb.CURRENCY_A]) || void 0 === a
                  ? void 0
                  : a.symbol
              )
            ),
            i.a.createElement(
              xr,
              { justify: "center" },
              i.a.createElement(
                sr,
                null,
                null !==
                  (r =
                    null === f ||
                    void 0 === f ||
                    null === (c = f.invert()) ||
                    void 0 === c
                      ? void 0
                      : c.toSignificant(6)) && void 0 !== r
                  ? r
                  : "-"
              ),
              i.a.createElement(
                ke.b,
                { fontWeight: 500, fontSize: 14, color: b.text2, pt: 1 },
                null === (l = d[tb.CURRENCY_A]) || void 0 === l
                  ? void 0
                  : l.symbol,
                " per ",
                null === (u = d[tb.CURRENCY_B]) || void 0 === u
                  ? void 0
                  : u.symbol
              )
            ),
            i.a.createElement(
              xr,
              { justify: "center" },
              i.a.createElement(
                sr,
                null,
                m && f
                  ? "100"
                  : null !==
                      (s = (
                        null === p || void 0 === p ? void 0 : p.lessThan(ie)
                      )
                        ? "<0.01"
                        : null === p || void 0 === p
                        ? void 0
                        : p.toFixed(2)) && void 0 !== s
                  ? s
                  : "0",
                "%"
              ),
              i.a.createElement(
                ke.b,
                { fontWeight: 500, fontSize: 14, color: b.text2, pt: 1 },
                "Share of Pool"
              )
            )
          )
        );
      }
      function Yb(e) {
        var t,
          n,
          a,
          r,
          c,
          l,
          f,
          b,
          y,
          v,
          h,
          g = e.match.params,
          x = g.currencyIdA,
          j = g.currencyIdB,
          w = e.history,
          k = Te(),
          T = k.account,
          C = k.chainId,
          I = k.library,
          S = Object(o.useContext)(we.ThemeContext),
          R = wn(x),
          N = wn(j),
          U = Boolean(
            C &&
              ((R && Object(p.currencyEquals)(R, p.WETH[C])) ||
                (N && Object(p.currencyEquals)(N, p.WETH[C])))
          ),
          B = Qe(),
          P = Nt(),
          M = Sb(),
          D = M.independentField,
          z = M.typedValue,
          W = M.otherTypedValue,
          L = (function (e, t) {
            var n,
              a,
              r,
              i,
              c,
              l,
              u,
              s = Te(),
              d = s.account,
              f = s.chainId,
              b = Sb(),
              y = b.independentField,
              v = b.typedValue,
              h = b.otherTypedValue,
              g = y === tb.CURRENCY_A ? tb.CURRENCY_B : tb.CURRENCY_A,
              E = Object(o.useMemo)(
                function () {
                  var n;
                  return (
                    (n = {}),
                    Object(m.a)(
                      n,
                      tb.CURRENCY_A,
                      null !== e && void 0 !== e ? e : void 0
                    ),
                    Object(m.a)(
                      n,
                      tb.CURRENCY_B,
                      null !== t && void 0 !== t ? t : void 0
                    ),
                    n
                  );
                },
                [e, t]
              ),
              A = zf(E[tb.CURRENCY_A], E[tb.CURRENCY_B]),
              x = Object(O.a)(A, 2),
              j = x[0],
              w = x[1],
              k = mf(null === w || void 0 === w ? void 0 : w.liquidityToken),
              T = j === Pf.NOT_EXISTS || Boolean(k && p.JSBI.equal(k.raw, Ib)),
              C = Sn(null !== d && void 0 !== d ? d : void 0, [
                E[tb.CURRENCY_A],
                E[tb.CURRENCY_B],
              ]),
              I =
                ((n = {}),
                Object(m.a)(n, tb.CURRENCY_A, C[0]),
                Object(m.a)(n, tb.CURRENCY_B, C[1]),
                n),
              S = Eb(v, E[y]),
              R = Object(o.useMemo)(
                function () {
                  if (T) return h && E[g] ? Eb(h, E[g]) : void 0;
                  if (S) {
                    var n = bf(S, f),
                      a = [ff(e, f), ff(t, f)],
                      r = a[0],
                      o = a[1];
                    if (r && o && n && w) {
                      var i = g === tb.CURRENCY_B ? t : e,
                        c =
                          g === tb.CURRENCY_B
                            ? w.priceOf(r).quote(n)
                            : w.priceOf(o).quote(n);
                      return i === p.ETHER ? p.CurrencyAmount.ether(c.raw) : c;
                    }
                  } else;
                },
                [T, h, E, g, S, e, f, t, w]
              ),
              N =
                ((a = {}),
                Object(m.a)(a, tb.CURRENCY_A, y === tb.CURRENCY_A ? S : R),
                Object(m.a)(a, tb.CURRENCY_B, y === tb.CURRENCY_A ? R : S),
                a),
              U = Object(o.useMemo)(
                function () {
                  if (T) {
                    var t = N[tb.CURRENCY_A],
                      n = N[tb.CURRENCY_B];
                    return t && n
                      ? new p.Price(t.currency, n.currency, t.raw, n.raw)
                      : void 0;
                  }
                  var a = ff(e, f);
                  return w && a ? w.priceOf(a) : void 0;
                },
                [f, e, T, w, N]
              ),
              B = Object(o.useMemo)(
                function () {
                  var e = N[tb.CURRENCY_A],
                    t = N[tb.CURRENCY_B],
                    n = [bf(e, f), bf(t, f)],
                    a = n[0],
                    r = n[1];
                  return w && k && a && r
                    ? w.getLiquidityMinted(k, a, r)
                    : void 0;
                },
                [N, f, w, k]
              ),
              P = Object(o.useMemo)(
                function () {
                  return B && k ? new p.Percent(B.raw, k.add(B).raw) : void 0;
                },
                [B, k]
              );
            d || (c = "Connect Wallet"),
              j === Pf.INVALID &&
                (c = null !== (l = c) && void 0 !== l ? l : "Invalid pair"),
              (N[tb.CURRENCY_A] && N[tb.CURRENCY_B]) ||
                (c = null !== (u = c) && void 0 !== u ? u : "Enter an amount");
            var M,
              D,
              z = N[tb.CURRENCY_A],
              W = N[tb.CURRENCY_B];
            return (
              z &&
                (null === I ||
                void 0 === I ||
                null === (r = I[tb.CURRENCY_A]) ||
                void 0 === r
                  ? void 0
                  : r.lessThan(z)) &&
                (c =
                  "Insufficient " +
                  (null === (M = E[tb.CURRENCY_A]) || void 0 === M
                    ? void 0
                    : M.symbol) +
                  " balance"),
              W &&
                (null === I ||
                void 0 === I ||
                null === (i = I[tb.CURRENCY_B]) ||
                void 0 === i
                  ? void 0
                  : i.lessThan(W)) &&
                (c =
                  "Insufficient " +
                  (null === (D = E[tb.CURRENCY_B]) || void 0 === D
                    ? void 0
                    : D.symbol) +
                  " balance"),
              {
                dependentField: g,
                currencies: E,
                pair: w,
                pairState: j,
                currencyBalances: I,
                parsedAmounts: N,
                price: U,
                noLiquidity: T,
                liquidityMinted: B,
                poolTokenPercentage: P,
                error: c,
              }
            );
          })(
            null !== R && void 0 !== R ? R : void 0,
            null !== N && void 0 !== N ? N : void 0
          ),
          F = L.dependentField,
          q = L.currencies,
          H = L.pair,
          V = L.pairState,
          Y = L.currencyBalances,
          K = L.parsedAmounts,
          J = L.price,
          Q = L.noLiquidity,
          G = L.liquidityMinted,
          Z = L.poolTokenPercentage,
          _ = L.error,
          $ = (function (e) {
            var t = Object(u.c)();
            return {
              onFieldAInput: Object(o.useCallback)(
                function (n) {
                  t(
                    fb({
                      field: tb.CURRENCY_A,
                      typedValue: n,
                      noLiquidity: !0 === e,
                    })
                  );
                },
                [t, e]
              ),
              onFieldBInput: Object(o.useCallback)(
                function (n) {
                  t(
                    fb({
                      field: tb.CURRENCY_B,
                      typedValue: n,
                      noLiquidity: !0 === e,
                    })
                  );
                },
                [t, e]
              ),
            };
          })(Q),
          ee = $.onFieldAInput,
          te = $.onFieldBInput,
          ne = !_,
          ae = Object(o.useState)(!1),
          re = Object(O.a)(ae, 2),
          oe = re[0],
          ie = re[1],
          ce = Object(o.useState)(!1),
          le = Object(O.a)(ce, 2),
          ue = le[0],
          se = le[1],
          de = Pt(),
          me = Object(O.a)(de, 1)[0],
          pe = Bt(),
          fe = Object(O.a)(pe, 1)[0],
          be = Object(o.useState)(""),
          ye = Object(O.a)(be, 2),
          ve = ye[0],
          he = ye[1],
          ge =
            ((a = {}),
            Object(m.a)(a, D, z),
            Object(m.a)(
              a,
              F,
              Q
                ? W
                : null !==
                    (t =
                      null === (n = K[F]) || void 0 === n
                        ? void 0
                        : n.toSignificant(6)) && void 0 !== t
                ? t
                : ""
            ),
            a),
          Ee = [tb.CURRENCY_A, tb.CURRENCY_B].reduce(function (e, t) {
            return Object(d.a)(
              Object(d.a)({}, e),
              {},
              Object(m.a)({}, t, Rb(Y[t]))
            );
          }, {}),
          Oe = [tb.CURRENCY_A, tb.CURRENCY_B].reduce(function (e, t) {
            var n, a;
            return Object(d.a)(
              Object(d.a)({}, e),
              {},
              Object(m.a)(
                {},
                t,
                null === (n = Ee[t]) || void 0 === n
                  ? void 0
                  : n.equalTo(null !== (a = K[t]) && void 0 !== a ? a : "0")
              )
            );
          }, {}),
          Ae = pb(K[tb.CURRENCY_A], X),
          xe = Object(O.a)(Ae, 2),
          je = xe[0],
          Ce = xe[1],
          Ie = pb(K[tb.CURRENCY_B], X),
          Se = Object(O.a)(Ie, 2),
          Re = Se[0],
          Ne = Se[1],
          Ue = qi();
        function Be() {
          return Pe.apply(this, arguments);
        }
        function Pe() {
          return (Pe = Object(A.a)(
            E.a.mark(function e() {
              var t, n, a, r, o, i, c, l, u, f, b, y, v, h, g, O;
              return E.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (C && I && T) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (
                        ((n = Zt(0, I, T)),
                        console.log("Router Address", n),
                        (a = K[tb.CURRENCY_A]),
                        (r = K[tb.CURRENCY_B]),
                        a && r && R && N)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      (t = {}),
                        Object(m.a)(t, tb.CURRENCY_A, Xt(a, Q ? 0 : fe)[0]),
                        Object(m.a)(t, tb.CURRENCY_B, Xt(r, Q ? 0 : fe)[0]),
                        (o = t),
                        (i = Math.ceil(Date.now() / 1e3) + me),
                        R === p.ETHER || N === p.ETHER
                          ? ((y = N === p.ETHER),
                            (c = n.addLiquidityETH),
                            (l = [
                              null !==
                                (f =
                                  null === (b = ff(y ? R : N, C)) ||
                                  void 0 === b
                                    ? void 0
                                    : b.address) && void 0 !== f
                                ? f
                                : "",
                              (y ? a : r).raw.toString(),
                              o[y ? tb.CURRENCY_A : tb.CURRENCY_B].toString(),
                              o[y ? tb.CURRENCY_B : tb.CURRENCY_A].toString(),
                              T,
                              i,
                            ]),
                            (u = qt.a.from((y ? r : a).raw.toString())))
                          : ((c = n.addLiquidity),
                            (l = [
                              null !==
                                (v =
                                  null === (h = ff(R, C)) || void 0 === h
                                    ? void 0
                                    : h.address) && void 0 !== v
                                ? v
                                : "",
                              null !==
                                (g =
                                  null === (O = ff(N, C)) || void 0 === O
                                    ? void 0
                                    : O.address) && void 0 !== g
                                ? g
                                : "",
                              a.raw.toString(),
                              r.raw.toString(),
                              o[tb.CURRENCY_A].toString(),
                              o[tb.CURRENCY_B].toString(),
                              T,
                              i,
                            ]),
                            (u = null)),
                        se(!0),
                        c
                          .apply(
                            void 0,
                            Object(s.a)(l).concat([
                              Object(d.a)(
                                Object(d.a)({}, u ? { value: u } : {}),
                                {},
                                { gasLimit: 1e6 }
                              ),
                            ])
                          )
                          .then(function (e) {
                            var t, n, a, r;
                            se(!1),
                              Ue(e, {
                                summary:
                                  "Add " +
                                  (null === (t = K[tb.CURRENCY_A]) ||
                                  void 0 === t
                                    ? void 0
                                    : t.toSignificant(3)) +
                                  " " +
                                  (null === (n = q[tb.CURRENCY_A]) ||
                                  void 0 === n
                                    ? void 0
                                    : n.symbol) +
                                  " and " +
                                  (null === (a = K[tb.CURRENCY_B]) ||
                                  void 0 === a
                                    ? void 0
                                    : a.toSignificant(3)) +
                                  " " +
                                  (null === (r = q[tb.CURRENCY_B]) ||
                                  void 0 === r
                                    ? void 0
                                    : r.symbol),
                              }),
                              he(e.hash);
                          })
                          .catch(function (e) {
                            se(!1),
                              4001 !==
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.code) && console.error(e);
                          });
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var Me = function () {
            var e, t, n, a;
            return Q
              ? i.a.createElement(
                  xr,
                  { gap: "20px" },
                  i.a.createElement(
                    Hn,
                    { mt: "20px", borderRadius: "20px" },
                    i.a.createElement(
                      Tr,
                      null,
                      i.a.createElement(
                        ke.b,
                        {
                          fontSize: "48px",
                          fontWeight: 500,
                          lineHeight: "42px",
                          marginRight: 10,
                        },
                        (null === (e = q[tb.CURRENCY_A]) || void 0 === e
                          ? void 0
                          : e.symbol) +
                          "/" +
                          (null === (t = q[tb.CURRENCY_B]) || void 0 === t
                            ? void 0
                            : t.symbol)
                      ),
                      i.a.createElement(vp, {
                        currency0: q[tb.CURRENCY_A],
                        currency1: q[tb.CURRENCY_B],
                        size: 30,
                      })
                    )
                  )
                )
              : i.a.createElement(
                  xr,
                  { gap: "20px" },
                  i.a.createElement(
                    Tr,
                    { style: { marginTop: "20px" } },
                    i.a.createElement(
                      ke.b,
                      {
                        fontSize: "48px",
                        fontWeight: 500,
                        lineHeight: "42px",
                        marginRight: 10,
                      },
                      null === G || void 0 === G ? void 0 : G.toSignificant(6)
                    ),
                    i.a.createElement(vp, {
                      currency0: q[tb.CURRENCY_A],
                      currency1: q[tb.CURRENCY_B],
                      size: 30,
                    })
                  ),
                  i.a.createElement(
                    Sr,
                    null,
                    i.a.createElement(
                      ke.b,
                      { fontSize: "24px" },
                      (null === (n = q[tb.CURRENCY_A]) || void 0 === n
                        ? void 0
                        : n.symbol) +
                        "/" +
                        (null === (a = q[tb.CURRENCY_B]) || void 0 === a
                          ? void 0
                          : a.symbol) +
                        " Pool Tokens"
                    )
                  ),
                  i.a.createElement(
                    vr,
                    { fontSize: 12, textAlign: "left", padding: "8px 0 0 0 " },
                    "Output is estimated. If the price changes by more than ".concat(
                      fe / 100,
                      "% your transaction will revert."
                    )
                  )
                );
          },
          De = function () {
            return i.a.createElement(Hb, {
              price: J,
              currencies: q,
              parsedAmounts: K,
              noLiquidity: Q,
              onAdd: Be,
              poolTokenPercentage: Z,
            });
          },
          ze = "Supplying "
            .concat(
              null === (r = K[tb.CURRENCY_A]) || void 0 === r
                ? void 0
                : r.toSignificant(6),
              " "
            )
            .concat(
              null === (c = q[tb.CURRENCY_A]) || void 0 === c
                ? void 0
                : c.symbol,
              " and "
            )
            .concat(
              null === (l = K[tb.CURRENCY_B]) || void 0 === l
                ? void 0
                : l.toSignificant(6),
              " "
            )
            .concat(
              null === (f = q[tb.CURRENCY_B]) || void 0 === f
                ? void 0
                : f.symbol
            ),
          We = Object(o.useCallback)(
            function (e) {
              var t = pf(e);
              t === j
                ? w.push("/add/".concat(j, "/").concat(x))
                : w.push("/add/".concat(t, "/").concat(j));
            },
            [j, w, x]
          ),
          Le = Object(o.useCallback)(
            function (e) {
              var t = pf(e);
              x === t
                ? j
                  ? w.push("/add/".concat(j, "/").concat(t))
                  : w.push("/add/".concat(t))
                : w.push("/add/".concat(x || "ETH", "/").concat(t));
            },
            [x, w, j]
          ),
          Fe = Object(o.useCallback)(
            function () {
              ie(!1), ve && ee(""), he("");
            },
            [ee, ve]
          );
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            zb,
            null,
            i.a.createElement(Zp, { adding: !0 }),
            i.a.createElement(
              Wb,
              null,
              i.a.createElement(Ed, {
                isOpen: oe,
                onDismiss: Fe,
                attemptingTxn: ue,
                hash: ve,
                content: function () {
                  return i.a.createElement(hd, {
                    title: Q ? "You are creating a pool" : "You will receive",
                    onDismiss: Fe,
                    topContent: Me,
                    bottomContent: De,
                  });
                },
                pendingText: ze,
              }),
              i.a.createElement(
                xr,
                { gap: "20px" },
                Q &&
                  i.a.createElement(
                    Ar,
                    null,
                    i.a.createElement(
                      Xn,
                      null,
                      i.a.createElement(
                        xr,
                        { gap: "10px" },
                        i.a.createElement(
                          ur,
                          { fontWeight: 600, color: "primaryText1" },
                          "You are the first liquidity provider."
                        ),
                        i.a.createElement(
                          ur,
                          { fontWeight: 400, color: "primaryText1" },
                          "The ratio of tokens you add will set the price of this pool."
                        ),
                        i.a.createElement(
                          ur,
                          { fontWeight: 400, color: "primaryText1" },
                          "Once you are happy with the rate click supply to review."
                        )
                      )
                    )
                  ),
                i.a.createElement(Vp, {
                  value: ge[tb.CURRENCY_A],
                  onUserInput: ee,
                  onMax: function () {
                    var e, t;
                    ee(
                      null !==
                        (e =
                          null === (t = Ee[tb.CURRENCY_A]) || void 0 === t
                            ? void 0
                            : t.toExact()) && void 0 !== e
                        ? e
                        : ""
                    );
                  },
                  onCurrencySelect: We,
                  showMaxButton: !Oe[tb.CURRENCY_A],
                  currency: q[tb.CURRENCY_A],
                  id: "add-liquidity-input-tokena",
                  showCommonBases: !0,
                }),
                i.a.createElement(
                  Ar,
                  null,
                  i.a.createElement(id.a, { size: "16", color: S.text2 })
                ),
                i.a.createElement(Vp, {
                  value: ge[tb.CURRENCY_B],
                  onUserInput: te,
                  onCurrencySelect: Le,
                  onMax: function () {
                    var e, t;
                    te(
                      null !==
                        (e =
                          null === (t = Ee[tb.CURRENCY_B]) || void 0 === t
                            ? void 0
                            : t.toExact()) && void 0 !== e
                        ? e
                        : ""
                    );
                  },
                  showMaxButton: !Oe[tb.CURRENCY_B],
                  currency: q[tb.CURRENCY_B],
                  id: "add-liquidity-input-tokenb",
                  showCommonBases: !0,
                }),
                q[tb.CURRENCY_A] &&
                  q[tb.CURRENCY_B] &&
                  V !== Pf.INVALID &&
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      Vn,
                      { padding: "0px", borderRadius: "20px" },
                      i.a.createElement(
                        kr,
                        { padding: "1rem" },
                        i.a.createElement(
                          fr,
                          { fontWeight: 500, fontSize: 14 },
                          Q ? "Initial prices" : "Prices",
                          " and pool share"
                        )
                      ),
                      " ",
                      i.a.createElement(
                        Hn,
                        { padding: "1rem", borderRadius: "20px" },
                        i.a.createElement(Vb, {
                          currencies: q,
                          poolTokenPercentage: Z,
                          noLiquidity: Q,
                          price: J,
                        })
                      )
                    )
                  ),
                T
                  ? i.a.createElement(
                      xr,
                      { gap: "md" },
                      (je === eb.NOT_APPROVED ||
                        je === eb.PENDING ||
                        Re === eb.NOT_APPROVED ||
                        Re === eb.PENDING) &&
                        ne &&
                        i.a.createElement(
                          kr,
                          null,
                          je !== eb.APPROVED &&
                            i.a.createElement(
                              lo,
                              {
                                onClick: Ce,
                                disabled: je === eb.PENDING,
                                width: Re !== eb.APPROVED ? "48%" : "100%",
                              },
                              je === eb.PENDING
                                ? i.a.createElement(
                                    qb,
                                    null,
                                    "Approving ",
                                    null === (b = q[tb.CURRENCY_A]) ||
                                      void 0 === b
                                      ? void 0
                                      : b.symbol
                                  )
                                : "Approve " +
                                    (null === (y = q[tb.CURRENCY_A]) ||
                                    void 0 === y
                                      ? void 0
                                      : y.symbol)
                            ),
                          Re !== eb.APPROVED &&
                            i.a.createElement(
                              lo,
                              {
                                onClick: Ne,
                                disabled: Re === eb.PENDING,
                                width: je !== eb.APPROVED ? "48%" : "100%",
                              },
                              Re === eb.PENDING
                                ? i.a.createElement(
                                    qb,
                                    null,
                                    "Approving ",
                                    null === (v = q[tb.CURRENCY_B]) ||
                                      void 0 === v
                                      ? void 0
                                      : v.symbol
                                  )
                                : "Approve " +
                                    (null === (h = q[tb.CURRENCY_B]) ||
                                    void 0 === h
                                      ? void 0
                                      : h.symbol)
                            )
                        ),
                      i.a.createElement(
                        go,
                        {
                          onClick: function () {
                            P ? Be() : ie(!0);
                          },
                          disabled:
                            !ne || je !== eb.APPROVED || Re !== eb.APPROVED,
                          error:
                            !ne && !!K[tb.CURRENCY_A] && !!K[tb.CURRENCY_B],
                        },
                        i.a.createElement(
                          ke.b,
                          { fontSize: 20, fontWeight: 500 },
                          null !== _ && void 0 !== _ ? _ : "Supply"
                        )
                      )
                    )
                  : i.a.createElement(uo, { onClick: B }, "Connect Wallet")
              )
            )
          ),
          H && !Q && V !== Pf.INVALID
            ? i.a.createElement(
                xr,
                { style: { minWidth: "20rem", marginTop: "1rem" } },
                i.a.createElement(Uf, { showUnwrapped: U, pair: H })
              )
            : null
        );
      }
      function Kb() {
        return i.a.createElement(xe.a, { to: "/add/" });
      }
      var Jb = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
      function Qb(e) {
        var t = e.match.params.currencyIdA.match(Jb);
        return (null === t || void 0 === t ? void 0 : t.length)
          ? i.a.createElement(xe.a, {
              to: "/add/".concat(t[1], "/").concat(t[2]),
            })
          : i.a.createElement(Yb, e);
      }
      function Xb(e) {
        var t = e.match.params,
          n = t.currencyIdA,
          a = t.currencyIdB;
        return n.toLowerCase() === a.toLowerCase()
          ? i.a.createElement(xe.a, { to: "/add/".concat(n) })
          : i.a.createElement(Yb, e);
      }
      function Gb(e) {
        var t = e.message;
        return i.a.createElement(
          xr,
          {
            style: {
              minHeight: 200,
              justifyContent: "center",
              alignItems: "center",
            },
          },
          i.a.createElement(dr, null, t)
        );
      }
      var Zb = Object(xe.h)(function (e) {
        var t = e.token,
          n = e.V1LiquidityBalance,
          a = Object(o.useContext)(we.ThemeContext),
          r = Te().chainId;
        return i.a.createElement(
          Nf,
          null,
          i.a.createElement(
            xr,
            { gap: "12px" },
            i.a.createElement(
              Rf,
              null,
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(vp, { currency0: t, margin: !0, size: 20 }),
                i.a.createElement(
                  ke.b,
                  { fontWeight: 500, fontSize: 20, style: { marginLeft: "" } },
                  "".concat(
                    r && t.equals(p.WETH[r]) ? "WETH" : t.symbol,
                    "/ETH"
                  )
                ),
                i.a.createElement(
                  ke.b,
                  {
                    fontSize: 12,
                    fontWeight: 500,
                    ml: "0.5rem",
                    px: "0.75rem",
                    py: "0.25rem",
                    style: { borderRadius: "1rem" },
                    backgroundColor: a.yellow1,
                    color: "black",
                  },
                  "V1"
                )
              )
            ),
            i.a.createElement(
              xr,
              { gap: "8px" },
              i.a.createElement(
                kr,
                { marginTop: "10px" },
                i.a.createElement(
                  so,
                  {
                    width: "68%",
                    as: Ae.b,
                    to: "/migrate/v1/".concat(n.token.address),
                  },
                  "Migrate"
                ),
                i.a.createElement(
                  so,
                  {
                    style: { backgroundColor: "transparent" },
                    width: "28%",
                    as: Ae.b,
                    to: "/remove/v1/".concat(n.token.address),
                  },
                  "Remove"
                )
              )
            )
          )
        );
      });
      function _b() {
        var e,
          t = Object(o.useContext)(we.ThemeContext),
          n = Te(),
          a = n.account,
          r = n.chainId,
          c = Object(o.useState)(""),
          l = Object(O.a)(c, 2),
          u = l[0],
          s = l[1],
          d = Object(o.useCallback)(
            function (e) {
              return s(e.target.value);
            },
            [s]
          ),
          m = jn(u),
          f = _t(Le(), null !== m && void 0 !== m ? m : void 0),
          b = On(),
          y = Mt();
        Object(o.useEffect)(
          function () {
            !m || f || b[m.address] || y(m);
          },
          [m, f, y, b]
        );
        var v = Jf(),
          h = Object(o.useMemo)(
            function () {
              return r
                ? Object.keys(v).map(function (e) {
                    return new p.Token(r, e, 18, "Bao-V1", "Baoswap V1");
                  })
                : [];
            },
            [r, v]
          ),
          g = Tn(null !== a && void 0 !== a ? a : void 0, h),
          E = Object(O.a)(g, 2),
          A = E[0],
          x = E[1],
          j = h
            .filter(function (e) {
              var t = null === A || void 0 === A ? void 0 : A[e.address];
              return t && p.JSBI.greaterThan(t.raw, p.JSBI.BigInt(0));
            })
            .map(function (e) {
              var t = A[e.address];
              return t
                ? i.a.createElement(Zb, {
                    key: e.address,
                    token: v[e.address],
                    V1LiquidityBalance: t,
                  })
                : null;
            }),
          w =
            0 ===
              (null === (e = Object.keys(v)) || void 0 === e
                ? void 0
                : e.length) || x;
        return i.a.createElement(
          Db,
          { style: { padding: 24 } },
          i.a.createElement(
            xr,
            { gap: "16px" },
            i.a.createElement(
              Cr,
              {
                style: {
                  alignItems: "center",
                  justifyContent: "space-between",
                },
                gap: "8px",
              },
              i.a.createElement(Fa, { to: "/pool" }),
              i.a.createElement(pr, null, "Migrate V1 Liquidity"),
              i.a.createElement(
                "div",
                null,
                i.a.createElement(va, {
                  text: "Migrate your liquidity tokens from Baoswap V1 to Baoswap V2.",
                })
              )
            ),
            i.a.createElement(
              dr,
              { style: { marginBottom: 8, fontWeight: 400 } },
              "For each pool shown below, click migrate to remove your liquidity from Baoswap V1 and deposit it into Baoswap V2."
            ),
            a
              ? w
                ? i.a.createElement(
                    Hn,
                    { padding: "40px" },
                    i.a.createElement(
                      dr,
                      { color: t.text3, textAlign: "center" },
                      i.a.createElement(jf, null, "Loading")
                    )
                  )
                : i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      Cr,
                      null,
                      i.a.createElement(um, {
                        value: u,
                        onChange: d,
                        placeholder: "Enter a token address to find liquidity",
                      })
                    ),
                    (null === j || void 0 === j ? void 0 : j.length) > 0
                      ? i.a.createElement(i.a.Fragment, null, j)
                      : i.a.createElement(Gb, {
                          message:
                            "No V1 Liquidity found. V1 was an internal alpha. It is unlikely you have V1 tokens.",
                        })
                  )
              : i.a.createElement(
                  Hn,
                  { padding: "40px" },
                  i.a.createElement(
                    dr,
                    { color: t.text3, textAlign: "center" },
                    "Connect to a wallet to view your V1 liquidity."
                  )
                )
          )
        );
      }
      var $b = new p.Fraction(p.JSBI.BigInt(1), p.JSBI.BigInt(1e6)),
        ey = p.JSBI.exponentiate(p.JSBI.BigInt(10), p.JSBI.BigInt(18)),
        ty = p.JSBI.BigInt(0),
        ny = p.JSBI.BigInt(1),
        ay = new p.Fraction(ty, ny),
        ry = new p.Percent(p.JSBI.BigInt(9950), p.JSBI.BigInt(1e4));
      function oy(e) {
        var t = e.currencyAmount;
        return i.a.createElement(
          i.a.Fragment,
          null,
          t.equalTo(p.JSBI.BigInt(0))
            ? "0"
            : t.greaterThan($b)
            ? t.toSignificant(4)
            : "<".concat($b.toSignificant(1))
        );
      }
      function iy(e) {
        var t = e.token,
          n = e.liquidityTokenAmount,
          a = e.tokenWorth,
          r = e.ethWorth,
          o = Te().chainId;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            Cr,
            { style: { justifyContent: "flex-start", width: "fit-content" } },
            i.a.createElement(Kd, { size: "24px", currency: t }),
            i.a.createElement(
              "div",
              { style: { marginLeft: ".75rem" } },
              i.a.createElement(
                pr,
                null,
                i.a.createElement(oy, { currencyAmount: n }),
                " ",
                o && t.equals(p.WETH[o]) ? "WETH" : t.symbol,
                "/ETH"
              )
            )
          ),
          i.a.createElement(
            kr,
            { my: "1rem" },
            i.a.createElement(
              ke.b,
              { fontSize: 16, fontWeight: 500 },
              "Pooled ",
              o && t.equals(p.WETH[o]) ? "WETH" : t.symbol,
              ":"
            ),
            i.a.createElement(
              Ir,
              null,
              i.a.createElement(
                ke.b,
                { fontSize: 16, fontWeight: 500, marginLeft: "6px" },
                a.toSignificant(4)
              ),
              i.a.createElement(Kd, {
                size: "20px",
                style: { marginLeft: "8px" },
                currency: t,
              })
            )
          ),
          i.a.createElement(
            kr,
            { mb: "1rem" },
            i.a.createElement(
              ke.b,
              { fontSize: 16, fontWeight: 500 },
              "Pooled ETH:"
            ),
            i.a.createElement(
              Ir,
              null,
              i.a.createElement(
                ke.b,
                { fontSize: 16, fontWeight: 500, marginLeft: "6px" },
                i.a.createElement(oy, { currencyAmount: r })
              ),
              i.a.createElement(Kd, {
                size: "20px",
                style: { marginLeft: "8px" },
                currency: p.Currency.ETHER,
              })
            )
          )
        );
      }
      function cy(e) {
        var t,
          n,
          a,
          r,
          c = e.liquidityTokenAmount,
          l = e.token,
          u = Te(),
          s = u.account,
          d = u.chainId,
          m = mf(c.token),
          f =
            null === (t = kn([c.token.address])) || void 0 === t
              ? void 0
              : t[c.token.address],
          b = In(c.token.address, l),
          y = zf(d ? p.WETH[d] : void 0, l),
          v = Object(O.a)(y, 2),
          h = v[0],
          g = v[1],
          E = h === Pf.NOT_EXISTS,
          A = d && g ? g.reserveOf(l).divide(g.reserveOf(p.WETH[d])) : void 0,
          x = Object(o.useState)(!1),
          j = Object(O.a)(x, 2),
          w = j[0],
          k = j[1],
          T = Object(o.useState)(null),
          C = Object(O.a)(T, 2),
          I = C[0],
          S = C[1],
          R = m ? new p.Percent(c.raw, m.raw) : ay,
          N = f
            ? p.CurrencyAmount.ether(f.multiply(R).multiply(ey).quotient)
            : p.CurrencyAmount.ether(ty),
          U = b
            ? new p.TokenAmount(l, R.multiply(b.raw).quotient)
            : new p.TokenAmount(l, ty),
          B = pb(c, on),
          P = Object(O.a)(B, 2),
          M = P[0],
          D = P[1],
          z = b && f ? b.divide(new p.Fraction(f.raw, ey)) : null,
          W = z && A ? z.divide(A).multiply("100").subtract("100") : void 0,
          L = (null === W || void 0 === W ? void 0 : W.lessThan(ty))
            ? null === W || void 0 === W
              ? void 0
              : W.multiply("-1")
            : W,
          F =
            A && U
              ? U.divide(A).multiply(ey).multiply(ry).quotient
              : null === N || void 0 === N
              ? void 0
              : N.numerator,
          q =
            A && N
              ? N.multiply(A)
                  .multiply(
                    p.JSBI.exponentiate(
                      p.JSBI.BigInt(10),
                      p.JSBI.BigInt(l.decimals)
                    )
                  )
                  .multiply(ry).quotient
              : null === U || void 0 === U
              ? void 0
              : U.numerator,
          H = qi(),
          V = Vi(null !== I && void 0 !== I ? I : void 0),
          Y = fn(on, rn, !0),
          K = Object(o.useCallback)(
            function () {
              q &&
                F &&
                Y &&
                (k(!0),
                Y.migrate(
                  l.address,
                  q.toString(),
                  F.toString(),
                  s,
                  Math.floor(new Date().getTime() / 1e3) + 1200
                )
                  .then(function (e) {
                    H(e, {
                      summary: "Migrate ".concat(l.symbol, " liquidity to V2"),
                    }),
                      S(e.hash);
                  })
                  .catch(function () {
                    k(!1);
                  }));
            },
            [q, F, Y, l, s, H]
          ),
          J = !!c && c.equalTo(ty),
          Q = !!L && !L.lessThan(p.JSBI.BigInt(5)),
          X = !!I && J;
        return i.a.createElement(
          xr,
          { gap: "20px" },
          i.a.createElement(
            dr,
            { my: 9, style: { fontWeight: 400 } },
            "This tool will safely migrate your V1 liquidity to V2 with minimal price risk. The process is completely trustless thanks to the",
            " ",
            d &&
              i.a.createElement(
                Ra,
                { href: Kt(d, on, "address") },
                i.a.createElement(
                  br,
                  { display: "inline" },
                  "BaoSwap migration contract\u2197"
                )
              ),
            "."
          ),
          !E && Q
            ? i.a.createElement(
                Kn,
                null,
                i.a.createElement(
                  dr,
                  { style: { marginBottom: 8, fontWeight: 400 } },
                  "It",
                  "'",
                  "s best to deposit liquidity into BaoSwap V2 at a price you believe is correct. If the V2 price seems incorrect, you can either make a swap to move the price or wait for someone else to do so."
                ),
                i.a.createElement(
                  xr,
                  { gap: "8px" },
                  i.a.createElement(
                    kr,
                    null,
                    i.a.createElement(dr, null, "V1 Price:"),
                    i.a.createElement(
                      sr,
                      null,
                      null === z || void 0 === z ? void 0 : z.toSignificant(6),
                      " ",
                      l.symbol,
                      "/ETH"
                    )
                  ),
                  i.a.createElement(
                    kr,
                    null,
                    i.a.createElement("div", null),
                    i.a.createElement(
                      sr,
                      null,
                      null === z ||
                        void 0 === z ||
                        null === (n = z.invert()) ||
                        void 0 === n
                        ? void 0
                        : n.toSignificant(6),
                      " ETH/",
                      l.symbol
                    )
                  ),
                  i.a.createElement(
                    kr,
                    null,
                    i.a.createElement(dr, null, "V2 Price:"),
                    i.a.createElement(
                      sr,
                      null,
                      null === A || void 0 === A ? void 0 : A.toSignificant(6),
                      " ",
                      l.symbol,
                      "/ETH"
                    )
                  ),
                  i.a.createElement(
                    kr,
                    null,
                    i.a.createElement("div", null),
                    i.a.createElement(
                      sr,
                      null,
                      null === A ||
                        void 0 === A ||
                        null === (a = A.invert()) ||
                        void 0 === a
                        ? void 0
                        : a.toSignificant(6),
                      " ETH/",
                      l.symbol
                    )
                  ),
                  i.a.createElement(
                    kr,
                    null,
                    i.a.createElement(
                      dr,
                      { color: "inherit" },
                      "Price Difference:"
                    ),
                    i.a.createElement(
                      sr,
                      { color: "inherit" },
                      null === L || void 0 === L ? void 0 : L.toSignificant(4),
                      "%"
                    )
                  )
                )
              )
            : null,
          E &&
            i.a.createElement(
              Jn,
              null,
              i.a.createElement(
                dr,
                { style: { marginBottom: 8, fontWeight: 400 } },
                "You are the first liquidity provider for this pair on BaoSwap V2. Your liquidity will be migrated at the current V1 price. Your transaction cost also includes the gas to create the pool."
              ),
              i.a.createElement(
                xr,
                { gap: "8px" },
                i.a.createElement(
                  kr,
                  null,
                  i.a.createElement(dr, null, "V1 Price:"),
                  i.a.createElement(
                    sr,
                    null,
                    null === z || void 0 === z ? void 0 : z.toSignificant(6),
                    " ",
                    l.symbol,
                    "/ETH"
                  )
                ),
                i.a.createElement(
                  kr,
                  null,
                  i.a.createElement("div", null),
                  i.a.createElement(
                    sr,
                    null,
                    null === z ||
                      void 0 === z ||
                      null === (r = z.invert()) ||
                      void 0 === r
                      ? void 0
                      : r.toSignificant(6),
                    " ETH/",
                    l.symbol
                  )
                )
              )
            ),
          i.a.createElement(
            Hn,
            null,
            i.a.createElement(iy, {
              token: l,
              liquidityTokenAmount: c,
              tokenWorth: U,
              ethWorth: N,
            }),
            i.a.createElement(
              "div",
              { style: { display: "flex", marginTop: "1rem" } },
              i.a.createElement(
                xr,
                { gap: "12px", style: { flex: "1", marginRight: 12 } },
                i.a.createElement(
                  ho,
                  {
                    confirmed: M === eb.APPROVED,
                    disabled: M !== eb.NOT_APPROVED,
                    onClick: D,
                  },
                  M === eb.PENDING
                    ? i.a.createElement(jf, null, "Approving")
                    : M === eb.APPROVED
                    ? "Approved"
                    : "Approve"
                )
              ),
              i.a.createElement(
                xr,
                { gap: "12px", style: { flex: "1" } },
                i.a.createElement(
                  ho,
                  {
                    confirmed: X,
                    disabled: X || J || V || M !== eb.APPROVED || w,
                    onClick: K,
                  },
                  X
                    ? "Success"
                    : V
                    ? i.a.createElement(jf, null, "Migrating")
                    : "Migrate"
                )
              )
            )
          ),
          i.a.createElement(
            yr,
            { style: { textAlign: "center" } },
            "Your BaoSwap V1 "
              .concat(l.symbol, "/ETH liquidity will become BaoSwap V2 ")
              .concat(l.symbol, "/ETH liquidity.")
          )
        );
      }
      function ly(e) {
        var t,
          n,
          a = e.history,
          r = e.match.params.address,
          c = Vt(r),
          l = Te(),
          u = l.chainId,
          s = l.account,
          d =
            null === (t = yt(yn(c || void 0), "tokenAddress", void 0, ut)) ||
            void 0 === t ||
            null === (n = t.result) ||
            void 0 === n
              ? void 0
              : n[0],
          m = jn(d),
          f = In(
            null !== s && void 0 !== s ? s : void 0,
            Object(o.useMemo)(
              function () {
                return c && u && m
                  ? new p.Token(
                      u,
                      c,
                      18,
                      "BAO-V1-".concat(m.symbol),
                      "BaoSwap V1"
                    )
                  : void 0;
              },
              [u, c, m]
            )
          );
        return c && d !== Ft.a
          ? i.a.createElement(
              Db,
              { style: { padding: 24 } },
              i.a.createElement(
                xr,
                { gap: "16px" },
                i.a.createElement(
                  Cr,
                  {
                    style: {
                      alignItems: "center",
                      justifyContent: "space-between",
                    },
                    gap: "8px",
                  },
                  i.a.createElement(Fa, { to: "/migrate/v1" }),
                  i.a.createElement(pr, null, "Migrate V1 Liquidity"),
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(va, {
                      text: "Migrate your liquidity tokens from BaoSwap V1 to BaoSwap V2.",
                    })
                  )
                ),
                s
                  ? c &&
                    u &&
                    (null === m || void 0 === m ? void 0 : m.equals(p.WETH[u]))
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          dr,
                          { my: 9, style: { fontWeight: 400 } },
                          "Because BaoSwap V2 uses WETH under the hood, your BaoSwap V1 WETH/ETH liquidity cannot be migrated. You may want to remove your liquidity instead."
                        ),
                        i.a.createElement(
                          ho,
                          {
                            onClick: function () {
                              a.push("/remove/v1/".concat(c));
                            },
                          },
                          "Remove"
                        )
                      )
                    : f && m
                    ? i.a.createElement(cy, {
                        liquidityTokenAmount: f,
                        token: m,
                      })
                    : i.a.createElement(Gb, { message: "Loading..." })
                  : i.a.createElement(mr, null, "You must connect an account.")
              )
            )
          : (console.error("Invalid address in path", r),
            i.a.createElement(xe.a, { to: "/migrate/v1" }));
      }
      var uy,
        sy = p.JSBI.exponentiate(p.JSBI.BigInt(10), p.JSBI.BigInt(18)),
        dy = p.JSBI.BigInt(0),
        my = p.JSBI.BigInt(1),
        py = new p.Fraction(dy, my);
      function fy(e) {
        var t,
          n = e.exchangeContract,
          a = e.liquidityTokenAmount,
          r = e.token,
          c = Te().chainId,
          l = mf(a.token),
          u =
            null === (t = kn([a.token.address])) || void 0 === t
              ? void 0
              : t[a.token.address],
          s = In(a.token.address, r),
          d = Object(o.useState)(!1),
          m = Object(O.a)(d, 2),
          f = m[0],
          b = m[1],
          y = Object(o.useState)(null),
          v = Object(O.a)(y, 2),
          h = v[0],
          g = v[1],
          E = l ? new p.Percent(a.raw, l.raw) : py,
          A = u
            ? p.CurrencyAmount.ether(u.multiply(E).multiply(sy).quotient)
            : p.CurrencyAmount.ether(dy),
          x = s
            ? new p.TokenAmount(r, E.multiply(s.raw).quotient)
            : new p.TokenAmount(r, dy),
          j = qi(),
          w = Vi(null !== h && void 0 !== h ? h : void 0),
          k = Object(o.useCallback)(
            function () {
              a &&
                (b(!0),
                n
                  .removeLiquidity(
                    a.raw.toString(),
                    1,
                    1,
                    Math.floor(new Date().getTime() / 1e3) + 1200
                  )
                  .then(function (e) {
                    j(e, {
                      summary: "Remove ".concat(
                        c && r.equals(p.WETH[c]) ? "WETH" : r.symbol,
                        "/ETH V1 liquidity"
                      ),
                    }),
                      g(e.hash);
                  })
                  .catch(function (e) {
                    console.error(e), b(!1);
                  }));
            },
            [n, a, r, c, j]
          ),
          T = !!a && a.equalTo(dy),
          C = !!h && T;
        return i.a.createElement(
          xr,
          { gap: "20px" },
          i.a.createElement(
            dr,
            { my: 9, style: { fontWeight: 400 } },
            "This tool will remove your V1 liquidity and send the underlying assets to your wallet."
          ),
          i.a.createElement(
            Hn,
            null,
            i.a.createElement(iy, {
              token: r,
              liquidityTokenAmount: a,
              tokenWorth: x,
              ethWorth: A,
            }),
            i.a.createElement(
              "div",
              { style: { display: "flex", marginTop: "1rem" } },
              i.a.createElement(
                ho,
                { confirmed: C, disabled: C || T || w || f, onClick: k },
                C
                  ? "Success"
                  : w
                  ? i.a.createElement(jf, null, "Removing")
                  : "Remove"
              )
            )
          ),
          i.a.createElement(
            yr,
            { style: { textAlign: "center" } },
            "Your Baoswap V1 ".concat(
              c && r.equals(p.WETH[c]) ? "WETH" : r.symbol,
              "/ETH liquidity will be redeemed for underlying assets."
            )
          )
        );
      }
      function by(e) {
        var t,
          n,
          a = e.match.params.address,
          r = Vt(a),
          c = Te(),
          l = c.chainId,
          u = c.account,
          s = yn(r || void 0, !0),
          d =
            null === (t = yt(s, "tokenAddress", void 0, ut)) ||
            void 0 === t ||
            null === (n = t.result) ||
            void 0 === n
              ? void 0
              : n[0],
          m = jn(d),
          f = In(
            null !== u && void 0 !== u ? u : void 0,
            Object(o.useMemo)(
              function () {
                return r && l && m
                  ? new p.Token(
                      l,
                      r,
                      18,
                      "UNI-V1-".concat(m.symbol),
                      "Baoswap V1"
                    )
                  : void 0;
              },
              [l, r, m]
            )
          );
        return r && d !== Ft.a
          ? i.a.createElement(
              Db,
              { style: { padding: 24 }, id: "remove-v1-exchange" },
              i.a.createElement(
                xr,
                { gap: "16px" },
                i.a.createElement(
                  Cr,
                  {
                    style: {
                      alignItems: "center",
                      justifyContent: "space-between",
                    },
                    gap: "8px",
                  },
                  i.a.createElement(Fa, { to: "/migrate/v1" }),
                  i.a.createElement(pr, null, "Remove V1 Liquidity"),
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(va, {
                      text: "Remove your Baoswap V1 liquidity tokens.",
                    })
                  )
                ),
                u
                  ? f && m && s
                    ? i.a.createElement(fy, {
                        exchangeContract: s,
                        liquidityTokenAmount: f,
                        token: m,
                      })
                    : i.a.createElement(Gb, { message: "Loading..." })
                  : i.a.createElement(mr, null, "You must connect an account.")
              )
            )
          : (console.error("Invalid address in path", a),
            i.a.createElement(xe.a, { to: "/migrate/v1" }));
      }
      function yy() {
        var e = Object(o.useContext)(we.ThemeContext),
          t = Te().account,
          n = (function () {
            var e = Te().chainId,
              t = On(),
              n = Object(o.useMemo)(
                function () {
                  var t;
                  return e && null !== (t = re[e]) && void 0 !== t ? t : [];
                },
                [e]
              ),
              a = Object(o.useMemo)(
                function () {
                  return e
                    ? ht()(Object.keys(t), function (n) {
                        var a,
                          r = t[n];
                        return (null !== (a = ae[e]) && void 0 !== a ? a : [])
                          .map(function (e) {
                            return e.address === r.address ? null : [e, r];
                          })
                          .filter(function (e) {
                            return null !== e;
                          });
                      })
                    : [];
                },
                [t, e]
              ),
              r = Object(u.d)(function (e) {
                return e.user.pairs;
              }),
              i = Object(o.useMemo)(
                function () {
                  if (!e || !r) return [];
                  var t = r[e];
                  return t
                    ? Object.keys(t).map(function (e) {
                        return [It(t[e].token0), It(t[e].token1)];
                      })
                    : [];
                },
                [r, e]
              ),
              c = Object(o.useMemo)(
                function () {
                  return i.concat(a).concat(n);
                },
                [a, n, i]
              );
            return Object(o.useMemo)(
              function () {
                var e = c.reduce(function (e, t) {
                  var n = Object(O.a)(t, 2),
                    a = n[0],
                    r = n[1],
                    o = a.sortsBefore(r),
                    i = o
                      ? "".concat(a.address, ":").concat(r.address)
                      : "".concat(r.address, ":").concat(a.address);
                  return e[i] || (e[i] = o ? [a, r] : [r, a]), e;
                }, {});
                return Object.keys(e).map(function (t) {
                  return e[t];
                });
              },
              [c]
            );
          })(),
          a = Object(o.useMemo)(
            function () {
              return n.map(function (e) {
                return { liquidityToken: zt(e), tokens: e };
              });
            },
            [n]
          ),
          r = Tn(
            null !== t && void 0 !== t ? t : void 0,
            Object(o.useMemo)(
              function () {
                return a.map(function (e) {
                  return e.liquidityToken;
                });
              },
              [a]
            )
          ),
          c = Object(O.a)(r, 2),
          l = c[0],
          s = c[1],
          d = Object(o.useMemo)(
            function () {
              return a.filter(function (e) {
                var t,
                  n = e.liquidityToken;
                return null === (t = l[n.address]) || void 0 === t
                  ? void 0
                  : t.greaterThan("0");
              });
            },
            [a, l]
          ),
          m = Df(
            d.map(function (e) {
              return e.tokens;
            })
          ),
          f =
            s ||
            (null === m || void 0 === m ? void 0 : m.length) < d.length ||
            (null === m || void 0 === m
              ? void 0
              : m.some(function (e) {
                  return !e;
                })),
          b = m
            .map(function (e) {
              return Object(O.a)(e, 2)[1];
            })
            .filter(function (e) {
              return Boolean(e);
            }),
          y = (function () {
            var e = Te(),
              t = e.account,
              n = e.chainId,
              a = Jf(),
              r = Cn(
                null !== t && void 0 !== t ? t : void 0,
                Object(o.useMemo)(
                  function () {
                    return n
                      ? Object.keys(a).map(function (e) {
                          return new p.Token(
                            n,
                            e,
                            18,
                            "UNI-V1",
                            "Honeyswap V1"
                          );
                        })
                      : [];
                  },
                  [n, a]
                )
              );
            return Object(o.useMemo)(
              function () {
                return Object.keys(r).some(function (e) {
                  var t,
                    n = null === (t = r[e]) || void 0 === t ? void 0 : t.raw;
                  return n && p.JSBI.greaterThan(n, p.JSBI.BigInt(0));
                });
              },
              [r]
            );
          })();
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            zb,
            null,
            i.a.createElement(Xp, { active: "pool" }),
            i.a.createElement(
              xr,
              { gap: "lg", justify: "center" },
              i.a.createElement(
                lo,
                {
                  id: "join-pool-button",
                  as: Ae.b,
                  style: { padding: 16 },
                  to: "/add/ETH",
                },
                i.a.createElement(
                  ke.b,
                  { fontWeight: 500, fontSize: 20 },
                  "Add Liquidity"
                )
              ),
              i.a.createElement(
                xr,
                { gap: "12px", style: { width: "100%" } },
                i.a.createElement(
                  kr,
                  { padding: "0 8px" },
                  i.a.createElement(
                    ke.b,
                    { color: e.text1, fontWeight: 500 },
                    "Your Liquidity"
                  ),
                  i.a.createElement(va, {
                    text: "When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below.",
                  })
                ),
                t
                  ? f
                    ? i.a.createElement(
                        Hn,
                        { padding: "40px" },
                        i.a.createElement(
                          dr,
                          { color: e.text3, textAlign: "center" },
                          i.a.createElement(jf, null, "Loading")
                        )
                      )
                    : (null === b || void 0 === b ? void 0 : b.length) > 0
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        b.map(function (e) {
                          return i.a.createElement(Bf, {
                            key: e.liquidityToken.address,
                            pair: e,
                          });
                        })
                      )
                    : i.a.createElement(
                        Hn,
                        { padding: "40px" },
                        i.a.createElement(
                          dr,
                          { color: e.text3, textAlign: "center" },
                          "No liquidity found."
                        )
                      )
                  : i.a.createElement(
                      Hn,
                      { padding: "40px" },
                      i.a.createElement(
                        dr,
                        { color: e.text3, textAlign: "center" },
                        "Connect to a wallet to view your liquidity."
                      )
                    ),
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(
                    ke.b,
                    {
                      textAlign: "center",
                      fontSize: 14,
                      style: { padding: ".5rem 0 .5rem 0" },
                    },
                    y
                      ? "Baoswap V1 liquidity found!"
                      : "Don't see a pool you joined?",
                    " ",
                    i.a.createElement(
                      Ia,
                      {
                        id: "import-pool-link",
                        to: y ? "/migrate/v1" : "/find",
                      },
                      y ? "Migrate now." : "Import it."
                    )
                  )
                )
              )
            )
          ),
          i.a.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                marginTop: "1.5rem",
              },
            },
            i.a.createElement(
              so,
              { as: Ae.b, style: { width: "initial" }, to: "/migrate/v1" },
              "Migrate V1 Liquidity"
            )
          )
        );
      }
      function vy() {
        var e,
          t = Te().account,
          n = Object(o.useState)(!1),
          a = Object(O.a)(n, 2),
          r = a[0],
          c = a[1],
          l = Object(o.useState)(uy.TOKEN1),
          s = Object(O.a)(l, 2),
          d = s[0],
          m = s[1],
          f = Object(o.useState)(p.ETHER),
          b = Object(O.a)(f, 2),
          y = b[0],
          v = b[1],
          h = Object(o.useState)(null),
          g = Object(O.a)(h, 2),
          E = g[0],
          A = g[1],
          x = zf(
            null !== y && void 0 !== y ? y : void 0,
            null !== E && void 0 !== E ? E : void 0
          ),
          j = Object(O.a)(x, 2),
          w = j[0],
          k = j[1],
          T = (function () {
            var e = Object(u.c)();
            return Object(o.useCallback)(
              function (t) {
                e(kt({ serializedPair: Dt(t) }));
              },
              [e]
            );
          })();
        Object(o.useEffect)(
          function () {
            k && T(k);
          },
          [k, T]
        );
        var C =
            w === Pf.NOT_EXISTS ||
            Boolean(
              w === Pf.EXISTS &&
                k &&
                p.JSBI.equal(k.reserve0.raw, p.JSBI.BigInt(0)) &&
                p.JSBI.equal(k.reserve1.raw, p.JSBI.BigInt(0))
            ),
          I = In(
            null !== t && void 0 !== t ? t : void 0,
            null === k || void 0 === k ? void 0 : k.liquidityToken
          ),
          S = Boolean(I && p.JSBI.greaterThan(I.raw, p.JSBI.BigInt(0))),
          R = Object(o.useCallback)(
            function (e) {
              d === uy.TOKEN0 ? v(e) : A(e);
            },
            [d]
          ),
          N = Object(o.useCallback)(
            function () {
              c(!1);
            },
            [c]
          ),
          U = i.a.createElement(
            Hn,
            { padding: "45px 10px" },
            i.a.createElement(
              ke.b,
              { textAlign: "center" },
              t
                ? "Select a token to find your liquidity."
                : "Connect to a wallet to find pools"
            )
          );
        return i.a.createElement(
          zb,
          null,
          i.a.createElement(Gp, null),
          i.a.createElement(
            xr,
            { gap: "md" },
            i.a.createElement(
              Eo,
              {
                onClick: function () {
                  c(!0), m(uy.TOKEN0);
                },
              },
              y
                ? i.a.createElement(
                    Sr,
                    null,
                    i.a.createElement(Kd, { currency: y }),
                    i.a.createElement(
                      ke.b,
                      { fontWeight: 500, fontSize: 20, marginLeft: "12px" },
                      y.symbol
                    )
                  )
                : i.a.createElement(
                    ke.b,
                    { fontWeight: 500, fontSize: 20, marginLeft: "12px" },
                    "Select a Token"
                  )
            ),
            i.a.createElement(
              Ar,
              null,
              i.a.createElement(id.a, { size: "16", color: "#888D9B" })
            ),
            i.a.createElement(
              Eo,
              {
                onClick: function () {
                  c(!0), m(uy.TOKEN1);
                },
              },
              E
                ? i.a.createElement(
                    Sr,
                    null,
                    i.a.createElement(Kd, { currency: E }),
                    i.a.createElement(
                      ke.b,
                      { fontWeight: 500, fontSize: 20, marginLeft: "12px" },
                      E.symbol
                    )
                  )
                : i.a.createElement(
                    ke.b,
                    { fontWeight: 500, fontSize: 20, marginLeft: "12px" },
                    "Select a Token"
                  )
            ),
            S &&
              i.a.createElement(
                Ar,
                {
                  style: {
                    justifyItems: "center",
                    backgroundColor: "",
                    padding: "12px 0px",
                    borderRadius: "12px",
                  },
                },
                i.a.createElement(
                  ke.b,
                  { textAlign: "center", fontWeight: 500 },
                  "Pool Found!"
                )
              ),
            y && E
              ? w === Pf.EXISTS
                ? S && k
                  ? i.a.createElement(Uf, {
                      pair: k,
                      border: "1px solid #CED0D9",
                    })
                  : i.a.createElement(
                      Hn,
                      { padding: "45px 10px" },
                      i.a.createElement(
                        xr,
                        { gap: "sm", justify: "center" },
                        i.a.createElement(
                          ke.b,
                          { textAlign: "center" },
                          "You don\u2019t have liquidity in this pool yet."
                        ),
                        i.a.createElement(
                          Ia,
                          { to: "/add/".concat(pf(y), "/").concat(pf(E)) },
                          i.a.createElement(
                            ke.b,
                            { textAlign: "center" },
                            "Add liquidity."
                          )
                        )
                      )
                    )
                : C
                ? i.a.createElement(
                    Hn,
                    { padding: "45px 10px" },
                    i.a.createElement(
                      xr,
                      { gap: "sm", justify: "center" },
                      i.a.createElement(
                        ke.b,
                        { textAlign: "center" },
                        "No pool found."
                      ),
                      i.a.createElement(
                        Ia,
                        { to: "/add/".concat(pf(y), "/").concat(pf(E)) },
                        "Create pool."
                      )
                    )
                  )
                : w === Pf.INVALID
                ? i.a.createElement(
                    Hn,
                    { padding: "45px 10px" },
                    i.a.createElement(
                      xr,
                      { gap: "sm", justify: "center" },
                      i.a.createElement(
                        ke.b,
                        { textAlign: "center", fontWeight: 500 },
                        "Invalid pair."
                      )
                    )
                  )
                : w === Pf.LOADING
                ? i.a.createElement(
                    Hn,
                    { padding: "45px 10px" },
                    i.a.createElement(
                      xr,
                      { gap: "sm", justify: "center" },
                      i.a.createElement(
                        ke.b,
                        { textAlign: "center" },
                        "Loading",
                        i.a.createElement(qb, null)
                      )
                    )
                  )
                : null
              : U
          ),
          i.a.createElement(mp, {
            isOpen: r,
            onCurrencySelect: R,
            onDismiss: N,
            showCommonBases: !0,
            selectedCurrency:
              null !== (e = d === uy.TOKEN0 ? E : y) && void 0 !== e
                ? e
                : void 0,
          })
        );
      }
      !(function (e) {
        (e[(e.TOKEN0 = 0)] = "TOKEN0"), (e[(e.TOKEN1 = 1)] = "TOKEN1");
      })(uy || (uy = {}));
      var hy,
        gy,
        Ey = n(470),
        Oy = we.default.input(
          hy ||
            (hy = Object(Oe.a)([
              "\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ",
              "px;\n    width: ",
              "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ",
              ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ",
              "px;\n    width: ",
              "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ",
              ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ",
              "px;\n    width: ",
              "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ",
              ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(90deg, ",
              ", ",
              ");\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(90deg, ",
              ", ",
              ");\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ",
              ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ",
              ";\n  }\n  &::-ms-fill-upper {\n    background: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.theme.bg5;
          },
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.bg5;
          },
          function (e) {
            return e.theme.bg3;
          },
          function (e) {
            return e.theme.bg5;
          },
          function (e) {
            return e.theme.bg5;
          },
          function (e) {
            return e.theme.bg3;
          }
        );
      function Ay(e) {
        var t = e.value,
          n = e.onChange,
          a = e.min,
          r = void 0 === a ? 0 : a,
          c = e.step,
          l = void 0 === c ? 1 : c,
          u = e.max,
          s = void 0 === u ? 100 : u,
          d = e.size,
          m = void 0 === d ? 28 : d,
          p = Object(o.useCallback)(
            function (e) {
              n(parseInt(e.target.value));
            },
            [n]
          );
        return i.a.createElement(Oy, {
          size: m,
          type: "range",
          value: t,
          style: {
            width: "90%",
            marginLeft: 15,
            marginRight: 15,
            padding: "15px 0",
          },
          onChange: p,
          "aria-labelledby": "input slider",
          step: l,
          min: r,
          max: s,
        });
      }
      !(function (e) {
        (e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT"),
          (e.LIQUIDITY = "LIQUIDITY"),
          (e.CURRENCY_A = "CURRENCY_A"),
          (e.CURRENCY_B = "CURRENCY_B");
      })(gy || (gy = {}));
      var xy = Object(Fe.b)("burn/typeInputBurn");
      function jy() {
        return Object(u.d)(function (e) {
          return e.burn;
        });
      }
      function wy(e) {
        var t,
          n,
          a,
          r,
          c,
          l,
          d,
          f,
          b,
          y,
          v,
          h,
          g,
          x,
          j = e.history,
          w = e.match.params,
          k = w.currencyIdA,
          T = w.currencyIdB,
          C = null !== (t = wn(k)) && void 0 !== t ? t : void 0,
          I = null !== (n = wn(T)) && void 0 !== n ? n : void 0,
          S = Te(),
          R = S.account,
          N = S.chainId,
          U = S.library,
          B = Object(o.useMemo)(
            function () {
              return [ff(C, N), ff(I, N)];
            },
            [C, I, N]
          ),
          P = Object(O.a)(B, 2),
          M = P[0],
          D = P[1],
          z = Object(o.useContext)(we.ThemeContext),
          W = Qe(),
          L = jy(),
          F = L.independentField,
          q = L.typedValue,
          H = (function (e, t) {
            var n,
              a,
              r,
              o,
              i,
              c = Te(),
              l = c.account,
              u = c.chainId,
              s = jy(),
              d = s.independentField,
              f = s.typedValue,
              b = zf(e, t),
              y = Object(O.a)(b, 2)[1],
              v = Cn(null !== l && void 0 !== l ? l : void 0, [
                null === y || void 0 === y ? void 0 : y.liquidityToken,
              ]),
              h =
                null === v || void 0 === v
                  ? void 0
                  : v[
                      null !==
                        (n =
                          null === y ||
                          void 0 === y ||
                          null === (a = y.liquidityToken) ||
                          void 0 === a
                            ? void 0
                            : a.address) && void 0 !== n
                        ? n
                        : ""
                    ],
              g = [ff(e, u), ff(t, u)],
              E = g[0],
              A = g[1],
              x =
                ((r = {}),
                Object(m.a)(r, gy.CURRENCY_A, E),
                Object(m.a)(r, gy.CURRENCY_B, A),
                Object(m.a)(
                  r,
                  gy.LIQUIDITY,
                  null === y || void 0 === y ? void 0 : y.liquidityToken
                ),
                r),
              j = mf(null === y || void 0 === y ? void 0 : y.liquidityToken),
              w =
                y && j && h && E && p.JSBI.greaterThanOrEqual(j.raw, h.raw)
                  ? new p.TokenAmount(E, y.getLiquidityValue(E, j, h, !1).raw)
                  : void 0,
              k =
                y && j && h && A && p.JSBI.greaterThanOrEqual(j.raw, h.raw)
                  ? new p.TokenAmount(A, y.getLiquidityValue(A, j, h, !1).raw)
                  : void 0,
              T =
                ((o = {}),
                Object(m.a)(o, gy.CURRENCY_A, w),
                Object(m.a)(o, gy.CURRENCY_B, k),
                o),
              C = new p.Percent("0", "100");
            if (d === gy.LIQUIDITY_PERCENT) C = new p.Percent(f, "100");
            else if (d === gy.LIQUIDITY) {
              if (null === y || void 0 === y ? void 0 : y.liquidityToken) {
                var I = Eb(f, y.liquidityToken);
                I &&
                  h &&
                  !I.greaterThan(h) &&
                  (C = new p.Percent(I.raw, h.raw));
              }
            } else if (x[d]) {
              var S = Eb(f, x[d]),
                R = T[d];
              S && R && !S.greaterThan(R) && (C = new p.Percent(S.raw, R.raw));
            }
            var N,
              U,
              B =
                ((i = {}),
                Object(m.a)(i, gy.LIQUIDITY_PERCENT, C),
                Object(m.a)(
                  i,
                  gy.LIQUIDITY,
                  h && C && C.greaterThan("0")
                    ? new p.TokenAmount(h.token, C.multiply(h.raw).quotient)
                    : void 0
                ),
                Object(m.a)(
                  i,
                  gy.CURRENCY_A,
                  E && C && C.greaterThan("0") && w
                    ? new p.TokenAmount(E, C.multiply(w.raw).quotient)
                    : void 0
                ),
                Object(m.a)(
                  i,
                  gy.CURRENCY_B,
                  A && C && C.greaterThan("0") && k
                    ? new p.TokenAmount(A, C.multiply(k.raw).quotient)
                    : void 0
                ),
                i);
            return (
              l || (N = "Connect Wallet"),
              (B[gy.LIQUIDITY] && B[gy.CURRENCY_A] && B[gy.CURRENCY_B]) ||
                (N = null !== (U = N) && void 0 !== U ? U : "Enter an amount"),
              { pair: y, parsedAmounts: B, error: N }
            );
          })(
            null !== C && void 0 !== C ? C : void 0,
            null !== I && void 0 !== I ? I : void 0
          ),
          V = H.pair,
          Y = H.parsedAmounts,
          K = H.error,
          J = (function () {
            var e = Object(u.c)();
            return {
              onUserInput: Object(o.useCallback)(
                function (t, n) {
                  e(xy({ field: t, typedValue: n }));
                },
                [e]
              ),
            };
          })().onUserInput,
          Q = !K,
          G = Object(o.useState)(!1),
          Z = Object(O.a)(G, 2),
          _ = Z[0],
          $ = Z[1],
          ee = Object(o.useState)(!1),
          te = Object(O.a)(ee, 2),
          ne = te[0],
          ae = te[1],
          re = Object(o.useState)(!1),
          oe = Object(O.a)(re, 2),
          ie = oe[0],
          ce = oe[1],
          le = Object(o.useState)(""),
          ue = Object(O.a)(le, 2),
          se = ue[0],
          de = ue[1],
          me = Pt(),
          pe = Object(O.a)(me, 1)[0],
          fe = Bt(),
          be = Object(O.a)(fe, 1)[0],
          ye =
            ((b = {}),
            Object(m.a)(
              b,
              gy.LIQUIDITY_PERCENT,
              Y[gy.LIQUIDITY_PERCENT].equalTo("0")
                ? "0"
                : Y[gy.LIQUIDITY_PERCENT].lessThan(new p.Percent("1", "100"))
                ? "<1"
                : Y[gy.LIQUIDITY_PERCENT].toFixed(0)
            ),
            Object(m.a)(
              b,
              gy.LIQUIDITY,
              F === gy.LIQUIDITY
                ? q
                : null !==
                    (a =
                      null === (r = Y[gy.LIQUIDITY]) || void 0 === r
                        ? void 0
                        : r.toSignificant(6)) && void 0 !== a
                ? a
                : ""
            ),
            Object(m.a)(
              b,
              gy.CURRENCY_A,
              F === gy.CURRENCY_A
                ? q
                : null !==
                    (c =
                      null === (l = Y[gy.CURRENCY_A]) || void 0 === l
                        ? void 0
                        : l.toSignificant(6)) && void 0 !== c
                ? c
                : ""
            ),
            Object(m.a)(
              b,
              gy.CURRENCY_B,
              F === gy.CURRENCY_B
                ? q
                : null !==
                    (d =
                      null === (f = Y[gy.CURRENCY_B]) || void 0 === f
                        ? void 0
                        : f.toSignificant(6)) && void 0 !== d
                ? d
                : ""
            ),
            b),
          ve =
            null === (y = Y[gy.LIQUIDITY_PERCENT]) || void 0 === y
              ? void 0
              : y.equalTo(new p.Percent("1")),
          he = fn(
            null === V ||
              void 0 === V ||
              null === (v = V.liquidityToken) ||
              void 0 === v
              ? void 0
              : v.address,
            tn.a,
            x
          ),
          ge = Object(o.useState)(null),
          Ee = Object(O.a)(ge, 2),
          Oe = Ee[0],
          Ae = Ee[1],
          xe = pb(Y[gy.LIQUIDITY], X),
          je = Object(O.a)(xe, 2),
          Ce = je[0],
          Ie = je[1];
        function Se() {
          return (Se = Object(A.a)(
            E.a.mark(function e() {
              return E.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (he && V && U) {
                        e.next = 2;
                        break;
                      }
                      throw new Error("missing dependencies");
                    case 2:
                      if (Y[gy.LIQUIDITY]) {
                        e.next = 5;
                        break;
                      }
                      throw new Error("missing liquidity amount");
                    case 5:
                      Ie();
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var Re = Object(o.useCallback)(
            function (e, t) {
              return Ae(null), J(e, t);
            },
            [J]
          ),
          Ne = Object(o.useCallback)(
            function (e) {
              return Re(gy.LIQUIDITY, e);
            },
            [Re]
          ),
          Ue = Object(o.useCallback)(
            function (e) {
              return Re(gy.CURRENCY_A, e);
            },
            [Re]
          ),
          Be = Object(o.useCallback)(
            function (e) {
              return Re(gy.CURRENCY_B, e);
            },
            [Re]
          ),
          Pe = qi();
        function Me() {
          return De.apply(this, arguments);
        }
        function De() {
          return (De = Object(A.a)(
            E.a.mark(function e() {
              var t, n, a, r, o, i, c, l, u, d, f, b, y, v, h;
              return E.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (N && U && R) {
                        e.next = 2;
                        break;
                      }
                      throw new Error("missing dependencies");
                    case 2:
                      if (
                        ((n = Y[gy.CURRENCY_A]), (a = Y[gy.CURRENCY_B]), n && a)
                      ) {
                        e.next = 5;
                        break;
                      }
                      throw new Error("missing currency amounts");
                    case 5:
                      if (
                        ((r = Zt(0, U, R)),
                        (t = {}),
                        Object(m.a)(t, gy.CURRENCY_A, Xt(n, be)[0]),
                        Object(m.a)(t, gy.CURRENCY_B, Xt(a, be)[0]),
                        (o = t),
                        C && I)
                      ) {
                        e.next = 9;
                        break;
                      }
                      throw new Error("missing tokens");
                    case 9:
                      if ((i = Y[gy.LIQUIDITY])) {
                        e.next = 12;
                        break;
                      }
                      throw new Error("missing liquidity amount");
                    case 12:
                      if (
                        ((c = I === p.ETHER),
                        (l = C === p.ETHER || c),
                        (u = Math.ceil(Date.now() / 1e3) + pe),
                        M && D)
                      ) {
                        e.next = 17;
                        break;
                      }
                      throw new Error("could not wrap");
                    case 17:
                      if (Ce !== eb.APPROVED) {
                        e.next = 21;
                        break;
                      }
                      l
                        ? ((d = [
                            "removeLiquidityETH",
                            "removeLiquidityETHSupportingFeeOnTransferTokens",
                          ]),
                          (f = [
                            c ? M.address : D.address,
                            i.raw.toString(),
                            o[c ? gy.CURRENCY_A : gy.CURRENCY_B].toString(),
                            o[c ? gy.CURRENCY_B : gy.CURRENCY_A].toString(),
                            R,
                            u,
                          ]))
                        : ((d = ["removeLiquidity"]),
                          (f = [
                            M.address,
                            D.address,
                            i.raw.toString(),
                            o[gy.CURRENCY_A].toString(),
                            o[gy.CURRENCY_B].toString(),
                            R,
                            u,
                          ])),
                        (e.next = 26);
                      break;
                    case 21:
                      if (null === Oe) {
                        e.next = 25;
                        break;
                      }
                      l
                        ? ((d = [
                            "removeLiquidityETHWithPermit",
                            "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
                          ]),
                          (f = [
                            c ? M.address : D.address,
                            i.raw.toString(),
                            o[c ? gy.CURRENCY_A : gy.CURRENCY_B].toString(),
                            o[c ? gy.CURRENCY_B : gy.CURRENCY_A].toString(),
                            R,
                            Oe.deadline,
                            !1,
                            Oe.v,
                            Oe.r,
                            Oe.s,
                          ]))
                        : ((d = ["removeLiquidityWithPermit"]),
                          (f = [
                            M.address,
                            D.address,
                            i.raw.toString(),
                            o[gy.CURRENCY_A].toString(),
                            o[gy.CURRENCY_B].toString(),
                            R,
                            Oe.deadline,
                            !1,
                            Oe.v,
                            Oe.r,
                            Oe.s,
                          ])),
                        (e.next = 26);
                      break;
                    case 25:
                      throw new Error(
                        "Attempting to confirm without approval or a signature. Please contact support."
                      );
                    case 26:
                      return (
                        (e.next = 28),
                        Promise.all(
                          d.map(function (e) {
                            var t;
                            return (t = r.estimateGas)[e]
                              .apply(t, Object(s.a)(f))
                              .then(Qt)
                              .catch(function (t) {
                                console.error("estimateGas failed", e, f, t);
                              });
                          })
                        )
                      );
                    case 28:
                      if (
                        ((b = e.sent),
                        -1 !==
                          (y = b.findIndex(function (e) {
                            return qt.a.isBigNumber(e);
                          })))
                      ) {
                        e.next = 34;
                        break;
                      }
                      console.error(
                        "This transaction would fail. Please contact support."
                      ),
                        (e.next = 39);
                      break;
                    case 34:
                      return (
                        (v = d[y]),
                        (h = b[y]),
                        ce(!0),
                        (e.next = 39),
                        r[v]
                          .apply(r, Object(s.a)(f).concat([{ gasLimit: h }]))
                          .then(function (e) {
                            var t, n;
                            ce(!1),
                              Pe(e, {
                                summary:
                                  "Remove " +
                                  (null === (t = Y[gy.CURRENCY_A]) ||
                                  void 0 === t
                                    ? void 0
                                    : t.toSignificant(3)) +
                                  " " +
                                  (null === C || void 0 === C
                                    ? void 0
                                    : C.symbol) +
                                  " and " +
                                  (null === (n = Y[gy.CURRENCY_B]) ||
                                  void 0 === n
                                    ? void 0
                                    : n.toSignificant(3)) +
                                  " " +
                                  (null === I || void 0 === I
                                    ? void 0
                                    : I.symbol),
                              }),
                              de(e.hash);
                          })
                          .catch(function (e) {
                            ce(!1), console.error(e);
                          })
                      );
                    case 39:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function ze() {
          var e, t;
          return i.a.createElement(
            xr,
            { gap: "md", style: { marginTop: "20px" } },
            i.a.createElement(
              kr,
              { align: "flex-end" },
              i.a.createElement(
                ke.b,
                { fontSize: 24, fontWeight: 500 },
                null === (e = Y[gy.CURRENCY_A]) || void 0 === e
                  ? void 0
                  : e.toSignificant(6)
              ),
              i.a.createElement(
                Ir,
                { gap: "4px" },
                i.a.createElement(Kd, { currency: C, size: "24px" }),
                i.a.createElement(
                  ke.b,
                  {
                    fontSize: 24,
                    fontWeight: 500,
                    style: { marginLeft: "10px" },
                  },
                  null === C || void 0 === C ? void 0 : C.symbol
                )
              )
            ),
            i.a.createElement(
              Ir,
              null,
              i.a.createElement(id.a, { size: "16", color: z.text2 })
            ),
            i.a.createElement(
              kr,
              { align: "flex-end" },
              i.a.createElement(
                ke.b,
                { fontSize: 24, fontWeight: 500 },
                null === (t = Y[gy.CURRENCY_B]) || void 0 === t
                  ? void 0
                  : t.toSignificant(6)
              ),
              i.a.createElement(
                Ir,
                { gap: "4px" },
                i.a.createElement(Kd, { currency: I, size: "24px" }),
                i.a.createElement(
                  ke.b,
                  {
                    fontSize: 24,
                    fontWeight: 500,
                    style: { marginLeft: "10px" },
                  },
                  null === I || void 0 === I ? void 0 : I.symbol
                )
              )
            ),
            i.a.createElement(
              vr,
              {
                fontSize: 12,
                color: z.text2,
                textAlign: "left",
                padding: "12px 0 0 0",
              },
              "Output is estimated. If the price changes by more than ".concat(
                be / 100,
                "% your transaction will revert."
              )
            )
          );
        }
        function We() {
          var e;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              kr,
              null,
              i.a.createElement(
                ke.b,
                { color: z.text2, fontWeight: 500, fontSize: 16 },
                "BAO " +
                  (null === C || void 0 === C ? void 0 : C.symbol) +
                  "/" +
                  (null === I || void 0 === I ? void 0 : I.symbol),
                " Burned"
              ),
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(vp, {
                  currency0: C,
                  currency1: I,
                  margin: !0,
                }),
                i.a.createElement(
                  ke.b,
                  { fontWeight: 500, fontSize: 16 },
                  null === (e = Y[gy.LIQUIDITY]) || void 0 === e
                    ? void 0
                    : e.toSignificant(6)
                )
              )
            ),
            V &&
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  kr,
                  null,
                  i.a.createElement(
                    ke.b,
                    { color: z.text2, fontWeight: 500, fontSize: 16 },
                    "Price"
                  ),
                  i.a.createElement(
                    ke.b,
                    { fontWeight: 500, fontSize: 16, color: z.text1 },
                    "1 ",
                    null === C || void 0 === C ? void 0 : C.symbol,
                    " = ",
                    M ? V.priceOf(M).toSignificant(6) : "-",
                    " ",
                    null === I || void 0 === I ? void 0 : I.symbol
                  )
                ),
                i.a.createElement(
                  kr,
                  null,
                  i.a.createElement("div", null),
                  i.a.createElement(
                    ke.b,
                    { fontWeight: 500, fontSize: 16, color: z.text1 },
                    "1 ",
                    null === I || void 0 === I ? void 0 : I.symbol,
                    " = ",
                    D ? V.priceOf(D).toSignificant(6) : "-",
                    " ",
                    null === C || void 0 === C ? void 0 : C.symbol
                  )
                )
              ),
            i.a.createElement(
              lo,
              { disabled: !(Ce === eb.APPROVED || null !== Oe), onClick: Me },
              i.a.createElement(
                ke.b,
                { fontWeight: 500, fontSize: 20 },
                "Confirm"
              )
            )
          );
        }
        var Le = "Removing "
            .concat(
              null === (h = Y[gy.CURRENCY_A]) || void 0 === h
                ? void 0
                : h.toSignificant(6),
              " "
            )
            .concat(null === C || void 0 === C ? void 0 : C.symbol, " and ")
            .concat(
              null === (g = Y[gy.CURRENCY_B]) || void 0 === g
                ? void 0
                : g.toSignificant(6),
              " "
            )
            .concat(null === I || void 0 === I ? void 0 : I.symbol),
          Fe = Object(o.useCallback)(
            function (e) {
              Re(gy.LIQUIDITY_PERCENT, e.toString());
            },
            [Re]
          ),
          qe = C === p.ETHER || I === p.ETHER,
          He = Boolean(
            N &&
              ((C && Object(p.currencyEquals)(p.WETH[N], C)) ||
                (I && Object(p.currencyEquals)(p.WETH[N], I)))
          ),
          Ve = Object(o.useCallback)(
            function (e) {
              T && pf(e) === T
                ? j.push("/remove/".concat(pf(e), "/").concat(k))
                : j.push("/remove/".concat(pf(e), "/").concat(T));
            },
            [k, T, j]
          ),
          Ye = Object(o.useCallback)(
            function (e) {
              k && pf(e) === k
                ? j.push("/remove/".concat(T, "/").concat(pf(e)))
                : j.push("/remove/".concat(k, "/").concat(pf(e)));
            },
            [k, T, j]
          ),
          Ke = Object(o.useCallback)(
            function () {
              $(!1), Ae(null), se && Re(gy.LIQUIDITY_PERCENT, "0"), de("");
            },
            [Re, se]
          ),
          Je = (function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 100,
              a = Object(o.useState)(function () {
                return e;
              }),
              r = Object(O.a)(a, 2),
              i = r[0],
              c = r[1],
              l = Object(o.useRef)(),
              u = Object(o.useCallback)(
                function (e) {
                  c(e),
                    l.current && clearTimeout(l.current),
                    (l.current = setTimeout(function () {
                      t(e), (l.current = void 0);
                    }, n));
                },
                [n, t]
              );
            return (
              Object(o.useEffect)(
                function () {
                  l.current && (clearTimeout(l.current), (l.current = void 0)),
                    c(e);
                },
                [e]
              ),
              [i, u]
            );
          })(Number.parseInt(Y[gy.LIQUIDITY_PERCENT].toFixed(0)), Fe),
          Xe = Object(O.a)(Je, 2),
          Ge = Xe[0],
          Ze = Xe[1];
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            zb,
            null,
            i.a.createElement(Zp, { adding: !1 }),
            i.a.createElement(
              Wb,
              null,
              i.a.createElement(Ed, {
                isOpen: _,
                onDismiss: Ke,
                attemptingTxn: ie,
                hash: se || "",
                content: function () {
                  return i.a.createElement(hd, {
                    title: "You will receive",
                    onDismiss: Ke,
                    topContent: ze,
                    bottomContent: We,
                  });
                },
                pendingText: Le,
              }),
              i.a.createElement(
                xr,
                { gap: "md" },
                i.a.createElement(
                  Hn,
                  null,
                  i.a.createElement(
                    xr,
                    { gap: "20px" },
                    i.a.createElement(
                      kr,
                      null,
                      i.a.createElement(ke.b, { fontWeight: 500 }, "Amount"),
                      i.a.createElement(
                        Lb,
                        {
                          fontWeight: 500,
                          onClick: function () {
                            ae(!ne);
                          },
                        },
                        ne ? "Simple" : "Detailed"
                      )
                    ),
                    i.a.createElement(
                      Sr,
                      { style: { alignItems: "flex-end" } },
                      i.a.createElement(
                        ke.b,
                        { fontSize: 72, fontWeight: 500 },
                        ye[gy.LIQUIDITY_PERCENT],
                        "%"
                      )
                    ),
                    !ne &&
                      i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(Ay, { value: Ge, onChange: Ze }),
                        i.a.createElement(
                          kr,
                          null,
                          i.a.createElement(
                            Fb,
                            {
                              onClick: function () {
                                return Re(gy.LIQUIDITY_PERCENT, "25");
                              },
                              width: "20%",
                            },
                            "25%"
                          ),
                          i.a.createElement(
                            Fb,
                            {
                              onClick: function () {
                                return Re(gy.LIQUIDITY_PERCENT, "50");
                              },
                              width: "20%",
                            },
                            "50%"
                          ),
                          i.a.createElement(
                            Fb,
                            {
                              onClick: function () {
                                return Re(gy.LIQUIDITY_PERCENT, "75");
                              },
                              width: "20%",
                            },
                            "75%"
                          ),
                          i.a.createElement(
                            Fb,
                            {
                              onClick: function () {
                                return Re(gy.LIQUIDITY_PERCENT, "100");
                              },
                              width: "20%",
                            },
                            "Max"
                          )
                        )
                      )
                  )
                ),
                !ne &&
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      Ar,
                      null,
                      i.a.createElement(Ey.a, { size: "16", color: z.text2 })
                    ),
                    i.a.createElement(
                      Hn,
                      null,
                      i.a.createElement(
                        xr,
                        { gap: "10px" },
                        i.a.createElement(
                          kr,
                          null,
                          i.a.createElement(
                            ke.b,
                            { fontSize: 24, fontWeight: 500 },
                            ye[gy.CURRENCY_A] || "-"
                          ),
                          i.a.createElement(
                            Ir,
                            null,
                            i.a.createElement(Kd, {
                              currency: C,
                              style: { marginRight: "12px" },
                            }),
                            i.a.createElement(
                              ke.b,
                              {
                                fontSize: 24,
                                fontWeight: 500,
                                id: "remove-liquidity-tokena-symbol",
                              },
                              null === C || void 0 === C ? void 0 : C.symbol
                            )
                          )
                        ),
                        i.a.createElement(
                          kr,
                          null,
                          i.a.createElement(
                            ke.b,
                            { fontSize: 24, fontWeight: 500 },
                            ye[gy.CURRENCY_B] || "-"
                          ),
                          i.a.createElement(
                            Ir,
                            null,
                            i.a.createElement(Kd, {
                              currency: I,
                              style: { marginRight: "12px" },
                            }),
                            i.a.createElement(
                              ke.b,
                              {
                                fontSize: 24,
                                fontWeight: 500,
                                id: "remove-liquidity-tokenb-symbol",
                              },
                              null === I || void 0 === I ? void 0 : I.symbol
                            )
                          )
                        ),
                        N && (He || qe)
                          ? i.a.createElement(
                              kr,
                              { style: { justifyContent: "flex-end" } },
                              qe
                                ? i.a.createElement(
                                    Ia,
                                    {
                                      to: "/remove/"
                                        .concat(
                                          C === p.ETHER ? p.WETH[N].address : k,
                                          "/"
                                        )
                                        .concat(
                                          I === p.ETHER ? p.WETH[N].address : T
                                        ),
                                    },
                                    "Receive WXDAI"
                                  )
                                : He
                                ? i.a.createElement(
                                    Ia,
                                    {
                                      to: "/remove/"
                                        .concat(
                                          C &&
                                            Object(p.currencyEquals)(
                                              C,
                                              p.WETH[N]
                                            )
                                            ? "ETH"
                                            : k,
                                          "/"
                                        )
                                        .concat(
                                          I &&
                                            Object(p.currencyEquals)(
                                              I,
                                              p.WETH[N]
                                            )
                                            ? "ETH"
                                            : T
                                        ),
                                    },
                                    "Receive ETH"
                                  )
                                : null
                            )
                          : null
                      )
                    )
                  ),
                ne &&
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(Vp, {
                      value: ye[gy.LIQUIDITY],
                      onUserInput: Ne,
                      onMax: function () {
                        Re(gy.LIQUIDITY_PERCENT, "100");
                      },
                      showMaxButton: !ve,
                      disableCurrencySelect: !0,
                      currency:
                        null === V || void 0 === V ? void 0 : V.liquidityToken,
                      pair: V,
                      id: "liquidity-amount",
                    }),
                    i.a.createElement(
                      Ar,
                      null,
                      i.a.createElement(Ey.a, { size: "16", color: z.text2 })
                    ),
                    i.a.createElement(Vp, {
                      hideBalance: !0,
                      value: ye[gy.CURRENCY_A],
                      onUserInput: Ue,
                      onMax: function () {
                        return Re(gy.LIQUIDITY_PERCENT, "100");
                      },
                      showMaxButton: !ve,
                      currency: C,
                      label: "Output",
                      onCurrencySelect: Ve,
                      id: "remove-liquidity-tokena",
                    }),
                    i.a.createElement(
                      Ar,
                      null,
                      i.a.createElement(id.a, { size: "16", color: z.text2 })
                    ),
                    i.a.createElement(Vp, {
                      hideBalance: !0,
                      value: ye[gy.CURRENCY_B],
                      onUserInput: Be,
                      onMax: function () {
                        return Re(gy.LIQUIDITY_PERCENT, "100");
                      },
                      showMaxButton: !ve,
                      currency: I,
                      label: "Output",
                      onCurrencySelect: Ye,
                      id: "remove-liquidity-tokenb",
                    })
                  ),
                V &&
                  i.a.createElement(
                    "div",
                    { style: { padding: "10px 20px" } },
                    i.a.createElement(
                      kr,
                      null,
                      "Price:",
                      i.a.createElement(
                        "div",
                        null,
                        "1 ",
                        null === C || void 0 === C ? void 0 : C.symbol,
                        " = ",
                        M ? V.priceOf(M).toSignificant(6) : "-",
                        " ",
                        null === I || void 0 === I ? void 0 : I.symbol
                      )
                    ),
                    i.a.createElement(
                      kr,
                      null,
                      i.a.createElement("div", null),
                      i.a.createElement(
                        "div",
                        null,
                        "1 ",
                        null === I || void 0 === I ? void 0 : I.symbol,
                        " = ",
                        D ? V.priceOf(D).toSignificant(6) : "-",
                        " ",
                        null === C || void 0 === C ? void 0 : C.symbol
                      )
                    )
                  ),
                i.a.createElement(
                  "div",
                  { style: { position: "relative" } },
                  R
                    ? i.a.createElement(
                        kr,
                        null,
                        i.a.createElement(
                          ho,
                          {
                            onClick: function () {
                              return Se.apply(this, arguments);
                            },
                            confirmed: Ce === eb.APPROVED || null !== Oe,
                            disabled: Ce !== eb.NOT_APPROVED || null !== Oe,
                            mr: "0.5rem",
                            fontWeight: 500,
                            fontSize: 16,
                          },
                          Ce === eb.PENDING
                            ? i.a.createElement(jf, null, "Approving")
                            : Ce === eb.APPROVED || null !== Oe
                            ? "Approved"
                            : "Approve"
                        ),
                        i.a.createElement(
                          go,
                          {
                            onClick: function () {
                              $(!0);
                            },
                            disabled: !Q || (null === Oe && Ce !== eb.APPROVED),
                            error:
                              !Q && !!Y[gy.CURRENCY_A] && !!Y[gy.CURRENCY_B],
                          },
                          i.a.createElement(
                            ke.b,
                            { fontSize: 16, fontWeight: 500 },
                            K || "Remove"
                          )
                        )
                      )
                    : i.a.createElement(uo, { onClick: W }, "Connect Wallet")
                )
              )
            )
          ),
          V
            ? i.a.createElement(
                xr,
                { style: { minWidth: "20rem", marginTop: "1rem" } },
                i.a.createElement(Uf, { showUnwrapped: He, pair: V })
              )
            : null
        );
      }
      var ky,
        Ty,
        Cy,
        Iy,
        Sy = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
      function Ry(e) {
        var t = e.match.params.tokens;
        if (!Sy.test(t)) return i.a.createElement(xe.a, { to: "/pool" });
        var n = t.split("-"),
          a = Object(O.a)(n, 2),
          r = a[0],
          o = a[1];
        return i.a.createElement(xe.a, {
          to: "/remove/".concat(r, "/").concat(o),
        });
      }
      var Ny = we.default.div(
          ky ||
            (ky = Object(Oe.a)([
              "\n  ",
              "\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",
              ";\n  z-index: 1;\n  width: 100%;\n",
            ])),
          function (e) {
            return e.theme.flexColumnNoWrap;
          },
          function (e) {
            return e.theme.bg1;
          }
        ),
        Uy = we.default.div(
          Ty ||
            (Ty = Object(Oe.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",
              ";\n  transition: border-color 300ms ",
              ",\n    color 500ms ",
              ";\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            var t = e.error,
              n = e.theme;
            return t ? n.red1 : n.bg2;
          },
          function (e) {
            return e.error ? "step-end" : "step-start";
          },
          function (e) {
            return e.error ? "step-end" : "step-start";
          },
          function (e) {
            return e.theme.bg1;
          }
        ),
        By = we.default.div(
          Cy || (Cy = Object(Oe.a)(["\n  flex: 1;\n  padding: 1rem;\n"]))
        ),
        Py = we.default.input(
          Iy ||
            (Iy = Object(Oe.a)([
              "\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ",
              ";\n  transition: color 300ms ",
              ";\n  color: ",
              ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ",
              ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.error ? "step-end" : "step-start";
          },
          function (e) {
            var t = e.error,
              n = e.theme;
            return t ? n.red1 : n.primary1;
          },
          function (e) {
            return e.theme.text4;
          },
          function (e) {
            return e.theme.text4;
          }
        );
      function My(e) {
        var t = e.id,
          n = e.value,
          a = e.onChange,
          r = Te().chainId,
          c = Object(o.useContext)(we.ThemeContext),
          l = yb(n),
          u = l.address,
          s = l.loading,
          d = l.name,
          m = Object(o.useCallback)(
            function (e) {
              var t = e.target.value.replace(/\s+/g, "");
              a(t);
            },
            [a]
          ),
          p = Boolean(n.length > 0 && !s && !u);
        return i.a.createElement(
          Ny,
          { id: t },
          i.a.createElement(
            Uy,
            { error: p },
            i.a.createElement(
              By,
              null,
              i.a.createElement(
                xr,
                { gap: "md" },
                i.a.createElement(
                  kr,
                  null,
                  i.a.createElement(
                    sr,
                    { color: c.text2, fontWeight: 500, fontSize: 14 },
                    "Recipient"
                  ),
                  u &&
                    r &&
                    i.a.createElement(
                      Ra,
                      {
                        href: Kt(
                          r,
                          null !== d && void 0 !== d ? d : u,
                          "address"
                        ),
                        style: { fontSize: "14px" },
                      },
                      "(View on Blockscout)"
                    )
                ),
                i.a.createElement(Py, {
                  className: "recipient-address-input",
                  type: "text",
                  autoComplete: "off",
                  autoCorrect: "off",
                  autoCapitalize: "off",
                  spellCheck: "false",
                  placeholder: "Wallet Address or ENS name",
                  error: p,
                  pattern: "^(0x[a-fA-F0-9]{40})$",
                  onChange: m,
                  value: n,
                })
              )
            )
          )
        );
      }
      var Dy = n(471);
      function zy(e) {
        var t = e.priceImpact;
        return i.a.createElement(
          Of,
          { fontWeight: 500, fontSize: 14, severity: mb(t) },
          t ? (t.lessThan(ie) ? "<0.01%" : "".concat(t.toFixed(2), "%")) : "-"
        );
      }
      function Wy(e) {
        var t,
          n,
          a,
          r,
          c = e.trade,
          l = e.onConfirm,
          u = e.allowedSlippage,
          s = e.swapErrorMessage,
          d = e.disabledConfirm,
          m = Object(o.useState)(!1),
          f = Object(O.a)(m, 2),
          b = f[0],
          y = f[1],
          v = Object(o.useContext)(we.ThemeContext),
          h = Object(o.useMemo)(
            function () {
              return db(c, u);
            },
            [u, c]
          ),
          g = Object(o.useMemo)(
            function () {
              return sb(c);
            },
            [c]
          ),
          E = g.priceImpactWithoutFee,
          A = g.realizedLPFee,
          x = mb(E);
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            xr,
            { gap: "0px" },
            i.a.createElement(
              kr,
              { align: "center" },
              i.a.createElement(
                ke.b,
                { fontWeight: 400, fontSize: 14, color: v.text2 },
                "Price"
              ),
              i.a.createElement(
                ke.b,
                {
                  fontWeight: 500,
                  fontSize: 14,
                  color: v.text1,
                  style: {
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    textAlign: "right",
                    paddingLeft: "10px",
                  },
                },
                (function (e, t) {
                  return e
                    ? t
                      ? ""
                          .concat(
                            e.executionPrice.invert().toSignificant(6),
                            " "
                          )
                          .concat(e.inputAmount.currency.symbol, " / ")
                          .concat(e.outputAmount.currency.symbol)
                      : ""
                          .concat(e.executionPrice.toSignificant(6), " ")
                          .concat(e.outputAmount.currency.symbol, " / ")
                          .concat(e.inputAmount.currency.symbol)
                    : "";
                })(c, b),
                i.a.createElement(
                  Af,
                  {
                    onClick: function () {
                      return y(!b);
                    },
                  },
                  i.a.createElement(Dy.a, { size: 14 })
                )
              )
            ),
            i.a.createElement(
              kr,
              null,
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(
                  sr,
                  { fontSize: 14, fontWeight: 400, color: v.text2 },
                  c.tradeType === p.TradeType.EXACT_INPUT
                    ? "Minimum received"
                    : "Maximum sold"
                ),
                i.a.createElement(va, {
                  text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",
                })
              ),
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(
                  sr,
                  { fontSize: 14 },
                  c.tradeType === p.TradeType.EXACT_INPUT
                    ? null !==
                        (t =
                          null === (n = h[Gf.OUTPUT]) || void 0 === n
                            ? void 0
                            : n.toSignificant(4)) && void 0 !== t
                      ? t
                      : "-"
                    : null !==
                        (a =
                          null === (r = h[Gf.INPUT]) || void 0 === r
                            ? void 0
                            : r.toSignificant(4)) && void 0 !== a
                    ? a
                    : "-"
                ),
                i.a.createElement(
                  sr,
                  { fontSize: 14, marginLeft: "4px" },
                  c.tradeType === p.TradeType.EXACT_INPUT
                    ? c.outputAmount.currency.symbol
                    : c.inputAmount.currency.symbol
                )
              )
            ),
            i.a.createElement(
              kr,
              null,
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(
                  sr,
                  { color: v.text2, fontSize: 14, fontWeight: 400 },
                  "Price Impact"
                ),
                i.a.createElement(va, {
                  text: "The difference between the market price and your price due to trade size.",
                })
              ),
              i.a.createElement(zy, { priceImpact: E })
            ),
            i.a.createElement(
              kr,
              null,
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(
                  sr,
                  { fontSize: 14, fontWeight: 400, color: v.text2 },
                  "Liquidity Provider Fee"
                ),
                i.a.createElement(va, {
                  text: "A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive.",
                })
              ),
              i.a.createElement(
                sr,
                { fontSize: 14 },
                A
                  ? (null === A || void 0 === A ? void 0 : A.toSignificant(6)) +
                      " " +
                      c.inputAmount.currency.symbol
                  : "-"
              )
            )
          ),
          i.a.createElement(
            Cr,
            null,
            i.a.createElement(
              go,
              {
                onClick: l,
                disabled: d,
                error: x > 2,
                style: { margin: "10px 0 0 0" },
                id: "confirm-swap-or-send",
              },
              i.a.createElement(
                ke.b,
                { fontSize: 20, fontWeight: 500 },
                x > 2 ? "Swap Anyway" : "Confirm Swap"
              )
            ),
            s ? i.a.createElement(Tf, { error: s }) : null
          )
        );
      }
      function Ly(e) {
        var t,
          n,
          a = e.trade,
          r = e.allowedSlippage,
          c = e.recipient,
          l = e.showAcceptChanges,
          u = e.onAcceptChanges,
          s = Object(o.useMemo)(
            function () {
              return db(a, r);
            },
            [a, r]
          ),
          d = mb(
            Object(o.useMemo)(
              function () {
                return sb(a);
              },
              [a]
            ).priceImpactWithoutFee
          ),
          m = Object(o.useContext)(we.ThemeContext);
        return i.a.createElement(
          xr,
          { gap: "md", style: { marginTop: "20px" } },
          i.a.createElement(
            kr,
            { align: "flex-end" },
            i.a.createElement(
              Ir,
              { gap: "0px" },
              i.a.createElement(Kd, {
                currency: a.inputAmount.currency,
                size: "24px",
                style: { marginRight: "12px" },
              }),
              i.a.createElement(
                xf,
                {
                  fontSize: 24,
                  fontWeight: 500,
                  color:
                    l && a.tradeType === p.TradeType.EXACT_OUTPUT
                      ? m.primary1
                      : "",
                },
                a.inputAmount.toSignificant(6)
              )
            ),
            i.a.createElement(
              Ir,
              { gap: "0px" },
              i.a.createElement(
                ke.b,
                {
                  fontSize: 24,
                  fontWeight: 500,
                  style: { marginLeft: "10px" },
                },
                a.inputAmount.currency.symbol
              )
            )
          ),
          i.a.createElement(
            Ir,
            null,
            i.a.createElement(Ey.a, {
              size: "16",
              color: m.text2,
              style: { marginLeft: "4px", minWidth: "16px" },
            })
          ),
          i.a.createElement(
            kr,
            { align: "flex-end" },
            i.a.createElement(
              Ir,
              { gap: "0px" },
              i.a.createElement(Kd, {
                currency: a.outputAmount.currency,
                size: "24px",
                style: { marginRight: "12px" },
              }),
              i.a.createElement(
                xf,
                {
                  fontSize: 24,
                  fontWeight: 500,
                  color:
                    d > 2
                      ? m.red1
                      : l && a.tradeType === p.TradeType.EXACT_INPUT
                      ? m.primary1
                      : "",
                },
                a.outputAmount.toSignificant(6)
              )
            ),
            i.a.createElement(
              Ir,
              { gap: "0px" },
              i.a.createElement(
                ke.b,
                {
                  fontSize: 24,
                  fontWeight: 500,
                  style: { marginLeft: "10px" },
                },
                a.outputAmount.currency.symbol
              )
            )
          ),
          l
            ? i.a.createElement(
                Sf,
                { justify: "flex-start", gap: "0px" },
                i.a.createElement(
                  kr,
                  null,
                  i.a.createElement(
                    Ir,
                    null,
                    i.a.createElement(ld.a, {
                      size: 20,
                      style: { marginRight: "8px", minWidth: 24 },
                    }),
                    i.a.createElement(
                      lr,
                      { color: m.primary1 },
                      " Price Updated"
                    )
                  ),
                  i.a.createElement(
                    lo,
                    {
                      style: {
                        padding: ".5rem",
                        width: "fit-content",
                        fontSize: "0.825rem",
                        borderRadius: "12px",
                      },
                      onClick: u,
                    },
                    "Accept"
                  )
                )
              )
            : null,
          i.a.createElement(
            xr,
            {
              justify: "flex-start",
              gap: "sm",
              style: { padding: "12px 0 0 0px" },
            },
            a.tradeType === p.TradeType.EXACT_INPUT
              ? i.a.createElement(
                  vr,
                  { textAlign: "left", style: { width: "100%" } },
                  "Output is estimated. You will receive at least ",
                  i.a.createElement(
                    "b",
                    null,
                    null === (t = s[Gf.OUTPUT]) || void 0 === t
                      ? void 0
                      : t.toSignificant(6),
                    " ",
                    a.outputAmount.currency.symbol
                  ),
                  " or the transaction will revert."
                )
              : i.a.createElement(
                  vr,
                  { textAlign: "left", style: { width: "100%" } },
                  "Input is estimated. You will sell at most ",
                  i.a.createElement(
                    "b",
                    null,
                    null === (n = s[Gf.INPUT]) || void 0 === n
                      ? void 0
                      : n.toSignificant(6),
                    " ",
                    a.inputAmount.currency.symbol
                  ),
                  " or the transaction will revert."
                )
          ),
          null !== c
            ? i.a.createElement(
                xr,
                {
                  justify: "flex-start",
                  gap: "sm",
                  style: { padding: "12px 0 0 0px" },
                },
                i.a.createElement(
                  lr,
                  null,
                  "Output will be sent to",
                  " ",
                  i.a.createElement("b", { title: c }, Vt(c) ? Jt(c) : c)
                )
              )
            : null
        );
      }
      function Fy(e) {
        var t,
          n,
          a,
          r,
          c,
          l,
          u = e.trade,
          s = e.originalTrade,
          d = e.onAcceptChanges,
          m = e.allowedSlippage,
          f = e.onConfirm,
          b = e.onDismiss,
          y = e.recipient,
          v = e.swapErrorMessage,
          h = e.isOpen,
          g = e.attemptingTxn,
          E = e.txHash,
          O = Object(o.useMemo)(
            function () {
              return Boolean(
                u &&
                  s &&
                  ((t = s),
                  (e = u).tradeType !== t.tradeType ||
                    !Object(p.currencyEquals)(
                      e.inputAmount.currency,
                      t.inputAmount.currency
                    ) ||
                    !e.inputAmount.equalTo(t.inputAmount) ||
                    !Object(p.currencyEquals)(
                      e.outputAmount.currency,
                      t.outputAmount.currency
                    ) ||
                    !e.outputAmount.equalTo(t.outputAmount))
              );
              var e, t;
            },
            [s, u]
          ),
          A = Object(o.useCallback)(
            function () {
              return u
                ? i.a.createElement(Ly, {
                    trade: u,
                    allowedSlippage: m,
                    recipient: y,
                    showAcceptChanges: O,
                    onAcceptChanges: d,
                  })
                : null;
            },
            [m, d, y, O, u]
          ),
          x = Object(o.useCallback)(
            function () {
              return u
                ? i.a.createElement(Wy, {
                    onConfirm: f,
                    trade: u,
                    disabledConfirm: O,
                    swapErrorMessage: v,
                    allowedSlippage: m,
                  })
                : null;
            },
            [m, f, O, v, u]
          ),
          j = "Swapping "
            .concat(
              null === u ||
                void 0 === u ||
                null === (t = u.inputAmount) ||
                void 0 === t
                ? void 0
                : t.toSignificant(6),
              " "
            )
            .concat(
              null === u ||
                void 0 === u ||
                null === (n = u.inputAmount) ||
                void 0 === n ||
                null === (a = n.currency) ||
                void 0 === a
                ? void 0
                : a.symbol,
              " for "
            )
            .concat(
              null === u ||
                void 0 === u ||
                null === (r = u.outputAmount) ||
                void 0 === r
                ? void 0
                : r.toSignificant(6),
              " "
            )
            .concat(
              null === u ||
                void 0 === u ||
                null === (c = u.outputAmount) ||
                void 0 === c ||
                null === (l = c.currency) ||
                void 0 === l
                ? void 0
                : l.symbol
            ),
          w = Object(o.useCallback)(
            function () {
              return v
                ? i.a.createElement(gd, { onDismiss: b, message: v })
                : i.a.createElement(hd, {
                    title: "Confirm Swap",
                    onDismiss: b,
                    topContent: A,
                    bottomContent: x,
                  });
            },
            [b, x, A, v]
          );
        return i.a.createElement(Ed, {
          isOpen: h,
          onDismiss: b,
          attemptingTxn: g,
          hash: E,
          content: w,
          pendingText: j,
        });
      }
      var qy,
        Hy = n(472),
        Vy = Object(o.memo)(function (e) {
          var t = e.trade,
            n = Object(o.useContext)(we.ThemeContext);
          return i.a.createElement(
            ke.a,
            {
              px: "1rem",
              py: "0.5rem",
              my: "0.5rem",
              style: {
                border: "1px solid ".concat(n.bg3),
                borderRadius: "1rem",
              },
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
            },
            t.route.path.map(function (e, t, a) {
              var r = t === a.length - 1;
              return i.a.createElement(
                o.Fragment,
                { key: t },
                i.a.createElement(
                  ke.a,
                  {
                    my: "0.5rem",
                    alignItems: "center",
                    style: { flexShrink: 0 },
                  },
                  i.a.createElement(Kd, { currency: e, size: "1.5rem" }),
                  i.a.createElement(
                    sr,
                    { fontSize: 14, color: n.text1, ml: "0.5rem" },
                    e.symbol
                  )
                ),
                r ? null : i.a.createElement(Hy.a, { color: n.text2 })
              );
            })
          );
        });
      function Yy(e) {
        var t,
          n,
          a,
          r,
          c = e.trade,
          l = e.allowedSlippage,
          u = Object(o.useContext)(we.ThemeContext),
          s = sb(c),
          d = s.priceImpactWithoutFee,
          m = s.realizedLPFee,
          f = c.tradeType === p.TradeType.EXACT_INPUT,
          b = db(c, l);
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            xr,
            { style: { padding: "0 20px" } },
            i.a.createElement(
              kr,
              null,
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(
                  sr,
                  { fontSize: 14, fontWeight: 400, color: u.text2 },
                  f ? "Minimum received" : "Maximum sold"
                ),
                i.a.createElement(va, {
                  text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",
                })
              ),
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(
                  sr,
                  { color: u.text1, fontSize: 14 },
                  f
                    ? null !==
                        (t = ""
                          .concat(
                            null === (n = b[Gf.OUTPUT]) || void 0 === n
                              ? void 0
                              : n.toSignificant(4),
                            " "
                          )
                          .concat(c.outputAmount.currency.symbol)) &&
                      void 0 !== t
                      ? t
                      : "-"
                    : null !==
                        (a = ""
                          .concat(
                            null === (r = b[Gf.INPUT]) || void 0 === r
                              ? void 0
                              : r.toSignificant(4),
                            " "
                          )
                          .concat(c.inputAmount.currency.symbol)) &&
                      void 0 !== a
                    ? a
                    : "-"
                )
              )
            ),
            i.a.createElement(
              kr,
              null,
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(
                  sr,
                  { fontSize: 14, fontWeight: 400, color: u.text2 },
                  "Price Impact"
                ),
                i.a.createElement(va, {
                  text: "The difference between the market price and estimated price due to trade size.",
                })
              ),
              i.a.createElement(zy, { priceImpact: d })
            ),
            i.a.createElement(
              kr,
              null,
              i.a.createElement(
                Ir,
                null,
                i.a.createElement(
                  sr,
                  { fontSize: 14, fontWeight: 400, color: u.text2 },
                  "Liquidity Provider Fee"
                ),
                i.a.createElement(va, {
                  text: "A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive.",
                })
              ),
              i.a.createElement(
                sr,
                { fontSize: 14, color: u.text1 },
                m
                  ? ""
                      .concat(m.toSignificant(4), " ")
                      .concat(c.inputAmount.currency.symbol)
                  : "-"
              )
            )
          )
        );
      }
      function Ky(e) {
        var t = e.trade,
          n = Object(o.useContext)(we.ThemeContext),
          a = Bt(),
          r = Object(O.a)(a, 1)[0],
          c = Boolean(t && t.route.path.length > 2);
        return i.a.createElement(
          xr,
          { gap: "md" },
          t &&
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(Yy, { trade: t, allowedSlippage: r }),
              c &&
                i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(gf, null),
                  i.a.createElement(
                    xr,
                    { style: { padding: "0 24px" } },
                    i.a.createElement(
                      Ir,
                      null,
                      i.a.createElement(
                        sr,
                        { fontSize: 14, fontWeight: 400, color: n.text2 },
                        "Route"
                      ),
                      i.a.createElement(va, {
                        text: "Routing through these tokens resulted in the best price for your trade.",
                      })
                    ),
                    i.a.createElement(Vy, { trade: t })
                  )
                )
            )
        );
      }
      var Jy,
        Qy,
        Xy,
        Gy = we.default.div(
          qy ||
            (qy = Object(Oe.a)([
              "\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ",
              ";\n  background-color: ",
              ";\n  z-index: -1;\n\n  transform: ",
              ";\n  transition: transform 300ms ease-in-out;\n",
            ])),
          function (e) {
            return e.theme.text2;
          },
          function (e) {
            return e.theme.advancedBG;
          },
          function (e) {
            return e.show ? "translateY(0%)" : "translateY(-100%)";
          }
        );
      function Zy(e) {
        var t,
          n = e.trade,
          a = Object(Wn.a)(e, ["trade"]),
          r = Od(n, Ad);
        return i.a.createElement(
          Gy,
          { show: Boolean(n) },
          i.a.createElement(
            Ky,
            Object.assign({}, a, {
              trade:
                null !== (t = null !== n && void 0 !== n ? n : r) &&
                void 0 !== t
                  ? t
                  : void 0,
            })
          )
        );
      }
      function _y(e) {
        var t = e.version,
          n = Object(o.useContext)(we.ThemeContext),
          a = Object(xe.g)(),
          r = Ff(),
          c = Object(o.useMemo)(
            function () {
              return Object(d.a)(
                Object(d.a)({}, a),
                {},
                {
                  search: "?".concat(
                    Object($s.stringify)(
                      Object(d.a)(
                        Object(d.a)({}, r),
                        {},
                        { use: t !== qf ? t : void 0 }
                      )
                    )
                  ),
                }
              );
            },
            [a, r, t]
          );
        return i.a.createElement(
          Kn,
          { style: { marginTop: "12px", padding: "8px 4px" } },
          i.a.createElement(
            xr,
            {
              gap: "sm",
              justify: "center",
              style: { alignItems: "center", textAlign: "center" },
            },
            i.a.createElement(
              ke.b,
              {
                lineHeight: "145.23%;",
                fontSize: 14,
                fontWeight: 400,
                color: n.text1,
              },
              "There is a better price for this trade on",
              " ",
              i.a.createElement(
                Ia,
                { to: c },
                i.a.createElement(
                  "b",
                  null,
                  "Baoswap ",
                  t.toUpperCase(),
                  " \u2197"
                )
              )
            )
          )
        );
      }
      function $y(e) {
        var t,
          n = e.price,
          a = e.inputCurrency,
          r = e.outputCurrency,
          c = e.showInverted,
          l = e.setShowInverted,
          u = Object(o.useContext)(we.ThemeContext),
          s = c
            ? null === n || void 0 === n
              ? void 0
              : n.toSignificant(6)
            : null === n ||
              void 0 === n ||
              null === (t = n.invert()) ||
              void 0 === t
            ? void 0
            : t.toSignificant(6),
          d = Boolean(a && r),
          m = c
            ? ""
                .concat(null === r || void 0 === r ? void 0 : r.symbol, " per ")
                .concat(null === a || void 0 === a ? void 0 : a.symbol)
            : ""
                .concat(null === a || void 0 === a ? void 0 : a.symbol, " per ")
                .concat(null === r || void 0 === r ? void 0 : r.symbol);
        return i.a.createElement(
          ke.b,
          {
            fontWeight: 500,
            fontSize: 14,
            color: u.text2,
            style: {
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            },
          },
          d
            ? i.a.createElement(
                i.a.Fragment,
                null,
                null !== s && void 0 !== s ? s : "-",
                " ",
                m,
                i.a.createElement(
                  Af,
                  {
                    onClick: function () {
                      return l(!c);
                    },
                  },
                  i.a.createElement(Dy.a, { size: 14 })
                )
              )
            : "-"
        );
      }
      var ev,
        tv,
        nv = we.default.div(
          Jy ||
            (Jy = Object(Oe.a)([
              "\n  background: ",
              ";\n  padding: 0.75rem;\n  border-radius: 20px;\n",
            ])),
          function (e) {
            var t = e.theme;
            return Object(ea.c)(0.6, t.bg3);
          }
        ),
        av = we.default.div(
          Qy ||
            (Qy = Object(Oe.a)([
              "\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n",
            ]))
        ),
        rv = Object(we.default)(ld.a)(
          Xy || (Xy = Object(Oe.a)(["\n  stroke: ", ";\n"])),
          function (e) {
            return e.theme.red2;
          }
        );
      function ov(e) {
        var t,
          n,
          a,
          r,
          c = e.token,
          l = Te().chainId,
          u =
            null !==
              (t =
                null === c ||
                void 0 === c ||
                null === (n = c.symbol) ||
                void 0 === n
                  ? void 0
                  : n.toLowerCase()) && void 0 !== t
              ? t
              : "",
          s =
            null !==
              (a =
                null === c ||
                void 0 === c ||
                null === (r = c.name) ||
                void 0 === r
                  ? void 0
                  : r.toLowerCase()) && void 0 !== a
              ? a
              : "",
          d = On(),
          m = Object(o.useMemo)(
            function () {
              return (
                !(!c || !l) &&
                Object.keys(d).some(function (e) {
                  var t,
                    n,
                    a = d[e];
                  return (
                    !a.equals(c) &&
                    ((null === (t = a.symbol) || void 0 === t
                      ? void 0
                      : t.toLowerCase()) === u ||
                      (null === (n = a.name) || void 0 === n
                        ? void 0
                        : n.toLowerCase()) === s)
                  );
                })
              );
            },
            [c, l, d, u, s]
          );
        return c
          ? i.a.createElement(
              nv,
              { error: m },
              i.a.createElement(
                Cr,
                { gap: "6px" },
                i.a.createElement(
                  xr,
                  { gap: "24px" },
                  i.a.createElement(Kd, { currency: c, size: "16px" }),
                  i.a.createElement("div", null, " ")
                ),
                i.a.createElement(
                  xr,
                  { gap: "10px", justify: "flex-start" },
                  i.a.createElement(
                    lr,
                    null,
                    c && c.name && c.symbol && c.name !== c.symbol
                      ? "".concat(c.name, " (").concat(c.symbol, ")")
                      : c.name || c.symbol,
                    " "
                  ),
                  l &&
                    i.a.createElement(
                      Ra,
                      {
                        style: { fontWeight: 400 },
                        href: Kt(l, c.address, "token"),
                      },
                      i.a.createElement(
                        br,
                        { title: c.address },
                        Jt(c.address),
                        " (View on Blockscout)"
                      )
                    )
                )
              )
            )
          : null;
      }
      function iv(e) {
        var t = e.isOpen,
          n = e.tokens,
          a = e.onConfirm,
          r = Object(o.useState)(!1),
          c = Object(O.a)(r, 2),
          l = c[0],
          u = c[1],
          s = Object(o.useCallback)(function () {
            return u(function (e) {
              return !e;
            });
          }, []),
          d = Object(o.useCallback)(function () {
            return null;
          }, []);
        return i.a.createElement(
          Vo,
          { isOpen: t, onDismiss: d, maxHeight: 90 },
          i.a.createElement(
            av,
            { className: "token-warning-container" },
            i.a.createElement(
              xr,
              { gap: "lg" },
              i.a.createElement(
                Cr,
                { gap: "6px" },
                i.a.createElement(rv, null),
                i.a.createElement(lr, { color: "red2" }, "Token imported")
              ),
              i.a.createElement(
                dr,
                { color: "red2" },
                "Anyone can create an ERC20 token on Ethereum with ",
                i.a.createElement("em", null, "any"),
                " name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."
              ),
              i.a.createElement(
                dr,
                { color: "red2" },
                "This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary ERC20 tokens."
              ),
              i.a.createElement(
                dr,
                { color: "red2" },
                "If you purchase an arbitrary token, ",
                i.a.createElement(
                  "strong",
                  null,
                  "you may be unable to sell it back."
                )
              ),
              n.map(function (e) {
                return i.a.createElement(ov, { key: e.address, token: e });
              }),
              i.a.createElement(
                kr,
                null,
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(
                    "label",
                    { style: { cursor: "pointer", userSelect: "none" } },
                    i.a.createElement("input", {
                      type: "checkbox",
                      className: "understand-checkbox",
                      checked: l,
                      onChange: s,
                    }),
                    " ",
                    "I understand"
                  )
                ),
                i.a.createElement(
                  go,
                  {
                    disabled: !l,
                    error: !0,
                    width: "140px",
                    padding: "0.5rem 1rem",
                    className: "token-dismiss-button",
                    style: { borderRadius: "10px" },
                    onClick: function () {
                      a();
                    },
                  },
                  i.a.createElement(dr, { color: "white" }, "Continue")
                )
              )
            )
          )
        );
      }
      function cv(e) {
        return "0x".concat(e.raw.toString(16));
      }
      function lv(e, t) {
        if (Qf(e) !== Wf.v1) throw new Error("invalid trade version");
        if (e.route.pairs.length > 2) throw new Error("too many pairs");
        var n = e.tradeType === p.TradeType.EXACT_INPUT,
          a = e.inputAmount.currency === p.ETHER,
          r = e.outputAmount.currency === p.ETHER;
        if (a && r) throw new Error("ETHER to ETHER");
        var o,
          i = cv(e.minimumAmountOut(t.allowedSlippage)),
          c = cv(e.maximumAmountIn(t.allowedSlippage)),
          l =
            ((o = t.ttl),
            "0x".concat(
              (Math.floor(new Date().getTime() / 1e3) + o).toString(16)
            ));
        if (n) {
          if (a)
            return {
              methodName: "ethToTokenTransferInput",
              args: [i, l, t.recipient],
              value: c,
            };
          if (r)
            return {
              methodName: "tokenToEthTransferInput",
              args: [c, i, l, t.recipient],
              value: "0x0",
            };
          var u = e.outputAmount.currency;
          if (!(u instanceof p.Token)) throw new Error("token to token");
          return {
            methodName: "tokenToTokenTransferInput",
            args: [c, i, "0x1", l, t.recipient, u.address],
            value: "0x0",
          };
        }
        if (a)
          return {
            methodName: "ethToTokenTransferOutput",
            args: [i, l, t.recipient],
            value: c,
          };
        if (r)
          return {
            methodName: "tokenToEthTransferOutput",
            args: [i, c, l, t.recipient],
            value: "0x0",
          };
        var s = e.outputAmount.currency;
        if (!(s instanceof p.Token))
          throw new Error("invalid output amount currency");
        return {
          methodName: "tokenToTokenTransferOutput",
          args: [i, c, Lf.a.toHexString(), l, t.recipient, s.address],
          value: "0x0",
        };
      }
      function uv(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 1200,
          a = arguments.length > 3 ? arguments[3] : void 0,
          r = Te(),
          i = r.account,
          c = r.chainId,
          l = r.library,
          u = yb(a),
          s = u.address,
          d = null === a ? i : s,
          m = yn(Xf(e), !0);
        return Object(o.useMemo)(
          function () {
            var a = Qf(e);
            if (!e || !d || !l || !i || !a || !c) return [];
            var r = a === Wf.v2 ? Zt(0, l, i) : m;
            if (!r) return [];
            var o = [];
            switch (a) {
              case Wf.v2:
                o.push(
                  p.Router.swapCallParameters(e, {
                    feeOnTransfer: !1,
                    allowedSlippage: new p.Percent(p.JSBI.BigInt(t), ce),
                    recipient: d,
                    ttl: n,
                  })
                ),
                  e.tradeType === p.TradeType.EXACT_INPUT &&
                    o.push(
                      p.Router.swapCallParameters(e, {
                        feeOnTransfer: !0,
                        allowedSlippage: new p.Percent(p.JSBI.BigInt(t), ce),
                        recipient: d,
                        ttl: n,
                      })
                    );
                break;
              case Wf.v1:
                o.push(
                  lv(e, {
                    allowedSlippage: new p.Percent(p.JSBI.BigInt(t), ce),
                    recipient: d,
                    ttl: n,
                  })
                );
            }
            return o.map(function (e) {
              return { parameters: e, contract: r };
            });
          },
          [i, t, c, n, l, d, e, m]
        );
      }
      !(function (e) {
        (e[(e.INVALID = 0)] = "INVALID"),
          (e[(e.LOADING = 1)] = "LOADING"),
          (e[(e.VALID = 2)] = "VALID");
      })(ev || (ev = {})),
        (function (e) {
          (e[(e.NOT_APPLICABLE = 0)] = "NOT_APPLICABLE"),
            (e[(e.WRAP = 1)] = "WRAP"),
            (e[(e.UNWRAP = 2)] = "UNWRAP");
        })(tv || (tv = {}));
      var sv = { wrapType: tv.NOT_APPLICABLE };
      function dv(e, t, n) {
        var a = Te(),
          r = a.chainId,
          i = a.account,
          c = (function (e) {
            var t = Te().chainId;
            return fn(t ? p.WETH[t].address : void 0, ln, e);
          })(),
          l = Rn(null !== i && void 0 !== i ? i : void 0, e),
          u = Object(o.useMemo)(
            function () {
              return Eb(n, e);
            },
            [e, n]
          ),
          s = qi();
        return Object(o.useMemo)(
          function () {
            if (!c || !r || !e || !t) return sv;
            var n = u && l && !l.lessThan(u);
            return e === p.ETHER && Object(p.currencyEquals)(p.WETH[r], t)
              ? {
                  wrapType: tv.WRAP,
                  execute:
                    n && u
                      ? Object(A.a)(
                          E.a.mark(function e() {
                            var t;
                            return E.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        c.deposit({
                                          value: "0x".concat(
                                            u.raw.toString(16)
                                          ),
                                        })
                                      );
                                    case 3:
                                      (t = e.sent),
                                        s(t, {
                                          summary: "Wrap ".concat(
                                            u.toSignificant(6),
                                            " XDAI to WXDAI"
                                          ),
                                        }),
                                        (e.next = 10);
                                      break;
                                    case 7:
                                      (e.prev = 7),
                                        (e.t0 = e.catch(0)),
                                        console.error(
                                          "Could not deposit",
                                          e.t0
                                        );
                                    case 10:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 7]]
                            );
                          })
                        )
                      : void 0,
                  inputError: n ? void 0 : "Insufficient ETH balance",
                }
              : Object(p.currencyEquals)(p.WETH[r], e) && t === p.ETHER
              ? {
                  wrapType: tv.UNWRAP,
                  execute:
                    n && u
                      ? Object(A.a)(
                          E.a.mark(function e() {
                            var t;
                            return E.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        c.withdraw(
                                          "0x".concat(u.raw.toString(16))
                                        )
                                      );
                                    case 3:
                                      (t = e.sent),
                                        s(t, {
                                          summary: "Unwrap ".concat(
                                            u.toSignificant(6),
                                            " WXDAI to XDAI"
                                          ),
                                        }),
                                        (e.next = 10);
                                      break;
                                    case 7:
                                      (e.prev = 7),
                                        (e.t0 = e.catch(0)),
                                        console.error(
                                          "Could not withdraw",
                                          e.t0
                                        );
                                    case 10:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 7]]
                            );
                          })
                        )
                      : void 0,
                  inputError: n ? void 0 : "Insufficient WETH balance",
                }
              : sv;
          },
          [c, r, e, t, u, l, s]
        );
      }
      function mv() {
        return (mv = Object(A.a)(
          E.a.mark(function e(t, n) {
            return E.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        "https://raw.githubusercontent.com/1Hive/brightid-honey-faucet/master/app/src/assets/honey.svg",
                        (e.prev = 1),
                        (e.next = 4),
                        t.request({
                          method: "wallet_watchAsset",
                          params: {
                            type: "ERC20",
                            options: {
                              address: n.address,
                              symbol: n.symbol ? n.symbol : "",
                              decimals: n.decimals,
                              image:
                                "https://raw.githubusercontent.com/1Hive/brightid-honey-faucet/master/app/src/assets/honey.svg",
                            },
                          },
                        })
                      );
                    case 4:
                      e.next = 9;
                      break;
                    case 6:
                      (e.prev = 6), (e.t0 = e.catch(1)), console.log(e.t0);
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 6]]
            );
          })
        )).apply(this, arguments);
      }
      function pv() {
        var e,
          t,
          n,
          a,
          r,
          c,
          l,
          f,
          b,
          y,
          v,
          h,
          g,
          x = (function () {
            var e = Te().chainId,
              t = Object(u.c)(),
              n = Ff(),
              a = Object(o.useState)(),
              r = Object(O.a)(a, 2),
              i = r[0],
              c = r[1];
            return (
              Object(o.useEffect)(
                function () {
                  if (e) {
                    var a = Tb(n);
                    t(
                      ob({
                        typedValue: a.typedValue,
                        field: a.independentField,
                        inputCurrencyId: a[Gf.INPUT].currencyId,
                        outputCurrencyId: a[Gf.OUTPUT].currencyId,
                        recipient: a.recipient,
                      })
                    ),
                      c({
                        inputCurrencyId: a[Gf.INPUT].currencyId,
                        outputCurrencyId: a[Gf.OUTPUT].currencyId,
                      });
                  }
                },
                [t, e]
              ),
              i
            );
          })(),
          j = [
            wn(null === x || void 0 === x ? void 0 : x.inputCurrencyId),
            wn(null === x || void 0 === x ? void 0 : x.outputCurrencyId),
          ],
          w = j[0],
          k = j[1],
          T = Object(o.useState)(!1),
          C = Object(O.a)(T, 2),
          I = C[0],
          S = C[1],
          R = Object(o.useMemo)(
            function () {
              var e, t;
              return null !==
                (e =
                  null === (t = [w, k]) || void 0 === t
                    ? void 0
                    : t.filter(function (e) {
                        return e instanceof p.Token;
                      })) && void 0 !== e
                ? e
                : [];
            },
            [w, k]
          ),
          N = Object(o.useCallback)(function () {
            S(!0);
          }, []),
          U = Te().account,
          B = Object(o.useContext)(we.ThemeContext),
          P = Qe(),
          M = Xe(),
          D = Ut(),
          z = Object(O.a)(D, 1)[0],
          W = Pt(),
          L = Object(O.a)(W, 1)[0],
          F = Bt(),
          q = Object(O.a)(F, 1)[0],
          H = gb(),
          V = H.independentField,
          Y = H.typedValue,
          K = H.recipient,
          J = xb(),
          Q = J.v1Trade,
          Z = J.v2Trade,
          _ = J.currencyBalances,
          $ = J.parsedAmount,
          ee = J.currencies,
          te = J.inputError,
          ne = dv(ee[Gf.INPUT], ee[Gf.OUTPUT], Y),
          ae = ne.wrapType,
          re = ne.execute,
          oe = ne.inputError,
          ie = ae !== tv.NOT_APPLICABLE,
          ce = Hf(),
          le = ie
            ? void 0
            : ((e = {}), Object(m.a)(e, Wf.v1, Q), Object(m.a)(e, Wf.v2, Z), e)[
                ce
              ],
          ue =
            ce === Wf.v2 && $f(Z, Q, fe)
              ? Wf.v1
              : ce === Wf.v1 && $f(Q, Z)
              ? Wf.v2
              : void 0,
          me = ie
            ? ((t = {}),
              Object(m.a)(t, Gf.INPUT, $),
              Object(m.a)(t, Gf.OUTPUT, $),
              t)
            : ((n = {}),
              Object(m.a)(
                n,
                Gf.INPUT,
                V === Gf.INPUT
                  ? $
                  : null === le || void 0 === le
                  ? void 0
                  : le.inputAmount
              ),
              Object(m.a)(
                n,
                Gf.OUTPUT,
                V === Gf.OUTPUT
                  ? $
                  : null === le || void 0 === le
                  ? void 0
                  : le.outputAmount
              ),
              n),
          pe = (function () {
            var e = Object(u.c)(),
              t = Object(o.useCallback)(
                function (t, n) {
                  e(
                    nb({
                      field: t,
                      currencyId:
                        n instanceof p.Token
                          ? n.address
                          : n === p.ETHER
                          ? "ETH"
                          : "",
                    })
                  );
                },
                [e]
              );
            return {
              onSwitchTokens: Object(o.useCallback)(
                function () {
                  e(ab());
                },
                [e]
              ),
              onCurrencySelection: t,
              onUserInput: Object(o.useCallback)(
                function (t, n) {
                  e(rb({ field: t, typedValue: n }));
                },
                [e]
              ),
              onChangeRecipient: Object(o.useCallback)(
                function (t) {
                  e(ib({ recipient: t }));
                },
                [e]
              ),
            };
          })(),
          be = pe.onSwitchTokens,
          ye = pe.onCurrencySelection,
          ve = pe.onUserInput,
          he = pe.onChangeRecipient,
          ge = !te,
          Ee = V === Gf.INPUT ? Gf.OUTPUT : Gf.INPUT,
          Oe = Object(o.useCallback)(
            function (e) {
              ve(Gf.INPUT, e);
            },
            [ve]
          ),
          Ae = Object(o.useCallback)(
            function (e) {
              ve(Gf.OUTPUT, e);
            },
            [ve]
          ),
          xe = Object(o.useState)({
            showConfirm: !1,
            tradeToConfirm: void 0,
            attemptingTxn: !1,
            swapErrorMessage: void 0,
            txHash: void 0,
          }),
          Ce = Object(O.a)(xe, 2),
          Ie = Ce[0],
          Se = Ie.showConfirm,
          Re = Ie.tradeToConfirm,
          Ne = Ie.swapErrorMessage,
          Ue = Ie.attemptingTxn,
          Be = Ie.txHash,
          Pe = Ce[1],
          Me =
            ((f = {}),
            Object(m.a)(f, V, Y),
            Object(m.a)(
              f,
              Ee,
              ie
                ? null !==
                    (a =
                      null === (r = me[V]) || void 0 === r
                        ? void 0
                        : r.toExact()) && void 0 !== a
                  ? a
                  : ""
                : null !==
                    (c =
                      null === (l = me[Ee]) || void 0 === l
                        ? void 0
                        : l.toSignificant(6)) && void 0 !== c
                ? c
                : ""
            ),
            f),
          De = null === le || void 0 === le ? void 0 : le.route,
          ze = Boolean(
            ee[Gf.INPUT] &&
              ee[Gf.OUTPUT] &&
              (null === (b = me[V]) || void 0 === b
                ? void 0
                : b.greaterThan(p.JSBI.BigInt(0)))
          ),
          We = !De,
          Le = (function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = Object(o.useMemo)(
                function () {
                  return e ? db(e, t)[Gf.INPUT] : void 0;
                },
                [e, t]
              ),
              a = Qf(e) === Wf.v1,
              r = Xf(e);
            return pb(n, a ? r : X);
          })(le, q),
          Fe = Object(O.a)(Le, 2),
          qe = Fe[0],
          He = Fe[1],
          Ve = Object(o.useState)(!1),
          Ye = Object(O.a)(Ve, 2),
          Ke = Ye[0],
          Je = Ye[1];
        Object(o.useEffect)(
          function () {
            qe === eb.PENDING && Je(!0);
          },
          [qe, Ke]
        );
        var Ge = Rb(_[Gf.INPUT]),
          Ze = Boolean(
            Ge &&
              (null === (y = me[Gf.INPUT]) || void 0 === y
                ? void 0
                : y.equalTo(Ge))
          ),
          _e = (function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 50,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1200,
              a = arguments.length > 3 ? arguments[3] : void 0,
              r = Te(),
              i = r.account,
              c = r.chainId,
              l = r.library,
              u = uv(e, t, n, a),
              m = qi(),
              p = yb(a),
              f = p.address,
              b = null === a ? i : f;
            return Object(o.useMemo)(
              function () {
                if (!e || !l || !i || !c)
                  return {
                    state: ev.INVALID,
                    callback: null,
                    error: "Missing dependencies",
                  };
                if (!b)
                  return null !== a
                    ? {
                        state: ev.INVALID,
                        callback: null,
                        error: "Invalid recipient",
                      }
                    : { state: ev.LOADING, callback: null, error: null };
                var t = Qf(e);
                return {
                  state: ev.VALID,
                  callback: (function () {
                    var n = Object(A.a)(
                      E.a.mark(function n() {
                        var r, o, c, l, p, f, y, v, h, g;
                        return E.a.wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.next = 2),
                                  Promise.all(
                                    u.map(function (e) {
                                      var t,
                                        n = e.parameters,
                                        a = n.methodName,
                                        r = n.args,
                                        o = n.value,
                                        i = e.contract,
                                        c = !o || Bi(o) ? {} : { value: o };
                                      return (t = i.estimateGas)[a]
                                        .apply(t, Object(s.a)(r).concat([c]))
                                        .then(function (t) {
                                          return { call: e, gasEstimate: t };
                                        })
                                        .catch(function (t) {
                                          var n;
                                          return (
                                            console.debug(
                                              "Gas estimate failed, trying eth_call to extract error",
                                              e
                                            ),
                                            (n = i.callStatic)[a]
                                              .apply(
                                                n,
                                                Object(s.a)(r).concat([c])
                                              )
                                              .then(function (n) {
                                                return (
                                                  console.debug(
                                                    "Unexpected successful call after failed estimate gas",
                                                    e,
                                                    t,
                                                    n
                                                  ),
                                                  {
                                                    call: e,
                                                    error: new Error(
                                                      "Unexpected issue with estimating the gas. Please try again."
                                                    ),
                                                  }
                                                );
                                              })
                                              .catch(function (t) {
                                                var n;
                                                switch (
                                                  (console.debug(
                                                    "Call threw error",
                                                    e,
                                                    t
                                                  ),
                                                  t.reason)
                                                ) {
                                                  case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                                                  case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                                    n =
                                                      "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                                                    break;
                                                  default:
                                                    n =
                                                      "The transaction cannot succeed due to error: ".concat(
                                                        t.reason,
                                                        ". This is probably an issue with one of the tokens you are swapping."
                                                      );
                                                }
                                                return {
                                                  call: e,
                                                  error: new Error(n),
                                                };
                                              })
                                          );
                                        });
                                    })
                                  )
                                );
                              case 2:
                                if (
                                  ((r = n.sent),
                                  (o = r.find(function (e, t, n) {
                                    return (
                                      "gasEstimate" in e &&
                                      (t === n.length - 1 ||
                                        "gasEstimate" in n[t + 1])
                                    );
                                  })))
                                ) {
                                  n.next = 9;
                                  break;
                                }
                                if (
                                  !(
                                    (c = r.filter(function (e) {
                                      return "error" in e;
                                    })).length > 0
                                  )
                                ) {
                                  n.next = 8;
                                  break;
                                }
                                throw c[c.length - 1].error;
                              case 8:
                                throw new Error(
                                  "Unexpected error. Please contact support: none of the calls threw an error"
                                );
                              case 9:
                                return (
                                  (l = o.call),
                                  (p = l.contract),
                                  (f = l.parameters),
                                  (y = f.methodName),
                                  (v = f.args),
                                  (h = f.value),
                                  (g = o.gasEstimate),
                                  n.abrupt(
                                    "return",
                                    p[y]
                                      .apply(
                                        p,
                                        Object(s.a)(v).concat([
                                          Object(d.a)(
                                            { gasLimit: Qt(g) },
                                            h && !Bi(h)
                                              ? { value: h, from: i }
                                              : { from: i }
                                          ),
                                        ])
                                      )
                                      .then(function (n) {
                                        var r = e.inputAmount.currency.symbol,
                                          o = e.outputAmount.currency.symbol,
                                          c = e.inputAmount.toSignificant(3),
                                          l = e.outputAmount.toSignificant(3),
                                          u = "Swap "
                                            .concat(c, " ")
                                            .concat(r, " for ")
                                            .concat(l, " ")
                                            .concat(o),
                                          s =
                                            b === i
                                              ? u
                                              : ""
                                                  .concat(u, " to ")
                                                  .concat(
                                                    a && Vt(a) ? Jt(a) : a
                                                  ),
                                          d =
                                            t === Wf.v2
                                              ? s
                                              : ""
                                                  .concat(s, " on ")
                                                  .concat(t.toUpperCase());
                                        return m(n, { summary: d }), n.hash;
                                      })
                                      .catch(function (e) {
                                        throw 4001 ===
                                          (null === e || void 0 === e
                                            ? void 0
                                            : e.code)
                                          ? new Error("Transaction rejected.")
                                          : (console.error(
                                              "Swap failed",
                                              e,
                                              y,
                                              v,
                                              h
                                            ),
                                            new Error(
                                              "Swap failed: ".concat(e.message)
                                            ));
                                      })
                                  )
                                );
                              case 11:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      })
                    );
                    return function () {
                      return n.apply(this, arguments);
                    };
                  })(),
                  error: null,
                };
              },
              [e, l, i, c, b, a, u, m]
            );
          })(le, q, L, K),
          $e = _e.callback,
          et = _e.error,
          tt = sb(le).priceImpactWithoutFee,
          nt = Object(o.useCallback)(
            function () {
              (tt &&
                !(function (e) {
                  return e.lessThan(de)
                    ? !!e.lessThan(se) ||
                        window.confirm(
                          "This swap has a price impact of at least ".concat(
                            se.toFixed(0),
                            "%. Please confirm that you would like to continue with this swap."
                          )
                        )
                    : "confirm" ===
                        window.prompt(
                          "This swap has a price impact of at least ".concat(
                            de.toFixed(0),
                            '%. Please type the word "confirm" to continue with this swap.'
                          )
                        );
                })(tt)) ||
                ($e &&
                  (Pe({
                    attemptingTxn: !0,
                    tradeToConfirm: Re,
                    showConfirm: Se,
                    swapErrorMessage: void 0,
                    txHash: void 0,
                  }),
                  $e()
                    .then(function (e) {
                      Pe({
                        attemptingTxn: !1,
                        tradeToConfirm: Re,
                        showConfirm: Se,
                        swapErrorMessage: void 0,
                        txHash: e,
                      });
                    })
                    .catch(function (e) {
                      Pe({
                        attemptingTxn: !1,
                        tradeToConfirm: Re,
                        showConfirm: Se,
                        swapErrorMessage: e.message,
                        txHash: void 0,
                      });
                    })));
            },
            [Re, tt, Se, $e]
          ),
          at = Object(o.useState)(!1),
          rt = Object(O.a)(at, 2),
          ot = rt[0],
          it = rt[1],
          ct = mb(tt),
          lt =
            !te &&
            (qe === eb.NOT_APPROVED ||
              qe === eb.PENDING ||
              (Ke && qe === eb.APPROVED)) &&
            !(ct > 3 && !z),
          ut = Object(o.useCallback)(
            function () {
              Pe({
                showConfirm: !1,
                tradeToConfirm: Re,
                attemptingTxn: Ue,
                swapErrorMessage: Ne,
                txHash: Be,
              }),
                Be && ve(Gf.INPUT, "");
            },
            [Ue, ve, Ne, Re, Be]
          ),
          st = Object(o.useCallback)(
            function () {
              Pe({
                tradeToConfirm: le,
                swapErrorMessage: Ne,
                txHash: Be,
                attemptingTxn: Ue,
                showConfirm: Se,
              });
            },
            [Ue, Se, Ne, le, Be]
          ),
          dt = Object(o.useCallback)(
            function (e) {
              Je(!1), ye(Gf.INPUT, e);
            },
            [ye]
          ),
          mt = Object(o.useCallback)(
            function () {
              Ge && ve(Gf.INPUT, Ge.toExact());
            },
            [Ge, ve]
          ),
          pt = Object(o.useCallback)(
            function (e) {
              return ye(Gf.OUTPUT, e);
            },
            [ye]
          ),
          ft = window.ethereum,
          bt = Object(o.useCallback)(function () {
            return (function (e, t) {
              return mv.apply(this, arguments);
            })(ft, G);
          }, []),
          yt =
            (null === (v = ee[Gf.INPUT]) || void 0 === v
              ? void 0
              : v.symbol) === G.symbol ||
            (null === (h = ee[Gf.OUTPUT]) || void 0 === h
              ? void 0
              : h.symbol) === G.symbol;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(iv, {
            isOpen: R.length > 0 && !I,
            tokens: R,
            onConfirm: N,
          }),
          yt &&
            i.a.createElement(
              vo,
              {
                onClick: function () {
                  return bt();
                },
                style: {
                  width: "auto",
                  position: "absolute",
                  marginTop: "-20px",
                  marginRight: je.isMobile ? "" : "-200px",
                  whiteSpace: "nowrap",
                },
              },
              "Add HNY to MetaMask"
            ),
          i.a.createElement(
            zb,
            null,
            i.a.createElement(Xp, { active: "swap" }),
            i.a.createElement(
              vf,
              { id: "swap-page" },
              i.a.createElement(Fy, {
                isOpen: Se,
                trade: le,
                originalTrade: Re,
                onAcceptChanges: st,
                attemptingTxn: Ue,
                txHash: Be,
                recipient: K,
                allowedSlippage: q,
                onConfirm: nt,
                swapErrorMessage: Ne,
                onDismiss: ut,
              }),
              i.a.createElement(
                xr,
                { gap: "md" },
                i.a.createElement(Vp, {
                  label: V !== Gf.OUTPUT || ie ? "From" : "From (estimated)",
                  value: Me[Gf.INPUT],
                  showMaxButton: !Ze,
                  currency: ee[Gf.INPUT],
                  onUserInput: Oe,
                  onMax: mt,
                  onCurrencySelect: dt,
                  otherCurrency: ee[Gf.OUTPUT],
                  id: "swap-currency-input",
                }),
                i.a.createElement(
                  xr,
                  { justify: "space-between" },
                  i.a.createElement(
                    Cr,
                    { justify: "space-between", style: { padding: "0 1rem" } },
                    i.a.createElement(
                      hf,
                      { clickable: !0 },
                      i.a.createElement(Ey.a, {
                        size: "16",
                        onClick: function () {
                          Je(!1), be();
                        },
                        color:
                          ee[Gf.INPUT] && ee[Gf.OUTPUT] ? B.primary1 : B.text2,
                      })
                    ),
                    null === K && !ie && z
                      ? i.a.createElement(
                          Ca,
                          {
                            id: "add-recipient-button",
                            onClick: function () {
                              return he("");
                            },
                          },
                          "+ Add a send (optional)"
                        )
                      : null
                  )
                ),
                i.a.createElement(Vp, {
                  value: Me[Gf.OUTPUT],
                  onUserInput: Ae,
                  label: V !== Gf.INPUT || ie ? "To" : "To (estimated)",
                  showMaxButton: !1,
                  currency: ee[Gf.OUTPUT],
                  onCurrencySelect: pt,
                  otherCurrency: ee[Gf.INPUT],
                  id: "swap-currency-output",
                }),
                null === K || ie
                  ? null
                  : i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        Cr,
                        {
                          justify: "space-between",
                          style: { padding: "0 1rem" },
                        },
                        i.a.createElement(
                          hf,
                          { clickable: !1 },
                          i.a.createElement(Ey.a, {
                            size: "16",
                            color: B.text2,
                          })
                        ),
                        i.a.createElement(
                          Ca,
                          {
                            id: "remove-recipient-button",
                            onClick: function () {
                              return he(null);
                            },
                          },
                          "- Remove send"
                        )
                      ),
                      i.a.createElement(My, {
                        id: "recipient",
                        value: K,
                        onChange: he,
                      })
                    ),
                ie
                  ? null
                  : i.a.createElement(
                      qn,
                      {
                        padding: ".25rem .75rem 0 .75rem",
                        borderRadius: "20px",
                      },
                      i.a.createElement(
                        xr,
                        { gap: "4px" },
                        i.a.createElement(
                          kr,
                          { align: "center" },
                          i.a.createElement(
                            ke.b,
                            { fontWeight: 500, fontSize: 14, color: B.text2 },
                            "Price"
                          ),
                          i.a.createElement($y, {
                            inputCurrency: ee[Gf.INPUT],
                            outputCurrency: ee[Gf.OUTPUT],
                            price:
                              null === le || void 0 === le
                                ? void 0
                                : le.executionPrice,
                            showInverted: ot,
                            setShowInverted: it,
                          })
                        ),
                        50 !== q &&
                          i.a.createElement(
                            kr,
                            { align: "center" },
                            i.a.createElement(
                              Lb,
                              {
                                fontWeight: 500,
                                fontSize: 14,
                                color: B.text2,
                                onClick: M,
                              },
                              "Slippage Tolerance"
                            ),
                            i.a.createElement(
                              Lb,
                              {
                                fontWeight: 500,
                                fontSize: 14,
                                color: B.text2,
                                onClick: M,
                              },
                              q / 100,
                              "%"
                            )
                          )
                      )
                    )
              ),
              i.a.createElement(
                Ef,
                null,
                U
                  ? ie
                    ? i.a.createElement(
                        lo,
                        { disabled: Boolean(oe), onClick: re },
                        null !== oe && void 0 !== oe
                          ? oe
                          : ae === tv.WRAP
                          ? "Wrap"
                          : ae === tv.UNWRAP
                          ? "Unwrap"
                          : null
                      )
                    : We && ze
                    ? i.a.createElement(
                        Vn,
                        { style: { textAlign: "center" } },
                        i.a.createElement(
                          lr,
                          { mb: "4px" },
                          "Insufficient liquidity for this trade."
                        )
                      )
                    : lt
                    ? i.a.createElement(
                        kr,
                        null,
                        i.a.createElement(
                          lo,
                          {
                            onClick: He,
                            disabled: qe !== eb.NOT_APPROVED || Ke,
                            width: "48%",
                            altDisbaledStyle: qe === eb.PENDING,
                          },
                          qe === eb.PENDING
                            ? i.a.createElement(jf, null, "Approving")
                            : Ke && qe === eb.APPROVED
                            ? "Approved"
                            : "Approve " +
                              (null === (g = ee[Gf.INPUT]) || void 0 === g
                                ? void 0
                                : g.symbol)
                        ),
                        i.a.createElement(
                          go,
                          {
                            onClick: function () {
                              z
                                ? nt()
                                : Pe({
                                    tradeToConfirm: le,
                                    attemptingTxn: !1,
                                    swapErrorMessage: void 0,
                                    showConfirm: !0,
                                    txHash: void 0,
                                  });
                            },
                            width: "48%",
                            id: "swap-button",
                            disabled:
                              !ge || qe !== eb.APPROVED || (ct > 3 && !z),
                            error: ge && ct > 2,
                          },
                          i.a.createElement(
                            ke.b,
                            { fontSize: 16, fontWeight: 500 },
                            ct > 3 && !z
                              ? "Price Impact High"
                              : "Swap".concat(ct > 2 ? " Anyway" : "")
                          )
                        )
                      )
                    : i.a.createElement(
                        go,
                        {
                          onClick: function () {
                            z
                              ? nt()
                              : Pe({
                                  tradeToConfirm: le,
                                  attemptingTxn: !1,
                                  swapErrorMessage: void 0,
                                  showConfirm: !0,
                                  txHash: void 0,
                                });
                          },
                          id: "swap-button",
                          disabled: !ge || (ct > 3 && !z) || !!et,
                          error: ge && ct > 2 && !et,
                        },
                        i.a.createElement(
                          ke.b,
                          { fontSize: 20, fontWeight: 500 },
                          te ||
                            (ct > 3 && !z
                              ? "Price Impact Too High"
                              : "Swap".concat(ct > 2 ? " Anyway" : ""))
                        )
                      )
                  : i.a.createElement(uo, { onClick: P }, "Connect Wallet"),
                z && Ne ? i.a.createElement(Tf, { error: Ne }) : null,
                ue && i.a.createElement(_y, { version: ue })
              )
            )
          ),
          i.a.createElement(Zy, { trade: le })
        );
      }
      function fv(e) {
        var t = e.location;
        return i.a.createElement(xe.a, {
          to: Object(d.a)(Object(d.a)({}, t), {}, { pathname: "/swap" }),
        });
      }
      function bv(e) {
        var t = e.location.search,
          n = e.match.params.outputCurrency;
        return i.a.createElement(xe.a, {
          to: Object(d.a)(
            Object(d.a)({}, e.location),
            {},
            {
              pathname: "/swap",
              search:
                t && t.length > 1
                  ? "".concat(t, "&outputCurrency=").concat(n)
                  : "?outputCurrency=".concat(n),
            }
          ),
        });
      }
      var yv,
        vv,
        hv,
        gv,
        Ev,
        Ov = n(172),
        Av = n.n(Ov),
        xv = we.default.div(
          yv ||
            (yv = Object(Oe.a)([
              "\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n",
            ]))
        ),
        jv = we.default.div(
          vv ||
            (vv = Object(Oe.a)([
              "\n  ",
              "\n  width: 100%;\n  justify-content: space-between;\n",
            ])),
          function (e) {
            return e.theme.flexRowNoWrap;
          }
        ),
        wv = we.default.div(
          hv ||
            (hv = Object(Oe.a)([
              "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-top: 160px;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 10;\n  margin-top: ",
              ";\n\n  ",
              ";\n\n  z-index: 1;\n",
            ])),
          je.isMobile ? "20px" : "",
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              gv || (gv = Object(Oe.a)(["\n      padding: 16px;\n  "]))
            );
          }
        ),
        kv = we.default.div(
          Ev || (Ev = Object(Oe.a)(["\n  margin-top: 5rem;\n"]))
        );
      function Tv() {
        return i.a.createElement(
          o.Suspense,
          { fallback: null },
          i.a.createElement(
            Ae.a,
            null,
            i.a.createElement(xe.b, { component: ed }),
            i.a.createElement(
              xv,
              null,
              i.a.createElement(jv, null, i.a.createElement(vs, null)),
              i.a.createElement(
                wv,
                null,
                i.a.createElement(Xs, null),
                i.a.createElement(
                  _s,
                  null,
                  i.a.createElement(
                    xe.d,
                    null,
                    i.a.createElement(xe.b, {
                      exact: !0,
                      strict: !0,
                      path: "/swap",
                      component: pv,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      strict: !0,
                      path: "/swap/:outputCurrency",
                      component: bv,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      strict: !0,
                      path: "/send",
                      component: fv,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      strict: !0,
                      path: "/find",
                      component: vy,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      strict: !0,
                      path: "/pool",
                      component: yy,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      strict: !0,
                      path: "/create",
                      component: Kb,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      path: "/add",
                      component: Yb,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      path: "/add/:currencyIdA",
                      component: Qb,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      path: "/add/:currencyIdA/:currencyIdB",
                      component: Xb,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      strict: !0,
                      path: "/remove/v1/:address",
                      component: by,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      strict: !0,
                      path: "/remove/:tokens",
                      component: Ry,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      strict: !0,
                      path: "/remove/:currencyIdA/:currencyIdB",
                      component: wy,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      strict: !0,
                      path: "/migrate/v1",
                      component: _b,
                    }),
                    i.a.createElement(xe.b, {
                      exact: !0,
                      strict: !0,
                      path: "/migrate/v1/:address",
                      component: ly,
                    }),
                    i.a.createElement(xe.b, { component: fv })
                  )
                ),
                i.a.createElement(
                  "a",
                  {
                    href: "https://www.immunefi.com/bounty/baofinance",
                    target: "_blank",
                    rel: "noreferrer",
                  },
                  i.a.createElement("img", { src: Av.a, height: "100px" })
                ),
                i.a.createElement(kv, null)
              )
            )
          )
        );
      }
      var Cv = n(184),
        Iv = Object(Fe.c)(
          {
            blockNumber: {},
            popupList: [],
            walletModalOpen: !1,
            settingsMenuOpen: !1,
          },
          function (e) {
            return e
              .addCase(qe, function (e, t) {
                var n = t.payload,
                  a = n.chainId,
                  r = n.blockNumber;
                "number" !== typeof e.blockNumber[a]
                  ? (e.blockNumber[a] = r)
                  : (e.blockNumber[a] = Math.max(r, e.blockNumber[a]));
              })
              .addCase(He, function (e) {
                e.walletModalOpen = !e.walletModalOpen;
              })
              .addCase(Ve, function (e) {
                e.settingsMenuOpen = !e.settingsMenuOpen;
              })
              .addCase(Ye, function (e, t) {
                var n = t.payload,
                  a = n.content,
                  r = n.key,
                  o = n.removeAfterMs,
                  i = void 0 === o ? 15e3 : o;
                e.popupList = (
                  r
                    ? e.popupList.filter(function (e) {
                        return e.key !== r;
                      })
                    : e.popupList
                ).concat([
                  {
                    key: r || Object(Fe.e)(),
                    show: !0,
                    content: a,
                    removeAfterMs: i,
                  },
                ]);
              })
              .addCase(Ke, function (e, t) {
                var n = t.payload.key;
                e.popupList.forEach(function (e) {
                  e.key === n && (e.show = !1);
                });
              });
          }
        ),
        Sv = Object(Fe.b)("global/updateVersion"),
        Rv = function () {
          return new Date().getTime();
        };
      function Nv(e, t) {
        return "".concat(e, ";").concat(t);
      }
      var Uv,
        Bv = {
          userDarkMode: null,
          matchesDarkMode: !1,
          userExpertMode: !1,
          userSlippageTolerance: 50,
          userDeadline: 1200,
          tokens: {},
          pairs: {},
          timestamp: Rv(),
        },
        Pv = Object(Fe.c)(Bv, function (e) {
          return e
            .addCase(Sv, function (e) {
              "number" !== typeof e.userSlippageTolerance &&
                (e.userSlippageTolerance = 50),
                "number" !== typeof e.userDeadline && (e.userDeadline = 1200),
                (e.lastUpdateVersionTimestamp = Rv());
            })
            .addCase(Et, function (e, t) {
              (e.userDarkMode = t.payload.userDarkMode), (e.timestamp = Rv());
            })
            .addCase(gt, function (e, t) {
              (e.matchesDarkMode = t.payload.matchesDarkMode),
                (e.timestamp = Rv());
            })
            .addCase(Ot, function (e, t) {
              (e.userExpertMode = t.payload.userExpertMode),
                (e.timestamp = Rv());
            })
            .addCase(At, function (e, t) {
              (e.userSlippageTolerance = t.payload.userSlippageTolerance),
                (e.timestamp = Rv());
            })
            .addCase(xt, function (e, t) {
              (e.userDeadline = t.payload.userDeadline), (e.timestamp = Rv());
            })
            .addCase(jt, function (e, t) {
              var n = t.payload.serializedToken;
              (e.tokens[n.chainId] = e.tokens[n.chainId] || {}),
                (e.tokens[n.chainId][n.address] = n),
                (e.timestamp = Rv());
            })
            .addCase(wt, function (e, t) {
              var n = t.payload,
                a = n.address,
                r = n.chainId;
              (e.tokens[r] = e.tokens[r] || {}),
                delete e.tokens[r][a],
                (e.timestamp = Rv());
            })
            .addCase(kt, function (e, t) {
              var n = t.payload.serializedPair;
              if (
                n.token0.chainId === n.token1.chainId &&
                n.token0.address !== n.token1.address
              ) {
                var a = n.token0.chainId;
                (e.pairs[a] = e.pairs[a] || {}),
                  (e.pairs[a][Nv(n.token0.address, n.token1.address)] = n);
              }
              e.timestamp = Rv();
            })
            .addCase(Tt, function (e, t) {
              var n = t.payload,
                a = n.chainId,
                r = n.tokenAAddress,
                o = n.tokenBAddress;
              e.pairs[a] &&
                (delete e.pairs[a][Nv(r, o)], delete e.pairs[a][Nv(o, r)]),
                (e.timestamp = Rv());
            });
        }),
        Mv = function () {
          return new Date().getTime();
        },
        Dv = Object(Fe.c)({}, function (e) {
          return e
            .addCase(zi, function (e, t) {
              var n,
                a,
                r = t.payload,
                o = r.chainId,
                i = r.from,
                c = r.hash,
                l = r.approval,
                u = r.summary;
              if (null === (n = e[o]) || void 0 === n ? void 0 : n[c])
                throw Error("Attempted to add existing transaction.");
              var s = null !== (a = e[o]) && void 0 !== a ? a : {};
              (s[c] = {
                hash: c,
                approval: l,
                summary: u,
                from: i,
                addedTime: Mv(),
              }),
                (e[o] = s);
            })
            .addCase(Wi, function (e, t) {
              var n = t.payload.chainId;
              e[n] && (e[n] = {});
            })
            .addCase(Fi, function (e, t) {
              var n,
                a = t.payload,
                r = a.chainId,
                o = a.hash,
                i = a.blockNumber,
                c = null === (n = e[r]) || void 0 === n ? void 0 : n[o];
              c &&
                (c.lastCheckedBlockNumber
                  ? (c.lastCheckedBlockNumber = Math.max(
                      i,
                      c.lastCheckedBlockNumber
                    ))
                  : (c.lastCheckedBlockNumber = i));
            })
            .addCase(Li, function (e, t) {
              var n,
                a = t.payload,
                r = a.hash,
                o = a.chainId,
                i = a.receipt,
                c = null === (n = e[o]) || void 0 === n ? void 0 : n[r];
              c && ((c.receipt = i), (c.confirmedTime = Mv()));
            });
        }),
        zv =
          ((Uv = { independentField: Gf.INPUT, typedValue: "" }),
          Object(m.a)(Uv, Gf.INPUT, { currencyId: "" }),
          Object(m.a)(Uv, Gf.OUTPUT, { currencyId: "" }),
          Object(m.a)(Uv, "recipient", null),
          Uv),
        Wv = Object(Fe.c)(zv, function (e) {
          return e
            .addCase(ob, function (e, t) {
              var n,
                a = t.payload,
                r = a.typedValue,
                o = a.recipient,
                i = a.field,
                c = a.inputCurrencyId,
                l = a.outputCurrencyId;
              return (
                (n = {}),
                Object(m.a)(n, Gf.INPUT, { currencyId: c }),
                Object(m.a)(n, Gf.OUTPUT, { currencyId: l }),
                Object(m.a)(n, "independentField", i),
                Object(m.a)(n, "typedValue", r),
                Object(m.a)(n, "recipient", o),
                n
              );
            })
            .addCase(nb, function (e, t) {
              var n,
                a = t.payload,
                r = a.currencyId,
                o = a.field,
                i = o === Gf.INPUT ? Gf.OUTPUT : Gf.INPUT;
              return r === e[i].currencyId
                ? Object(d.a)(
                    Object(d.a)({}, e),
                    {},
                    ((n = {
                      independentField:
                        e.independentField === Gf.INPUT ? Gf.OUTPUT : Gf.INPUT,
                    }),
                    Object(m.a)(n, o, { currencyId: r }),
                    Object(m.a)(n, i, { currencyId: e[o].currencyId }),
                    n)
                  )
                : Object(d.a)(
                    Object(d.a)({}, e),
                    {},
                    Object(m.a)({}, o, { currencyId: r })
                  );
            })
            .addCase(ab, function (e) {
              var t;
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                ((t = {
                  independentField:
                    e.independentField === Gf.INPUT ? Gf.OUTPUT : Gf.INPUT,
                }),
                Object(m.a)(t, Gf.INPUT, {
                  currencyId: e[Gf.OUTPUT].currencyId,
                }),
                Object(m.a)(t, Gf.OUTPUT, {
                  currencyId: e[Gf.INPUT].currencyId,
                }),
                t)
              );
            })
            .addCase(rb, function (e, t) {
              var n = t.payload,
                a = n.field,
                r = n.typedValue;
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                { independentField: a, typedValue: r }
              );
            })
            .addCase(ib, function (e, t) {
              var n = t.payload.recipient;
              e.recipient = n;
            });
        }),
        Lv = {
          independentField: tb.CURRENCY_A,
          typedValue: "",
          otherTypedValue: "",
        },
        Fv = Object(Fe.c)(Lv, function (e) {
          return e
            .addCase(bb, function () {
              return Lv;
            })
            .addCase(fb, function (e, t) {
              var n = t.payload,
                a = n.field,
                r = n.typedValue;
              return n.noLiquidity
                ? a === e.independentField
                  ? Object(d.a)(
                      Object(d.a)({}, e),
                      {},
                      { independentField: a, typedValue: r }
                    )
                  : Object(d.a)(
                      Object(d.a)({}, e),
                      {},
                      {
                        independentField: a,
                        typedValue: r,
                        otherTypedValue: e.typedValue,
                      }
                    )
                : Object(d.a)(
                    Object(d.a)({}, e),
                    {},
                    { independentField: a, typedValue: r, otherTypedValue: "" }
                  );
            });
        }),
        qv =
          "https://raw.githubusercontent.com/baofinance/tokenlists/main/xdai.json",
        Hv = [qv],
        Vv = n(255),
        Yv = {
          error: null,
          current: null,
          loadingRequestId: null,
          pendingUpdate: null,
        },
        Kv = {
          lastInitializedDefaultListOfLists: Hv,
          byUrl: Object(d.a)(
            Object(d.a)(
              {},
              Hv.reduce(function (e, t) {
                return (e[t] = Yv), e;
              }, {})
            ),
            {},
            Object(m.a)({}, qv, {
              error: null,
              current: Vv,
              loadingRequestId: null,
              pendingUpdate: null,
            })
          ),
          selectedListUrl: void 0,
        },
        Jv = Object(Fe.c)(Kv, function (e) {
          return e
            .addCase(gs.pending, function (e, t) {
              var n = t.payload,
                a = n.requestId,
                r = n.url;
              e.byUrl[r] = Object(d.a)(
                Object(d.a)({ current: null, pendingUpdate: null }, e.byUrl[r]),
                {},
                { loadingRequestId: a, error: null }
              );
            })
            .addCase(gs.fulfilled, function (e, t) {
              var n,
                a,
                r = t.payload,
                o = r.requestId,
                i = r.tokenList,
                c = r.url,
                l =
                  null === (n = e.byUrl[c]) || void 0 === n
                    ? void 0
                    : n.current,
                u =
                  null === (a = e.byUrl[c]) || void 0 === a
                    ? void 0
                    : a.loadingRequestId;
              if (l) {
                if (Object(hs.c)(l.version, i.version) === hs.a.NONE) return;
                (null !== u && u !== o) ||
                  (e.byUrl[c] = Object(d.a)(
                    Object(d.a)({}, e.byUrl[c]),
                    {},
                    {
                      loadingRequestId: null,
                      error: null,
                      current: l,
                      pendingUpdate: i,
                    }
                  ));
              } else e.byUrl[c] = Object(d.a)(Object(d.a)({}, e.byUrl[c]), {}, { loadingRequestId: null, error: null, current: i, pendingUpdate: null });
            })
            .addCase(gs.rejected, function (e, t) {
              var n,
                a = t.payload,
                r = a.url,
                o = a.requestId,
                i = a.errorMessage;
              (null === (n = e.byUrl[r]) || void 0 === n
                ? void 0
                : n.loadingRequestId) === o &&
                (e.byUrl[r] = Object(d.a)(
                  Object(d.a)({}, e.byUrl[r]),
                  {},
                  {
                    loadingRequestId: null,
                    error: i,
                    current: null,
                    pendingUpdate: null,
                  }
                ));
            })
            .addCase(xs, function (e, t) {
              var n = t.payload;
              (e.selectedListUrl = n), e.byUrl[n] || (e.byUrl[n] = Yv);
            })
            .addCase(Os, function (e, t) {
              var n = t.payload;
              e.byUrl[n] || (e.byUrl[n] = Yv);
            })
            .addCase(As, function (e, t) {
              var n = t.payload;
              e.byUrl[n] && delete e.byUrl[n],
                e.selectedListUrl === n &&
                  (e.selectedListUrl = Object.keys(e.byUrl)[0]);
            })
            .addCase(Es, function (e, t) {
              var n,
                a = t.payload;
              if (
                !(null === (n = e.byUrl[a]) || void 0 === n
                  ? void 0
                  : n.pendingUpdate)
              )
                throw new Error(
                  "accept list update called without pending update"
                );
              e.byUrl[a] = Object(d.a)(
                Object(d.a)({}, e.byUrl[a]),
                {},
                { pendingUpdate: null, current: e.byUrl[a].pendingUpdate }
              );
            })
            .addCase(Sv, function (e) {
              if (e.lastInitializedDefaultListOfLists) {
                if (e.lastInitializedDefaultListOfLists) {
                  var t = e.lastInitializedDefaultListOfLists.reduce(function (
                      e,
                      t
                    ) {
                      return e.add(t);
                    },
                    new Set()),
                    n = Hv.reduce(function (e, t) {
                      return e.add(t);
                    }, new Set());
                  Hv.forEach(function (n) {
                    t.has(n) || (e.byUrl[n] = Yv);
                  }),
                    e.lastInitializedDefaultListOfLists.forEach(function (t) {
                      n.has(t) || delete e.byUrl[t];
                    });
                }
              } else (e.byUrl = Kv.byUrl), (e.selectedListUrl = void 0);
              e.lastInitializedDefaultListOfLists = Hv;
            });
        }),
        Qv = { independentField: gy.LIQUIDITY_PERCENT, typedValue: "0" },
        Xv = Object(Fe.c)(Qv, function (e) {
          return e.addCase(xy, function (e, t) {
            var n = t.payload,
              a = n.field,
              r = n.typedValue;
            return Object(d.a)(
              Object(d.a)({}, e),
              {},
              { independentField: a, typedValue: r }
            );
          });
        }),
        Gv = Object(Fe.c)({ callResults: {} }, function (e) {
          return e
            .addCase(tt, function (e, t) {
              var n,
                a = t.payload,
                r = a.calls,
                o = a.chainId,
                i = a.options,
                c = (i = void 0 === i ? {} : i).blocksPerFetch,
                l = void 0 === c ? 1 : c,
                u = e.callListeners ? e.callListeners : (e.callListeners = {});
              (u[o] = null !== (n = u[o]) && void 0 !== n ? n : {}),
                r.forEach(function (e) {
                  var t,
                    n,
                    a = $e(e);
                  (u[o][a] = null !== (t = u[o][a]) && void 0 !== t ? t : {}),
                    (u[o][a][l] =
                      (null !== (n = u[o][a][l]) && void 0 !== n ? n : 0) + 1);
                });
            })
            .addCase(nt, function (e, t) {
              var n = t.payload,
                a = n.chainId,
                r = n.calls,
                o = n.options,
                i = (o = void 0 === o ? {} : o).blocksPerFetch,
                c = void 0 === i ? 1 : i,
                l = e.callListeners ? e.callListeners : (e.callListeners = {});
              l[a] &&
                r.forEach(function (e) {
                  var t = $e(e);
                  l[a][t] &&
                    l[a][t][c] &&
                    (1 === l[a][t][c] ? delete l[a][t][c] : l[a][t][c]--);
                });
            })
            .addCase(at, function (e, t) {
              var n,
                a = t.payload,
                r = a.chainId,
                o = a.fetchingBlockNumber,
                i = a.calls;
              (e.callResults[r] =
                null !== (n = e.callResults[r]) && void 0 !== n ? n : {}),
                i.forEach(function (t) {
                  var n = $e(t),
                    a = e.callResults[r][n];
                  if (a) {
                    var i;
                    if (
                      (null !== (i = a.fetchingBlockNumber) && void 0 !== i
                        ? i
                        : 0) >= o
                    )
                      return;
                    e.callResults[r][n].fetchingBlockNumber = o;
                  } else e.callResults[r][n] = { fetchingBlockNumber: o };
                });
            })
            .addCase(rt, function (e, t) {
              var n,
                a = t.payload,
                r = a.fetchingBlockNumber,
                o = a.chainId,
                i = a.calls;
              (e.callResults[o] =
                null !== (n = e.callResults[o]) && void 0 !== n ? n : {}),
                i.forEach(function (t) {
                  var n = $e(t),
                    a = e.callResults[o][n];
                  a &&
                    a.fetchingBlockNumber === r &&
                    (delete a.fetchingBlockNumber,
                    (a.data = null),
                    (a.blockNumber = r));
                });
            })
            .addCase(ot, function (e, t) {
              var n,
                a = t.payload,
                r = a.chainId,
                o = a.results,
                i = a.blockNumber;
              (e.callResults[r] =
                null !== (n = e.callResults[r]) && void 0 !== n ? n : {}),
                Object.keys(o).forEach(function (t) {
                  var n,
                    a = e.callResults[r][t];
                  (null !==
                    (n = null === a || void 0 === a ? void 0 : a.blockNumber) &&
                  void 0 !== n
                    ? n
                    : 0) > i ||
                    (e.callResults[r][t] = { data: o[t], blockNumber: i });
                });
            });
        }),
        Zv = ["user", "transactions", "lists"],
        _v = Object(Fe.a)({
          reducer: {
            application: Iv,
            user: Pv,
            transactions: Dv,
            swap: Wv,
            mint: Fv,
            burn: Xv,
            multicall: Gv,
            lists: Jv,
          },
          middleware: [].concat(Object(s.a)(Object(Fe.d)({ thunk: !1 })), [
            Object(Cv.save)({ states: Zv }),
          ]),
          preloadedState: Object(Cv.load)({ states: Zv }),
        });
      _v.dispatch(Sv());
      var $v = _v,
        eh = "visibilityState" in document;
      function th() {
        return !eh || "hidden" !== document.visibilityState;
      }
      function nh() {
        var e = Object(o.useState)(th()),
          t = Object(O.a)(e, 2),
          n = t[0],
          a = t[1],
          r = Object(o.useCallback)(
            function () {
              a(th());
            },
            [a]
          );
        return (
          Object(o.useEffect)(
            function () {
              if (eh)
                return (
                  document.addEventListener("visibilitychange", r),
                  function () {
                    document.removeEventListener("visibilitychange", r);
                  }
                );
            },
            [r]
          ),
          n
        );
      }
      function ah() {
        var e = Te(),
          t = e.library,
          n = e.chainId,
          a = Object(u.c)(),
          r = nh(),
          i = Object(o.useState)({ chainId: n, blockNumber: null }),
          c = Object(O.a)(i, 2),
          l = c[0],
          s = c[1],
          d = Object(o.useCallback)(
            function (e) {
              s(function (t) {
                return n === t.chainId
                  ? "number" !== typeof t.blockNumber
                    ? { chainId: n, blockNumber: e }
                    : { chainId: n, blockNumber: Math.max(e, t.blockNumber) }
                  : t;
              });
            },
            [n, s]
          );
        Object(o.useEffect)(
          function () {
            if (t && n && r)
              return (
                s({ chainId: n, blockNumber: null }),
                t
                  .getBlockNumber()
                  .then(d)
                  .catch(function (e) {
                    return console.error(
                      "Failed to get block number for chainId: ".concat(n),
                      e
                    );
                  }),
                t.on("block", d),
                function () {
                  t.removeListener("block", d);
                }
              );
          },
          [a, n, t, d, r]
        );
        var m = Pi(l, 100);
        return (
          Object(o.useEffect)(
            function () {
              m.chainId &&
                m.blockNumber &&
                r &&
                a(qe({ chainId: m.chainId, blockNumber: m.blockNumber }));
            },
            [r, a, m.blockNumber, m.chainId]
          ),
          null
        );
      }
      function rh() {
        var e = Te().library,
          t = Object(u.c)(),
          n = Object(u.d)(function (e) {
            return e.lists.byUrl;
          }),
          a = nh(),
          r = _m();
        return (
          na(
            Object(o.useCallback)(
              function () {
                a &&
                  Object.keys(n).forEach(function (e) {
                    return r(e).catch(function (e) {
                      return console.debug("interval list fetching error", e);
                    });
                  });
              },
              [r, a, n]
            ),
            e ? 6e5 : null
          ),
          Object(o.useEffect)(
            function () {
              Object.keys(n).forEach(function (e) {
                var t = n[e];
                t.current ||
                  t.loadingRequestId ||
                  t.error ||
                  r(e).catch(function (e) {
                    return console.debug("list added fetching error", e);
                  });
              });
            },
            [t, r, e, n]
          ),
          Object(o.useEffect)(
            function () {
              Object.keys(n).forEach(function (e) {
                var a = n[e];
                if (a.current && a.pendingUpdate) {
                  var r = Object(hs.c)(
                    a.current.version,
                    a.pendingUpdate.version
                  );
                  switch (r) {
                    case hs.a.NONE:
                      throw new Error("unexpected no version bump");
                    case hs.a.PATCH:
                    case hs.a.MINOR:
                      r >=
                      Object(hs.d)(a.current.tokens, a.pendingUpdate.tokens)
                        ? (t(Es(e)),
                          t(
                            Ye({
                              key: e,
                              content: {
                                listUpdate: {
                                  listUrl: e,
                                  oldList: a.current,
                                  newList: a.pendingUpdate,
                                  auto: !0,
                                },
                              },
                            })
                          ))
                        : console.error(
                            "List at url ".concat(
                              e,
                              " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"
                            )
                          );
                      break;
                    case hs.a.MAJOR:
                      t(
                        Ye({
                          key: e,
                          content: {
                            listUpdate: {
                              listUrl: e,
                              auto: !1,
                              oldList: a.current,
                              newList: a.pendingUpdate,
                            },
                          },
                          removeAfterMs: null,
                        })
                      );
                  }
                }
              });
            },
            [t, n]
          ),
          null
        );
      }
      function oh(e, t) {
        return (
          (n = e + Math.round(Math.random() * Math.max(0, t - e))),
          new Promise(function (e) {
            return setTimeout(e, n);
          })
        );
        var n;
      }
      var ih = (function (e) {
          Object(w.a)(n, e);
          var t = Object(k.a)(n);
          function n() {
            return Object(x.a)(this, n), t.call(this, "Cancelled");
          }
          return n;
        })(Object(R.a)(Error)),
        ch = (function (e) {
          Object(w.a)(n, e);
          var t = Object(k.a)(n);
          function n() {
            return Object(x.a)(this, n), t.apply(this, arguments);
          }
          return n;
        })(Object(R.a)(Error));
      function lh() {
        return (lh = Object(A.a)(
          E.a.mark(function e(t, n, a) {
            var r, o, i, c;
            return E.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        console.debug("Fetching chunk", t, n, a),
                        (e.prev = 1),
                        (e.next = 5),
                        t.aggregate(
                          n.map(function (e) {
                            return [e.address, e.callData];
                          })
                        )
                      );
                    case 5:
                      (i = e.sent),
                        (c = Object(O.a)(i, 2)),
                        (r = c[0]),
                        (o = c[1]),
                        (e.next = 15);
                      break;
                    case 11:
                      throw (
                        ((e.prev = 11),
                        (e.t0 = e.catch(1)),
                        console.debug(
                          "Failed to fetch chunk inside retry",
                          e.t0
                        ),
                        e.t0)
                      );
                    case 15:
                      if (!(r.toNumber() < a)) {
                        e.next = 18;
                        break;
                      }
                      throw (
                        (console.debug(
                          "Fetched results for old block number: "
                            .concat(r.toString(), " vs. ")
                            .concat(a)
                        ),
                        new ch("Fetched for old block number"))
                      );
                    case 18:
                      return e.abrupt("return", {
                        results: o,
                        blockNumber: r.toNumber(),
                      });
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 11]]
            );
          })
        )).apply(this, arguments);
      }
      function uh() {
        var e = Object(u.c)(),
          t = Object(u.d)(function (e) {
            return e.multicall;
          }),
          n = Pi(t.callListeners, 100),
          a = Je(),
          r = Te().chainId,
          i = En(),
          c = Object(o.useRef)(),
          l = Object(o.useMemo)(
            function () {
              return (function (e, t) {
                if (!e || !t) return {};
                var n = e[t];
                return n
                  ? Object.keys(n).reduce(function (e, t) {
                      var a = n[t];
                      return (
                        (e[t] = Object.keys(a)
                          .filter(function (e) {
                            var t = parseInt(e);
                            return !(t <= 0) && a[t] > 0;
                          })
                          .reduce(function (e, t) {
                            return Math.min(e, parseInt(t));
                          }, 1 / 0)),
                        e
                      );
                    }, {})
                  : {};
              })(n, r);
            },
            [n, r]
          ),
          d = Object(o.useMemo)(
            function () {
              return (function (e, t, n, a) {
                return n && a
                  ? e[n]
                    ? Object.keys(t).filter(function (r) {
                        var o = t[r],
                          i = e[n][r];
                        if (!i) return !0;
                        var c = a - (o - 1);
                        return (
                          !(
                            i.fetchingBlockNumber && i.fetchingBlockNumber >= c
                          ) &&
                          (!i.blockNumber || i.blockNumber < c)
                        );
                      })
                    : Object.keys(t)
                  : [];
              })(t.callResults, l, r, a);
            },
            [r, t.callResults, l, a]
          ),
          m = Object(o.useMemo)(
            function () {
              return JSON.stringify(d.sort());
            },
            [d]
          );
        return (
          Object(o.useEffect)(
            function () {
              var t;
              if (a && r && i) {
                var n = JSON.parse(m);
                if (0 !== n.length) {
                  var o,
                    l,
                    u = n.map(function (e) {
                      return et(e);
                    }),
                    d = (function (e, t) {
                      if (t < 1) throw new Error("maxChunkSize must be gte 1");
                      if (e.length <= t) return [e];
                      var n = Math.ceil(e.length / t),
                        a = Math.ceil(e.length / n);
                      return Object(s.a)(Array(n).keys()).map(function (t) {
                        return e.slice(t * a, t * a + a);
                      });
                    })(u, 500);
                  if (
                    (null === (t = c.current) || void 0 === t
                      ? void 0
                      : t.blockNumber) !== a
                  )
                    null === (o = c.current) ||
                      void 0 === o ||
                      null === (l = o.cancellations) ||
                      void 0 === l ||
                      l.forEach(function (e) {
                        return e();
                      });
                  e(at({ calls: u, chainId: r, fetchingBlockNumber: a })),
                    (c.current = {
                      blockNumber: a,
                      cancellations: d.map(function (t, o) {
                        var l = (function (e, t) {
                            var n,
                              a = t.n,
                              r = t.minWait,
                              o = t.maxWait,
                              i = !1;
                            return {
                              promise: new Promise(
                                (function () {
                                  var t = Object(A.a)(
                                    E.a.mark(function t(c, l) {
                                      var u;
                                      return E.a.wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                n = l;
                                              case 1:
                                                return (
                                                  (u = void 0),
                                                  (t.prev = 3),
                                                  (t.next = 6),
                                                  e()
                                                );
                                              case 6:
                                                return (
                                                  (u = t.sent),
                                                  i || (c(u), (i = !0)),
                                                  t.abrupt("break", 24)
                                                );
                                              case 11:
                                                if (
                                                  ((t.prev = 11),
                                                  (t.t0 = t.catch(3)),
                                                  !i)
                                                ) {
                                                  t.next = 15;
                                                  break;
                                                }
                                                return t.abrupt("break", 24);
                                              case 15:
                                                if (
                                                  !(a <= 0) &&
                                                  t.t0 instanceof ch
                                                ) {
                                                  t.next = 19;
                                                  break;
                                                }
                                                return (
                                                  l(t.t0),
                                                  (i = !0),
                                                  t.abrupt("break", 24)
                                                );
                                              case 19:
                                                a--;
                                              case 20:
                                                return (t.next = 22), oh(r, o);
                                              case 22:
                                                t.next = 1;
                                                break;
                                              case 24:
                                              case "end":
                                                return t.stop();
                                            }
                                        },
                                        t,
                                        null,
                                        [[3, 11]]
                                      );
                                    })
                                  );
                                  return function (e, n) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              ),
                              cancel: function () {
                                i || ((i = !0), n(new ih()));
                              },
                            };
                          })(
                            function () {
                              return (function (e, t, n) {
                                return lh.apply(this, arguments);
                              })(i, t, a);
                            },
                            { n: 1 / 0, minWait: 2500, maxWait: 3500 }
                          ),
                          u = l.cancel;
                        return (
                          l.promise
                            .then(function (t) {
                              var i = t.results,
                                l = t.blockNumber;
                              c.current = { cancellations: [], blockNumber: a };
                              var u = d.slice(0, o).reduce(function (e, t) {
                                  return e + t.length;
                                }, 0),
                                s = u + i.length;
                              e(
                                ot({
                                  chainId: r,
                                  results: n
                                    .slice(u, s)
                                    .reduce(function (e, t, n) {
                                      var a;
                                      return (
                                        (e[t] =
                                          null !== (a = i[n]) && void 0 !== a
                                            ? a
                                            : null),
                                        e
                                      );
                                    }, {}),
                                  blockNumber: l,
                                })
                              );
                            })
                            .catch(function (n) {
                              n instanceof ih
                                ? console.debug(
                                    "Cancelled fetch for blockNumber",
                                    a
                                  )
                                : (console.error(
                                    "Failed to fetch multicall chunk",
                                    t,
                                    r,
                                    n
                                  ),
                                  e(
                                    rt({
                                      calls: t,
                                      chainId: r,
                                      fetchingBlockNumber: a,
                                    })
                                  ));
                            }),
                          u
                        );
                      }),
                    });
                }
              }
            },
            [r, i, e, m, a]
          ),
          null
        );
      }
      function sh() {
        var e,
          t = Te(),
          n = t.chainId,
          a = t.library,
          r = Je(),
          i = Object(u.c)(),
          c = Object(u.d)(function (e) {
            return e.transactions;
          }),
          l = n && null !== (e = c[n]) && void 0 !== e ? e : {},
          s = (function () {
            var e = Object(u.c)();
            return Object(o.useCallback)(
              function (t, n) {
                e(Ye({ content: t, key: n }));
              },
              [e]
            );
          })();
        return (
          Object(o.useEffect)(
            function () {
              n &&
                a &&
                r &&
                Object.keys(l)
                  .filter(function (e) {
                    return (function (e, t) {
                      if (t.receipt) return !1;
                      if (!t.lastCheckedBlockNumber) return !0;
                      var n = e - t.lastCheckedBlockNumber;
                      if (n < 1) return !1;
                      var a = (new Date().getTime() - t.addedTime) / 1e3 / 60;
                      return a > 60 ? n > 9 : !(a > 5) || n > 2;
                    })(r, l[e]);
                  })
                  .forEach(function (e) {
                    a.getTransactionReceipt(e)
                      .then(function (t) {
                        var a;
                        t
                          ? (i(
                              Li({
                                chainId: n,
                                hash: e,
                                receipt: {
                                  blockHash: t.blockHash,
                                  blockNumber: t.blockNumber,
                                  contractAddress: t.contractAddress,
                                  from: t.from,
                                  status: t.status,
                                  to: t.to,
                                  transactionHash: t.transactionHash,
                                  transactionIndex: t.transactionIndex,
                                },
                              })
                            ),
                            s(
                              {
                                txn: {
                                  hash: e,
                                  success: 1 === t.status,
                                  summary:
                                    null === (a = l[e]) || void 0 === a
                                      ? void 0
                                      : a.summary,
                                },
                              },
                              e
                            ))
                          : i(Fi({ chainId: n, hash: e, blockNumber: r }));
                      })
                      .catch(function (t) {
                        console.error(
                          "failed to check transaction hash: ".concat(e),
                          t
                        );
                      });
                  });
            },
            [n, a, l, r, i, s]
          ),
          null
        );
      }
      function dh() {
        var e = Object(u.c)();
        return (
          Object(o.useEffect)(
            function () {
              var t,
                n = function (t) {
                  e(gt({ matchesDarkMode: t.matches }));
                },
                a =
                  null === (t = window) || void 0 === t
                    ? void 0
                    : t.matchMedia("(prefers-color-scheme: dark)");
              return (
                e(gt({ matchesDarkMode: a.matches })),
                (null === a || void 0 === a ? void 0 : a.addListener)
                  ? null === a || void 0 === a || a.addListener(n)
                  : (null === a || void 0 === a
                      ? void 0
                      : a.addEventListener) &&
                    (null === a ||
                      void 0 === a ||
                      a.addEventListener("change", n)),
                function () {
                  (null === a || void 0 === a ? void 0 : a.removeListener)
                    ? null === a || void 0 === a || a.removeListener(n)
                    : (null === a || void 0 === a
                        ? void 0
                        : a.removeEventListener) &&
                      (null === a ||
                        void 0 === a ||
                        a.removeEventListener("change", n));
                }
              );
            },
            [e]
          ),
          null
        );
      }
      function mh(e) {
        var t = new f.a(e);
        return (t.pollingInterval = 15e3), t;
      }
      var ph = Object(r.c)("NETWORK");
      function fh() {
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(rh, null),
          i.a.createElement(dh, null),
          i.a.createElement(ah, null),
          i.a.createElement(sh, null),
          i.a.createElement(uh, null)
        );
      }
      "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1),
        l.a.render(
          i.a.createElement(
            o.StrictMode,
            null,
            i.a.createElement(gr, null),
            i.a.createElement(
              r.b,
              { getLibrary: mh },
              i.a.createElement(
                ph,
                { getLibrary: mh },
                i.a.createElement(
                  u.a,
                  { store: $v },
                  i.a.createElement(fh, null),
                  i.a.createElement(
                    Va,
                    null,
                    i.a.createElement(Er, null),
                    i.a.createElement(Tv, null)
                  )
                )
              )
            )
          ),
          document.getElementById("root")
        );
    },
  },
  [[269, 3, 4]],
]);
//# sourceMappingURL=main.aa0bd5d0.chunk.js.map
