var featureSubmitBtn = document.getElementById("featureSubmitBtn");
var featureLoading = document.getElementById("featureLoading");
var featureForm = document.getElementById("featureForm");

featureSubmitBtn.addEventListener("click", function(){
// Make the loader div visible
featureLoading.classList.remove("human-removed");
// hide the form from user
featureForm.classList.add("human-removed");
});