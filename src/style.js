// khai báo mảng avergelist=[]
var avergelist = [];
const tblBody = document.getElementById("tblBody");

/***
 * Tạo hàm tính giá trị trung bình getAverageList
 * 1. dom tới các thẻ td có class là td-scores --> trả về listScores
 * 2. Duyệt vào từng phần tử trong mảng listscores
 *     2.1 Lấy ra phần tử dựa vào listscores[i]
 *      2.2 lấy ra dtb của phần tử đó (td).innerHtm--> thêm vào mảng avergeList
 *3. xem kết quả avergelist
 * */
function getAverageList() {
  const listScores = document.getElementsByClassName("td-scores");
  for (var i = 0; i < listScores.length; i++) {
    var td = listScores[i];
    avergelist.push(Number(td.innerHTML));
  }
}
getAverageList();
console.log("AvergeList", avergelist);

/** Tìm SV có điểm trung bình cao nhất (findMaxAverage)
 *  0: khai báo biến max= avergeList[0]
 * 1 : khai báo biến index=0;
 * 2: duyệt qua từng phần tử trong mảng avergeList từ i= 1
 *   2.1 lấy ra phần tử dựa vào avergeList[i]
 *   2.2 so sánh phần tử đó với max
 *   2.3 so sánh phần tử đó với max -> gán max = phần tử đó
 *   3. show ra UI kết quả max
 * */

document.getElementById("btnSVCaoDiemNhat").onclick = function () {
  var max = avergelist[0];
  var index = 0;

  for (var i = 1; i < avergelist.length; i++) {
    var diem = avergelist[i];
    if (diem > max) {
      max = diem;
      index = i;
    }
  }
  console.log("max", max);

  //
  const nameStudent = tblBody.rows[index].cells[2].innerHTML;
  const result = nameStudent + " Có điểm tb: " + max;
  document.getElementById("svGioiNhat").innerHTML = result;
};
