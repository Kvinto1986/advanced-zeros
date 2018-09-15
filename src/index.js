module.exports = function getZerosCount(number, base) {
    var zeros_one = 0;
    var count=base;
    var tmp = 2;
    var evr=5;
if(base%2!=0 || base==16||  base==64){
    evr=base
}
else if(base==Math.pow(2,count/2))
    evr=base
       else do {
            tmp = count / 2;
            count = tmp
        if(count%2!=0 && count%3==0 &&count!=3)
                evr=count/3
            else evr=tmp
        }
        while (count%2==0)

    for(var i=evr;number/i>=1;i=i*evr) {
        zeros_one = zeros_one + Math.floor(number/ i);
    }
    return zeros_one;
  }
