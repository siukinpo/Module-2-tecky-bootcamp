function sum(nums) {
    //<--- Type error here if you write nums:Array
    var total = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        total += num;
    }
    return total;
}
function identity(arg) {
    return arg;
}
identity("wfdsfds");
identity(1234);
//# sourceMappingURL=03-generic.js.map