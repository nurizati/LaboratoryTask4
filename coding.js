function checkstatus() {
    customername = document.getElementById("name").value;
    category1 = document.getElementById("B40").value;
    category2 = document.getElementById("T20").value;
    category3 = document.getElementById("M40").value;
    //B40 Category 1
    if (document.getElementById("B40").checked) {
        if (document.getElementById("Mother").checked &&
            document.getElementById("Father").checked) {//An Ophanage
            alert(customername + "\n" + category1 + "\n" + "You will get RM 500");
            return false;
        }
        if (document.getElementById("Father").checked ||
            document.getElementById("Mother").checked) {//Single Parents
            alert(customername + "\n" + category1 + "\n" + "You will get RM 300");
            return false;
        }
        alert(customername + "\n" + category1 + "\n" + "You will get RM 100");//Both Parents
        return false;
    }
    //T20 Category 2
    if (document.getElementById("T20").checked) {
        if (document.getElementById("Mother").checked &&
            document.getElementById("Father").checked) {//An Ophanage
            alert(customername + "\n" + category2 + "\n" + "You will get RM 500");
            return false;
        }
        if (document.getElementById("Father").checked ||
            document.getElementById("Mother").checked) {//Single Parents
            alert(customername + "\n" + category2 + "\n" + "You will get RM 300");
            return false;
        }
        alert(customername + "\n" + category2 + "\n" + "You are not eligible!");//Both Parents
        return false;
    }
    //M40 Category 3
    else if (document.getElementById("M40").checked) {
        if (document.getElementById("Mother").checked &&
            document.getElementById("Father").checked) {//An Ophanage
            alert(customername + "\n" + category3 + "\n" + "You will get RM 500");
            return false;
        }
        if (document.getElementById("Father").checked ||
            document.getElementById("Mother").checked) {//Single Parents
            alert(customername + "\n" + category3 + "\n" + "You will get RM 300");
            return false;
        }
        alert(customername + "\n" + category3 + "\n" + "You are not eligible!");
        return false;
    }
    else
        alert("Please Complete The Form!");
    return false;
}