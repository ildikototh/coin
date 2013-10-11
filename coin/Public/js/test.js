test("validation test", function () {
    equal(validate('4'), true, 'input param was 4');
    equal(validate('85'), true, 'input param was 85');
    equal(validate('197p'), true, 'input param was 197p');
    equal(validate('2p'), true, 'input param was 2p');
    equal(validate('1.87'), true, 'input param was 1.87');
    equal(validate('£1.23'), true, 'input param was 197p');
    equal(validate('£2'), true, 'input param was 2p');
    equal(validate('10'), true, 'input param was 1.87');
    equal(validate('£1.87p'), true, 'input param was 197p');
    equal(validate('£1p'), true, 'input param was 2p');
    equal(validate('£1.p'), true, 'input param was 1.87');
    equal(validate('£1.87p'), true, 'input param was 1.87p');
    equal(validate('001.41p'), true, 'input param was 001.41p');
    equal(validate('4.235p'), true, 'input param was 4.235p');
    equal(validate('£1.257422457p'), true, 'input param was £1.257422457p');
    equal(validate(''), false, 'input was empty');
    equal(validate('1x'), false, 'input was non numeric');
    equal(validate('£1x.0p'), false, 'input was non-numeric');
    equal(validate('£p'), false, 'missing numeric');
});

test("converting test", function () {
    equal(amountConvert('4'), 4, 'input param was 4');
    equal(amountConvert('85'), 85, 'input param was 85');
    equal(amountConvert('197p'), 197, 'input param was 197p');
    equal(amountConvert('2p'), 2, 'input param was 2p');
    equal(amountConvert('1.87'), 187, 'input param was 1.87');
    equal(amountConvert('£1.23'), 123, 'input param was 197p');
    equal(amountConvert('£2'), 200, 'input param was £2');
    equal(amountConvert('10'), 10, 'input param was 10');
    equal(amountConvert('£1.87p'), 187, 'input param was £1.87p');
    equal(amountConvert('£1p'), 100, 'input param was £1p');
    equal(amountConvert('£1.p'), 100, 'input param was £1.p');
    equal(amountConvert('£1.87p'), 187, 'input param was £1.87p');
    equal(amountConvert('001.41p'), 141, 'input param was 001.41p');
    equal(amountConvert('4.235p'), 424, 'input param was 4.235p');
    equal(amountConvert('£1.257422457p'), 126, 'input param was £1.257422457p');
});