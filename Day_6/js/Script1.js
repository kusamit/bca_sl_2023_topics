let item_value=30000
discount_percent=0.035
let redeem_coin=20
let delivery_distance=120
let vat=0.13
let discount_voucher="20kvc"
//discount
function discount()
{
let discount_amount=item_value*discount_percent
return discount_amount
}
console.log("Discount Amount "+ discount())

//vat amount
function vatamt()
{
    let vatamount=(item_value-discount())*vat
    return vatamount
}
console.log("the vat amount is "+ vatamt())

//total redeem amount
function redeemamout()
{
    let reedemvalue=(0.5/2)*redeem_coin
    return reedemvalue
}
console.log("Total Reedem Amount "+ redeemamout())

//delivery charge
let deliveryamount=0
let deliverycharge=0
function delivery()
{
 if(delivery_distance<10)
 {
    deliveryamount=60
 }
 else
 {
    for(let i=10;i<delivery_distance;i++)
    {
        deliverycharge=2+deliverycharge
    }
    deliveryamount=60+deliverycharge
 }
 return deliveryamount
}
console.log(delivery())

//voucher discount

function voucherdiscount()
{
let amt=0
switch(discount_voucher)
{
    case "1kvc":
        amt=100
        break;
    case "10kvc":
        amt=500
        break;
    case "20kvc":
        amt=1500
        break;
    default:
        amt=0
        break;
}
return amt
}
console.log("Voucher Discount is "+ voucherdiscount(discount_voucher))