// Nhập mảng
// Khai báo mảng avergeList=[]
var averageList = [];
const tblBody = document.getElementById("tblBody");
function getAverageList() {
  const listScores = document.getElementsByClassName("td-scores");
  for (var i = 0; i < listScores.length; i++) {
    var td = listScores[i];
    averageList.push(Number(td.innerHTML));
  }
}
getAverageList();
console.log("avergeList", averageList);
/** Tìm điểm tb cao nhất*/
document.getElementById("btnSVCaoDiemNhat").onclick = function () {
  var max = averageList[0];
  //   gán max vào giá trị đầu tiên --> index=0;
  var index = 0;
  for (var i = 1; i < averageList.length; i++) {
    var diem = averageList[i];
    if (diem > max) {
      max = diem;
      // dong thoi cap nhat index theo  vị trí i
      index = i;
    }
    console.log("Max: ", max);
  }
  const nameStudent = tblBody.rows[index].cells[2].innerHTML;
  const result = nameStudent + " có điểm trung bình là: " + max;
  //const nameStudent = tblBody.rows[index].cells[2].innerHTML;
  // const result = nameStudent + " Có điểm trung bình là: " + max;
  document.getElementById("svGioiNhat").innerHTML = result;
};
// diem sv thap nhat
document.getElementById("btnSVThapDiemNhat").onclick = function () {
  var min = averageList[0];
  var index = 0;
  for (var i = 1; i < averageList.length; i++) {
    var diem = averageList[i];
    if (diem < min) {
      min = diem;
      index = i;
    }
    console.log("Min: ", min);
    const nameStudentMin = tblBody.rows[index].cells[2].innerHTML;
    result = nameStudentMin + " có điểm trung bình " + min;
    document.getElementById("svYeuNhat").innerHTML = result;
  }
};
