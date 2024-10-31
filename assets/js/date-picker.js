
function openDatepicker(event) {
    const dateInput = document.getElementById('datepicker');
    dateInput.style.display = 'block';
    dateInput.focus();

    dateInput.onblur = () => {
        dateInput.style.display = 'none';
    };

    setTimeout(() => {
        dateInput.style.display = 'none';
    }, 2);
}

function openDatepicker1(event) {
    const dateInput = document.getElementById('datepicker');
    dateInput.style.display = 'block';
    dateInput.focus();

    dateInput.onblur = () => {
        dateInput.style.display = 'none';
    };

    setTimeout(() => {
        dateInput.style.display = 'none';
    }, 2);
}

$(function () {
    $("#datepicker").datepicker({
        dateFormat: "MM yy",
        changeMonth: true,
        changeYear: true,
        onClose: function(dateText, inst) {
            document.querySelector('.filter-date span').textContent = dateText;
        }
    });
});
