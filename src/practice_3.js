function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.introduce = function(){
    return 'My name is '+ this.name+'. I am '+this.age+' years old.';
};
function Student(klass){
    Person.call(this,name,age);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor=Student;
Student.prototype.introduce = function(){
    return 'I am a Student. I am at Class '+ this.klass;
};
module.exports = Student;
module.exports = Person;
