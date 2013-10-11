function validate(element) {
    if (element.match(/^£?(\d)+(.)?(\d)*(p)?$/)) {
        return true;
    } else {
        return false;
    }
}

