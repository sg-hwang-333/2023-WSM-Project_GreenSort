function getRadioGroup(event) {
    let value = event.target.value;

    let originImgDiv = document.getElementById('trash-img');
    let originNameDiv = document.getElementById('trash-name');
    let trashcanImgDiv = document.getElementById('trash-can');

    const trashInfo = trashData[value];
    originImgDiv.src = trashInfo.originImgSrc;
    originNameDiv.innerHTML = trashInfo.originName;
    trashcanImgDiv.src = trashInfo.trashcanImgSrc;
    
    document.getElementById('selBtn1').innerText = trashInfo.selectBtn1Txt;
    document.getElementById('selBtn2').innerText = trashInfo.selectBtn2Txt;

    document.getElementById('step1-1').innerHTML = trashInfo.step1_1;
    document.getElementById('step1-2').innerHTML = trashInfo.step1_2;
    document.getElementById('step1-3').innerHTML = trashInfo.step1_3;
    document.getElementById('step1-4').innerHTML = trashInfo.step1_4;

    document.getElementById('step2-1').innerHTML = trashInfo.step2_1;
    document.getElementById('step2-2').innerHTML = trashInfo.step2_2;
    document.getElementById('step2-3').innerHTML = trashInfo.step2_3;
    document.getElementById('step2-4').innerHTML = trashInfo.step2_4;

}