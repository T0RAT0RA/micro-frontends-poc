<template>
    <div>
        <div class="sidebar">
            <div class="profile">
            </div>
            <div class="links">
                <a href="#/clients">Clients</a>
            </div>
        </div>
        <div class="content">
            <div id="header"></div>
            <div id="main-app"></div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    background-color: #162A62;
    display: block;
    min-height: 100%;
    position: absolute;
    z-index: 999;
    width: 100px;
}

.sidebar .profile {
  display: inline-block;
  margin: 10px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #FFFFFF;
}

.sidebar .links {
    margin-top: 50px;
    border-top: 1px #FFFFFF solid;
}
.sidebar a {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    border-bottom: 1px #FFFFFF solid;
    color: #FFFFFF;
    text-decoration: none;
    padding: 10px 5px;
}
.sidebar a:hover {
    color: rgb(163, 163, 163);
}

.content {
    margin-left: 100px;
}
</style>