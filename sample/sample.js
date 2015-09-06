var viewModel = {
            
    original: [
        { id: 1, type: 'deposit',   amount: ko.observable(1230.45), transactionDate: new Date('1/1/2010') },
        { id: 3, type: 'withdrawl', amount: ko.observable(20.00), transactionDate: new Date('1/1/2011') },
        { id: 2, type: 'withdrawl', amount: ko.observable(40.00), transactionDate: new Date('1/1/2011') },
        { id: 4, type: 'withdrawl', amount: ko.observable(12.63), transactionDate: new Date('1/1/2011') },
        { id: 5, type: 'deposit',   amount: ko.observable(400.00), transactionDate: new Date('1/1/2011') },
        { id: 6, type: 'withdrawl', amount: ko.observable(82.21), transactionDate: new Date('1/1/2011') },
        { id: 7, type: 'withdrawl', amount: ko.observable(6.48), transactionDate: new Date('1/1/2011') },
        { id: 8, type: 'withdrawl', amount: ko.observable(9.00), transactionDate: new Date('1/1/2011') },
        { id: 9, type: 'withdrawl', amount: ko.observable(1.25), transactionDate: new Date('1/1/2011') },
        { id: 10, type: 'check',    amount: ko.observable(523.00), transactionDate: new Date('1/1/2013') }
    ],
    sorted: []
}

viewModel.sorted = jsSort.sortByMultiple(viewModel.original, ['transactionDate', 'type', 'amount'])

ko.applyBindings(viewModel);