test( "validation test", function() {
    equal(validate('4'),true , 'input param was 4');
    equal(validate('85'),true , 'input param was 85');
    equal(validate('197p'),true , 'input param was 197p');
    equal(validate('2p'),true , 'input param was 2p');
    equal(validate('1.87'),true , 'input param was 1.87');
    equal(validate('£1.23'),true , 'input param was 197p');
    equal(validate('£2'),true , 'input param was 2p');
    equal(validate('10'),true , 'input param was 1.87');
    equal(validate('£1.87p'),true , 'input param was 197p');
    equal(validate('£1p'),true , 'input param was 2p');
    equal(validate('£1.p'),true , 'input param was 1.87');
    equal(validate('£1.87p'),true , 'input param was 197p');
    equal(validate('001.41p'),true , 'input param was 2p');
    equal(validate('4.235p'),true , 'input param was 1.87');
    equal(validate('£1.257422457p'),true , 'input param was 1.87');
    equal(validate(''),false , 'input was empty');
    equal(validate('1x'),false , 'input was non numeric');
    equal(validate('£1x.0p'),false , 'input was non-numeric');
    equal(validate('£p'),false , 'missing numeric');

});