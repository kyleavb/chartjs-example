console.log('test');
var ctx = document.getElementById('myChart');
var cat = [];
var nums = [];
var color= [];
// loop through set variables to gorilla and bear and increment variables based on answer

data.forEach(function(item){
    if(cat.indexOf(item.answer) === -1){
        cat.push(item.answer)
        var index = cat.indexOf(item.answer)
        nums[index] = 1
    }else{
        var index = cat.indexOf(item.answer)
        nums[index]++
    }
})

function randomColor(){
    var num1 = Math.floor(Math.random() * 255)
    var num2 = Math.floor(Math.random() * 255)
    var num3 = Math.floor(Math.random() * 255)
    return 'rgba(' + num1 + ', ' + num2 + ', ' + num3 + ', 0.8)'
}

for(i=0; i<cat.length;i++){
    color.push(randomColor());
}

var myChart = new Chart(ctx, {
    type: 'bar',
    data:{
        labels: cat,
        datasets: [{
            label: '# of Votes',
            data: nums,
            backgroundColor: color
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true

                }
            }]
        }
    }
});