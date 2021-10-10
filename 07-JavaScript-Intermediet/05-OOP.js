/// Nomor 01
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah? line pertama = "fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }", sedangkan line kedua = "fun2 {}"
// 2. Apakah hasil dari fun1 dan fun2 itu sama? hasil nya bebeda
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak. anonymous function bisa access this ke object untuk global scope, arrow function tidak bisa access this ke object namun ke luar object sebagai global scope
const obj = {
    fun1: function() {
        console.log("fun1", this);
    },
    fun2: () => {
        console.log("fun2", this);
    }
};

// obj.fun1();
// obj.fun2();

/// Nomor 02
/*
1. Apa itu Encapsulation? Mengapa kita membutuhkannya? Encapsulation adalah cara untuk membatasi akses langsung ke properti atau method ke properti dari sebuah objek, kita membutuhkannya karena ada suatu saat program yang diinginkan tidak dapat menggenali nilai properti saat membuat objek baru dalam kata lain value dalam key object tidak  berubah
2. Apa itu Abstraction? Mengapa kita membutuhkannya? Abstraction adalah teknik menyembunyikan detail tertentu dari sebuah objek/method yang hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
3. Apa itu Inheritance? Mengapa kita membutuhkannya? Inheritence adalah sebuah class mewariskan property dan methodnya ke class lain atau childnya, kita membutuhkannya karena untuk menghindari duplikasi kode program
4. Apa itu Polymorpishm? Mengapa kita membutuhkannya? Polimorfisme adalah kemampuan sebuah objek untuk memutuskan method mana yang akan diterapkan padanya, tergantung letak objek tersebut pada jenjang pewarisan. Kita memerlukannya karena ada disaat program perlu mewariskan methode dengan mengubah behaviour yang berbeda menyesuaikan childclass yang dibuat
*/
/// Nomor 03
class Phone {
    constructor(brand, storage, ram){
        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
    }
    getBrandName(){
        return this.brand
    }
    setBrandName(b){
        this.brand = b
    }
    printSpecification(){
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
    }
    setSpecification(s, r){
        this.storage = s
        this.ram = r
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co");
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();


/// Nomor 04
class Student {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
      this.courseOfferings = [];
    }
    
    getIndexFromCourse(course) {
        const indexOfCourse = this.courseOfferings.findIndex((courseOffering) => {
          return courseOffering.course.getSubject() === course.getSubject();
        });
        return indexOfCourse;
      }

    takeNewCourse(course) {
        // check if course already in array
        const isCourseExist = this.courseOfferings.find((courseOffering) => {
            return courseOffering.course.getSubject() === course.getSubject()
        })
        // push the course into array
        if(this.courseOfferings.length === 0 || !isCourseExist){
            this.courseOfferings.push(new CourseOffering(course))
            course.decreaseQuota();
        }
    }
    
    courseAttendance(course) {
        const indexOfCourse = this.getIndexFromCourse(course);
        if (indexOfCourse >= 0) {
          this.courseOfferings[indexOfCourse].attendance++;
        }
      }

    takeATest(course) {
        const indexOfCourse = this.getIndexFromCourse(course);
        if (indexOfCourse >= 0) {
          if (this.courseOfferings[indexOfCourse].attendance >= course.getAttendance()) {
            this.courseOfferings[indexOfCourse].grade = Math.floor(Math.random() * 100);
          } else {
            console.log("please fill your absent");
          }
        }
    }
    
}
  
class CourseOffering{
   constructor(course){
       this.course = course;
       this.grade = 0
       this.attendance = 0
   }
}
  
class Course{
    constructor(subject, quota, minAttendance){        
        this.subject = subject;
        this.quota = quota;
        this.minAttendance = minAttendance;
    }
    getSubject(){
        return this.subject;
    }
    getAttendance(){
        return this.minAttendance;
    }
    decreaseQuota(){
        return this.quota -= 1
    }
}
  
const johnWatson = new Student("john watson", "male");
  
const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);


johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);


johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);
  
console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);