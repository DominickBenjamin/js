var expect = function (val) {
    let obj = {
        toBe: function (otherVal) {
            if (val === otherVal) {
                return true;
            } else {
                throw new Error('Not Equal');
            }
        },
        notToBe: function (otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
                throw new Error('Equal');
            }
        }
    };
    return obj;
}


