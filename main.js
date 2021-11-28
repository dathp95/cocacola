// courses = new Array(100)
// courses.push('Javascript','Python')
courses = [
    {
        name: 'Javascript',
        coin: 700,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 600,
        isFinish: false,

    },
    {
        name: 'Python',
        coin: 500,
        isFinish: true,

    },
    {
        name: 'Ruby',
        coin: 400,
        isFinish: true,

    }, 
]

// filter: Trả về phần tử mà thỏa mãn điều kiện
Array.prototype.filter2 = function(callback) {
    ouput = []
    for (index in this) {
        if (this.hasOwnProperty(index)) {
            result = callback(this[index],index,this)
            // Chạy gọi myCallback và in ra course           
            if (result) {
                ouput.push(this[index])
            }   
        }
    }
    return ouput
}
function myCallback(course,index, array) {
    return course.coin >500
}
console.log('FILER TRẢ VỀ CÁC PHẦN TỬ ĐẠT ĐK')
result1 = courses.filter2(myCallback)

console.log(result1)

// some: Trả về true/false nếu tối thiểu 1 phần tử thỏa mãn
// Kiểm tra đúng là ngừng vòng lặp

Array.prototype.some2 = function(callback) {
    output = false
    for (index in this) {
        //  Không lấy key trong proto, thuộc tính gần nhất prototype
        if (this.hasOwnProperty(index)) {
            result = callback(this[index],index,this)
            if (result) {
                output =  true
                break
            }
        }
    }
    return output
}
console.log('SOME TRẢ VỀ TRUE/FALSE. CHỈ CẦN 1 ĐK ĐÚNG LÀ ĐÚNG')


result2 = courses.some2(function(course,index,array) {
    return course.isFinish
})
console.log(result2)

// Every trả về đúng hoặc sai, 
//kiếm tra tất cả element trong mảng nếu đúng trả về true. Gặp 1 element false trả về false

Array.prototype.every2 = function(callback) {
    output = true
    for (index in this) {
        if(this.hasOwnProperty(index)){
            result = callback(this[index],index,this)
            //  Toán tử not result = false tức !result = true
            if (!result) {
                output = false
            }
        }
    }
    return output
}

console.log('Every TRẢ VỀ TRUE NẾU CÁC ĐK ĐÚNG HẾT')
result3 = courses.every2(function(element,index,array) {
    return element.coin >399
})
console.log(result3)

num = ['a','b','a','b']
console.log([...(new Set(num))])

// Đệ quy 
array1 = ['Python','Javacript','PHP','C']
console.log(array1.length)

// Tạo hàm và thực thi 
function loop(start, end, callback) {
    if (start <= end) {
        callback(start)
        loop(start+1,end,callback)
    }
}
// Callback
function callBack(index) {
    console.log('index',array1[index])
}

// Chạy hàm
loop(0,array1.length-1,callBack)

function giaithua(number) {
    //  Xác định điểm dừng
    if (number > 0) {
        total = number * giaithua(number-1)
        return total
    }
    return 1

}
a = giaithua(3)
console.log(a)
console.log(document)