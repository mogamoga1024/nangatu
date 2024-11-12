
const $mondai = document.querySelector("#mondai");
const $message = document.querySelector("#message");
const monthButtons = document.querySelectorAll('input[name="month"]');

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

    // 同じ問題を連続で出させない
    if (mondai.kotae === kitaiKotae) {
        createMondai();
        return;
    }

    $mondai.innerText = mondai.mondai;
    kitaiKotae = mondai.kotae;

    $message.innerText = "何月？🤔";
}

createMondai();

monthButtons.forEach($button => {
    $button.addEventListener("change", e => {
        const selectedKotae = e.target.value;
        if (selectedKotae === kitaiKotae) {
            $message.innerText = "正解！😆";
            $button.parentElement.style.pointerEvents = "none";
            setTimeout(() => {
                $button.checked = false;
                $button.parentElement.style.pointerEvents = "";
                createMondai();
            }, 1000);
        }
        else {
            $message.innerText = "不正解😢";
        }
    });
});

