// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

let submitBtn = document.getElementById("Submit button");
let contactPage = document.getElementById("Contact Page")

submitBtn.addEventListener("click", () => { contactPage.style.fontSize = "24px";

contactPage.innerHTML = "<p> Your feedback and comments are so valuable to our company, Thank you!</p>";
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.





