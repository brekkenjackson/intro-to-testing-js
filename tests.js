// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


// describe("fooFoo", function () {
//     it('should return true if foo() === 2', function () {
//         let expectedResult = 2;
//         let actualResult = fooFoo();
//         expect(actualResult).toBe(expectedResult);
//     })
// })



describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    })
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when given "Jane".', function () {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    })
    it('should return "Hello, Alex!" when given "Alex".', function () {
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    })
    it('should return "Hello, Pat!" when given "Pat".', function () {
        expect(sayHello("Pat")).toBe('Hello, Pat!');
    })
    it('should return "Hello, World!" when called.', function () {
        expect(sayHello()).toBe('Hello, World!');
    })
    it('should return "Hello, World!" when given a boolean.', function () {
        expect(sayHello(false)).toBe('Hello, World!');
    })
});




