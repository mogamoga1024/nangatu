
const $mondai = document.querySelector("#mondai");
const $message = document.querySelector("#message");

const mondaiList = [
    {
        mondai: "Jan",
        kotae: "1"
    },
    {
        mondai: "Feb",
        kotae: "2"
    },
    {
        mondai: "Mar",
        kotae: "3"
    },
    {
        mondai: "Apr",
        kotae: "4"
    },
    {
        mondai: "May",
        kotae: "5"
    },
    {
        mondai: "Jun",
        kotae: "6"
    },
    {
        mondai: "Jul",
        kotae: "7"
    },
    {
        mondai: "Aug",
        kotae: "8"
    },
    {
        mondai: "Sep",
        kotae: "9"
    },
    {
        mondai: "Oct",
        kotae: "10"
    },
    {
        mondai: "Nov",
        kotae: "11"
    },
    {
        mondai: "Dec",
        kotae: "12"
    },
];

let kitaiKotae = "";

function createMondai() {
    const mondai = mondaiList[Math.floor(Math.random() * 12)];

    $mondai.innerText = mondai.mondai;
    kitaiKotae = mondai.kotae;

    $message.innerText = "何月？🤔";
}

createMondai();


