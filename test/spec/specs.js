describe("jsSort", function() {
  var original = [];
    
    beforeEach(function() {
        original = [
          { id: 1, type: 'deposit',   amount: 1230.45, transactionDate: new Date('1/1/2010') },
          { id: 3, type: 'withdrawl', amount: 20.00, transactionDate: new Date('1/1/2011') },
          { id: 2, type: 'withdrawl', amount: 40.00, transactionDate: new Date('1/1/2011') },
          { id: 4, type: 'withdrawl', amount: 12.63, transactionDate: new Date('1/1/2011') },
          { id: 5, type: 'deposit',   amount: 400.00, transactionDate: new Date('1/1/2011') },
          { id: 6, type: 'withdrawl', amount: 82.21, transactionDate: new Date('4/1/2011') },
          { id: 7, type: 'withdrawl', amount: 6.48, transactionDate: new Date('5/1/2011') },
          { id: 8, type: 'withdrawl', amount: 9.00, transactionDate: new Date('6/1/2011') },
          { id: 9, type: 'withdrawl', amount: 1.25, transactionDate: new Date('7/1/2011') },
          { id: 10, type: 'check',    amount: 523.00, transactionDate: new Date('1/1/2013') }
      ];
    });
  
    it("should not modify original array", function() {
        jsSort.sortByMultiple(original, ['transactionDate', 'type', '[DESC]amount']);

        expect(original[0].id).toEqual(1);
        expect(original[1].id).toEqual(3);
        expect(original[2].id).toEqual(2);
        expect(original[3].id).toEqual(4);
        expect(original[4].id).toEqual(5);
        expect(original[5].id).toEqual(6);
        expect(original[6].id).toEqual(7);
        expect(original[7].id).toEqual(8);
        expect(original[8].id).toEqual(9);
        expect(original[9].id).toEqual(10);
    });
    
    it("should sort by property specified as a string, not an array", function() {
        var sorted = jsSort.sortByMultiple(original, '[DESC]id');

        expect(sorted[0].id).toEqual(10);
        expect(sorted[1].id).toEqual(9);
        expect(sorted[2].id).toEqual(8);
        expect(sorted[3].id).toEqual(7);
        expect(sorted[4].id).toEqual(6);
        expect(sorted[5].id).toEqual(5);
        expect(sorted[6].id).toEqual(4);
        expect(sorted[7].id).toEqual(3);
        expect(sorted[8].id).toEqual(2);
        expect(sorted[9].id).toEqual(1);
    });
    
    it("should sort in Ascending order by default", function() {
        var sorted = jsSort.sortByMultiple(original, 'id');

        expect(sorted[0].id).toEqual(1);
        expect(sorted[1].id).toEqual(2);
        expect(sorted[2].id).toEqual(3);
        expect(sorted[3].id).toEqual(4);
        expect(sorted[4].id).toEqual(5);
        expect(sorted[5].id).toEqual(6);
        expect(sorted[6].id).toEqual(7);
        expect(sorted[7].id).toEqual(8);
        expect(sorted[8].id).toEqual(9);
        expect(sorted[9].id).toEqual(10);
    });
    
    it("should sort in Ascending order when [ASC] specified", function() {
        var sorted = jsSort.sortByMultiple(original, 'id');

        expect(sorted[0].id).toEqual(1);
        expect(sorted[1].id).toEqual(2);
        expect(sorted[2].id).toEqual(3);
        expect(sorted[3].id).toEqual(4);
        expect(sorted[4].id).toEqual(5);
        expect(sorted[5].id).toEqual(6);
        expect(sorted[6].id).toEqual(7);
        expect(sorted[7].id).toEqual(8);
        expect(sorted[8].id).toEqual(9);
        expect(sorted[9].id).toEqual(10);
    });
    
    it("should sort in by floating point values", function() {
        var sorted = jsSort.sortByMultiple(original, '[DESC]amount');

        expect(sorted[0].amount).toEqual(1230.45);
        expect(sorted[1].amount).toEqual(523.00);
        expect(sorted[2].amount).toEqual(400.00);
        expect(sorted[3].amount).toEqual(82.21);
        expect(sorted[4].amount).toEqual(40.00);
        expect(sorted[5].amount).toEqual(20.00);
        expect(sorted[6].amount).toEqual(12.63);
        expect(sorted[7].amount).toEqual(9.00);
        expect(sorted[8].amount).toEqual(6.48);
        expect(sorted[9].amount).toEqual(1.25);
    });
});
