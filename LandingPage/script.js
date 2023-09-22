// Ambil elemen-elemen HTML yang diperlukan
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("btn-search");

// Tambahkan event listener ke tombol pencarian
searchButton.addEventListener("click", function () {
    // Fokuskan kursor ke input pencarian
    searchInput.focus();
});

function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return {
        name,
        email,
        city,
        zipCode,
        status,
    };
}

function isNumber(inputString) {
    return !isNaN(inputString);
}

function checkboxIsChecked() {
    return document.getElementById("status").checked;
}

function validateFormData(formData) {
    if (
        formData &&
        isNumber(formData.zipCode) &&
        checkboxIsChecked(formData.status)
    ) {
        return true;
    }
    return false;
}

function submit() {
    const formData = handleGetFormData();
    const isFormValid = validateFormData(formData);
    const warning = document.getElementById("warning");
    if (!isFormValid) {
        warning.style.visibility = "visible";
        warning.innerHTML = "Periksa form anda sekali lagi";
    } else {
        warning.style.visibility = "hidden";
        warning.innerHTML = "";
    }
}


document.getElementById("submit-form").addEventListener("click", function (e) {
    e.preventDefault();
    submit();
});