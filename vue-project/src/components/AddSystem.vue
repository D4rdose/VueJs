<template>
    <div class="choices-modal">
        <div class="container">
            <div class="heading">
                <h1>What Announcement Would You like to Add?</h1>
                
            </div>
            <div class="choices">
                <button class="Next">Next</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.choices-modal {
    display: flex;
    justify-content: center;
    align-items: center;
}
.heading {
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: orange;
}
.container {
    width: 550px;
    height: 300px;
    border: 3px solid orange;
    background-color: black;

}
.choices {
    display: flex;
    align-items: column;
    justify-content: space-between;
    margin: 70px;
}
.Next {
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background-color: black;
    border: 2px solid orange;
    color: orange;
    font-weight: bolder;
}

</style>