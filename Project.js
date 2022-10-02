// // Khai báo biến javascript
// var a = "a";
// let b = "b";
// const c = "c";
// if (b == "b") {
//     let b = "bb";
// }
// console.log(a + " " + b + " " + c);

// GOI LODASH
var _ = require('lodash');

//MOT SO VI DU LODASH
console.log(_.difference(["1", 2, 3], [1, 2]));// ['1', 3]
console.log(_.intersection(["1", 2, 3], [1, 2]));// [2]
console.log(_.union(["1", 2, 3], [1, 2]));// ['1', 2, 3, 1]

class SinhVien {
    constructor(MSSV, hoTen, gioiTinh, khoa) {
        this.MSSV = MSSV;
        this.hoTen = hoTen;
        this.gioiTinh = gioiTinh;
        this.khoa = khoa;
    }
    get getMSSV() {
        return this.MSSV;
    }
    set setMSSV(MSSV) {
        this.MSSV = MSSV;
    }
    get getHoTen() {
        return this.hoTen;
    }
    set setHoTen(hoTen) {
        this.hoTen = hoTen;
    }
    get getGioiTinh() {
        return this.gioiTinh;
    }
    set setGioiTinh(gioiTinh) {
        this.gioiTinh = gioiTinh;
    }
    get getKhoa() {
        return this.khoa;
    }
    set setKhoa(khoa) {
        this.khoa = khoa;
    }
    printSV() {
        console.log(this);
    }
}

var mangSV = [];

//LODASH VOI ARRAY
console.log(mangSV);// []
console.log(_.isNull(mangSV));// false
console.log(_.isUndefined(mangSV));// false
console.log(_.isObject(mangSV));// true

for(let i = 1; i <= 5; i++) {
    let sv = new SinhVien();
    sv.setMSSV = "MS" + i;
    sv.setHoTen = "Ho ten " + i;
    sv.setGioiTinh = i % 2 == 0 ? "Nam" : "Nu";
    sv.setKhoa = "CNTT";
    mangSV.push(sv);
}

// mangSV.forEach(function printElement(element) {
//     element.printSV();
// });

// mangSV.forEach(function (element) {
//     element.printSV();
// });

// mangSV.forEach((element) => {
//     element.printSV();
// });

let s = mangSV[0].getHoTen;
console.log(s + " vs "  + _.camelCase(s));// Ho ten 1 vs hoTen1
console.log(s + " vs "  + _.capitalize(s));// Ho ten 1 vs Ho ten 1

console.log(_.isEqual(mangSV[0], mangSV[1]));// false
var object = {'user': 'fred'};
var other = {'user': 'fred'};
console.log(object == other);// false ???
console.log(_.isEqual(object, other));// true

console.log(_.first(mangSV)); //SV1
console.log(_.last(mangSV)); //SV5
console.log(_.find(mangSV, function(element) {
    return _.endsWith(element.getHoTen, "1");
})); //SV1
console.log(_.findIndex(mangSV, function(element) {
    return element.getGioiTinh == "Nu";
})); //0

console.log(_.shuffle(mangSV));//tron danh sach


// IMPORT EXPORT
const funcs = require('./ExampleModule');

console.log(funcs.add(1, 2));
// console.log(funcs.time(1, 2));
 