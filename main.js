function addListItem() {
    var list = document.getElementById("grocery-list");
    var itemInput = document.getElementById("new-list-item");
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}

function deleteListItem(item) {
    // remove li element (item) from ol element (item.parentNode)
    item.parentNode.removeChild(item);
}

function completeListItem(item) {
    if (item.checked) { // true if the input checkbox is checked
        item.parentNode.style.textDecoration = "line-through";
        // in css, this would be: "text-decoration: line-through"
    } else {
        item.parentNode.style.textDecoration = "none";
        // in css, this would be: "text-decoration: none"
    }
}

// deleteListItem jquery version
$(document).on("click", ".delete-item", function() {
    $(this).parent().remove();
});

// addListItem jquery version
$(document).on("click", "#add-item", function() {
    var list = $("#grocery-list");
    var itemInput = $("#new-list-item");
    list.append("<li><input type='checkbox' class='complete-item'>" + itemInput.val() + " <button class='delete-item'>X</button></li>");
});

// completeListItem jquery version
$(document).on("click", ".complete-item", function() {
    if ($(this).is(":checked")) { // if input checkbox element is "checked"
        $(this).parent().css("text-decoration", "line-through"); // line through the text
    } else {
        $(this).parent().css("text-decoration", "none"); // otherwise leave as is
    }
});