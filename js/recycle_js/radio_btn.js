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