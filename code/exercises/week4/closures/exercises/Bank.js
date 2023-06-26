

const Bank = function() {
    var _money = 500

    const depositCash = function(cash) {
        _money += cash
    }
    
    const checkBalance = () => console.log(_money)   
}  