const trashData = {
    organic: {
        originImgSrc: "../image/recycle/organic/trash-origin.PNG",
        originName: "음식물 쓰레기",
        trashcanImgSrc: "../image/recycle/organic/trash-can.PNG",
    },
    paper: {
        originImgSrc: "../image/recycle/paper/trash-origin.PNG",
        originName: "종이 쓰레기",
        trashcanImgSrc: "../image/recycle/paper/trash-can.PNG",
    },
    glass: {
        originImgSrc: "../image/recycle/glass/trash-origin.PNG",
        originName: "유리 쓰레기",
        trashcanImgSrc: "../image/recycle/glass/trash-can.PNG",
    },
    plastic: {
        originImgSrc: "../image/recycle/plastic/trash-origin.PNG",
        originName: "플라스틱 쓰레기",
        trashcanImgSrc: "../image/recycle/plastic/trash-can.PNG",
    },
    metal: {
        originImgSrc: "../image/recycle/metal/trash-origin.PNG",
        originName: "캔 쓰레기",
        trashcanImgSrc: "../image/recycle/metal/trash-can.PNG",
    },
};


function getRadioGroup(event) {
    let value = event.target.value;

    let originImgDiv = document.getElementById('trash-img');
    let originNameDiv = document.getElementById('trash-name');
    let trashcanImgDiv = document.getElementById('trash-can');

    const trashInfo = trashData[value];
    originImgDiv.src = trashInfo.originImgSrc;
    originNameDiv.innerHTML = trashInfo.originName;
    trashcanImgDiv.src = trashInfo.trashcanImgSrc;
}