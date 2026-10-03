const form = document.getElementById("rsvpForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData();

  formData.append("name", document.getElementById("name").value);
  formData.append("phone", document.getElementById("phone").value);
  formData.append(
    "attendance",
    document.getElementById("attendance").value,
  );
  formData.append("guests", document.getElementById("guests").value);
  formData.append("side", document.getElementById("side").value);
  const iframe = document.createElement("iframe");
  iframe.name = "hidden_iframe";
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  const tempForm = document.createElement("form");
  tempForm.action =
    "https://script.google.com/macros/s/AKfycbyhFQMZS7IaE635I4KAR04ARlKgB7vak7DSHJcat8kipRzE1k2DLXDHzoj4OeZLZZRs/exec";
  tempForm.method = "POST";
  tempForm.target = "hidden_iframe";
  tempForm.style.display = "none";

  for (const [key, value] of formData.entries()) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    tempForm.appendChild(input);
  }

  document.body.appendChild(tempForm);
  tempForm.submit();

  alert("Շնորհակալություն։ Ձեր պատասխանը հաջողությամբ ուղարկվեց։");

  form.reset();

  setTimeout(() => {
    tempForm.remove();
    iframe.remove();
  }, 3000);
});