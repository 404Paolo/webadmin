<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <title>Web Admin</title>
</head>
<body class=".main">
    <div class="top-section">
        <div class="top-profilegroup">
            <img class="circle-small" src="assets/ic_profpic.webp">
            <div>Juan Dela Cruz</div>
            <div onclick="toggleVisibility('.dialog-profile')">&#x23F7;</div>
            <table class="dialog-profile">
                <colgroup>
                    <col style="width: 20%;">
                    <col style="width: 80%;">
                </colgroup>
                <tr>
                    <th style="border-radius: 20px 0 0 0">&#x26ED;</th>
                    <th style="border-radius: 0 20px 0 0">Profile settings</th>
                </tr>
                <tr>
                    <th style="border-radius: 0 0 0 20px">&#x23F5;</th>
                    <th style="border-radius: 0 0 20px 0">Log out</th>
                </tr>
            </table>
        </div>
        <div class="top-midgroup">
            <button id="users" style="border-bottom: 3px solid #1436a1">Users</button>
            <button id="med-catalog">Med Catalog</button>
            <button id="inventory" style="border: 0;">Inventory</button>
        </div>
        <div class="top-searchgroup">
            <img src="">
            <form>
                <input name="search_string" id="search_string" type="search" placeholder="search" class="searchbar"></input>
            </form>
        </div>
    </div>
    <div class="mid-section">
        <div class="records-group">
            <div class="records-header" style="padding: 5px 0px 0px 10px;">
                <div class="confirmselection-icon">&check;</div>
            </div>
            <div class="records-header">Photo</div>
            <div class="records-header">Full Name</div>
            <div class="records-header">Email</div>
            <div class="records-header">Branch</div>
            <div class="records-header">Role</div>
            <div class="records-header">Created On</div>
            <div class="records-header" style="position: relative">
                Created By
                <button class="button-options" onclick="toggleVisibility('.dialog-options')" title="Options">&#8942;</button>
                <table class="dialog-options">
                    <colgroup>
                        <col style="width: 20%;">
                        <col style="width: 80%;">
                    </colgroup>
                    <tr>
                        <th style="border-radius: 20px 0 0 0">&plus;</th>
                        <th style="border-radius: 0 20px 0 0" onclick="startSelection()">Add user</th>
                    </tr>
                    <tr>
                        <th>&minus;</th>
                        <th>Remove users</th>
                    </tr>
                    <tr>
                        <th>&#x270E;</th>
                        <th>Edit users info</th>
                    </tr>
                    <tr>
                        <th>&check;</th>
                        <th>Grant user privilege</th>
                    </tr>
                    <tr>
                        <th style="border-radius: 0 0 0 20px">&Cross;</th>
                        <th style="border-radius: 0 0 20px 0">Revoke user privilege</th>
                    </tr>
                </table>
            </div>
            <?php
            for($i = 0; $i < 3; $i++){?>
                <div class="records-row selection-icon" id="selection<?php echo $i?>" onclick="toggleSelection('#selection<?php echo $i?>')">&cir;</div>
                <div class="records-row"> <img class="circle-small" src="assets/ic_profpic.webp"></div>
                <div class="records-row"> Christian Paolo Reyes</div>
                <div class="records-row"> cpaolo852@gmail.com</div>
                <div class="records-row"> Fairview</div>
                <div class="records-row"> Manager</div>
                <div class="records-row"> May 10, 2024</div>
                <div class="records-row"> Juan Dela Cruz</div><?php
            }?>
        </div>
    </div>
</body>
</html> 