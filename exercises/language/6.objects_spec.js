describe('Working with Objects', function() {

  it('creating an object', function() {
    // Create a object literal
    obj = {}
    assert.deepEqual({}, obj);
  })

  it('constructor', function() {
    // Create an object called person using a contructor named Person
    function Person() {
    }
    var person = new Person()

    assert.instanceOf(person, Person);
  })

  it('constructor with params', function() {
    // Create a constructor named Person that recives the <firstName> and the
    // <lastName> as parameters and create a new object called person using it
    function Person(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }
    var person = new Person('Jhon', 'Doe');

    assert.instanceOf(person, Person);
    assert.equal(Person.length, 2);
    assert.property(person, 'firstName');
    assert.property(person, 'lastName');
    assert.equal(person.firstName, 'Jhon');
    assert.equal(person.lastName, 'Doe');
  })

  it('constructor with only one param', function() {
    // Create a constructor named Person that recives the <firstName> and the
    // <lastName> as one parameter and create a new object called person using it
    
    var name = {firstName: 'Jhon', lastName: 'Doe'};
    function Person(person){
      this.firstName = person.firstName;
      this.lastName = person.lastName;
    };
    var person = new Person(name);

    assert.instanceOf(person, Person);
    assert.equal(Person.length, 1);
    assert.property(person, 'firstName');
    assert.property(person, 'lastName');
    assert.equal(person.firstName, 'Jhon');
    assert.equal(person.lastName, 'Doe');
  })

  it('constructor with shared method', function() {
    // Create a constructor named Person that recives the <firstName> and the
    // <lastName> as one parameter, with a method that calculates the fullName
    // of it, and create a new object called person using it

    assert.equal(person.fullName(), 'Jhon Doe');
  })
})
