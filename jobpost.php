<?php

    $companyName = $_POST['companyName'];
    $companyWebsite = $_POST['companyWebsite'];
    $jobProfile = $_POST['jobProfile'];
    $package = $_POST['package'];
    $eligibleCourses = $_POST['eligibleCourses'];
    $date = $_POST['date'];
    $description = $_POST['description'];
    $selectionProcess = $_POST['selectionProcess'];
    $registrationLink = $_POST['registrationLink'];
    $jobLocation = $_POST['jobLocation'];
    $contactPerson = $_POST['contactPerson'];
    $lastDate = $_POST['lastDate'];
    
    //Database connection
    $conn =  new mysqli('localhost','root','','cad');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into jobpost(CompanyName, CompanyWebsite, jobProfile, package, EligibleCourses, date, description, selectionProcess, registrationLink, jobLocation, contactPerson, lastDate) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssssssssss",$companyName, $companyWebsite, $jobProfile, $package, $eligibleCourses, $date, $description, $selectionProcess, $registrationLink, $jobLocation, $contactPerson, $lastDate);
        $stmt->execute();
        echo "Job Posted Successfully !";
        $stmt->close();
        $conn->close();
    }
    
?>