// Khai báo mảng avergeList=[]
var averageList = [];
const tblBody = document.getElementById("tblBody");
/**
 * Tạo hàm để lấy danh sách  của các học sinh (getAverageList)
 *1. dom tới các thẻ td có class là td-scores --> trả về listscore
 *2. duyệt qua từng phần tử trong mảng listscores
 2.1 lấy phần tử dựa vào listScores [i]
 *2.2 lấy đtb của phần tử đó (td.innerHtml) --> thêm vào mảng avergeList

 * */
// Xuất danh sách điểm tb
function getAverageList() {
  const listScores = document.getElementsByClassName("td-scores");
  console.log("ListScores: ", listScores);
  for (var i = 0; i < listScores.length; i++) {
    var td = listScores[i];
    averageList.push(Number(td.innerHTML));
  }
}
getAverageList();
console.log("avergeList: ", averageList);

/**Tìm SV có điểm tb cao nhất
 * 0. Khai báo biến max =avergeList[]
 * 1. Duyệt qua từng phần tử trong mảng avergeList từ i=1;
 * 1.1 lấy ra phần tử dựa vào averList[i]
 * 1.2 so sánh phần tử đó với max
 * 1.3 nếu phần đó lớn hơn max --> gán max = phần tử đó
 * 2.show kết quả max
 *
 *
 */
document.getElementById("btnSVCaoDiemNhat").onclick = function () {
  var max = averageList[0];
  //   max là đầu tiên --> index=0
  var index = 0;
  for (var i = 1; i < averageList.length; i++) {
    var diem = averageList[i];
    if (diem > max) {
      max = diem;
      //   cập nhật index theo i
      index = i;
    }
    console.log("Max: ", max);
    const nameStudent = tblBody.rows[index].cells[2].innerHTML;
    const result = nameStudent + " có điểm trung bình là: " + max;
    document.getElementById("svGioiNhat").innerHTML = result;
  }
};

// trả về các dòng tr
// console.log("tblbody:", tblBody.rows);
// console.log("tblbody:", tblBody.rows[5].cells[2].innerHTML);
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
    result = nameStudentMin + " Có điểm trung bình " + min;
    document.getElementById("svYeuNhat").innerHTML = result;
  }
};
document.getElementById("btnSoSVGioi").onclick = function () {
  var hsgioi = averageList[0];
  var index = 0;
  var count = 0;
  for (var i = 1; i < averageList.length; i++) {
    var diem = averageList[i];
    if (diem >= 8) {
      count++;
    }
    console.log("Tong hs gioi: ", count);
    const result = "Có: " + count + "  hs giỏi";
    document.getElementById("soSVGioi").innerHTML = result;
  }
};

/**
 * ds sv dtb>5
 * 0. tạo biến content=""
 *1. duyệt qua các phần tử trong mảng avergeList
 *  1.1 lấy ra phần tử dựa vào avergeList[i];
 *  1.2 so sánh phần tử đó với 5;
 *  1.3 nếu phần đó lớn hơn 5 -->
 *    1.3.1 lấy ra tên của sv dựa vào tblBody,rows[i].cells[2].innerHTML
 *    1.3.2 thêm tên sv vào content (content +=)
 *    1.3.3 them phan tu vao bien content (content+=)
 * */
document.getElementById("btnSVDiemHon5").onclick = function () {
  // tạo câu thông báo
  var content = "";
  for (var i = 0; i < averageList.length; i++) {
    var scores = averageList[i];
    if (scores > 5) {
      var nameStudent = tblBody.rows[i].cells[2].innerHTML;
      content += "<p>Tên SV: " + nameStudent + " -DTB" + scores + "</p>";
    }
  }
  document.getElementById("dsDiemHon5").innerHTML = content;
};

/***sap sep dtb tăng dần
 * 1. duyệt qua từng phần tử trong mảng avergeList(i=0)
 *
 * 1.2 duyệt qua từng phần tử torng mảng avergeList (j =i +1)
 *
 * 1.2.2 so sanh currentScore và nextScore
 * 1.2.3 nếu currentScore > nextScore --> hoán đổi vị trí 2 phần tử đó
 * 1.2.4 hoán đổi vị trí của 2 phần tử đó
 * * */
document.getElementById("btnSapXepTang").onclick = function () {
  var content = "";
  for (var i = 0; i < averageList.length - 1; i++) {
    for (var j = i + 1; j < averageList.length; j++) {
      if (averageList[i] > averageList[j]) {
        var temp = averageList[i];
        averageList[i] = averageList[j];
        averageList[j] = temp;

        // // Swap corresponding rows in the table
        // var tempRow = tblBody.rows[i].innerHTML;
        // tblBody.rows[i].innerHTML = tblBody.rows[j].innerHTML;
        // tblBody.rows[j].innerHTML = tempRow;
      }
    }
  }
  // Update the displayed averageList and name
  // var content = "";
  // for (var i = 0; i < averageList.length; i++) {
  //   var nameStudent = tblBody.rows[i].cells[2].innerHTML;
  //   // content +=
  //   //   "Tên học sinh: " +
  //   //   nameStudent +
  //   //   " có điểm là: " +
  //   //   averageList[i] +
  //   //   "<br>";
  // }

  document.getElementById("dtbTang").innerHTML = temp;
};
