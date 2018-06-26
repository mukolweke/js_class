describe('Calculator', function() {


    //Numbers from 1-100, 5 round of test
    for (var i=2; i>0; i--){

        var num_1 = Math.floor((Math.random()*10) + 1), //document.getElementById('num1').value; //
            num_2 = Math.floor((Math.random()*10) + 1);

        it('should add ' + num_1 + ' plus ' +num_2 + ' and be equals to ' + (num_1 + num_2), function () {
            expect(Calculator.add(num_1, num_2)).toBe(num_1 + num_2);
        });

    }
    // not add strings

        var num_1 = "Hello", //Math.floor((Math.random() * 100) + 1),
            num_2 = 8; //Math.floor((Math.random() * 100) + 1);

        it('should not add ' + num_1 + ' and ' +num_2 + '; '+ num_1 +' is a ' + (typeof num_1), function () {
            expect("Value one is "+ (typeof num_1)+ ", NaN");
        });


});

let Calculator = {
    add: function (addnum1, addnum2) {
        return addnum1 + addnum2; // sum
    },
};