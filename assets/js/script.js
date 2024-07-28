$(document).ready(function() {
    
    $("#insertForm").submit(function(event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var salary = $("#salary").val();
        var job_role = $("#job_role").val();

        $.ajax({
            url: "process_insert.php",
            type: "POST",
            data: {
                name: name,
                email: email,
                address: address,
                salary: salary,
                job_role: job_role
            },
            success: function(dataResult) {
                var dataResult = JSON.parse(dataResult);
                if (dataResult.statusCode == 200) {
                    alert("Data inserted successfully!");
                    window.location.href = "insert.php";
                } else {
                    alert("Error occurred!");
                }
            }
        });
    });

    $("#updateForm").submit(function(event) {
        event.preventDefault();
        var customer_id = $("#customer_id").val();
        var name = $("#name").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var salary = $("#salary").val();
        var job_role = $("#job_role").val();

        $.ajax({
            url: "process_update.php",
            type: "POST",
            data: {
                customer_id: customer_id,
                name: name,
                email: email,
                address: address,
                salary: salary,
                job_role: job_role
            },
            success: function(dataResult) {
                var dataResult = JSON.parse(dataResult);
                if (dataResult.statusCode == 200) {
                    alert("Data updated successfully!");
                    window.location.href = "update.php";
                } else {
                    alert("Error occurred!");
                }
            }
        });
    });

    $("#deleteForm").submit(function(event) {
        event.preventDefault();
        var customer_id = $("#customer_id").val();

        $.ajax({
            url: "process_delete.php",
            type: "POST",
            data: {
                customer_id: customer_id
            },
            success: function(dataResult) {
                var dataResult = JSON.parse(dataResult);
                if (dataResult.statusCode == 200) {
                    alert("Data deleted successfully!");
                    window.location.href = "delete.php";
                } else {
                    alert("Error occurred!");
                }
            }
        });
    });
});
