
const $mondai = document.querySelector("#mondai");
const $message = document.querySelector("#message");
const $monthRadios = document.querySelectorAll('input[name="month"]');

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

$monthRadios.forEach(radio => {
    radio.addEventListener("change", e => {
        const selectedKotae = e.target.value;
        console.log('選択された月:', selectedKotae);
        // 必要に応じて他の処理を追加
    });
});

