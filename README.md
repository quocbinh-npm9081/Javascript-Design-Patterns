Giả sử như bạn cần mua một chiếc máy tính, nhưng bạn vẫn chưa quyết định được nên sử dụng máy tính của hãng nào. Ngoài kia bao la bạt ngàn những thương hiệu chất lượng cao như Apple, Lenovo, Asus, HP… Như vậy để có thể chọn được chiếc máy tính ưng ý, bạn sẽ có 2 cách sau:

– Đến showroom của từng hãng, rồi tham khảo từng máy. Bạn đi hết showroom của hãng này tới showroom của hãng khác để xem, rồi nhớ thông tin trong đầu để so sánh chiếc này hợp hơn, chiếc kia rẻ hơn …

– Bạn đến một cửa hàng bày bán tất cả các loại laptop của tất cả các hãng, rồi bạn hỏi tư vấn là với số tiền này, bạn có thể chọn được laptop loại nào. Hay bạn đang muốn xem thử máy của hãng A, bạn nhờ tư vấn viên mang ra giúp bạn một chiếc. Rồi bạn băn khoăn một chiếc của hãng B, bạn lại nhờ tư vấn viên mang ra một chiếc khác.

Rõ ràng là cách thứ hai tiết kiệm thời gian và công sức cho bạn rất nhiều. Đây chính là cách mà mẫu thiết kế Factory hoạt động.

## Mẫu thiết kế factory là gì?

Factory pattern là một mẫu thiết kế thuộc nhóm Khởi tạo. Pattern này sử dụng một interface hay một abstract class mà tất cả các lớp chúng ta cần khởi tạo đối tượng sẽ kế thừa. Factory sẽ định nghĩa việc khởi tạo đối tượng, nhưng đối tượng nào sẽ được tạo thì phụ thuộc vào các lớp con. Do vậy, pattern này còn được gọi với cái tên Virtual Constructor (phương thức khởi tạo ảo).

Factory pattern mang lại những tác dụng:

– Tạo ra một cách khởi tạo object mới

– Che giấu quá trình xử lý logic của phương thức khởi tạo

– Giảm sự phụ thuộc, dễ dàng mở rộng trong trường hợp chưa biết chắc số lượng đối tượng là đã đủ hay chưa. Trong trường hợp chúng ta có thêm lớp con kế thừa Factory, việc gọi đến virtual constructor vẫn không hề thay đổi.

– Giảm khả năng gây lỗi compile, trong trường hợp chúng ta cần tạo một đối tượng mà quên khai báo lớp, chúng ta cũng có thể xử lý lỗi trong Factory và khai báo lớp cho chúng sau.

## Cấu trúc của Factory pattern

Xét theo ví dụ ở đầu bài viết, Factory pattern sẽ có cấu trúc dạng như sau:

## Cấu trúc

```javascript
function Designer(name, type) {
  this.name = name;
  this.type = type;
}

function Developer(name, type) {
  this.name = name;
  this.type = type;
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Designer(name, type);
      case 2:
        return new Developer(name, type);
      default:
        break;
    }
  };
}

function say() {
  console.log("I am a " + this.name + "," + this.type);
}

const employeeFactory = new EmployeeFactory();

const binh = employeeFactory.create("binh", 1);
say.call(binh);
```

> Tóm lại: thay vì bạn khởi tạo tường đối tượng riêng lẻ bằng từ khóa new, hãy tạo 1 class/constructor function chuyên để làm việc khởi tạo đối tượng( bên trong sẽ chứa switch/ Object Literals)
