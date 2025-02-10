function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();

    if (itemText) {
        const listItem = document.createElement("li");
        listItem.textContent = itemText;

        // Tambahkan tombol hapus
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        document.getElementById("groceryList").appendChild(listItem);

        // Reset input setelah menambah item
        itemInput.value = "";
    }
}
