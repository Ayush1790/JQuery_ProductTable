let product = [];
$(document).ready(function () {
    $("#update_product").css("display","none");
    $(".close").click(function(){
        $(".error").css("display", "none");
    })
});
//function for adding data
function addData(){
        let sku = $("#product_sku").val();
        let name = $("#product_name").val();
        let price = $("#product_price").val();
        let qty = $("#product_quantity").val();
        if (check("#product_sku", sku, "#product__sk")) { return; }
        if (check("#product_name", name, "#product_nam")) { return; }
        if (check("#product_price", price, "#product_pric")) { return; }
        if (check("#product_quantity", qty, "#product_quantit")) { return; }
        product.push({ sku: sku, name: name, price: price, qty: qty });
        $(".success").css("display", "block");
        displaydata();
        setTimeout(function () {
            $(".success").css("display", "none");
        }, 5000);  
}
// function for validation
function check(id, val, mid) {
    if (val == ""||val<=0) {
        $(id).css("border", "1px solid red");
        var txt2 = $("<span class='msg'></span>").text("* " + id + " should not be empty and greater then zero").css("color", "red");
        $(mid).append(txt2);
        $(".error").css("display", "block");
        return 1;
    } else {
        $(id).css("border", "1px solid black");
        $(mid + "> span:last-child").text("");
        $(".error").css("display", "none");
        return 0;
    }
}
//function for display data
function displaydata() {
    let data = "";
    let count = 0;
    product.forEach(element => {
        data += `<tr><td> ${element.sku}</td>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>${element.qty}</td>
        <td>
        <a href="#" class="edit" onclick='editdata(this)' id=${count}>Edit</a>
        <a href="#" class="delete" onclick='deletedata(this)' id=${count}>Delete</a>
        </td></tr>`
        count++;
    });
    $(".show").html(data);
}
//function for delete data
function deletedata(a) {
    product.splice(a.id, 1);
    displaydata();
    alert("Deleted");
}
//function for edit data
function editdata(a) {
    $("#product_sku").val(product[a.id].sku);
    $("#product_name").val(product[a.id].name);
    $("#product_price").val(product[a.id].price);
    $("#product_quantity").val(product[a.id].qty);
    $("#add_product").css("display","none");
    $("#update_product").css("display","block");
}
//function for update data
function updateData(a){
   let sku = $("#product_sku").val();
        let name = $("#product_name").val();
        let price = $("#product_price").val();
        let qty = $("#product_quantity").val();  
        if (check("#product_sku", sku, "#product__sk")) { return; }
        if (check("#product_name", name, "#product_nam")) { return; }
        if (check("#product_price", price, "#product_pric")) { return; }
        if (check("#product_quantity", qty, "#product_quantit")) { return; }
        product.forEach(element => {
            if(element.sku==sku){
                element.name=name;
                element.price=price;
                element.qty=qty;
            }
        });
        displaydata();
        $("#product_sku").val("");
        $("#product_name").val("");
        $("#product_price").val("");
        $("#product_quantity").val("");
        $("#add_product").css("display","block");
        $("#update_product").css("display","none");
}

